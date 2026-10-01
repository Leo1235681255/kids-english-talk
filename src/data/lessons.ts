import { Lesson } from '../types';
import { UNIT_LESSONS } from './units';

/** Unit 1 lives here; units 2–9 are in units.ts. Vocabulary and patterns follow giao-trinh-kids-english-talk.md. */
const UNIT_1: Lesson[] = [
  // ───────────────────────── L1-U01 · Hello! ─────────────────────────
  {
    id: 'L1-U01-B1',
    unitCode: 'L1-U01',
    level: 1,
    no: 1,
    title: "Hello! I'm Mi",
    titleVi: 'Xin chào! Tớ là Mi',
    goal: 'Bé nhận biết và nói được: girl, boy, friend, hello',
    words: ['girl', 'boy', 'friend', 'hello'],
    extras: ['dog', 'cat'],
    chant: {
      title: 'Hello Friends Chant',
      rhythm: 'Vui tươi, rộn ràng, nhịp 4/4 — vỗ tay theo từng dòng',
      lines: [
        { en: 'Hello, hello!', vi: 'Xin chào, xin chào!' },
        { en: 'Hi, hi, hi!', vi: 'Chào bạn, chào bạn!' },
        { en: 'Nice to meet you!', vi: 'Rất vui được gặp bạn!' },
        { en: "Let's be friends!", vi: 'Mình làm bạn nhé!' },
        { en: 'Hello, hello!', vi: 'Xin chào, xin chào!' },
        { en: 'Wave your hand!', vi: 'Vẫy tay nào!' },
        { en: 'You and me,', vi: 'Bạn và mình,' },
        { en: "We're friends!", vi: 'Chúng mình là bạn!' },
      ],
    },
    sentences: [
      { en: 'Hello!', vi: 'Xin chào!' },
      { en: "Hi, I'm Mi.", vi: 'Chào bạn, tớ là Mi.' },
    ],
    talk: {
      scene: 'Cổng trường sáng đầu năm — Mi và Bin gặp nhau lần đầu',
      roleplay: 'Mi',
      lines: [
        { who: 'Pip', en: "Hi! What's your name?", vi: 'Chào các bạn! Tên bạn là gì?' },
        { who: 'Bin', en: "I'm Bin. What's your name?", vi: 'Tớ là Bin. Bạn tên là gì?' },
        { who: 'Mi', en: "I'm Mi. Nice to meet you!", vi: 'Tớ là Mi. Rất vui được gặp bạn!' },
        { who: 'Bin', en: 'Nice to meet you too!', vi: 'Tớ cũng rất vui được gặp bạn!' },
        { who: 'Pip', en: 'Great job, friends!', vi: 'Giỏi lắm các bạn!' },
      ],
    },
    game: { kind: 'match', prompt: 'Drag and match!', ids: ['girl', 'boy', 'friend', 'hello'] },
    sticker: { id: 'L1-U01-B1', name: 'Ngôi sao cười', art: '/art/st_star.png' },
    parent: {
      learned: 'girl, boy, friend, hello',
      patterns: ['Hello! / Hi!', "I'm Mi.", 'Nice to meet you!'],
      tips: [
        'Bé đã nghe và nhận ra 4 từ vựng đầu tiên.',
        'Bé đã luyện nói và tham gia hội thoại đóng vai Mi.',
        'Hãy cùng bé vẫy tay và chào "Hello!" với người thân.',
      ],
    },
  },
  {
    id: 'L1-U01-B2',
    unitCode: 'L1-U01',
    level: 1,
    no: 2,
    title: "What's your name?",
    titleVi: 'Bạn tên là gì?',
    goal: "Bé nói được hi, goodbye, name và hỏi – đáp: What's your name? — I'm Mi.",
    words: ['hi', 'goodbye', 'name'],
    extras: ['girl', 'boy', 'hello', 'friend'],
    chant: {
      title: 'Name Chant',
      rhythm: 'Hỏi – đáp luân phiên: cô hỏi, bé trả lời',
      lines: [
        { en: "Hi, hi! What's your name?", vi: 'Chào bạn! Tên bạn là gì?' },
        { en: "I'm Mi! I'm Mi!", vi: 'Tớ là Mi! Tớ là Mi!' },
        { en: "Hi, hi! What's your name?", vi: 'Chào bạn! Tên bạn là gì?' },
        { en: "I'm Bin! I'm Bin!", vi: 'Tớ là Bin! Tớ là Bin!' },
        { en: 'Goodbye, goodbye,', vi: 'Tạm biệt, tạm biệt,' },
        { en: 'Wave your hand — goodbye!', vi: 'Vẫy tay nào — tạm biệt!' },
      ],
    },
    sentences: [
      { en: "What's your name?", vi: 'Bạn tên là gì?' },
      { en: "I'm Mi.", vi: 'Tớ là Mi.' },
    ],
    talk: {
      scene: 'Sân trường giờ ra chơi — Mi hỏi tên bạn mới',
      roleplay: 'Bin',
      lines: [
        { who: 'Mi', en: "Hi! What's your name?", vi: 'Chào bạn! Bạn tên là gì?' },
        { who: 'Bin', en: "I'm Bin. What's your name?", vi: 'Tớ là Bin. Bạn tên là gì?' },
        { who: 'Mi', en: "I'm Mi.", vi: 'Tớ là Mi.' },
        { who: 'Bin', en: 'Goodbye, Mi!', vi: 'Tạm biệt Mi!' },
        { who: 'Mi', en: 'Goodbye, Bin!', vi: 'Tạm biệt Bin!' },
        { who: 'Pip', en: 'Great job!', vi: 'Giỏi lắm!' },
      ],
    },
    game: { kind: 'tapfind', prompt: 'Tap the picture I say!', ids: ['hi', 'goodbye', 'name', 'hello'] },
    sticker: { id: 'L1-U01-B2', name: 'Bạn Mi', art: '/art/st_mi.png' },
    parent: {
      learned: 'hi, goodbye, name',
      patterns: ["What's your name?", "I'm Mi.", 'Goodbye!'],
      tips: [
        'Bé đã học cách hỏi và nói tên mình bằng tiếng Anh.',
        'Mỗi sáng hãy hỏi bé "What\'s your name?" để bé trả lời "I\'m ...".',
        'Khi chia tay, cùng bé vẫy tay nói "Goodbye!".',
      ],
    },
  },
  {
    id: 'L1-U01-B3',
    unitCode: 'L1-U01',
    level: 1,
    no: 3,
    title: 'Meet a New Friend',
    titleVi: 'Làm quen bạn mới',
    goal: 'Bé đóng vai Mi trong một cuộc gặp gỡ: chào, hỏi tên, làm quen, tạm biệt',
    words: ['hello', 'hi', 'name', 'friend'],
    extras: ['girl', 'boy', 'goodbye'],
    chant: {
      title: 'New Friend Chant',
      rhythm: 'Nhẹ nhàng, đung đưa theo nhịp như đang đi bộ tới trường',
      lines: [
        { en: "Hello, friend! What's your name?", vi: 'Chào bạn! Bạn tên là gì?' },
        { en: "I'm Mi! I'm Mi!", vi: 'Tớ là Mi! Tớ là Mi!' },
        { en: "Hello, friend! What's your name?", vi: 'Chào bạn! Bạn tên là gì?' },
        { en: "I'm Bin! I'm Bin!", vi: 'Tớ là Bin! Tớ là Bin!' },
        { en: 'Nice to meet you — you and me!', vi: 'Rất vui được gặp bạn — bạn và mình!' },
        { en: 'Goodbye, friend, goodbye!', vi: 'Tạm biệt bạn, tạm biệt!' },
      ],
    },
    sentences: [
      { en: 'Nice to meet you!', vi: 'Rất vui được gặp bạn!' },
      { en: 'Nice to meet you too!', vi: 'Mình cũng rất vui được gặp bạn!' },
      { en: "What's your name?", vi: 'Bạn tên là gì?' },
    ],
    talk: {
      scene: 'Cổng trường — Pip dẫn Mi tới làm quen với Bin',
      roleplay: 'Mi',
      lines: [
        { who: 'Pip', en: 'Hello! Look, a new friend!', vi: 'Xin chào! Nhìn kìa, một người bạn mới!' },
        { who: 'Bin', en: "Hi! What's your name?", vi: 'Chào bạn! Bạn tên là gì?' },
        { who: 'Mi', en: "I'm Mi. What's your name?", vi: 'Tớ là Mi. Còn bạn tên là gì?' },
        { who: 'Bin', en: "I'm Bin. Nice to meet you!", vi: 'Tớ là Bin. Rất vui được gặp bạn!' },
        { who: 'Mi', en: 'Nice to meet you too!', vi: 'Tớ cũng rất vui được gặp bạn!' },
        { who: 'Mi', en: 'Goodbye, Bin!', vi: 'Tạm biệt Bin!' },
        { who: 'Bin', en: 'Goodbye, Mi!', vi: 'Tạm biệt Mi!' },
        { who: 'Pip', en: 'Great job, friends!', vi: 'Giỏi lắm các bạn!' },
      ],
    },
    game: { kind: 'match', prompt: 'Drag and match!', ids: ['hello', 'hi', 'name', 'friend'] },
    sticker: { id: 'L1-U01-B3', name: 'Bạn Bin', art: '/art/st_bin.png' },
    parent: {
      learned: 'hello, hi, name, friend (ôn tập)',
      patterns: ["What's your name? — I'm Mi.", 'Nice to meet you! — Nice to meet you too!'],
      tips: [
        'Bé đã đóng vai Mi trong một hội thoại 8 lượt.',
        'Hãy thử đóng vai Bin để bé luyện trả lời nhanh hơn.',
        'Khen bé mỗi khi bé dám nói to, dù phát âm chưa thật chuẩn.',
      ],
    },
  },
  {
    id: 'L1-U01-B4',
    unitCode: 'L1-U01',
    level: 1,
    no: 4,
    title: 'A New Friend',
    titleVi: 'Một người bạn mới',
    goal: 'Ôn tập cả chủ đề qua truyện tranh ngắn và trò chơi tìm từ',
    words: ['girl', 'boy', 'friend', 'hello', 'hi', 'goodbye'],
    extras: ['name', 'dog', 'cat'],
    chant: {
      title: 'Friends Review Chant',
      rhythm: 'Nhanh dần: đọc chậm lần một, nhanh lần hai',
      lines: [
        { en: 'Boy, boy — hello, hello!', vi: 'Bạn trai — xin chào!' },
        { en: 'Girl, girl — hi, hi, hi!', vi: 'Bạn gái — chào bạn!' },
        { en: 'Friend, friend — you and me!', vi: 'Bạn bè — bạn và mình!' },
        { en: 'Goodbye, goodbye — wave your hand!', vi: 'Tạm biệt — vẫy tay nào!' },
      ],
    },
    sentences: [
      { en: "Hi, I'm Bin.", vi: 'Chào bạn, tớ là Bin.' },
      { en: "What's your name?", vi: 'Bạn tên là gì?' },
      { en: 'Nice to meet you!', vi: 'Rất vui được gặp bạn!' },
    ],
    talk: {
      scene: 'Sân trường — Pip mời hai bạn tự giới thiệu',
      roleplay: 'Bin',
      lines: [
        { who: 'Pip', en: "What's your name, friend?", vi: 'Bạn ơi, bạn tên là gì?' },
        { who: 'Mi', en: "I'm Mi.", vi: 'Tớ là Mi.' },
        { who: 'Bin', en: "I'm Bin.", vi: 'Tớ là Bin.' },
        { who: 'Pip', en: 'Nice to meet you!', vi: 'Rất vui được gặp các bạn!' },
        { who: 'Mi', en: 'Nice to meet you too!', vi: 'Tớ cũng rất vui!' },
        { who: 'Bin', en: 'Goodbye, Pip!', vi: 'Tạm biệt Pip!' },
      ],
    },
    game: { kind: 'tapfind', prompt: 'Tap the picture I say!', ids: ['girl', 'boy', 'friend', 'hello', 'hi', 'goodbye'] },
    story: {
      title: 'A New Friend',
      pages: [
        { who: 'Mi', en: 'Hello, Bin!', vi: 'Xin chào Bin!' },
        { who: 'Bin', en: 'Hi, Mi!', vi: 'Chào Mi!' },
        { who: 'Mi', en: "What's your name?", vi: 'Bạn tên là gì?' },
        { who: 'Bin', en: "I'm Bin.", vi: 'Tớ là Bin.' },
        { who: 'Mi', en: 'Nice to meet you!', vi: 'Rất vui được gặp bạn!' },
        { who: 'Bin', en: 'Nice to meet you too!', vi: 'Tớ cũng rất vui được gặp bạn!' },
      ],
    },
    sticker: { id: 'L1-U01-B4', name: 'Chim Pip', art: '/art/st_pip.png' },
    parent: {
      learned: 'girl, boy, friend, hello, hi, goodbye',
      patterns: ["What's your name? — I'm Mi.", 'Nice to meet you!', 'Goodbye!'],
      tips: [
        'Bé đã hoàn thành chủ đề Hello! và nhận đủ 4 sticker.',
        'Đọc lại truyện "A New Friend" cùng bé, mỗi người một vai.',
        'Khuyến khích bé chào bạn mới bằng tiếng Anh ở trường.',
      ],
    },
  },
];

export const LESSONS: Lesson[] = [...UNIT_1, ...UNIT_LESSONS];

export const getLesson = (id: string) => LESSONS.find((l) => l.id === id);
export const lessonsOfUnit = (code: string) => LESSONS.filter((l) => l.unitCode === code);
export const lessonFor = (unitCode: string, no: number) => LESSONS.find((l) => l.unitCode === unitCode && l.no === no);

/** Next lesson in the sample list (same order as LESSONS), or undefined at the end. */
export const nextLesson = (id: string): Lesson | undefined => {
  const i = LESSONS.findIndex((l) => l.id === id);
  return i >= 0 ? LESSONS[i + 1] : undefined;
};
