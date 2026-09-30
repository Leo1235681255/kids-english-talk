import React, { useState, useEffect } from 'react';
import { Volume2, CheckCircle2, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';
import { LessonData, WordItem } from '../../types';
import { speakText, playSuccessSound, playErrorSound, playPopSound } from '../../utils/audio';

interface ListenTapScreenProps {
  lesson: LessonData;
  onNext: () => void;
  onEarnStar: () => void;
}

export const ListenTapScreen: React.FC<ListenTapScreenProps> = ({
  lesson,
  onNext,
  onEarnStar
}) => {
  const questions = lesson.listenTap.questions;
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
  const [isAnsweredCorrect, setIsAnsweredCorrect] = useState<boolean>(false);
  const [wrongWordId, setWrongWordId] = useState<string | null>(null);
  const [isAllCompleted, setIsAllCompleted] = useState<boolean>(false);

  const currentQ = questions[currentQIndex] || questions[0];

  useEffect(() => {
    // Automatically play question audio when question changes
    const timer = setTimeout(() => {
      handlePlayPrompt();
    }, 400);
    return () => clearTimeout(timer);
  }, [currentQIndex]);

  const handlePlayPrompt = () => {
    speakText(currentQ.targetWord.en, {
      speaker: 'Pip',
      rate: 0.85
    });
  };

  const handleSelectOption = (option: WordItem) => {
    playPopSound();

    if (option.id === currentQ.targetWord.id) {
      // Correct!
      setSelectedWordId(option.id);
      setIsAnsweredCorrect(true);
      setWrongWordId(null);
      playSuccessSound();
      onEarnStar();

      setTimeout(() => {
        if (currentQIndex < questions.length - 1) {
          setCurrentQIndex(currentQIndex + 1);
          setSelectedWordId(null);
          setIsAnsweredCorrect(false);
        } else {
          setIsAllCompleted(true);
        }
      }, 1200);
    } else {
      // Wrong choice: gentle retry without penalty
      setWrongWordId(option.id);
      playErrorSound();
      speakText('Try again! ' + currentQ.targetWord.en, { speaker: 'Pip', rate: 0.9 });
      setTimeout(() => setWrongWordId(null), 800);
    }
  };

  const handleRestartQuiz = () => {
    playPopSound();
    setCurrentQIndex(0);
    setSelectedWordId(null);
    setIsAnsweredCorrect(false);
    setIsAllCompleted(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col gap-5">
      {/* Top Header & Progress */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
            Luyện Nghe (Listen & Tap)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold">
            Bé hãy nghe từ Pip đọc và chạm vào đúng bức tranh nhé!
          </p>
        </div>

        {/* Question Counter Pill */}
        <div className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-800 font-black text-xs sm:text-sm shadow-sm">
          Câu {currentQIndex + 1} / {questions.length}
        </div>
      </div>

      {!isAllCompleted ? (
        <>
          {/* Audio Speaker Box */}
          <div className="flex items-center justify-center">
            <button
              onClick={handlePlayPrompt}
              className="flex items-center gap-3 px-8 py-4 rounded-3xl bg-purple-600 hover:bg-purple-700 active:scale-95 text-white shadow-lg transition-all animate-pulse-glow"
              title="Bấm để nghe lại từ"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Volume2 className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-purple-200 uppercase tracking-wider block">
                  Chạm để nghe lại
                </span>
                <span className="text-2xl sm:text-3xl font-black tracking-wide">
                  {currentQ.targetWord.en}
                </span>
              </div>
            </button>
          </div>

          {/* 2x2 Options Cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {currentQ.options.map((option) => {
              const isSelected = selectedWordId === option.id;
              const isWrong = wrongWordId === option.id;

              return (
                <button
                  key={option.id}
                  disabled={isAnsweredCorrect}
                  onClick={() => handleSelectOption(option)}
                  className={`relative bg-white rounded-3xl p-4 sm:p-5 border-4 transition-all flex flex-col items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-95 ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-50 ring-4 ring-emerald-200 scale-105'
                      : isWrong
                      ? 'border-rose-400 bg-rose-50 animate-wiggle'
                      : 'border-slate-100 hover:border-purple-300'
                  }`}
                >
                  {/* Selected checkmark indicator */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 p-1 rounded-full bg-emerald-500 text-white shadow-md">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                  )}

                  <div className="w-full aspect-square max-w-[150px] rounded-2xl overflow-hidden bg-sky-50 p-2 flex items-center justify-center">
                    <img
                      src={option.image}
                      alt={option.en}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <span className="text-lg sm:text-xl font-black text-slate-700">
                    {option.en}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Cheer message */}
          {isAnsweredCorrect && (
            <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-800 text-center font-black text-base animate-bounce-soft">
              🎉 Đúng rồi! Giỏi quá bé ơi!
            </div>
          )}
        </>
      ) : (
        /* Quiz Completion screen */
        <div className="rounded-3xl bg-white p-6 sm:p-8 text-center border-4 border-purple-200 shadow-lg flex flex-col items-center gap-4">
          <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center text-4xl shadow-inner animate-bounce-soft">
            🌟
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-800">
            Xuất Sắc! Bé Đã Hoàn Thành Luyện Nghe!
          </h3>
          <p className="text-slate-600 font-semibold text-sm max-w-md">
            Bé đã nhận diện chính xác tất cả các từ vựng qua giọng đọc chuẩn bản ngữ. Hãy sẵn sàng cho phần Luyện Nói nhé!
          </p>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleRestartQuiz}
              className="px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Chơi lại</span>
            </button>

            <button
              onClick={() => {
                playPopSound();
                onNext();
              }}
              className="px-8 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-base shadow-md flex items-center gap-2 active:scale-95 transition-all"
            >
              <span>Bài 4: Luyện Nói (Say It)</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Manual Next / Skip */}
      {!isAllCompleted && (
        <div className="flex justify-between items-center pt-2">
          <button
            onClick={() => {
              if (currentQIndex < questions.length - 1) {
                setCurrentQIndex(currentQIndex + 1);
              } else {
                setIsAllCompleted(true);
              }
            }}
            className="text-xs font-bold text-slate-400 hover:text-slate-600 underline"
          >
            Bỏ qua câu này
          </button>

          <button
            onClick={() => {
              playPopSound();
              onNext();
            }}
            className="px-6 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-sm flex items-center gap-2"
          >
            <span>Tiếp tục</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
