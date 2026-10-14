import { Word } from '../types';
import { BOOK3 } from './book3';

/** Level 3 · Adventurer vocabulary. Each word is a cut-out of the unit's "New Words" picture in /art/l3. */
export const L3_WORDS: Record<string, Word> = Object.fromEntries(
  BOOK3.flatMap((u) =>
    u.words.map((w): [string, Word] => [w.id, { id: w.id, en: w.en, vi: w.vi, art: `/art/l3/${w.img}.jpg`, framed: true, wide: true }])
  )
);
