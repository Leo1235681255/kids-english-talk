import React from 'react';
import { X } from 'lucide-react';
import { UNITS } from '../data/catalog';
import { lessonFor } from '../data/lessons';
import { LockedSticker, StickerImg } from './ui/Sticker';

interface Props {
  open: boolean;
  onClose: () => void;
  collected: string[];
}

export const StickerBookModal: React.FC<Props> = ({ open, onClose, collected }) => {
  if (!open) return null;
  // only units that already have lessons
  const units = UNITS.filter((u) => lessonFor(u.code, 1));
  const total = units.length * 4;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[430px] max-h-[86dvh] overflow-y-auto hide-scroll rounded-t-[2rem] bg-gradient-to-b from-[#fff3c4] to-[#fffaf0] px-4 pb-8 pt-4 a-pop"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-[#0f3a8a]">📒 Sổ sticker</h2>
            <p className="text-xs font-bold text-slate-500">
              Đã sưu tầm {collected.length}/{total}
            </p>
          </div>
          <button onClick={onClose} aria-label="Đóng" className="grid place-items-center w-10 h-10 rounded-full bg-white shadow text-slate-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-3 space-y-3">
          {units.map((u) => (
            <div key={u.code} className="rounded-2xl bg-white/80 px-3 py-2.5 shadow-sm">
              <div className="mb-2 text-sm font-black text-[#0f3a8a]">
                {u.emoji} {u.code.slice(3)} · {u.title}
              </div>
              <div className="flex items-center justify-around">
                {[1, 2, 3, 4].map((no) => {
                  const l = lessonFor(u.code, no);
                  return l && collected.includes(l.id) ? (
                    <StickerImg key={no} sticker={l.sticker} className="w-14 h-14" />
                  ) : (
                    <LockedSticker key={no} className="w-14 h-14" />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
