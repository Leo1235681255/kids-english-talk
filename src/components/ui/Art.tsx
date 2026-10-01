import React from 'react';
import { Volume2 } from 'lucide-react';
import { Word } from '../../types';

/** A word's picture: a cut-out illustration when we have one, otherwise a big emoji on a tinted tile. */
export const WordArt: React.FC<{ word: Word; className?: string; emojiSize?: string }> = ({
  word,
  className = '',
  emojiSize = 'text-7xl',
}) => {
  if (word.digit) {
    const palette = ['#EF4444', '#3B82F6', '#EAB308', '#22C55E', '#EC4899', '#F97316', '#8B5CF6', '#06B6D4', '#EF4444', '#3B82F6'];
    const n = Number(word.digit);
    return (
      <div
        className={`grid place-items-center rounded-3xl ${className}`}
        style={{ background: word.tint ?? '#FFF1CC' }}
        aria-label={word.en}
      >
        <span
          className={`${emojiSize} font-black leading-none`}
          style={{ color: palette[(n - 1) % palette.length], textShadow: '0 3px 0 rgba(0,0,0,0.12)' }}
        >
          {word.digit}
        </span>
      </div>
    );
  }
  if (word.art) {
    return (
      <img
        src={word.art}
        alt={word.en}
        draggable={false}
        className={`object-contain drop-shadow-md ${word.framed ? 'rounded-2xl' : ''} ${className}`}
      />
    );
  }
  return (
    <div
      className={`grid place-items-center rounded-3xl ${className}`}
      style={{ background: word.tint ?? '#FFF1CC' }}
      aria-label={word.en}
    >
      <span className={`${emojiSize} leading-none drop-shadow-sm`}>{word.emoji ?? '⭐'}</span>
    </div>
  );
};

export const SpeakerBtn: React.FC<{
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
  label?: string;
}> = ({ onClick, size = 'md', active, label = 'Nghe' }) => {
  const dim = size === 'lg' ? 'w-16 h-16' : size === 'sm' ? 'w-9 h-9' : 'w-11 h-11';
  const icon = size === 'lg' ? 'w-8 h-8' : size === 'sm' ? 'w-4 h-4' : 'w-6 h-6';
  return (
    <button
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`round-btn ${dim} bg-gradient-to-b from-sky-400 to-blue-600 ${active ? 'ring-4 ring-white/80' : ''}`}
    >
      <Volume2 className={icon} strokeWidth={2.6} />
    </button>
  );
};

export const Bubble: React.FC<{
  children: React.ReactNode;
  tail?: 'l' | 'r' | 'none';
  className?: string;
}> = ({ children, tail = 'none', className = '' }) => (
  <div className={`bubble tail-${tail} ${className}`}>{children}</div>
);

export const Sparkles: React.FC<{ n?: number }> = ({ n = 7 }) => {
  const spots = [
    [8, 12],
    [86, 9],
    [16, 44],
    [92, 38],
    [6, 70],
    [88, 66],
    [48, 6],
    [72, 24],
  ].slice(0, n);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {spots.map(([x, y], i) => (
        <span
          key={i}
          className="absolute a-twinkle text-yellow-200 drop-shadow"
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.35}s`, fontSize: 14 + (i % 3) * 6 }}
        >
          ✦
        </span>
      ))}
    </div>
  );
};

export const Stars: React.FC<{ value: number; size?: string }> = ({ value, size = 'text-3xl' }) => (
  <div className={`flex gap-1 ${size}`} aria-label={`${value} sao`}>
    {[1, 2, 3].map((i) => (
      <span key={i} className={i <= value ? 'a-pop' : 'grayscale opacity-40'} style={{ animationDelay: `${i * 0.12}s` }}>
        ⭐
      </span>
    ))}
  </div>
);
