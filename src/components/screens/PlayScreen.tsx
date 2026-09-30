import React, { useEffect, useMemo, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { Lesson } from '../../types';
import { Nav, ScreenFrame } from '../HeaderNavbar';
import { Bubble, SpeakerBtn, WordArt } from '../ui/Art';
import { COLOR_HEX, wordOf } from '../../data/words';
import { shuffle } from '../../utils/shuffle';
import { playErrorSound, playPopSound, playSuccessSound, speakText } from '../../utils/audio';

interface GameProps {
  ids: string[];
  earn: (n: number) => void;
  onDone: () => void;
}

const PAIR_COLORS = ['#22c7d9', '#3b82f6', '#22c55e', '#a855f7', '#f97316', '#ec4899'];

/* ───────────── match: drag (or tap) a word to its picture ───────────── */
const ROW_H = 78;
const GAP = 12;
const LEFT_X = 44;
const RIGHT_X = 56;

const MatchGame: React.FC<GameProps> = ({ ids, earn, onDone }) => {
  const right = useMemo(() => shuffle(ids), [ids]);
  const [matched, setMatched] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [bad, setBad] = useState<string | null>(null);
  const [drag, setDrag] = useState<{ x: number; y: number } | null>(null);
  const box = useRef<HTMLDivElement>(null);
  const H = ids.length * ROW_H + (ids.length - 1) * GAP;
  const cy = (row: number) => row * (ROW_H + GAP) + ROW_H / 2;

  const attempt = (l: string, r: string) => {
    setSelected(null);
    if (l === r) {
      setMatched((m) => (m.includes(l) ? m : [...m, l]));
      earn(1);
      playSuccessSound();
      speakText(wordOf(l).en, { speaker: 'Pip' });
    } else {
      playErrorSound();
      setBad(l);
      window.setTimeout(() => setBad(null), 450);
    }
  };

  useEffect(() => {
    if (matched.length === ids.length) {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.55 } });
      onDone();
    }
  }, [matched]); // eslint-disable-line react-hooks/exhaustive-deps

  const toLocal = (clientX: number, clientY: number) => {
    const r = box.current!.getBoundingClientRect();
    return { x: ((clientX - r.left) / r.width) * 100, y: clientY - r.top };
  };

  // While a word is held, follow the pointer on window so nothing depends on pointer capture.
  const [held, setHeld] = useState<string | null>(null);
  useEffect(() => {
    if (!held) return;
    const move = (e: PointerEvent) => setDrag(toLocal(e.clientX, e.clientY));
    const up = (e: PointerEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY)?.closest('[data-rid]') as HTMLElement | null;
      setHeld(null);
      setDrag(null);
      if (el?.dataset.rid) attempt(held, el.dataset.rid);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
    };
  }, [held]); // eslint-disable-line react-hooks/exhaustive-deps

  const curve = (x1: number, y1: number, x2: number, y2: number) =>
    `M ${x1} ${y1} C ${x1 + 12} ${y1}, ${x2 - 12} ${y2}, ${x2} ${y2}`;

  return (
    <div className="mx-4 rounded-[2rem] bg-white/45 p-3 border-2 border-white/60">
      <div ref={box} className="relative grid grid-cols-[44%_12%_44%]" style={{ height: H }}>
        <div className="flex flex-col" style={{ gap: GAP }}>
          {ids.map((id, row) => {
            const done = matched.includes(id);
            return (
              <div
                key={id}
                onPointerDown={(e) => {
                  if (done) return;
                  playPopSound();
                  setSelected(id);
                  setHeld(id);
                  setDrag(toLocal(e.clientX, e.clientY));
                }}
                style={{ height: ROW_H, touchAction: 'none' }}
                className={`card grid place-items-center text-[1.9rem] font-black text-[#0f3a8a] cursor-pointer ${
                  selected === id ? 'ring-4 ring-sky-400' : ''
                } ${bad === id ? 'card-bad' : ''} ${done ? 'opacity-70' : ''}`}
              >
                {wordOf(id).en}
              </div>
            );
          })}
        </div>
        <div />
        <div className="flex flex-col" style={{ gap: GAP }}>
          {right.map((id) => (
            <div
              key={id}
              data-rid={id}
              onClick={() => selected && attempt(selected, id)}
              style={{ height: ROW_H }}
              className={`card grid place-items-center cursor-pointer ${matched.includes(id) ? 'opacity-70' : ''}`}
            >
              <WordArt word={wordOf(id)} className="h-[4.3rem] w-[4.3rem]" emojiSize="text-5xl" />
            </div>
          ))}
        </div>

        <svg className="absolute inset-0 pointer-events-none" width="100%" height={H} viewBox={`0 0 100 ${H}`} preserveAspectRatio="none">
          {matched.map((id) => {
            const l = ids.indexOf(id);
            const r = right.indexOf(id);
            return (
              <path
                key={id}
                d={curve(LEFT_X, cy(l), RIGHT_X, cy(r))}
                stroke={PAIR_COLORS[l % PAIR_COLORS.length]}
                strokeWidth={5}
                strokeLinecap="round"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
          {selected && drag && (
            <path
              d={curve(LEFT_X, cy(ids.indexOf(selected)), drag.x, drag.y)}
              stroke="#3b82f6"
              strokeWidth={5}
              strokeLinecap="round"
              strokeDasharray="1 9"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
          )}
        </svg>

        {/* connection dots */}
        {ids.map((id, row) => (
          <span
            key={'l' + id}
            className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white shadow"
            style={{ left: `${LEFT_X}%`, top: cy(row), background: PAIR_COLORS[row % PAIR_COLORS.length] }}
          />
        ))}
        {right.map((id, row) => (
          <span
            key={'r' + id}
            className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white shadow"
            style={{
              left: `${RIGHT_X}%`,
              top: cy(row),
              background: matched.includes(id) ? PAIR_COLORS[ids.indexOf(id) % PAIR_COLORS.length] : '#cbd5e1',
            }}
          />
        ))}
      </div>
    </div>
  );
};

/* ───────────── tap-find: hear a word, tap its picture ───────────── */
const TapFindGame: React.FC<GameProps> = ({ ids, earn, onDone }) => {
  const order = useMemo(() => shuffle(ids), [ids]);
  const [round, setRound] = useState(0);
  const [found, setFound] = useState<string[]>([]);
  const [wrong, setWrong] = useState<string[]>([]);
  const target = order[Math.min(round, order.length - 1)];
  const done = round >= order.length;

  const say = () => speakText(wordOf(target).en, { speaker: 'Pip', rate: 0.8 });
  useEffect(() => {
    if (done) return;
    const t = window.setTimeout(say, 450);
    return () => window.clearTimeout(t);
  }, [round]); // eslint-disable-line react-hooks/exhaustive-deps

  const tap = (id: string) => {
    if (done || found.includes(id)) return;
    if (id === target) {
      playSuccessSound();
      if (wrong.length === 0) earn(1);
      setFound((f) => [...f, id]);
      window.setTimeout(() => {
        setWrong([]);
        setRound((r) => r + 1);
      }, 900);
    } else {
      playErrorSound();
      setWrong((w) => [...w, id]);
      window.setTimeout(say, 450);
    }
  };

  useEffect(() => {
    if (done) {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.55 } });
      onDone();
    }
  }, [done]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="px-4">
      <div className="flex items-center gap-3">
        <SpeakerBtn size="lg" onClick={say} />
        <Bubble tail="l" className="flex-1 px-4 py-3 text-lg leading-tight">
          {done ? 'You found them all!' : 'Tap the picture I say!'}
        </Bubble>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3.5">
        {ids.map((id, i) => {
          const isFound = found.includes(id);
          return (
            <button
              key={id}
              onClick={() => tap(id)}
              style={{ animationDelay: `${i * 0.25}s` }}
              className={`card grid place-items-center p-3 aspect-[1.15] ${isFound ? 'card-ok opacity-60' : 'a-bob'} ${
                wrong.includes(id) && !isFound ? 'card-bad' : ''
              }`}
            >
              <WordArt word={wordOf(id)} className="h-[6rem] w-[6rem]" emojiSize="text-6xl" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* ───────────── balloon: pick the paint Pip names, then color a balloon ───────────── */
const Balloon: React.FC<{ fill: string | null; onClick: () => void; delay: number }> = ({ fill, onClick, delay }) => (
  <button onClick={onClick} className="a-bob" style={{ animationDelay: `${delay}s` }} aria-label="Bóng bay">
    <svg viewBox="0 0 100 150" className="w-24 h-36 drop-shadow-md">
      <path d="M50 4C24 4 8 24 8 50c0 28 22 50 42 62 20-12 42-34 42-62C92 24 76 4 50 4Z" fill={fill ?? '#ffffff'} stroke="#8a5a2b" strokeWidth="3.5" />
      {fill && <ellipse cx="32" cy="34" rx="8" ry="14" fill="#fff" opacity="0.45" transform="rotate(-20 32 34)" />}
      <path d="M44 114h12l-6 10Z" fill={fill ?? '#ffffff'} stroke="#8a5a2b" strokeWidth="3" strokeLinejoin="round" />
      <path d="M50 124c-8 8 8 14 0 24" fill="none" stroke="#8a5a2b" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </button>
);

const BalloonGame: React.FC<GameProps> = ({ ids, earn, onDone }) => {
  const order = useMemo(() => shuffle(ids), [ids]);
  const chips = useMemo(() => shuffle(ids), [ids]);
  const [round, setRound] = useState(0);
  const [picked, setPicked] = useState(false);
  const [fills, setFills] = useState<(string | null)[]>(() => ids.map(() => null));
  const [badChip, setBadChip] = useState<string | null>(null);
  const [hint, setHint] = useState('');
  const done = round >= order.length;
  const target = order[Math.min(round, order.length - 1)];

  const say = () => speakText(`${wordOf(target).en}!`, { speaker: 'Pip', rate: 0.8 });
  useEffect(() => {
    if (done) return;
    setPicked(false);
    setHint('');
    const t = window.setTimeout(say, 450);
    return () => window.clearTimeout(t);
  }, [round]); // eslint-disable-line react-hooks/exhaustive-deps

  const pickChip = (id: string) => {
    if (done) return;
    if (id === target) {
      playPopSound();
      setPicked(true);
      setHint('Now tap a balloon!');
    } else {
      playErrorSound();
      setBadChip(id);
      window.setTimeout(() => setBadChip(null), 450);
      window.setTimeout(say, 500);
    }
  };

  const tapBalloon = (i: number) => {
    if (done || fills[i]) return;
    if (!picked) {
      setHint('Pick the color first!');
      return;
    }
    playSuccessSound();
    earn(1);
    setFills((f) => f.map((x, k) => (k === i ? COLOR_HEX[target] : x)));
    window.setTimeout(() => setRound((r) => r + 1), 700);
  };

  useEffect(() => {
    if (done) {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.55 } });
      onDone();
    }
  }, [done]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="px-4">
      <div className="flex items-center gap-3">
        <SpeakerBtn size="lg" onClick={say} />
        <Bubble tail="l" className="flex-1 px-4 py-3 text-lg leading-tight">
          {done ? 'Beautiful colors!' : hint || `Color it ${wordOf(target).en}!`}
        </Bubble>
      </div>
      <div className="mt-5 grid grid-cols-2 place-items-center gap-y-2 rounded-[2rem] bg-white/45 py-4 border-2 border-white/70">
        {fills.map((f, i) => (
          <Balloon key={i} fill={f} onClick={() => tapBalloon(i)} delay={i * 0.3} />
        ))}
      </div>
      <div className="mt-5 flex justify-center gap-4">
        {chips.map((id) => (
          <button
            key={id}
            onClick={() => pickChip(id)}
            aria-label="Màu sơn"
            className={`round-btn w-14 h-14 border-4 ${picked && id === target ? 'border-white scale-110' : 'border-white/70'} ${
              badChip === id ? 'card-bad' : ''
            }`}
            style={{ background: COLOR_HEX[id] }}
          />
        ))}
      </div>
    </div>
  );
};

export const PlayScreen: React.FC<{ lesson: Lesson; nav: Nav }> = ({ lesson, nav }) => {
  const { kind, prompt, ids } = lesson.game;
  const [done, setDone] = useState(false);
  const props: GameProps = { ids, earn: nav.earn, onDone: () => setDone(true) };

  return (
    <ScreenFrame screen="play" {...nav} nextReady={done}>
      <div className="pt-2 pb-4">
        <div className="mx-auto mb-4 w-[84%] rounded-full bg-gradient-to-b from-yellow-100 to-amber-200 border-[3px] border-amber-300 px-4 py-2.5 text-center text-2xl font-black text-[#0f3a8a] shadow">
          {prompt}
        </div>
        {kind === 'match' && <MatchGame {...props} />}
        {kind === 'tapfind' && <TapFindGame {...props} />}
        {kind === 'balloon' && <BalloonGame {...props} />}
        <div className="mt-4 flex items-end gap-2 px-3">
          <img src="/art/pip_sit.png" alt="Pip" className="w-24 a-bob drop-shadow-lg" draggable={false} />
          <Bubble tail="l" className="mb-6 px-4 py-2.5 text-sm leading-snug">
            {done ? 'Great job! Tap Next!' : kind === 'match' ? 'Drag a word to its picture!' : 'Listen carefully!'}
          </Bubble>
        </div>
      </div>
    </ScreenFrame>
  );
};
