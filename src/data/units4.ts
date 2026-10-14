import { Lesson } from '../types';
import { BOOK3, BookUnit } from './book3';
import { unitByCode } from './catalog';
import { FIND, make, MATCH } from './units';

/* Level 3 · Adventurer · Quyển 3. Source: KidsEnglishTalk_Quyen3_Adventurer_16_Units.md (parsed into book3.ts).
   Each unit becomes four lessons: B1 and B2 teach four words each, B3 is the role-play dialogue,
   B4 is the reading text with its questions plus the review quiz. */

const ids = (u: BookUnit, ...at: number[]) => at.map((i) => u.words[i].id);
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const list = (u: BookUnit, at: number[], key: 'en' | 'vi') => at.map((i) => u.words[i][key]).join(', ');
const pair = (u: BookUnit, at: number[]) => at.map((i) => `${u.words[i].en}`).join(', ');

const lessonsOf = (u: BookUnit): Lesson[] => {
  const A = [0, 1, 2, 3];
  const B = [4, 5, 6, 7];
  const evens = [1, 3, 5, 7];
  const code = u.code;
  const say = u.say.map((p) => [p.en, p.vi] as [string, string]);
  const chant = {
    title: u.chant.title,
    rhythm: 'Vừa hát vừa vỗ tay theo nhịp — hát cùng Mi và Bin',
    lines: u.chant.lines.map((l) => [l.en, l.vi] as [string, string]),
  };
  const talk = { scene: u.scene, roleplay: u.roleplay, lines: u.talk.map((l) => [l.who, l.en, l.vi] as [Lesson['talk']['lines'][0]['who'], string, string]) };
  const parent = (learned: string) => ({ learned, patterns: u.parent.patterns, tips: u.parent.tips });
  const unitNo = code.slice(-2);

  return [
    make(code, 1, {
      title: cap(pair(u, A)),
      titleVi: cap(list(u, A, 'vi')),
      goal: `Bé nhận biết ${pair(u, A)} và nói: ${u.say[0].en}`,
      words: ids(u, ...A),
      extras: ids(u, ...B),
      chant,
      say: say.slice(0, 3),
      talk,
      game: { kind: 'match', prompt: MATCH, ids: ids(u, ...A) },
      sticker: ['🌟', `Unit ${unitNo} · khởi động`],
      parent: parent(pair(u, A)),
    }),
    make(code, 2, {
      title: cap(pair(u, B)),
      titleVi: cap(list(u, B, 'vi')),
      goal: `Bé nhận biết ${pair(u, B)} và nói: ${u.say[u.say.length - 1].en}`,
      words: ids(u, ...B),
      extras: ids(u, ...A),
      chant,
      say: say.slice(-3),
      talk,
      game: { kind: 'tapfind', prompt: FIND, ids: ids(u, ...B) },
      sticker: ['⭐', `Unit ${unitNo} · từ vựng mới`],
      parent: parent(pair(u, B)),
    }),
    make(code, 3, {
      title: `Talk Time: ${unitByCode(code)?.title ?? ''}`,
      titleVi: 'Hội thoại đóng vai',
      goal: `Bé đóng vai ${u.roleplay} trong hội thoại ${u.talk.length} lượt: ${u.scene}`,
      words: ids(u, ...evens),
      extras: ids(u, 0, 2, 4, 6),
      chant,
      say,
      talk,
      game: { kind: 'match', prompt: MATCH, ids: ids(u, ...evens) },
      sticker: ['🎭', `Unit ${unitNo} · hội thoại`],
      parent: parent(pair(u, evens) + ' (ôn tập)'),
    }),
    make(code, 4, {
      title: u.story.title,
      titleVi: u.story.titleVi,
      goal: `Đọc “${u.story.title}”, trả lời câu hỏi và ôn cả 8 từ của unit`,
      words: ids(u, 0, 1, 2, 3, 4, 5, 6, 7),
      chant,
      say,
      talk,
      game: { kind: 'tapfind', prompt: FIND, ids: ids(u, 2, 3, 4, 5, 6, 7) },
      story: { title: u.story.title, pages: u.story.pages.map((l) => [l.who, l.en, l.vi] as [Lesson['talk']['lines'][0]['who'], string, string]) },
      sticker: ['🏅', `${u.badge.name} — ${u.badge.vi}`],
      parent: parent(list(u, [0, 1, 2, 3, 4, 5, 6, 7], 'en')),
    }),
  ].map((l, i) =>
    i === 3
      ? { ...l, story: { ...l.story!, questions: u.story.questions }, quiz: u.quiz, write: u.write }
      : l
  );
};

export const UNIT_LESSONS_L3: Lesson[] = BOOK3.flatMap(lessonsOf);
