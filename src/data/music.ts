import { Song } from '../types';

/** Kids English Talk playlist on the Leo English channel. */
export const PLAYLIST_ID = 'PLTAl47Gy1NmY';
export const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;
export const CHANNEL_NAME = 'Leo English';

/** One karaoke song per unit; the first 8 Starter units are published so far. */
export const SONGS: Song[] = [
  { unit: 'L1-U01', videoId: 'MgKcgnmgyZ4', title: 'Hello & Friends Song' },
  { unit: 'L1-U02', videoId: 'wNt-9bWZexo', title: 'My Family Song' },
  { unit: 'L1-U03', videoId: 'cw_jAT4My2M', title: 'Colors Song' },
  { unit: 'L1-U04', videoId: 'x1aVWYgJKxk', title: 'Numbers Song' },
  { unit: 'L1-U05', videoId: 'ZUbGYLuJLi8', title: 'My Body Song' },
  { unit: 'L1-U06', videoId: '5EKLw-pCL7w', title: 'Animals Song' },
  { unit: 'L1-U07', videoId: 'hAlIKBQOBgc', title: 'Yummy Food Song' },
  { unit: 'L1-U08', videoId: '1GpQ1Oqovok', title: 'My Toys Song' },
];

export const songOf = (unit: string): Song | undefined => SONGS.find((s) => s.unit === unit);

export const watchUrl = (s: Song) => `https://www.youtube.com/watch?v=${s.videoId}&list=${PLAYLIST_ID}`;
export const embedUrl = (s: Song) =>
  `https://www.youtube-nocookie.com/embed/${s.videoId}?autoplay=1&rel=0&playsinline=1&modestbranding=1`;
/** 16:9 preview without the black bars that hqdefault has */
export const thumbUrl = (s: Song, big = true) =>
  `https://i.ytimg.com/vi/${s.videoId}/${big ? 'maxresdefault' : 'mqdefault'}.jpg`;
