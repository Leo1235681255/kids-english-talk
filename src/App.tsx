import React, { useCallback, useEffect, useState } from 'react';
import { ScreenType, Song } from './types';
import { getLesson, LESSONS, nextLesson } from './data/lessons';
import { Nav, SCREEN_ORDER } from './components/HeaderNavbar';
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
import { MusicModal } from './components/MusicModal';
import { AccountModal } from './components/AccountModal';
import { AdminPanel } from './components/AdminPanel';
import { canOpenUnit } from './data/access';
import { useAuth } from './hooks/useAuth';
import { useProgress } from './hooks/useProgress';
import { stopSpeaking } from './utils/audio';

export const App: React.FC = () => {
  const progress = useProgress();
  const auth = useAuth();
  const [accountOpen, setAccountOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [lockReason, setLockReason] = useState('');
  const [screen, setScreen] = useState<ScreenType>('home');
  const [lessonId, setLessonId] = useState<string>(LESSONS[0].id);
  const [lessonStars, setLessonStars] = useState(0);
  const [stickersOpen, setStickersOpen] = useState(false);
  const [song, setSong] = useState<Song | null>(null);
  const lesson = getLesson(lessonId) ?? LESSONS[0];

  const go = useCallback((s: ScreenType) => {
    stopSpeaking();
    setScreen(s);
  }, []);

  const openAccount = (reason = '') => {
    setLockReason(reason);
    setAccountOpen(true);
  };

  const start = (id: string) => {
    const target = getLesson(id);
    if (target && !canOpenUnit(auth.status, target.unitCode)) {
      go('home');
      openAccount(
        auth.status === 'blocked'
          ? 'Tài khoản này đang bị khoá, chưa học được bài này.'
          : auth.status === 'pending'
            ? 'Bài này mở sau khi admin duyệt tài khoản của bé. Bé học thử Unit 1 trước nhé!'
            : 'Bé đăng nhập bằng Gmail và chờ admin duyệt để học bài này nhé. Unit 1 học thử miễn phí!'
      );
      return;
    }
    setLessonId(id);
    setLessonStars(0);
    go('warmup');
  };

  // a blocked account is sent back home right away
  useEffect(() => {
    if (auth.status === 'blocked' && screen !== 'home') go('home');
  }, [auth.status, screen, go]);

  const idx = SCREEN_ORDER.indexOf(screen);
  const nav: Nav = {
    stars: progress.stars,
    onHome: () => go('home'),
    onBack: () => go(idx > 0 ? SCREEN_ORDER[idx - 1] : 'home'),
    onNext: () => go(idx >= 0 && idx < SCREEN_ORDER.length - 1 ? SCREEN_ORDER[idx + 1] : 'home'),
    earn: (n) => {
      progress.addStars(n);
      setLessonStars((s) => s + n);
    },
  };

  const next = nextLesson(lesson.id);

  return (
    <>
      {screen === 'home' && (
        <HomeScreen
          stars={progress.stars}
          collected={progress.stickers}
          done={progress.done}
          onStart={start}
          onOpenStickers={() => setStickersOpen(true)}
          onPlaySong={setSong}
          auth={auth}
          onAccount={() => openAccount()}
        />
      )}
      {/* key = lesson + screen so every screen starts from a clean state */}
      {screen === 'warmup' && <WarmUpScreen key={lesson.id} lesson={lesson} nav={nav} />}
      {screen === 'newwords' && <NewWordsScreen key={lesson.id} lesson={lesson} nav={nav} />}
      {screen === 'listentap' && <ListenTapScreen key={lesson.id} lesson={lesson} nav={nav} />}
      {screen === 'sayit' && <SayItScreen key={lesson.id} lesson={lesson} nav={nav} />}
      {screen === 'talktime' && <TalkTimeScreen key={lesson.id} lesson={lesson} nav={nav} />}
      {screen === 'play' && <PlayScreen key={lesson.id} lesson={lesson} nav={nav} />}
      {screen === 'reward' && (
        <RewardScreen
          key={lesson.id}
          lesson={lesson}
          nav={nav}
          lessonStars={lessonStars}
          collected={progress.stickers}
          onComplete={() => progress.completeLesson(lesson.id, lessonStars)}
        />
      )}
      {screen === 'storytime' && <StoryTimeScreen key={lesson.id} lesson={lesson} nav={nav} />}
      {screen === 'review' && <ReviewScreen key={lesson.id} lesson={lesson} nav={nav} />}
      {screen === 'forparents' && (
        <ParentsScreen
          key={lesson.id}
          lesson={lesson}
          nav={nav}
          lessonStars={lessonStars}
          next={next}
          onNextLesson={() => next && start(next.id)}
        />
      )}

      <MusicModal song={song} onClose={() => setSong(null)} onLearn={start} />
      <AccountModal open={accountOpen} onClose={() => setAccountOpen(false)} auth={auth} reason={lockReason} onOpenAdmin={() => setAdminOpen(true)} />
      <AdminPanel open={adminOpen} onClose={() => setAdminOpen(false)} auth={auth} />
      <StickerBookModal open={stickersOpen} onClose={() => setStickersOpen(false)} collected={progress.stickers} />
    </>
  );
};

export default App;
