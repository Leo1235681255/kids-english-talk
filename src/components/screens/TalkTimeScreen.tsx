import React, { useState } from 'react';
import { Volume2, Play, Mic, CheckCircle, ArrowRight, UserCheck, Sparkles } from 'lucide-react';
import { LessonData, DialogueLine } from '../../types';
import { speakText, playSuccessSound, playPopSound } from '../../utils/audio';

interface TalkTimeScreenProps {
  lesson: LessonData;
  onNext: () => void;
  onEarnStar: () => void;
}

export const TalkTimeScreen: React.FC<TalkTimeScreenProps> = ({
  lesson,
  onNext,
  onEarnStar
}) => {
  const dialogue = lesson.talkTime.dialogue;
  const [activeLineIndex, setActiveLineIndex] = useState<number>(0);
  const [isRoleplayMode, setIsRoleplayMode] = useState<boolean>(false);
  const [myRole, setMyRole] = useState<'Mi' | 'Bin'>('Mi');
  const [completedLines, setCompletedLines] = useState<number[]>([]);

  const handleReadLine = (line: DialogueLine, index: number) => {
    playPopSound();
    setActiveLineIndex(index);
    speakText(line.en, {
      speaker: line.speaker as any,
      rate: 0.9
    });
  };

  const handlePlayFullDialogue = () => {
    playPopSound();
    let currentIdx = 0;
    const playNext = () => {
      if (currentIdx >= dialogue.length) return;
      setActiveLineIndex(currentIdx);
      const line = dialogue[currentIdx];
      speakText(line.en, {
        speaker: line.speaker as any,
        rate: 0.9,
        onEnd: () => {
          currentIdx++;
          setTimeout(playNext, 600);
        }
      });
    };
    playNext();
  };

  const handleRoleplaySpeak = (index: number) => {
    playSuccessSound();
    onEarnStar();
    if (!completedLines.includes(index)) {
      setCompletedLines([...completedLines, index]);
    }
    const line = dialogue[index];
    speakText(line.en, {
      speaker: line.speaker as any,
      rate: 0.9
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col gap-5">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
            Hội Thoại (Talk Time)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold">
            {lesson.talkTime.scene}
          </p>
        </div>

        {/* Mode Toggle & Auto-play */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePlayFullDialogue}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-xs sm:text-sm shadow-sm active:scale-95 transition-all"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Nghe toàn bộ</span>
          </button>

          <button
            onClick={() => {
              playPopSound();
              setIsRoleplayMode(!isRoleplayMode);
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl font-black text-xs sm:text-sm shadow-sm transition-all active:scale-95 ${
              isRoleplayMode
                ? 'bg-rose-500 text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>{isRoleplayMode ? 'Đang Đóng Vai' : 'Bé Đóng Vai'}</span>
          </button>
        </div>
      </div>

      {/* Roleplay role selector if active */}
      {isRoleplayMode && (
        <div className="flex items-center justify-between p-3 rounded-2xl bg-rose-50 border-2 border-rose-200">
          <span className="text-xs sm:text-sm font-extrabold text-rose-900">
            Chọn nhân vật bé muốn đóng vai:
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                playPopSound();
                setMyRole('Mi');
              }}
              className={`px-3 py-1 rounded-xl font-black text-xs transition-all ${
                myRole === 'Mi' ? 'bg-amber-400 text-amber-950 shadow-sm' : 'bg-white text-slate-600'
              }`}
            >
              👩 Bé Mi
            </button>
            <button
              onClick={() => {
                playPopSound();
                setMyRole('Bin');
              }}
              className={`px-3 py-1 rounded-xl font-black text-xs transition-all ${
                myRole === 'Bin' ? 'bg-blue-500 text-white shadow-sm' : 'bg-white text-slate-600'
              }`}
            >
              👦 Bạn Bin
            </button>
          </div>
        </div>
      )}

      {/* Dialogue Stream */}
      <div className="flex flex-col gap-4">
        {dialogue.map((line, idx) => {
          const isLeft = line.speaker === 'Mi';
          const isPip = line.speaker === 'Pip';
          const isChildRole = isRoleplayMode && line.speaker === myRole;
          const isCompleted = completedLines.includes(idx);
          const isActive = activeLineIndex === idx;

          return (
            <div
              key={line.id}
              className={`flex items-start gap-3 sm:gap-4 ${
                isPip ? 'justify-center my-1' : isLeft ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Speaker avatar on Left */}
              {isLeft && (
                <div
                  onClick={() => handleReadLine(line, idx)}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-3 border-amber-400 bg-white shadow-md flex-shrink-0 cursor-pointer hover:scale-105 transition-all"
                  title="Chạm để nghe Mi nói"
                >
                  <img src={line.avatar} alt={line.speaker} className="w-full h-full object-cover" />
                </div>
              )}

              {/* Pip Centered Banner */}
              {isPip ? (
                <div
                  onClick={() => handleReadLine(line, idx)}
                  className="max-w-md w-full p-4 rounded-3xl bg-amber-100 border-2 border-amber-300 shadow-sm flex items-center gap-3 cursor-pointer hover:bg-amber-200/80 transition-all"
                >
                  <img src={line.avatar} alt="Pip" className="w-10 h-10 object-contain rounded-full bg-white p-1 border" />
                  <div className="flex-1">
                    <span className="text-xs font-black text-amber-900 block">Chim Sẻ Pip:</span>
                    <span className="text-sm sm:text-base font-black text-slate-800 block">{line.en}</span>
                    <span className="text-xs font-bold text-amber-800 block">{line.vi}</span>
                  </div>
                  <Volume2 className="w-5 h-5 text-amber-700" />
                </div>
              ) : (
                /* Speech Bubble */
                <div
                  className={`max-w-[78%] sm:max-w-md p-4 sm:p-5 rounded-3xl border-3 shadow-md transition-all ${
                    isLeft
                      ? 'bg-amber-50/90 border-amber-200 speech-bubble-left'
                      : 'bg-blue-50/90 border-blue-200 speech-bubble-right'
                  } ${isActive ? 'ring-4 ring-yellow-300' : ''}`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className={`text-xs font-black px-2 py-0.5 rounded-md ${
                      isLeft ? 'bg-amber-200 text-amber-900' : 'bg-blue-200 text-blue-900'
                    }`}>
                      {line.speaker}
                    </span>

                    {/* Roleplay action */}
                    {isChildRole ? (
                      <button
                        onClick={() => handleRoleplaySpeak(idx)}
                        className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black shadow-sm transition-all active:scale-95 ${
                          isCompleted
                            ? 'bg-emerald-500 text-white'
                            : 'bg-rose-500 text-white animate-pulse-glow'
                        }`}
                      >
                        {isCompleted ? <CheckCircle className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                        <span>{isCompleted ? 'Đã nói!' : 'Lượt của bé!'}</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleReadLine(line, idx)}
                        className="p-1.5 rounded-full hover:bg-white text-slate-600 transition-all"
                        title="Nghe câu này"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <p className="text-base sm:text-lg font-black text-slate-800 leading-snug">
                    {line.en}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    {line.vi}
                  </p>
                </div>
              )}

              {/* Speaker avatar on Right */}
              {!isLeft && !isPip && (
                <div
                  onClick={() => handleReadLine(line, idx)}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-3 border-blue-400 bg-white shadow-md flex-shrink-0 cursor-pointer hover:scale-105 transition-all"
                  title="Chạm để nghe Bin nói"
                >
                  <img src={line.avatar} alt={line.speaker} className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Next Step Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={() => {
            playPopSound();
            onNext();
          }}
          className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-black text-base shadow-md flex items-center justify-center gap-2 transition-all"
        >
          <span>Bài 6: Trò Chơi Ôn Tập (Play)</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
