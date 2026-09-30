import React from 'react';
import { Sticker } from '../../types';

/** A collectible sticker: real cut-out art when we have it, else an emoji on a white-rimmed disc. */
export const StickerImg: React.FC<{ sticker: Sticker; className?: string }> = ({ sticker, className = 'w-16 h-16' }) =>
  sticker.art ? (
    <img src={sticker.art} alt={sticker.name} draggable={false} className={`object-contain drop-shadow-md ${className}`} />
  ) : (
    <div
      className={`grid place-items-center rounded-full bg-white border-[5px] border-white shadow-md ${className}`}
      style={{ boxShadow: '0 0 0 3px #fde68a inset, 0 4px 10px rgba(0,0,0,0.15)' }}
      aria-label={sticker.name}
    >
      <span className="text-3xl leading-none">{sticker.emoji ?? '⭐'}</span>
    </div>
  );

export const LockedSticker: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <div className={`grid place-items-center rounded-full bg-white/50 border-4 border-dashed border-white/80 ${className}`}>
    <span className="text-xl opacity-60">🔒</span>
  </div>
);
