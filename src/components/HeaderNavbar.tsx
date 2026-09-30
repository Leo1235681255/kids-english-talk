import React from 'react';
import { ArrowRight, ChevronLeft, Home } from 'lucide-react';
import { ScreenType } from '../types';
import { playPopSound } from '../utils/audio';

export const SCREEN_ORDER: ScreenType[] = [
  'warmup',
  'newwords',
  'listentap',
  'sayit',
  'talktime',
  'play',
  'reward',
  'storytime',
  'review',
  'forparents',
];

interface ScreenMeta {
  title: string;
  pill: string; // tailwind gradient for the title pill
  bg: string; // css class from index.css
}

export const SCREEN_META: Record<Exclude<ScreenType, 'home'>, ScreenMeta> = {
  warmup: { title: 'Warm-up', pill: 'from-amber-400 to-orange-500', bg: 'bg-scene' },
  newwords: { title: 'New Words', pill: 'from-sky-500 to-blue-600', bg: 'bg-blue' },
  listentap: { title: 'Listen & Tap', pill: 'from-violet-500 to-purple-600', bg: 'bg-purple' },
  sayit: { title: 'Say It', pill: 'from-green-500 to-emerald-600', bg: 'bg-green' },
  talktime: { title: 'Talk Time', pill: 'from-pink-500 to-rose-500', bg: 'bg-scene' },
  play: { title: 'Play', pill: 'from-orange-400 to-amber-500', bg: 'bg-orange' },
  reward: { title: 'Reward', pill: 'from-yellow-400 to-amber-500', bg: 'bg-gold' },
  storytime: { title: 'Story Time', pill: 'from-purple-500 to-violet-600', bg: 'bg-park' },
  review: { title: 'Review', pill: 'from-sky-500 to-blue-600', bg: 'bg-blue' },
  forparents: { title: 'For Parents', pill: 'from-teal-500 to-cyan-600', bg: 'bg-teal' },
};

/** Navigation + scoring callbacks handed to every lesson screen by App. */
export interface Nav {
  stars: number;
  onHome: () => void;
  onBack: () => void;
  onNext: () => void;
  /** award stars for the current lesson */
  earn: (n: number) => void;
}

interface FrameProps {
  screen: Exclude<ScreenType, 'home'>;
  stars: number;
  onHome: () => void;
  onBack: () => void;
  onNext?: () => void;
  nextLabel?: string;
  /** makes the next button bounce, e.g. once an activity is finished */
  nextReady?: boolean;
  /** screens that draw their own full-bleed bottom art can hide the dock gradient */
  children: React.ReactNode;
}

/** Portrait "phone" frame shared by all ten lesson screens, matching the mockups. */
export const ScreenFrame: React.FC<FrameProps> = ({
  screen,
  stars,
  onHome,
  onBack,
  onNext,
  nextLabel = 'Tiếp',
  nextReady,
  children,
}) => {
  const meta = SCREEN_META[screen];
  const step = SCREEN_ORDER.indexOf(screen) + 1;

  return (
    <div className="min-h-[100dvh] flex items-center justify-center sm:p-5 bg-[#d8ecfb]">
      <div
        className={`${meta.bg} relative w-full max-w-[430px] h-[100dvh] sm:h-[min(900px,calc(100dvh-40px))] sm:rounded-[2.6rem] sm:border-[9px] sm:border-[#1c2b4d] sm:shadow-[0_30px_70px_rgba(20,40,90,0.35)] overflow-hidden flex flex-col`}
      >
        {/* top bar */}
        <div className="relative z-30 flex items-center justify-between gap-2 px-3 pt-3 pb-1">
          <div
            className={`flex items-center gap-2 rounded-full bg-gradient-to-b ${meta.pill} pl-1.5 pr-4 py-1.5 shadow-[0_4px_0_rgba(0,0,0,0.18)] border-2 border-white/60`}
          >
            <span className="rounded-full bg-black/20 px-2.5 py-0.5 text-white font-black text-lg leading-none">
              {step}/10
            </span>
            <span className="text-white font-black text-xl leading-none drop-shadow-sm">{meta.title}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-sm font-black text-amber-600 shadow">
              <span>⭐</span>
              <span>{stars}</span>
            </div>
            <button
              onClick={() => {
                playPopSound();
                onHome();
              }}
              aria-label="Về trang chủ"
              className="grid place-items-center w-9 h-9 rounded-full bg-white/90 text-sky-600 shadow active:scale-90"
            >
              <Home className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* content */}
        <div className="relative z-10 flex-1 min-h-0 overflow-y-auto hide-scroll pb-24">{children}</div>

        {/* dock */}
        <div className="absolute z-40 bottom-0 inset-x-0 px-4 pb-4 pt-8 flex items-center justify-between pointer-events-none bg-gradient-to-t from-white/55 to-transparent">
          <button
            onClick={() => {
              playPopSound();
              onBack();
            }}
            aria-label="Quay lại"
            className="pointer-events-auto round-btn w-12 h-12 bg-gradient-to-b from-sky-400 to-blue-500"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <div className="flex gap-1.5">
            {SCREEN_ORDER.map((s, i) => (
              <span
                key={s}
                className={`h-2 rounded-full transition-all ${
                  i + 1 === step ? 'w-5 bg-white' : i + 1 < step ? 'w-2 bg-white/90' : 'w-2 bg-white/45'
                }`}
              />
            ))}
          </div>

          {onNext ? (
            <button
              onClick={() => {
                playPopSound();
                onNext();
              }}
              className={`pointer-events-auto pill-btn flex items-center gap-1.5 px-5 py-3 text-lg ${
                nextReady ? 'a-bob' : ''
              }`}
            >
              {nextLabel}
              <ArrowRight className="w-5 h-5" strokeWidth={3} />
            </button>
          ) : (
            <span className="w-12" />
          )}
        </div>
      </div>
    </div>
  );
};
