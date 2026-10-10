import { Song } from '../types';

/** Kids English Talk playlists on the Leo English channel, one per level. */
export const PLAYLIST_IDS: Record<number, string> = {
  1: 'PLTAl47Gy1NmY',
  2: 'PLTQTUbc8FRiY',
};
export const levelOfUnit = (unit: string) => Number(unit[1]);
export const playlistUrl = (level: number) => `https://www.youtube.com/playlist?list=${PLAYLIST_IDS[level] ?? PLAYLIST_IDS[1]}`;
export const CHANNEL_NAME = 'Leo English';

/** One karaoke song per unit; all 16 Starter and 16 Explorer units are published. */
export const SONGS: Song[] = [
  { unit: 'L1-U01', videoId: 'MgKcgnmgyZ4', title: 'Hello & Friends Song' },
  { unit: 'L1-U02', videoId: 'wNt-9bWZexo', title: 'My Family Song' },
  { unit: 'L1-U03', videoId: 'cw_jAT4My2M', title: 'Colors Song' },
  { unit: 'L1-U04', videoId: 'x1aVWYgJKxk', title: 'Numbers Song' },
  { unit: 'L1-U05', videoId: 'ZUbGYLuJLi8', title: 'My Body Song' },
  { unit: 'L1-U06', videoId: '5EKLw-pCL7w', title: 'Animals Song' },
  { unit: 'L1-U07', videoId: 'hAlIKBQOBgc', title: 'Yummy Food Song' },
  { unit: 'L1-U08', videoId: 'KOMkPTQj5fw', title: 'My Toys Song' },
  { unit: 'L1-U09', videoId: 'BmUGAMT1iLo', title: 'My School Song' },
  { unit: 'L1-U10', videoId: 'csgUtXui3r4', title: 'Feelings Song' },
  { unit: 'L1-U11', videoId: 'NRDNbThmJ1M', title: 'Clothes Song' },
  { unit: 'L1-U12', videoId: 'vK6apvQHCI8', title: 'My House Song' },
  { unit: 'L1-U13', videoId: 'SRB2j9MYi0Y', title: 'Weather Song' },
  { unit: 'L1-U14', videoId: 'teF7FLMzcso', title: 'Fruits Song' },
  { unit: 'L1-U15', videoId: 'jpR8jBQxToE', title: 'At the Zoo Song' },
  { unit: 'L1-U16', videoId: 'CNpfbpodCHA', title: 'Transportation Song' },
  { unit: 'L2-U01', videoId: 'cZfh7dBJXzk', title: 'Stand Up, Sit Down Song' },
  { unit: 'L2-U02', videoId: 'NrR3lWZTjzg', title: 'This Is My Friend Song' },
  { unit: 'L2-U03', videoId: 'F2AEXb3-np0', title: 'Yes, I Can Song' },
  { unit: 'L2-U04', videoId: 'Zhn0HmyfGVE', title: "Let's Play Badminton Song" },
  { unit: 'L2-U05', videoId: 'I225pfUHKdU', title: 'What Time Is It Song' },
  { unit: 'L2-U06', videoId: 'M_katNtSCfY', title: 'What Day Is It Today Song' },
  { unit: 'L2-U07', videoId: 'Ii3J-WGAuSk', title: "I'm Reading a Book Song" },
  { unit: 'L2-U08', videoId: '-Zq9OIT4120', title: 'Do You Have a Pet Song' },
  { unit: 'L2-U09', videoId: 'u9pUYFfg4Is', title: 'There Is a Butterfly Song' },
  { unit: 'L2-U10', videoId: '8uyKiQQ5YuU', title: 'I Can See a Dolphin Song' },
  { unit: 'L2-U11', videoId: 'ct8oJ6rX0iI', title: 'Where Are You Going Song' },
  { unit: 'L2-U12', videoId: 'KJXfnaIqUxU', title: 'What Does Your Mom Do Song' },
  { unit: 'L2-U13', videoId: 'yPZ0qP5Jl-k', title: 'I Can Play the Piano Song' },
  { unit: 'L2-U14', videoId: 'iYefRlMuNfU', title: 'I Like Summer Song' },
  { unit: 'L2-U15', videoId: 'zb0a6BN79Mw', title: 'This Is for You Song' },
  { unit: 'L2-U16', videoId: 'hUoLqO6iV5g', title: 'Happy New Year Song' },
];

export const songOf = (unit: string): Song | undefined => SONGS.find((s) => s.unit === unit);

export const watchUrl = (s: Song) => `https://www.youtube.com/watch?v=${s.videoId}&list=${PLAYLIST_IDS[levelOfUnit(s.unit)]}`;
export const embedUrl = (s: Song) =>
  `https://www.youtube-nocookie.com/embed/${s.videoId}?autoplay=1&rel=0&playsinline=1&modestbranding=1`;
/** 16:9 preview without the black bars that hqdefault has */
export const thumbUrl = (s: Song, big = true) =>
  `https://i.ytimg.com/vi/${s.videoId}/${big ? 'maxresdefault' : 'mqdefault'}.jpg`;
