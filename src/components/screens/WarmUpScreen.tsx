import React, { useEffect, useRef, useState } from 'react';
import { Languages, Pause, Play } from 'lucide-react';
import { Lesson } from '../../types';
import { Nav, ScreenFrame } from '../HeaderNavbar';
import { speakText, stopSpeaking } from '../../utils/audio';

const NOTES = [
  { c: 'text-sky-500', x: 6, y: 22, d: 0 },
  { c: 'text-pink-400', x: 84, y: 34, d: 0.6 },
  { c: 'text-yellow-400', x: 10, y: 50, d: 1.1 },
  { c: 'text-emerald-500', x: 90, y: 14, d: 1.6 },
];

export const WarmUpScreen: React.FC<{ lesson: Lesson; nav: Nav }> = ({ lesson, nav }) => {
  const { lines, title, rhythm } = lesson.chant;
  const [active, setActive] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [showVi, setShowVi] = useState(false);
  const [played, setPlayed] = useState(false);
  const token = useRef(0);

  const stop = () => {
    token.current++;
    stopSpeaking();
    setPlaying(false);
    setActive(-1);
  };

  const play = () => {
    const my = ++token.current;
    setPlaying(true);
    const step = (i: number) => {
      if (token.current !== my) return;
      if (i >= lines.length) {
        setPlaying(false);
        setActive(-1);
        setPlayed(true);
        return;
      }
      setActive(i);
      speakText(lines[i].en, { speaker: 'Mi', rate: 0.85, onEnd: () => window.setTimeout(() => step(i + 1), 220) });
    };
    step(0);
  };

  useEffect(() => stop, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ScreenFrame screen="warmup" {...nav} nextReady={played}>
      <div className="relative min-h-full">
        {NOTES.map((n, i) => (
          <span
            key={i}
            className={`absolute text-3xl a-bob ${n.c}`}
            style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${n.d}s` }}
          >
            ♪
          </span>
        ))}

        {/* chant cloud */}
        <div className="relative mx-4 mt-3 rounded-[2.2rem] bg-white/95 px-5 py-4 text-center shadow-[0_10px_28px_rgba(30,70,140,0.22)] border-[3px] border-white">
          <div className="text-[11px] font-black uppercase tracking-wide text-orange-500">{title}</div>
          <div className="mt-1 space-y-0.5">
            {lines.map((l, i) => (
              <div key={i} className={`transition-all ${active === i ? 'scale-105' : ''}`}>
                <div
                  className={`text-[1.3rem] leading-tight font-black ${
                    active === i ? 'text-orange-500' : 'text-[#0f3a8a]'
                  }`}
                >
                  {l.en}
                </div>
                {showVi && <div className="text-xs font-semibold text-slate-500">{l.vi}</div>}
              </div>
            ))}
          </div>
          <div className="mt-2 text-[11px] font-semibold text-slate-400">🎵 {rhythm}</div>

          <div className="mt-3 flex items-center justify-center gap-2">
            <button
              onClick={playing ? stop : play}
              className="pill-btn flex items-center gap-2 px-5 py-2 text-base"
            >
              {playing ? <Pause className="w-5 h-5" fill="currentColor" /> : <Play className="w-5 h-5" fill="currentColor" />}
              {playing ? 'Dừng' : 'Hát cùng Pip'}
            </button>
            <button
              onClick={() => setShowVi((v) => !v)}
              aria-label="Hiện / ẩn tiếng Việt"
              className={`grid place-items-center w-10 h-10 rounded-full border-2 ${
                showVi ? 'bg-sky-500 border-sky-500 text-white' : 'bg-white border-sky-200 text-sky-500'
              }`}
            >
              <Languages className="w-5 h-5" />
            </button>
          </div>
          {/* bubble tail */}
          <span className="absolute -bottom-3 right-16 w-6 h-6 rotate-45 bg-white/95 border-r-[3px] border-b-[3px] border-white" />
        </div>

        <img
          src="/art/pip_fly.png"
          alt="Pip"
          className="absolute right-2 top-[58%] w-24 a-sway drop-shadow-lg"
          draggable={false}
        />
        <img
          src="/art/duo.png"
          alt="Mi và Bin"
          className={`absolute left-0 bottom-0 w-[86%] drop-shadow-xl ${playing ? 'a-bob' : ''}`}
          draggable={false}
        />
      </div>
    </ScreenFrame>
  );
};
