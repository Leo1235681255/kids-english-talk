import React, { useState } from 'react';
import { Check, ExternalLink, Lock } from 'lucide-react';
import { LEVELS, unitsOfLevel } from '../../data/catalog';
import { LESSONS, lessonFor } from '../../data/lessons';
import { PLAYLIST_URL, SONGS, songOf } from '../../data/music';
import { Song } from '../../types';
import { playPopSound } from '../../utils/audio';
import { SongThumb } from '../ui/Song';
import { InstallButton } from '../InstallButton';

interface Props {
  stars: number;
  collected: string[];
  done: Record<string, number>;
  onStart: (lessonId: string) => void;
  onOpenStickers: () => void;
  onPlaySong: (song: Song) => void;
}

export const HomeScreen: React.FC<Props> = ({ stars, collected, done, onStart, onOpenStickers, onPlaySong }) => {
  const [level, setLevel] = useState<1 | 2 | 3>(1);
  const [toast, setToast] = useState('');
  const info = LEVELS[level - 1];
  const continueId = (LESSONS.find((l) => !(l.id in done)) ?? LESSONS[0]).id;

  const soon = () => {
    playPopSound();
    setToast('Bài này sắp ra mắt — Pip đang chuẩn bị! 🐦');
    window.setTimeout(() => setToast(''), 2200);
  };

  return (
    <div className="min-h-[100dvh] flex items-center justify-center sm:p-5 bg-[#d8ecfb]">
      <div className="bg-home relative w-full max-w-[430px] h-[100dvh] sm:h-[min(900px,calc(100dvh-40px))] sm:rounded-[2.6rem] sm:border-[9px] sm:border-[#1c2b4d] sm:shadow-[0_30px_70px_rgba(20,40,90,0.35)] overflow-y-auto hide-scroll">
        {/* hero: the mockup's home art with a live play button over it */}
        <div className="relative">
          <img
            src="/art/home_bg.jpg"
            alt="Kids English Talk"
            draggable={false}
            className="block w-full"
            style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent 0, #000 9%)', maskImage: 'linear-gradient(to bottom, transparent 0, #000 9%)' }}
          />
          <div className="absolute left-3 top-3">
            <InstallButton />
          </div>
          <div className="absolute right-3 top-3 flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-sm font-black text-amber-600 shadow">
              ⭐ {stars}
            </div>
            <button
              onClick={() => {
                playPopSound();
                onOpenStickers();
              }}
              className="flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-sm font-black text-purple-600 shadow active:scale-95"
            >
              📒 {collected.length}
            </button>
          </div>
          <span
            className="absolute"
            style={{ left: '54.3%', top: '54.4%', width: '30%', aspectRatio: '1', transform: 'translate(-50%,-50%)' }}
          >
            <span className="absolute inset-0 rounded-full bg-orange-400/60 a-ring" />
          </span>
          <button
            aria-label="Bắt đầu học"
            onClick={() => {
              playPopSound();
              onStart(continueId);
            }}
            className="absolute rounded-full active:scale-95 transition-transform"
            style={{ left: '54.3%', top: '54.4%', width: '30%', aspectRatio: '1', transform: 'translate(-50%,-50%)' }}
          />
        </div>

        <div className="relative -mt-6 rounded-t-[2.2rem] bg-[#fffaf0] px-4 pb-10 pt-5 shadow-[0_-10px_30px_rgba(30,70,140,0.18)]">
          {/* songs: one karaoke video per unit, shown with its YouTube preview */}
          <section className="mb-6">
            <div className="flex items-end justify-between gap-2">
              <h2 className="text-2xl font-black text-[#0f3a8a]">🎵 Bài hát từng unit</h2>
              <a
                href={PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-1 text-xs font-black text-red-600"
              >
                Playlist <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <p className="text-xs font-semibold text-slate-500">Bấm vào hình để xem và hát theo cùng Mi, Bin và Pip</p>
            <div className="-mx-4 mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 hide-scroll">
              {SONGS.map((s) => (
                <div key={s.unit} className="w-[15.5rem] shrink-0 snap-start">
                  <SongThumb
                    song={s}
                    badge={`UNIT ${s.unit.slice(-2)}`}
                    onClick={() => {
                      playPopSound();
                      onPlaySong(s);
                    }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* lesson picker */}
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-black text-[#0f3a8a]">Chọn bài học</h2>
            <span className="text-xs font-bold text-slate-400">{LESSONS.length} bài đã mở</span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {LEVELS.map((l) => (
              <button
                key={l.level}
                onClick={() => {
                  playPopSound();
                  setLevel(l.level);
                }}
                className={`rounded-2xl px-2 py-2 text-center transition-all ${
                  level === l.level
                    ? 'bg-gradient-to-b from-sky-400 to-blue-600 text-white shadow-[0_4px_0_#1d4ed8]'
                    : 'bg-sky-50 text-slate-500'
                }`}
              >
                <div className="text-[11px] font-bold opacity-80">Level {l.level}</div>
                <div className="text-sm font-black leading-tight">{l.name}</div>
                <div className="text-[10px] font-bold opacity-80">{l.age}</div>
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs font-semibold text-slate-500">
            {info.cefr} · {info.blurb}
          </p>

          <div className="mt-3 grid grid-cols-2 gap-3">
            {unitsOfLevel(level).map((u) => {
              const song = songOf(u.code);
              return (
              <div key={u.code} className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_0_rgba(150,120,60,0.15),0_8px_16px_rgba(40,60,100,0.08)]">
                {song ? (
                  <div className="relative">
                    <SongThumb
                      song={song}
                      caption={false}
                      playSize="sm"
                      className="!rounded-none !shadow-none"
                      onClick={() => {
                        playPopSound();
                        onPlaySong(song);
                      }}
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-gradient-to-t from-black/70 to-transparent px-2.5 pb-1.5 pt-6">
                      <span className="text-xl drop-shadow">{u.emoji}</span>
                      <div className="min-w-0">
                        <div className="text-[9px] font-black text-white/80">UNIT {u.code.slice(-2)}</div>
                        <div className="truncate text-[13px] font-black leading-tight text-white">{u.title}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`bg-gradient-to-br ${u.color} flex items-center gap-2 px-3 py-2`}>
                    <span className="text-3xl drop-shadow">{u.emoji}</span>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black text-white/80">UNIT {u.code.slice(-2)}</div>
                      <div className="truncate text-sm font-black leading-tight text-white">{u.title}</div>
                    </div>
                  </div>
                )}
                <div className="px-3 pt-1.5 text-[11px] font-bold text-slate-500">{u.titleVi}</div>
                <div className="flex gap-1.5 px-3 pb-3 pt-1.5">
                  {[1, 2, 3, 4].map((no) => {
                    const l = lessonFor(u.code, no);
                    if (!l) {
                      return (
                        <button
                          key={no}
                          onClick={soon}
                          aria-label={`Bài ${no} sắp ra mắt`}
                          className="grid h-8 flex-1 place-items-center rounded-lg bg-slate-100 text-slate-300"
                        >
                          <Lock className="w-3.5 h-3.5" />
                        </button>
                      );
                    }
                    const isDone = l.id in done;
                    return (
                      <button
                        key={no}
                        onClick={() => {
                          playPopSound();
                          onStart(l.id);
                        }}
                        className={`relative h-8 flex-1 rounded-lg text-sm font-black text-white active:scale-95 ${
                          isDone ? 'bg-green-500' : 'bg-gradient-to-b from-orange-400 to-orange-500 shadow-[0_3px_0_#c2570c]'
                        }`}
                      >
                        {isDone ? <Check className="mx-auto w-4 h-4" strokeWidth={4} /> : `B${no}`}
                      </button>
                    );
                  })}
                </div>
              </div>
              );
            })}
          </div>

          {unitsOfLevel(level).length === 0 && (
            <div className="mt-3 rounded-2xl bg-white px-4 py-8 text-center shadow">
              <div className="text-4xl">🚀</div>
              <div className="mt-1 text-lg font-black text-[#0f3a8a]">{info.name} sắp ra mắt!</div>
              <p className="text-sm font-semibold text-slate-500">Pip đang chuẩn bị bài học mới cho các bé lớn hơn.</p>
            </div>
          )}

          <p className="mt-5 text-center text-[11px] font-semibold text-slate-400">
            Kids English Talk · cùng Mi, Bin và Pip
          </p>
        </div>

        {toast && (
          <div className="sticky bottom-4 mx-auto w-fit max-w-[90%] rounded-full bg-[#0f3a8a] px-4 py-2 text-center text-sm font-bold text-white shadow-lg a-pop">
            {toast}
          </div>
        )}
      </div>
    </div>
  );
};
