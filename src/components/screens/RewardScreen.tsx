import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Lesson } from '../../types';
import { Nav, ScreenFrame } from '../HeaderNavbar';
import { Sparkles } from '../ui/Art';
import { LockedSticker, StickerImg } from '../ui/Sticker';
import { lessonFor } from '../../data/lessons';
import { playFanfareSound } from '../../utils/audio';

interface Props {
  lesson: Lesson;
  nav: Nav;
  lessonStars: number;
  collected: string[];
  onComplete: () => void;
}

export const RewardScreen: React.FC<Props> = ({ lesson, nav, lessonStars, collected, onComplete }) => {
  useEffect(() => {
    onComplete();
    playFanfareSound();
    confetti({ particleCount: 140, spread: 100, origin: { y: 0.4 } });
    const t = window.setTimeout(() => confetti({ particleCount: 80, angle: 60, spread: 70, origin: { x: 0, y: 0.6 } }), 500);
    const t2 = window.setTimeout(() => confetti({ particleCount: 80, angle: 120, spread: 70, origin: { x: 1, y: 0.6 } }), 500);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ScreenFrame screen="reward" {...nav} nextReady>
      <div className="relative min-h-full overflow-hidden">
        <div className="sunburst a-spin absolute left-1/2 top-[-6%] w-[150%] aspect-square -translate-x-1/2" />
        <Sparkles n={8} />

        <img
          src="/art/star_badge.png"
          alt="Great Job!"
          className="relative mx-auto mt-6 w-[72%] a-bob drop-shadow-2xl"
          draggable={false}
        />

        <div className="relative mx-auto mt-3 w-fit rounded-full bg-white/90 px-5 py-1.5 text-center text-lg font-black text-amber-600 shadow">
          Bé nhận được {lessonStars} ⭐ trong bài này!
        </div>

        <div className="relative mx-4 mt-5 rounded-[2rem] bg-white/50 px-3 py-3 border-2 border-white/70">
          <div className="mb-2 text-center text-sm font-black text-amber-800">
            Sticker mới: <span className="text-rose-500">{lesson.sticker.name}</span>
          </div>
          <div className="flex items-center justify-around">
            {[1, 2, 3, 4].map((no) => {
              const l = lessonFor(lesson.unitCode, no);
              const isNew = l?.id === lesson.id;
              const has = l && (isNew || collected.includes(l.id));
              return (
                <div key={no} className={isNew ? 'a-pop' : ''}>
                  {l && has ? <StickerImg sticker={l.sticker} className="w-[4.2rem] h-[4.2rem]" /> : <LockedSticker className="w-[4.2rem] h-[4.2rem]" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ScreenFrame>
  );
};
