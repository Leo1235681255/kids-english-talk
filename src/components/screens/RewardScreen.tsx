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

/** Crisp vector badge (the old bitmap one went soft at the star's lower edge). */
const GreatJobBadge: React.FC = () => (
  <svg viewBox="0 0 400 450" role="img" aria-label="Great Job!" className="relative mx-auto mt-6 w-[72%] a-bob drop-shadow-2xl">
    <defs>
      <linearGradient id="gj-star" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFD93B" />
        <stop offset="1" stopColor="#FF9F0A" />
      </linearGradient>
      <linearGradient id="gj-inner" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFF59A" />
        <stop offset="1" stopColor="#FFD23F" />
      </linearGradient>
      <linearGradient id="gj-rib" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#B07BFF" />
        <stop offset="1" stopColor="#7A3FE0" />
      </linearGradient>
    </defs>
    <polygon
      points="200.0,55.0 254.1,130.6 342.7,158.6 287.5,233.4 288.2,326.4 200.0,297.0 111.8,326.4 112.5,233.4 57.3,158.6 145.9,130.6"
      fill="url(#gj-star)"
      stroke="#E8890C"
      strokeWidth="30"
      strokeLinejoin="round"
    />
    <polygon
      points="200.0,55.0 254.1,130.6 342.7,158.6 287.5,233.4 288.2,326.4 200.0,297.0 111.8,326.4 112.5,233.4 57.3,158.6 145.9,130.6"
      fill="url(#gj-star)"
      stroke="url(#gj-star)"
      strokeWidth="24"
      strokeLinejoin="round"
    />
    <polygon
      points="200.0,87.0 242.3,146.8 312.2,168.5 268.5,227.2 269.4,300.5 200.0,277.0 130.6,300.5 131.5,227.2 87.8,168.5 157.7,146.8"
      fill="url(#gj-inner)"
      stroke="url(#gj-inner)"
      strokeWidth="14"
      strokeLinejoin="round"
    />
    <image href="/art/pip_fly.png" x="112" y="112" width="176" height="160" />
    <path d="M52 352 L112 352 L126 382 L112 412 L52 412 L72 382 Z" fill="#6D2FD0" />
    <path d="M348 352 L288 352 L274 382 L288 412 L348 412 L328 382 Z" fill="#6D2FD0" />
    <rect x="86" y="338" width="228" height="76" rx="16" fill="url(#gj-rib)" stroke="#5B21B6" strokeWidth="4" />
    <text
      x="200"
      y="390"
      textAnchor="middle"
      fontSize="38"
      fontWeight="700"
      fill="#fff"
      stroke="#4C1D95"
      strokeWidth="1.5"
      style={{ fontFamily: 'Fredoka, Nunito, sans-serif' }}
    >
      Great Job!
    </text>
  </svg>
);

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

        <GreatJobBadge />

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
