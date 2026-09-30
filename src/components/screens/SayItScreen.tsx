import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, Star, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { LessonData } from '../../types';
import { speakText, playStarSound, playPopSound } from '../../utils/audio';
import { startListening, isSpeechRecognitionSupported } from '../../utils/speechRecognition';

interface SayItScreenProps {
  lesson: LessonData;
  onNext: () => void;
  onEarnStar: () => void;
}

export const SayItScreen: React.FC<SayItScreenProps> = ({
  lesson,
  onNext,
  onEarnStar
}) => {
  const items = lesson.sayIt.items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [starsAwarded, setStarsAwarded] = useState<number>(0);
  const [praiseText, setPraiseText] = useState<string>('Bé hãy nhấn mic và đọc to nhé!');
  const [spokenResult, setSpokenResult] = useState<string>('');

  const currentItem = items[currentIndex] || items[0];

  useEffect(() => {
    setStarsAwarded(0);
    setSpokenResult('');
    setPraiseText('Nhấn mic và đọc to từ: ' + currentItem.word.en);
  }, [currentIndex]);

  const handleHearModel = () => {
    playPopSound();
    speakText(currentItem.word.en, {
      speaker: 'Pip',
      rate: 0.85
    });
  };

  const handleStartSpeaking = () => {
    playPopSound();

    if (!isSpeechRecognitionSupported()) {
      // Browser fallback: simulate speech evaluation cheerfully
      setIsRecording(true);
      setPraiseText('Đang lắng nghe bé nói...');
      setTimeout(() => {
        setIsRecording(false);
        setStarsAwarded(3);
        setPraiseText(currentItem.pipPraise || 'Tuyệt vời! Bé phát âm rất hay!');
        playStarSound();
        onEarnStar();
        speakText('Great job!', { speaker: 'Pip' });
      }, 1600);
      return;
    }

    setIsRecording(true);
    setPraiseText('Đang nghe bé nói... Hãy đọc to nhé!');

    startListening(
      currentItem.word.en,
      (stars, text, _matched) => {
        setIsRecording(false);
        setSpokenResult(text);
        setStarsAwarded(stars);
        playStarSound();
        onEarnStar();

        if (stars === 3) {
          setPraiseText('Xuất sắc! ' + currentItem.pipPraise);
          speakText('Awesome! Great job!', { speaker: 'Pip' });
        } else {
          setPraiseText('Bé làm tốt lắm! Thử đọc lại để đạt 3 sao nhé!');
          speakText('Good try! Say it again!', { speaker: 'Pip' });
        }
      },
      (error) => {
        console.warn('Speech error', error);
        setIsRecording(false);
        // Fallback friendly praise so child isn't discouraged
        setStarsAwarded(3);
        setPraiseText(currentItem.pipPraise);
        playStarSound();
        onEarnStar();
      },
      () => {
        setIsRecording(true);
      }
    );
  };

  const handleNextWord = () => {
    playPopSound();
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onNext();
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
            Luyện Nói (Say It)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold">
            Bé hãy nghe mẫu rồi chạm vào mic để nói theo nhé!
          </p>
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs sm:text-sm shadow-sm">
          Từ {currentIndex + 1} / {items.length}
        </div>
      </div>

      {/* Main Pronunciation Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-emerald-300 shadow-lg flex flex-col items-center gap-5 relative overflow-hidden">
        {/* Listen Model Button on top corner */}
        <button
          onClick={handleHearModel}
          className="absolute top-4 left-4 p-3 rounded-2xl bg-blue-500 hover:bg-blue-600 active:scale-90 text-white shadow-md transition-all flex items-center gap-1.5"
          title="Nghe phát âm chuẩn"
        >
          <Volume2 className="w-5 h-5" />
          <span className="text-xs font-bold hidden sm:inline">Nghe mẫu</span>
        </button>

        {/* Character Card Visual */}
        <div className="w-40 sm:w-52 aspect-square rounded-3xl overflow-hidden bg-sky-50 p-3 border-3 border-emerald-100 shadow-inner flex items-center justify-center">
          <img
            src={currentItem.word.image}
            alt={currentItem.word.en}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Target Word */}
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-wide">
            {currentItem.word.en}
          </h3>
          <p className="text-xs sm:text-sm font-bold text-slate-400 mt-1">
            {currentItem.word.sentenceEn || `I am a ${currentItem.word.en}.`}
          </p>
          {spokenResult && (
            <p className="text-xs font-semibold text-emerald-600 mt-1 bg-emerald-50 px-3 py-1 rounded-full inline-block">
              Bé vừa nói: "{spokenResult}"
            </p>
          )}
        </div>

        {/* Star Rating Display */}
        <div className="flex items-center gap-3">
          {[1, 2, 3].map((starIdx) => (
            <div
              key={starIdx}
              className={`transition-all duration-300 transform ${
                starIdx <= starsAwarded
                  ? 'text-yellow-400 scale-125 filter drop-shadow-md'
                  : 'text-slate-200 scale-100'
              }`}
            >
              <Star className="w-8 h-8 sm:w-10 sm:h-10 fill-current" />
            </div>
          ))}
        </div>

        {/* Big Interactive Mic Button */}
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={handleStartSpeaking}
            disabled={isRecording}
            className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-xl transition-all active:scale-95 border-4 border-white ${
              isRecording
                ? 'bg-rose-500 text-white animate-pulse-glow ring-8 ring-rose-200'
                : 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-200'
            }`}
          >
            {isRecording ? <Mic className="w-10 h-10 animate-bounce" /> : <Mic className="w-10 h-10" />}
          </button>
          <span className="text-xs sm:text-sm font-extrabold text-slate-600">
            {isRecording ? 'Đang lắng nghe bé...' : 'Chạm để nói (Tap to speak)'}
          </span>
        </div>
      </div>

      {/* Pip Mascot Cheer */}
      <div className="flex items-center gap-3 p-4 rounded-3xl bg-amber-50 border-2 border-amber-200 shadow-sm">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400 bg-white flex-shrink-0 animate-bounce-soft">
          <img src="/assets/sticker_pip.png" alt="Pip" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <span className="text-xs font-black text-amber-900 bg-amber-200 px-2 py-0.5 rounded-md">
            Pip động viên
          </span>
          <p className="text-xs sm:text-sm font-bold text-slate-700 mt-1">
            "{praiseText}"
          </p>
        </div>
      </div>

      {/* Action Footer: Skip & Next */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={handleNextWord}
          className="text-xs font-bold text-slate-400 hover:text-slate-600 underline"
        >
          Bỏ qua từ này
        </button>

        <button
          onClick={handleNextWord}
          className="px-7 py-3 rounded-2xl bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-black text-base shadow-md flex items-center gap-2 transition-all"
        >
          <span>{currentIndex < items.length - 1 ? 'Từ tiếp theo' : 'Bài 5: Hội Thoại (Talk Time)'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
