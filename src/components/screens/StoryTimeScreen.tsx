import React, { useState } from 'react';
import { Volume2, Play, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { LessonData, StoryPanel } from '../../types';
import { speakText, playPopSound } from '../../utils/audio';

interface StoryTimeScreenProps {
  lesson: LessonData;
  onNext: () => void;
}

export const StoryTimeScreen: React.FC<StoryTimeScreenProps> = ({
  lesson,
  onNext
}) => {
  const story = lesson.storyTime;
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const handleReadPanel = (panel: StoryPanel) => {
    playPopSound();
    setActivePanel(panel.panelNumber);
    speakText(panel.textEn, {
      speaker: panel.speaker.includes('Mi') ? 'Mi' : 'Bin',
      rate: 0.9,
      onEnd: () => setActivePanel(null)
    });
  };

  const handlePlayAllStory = () => {
    playPopSound();
    let currentIdx = 0;
    const playNext = () => {
      if (currentIdx >= story.panels.length) {
        setActivePanel(null);
        return;
      }
      const panel = story.panels[currentIdx];
      setActivePanel(panel.panelNumber);
      speakText(panel.textEn, {
        speaker: panel.speaker.includes('Mi') ? 'Mi' : 'Bin',
        rate: 0.9,
        onEnd: () => {
          currentIdx++;
          setTimeout(playNext, 700);
        }
      });
    };
    playNext();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
            Truyện Tranh (Story Time)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold">
            {story.title}
          </p>
        </div>

        <button
          onClick={handlePlayAllStory}
          className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs sm:text-sm shadow-sm active:scale-95 transition-all"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>Kể toàn bộ truyện</span>
        </button>
      </div>

      {/* Comic Panels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {story.panels.map((panel) => {
          const isActive = activePanel === panel.panelNumber;

          return (
            <div
              key={panel.panelNumber}
              onClick={() => handleReadPanel(panel)}
              className={`bg-white rounded-3xl p-4 sm:p-5 border-4 transition-all cursor-pointer shadow-md flex flex-col justify-between gap-3 ${
                isActive
                  ? 'border-indigo-500 scale-[1.02] ring-4 ring-indigo-200'
                  : 'border-slate-200 hover:border-indigo-300'
              }`}
            >
              {/* Top tag & audio icon */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                  Khung {panel.panelNumber}: {panel.speaker}
                </span>
                <div className={`p-1.5 rounded-full ${isActive ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <Volume2 className="w-4 h-4" />
                </div>
              </div>

              {/* Panel visual */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-sky-50 p-2 flex items-center justify-center border border-slate-100 shadow-inner">
                <img
                  src={panel.image}
                  alt={panel.speaker}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Text Speech Bubble */}
              <div className="p-3 rounded-2xl bg-indigo-50/70 border border-indigo-100">
                <p className="text-base sm:text-lg font-black text-slate-800 leading-snug">
                  "{panel.textEn}"
                </p>
                <p className="text-xs font-bold text-slate-500 mt-1">
                  {panel.textVi}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Next Step */}
      <div className="flex justify-end pt-2">
        <button
          onClick={() => {
            playPopSound();
            onNext();
          }}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-600 active:scale-95 text-white font-black text-base shadow-md flex items-center justify-center gap-2 transition-all"
        >
          <span>Bài 9: Ôn Tập Nhanh (Review)</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
