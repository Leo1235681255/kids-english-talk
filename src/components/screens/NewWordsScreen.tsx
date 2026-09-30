import React, { useState } from 'react';
import { Volume2, ArrowRight, Eye, EyeOff, Sparkles, Snail } from 'lucide-react';
import { LessonData, WordItem } from '../../types';
import { speakText, speakSlow, playPopSound } from '../../utils/audio';

interface NewWordsScreenProps {
  lesson: LessonData;
  onNext: () => void;
}

export const NewWordsScreen: React.FC<NewWordsScreenProps> = ({ lesson, onNext }) => {
  const [showVietnamese, setShowVietnamese] = useState<boolean>(true);
  const [activeWordId, setActiveWordId] = useState<string | null>(null);

  const handlePlayWord = (word: WordItem, slow = false) => {
    playPopSound();
    setActiveWordId(word.id);
    if (slow) {
      speakSlow(word.en, () => setActiveWordId(null));
    } else {
      speakText(word.en, {
        speaker: 'Pip',
        rate: 0.9,
        onEnd: () => setActiveWordId(null)
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col gap-5">
      {/* Header Info */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
            Từ Vựng Mới (New Words)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold">
            Chạm vào tranh hoặc loa để nghe cách phát âm chuẩn nhé!
          </p>
        </div>

        {/* Subtitle toggle */}
        <button
          onClick={() => {
            playPopSound();
            setShowVietnamese(!showVietnamese);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
        >
          {showVietnamese ? <EyeOff className="w-4 h-4 text-slate-400" /> : <Eye className="w-4 h-4 text-blue-500" />}
          <span>{showVietnamese ? 'Ẩn tiếng Việt' : 'Hiện tiếng Việt'}</span>
        </button>
      </div>

      {/* 2x2 Flashcard Grid */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {lesson.targetWords.map((word) => {
          const isActive = activeWordId === word.id;
          return (
            <div
              key={word.id}
              className={`bg-white rounded-3xl p-4 sm:p-5 border-4 transition-all duration-200 flex flex-col items-center justify-between gap-3 shadow-md hover:shadow-lg ${
                isActive
                  ? 'border-blue-500 scale-[1.02] ring-4 ring-blue-100'
                  : 'border-slate-100 hover:border-blue-200'
              }`}
            >
              {/* Image with tap action */}
              <div
                onClick={() => handlePlayWord(word, false)}
                className="w-full aspect-square max-w-[170px] rounded-2xl overflow-hidden bg-sky-50 p-2 cursor-pointer flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                title="Bấm vào tranh để nghe từ"
              >
                <img
                  src={word.image}
                  alt={word.en}
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>

              {/* Word & Phonetic */}
              <div className="text-center w-full">
                <span className="text-2xl sm:text-3xl font-black text-slate-800 tracking-wide block">
                  {word.en}
                </span>
                {word.phonetic && (
                  <span className="text-xs font-semibold text-slate-400 block mt-0.5">
                    {word.phonetic}
                  </span>
                )}
                {showVietnamese && (
                  <span className="text-xs sm:text-sm font-bold text-blue-600 block mt-1 bg-blue-50 py-0.5 px-2 rounded-lg">
                    {word.vi}
                  </span>
                )}
              </div>

              {/* Action Buttons: Audio Normal & Audio Slow */}
              <div className="flex items-center gap-2 pt-1">
                {/* Normal audio */}
                <button
                  onClick={() => handlePlayWord(word, false)}
                  className="w-11 h-11 rounded-full bg-blue-500 hover:bg-blue-600 active:scale-90 text-white flex items-center justify-center shadow-md transition-all"
                  title="Nghe tốc độ chuẩn"
                >
                  <Volume2 className="w-5 h-5" />
                </button>

                {/* Slow audio */}
                <button
                  onClick={() => handlePlayWord(word, true)}
                  className="w-9 h-9 rounded-full bg-amber-100 hover:bg-amber-200 active:scale-90 text-amber-800 flex items-center justify-center transition-all"
                  title="Nghe chậm từng âm"
                >
                  <Snail className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pip Cheerleader Mascot at bottom */}
      <div className="flex items-center gap-3 p-4 rounded-3xl bg-amber-50 border-2 border-amber-200 shadow-sm">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400 bg-white flex-shrink-0 animate-bounce-soft">
          <img src="/assets/sticker_pip.png" alt="Pip" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <span className="text-xs font-black text-amber-900 bg-amber-200 px-2 py-0.5 rounded-md">
            Lời khuyên từ Pip
          </span>
          <p className="text-xs sm:text-sm font-bold text-slate-700 mt-1">
            "Tap the picture to hear the word! Chạm vào từng bức tranh để nghe phát âm, sau đó nhấn hình chú ốc sên để nghe thật chậm nhé!"
          </p>
        </div>
      </div>

      {/* Next Step Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={() => {
            playPopSound();
            onNext();
          }}
          className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-purple-500 hover:bg-purple-600 active:scale-95 text-white font-black text-base shadow-md flex items-center justify-center gap-2 transition-all"
        >
          <span>Bài 3: Luyện Nghe (Listen & Tap)</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
