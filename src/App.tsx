import React, { useState, useEffect } from 'react';
import { ScreenType, LessonData } from './types';
import { LESSON_L1_U01_B1, LESSON_L1_U03_B1, LESSON_L1_U06_B1 } from './data/curriculum';
import { HeaderNavbar, SCREEN_ORDER } from './components/HeaderNavbar';
import { HomeScreen } from './components/screens/HomeScreen';
import { WarmUpScreen } from './components/screens/WarmUpScreen';
import { NewWordsScreen } from './components/screens/NewWordsScreen';
import { ListenTapScreen } from './components/screens/ListenTapScreen';
import { SayItScreen } from './components/screens/SayItScreen';
import { TalkTimeScreen } from './components/screens/TalkTimeScreen';
import { PlayScreen } from './components/screens/PlayScreen';
import { RewardScreen } from './components/screens/RewardScreen';
import { StoryTimeScreen } from './components/screens/StoryTimeScreen';
import { ReviewScreen } from './components/screens/ReviewScreen';
import { ParentsScreen } from './components/screens/ParentsScreen';
import { StickerBookModal } from './components/StickerBookModal';
import { playStarSound, playPopSound } from './utils/audio';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [activeLesson, setActiveLesson] = useState<LessonData>(LESSON_L1_U01_B1);
  const [starsTotal, setStarsTotal] = useState<number>(() => {
    const saved = localStorage.getItem('ket_stars_total');
    return saved ? parseInt(saved, 10) : 12;
  });
  const [unlockedStickers, setUnlockedStickers] = useState<string[]>(() => {
    const saved = localStorage.getItem('ket_stickers');
    return saved ? JSON.parse(saved) : ['st_star', 'st_mi', 'st_pip', 'st_bin'];
  });
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isStickerBookOpen, setIsStickerBookOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('ket_stars_total', starsTotal.toString());
  }, [starsTotal]);

  useEffect(() => {
    localStorage.setItem('ket_stickers', JSON.stringify(unlockedStickers));
  }, [unlockedStickers]);

  const handleEarnStar = () => {
    setStarsTotal(prev => prev + 1);
  };

  const handleUnlockSticker = (stickerId: string) => {
    if (!unlockedStickers.includes(stickerId)) {
      setUnlockedStickers([...unlockedStickers, stickerId]);
      playStarSound();
    }
  };

  const handleStartLesson = (lesson: LessonData) => {
    playPopSound();
    setActiveLesson(lesson);
    setCurrentScreen('warmup');
  };

  const handleNextStep = () => {
    const currentIndex = SCREEN_ORDER.indexOf(currentScreen);
    if (currentIndex >= 0 && currentIndex < SCREEN_ORDER.length - 1) {
      setCurrentScreen(SCREEN_ORDER[currentIndex + 1]);
    } else {
      setCurrentScreen('home');
    }
  };

  const handleNextLesson = () => {
    playPopSound();
    if (activeLesson.id === 'L1-U01-B1') {
      setActiveLesson(LESSON_L1_U03_B1);
      setCurrentScreen('warmup');
    } else if (activeLesson.id === 'L1-U03-B1') {
      setActiveLesson(LESSON_L1_U06_B1);
      setCurrentScreen('warmup');
    } else {
      setActiveLesson(LESSON_L1_U01_B1);
      setCurrentScreen('home');
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F7FD] flex flex-col justify-between text-slate-800">
      {/* Header */}
      <HeaderNavbar
        currentScreen={currentScreen}
        onNavigateScreen={setCurrentScreen}
        onGoHome={() => setCurrentScreen('home')}
        activeLesson={activeLesson}
        starsTotal={starsTotal}
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(!isMuted)}
        onOpenStickerBook={() => setIsStickerBookOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-10">
        {currentScreen === 'home' && (
          <HomeScreen
            onStartLesson={handleStartLesson}
            starsTotal={starsTotal}
            unlockedStickersCount={unlockedStickers.length}
            onOpenStickerBook={() => setIsStickerBookOpen(true)}
          />
        )}

        {currentScreen === 'warmup' && (
          <WarmUpScreen
            lesson={activeLesson}
            onNext={handleNextStep}
          />
        )}

        {currentScreen === 'newwords' && (
          <NewWordsScreen
            lesson={activeLesson}
            onNext={handleNextStep}
          />
        )}

        {currentScreen === 'listentap' && (
          <ListenTapScreen
            lesson={activeLesson}
            onNext={handleNextStep}
            onEarnStar={handleEarnStar}
          />
        )}

        {currentScreen === 'sayit' && (
          <SayItScreen
            lesson={activeLesson}
            onNext={handleNextStep}
            onEarnStar={handleEarnStar}
          />
        )}

        {currentScreen === 'talktime' && (
          <TalkTimeScreen
            lesson={activeLesson}
            onNext={handleNextStep}
            onEarnStar={handleEarnStar}
          />
        )}

        {currentScreen === 'play' && (
          <PlayScreen
            lesson={activeLesson}
            onNext={handleNextStep}
            onEarnStar={handleEarnStar}
          />
        )}

        {currentScreen === 'reward' && (
          <RewardScreen
            lesson={activeLesson}
            onNext={handleNextStep}
            onUnlockSticker={handleUnlockSticker}
            onOpenStickerBook={() => setIsStickerBookOpen(true)}
          />
        )}

        {currentScreen === 'storytime' && (
          <StoryTimeScreen
            lesson={activeLesson}
            onNext={handleNextStep}
          />
        )}

        {currentScreen === 'review' && (
          <ReviewScreen
            lesson={activeLesson}
            onNext={handleNextStep}
            onEarnStar={handleEarnStar}
          />
        )}

        {currentScreen === 'forparents' && (
          <ParentsScreen
            lesson={activeLesson}
            starsTotal={starsTotal}
            onGoHome={() => setCurrentScreen('home')}
            onNextLesson={handleNextLesson}
          />
        )}
      </main>

      {/* Footer Branding */}
      <footer className="py-4 text-center text-xs text-slate-400 border-t border-slate-200/80 bg-white/70">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Kids English Talk © 2026 — Chương trình tiếng Anh giao tiếp chuẩn Cambridge</span>
          <span className="font-semibold text-blue-600">Đồng hành cùng Mi, Bin và Pip</span>
        </div>
      </footer>

      {/* Sticker Album Modal */}
      <StickerBookModal
        isOpen={isStickerBookOpen}
        onClose={() => setIsStickerBookOpen(false)}
        unlockedStickerIds={unlockedStickers}
      />
    </div>
  );
};

export default App;
