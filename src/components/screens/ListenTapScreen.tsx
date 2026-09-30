import React, { useEffect, useMemo, useState } from 'react';
import confetti from 'canvas-confetti';
import { Lesson, Word } from '../../types';
import { Nav, ScreenFrame } from '../HeaderNavbar';
import { Bubble, SpeakerBtn, WordArt } from '../ui/Art';
import { FILLERS, wordOf } from '../../data/words';
import { shuffle } from '../../utils/shuffle';
import { playErrorSound, playSuccessSound, speakText } from '../../utils/audio';

interface Question {
  target: Word;
  options: Word[];
}

const buildQuestions = (lesson: Lesson): Question[] => {
  const pool = [...new Set([...lesson.words, ...(lesson.extras ?? []), ...FILLERS])];
  const targets = shuffle(lesson.words).slice(0, 6);
  return targets.map((id) => {
    const wrong = shuffle(pool.filter((p) => p !== id)).slice(0, 3);
    return { target: wordOf(id), options: shuffle([id, ...wrong]).map(wordOf) };
  });
};

const CHEERS = ['Great job!', 'Super!', 'Wow!', 'Yes! Well done!'];

export const ListenTapScreen: React.FC<{ lesson: Lesson; nav: Nav }> = ({ lesson, nav }) => {
  const questions = useMemo(() => buildQuestions(lesson), [lesson]);
  const [qi, setQi] = useState(0);
  const [wrong, setWrong] = useState<string[]>([]);
  const [right, setRight] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [msg, setMsg] = useState('Listen and tap!');
  const finished = qi >= questions.length;
  const q = questions[Math.min(qi, questions.length - 1)];

  const say = () => speakText(q.target.en, { speaker: 'Pip', rate: 0.8 });

  useEffect(() => {
    if (finished) return;
    const t = window.setTimeout(say, 450);
    return () => window.clearTimeout(t);
  }, [qi]); // eslint-disable-line react-hooks/exhaustive-deps

  const pick = (w: Word) => {
    if (right || finished) return;
    if (w.id === q.target.id) {
      const first = wrong.length === 0;
      setRight(w.id);
      playSuccessSound();
      setMsg(CHEERS[qi % CHEERS.length]);
      if (first) {
        nav.earn(1);
        setScore((s) => s + 1);
      }
      window.setTimeout(() => {
        setRight(null);
        setWrong([]);
        setMsg('Listen and tap!');
        setQi((i) => i + 1);
      }, 1100);
    } else {
      playErrorSound();
      setWrong((x) => [...x, w.id]);
      setMsg('Listen again!');
      window.setTimeout(say, 500);
    }
  };

  useEffect(() => {
    if (finished) confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  }, [finished]);

  // after two misses the right card gently glows — a hint, never a penalty
  const hint = wrong.length >= 2 ? q.target.id : null;

  return (
    <ScreenFrame screen="listentap" {...nav} nextReady={finished}>
      <div className="px-4 pt-3">
        {finished ? (
          <div className="mt-10 flex flex-col items-center text-center">
            <img src="/art/pip_heart.png" alt="Pip" className="w-40 a-bob drop-shadow-xl" draggable={false} />
            <div className="card mt-4 px-8 py-5">
              <div className="text-3xl font-black text-[#0f3a8a]">Well done!</div>
              <div className="mt-1 text-lg font-bold text-slate-500">
                Đúng ngay lần đầu: {score}/{questions.length} ⭐
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* question bubble */}
            <Bubble tail="l" className="flex items-center gap-4 px-4 py-3 !rounded-[1.8rem]">
              <SpeakerBtn size="lg" onClick={say} />
              <span className="text-[2.4rem] leading-none font-black">{q.target.en}</span>
            </Bubble>

            <div className="mt-7 grid grid-cols-2 gap-3.5">
              {q.options.map((w) => {
                const isRight = right === w.id;
                const isWrong = wrong.includes(w.id) && !isRight;
                return (
                  <button
                    key={w.id + qi}
                    onClick={() => pick(w)}
                    className={`card aspect-square grid place-items-center p-3 ${isRight ? 'card-ok' : ''} ${
                      isWrong ? 'card-bad opacity-60' : ''
                    } ${hint === w.id && !right ? 'ring-4 ring-amber-300 a-pop' : ''}`}
                  >
                    <WordArt word={w} className="h-[8.2rem] w-[8.2rem]" emojiSize="text-7xl" />
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                {questions.map((_, i) => (
                  <span
                    key={i}
                    className={`h-2.5 w-2.5 rounded-full ${i < qi ? 'bg-white' : i === qi ? 'bg-yellow-300' : 'bg-white/40'}`}
                  />
                ))}
              </div>
              <div className="flex items-end gap-1">
                <Bubble tail="r" className="mb-3 px-3 py-1.5 text-sm">
                  {msg}
                </Bubble>
                <img src="/art/pip_sit.png" alt="Pip" className="w-16 drop-shadow-lg" draggable={false} />
              </div>
            </div>
          </>
        )}
      </div>
    </ScreenFrame>
  );
};
