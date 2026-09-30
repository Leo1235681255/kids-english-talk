import { useCallback, useEffect, useState } from 'react';

interface Progress {
  stars: number;
  stickers: string[]; // lesson ids whose sticker is collected
  done: Record<string, number>; // lesson id -> stars earned on best run
}

const KEY = 'ket_progress_v2';
const EMPTY: Progress = { stars: 0, stickers: [], done: {} };

const load = (): Progress => {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...EMPTY, ...JSON.parse(raw) };
  } catch {
    /* storage unavailable */
  }
  return EMPTY;
};

export const useProgress = () => {
  const [p, setP] = useState<Progress>(load);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(p));
    } catch {
      /* ignore */
    }
  }, [p]);

  const addStars = useCallback((n: number) => setP((s) => ({ ...s, stars: s.stars + n })), []);

  const completeLesson = useCallback(
    (lessonId: string, earned: number) =>
      setP((s) => ({
        ...s,
        stickers: s.stickers.includes(lessonId) ? s.stickers : [...s.stickers, lessonId],
        done: { ...s.done, [lessonId]: Math.max(s.done[lessonId] ?? 0, earned) },
      })),
    []
  );

  return { ...p, addStars, completeLesson };
};
