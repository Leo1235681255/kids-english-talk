import React, { useState } from 'react';
import { Volume2, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { LessonData, WordItem } from '../../types';
import { speakText, playPopSound, playSuccessSound } from '../../utils/audio';

interface ReviewScreenProps {
  lesson: LessonData;
  onNext: () => void;
  onEarnStar: () => void;
}

export const ReviewScreen: React.FC<ReviewScreenProps> = ({
  lesson,
  onNext,
  onEarnStar
}) => {
  const [reviewedWords, setReviewedWords] = useState<string[]>([]);

  const handleSpeak = (word: WordItem) => {
    playPopSound();
    speakText(word.en, {
      speaker: 'Pip',
      rate: 0.9
    });

    if (!reviewedWords.includes(word.id)) {
      setReviewedWords([...reviewedWords, word.id]);
      playSuccessSound();
      onEarnStar();
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col gap-5">
      {/* Header */}
      <div className="text-center">
        <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-900 font-black text-xs uppercase tracking-wider inline-block mb-1 shadow-sm">
          Ôn Tập Nhanh
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
          Let's say the words again!
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
          Bé hãy chạm vào từng thẻ để đọc lại thật to và ghi nhớ từ nhé!
        </p>
      </div>

      {/* 2x2 Flashcard Review Grid */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {lesson.targetWords.map((word) => {
          const isDone = reviewedWords.includes(word.id);

          return (
            <div
              key={word.id}
              onClick={() => handleSpeak(word)}
              className={`bg-white rounded-3xl p-4 sm:p-5 border-4 transition-all cursor-pointer shadow-md flex flex-col items-center justify-between gap-3 transform hover:scale-105 active:scale-95 ${
                isDone
                  ? 'border-emerald-400 bg-emerald-50/50'
                  : 'border-slate-200 hover:border-sky-300'
              }`}
            >
              <div className="w-full aspect-square max-w-[150px] rounded-2xl overflow-hidden bg-sky-50 p-2 flex items-center justify-center">
                <img src={word.image} alt={word.en} className="w-full h-full object-contain" />
              </div>

              <div className="text-center">
                <span className="text-2xl font-black text-slate-800 block">
                  {word.en}
                </span>
                <span className="text-xs font-bold text-slate-400 block">
                  {word.vi}
                </span>
              </div>

              <div className={`p-2.5 rounded-full flex items-center justify-center transition-all ${
                isDone ? 'bg-emerald-500 text-white shadow-md' : 'bg-blue-500 text-white shadow-sm'
              }`}>
                {isDone ? <CheckCircle className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pip Mascot Review Banner */}
      <div className="flex items-center gap-3 p-4 rounded-3xl bg-sky-50 border-2 border-sky-200 shadow-sm">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-sky-400 bg-white flex-shrink-0 animate-bounce-soft">
          <img src="/assets/sticker_pip.png" alt="Pip" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <span className="text-xs font-black text-sky-900 bg-sky-200 px-2 py-0.5 rounded-md">
            Pip khen ngợi
          </span>
          <p className="text-xs sm:text-sm font-bold text-slate-700 mt-1">
            "Great progress! Keep going! Bé đã ghi nhớ từ vựng rất tốt rồi đấy!"
          </p>
        </div>
      </div>

      {/* Next Step */}
      <div className="flex justify-end pt-2">
        <button
          onClick={() => {
            playPopSound();
            onNext();
          }}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-700 active:scale-95 text-white font-black text-base shadow-md flex items-center justify-center gap-2 transition-all"
        >
          <span>Bài 10: Dành Cho Phụ Huynh (Summary)</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
