import React, { useEffect, useRef, useState } from 'react';
import { Eye, Mic, Theater } from 'lucide-react';
import { Lesson, Speaker } from '../../types';
import { Nav, ScreenFrame } from '../HeaderNavbar';
import { useMic } from '../../hooks/useMic';
import { playStarSound, speakText, stopSpeaking } from '../../utils/audio';

type Mode = 'watch' | 'play';

const NAME_COLOR: Record<Speaker, string> = {
  Mi: 'bg-yellow-400 text-yellow-950',
  Bin: 'bg-blue-500 text-white',
  Pip: 'bg-orange-500 text-white',
};

/** Resolve after the line is spoken; the timeout covers browsers without speech synthesis. */
const speakP = (text: string, who: Speaker) =>
  new Promise<void>((res) => {
    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        res();
      }
    };
    speakText(text, { speaker: who, rate: 0.9, onEnd: () => window.setTimeout(finish, 350) });
    window.setTimeout(finish, Math.max(2000, text.length * 160));
  });

export const TalkTimeScreen: React.FC<{ lesson: Lesson; nav: Nav }> = ({ lesson, nav }) => {
  const { lines, scene, roleplay } = lesson.talk;
  const [mode, setMode] = useState<Mode>('watch');
  const [shown, setShown] = useState(0);
  const [turn, setTurn] = useState(-1); // index of the child's line being waited on
  const [watched, setWatched] = useState(false);
  const [finished, setFinished] = useState(false);
  const token = useRef(0);
  const resolveTurn = useRef<(() => void) | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const mic = useMic();

  const run = async (m: Mode) => {
    const my = ++token.current;
    stopSpeaking();
    resolveTurn.current?.();
    mic.reset();
    setMode(m);
    setShown(0);
    setTurn(-1);
    setFinished(false);
    for (let i = 0; i < lines.length; i++) {
      if (token.current !== my) return;
      setShown(i + 1);
      const l = lines[i];
      if (m === 'play' && l.who === roleplay) {
        mic.reset();
        setTurn(i);
        await new Promise<void>((res) => (resolveTurn.current = res));
        if (token.current !== my) return;
        setTurn(-1);
        nav.earn(1);
        playStarSound();
        await new Promise((r) => window.setTimeout(r, 600));
      } else {
        await speakP(l.en, l.who);
      }
    }
    if (token.current !== my) return;
    setFinished(true);
    if (m === 'watch') setWatched(true);
  };

  useEffect(() => {
    const t = window.setTimeout(() => run('watch'), 500);
    return () => {
      window.clearTimeout(t);
      token.current++;
      stopSpeaking();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [shown, turn, mic.state]);

  const childLine = turn >= 0 ? lines[turn] : null;

  return (
    <ScreenFrame screen="talktime" {...nav} nextReady={finished && mode === 'play'}>
      <div className="relative h-full">
        <img
          src="/art/duo.png"
          alt=""
          className="absolute left-0 bottom-0 w-[80%] opacity-95 drop-shadow-xl pointer-events-none"
          draggable={false}
        />
        <img
          src="/art/pip_fly.png"
          alt="Pip"
          className="absolute right-1 top-1 w-20 a-sway drop-shadow-lg pointer-events-none"
          draggable={false}
        />

        <div className="absolute inset-0 overflow-y-auto hide-scroll px-3 pt-2 pb-4">
          <div className="mr-20 rounded-2xl bg-white/80 px-3 py-1.5 text-center text-xs font-bold text-slate-600">
            📍 {scene}
          </div>

          <div className="mt-3 space-y-3">
            {lines.slice(0, shown).map((l, i) => {
              const mine = mode === 'play' && l.who === roleplay;
              const side = l.who === 'Mi' ? 'justify-start' : l.who === 'Bin' ? 'justify-end' : 'justify-center';
              const isTurn = turn === i;
              return (
                <div key={i} className={`flex ${side} a-pop`}>
                  <div className="max-w-[78%]">
                    <span className={`mb-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-black ${NAME_COLOR[l.who]}`}>
                      {l.who}
                    </span>
                    <div
                      className={`bubble tail-none px-4 py-2.5 ${isTurn ? '!border-yellow-400 ring-4 ring-yellow-300/70' : ''} ${
                        mine && !isTurn ? '!bg-amber-50' : ''
                      }`}
                    >
                      <div className="text-[1.25rem] leading-tight">{l.en}</div>
                      <div className="mt-0.5 text-xs font-semibold text-slate-400">{l.vi}</div>
                    </div>
                  </div>
                </div>
              );
            })}

            {childLine && (
              <div className="flex flex-col items-center gap-2 pt-1 a-pop">
                <div className="rounded-full bg-yellow-300 px-4 py-1 text-sm font-black text-yellow-950 shadow">
                  Đến lượt bé! Bé là {roleplay} 🎤
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => mic.start(childLine.en, () => window.setTimeout(() => resolveTurn.current?.(), 900))}
                    aria-label="Bấm để nói"
                    className="round-btn relative w-16 h-16 bg-gradient-to-b from-green-400 to-emerald-600"
                  >
                    {mic.state === 'listening' && <span className="absolute inset-0 rounded-full bg-emerald-400 a-ring" />}
                    <Mic className="relative w-8 h-8" strokeWidth={2.4} />
                  </button>
                  <button
                    onClick={() => resolveTurn.current?.()}
                    className="rounded-full bg-white/80 px-4 py-1.5 text-sm font-black text-slate-500 active:scale-95"
                  >
                    Bỏ qua
                  </button>
                </div>
                <div className="text-xs font-bold text-slate-600">
                  {mic.state === 'listening' ? 'Listening…' : mic.state === 'done' ? 'Great! ⭐' : mic.state === 'error' ? 'Mic chưa bật — bấm "Bỏ qua" nhé' : 'Bấm mic rồi nói nhé'}
                </div>
              </div>
            )}

            {finished && (
              <div className="flex flex-wrap justify-center gap-2 pt-2 a-pop">
                <button
                  onClick={() => run('watch')}
                  className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-black text-sky-600 shadow active:scale-95"
                >
                  <Eye className="w-4 h-4" /> Xem lại
                </button>
                <button
                  onClick={() => run('play')}
                  className="pill-btn flex items-center gap-1.5 px-4 py-2 text-sm"
                >
                  <Theater className="w-4 h-4" /> {mode === 'watch' ? `Bé đóng vai ${roleplay}` : 'Đóng vai lại'}
                </button>
              </div>
            )}
            {watched && !finished && mode === 'watch' && <div />}
            <div ref={endRef} />
          </div>
        </div>
      </div>
    </ScreenFrame>
  );
};
