import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ArrowRight, Volume2, Sparkles } from 'lucide-react';
import { LessonData } from '../../types';
import { speakText, stopSpeaking, playPopSound } from '../../utils/audio';

interface WarmUpScreenProps {
  lesson: LessonData;
  onNext: () => void;
}

export const WarmUpScreen: React.FC<WarmUpScreenProps> = ({ lesson, onNext }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(-1);

  const lyrics = lesson.warmup.lyrics;
  const lyricsVi = lesson.warmup.lyricsVi;

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const playLine = (index: number) => {
    if (index >= lyrics.length) {
      setIsPlaying(false);
      setCurrentLineIndex(-1);
      return;
    }

    setCurrentLineIndex(index);
    speakText(lyrics[index], {
      speaker: index % 2 === 0 ? 'Pip' : 'Mi',
      rate: 0.95,
      pitch: index % 2 === 0 ? 1.4 : 1.25,
      onEnd: () => {
        // short delay between lines for rhythmic chant
        setTimeout(() => {
          playLine(index + 1);
        }, 450);
      }
    });
  };

  const handleTogglePlay = () => {
    playPopSound();
    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
      setCurrentLineIndex(-1);
    } else {
      setIsPlaying(true);
      playLine(0);
    }
  };

  const handleReplay = () => {
    playPopSound();
    stopSpeaking();
    setIsPlaying(true);
    playLine(0);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col gap-5">
      {/* Top Banner / Scene */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-sky-300 via-sky-100 to-amber-50 border-4 border-amber-300 shadow-md p-4 sm:p-6 text-center">
        {/* Floating notes */}
        <div className="absolute top-2 left-4 text-pink-500 text-2xl animate-bounce-soft">🎵</div>
        <div className="absolute top-6 right-8 text-amber-500 text-3xl animate-bounce-soft" style={{ animationDelay: '0.4s' }}>🎶</div>
        <div className="absolute bottom-4 left-8 text-blue-500 text-2xl animate-bounce-soft" style={{ animationDelay: '0.8s' }}>🎼</div>
        <div className="absolute top-1/2 right-4 text-purple-500 text-2xl animate-bounce-soft" style={{ animationDelay: '1.2s' }}>🎵</div>

        {/* School & Characters visual */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
          <div className="w-28 sm:w-36 rounded-2xl overflow-hidden shadow-md border-3 border-white bg-white/90">
            <img
              src="/assets/home_characters.png"
              alt="School gate"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-wider mb-1">
              Bài Chant Khởi Động
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
              {lesson.warmup.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold">
              Giai điệu: {lesson.warmup.rhythm}
            </p>
          </div>
        </div>

        {/* Pip Singer Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-amber-200 shadow-sm text-xs font-bold text-amber-900">
          <img src="/assets/sticker_pip.png" alt="Pip" className="w-6 h-6 object-cover rounded-full" />
          <span>Bé cùng Pip và các bạn nhún nhảy và hát theo nhịp nhé!</span>
        </div>
      </div>

      {/* Lyrics Box with Interactive Karaoke Highlight */}
      <div className="rounded-3xl bg-white p-5 sm:p-7 border-3 border-amber-200 shadow-md">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-amber-100">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="font-extrabold text-slate-700 text-sm sm:text-base">
              Lời bài hát / Lời chant
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleTogglePlay}
              className={`px-4 py-2 rounded-2xl font-black text-sm flex items-center gap-2 shadow-sm transition-all active:scale-95 ${
                isPlaying
                  ? 'bg-rose-500 hover:bg-rose-600 text-white'
                  : 'bg-amber-400 hover:bg-amber-500 text-amber-950'
              }`}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlaying ? 'Tạm dừng' : 'Bật nhạc hát'}</span>
            </button>

            <button
              onClick={handleReplay}
              className="p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 active:scale-95 transition-all"
              title="Phát lại từ đầu"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {lyrics.map((line, idx) => {
            const isCurrent = currentLineIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => {
                  playPopSound();
                  setCurrentLineIndex(idx);
                  speakText(line, { speaker: idx % 2 === 0 ? 'Pip' : 'Mi' });
                }}
                className={`p-3.5 rounded-2xl cursor-pointer transition-all border-2 text-center sm:text-left flex items-center justify-between gap-3 ${
                  isCurrent
                    ? 'bg-amber-100 border-amber-400 scale-[1.02] shadow-md ring-2 ring-amber-300'
                    : 'bg-amber-50/50 border-amber-100 hover:bg-amber-50 hover:border-amber-300'
                }`}
              >
                <div>
                  <div className={`text-base sm:text-lg font-black ${isCurrent ? 'text-amber-950' : 'text-slate-800'}`}>
                    {line}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">
                    {lyricsVi[idx]}
                  </div>
                </div>
                <div className={`p-2 rounded-full ${isCurrent ? 'bg-amber-400 text-white' : 'bg-white text-amber-600'}`}>
                  <Volume2 className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Action: Next Screen */}
      <div className="flex justify-end pt-2">
        <button
          onClick={() => {
            playPopSound();
            stopSpeaking();
            onNext();
          }}
          className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-black text-base shadow-md flex items-center justify-center gap-2 transition-all"
        >
          <span>Bài 2: Từ Mới (New Words)</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
