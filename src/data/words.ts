import { Word } from '../types';

const w = (id: string, vi: string, o: Partial<Word> = {}): Word => ({ id, en: o.en ?? id, vi, ...o });

/** Every word used by the sample lessons. Real illustrations live in /art; the rest use emoji tiles. */
export const WORDS: Record<string, Word> = {
  // Unit 1 · Hello!
  girl: w('girl', 'bạn gái', { art: '/art/girl.png' }),
  boy: w('boy', 'bạn trai', { art: '/art/boy.png' }),
  friend: w('friend', 'người bạn', { art: '/art/friend.png' }),
  hello: w('hello', 'xin chào', { art: '/art/hello.png' }),
  hi: w('hi', 'chào bạn', { emoji: '🙋', tint: '#FFE9B8' }),
  goodbye: w('goodbye', 'tạm biệt', { emoji: '👋', tint: '#D8ECFF' }),
  name: w('name', 'tên', { emoji: '🏷️', tint: '#E8DDFB' }),
  // Unit 3 · Colors
  red: w('red', 'màu đỏ', { emoji: '🍎', tint: '#FFD6D6' }),
  blue: w('blue', 'màu xanh dương', { emoji: '☂️', tint: '#CFE4FF' }),
  yellow: w('yellow', 'màu vàng', { emoji: '🦆', tint: '#FFF0A8' }),
  green: w('green', 'màu xanh lá', { emoji: '🍃', tint: '#D3F5D0' }),
  // Unit 6 · Animals
  cat: w('cat', 'con mèo', { art: '/art/cat.png' }),
  dog: w('dog', 'con chó', { art: '/art/dog.png' }),
  bird: w('bird', 'con chim', { art: '/art/pip_fly.png' }),
  fish: w('fish', 'con cá', { emoji: '🐟', tint: '#CFF3F5' }),
  // wrong-answer fillers
  car: w('car', 'xe hơi', { emoji: '🚗', tint: '#FFD6D6' }),
  ball: w('ball', 'quả bóng', { emoji: '⚽', tint: '#E9E9E9' }),
  teddy: w('teddy', 'gấu bông', { en: 'teddy bear', emoji: '🧸', tint: '#F3DFC8' }),
  kite: w('kite', 'con diều', { emoji: '🪁', tint: '#E8DDFB' }),
};

export const COLOR_HEX: Record<string, string> = {
  red: '#EF4444',
  blue: '#3B82F6',
  yellow: '#FACC15',
  green: '#22C55E',
};

export const FILLERS = ['car', 'ball', 'teddy', 'kite', 'dog', 'cat'];

export const wordOf = (id: string): Word => WORDS[id] ?? { id, en: id, vi: '', emoji: '⭐' };
