import React from 'react';
import { Play } from 'lucide-react';
import { Song } from '../../types';
import { embedUrl, thumbUrl } from '../../data/music';

/** YouTube preview image with a red play button, so kids and parents can see it is a video. */
export const SongThumb: React.FC<{
  song: Song;
  onClick: () => void;
  /** show the unit number and song name over the picture */
  caption?: boolean;
  /** small label in the top-right corner, e.g. "UNIT 01" */
  badge?: string;
  className?: string;
  playSize?: 'sm' | 'md' | 'lg';
}> = ({ song, onClick, caption = true, badge, className = '', playSize = 'md' }) => {
  const dim = playSize === 'lg' ? 'w-20 h-14' : playSize === 'sm' ? 'w-11 h-8' : 'w-16 h-11';
  const icon = playSize === 'lg' ? 'w-8 h-8' : playSize === 'sm' ? 'w-4 h-4' : 'w-6 h-6';
  return (
    <button
      onClick={onClick}
      aria-label={`Xem video: ${song.title}`}
      className={`group relative block w-full aspect-video overflow-hidden rounded-2xl bg-slate-800 text-left shadow-[0_6px_16px_rgba(20,40,90,0.25)] active:scale-[0.98] transition-transform ${className}`}
    >
      <img
        src={thumbUrl(song)}
        alt={song.title}
        loading="lazy"
        draggable={false}
        onError={(e) => {
          const el = e.currentTarget;
          if (!el.dataset.fallback) {
            el.dataset.fallback = '1';
            el.src = thumbUrl(song, false);
          }
        }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
      <span className="absolute left-2 top-2 rounded-md bg-red-600 px-1.5 py-0.5 text-[10px] font-black tracking-wide text-white shadow">
        ▶ YouTube
      </span>
      {badge && (
        <span className="absolute right-2 top-2 rounded-md bg-white/95 px-1.5 py-0.5 text-[10px] font-black text-[#0f3a8a] shadow">
          {badge}
        </span>
      )}
      <span
        className={`absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-red-600 text-white shadow-[0_4px_14px_rgba(0,0,0,0.4)] transition-transform group-hover:scale-110 ${dim}`}
      >
        <Play className={icon} fill="currentColor" />
      </span>
      {caption && (
        <span className="absolute inset-x-0 bottom-0 px-2.5 pb-1.5 pt-6 text-xs font-black leading-tight text-white drop-shadow">
          🎵 {song.title}
        </span>
      )}
    </button>
  );
};

/** Plays the video in place. Mounting starts it; unmounting stops it. */
export const SongEmbed: React.FC<{ song: Song; className?: string }> = ({ song, className = '' }) => (
  <div className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-[0_6px_16px_rgba(20,40,90,0.3)] ${className}`}>
    <iframe
      src={embedUrl(song)}
      title={song.title}
      className="absolute inset-0 h-full w-full"
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>
);
