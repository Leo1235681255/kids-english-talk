import React, { useMemo, useState } from 'react';
import { Snail } from 'lucide-react';
import { Lesson } from '../../types';
import { Nav, ScreenFrame } from '../HeaderNavbar';
import { Bubble, SpeakerBtn, WordArt } from '../ui/Art';
import { wordOf } from '../../data/words';
import { playPopSound, speakSlow, speakText } from '../../utils/audio';

/** Shared by New Words and Review: a grid of tappable flashcards. */
export const FlashGrid: React.FC<{
  lesson: Lesson;
  onHeard: (id: string) => void;
  compact?: boolean;
}> = ({ lesson, onHeard, compact }) => {
  const words = useMemo(() => lesson.words.map(wordOf), [lesson]);
  const [active, setActive] = useState<string | null>(null);

  const hear = (id: string, slow = false) => {
    const w = wordOf(id);
    playPopSound();
    setActive(id);
    onHeard(id);
    const done = () => setActive(null);
    if (slow) speakSlow(w.en, done);
    else speakText(w.en, { speaker: 'Pip', rate: 0.85, onEnd: done });
  };

  return (
    <div className="grid grid-cols-2 gap-3.5 px-4">
      {words.map((w, i) => {
        const last = words.length % 2 === 1 && i === words.length - 1;
        return (
          <div
            key={w.id}
            onClick={() => hear(w.id)}
            className={`card relative flex flex-col items-center px-2 pt-3 pb-3 cursor-pointer ${
              last ? 'col-span-2 mx-auto w-[calc(50%-0.4rem)]' : ''
            } ${active === w.id ? 'card-ok' : ''}`}
          >
            <WordArt
              word={w}
              className={compact ? 'h-24 w-24' : 'h-28 w-28'}
              emojiSize={compact ? 'text-6xl' : 'text-7xl'}
            />
            <div className="mt-1 text-[1.65rem] leading-none font-black text-[#0f3a8a]">{w.en}</div>
            <div className="text-xs font-bold text-slate-400 mt-0.5">{w.vi}</div>
            <div className="mt-2 flex items-center gap-2">
              <SpeakerBtn onClick={() => hear(w.id)} active={active === w.id} />
              <button
                aria-label="Nghe chậm"
                onClick={(e) => {
                  e.stopPropagation();
                  hear(w.id, true);
                }}
                className="grid place-items-center w-9 h-9 rounded-full bg-amber-100 text-amber-700 active:scale-90"
              >
                <Snail className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const NewWordsScreen: React.FC<{ lesson: Lesson; nav: Nav }> = ({ lesson, nav }) => {
  const [heard, setHeard] = useState<Set<string>>(new Set());
  const all = heard.size >= lesson.words.length;

  return (
    <ScreenFrame screen="newwords" {...nav} nextReady={all}>
      <div className="pt-3 pb-4">
        <FlashGrid
          lesson={lesson}
          onHeard={(id) => setHeard((s) => new Set(s).add(id))}
        />
        <div className="mt-4 flex items-end gap-2 px-3">
          <img src="/art/pip_sit.png" alt="Pip" className="w-28 a-bob drop-shadow-lg" draggable={false} />
          <Bubble tail="l" className="mb-6 px-4 py-3 text-base leading-snug">
            Tap the picture
            <br />
            to hear the word!
          </Bubble>
        </div>
      </div>
    </ScreenFrame>
  );
};
