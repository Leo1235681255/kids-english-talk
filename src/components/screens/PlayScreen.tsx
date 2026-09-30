import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { LessonData, MatchingPair } from '../../types';
import { playSuccessSound, playPopSound, playFanfareSound, speakText } from '../../utils/audio';

interface PlayScreenProps {
  lesson: LessonData;
  onNext: () => void;
  onEarnStar: () => void;
}

export const PlayScreen: React.FC<PlayScreenProps> = ({
  lesson,
  onNext,
  onEarnStar
}) => {
  const originalPairs = lesson.playGame.pairs;

  // Shuffle right side pictures so it's a real puzzle
  const [shuffledImages] = useState<MatchingPair[]>(() => {
    return [...originalPairs].sort(() => Math.random() - 0.5);
  });

  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<{ [wordId: string]: string }>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleSelectWord = (pair: MatchingPair) => {
    if (matchedPairs[pair.id]) return; // already matched
    playPopSound();
    setSelectedWordId(pair.id);
    speakText(pair.word, { speaker: 'Pip', rate: 0.9 });
  };

  const handleSelectImage = (pair: MatchingPair) => {
    if (!selectedWordId) {
      playPopSound();
      return;
    }

    if (pair.id === selectedWordId) {
      // Correct match!
      playSuccessSound();
      onEarnStar();
      const updated = { ...matchedPairs, [selectedWordId]: pair.id };
      setMatchedPairs(updated);
      setSelectedWordId(null);

      // Check if all matched
      if (Object.keys(updated).length === originalPairs.length) {
        setIsCompleted(true);
        playFanfareSound();
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } else {
      // Wrong match
      playPopSound();
      // gentle retry
      setSelectedWordId(null);
    }
  };

  const handleResetGame = () => {
    playPopSound();
    setMatchedPairs({});
    setSelectedWordId(null);
    setIsCompleted(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
            Trò Chơi (Drag & Match)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold">
            {lesson.playGame.instruction}
          </p>
        </div>

        <button
          onClick={handleResetGame}
          className="p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all shadow-sm"
          title="Chơi lại từ đầu"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Main Matching Board */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border-4 border-orange-200 shadow-lg relative">
        <div className="grid grid-cols-2 gap-6 sm:gap-12 relative z-10">
          {/* Left Column: Words */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-black text-slate-400 uppercase tracking-wider text-center">
              1. Chạm từ vựng
            </span>

            {originalPairs.map((item) => {
              const isMatched = !!matchedPairs[item.id];
              const isSelected = selectedWordId === item.id;

              return (
                <button
                  key={item.id}
                  disabled={isMatched}
                  onClick={() => handleSelectWord(item)}
                  className={`w-full py-4 px-4 rounded-2xl font-black text-lg sm:text-xl transition-all border-3 flex items-center justify-between shadow-sm ${
                    isMatched
                      ? 'bg-emerald-100 border-emerald-400 text-emerald-800 opacity-90'
                      : isSelected
                      ? 'bg-amber-100 border-amber-500 text-amber-950 scale-105 shadow-md ring-4 ring-amber-200'
                      : 'bg-orange-50 border-orange-200 text-slate-700 hover:bg-orange-100 hover:border-orange-400'
                  }`}
                >
                  <span>{item.word}</span>
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      isMatched
                        ? 'bg-emerald-500 border-emerald-600'
                        : isSelected
                        ? 'bg-amber-500 border-amber-600'
                        : 'bg-white border-orange-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Pictures */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-black text-slate-400 uppercase tracking-wider text-center">
              2. Chạm hình tương ứng
            </span>

            {shuffledImages.map((item) => {
              const isMatched = Object.values(matchedPairs).includes(item.id);

              return (
                <button
                  key={item.id}
                  disabled={isMatched}
                  onClick={() => handleSelectImage(item)}
                  className={`w-full py-2 px-3 rounded-2xl transition-all border-3 flex items-center justify-between gap-3 shadow-sm ${
                    isMatched
                      ? 'bg-emerald-100 border-emerald-400 opacity-90'
                      : 'bg-sky-50 border-sky-200 hover:bg-sky-100 hover:border-sky-400'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      isMatched ? 'bg-emerald-500 border-emerald-600' : 'bg-white border-sky-300'
                    }`}
                  />

                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center shadow-inner">
                    <img src={item.image} alt="pic" className="w-full h-full object-contain" />
                  </div>

                  {isMatched ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  ) : (
                    <div className="w-6 h-6" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Victory Celebration Overlay */}
        {isCompleted && (
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 border-2 border-amber-400 text-center animate-bounce-soft">
            <div className="text-3xl mb-1">🎉 🏆 🌟</div>
            <h3 className="text-xl sm:text-2xl font-black text-amber-950">
              Tuyệt Vời! Bé Nối Đúng Hết Rồi!
            </h3>
            <p className="text-xs sm:text-sm font-bold text-amber-800 mt-1">
              Bé có trí nhớ và phản xạ rất nhanh! Cùng mở hộp quà phần thưởng nhé!
            </p>
          </div>
        )}
      </div>

      {/* Next Step Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={() => {
            playPopSound();
            onNext();
          }}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-yellow-500 hover:bg-yellow-400 active:scale-95 text-yellow-950 font-black text-base shadow-md flex items-center justify-center gap-2 transition-all"
        >
          <span>Bài 7: Nhận Thưởng (Reward)</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
