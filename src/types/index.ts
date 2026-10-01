export type ScreenType =
  | 'home'
  | 'warmup'
  | 'newwords'
  | 'listentap'
  | 'sayit'
  | 'talktime'
  | 'play'
  | 'reward'
  | 'storytime'
  | 'review'
  | 'forparents';

export type Speaker = 'Mi' | 'Bin' | 'Pip';

/** A vocabulary item. `art` is a transparent PNG in /art, otherwise `emoji` is drawn big on a tinted tile. */
export interface Word {
  id: string;
  en: string;
  vi: string;
  art?: string;
  emoji?: string;
  /** soft tile tint used behind emoji / digit art */
  tint?: string;
  /** big colored numeral instead of a picture (Numbers unit) */
  digit?: string;
  /** art is a pastel portrait tile: draw it with rounded corners */
  framed?: boolean;
}

export interface Line {
  who: Speaker;
  en: string;
  vi: string;
}

export interface Phrase {
  en: string;
  vi: string;
}

export type GameKind = 'match' | 'tapfind' | 'balloon';

export interface Sticker {
  id: string;
  name: string;
  art?: string;
  emoji?: string;
}

export interface Lesson {
  id: string; // L1-U01-B1
  unitCode: string; // L1-U01
  level: 1 | 2 | 3;
  no: 1 | 2 | 3 | 4;
  title: string;
  titleVi: string;
  goal: string;
  /** ids into the word dictionary */
  words: string[];
  /** extra ids used only as wrong answers */
  extras?: string[];
  chant: { title: string; rhythm: string; lines: Phrase[] };
  /** short sentences the child repeats in "Say It" */
  sentences: Phrase[];
  talk: { scene: string; lines: Line[]; roleplay: 'Mi' | 'Bin' };
  game: { kind: GameKind; prompt: string; ids: string[] };
  story?: { title: string; pages: Line[] };
  sticker: Sticker;
  parent: { learned: string; patterns: string[]; tips: string[] };
}

export interface Unit {
  code: string; // L1-U01
  level: 1 | 2 | 3;
  title: string;
  titleVi: string;
  pattern: string;
  vocab: string;
  emoji: string;
  color: string; // tailwind gradient classes
}

export interface LevelInfo {
  level: 1 | 2 | 3;
  name: string;
  age: string;
  cefr: string;
  blurb: string;
}
