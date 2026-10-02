import React, { useEffect } from 'react';
import { ExternalLink, ListMusic, X } from 'lucide-react';
import { Song } from '../types';
import { unitByCode } from '../data/catalog';
import { lessonFor } from '../data/lessons';
import { CHANNEL_NAME, PLAYLIST_URL, watchUrl } from '../data/music';
import { stopSpeaking } from '../utils/audio';
import { SongEmbed } from './ui/Song';

interface Props {
  song: Song | null;
  onClose: () => void;
  /** jump into the unit's first lesson */
  onLearn?: (lessonId: string) => void;
}

/** Bottom sheet that plays a unit's song video. */
export const MusicModal: React.FC<Props> = ({ song, onClose, onLearn }) => {
  useEffect(() => {
    if (song) stopSpeaking();
  }, [song]);

  if (!song) return null;
  const unit = unitByCode(song.unit);
  const first = lessonFor(song.unit, 1);

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/55" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[430px] rounded-t-[2rem] bg-gradient-to-b from-[#ffe9a8] to-[#fffaf0] px-4 pb-6 pt-4 a-pop"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[11px] font-black uppercase tracking-wide text-orange-600">
              🎵 Unit {song.unit.slice(-2)} · {unit?.title}
            </div>
            <h2 className="text-xl font-black leading-tight text-[#0f3a8a]">{song.title}</h2>
            <p className="text-xs font-semibold text-slate-500">Kids English Talk · {CHANNEL_NAME}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-slate-500 shadow"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <SongEmbed song={song} className="mt-3" />

        <div className="mt-3 flex flex-wrap gap-2">
          {first && onLearn && (
            <button
              onClick={() => {
                onClose();
                onLearn(first.id);
              }}
              className="pill-btn flex-1 px-4 py-2.5 text-center text-base"
            >
              Học Unit này
            </button>
          )}
          <a
            href={watchUrl(song)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-sm font-black text-red-600 shadow active:scale-95"
          >
            <ExternalLink className="h-4 w-4" /> Mở YouTube
          </a>
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-sm font-black text-sky-600 shadow active:scale-95"
          >
            <ListMusic className="h-4 w-4" /> Cả playlist
          </a>
        </div>
      </div>
    </div>
  );
};
