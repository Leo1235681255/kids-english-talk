import React from 'react';
import { X, Award, Sparkles, Lock } from 'lucide-react';
import { ALL_STICKERS } from '../data/curriculum';
import { playPopSound, playStarSound } from '../utils/audio';

interface StickerBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  unlockedStickerIds: string[];
}

export const StickerBookModal: React.FC<StickerBookModalProps> = ({
  isOpen,
  onClose,
  unlockedStickerIds
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border-4 border-purple-300 shadow-2xl relative flex flex-col gap-5 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => {
            playPopSound();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 active:scale-90 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-2 shadow-inner">
            <Award className="w-8 h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-800">
            Sổ Sưu Tập Sticker Của Bé
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
            Đã thu thập {unlockedStickerIds.length} / {ALL_STICKERS.length} huy hiệu đặc biệt
          </p>
        </div>

        {/* Stickers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {ALL_STICKERS.map((st) => {
            const isUnlocked = unlockedStickerIds.includes(st.id) || unlockedStickerIds.length > 0; // friendly unlock

            return (
              <div
                key={st.id}
                onClick={() => {
                  if (isUnlocked) {
                    playStarSound();
                  }
                }}
                className={`p-4 rounded-3xl border-3 flex flex-col items-center justify-between text-center gap-2 transition-all cursor-pointer ${
                  isUnlocked
                    ? 'bg-purple-50/70 border-purple-200 hover:scale-105 shadow-sm'
                    : 'bg-slate-50 border-slate-200 opacity-60'
                }`}
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white p-2 border-2 border-purple-100 flex items-center justify-center shadow-inner relative">
                  {isUnlocked ? (
                    <img src={st.image} alt={st.name} className="w-full h-full object-contain" />
                  ) : (
                    <Lock className="w-8 h-8 text-slate-400" />
                  )}
                </div>

                <div>
                  <h4 className="font-black text-sm text-slate-800">{st.name}</h4>
                  <p className="text-[11px] font-semibold text-slate-500 mt-0.5 line-clamp-2">
                    {st.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex justify-center pt-2">
          <button
            onClick={() => {
              playPopSound();
              onClose();
            }}
            className="px-8 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-black text-sm shadow-md active:scale-95 transition-all"
          >
            Đóng Lại
          </button>
        </div>
      </div>
    </div>
  );
};
