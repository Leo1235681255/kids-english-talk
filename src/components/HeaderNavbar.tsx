import React from 'react';
import { Volume2, VolumeX, Home, Award, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { ScreenType, LessonData } from '../types';
import { playPopSound } from '../utils/audio';

interface HeaderNavbarProps {
  currentScreen: ScreenType;
  onNavigateScreen: (screen: ScreenType) => void;
  onGoHome: () => void;
  activeLesson: LessonData;
  starsTotal: number;
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenStickerBook: () => void;
}

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
  'forparents'
];

export const SCREEN_LABELS: Record<ScreenType, { step: string; title: string; color: string }> = {
  home: { step: '0/10', title: 'Trang chủ', color: 'bg-blue-500' },
  warmup: { step: '1/10', title: 'Warm-up', color: 'bg-amber-500' },
  newwords: { step: '2/10', title: 'New Words', color: 'bg-blue-500' },
  listentap: { step: '3/10', title: 'Listen & Tap', color: 'bg-purple-500' },
  sayit: { step: '4/10', title: 'Say It', color: 'bg-emerald-500' },
  talktime: { step: '5/10', title: 'Talk Time', color: 'bg-rose-500' },
  play: { step: '6/10', title: 'Play', color: 'bg-orange-500' },
  reward: { step: '7/10', title: 'Reward', color: 'bg-yellow-500' },
  storytime: { step: '8/10', title: 'Story Time', color: 'bg-indigo-500' },
  review: { step: '9/10', title: 'Review', color: 'bg-sky-500' },
  forparents: { step: '10/10', title: 'For Parents', color: 'bg-teal-500' },
};

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  currentScreen,
  onNavigateScreen,
  onGoHome,
  activeLesson,
  starsTotal,
  isMuted,
  onToggleMute,
  onOpenStickerBook
}) => {
  const currentIndex = SCREEN_ORDER.indexOf(currentScreen);
  const isLessonScreen = currentIndex !== -1;
  const screenInfo = SCREEN_LABELS[currentScreen] || SCREEN_LABELS.home;

  const handlePrev = () => {
    playPopSound();
    if (currentIndex > 0) {
      onNavigateScreen(SCREEN_ORDER[currentIndex - 1]);
    } else {
      onGoHome();
    }
  };

  const handleNext = () => {
    playPopSound();
    if (currentIndex < SCREEN_ORDER.length - 1) {
      onNavigateScreen(SCREEN_ORDER[currentIndex + 1]);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b-2 border-slate-100 px-3 py-2 sm:px-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        {/* Left: Home / Back */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {currentScreen !== 'home' ? (
            <button
              onClick={handlePrev}
              className="p-2 sm:px-3 sm:py-2 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold flex items-center gap-1 transition-all active:scale-95"
              title="Quay lại"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline text-sm">Trước</span>
            </button>
          ) : null}

          <button
            onClick={() => {
              playPopSound();
              onGoHome();
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-2xl hover:bg-slate-100 transition-all text-slate-700"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden bg-amber-400 p-0.5 border-2 border-amber-500">
              <img src="/assets/sticker_pip.png" alt="Pip" className="w-full h-full object-cover" />
            </div>
            <div className="hidden md:flex flex-col text-left">
              <span className="text-sm font-extrabold text-blue-600 leading-tight">KIDS ENGLISH TALK</span>
              <span className="text-[11px] font-semibold text-slate-500">{activeLesson.title}</span>
            </div>
          </button>
        </div>

        {/* Center: Step Indicator */}
        {isLessonScreen && (
          <div className="flex items-center gap-2">
            <span className={`${screenInfo.color} text-white px-2.5 py-1 rounded-xl text-xs sm:text-sm font-black shadow-sm tracking-wide`}>
              {screenInfo.step}
            </span>
            <span className="text-sm sm:text-base font-extrabold text-slate-800">
              {screenInfo.title}
            </span>
          </div>
        )}

        {/* Right: Stars, Sticker Album, Sound, Next */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Star counter */}
          <div className="flex items-center gap-1 bg-amber-50 border border-amber-300 text-amber-800 px-2.5 py-1 rounded-full font-bold text-xs sm:text-sm shadow-sm">
            <span className="text-amber-500">⭐</span>
            <span>{starsTotal}</span>
          </div>

          {/* Sticker Book button */}
          <button
            onClick={() => {
              playPopSound();
              onOpenStickerBook();
            }}
            className="p-2 rounded-2xl bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 transition-all active:scale-95"
            title="Bộ sưu tập Sticker"
          >
            <Award className="w-5 h-5" />
          </button>

          {/* Sound Mute */}
          <button
            onClick={() => {
              playPopSound();
              onToggleMute();
            }}
            className="p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all active:scale-95"
            title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-red-500" /> : <Volume2 className="w-5 h-5 text-blue-600" />}
          </button>

          {/* Next Button */}
          {isLessonScreen && currentIndex < SCREEN_ORDER.length - 1 && (
            <button
              onClick={handleNext}
              className="p-2 sm:px-3 sm:py-2 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-bold flex items-center gap-1 shadow-sm transition-all active:scale-95"
              title="Tiếp theo"
            >
              <span className="hidden sm:inline text-sm">Tiếp</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {currentScreen === 'home' && (
            <button
              onClick={() => {
                playPopSound();
                onNavigateScreen('forparents');
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-2xl bg-teal-50 text-teal-700 font-bold text-xs sm:text-sm hover:bg-teal-100 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Phụ huynh</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
