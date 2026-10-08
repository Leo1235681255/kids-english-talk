import { Song } from '../types';

/** Kids English Talk playlists on the Leo English channel, one per level. */
export const PLAYLIST_IDS: Record<number, string> = {
  1: 'PLTAl47Gy1NmY',
  2: 'PLAwZ1j64EofM',
};
export const levelOfUnit = (unit: string) => Number(unit[1]);
export const playlistUrl = (level: number) => `https://www.youtube.com/playlist?list=${PLAYLIST_IDS[level] ?? PLAYLIST_IDS[1]}`;
export const CHANNEL_NAME = 'Leo English';

/** One karaoke song per unit; Starter units 1–8 and Explorer units 1–8 are published so far. */
export const SONGS: Song[] = [
  { unit: 'L1-U01', videoId: 'MgKcgnmgyZ4', title: 'Hello & Friends Song' },
  { unit: 'L1-U02', videoId: 'wNt-9bWZexo', title: 'My Family Song' },
  { unit: 'L1-U03', videoId: 'cw_jAT4My2M', title: 'Colors Song' },
  { unit: 'L1-U04', videoId: 'x1aVWYgJKxk', title: 'Numbers Song' },
  { unit: 'L1-U05', videoId: 'ZUbGYLuJLi8', title: 'My Body Song' },
  { unit: 'L1-U06', videoId: '5EKLw-pCL7w', title: 'Animals Song' },
  { unit: 'L1-U07', videoId: 'hAlIKBQOBgc', title: 'Yummy Food Song' },
  { unit: 'L1-U08', videoId: '1GpQ1Oqovok', title: 'My Toys Song' },
  { unit: 'L2-U01', videoId: 'cZfh7dBJXzk', title: 'Stand Up, Sit Down Song' },
  { unit: 'L2-U02', videoId: 'NrR3lWZTjzg', title: 'This Is My Friend Song' },
  { unit: 'L2-U03', videoId: 'F2AEXb3-np0', title: 'Yes, I Can Song' },
  { unit: 'L2-U04', videoId: 'Zhn0HmyfGVE', title: "Let's Play Badminton Song" },
  { unit: 'L2-U05', videoId: 'I225pfUHKdU', title: 'What Time Is It Song' },
  { unit: 'L2-U06', videoId: 'M_katNtSCfY', title: 'What Day Is It Today Song' },
  { unit: 'L2-U07', videoId: 'Ii3J-WGAuSk', title: "I'm Reading a Book Song" },
  { unit: 'L2-U08', videoId: '-Zq9OIT4120', title: 'Do You Have a Pet Song' },
];

export const songOf = (unit: string): Song | undefined => SONGS.find((s) => s.unit === unit);

export const watchUrl = (s: Song) => `https://www.youtube.com/watch?v=${s.videoId}&list=${PLAYLIST_IDS[levelOfUnit(s.unit)]}`;
export const embedUrl = (s: Song) =>
  `https://www.youtube-nocookie.com/embed/${s.videoId}?autoplay=1&rel=0&playsinline=1&modestbranding=1`;
/** 16:9 preview without the black bars that hqdefault has */
export const thumbUrl = (s: Song, big = true) =>
  `https://i.ytimg.com/vi/${s.videoId}/${big ? 'maxresdefault' : 'mqdefault'}.jpg`;
