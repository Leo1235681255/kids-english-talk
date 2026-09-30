import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, Star, Sparkles, Award } from 'lucide-react';
import { LessonData } from '../../types';
import { playFanfareSound, speakText, playPopSound } from '../../utils/audio';

interface RewardScreenProps {
  lesson: LessonData;
  onNext: () => void;
  onUnlockSticker: (stickerId: string) => void;
  onOpenStickerBook: () => void;
}

export const RewardScreen: React.FC<RewardScreenProps> = ({
  lesson,
  onNext,
  onUnlockSticker,
  onOpenStickerBook
}) => {
  useEffect(() => {
    playFanfareSound();
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.5 }
    });

    speakText('Great job! You did awesome today! Here is your reward sticker!', {
      speaker: 'Pip',
      rate: 1.0
    });

    onUnlockSticker(lesson.reward.stickerId);
  }, []);

  const availableStickers = [
    { id: 'st_pinkstar', name: 'Ngôi Sao Hồng', image: '/assets/sticker_pinkstar.png' },
    { id: 'st_mi', name: 'Bé Mi Xinh Xắn', image: '/assets/sticker_mi.png' },
    { id: 'st_pip', name: 'Thầy Giáo Pip', image: '/assets/sticker_pip.png' },
    { id: 'st_bin', name: 'Bạn Bin Dũng Cảm', image: '/assets/sticker_bin.png' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col items-center gap-6 text-center">
      {/* Golden Badge Card */}
      <div className="w-full bg-gradient-to-b from-amber-300 via-yellow-100 to-sky-100 rounded-3xl p-6 sm:p-10 border-4 border-amber-300 shadow-xl flex flex-col items-center gap-4 relative overflow-hidden">
        {/* Floating Sparkles */}
        <div className="absolute top-4 left-6 text-2xl animate-bounce-soft">✨</div>
        <div className="absolute top-6 right-8 text-2xl animate-bounce-soft" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute bottom-6 left-10 text-2xl animate-bounce-soft" style={{ animationDelay: '0.8s' }}>🎉</div>

        {/* Big Star Badge */}
        <div className="w-48 sm:w-60 aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white/90 p-2 transform hover:scale-105 transition-all">
          <img
            src={lesson.reward.stickerImage}
            alt="Star Badge"
            className="w-full h-full object-contain"
          />
        </div>

        <div>
          <span className="px-4 py-1.5 rounded-full bg-amber-400 text-amber-950 font-black text-sm uppercase tracking-wider inline-block mb-2 shadow-sm">
            Phần Thưởng Bài Học
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
            Great Job! Tuyệt Vời!
          </h2>
          <p className="text-sm sm:text-base font-bold text-slate-600 max-w-md mx-auto mt-1">
            {lesson.reward.celebrationText}
          </p>
        </div>

        {/* Sticker Collection Row */}
        <div className="w-full max-w-md pt-4 border-t border-amber-200">
          <span className="text-xs font-black text-slate-600 uppercase tracking-wider block mb-3">
            🎁 Sticker bé vừa sưu tập được:
          </span>
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            {availableStickers.map((st) => (
              <div
                key={st.id}
                onClick={() => {
                  playPopSound();
                  onOpenStickerBook();
                }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border-3 border-amber-300 shadow-md p-1.5 cursor-pointer transform hover:scale-115 active:scale-95 transition-all flex items-center justify-center"
                title={st.name}
              >
                <img src={st.image} alt={st.name} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* View album button */}
        <button
          onClick={() => {
            playPopSound();
            onOpenStickerBook();
          }}
          className="px-5 py-2 rounded-2xl bg-white border-2 border-amber-300 text-amber-900 font-extrabold text-xs sm:text-sm hover:bg-amber-50 shadow-sm flex items-center gap-2 transition-all"
        >
          <Award className="w-4 h-4 text-purple-600" />
          <span>Mở Sổ Sưu Tập Sticker</span>
        </button>
      </div>

      {/* Next Step: Story Time */}
      <div className="w-full flex justify-end">
        <button
          onClick={() => {
            playPopSound();
            onNext();
          }}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-black text-base shadow-md flex items-center justify-center gap-2 transition-all"
        >
          <span>Bài 8: Truyện Tranh (Story Time)</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
