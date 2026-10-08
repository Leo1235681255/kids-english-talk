import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { Line, Lesson, Speaker } from '../../types';
import { Nav, ScreenFrame } from '../HeaderNavbar';
import { speakText, stopSpeaking } from '../../utils/audio';
import { SPEAKERS } from '../../data/speakers';

const PANEL_BG = [
  'linear-gradient(180deg,#9ddcff 0%,#d3f1c8 60%,#f3d9a4 100%)',
  'linear-gradient(180deg,#ffd9a8 0%,#ffe9b5 55%,#cfeec0 100%)',
  'linear-gradient(180deg,#bfe6ff 0%,#e3f6cf 60%,#ffe2a8 100%)',
];

/** A lesson with its own story uses it; otherwise the Talk Time dialogue is retold as a comic. */
const pagesOf = (lesson: Lesson): Line[] => {
  return lesson.story?.pages ?? lesson.talk.lines;
};

export const StoryTimeScreen: React.FC<{ lesson: Lesson; nav: Nav }> = ({ lesson, nav }) => {
  const pages = useMemo(() => pagesOf(lesson), [lesson]);
  const panels = useMemo(() => {
    const out: Line[][] = [];
    for (let i = 0; i < pages.length; i += 2) out.push(pages.slice(i, i + 2));
    return out;
  }, [pages]);
  const [active, setActive] = useState(-1); // line index being read
  const [read, setRead] = useState(false);
  const token = useRef(0);

  const readFrom = async (start: number, end: number) => {
    const my = ++token.current;
    stopSpeaking();
    for (let i = start; i < end; i++) {
      if (token.current !== my) return;
      setActive(i);
      await new Promise<void>((res) => {
        let done = false;
        const fin = () => {
          if (!done) {
            done = true;
            window.setTimeout(res, 250);
          }
        };
        speakText(pages[i].en, { speaker: SPEAKERS[pages[i].who].voice, rate: 0.9, onEnd: fin });
        window.setTimeout(fin, Math.max(1800, pages[i].en.length * 160));
      });
    }
    if (token.current === my) {
      setActive(-1);
      if (end - start > 2) setRead(true);
    }
  };

  useEffect(
    () => () => {
      token.current++;
      stopSpeaking();
    },
    []
  );

  const title = lesson.story?.title ?? lesson.title;

  return (
    <ScreenFrame screen="storytime" {...nav} nextReady={read}>
      <div className="px-3 pt-2 pb-2">
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="rounded-full bg-white/85 px-3.5 py-1 text-base font-black text-purple-700 shadow">📖 {title}</div>
          <button
            onClick={() => readFrom(0, pages.length)}
            className="pill-btn flex items-center gap-1.5 px-3.5 py-1.5 text-sm"
          >
            <Play className="w-4 h-4" fill="currentColor" /> Nghe cả truyện
          </button>
        </div>

        <div className="space-y-3">
          {panels.map((panel, pi) => (
            <div
              key={pi}
              onClick={() => readFrom(pi * 2, pi * 2 + panel.length)}
              className="relative flex flex-col overflow-hidden rounded-2xl border-[3px] border-white shadow-[0_6px_14px_rgba(40,60,100,0.2)] cursor-pointer"
              style={{ background: PANEL_BG[pi % PANEL_BG.length] }}
            >
              <div className="space-y-1.5 px-2 pt-2">
                {panel.map((line, k) => {
                  const idx = pi * 2 + k;
                  return (
                    <div key={k} className={`flex ${k === 0 ? 'justify-start' : 'justify-end'}`}>
                      <div
                        className={`bubble tail-none !rounded-2xl max-w-[88%] px-3 py-1.5 text-center leading-tight ${
                          active === idx ? '!border-orange-400 ring-2 ring-orange-300' : ''
                        }`}
                      >
                        <div className="text-[0.98rem]">{line.en}</div>
                        <div className="text-[10px] font-semibold text-slate-400">{line.vi}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex h-24 items-end justify-between px-[6%] pt-1">
                {panel.map((line, k) => (
                  <img
                    key={k}
                    src={SPEAKERS[line.who].avatar}
                    alt={line.who}
                    draggable={false}
                    className={`h-full w-auto max-w-[40%] object-contain object-bottom ${k === 1 ? 'ml-auto' : ''} ${
                      active === pi * 2 + k ? 'a-bob' : ''
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-end gap-2">
          <img src="/art/pip_sit.png" alt="Pip" className="w-24 a-bob drop-shadow-lg" draggable={false} />
          <div className="bubble tail-l mb-6 px-4 py-2.5 text-sm leading-snug">
            Tap a picture
            <br />
            to hear the story!
          </div>
        </div>
      </div>
    </ScreenFrame>
  );
};
