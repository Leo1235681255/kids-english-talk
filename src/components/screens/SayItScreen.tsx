import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Mic, MicOff, SkipForward } from 'lucide-react';
import { Lesson, Word } from '../../types';
import { Nav, ScreenFrame } from '../HeaderNavbar';
import { Bubble, SpeakerBtn, Stars, WordArt } from '../ui/Art';
import { wordOf } from '../../data/words';
import { useMic } from '../../hooks/useMic';
import { playStarSound, speakText } from '../../utils/audio';

type Item = { kind: 'word'; word: Word; say: string } | { kind: 'sentence'; en: string; vi: string };

const PRAISE: Record<number, string> = {
  3: 'Great! Say it again!',
  2: 'Nice try! Once more!',
  1: 'Try again — you can do it!',
};

export const SayItScreen: React.FC<{ lesson: Lesson; nav: Nav }> = ({ lesson, nav }) => {
  const items = useMemo<Item[]>(
    () => [
      ...lesson.words.map((id): Item => ({ kind: 'word', word: wordOf(id), say: wordOf(id).en })),
      ...lesson.sentences.map((s): Item => ({ kind: 'sentence', en: s.en, vi: s.vi })),
    ],
    [lesson]
  );
  const [i, setI] = useState(0);
  const [finished, setFinished] = useState(false);
  const mic = useMic();
  const awarded = useRef(new Set<number>());
  const item = items[i];
  const text = item.kind === 'word' ? item.say : item.en;

  const hear = () => speakText(text, { speaker: 'Mi', rate: 0.8 });

  useEffect(() => {
    mic.reset();
    const t = window.setTimeout(hear, 350);
    return () => window.clearTimeout(t);
  }, [i]); // eslint-disable-line react-hooks/exhaustive-deps

  const advance = () => {
    if (i + 1 >= items.length) setFinished(true);
    else setI(i + 1);
  };

  const talk = () => {
    if (mic.state === 'listening') return;
    mic.start(text, (stars) => {
      if (!awarded.current.has(i)) {
        awarded.current.add(i);
        nav.earn(1);
      }
      playStarSound();
      window.setTimeout(advance, 1700);
      speakText(PRAISE[stars] ?? PRAISE[3], { speaker: 'Pip', rate: 1 });
    });
  };

  const praise = mic.state === 'done' ? PRAISE[mic.stars] ?? PRAISE[3] : mic.state === 'error' ? 'Mic chưa bật — bé nói to rồi bấm "Bỏ qua" nhé!' : '';

  return (
    <ScreenFrame screen="sayit" {...nav} nextReady={finished}>
      <div className="relative min-h-full px-4 pt-3">
        {finished ? (
          <div className="mt-8 flex flex-col items-center text-center">
            <img src="/art/pip_heart.png" alt="Pip" className="w-40 a-bob drop-shadow-xl" draggable={false} />
            <div className="card mt-4 px-8 py-5">
              <div className="text-3xl font-black text-[#0f3a8a]">Super talking!</div>
              <div className="mt-1 text-base font-bold text-slate-500">Bé đã luyện nói xong {items.length} mục 🎉</div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <SpeakerBtn size="lg" onClick={hear} label="Nghe mẫu" />
              <div className="card flex-1 flex flex-col items-center justify-center px-3 py-4 min-h-[15rem]">
                {item.kind === 'word' ? (
                  <>
                    <WordArt word={item.word} className="h-36 w-36" emojiSize="text-8xl" />
                    <div className="mt-1 text-[2.3rem] leading-none font-black text-[#0f3a8a]">{item.word.en}</div>
                    <div className="text-sm font-bold text-slate-400">{item.word.vi}</div>
                  </>
                ) : (
                  <>
                    <img src="/art/pip_fly.png" alt="" className="h-24 a-sway" draggable={false} />
                    <div className="mt-3 text-[1.9rem] leading-tight text-center font-black text-[#0f3a8a]">{item.en}</div>
                    <div className="mt-1 text-sm font-bold text-slate-400 text-center">{item.vi}</div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-5">
              <div className="flex flex-col items-center">
                <div className="relative">
                  {mic.state === 'listening' && (
                    <>
                      <span className="absolute inset-0 rounded-full bg-emerald-400 a-ring" />
                      <span className="absolute inset-0 rounded-full bg-emerald-400 a-ring" style={{ animationDelay: '0.6s' }} />
                    </>
                  )}
                  <button
                    onClick={talk}
                    aria-label="Bấm để nói"
                    className={`round-btn relative w-24 h-24 ${
                      mic.state === 'error' ? 'bg-gradient-to-b from-slate-400 to-slate-500' : 'bg-gradient-to-b from-green-400 to-emerald-600'
                    }`}
                  >
                    {mic.state === 'error' ? <MicOff className="w-12 h-12" /> : <Mic className="w-12 h-12" strokeWidth={2.4} />}
                  </button>
                </div>
                <div className="mt-1.5 text-sm font-black text-[#0f3a8a]">
                  {mic.state === 'listening' ? 'Listening…' : mic.supported ? 'Tap to speak' : 'Tap & repeat'}
                </div>
              </div>
              <Stars value={mic.state === 'done' ? mic.stars : 0} size="text-4xl" />
            </div>

            <div className="mt-3 flex justify-center">
              <button
                onClick={advance}
                className="flex items-center gap-1.5 rounded-full bg-white/70 px-4 py-1.5 text-sm font-black text-slate-500 active:scale-95"
              >
                <SkipForward className="w-4 h-4" /> Bỏ qua
              </button>
            </div>

            <div className="mt-2 text-center text-xs font-bold text-emerald-900/60">
              {i + 1} / {items.length}
            </div>

            {/* Mi + Pip */}
            <img
              src="/art/mi.png"
              alt="Mi"
              className="absolute left-0 bottom-0 w-[38%] drop-shadow-xl"
              draggable={false}
            />
            <div className="absolute right-2 bottom-2 flex flex-col items-end">
              {praise && (
                <Bubble tail="r" className="mb-3 max-w-[11rem] px-3 py-2 text-center text-sm leading-snug a-pop">
                  {praise}
                </Bubble>
              )}
              <img src="/art/pip_sit.png" alt="Pip" className="w-24 a-bob drop-shadow-lg" draggable={false} />
            </div>
          </>
        )}
      </div>
    </ScreenFrame>
  );
};
