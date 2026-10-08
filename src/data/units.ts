import { GameKind, Lesson, Line, Phrase, Speaker } from '../types';

type Pair = [string, string];
export type Talk = [Speaker, string, string];

const P = (a: Pair[]): Phrase[] => a.map(([en, vi]) => ({ en, vi }));
const T = (a: Talk[]): Line[] => a.map(([who, en, vi]) => ({ who, en, vi }));

export interface Def {
  title: string;
  titleVi: string;
  goal: string;
  words: string[];
  extras?: string[];
  chant: { title: string; rhythm: string; lines: Pair[] };
  say: Pair[];
  talk: { scene: string; roleplay: 'Mi' | 'Bin'; lines: Talk[] };
  game: { kind: GameKind; prompt: string; ids: string[] };
  story?: { title: string; pages: Talk[] };
  sticker: [string, string];
  parent: { learned: string; patterns: string[]; tips: string[] };
}

export const make = (unit: string, no: 1 | 2 | 3 | 4, d: Def): Lesson => ({
  id: `${unit}-B${no}`,
  unitCode: unit,
  level: Number(unit[1]) as 1 | 2 | 3,
  no,
  title: d.title,
  titleVi: d.titleVi,
  goal: d.goal,
  words: d.words,
  extras: d.extras,
  chant: { title: d.chant.title, rhythm: d.chant.rhythm, lines: P(d.chant.lines) },
  sentences: P(d.say),
  talk: { scene: d.talk.scene, roleplay: d.talk.roleplay, lines: T(d.talk.lines) },
  game: d.game,
  story: d.story ? { title: d.story.title, pages: T(d.story.pages) } : undefined,
  sticker: { id: `${unit}-B${no}`, name: d.sticker[1], emoji: d.sticker[0] },
  parent: d.parent,
});

export const MATCH = 'Drag and match!';
export const FIND = 'Tap the picture I say!';
export const GREAT: Talk = ['Pip', 'Great job!', 'Giỏi lắm!'];

/* ═════════════════════════ L1-U02 · My Family ═════════════════════════ */
const U02 = 'L1-U02';
export const FAMILY: Lesson[] = [
  make(U02, 1, {
    title: 'Mom, Dad, Brother, Sister',
    titleVi: 'Bố, mẹ, anh và chị em',
    goal: "Bé nhận biết mom, dad, brother, sister và nói: This is my mom.",
    words: ['mom', 'dad', 'brother', 'sister'],
    extras: ['girl', 'boy', 'friend'],
    chant: {
      title: 'My Family Chant',
      rhythm: 'Dịu dàng, vui vẻ — chỉ vào từng người khi hát',
      lines: [
        ['This is my family,', 'Đây là gia đình của tớ,'],
        ['My mom, my dad.', 'Mẹ của tớ, bố của tớ.'],
        ['My brother, my sister,', 'Anh trai, chị gái của tớ,'],
        ['I love them all!', 'Tớ yêu tất cả mọi người!'],
        ['Family, family,', 'Gia đình ơi, gia đình ơi,'],
        ['We are happy!', 'Chúng mình thật vui!'],
        ['Family, family,', 'Gia đình ơi, gia đình ơi,'],
        ['So, so happy!', 'Thật là vui!'],
      ],
    },
    say: [['Who\'s this?', 'Đây là ai?'], ['This is my mom.', 'Đây là mẹ của tớ.'], ['This is my dad.', 'Đây là bố của tớ.']],
    talk: {
      scene: 'Phòng khách nhà Mi — Mi khoe ảnh gia đình cho Bin',
      roleplay: 'Mi',
      lines: [
        ['Bin', "Who's this?", 'Đây là ai vậy?'],
        ['Mi', 'This is my mom.', 'Đây là mẹ của tớ.'],
        ['Bin', 'And this?', 'Còn đây?'],
        ['Mi', 'This is my dad.', 'Đây là bố của tớ.'],
        ['Pip', 'Great job, Mi!', 'Giỏi lắm Mi!'],
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['mom', 'dad', 'brother', 'sister'] },
    sticker: ['🏠', 'Mái ấm gia đình'],
    parent: {
      learned: 'mom, dad, brother, sister',
      patterns: ["Who's this?", 'This is my mom.'],
      tips: [
        'Bé đã biết gọi tên 4 thành viên trong gia đình bằng tiếng Anh.',
        'Cùng bé xem ảnh gia đình và hỏi "Who\'s this?".',
        'Để bé giới thiệu từng người: "This is my mom."',
      ],
    },
  }),
  make(U02, 2, {
    title: 'Grandma, Grandpa, Baby',
    titleVi: 'Ông, bà và em bé',
    goal: 'Bé nhận biết grandma, grandpa, baby và giới thiệu người thân trong album ảnh',
    words: ['grandma', 'grandpa', 'baby'],
    extras: ['mom', 'dad', 'brother', 'sister'],
    chant: {
      title: 'Grandma & Baby Chant',
      rhythm: 'Chậm rãi, ru nhẹ như đang kể chuyện cho bà nghe',
      lines: [
        ['Grandma, grandma — hello, hello!', 'Bà ơi — xin chào!'],
        ['Grandpa, grandpa — hello, hello!', 'Ông ơi — xin chào!'],
        ['Baby, baby — hello, hello!', 'Em bé ơi — xin chào!'],
        ['My family — hello!', 'Gia đình của tớ — xin chào!'],
      ],
    },
    say: [['This is my grandma.', 'Đây là bà của tớ.'], ['This is my grandpa.', 'Đây là ông của tớ.'], ['This is the baby.', 'Đây là em bé.']],
    talk: {
      scene: 'Mi mở album ảnh gia đình cho Bin xem',
      roleplay: 'Bin',
      lines: [
        ['Mi', "Look, Bin!", 'Nhìn này Bin!'],
        ['Bin', "Who's this?", 'Đây là ai vậy?'],
        ['Mi', 'This is my grandma.', 'Đây là bà của tớ.'],
        ['Bin', 'And this?', 'Còn đây?'],
        ['Mi', 'This is my grandpa.', 'Đây là ông của tớ.'],
        ['Bin', "Who's this?", 'Đây là ai vậy?'],
        ['Mi', 'This is the baby!', 'Đây là em bé!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['grandma', 'grandpa', 'baby', 'mom'] },
    sticker: ['👵', 'Bà yêu'],
    parent: {
      learned: 'grandma, grandpa, baby',
      patterns: ["Who's this?", 'This is my grandma.'],
      tips: [
        'Bé đã học thêm 3 từ về người thân.',
        'Gọi video cho ông bà và để bé chào bằng tiếng Anh.',
        'Cho bé chỉ vào ảnh và nói tên từng người.',
      ],
    },
  }),
  make(U02, 3, {
    title: 'Who Is This?',
    titleVi: 'Đây là ai?',
    goal: 'Bé đóng vai Mi, hỏi – đáp về các thành viên trong gia đình',
    words: ['mom', 'dad', 'grandma', 'baby'],
    extras: ['brother', 'sister', 'grandpa'],
    chant: {
      title: 'Who Is This? Chant',
      rhythm: 'Hỏi – đáp: nhóm một hỏi, nhóm hai trả lời',
      lines: [
        ["Who's this? Who's this?", 'Đây là ai? Đây là ai?'],
        ['This is my mom!', 'Đây là mẹ của tớ!'],
        ["Who's this? Who's this?", 'Đây là ai? Đây là ai?'],
        ['This is my dad!', 'Đây là bố của tớ!'],
        ['Brother, sister, baby too —', 'Anh, chị, em bé nữa —'],
        ['I love you!', 'Tớ yêu mọi người!'],
      ],
    },
    say: [["Who's this?", 'Đây là ai?'], ['This is my brother.', 'Đây là anh trai tớ.'], ['This is my sister.', 'Đây là chị gái tớ.']],
    talk: {
      scene: 'Bữa tối ở nhà Mi — cả nhà quây quần bên bàn ăn',
      roleplay: 'Mi',
      lines: [
        ['Pip', 'Look! A big family!', 'Nhìn kìa! Một gia đình đông vui!'],
        ['Bin', "Who's this?", 'Đây là ai vậy?'],
        ['Mi', 'This is my mom.', 'Đây là mẹ của tớ.'],
        ['Bin', "Who's this?", 'Đây là ai vậy?'],
        ['Mi', 'This is my dad.', 'Đây là bố của tớ.'],
        ['Bin', 'And this?', 'Còn đây?'],
        ['Mi', 'This is my brother.', 'Đây là anh trai của tớ.'],
        ['Pip', 'Great job, Mi!', 'Giỏi lắm Mi!'],
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['mom', 'dad', 'grandma', 'baby'] },
    sticker: ['👨‍👩‍👧', 'Cả nhà vui vẻ'],
    parent: {
      learned: 'mom, dad, grandma, baby (ôn tập)',
      patterns: ["Who's this? — This is my mom."],
      tips: [
        'Bé đã đóng vai Mi trong hội thoại 8 lượt.',
        'Hãy đổi vai: bé hỏi, bố mẹ trả lời.',
        'Khen bé khi bé trả lời đầy đủ cả câu.',
      ],
    },
  }),
  make(U02, 4, {
    title: 'I Love My Family',
    titleVi: 'Tớ yêu gia đình tớ',
    goal: 'Ôn 7 từ về gia đình qua truyện tranh và trò chơi tìm từ',
    words: ['mom', 'dad', 'brother', 'sister', 'grandma', 'grandpa', 'baby'],
    extras: ['girl', 'boy'],
    chant: {
      title: 'Family Review Chant',
      rhythm: 'Nhanh dần, vỗ tay theo từng thành viên',
      lines: [
        ['Mom, dad — hello, hello!', 'Mẹ, bố — xin chào!'],
        ['Brother, sister — hello, hello!', 'Anh, chị — xin chào!'],
        ['Grandma, grandpa — hello, hello!', 'Bà, ông — xin chào!'],
        ['Baby, baby — hello! I love my family!', 'Em bé — xin chào! Tớ yêu gia đình tớ!'],
      ],
    },
    say: [['This is my family.', 'Đây là gia đình của tớ.'], ['I love my family!', 'Tớ yêu gia đình tớ!'], ["Who's this?", 'Đây là ai?']],
    talk: {
      scene: 'Mi giới thiệu cả gia đình với Pip',
      roleplay: 'Mi',
      lines: [
        ['Pip', "Who's this?", 'Đây là ai vậy?'],
        ['Mi', 'This is my grandma.', 'Đây là bà của tớ.'],
        ['Pip', 'And this?', 'Còn đây?'],
        ['Mi', 'This is my baby brother.', 'Đây là em trai bé xíu của tớ.'],
        ['Pip', 'I love your family!', 'Pip yêu gia đình của bạn!'],
        ['Mi', 'I love my family!', 'Tớ cũng yêu gia đình tớ!'],
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['mom', 'dad', 'brother', 'sister', 'grandma', 'baby'] },
    story: {
      title: 'I Love My Family',
      pages: [
        ['Mi', 'This is my family.', 'Đây là gia đình của tớ.'],
        ['Bin', "Who's this?", 'Đây là ai vậy?'],
        ['Mi', 'This is my mom.', 'Đây là mẹ của tớ.'],
        ['Bin', 'And this?', 'Còn đây?'],
        ['Mi', 'This is my dad.', 'Đây là bố của tớ.'],
        ['Mi', 'I love my family!', 'Tớ yêu gia đình tớ!'],
      ],
    },
    sticker: ['❤️', 'Yêu gia đình'],
    parent: {
      learned: 'mom, dad, brother, sister, grandma, grandpa, baby',
      patterns: ["Who's this? — This is my mom.", 'I love my family!'],
      tips: [
        'Bé đã hoàn thành chủ đề My Family với 7 từ vựng.',
        'Đọc lại truyện "I Love My Family" cùng bé, mỗi người một vai.',
        'Làm một tấm thiệp gia đình và để bé nói tên từng người.',
      ],
    },
  }),
];

/* ═════════════════════════ L1-U03 · Colors ═════════════════════════ */
const U03 = 'L1-U03';
export const COLORS: Lesson[] = [
  make(U03, 1, {
    title: 'Red, Blue, Yellow',
    titleVi: 'Đỏ, xanh, vàng',
    goal: "Bé nhận biết 4 màu và trả lời: What color is it? — It's red.",
    words: ['red', 'blue', 'yellow', 'green'],
    extras: ['car', 'ball', 'kite', 'apple'],
    chant: {
      title: 'Color Chant',
      rhythm: 'Nhún nhảy, mỗi dòng chỉ vào một món đồ cùng màu',
      lines: [
        ['Red, red, red — I see red!', 'Đỏ, đỏ, đỏ — tớ thấy màu đỏ!'],
        ['Blue, blue, blue — I see blue!', 'Xanh, xanh, xanh — tớ thấy màu xanh!'],
        ['Yellow, yellow — up in the sky!', 'Vàng, vàng ơi — trên bầu trời!'],
        ['Green, green — wave hi!', 'Xanh lá ơi — vẫy tay chào!'],
      ],
    },
    say: [['What color is it?', 'Nó màu gì?'], ["It's red!", 'Màu đỏ!'], ["It's blue!", 'Màu xanh dương!']],
    talk: {
      scene: 'Lớp học vẽ — Mi và Bin cầm cọ',
      roleplay: 'Mi',
      lines: [
        ['Bin', 'Look, Mi! What color is it?', 'Nhìn này Mi! Nó màu gì?'],
        ['Mi', "It's red!", 'Màu đỏ!'],
        ['Bin', 'And this?', 'Còn cái này?'],
        ['Mi', "It's blue!", 'Màu xanh dương!'],
        ['Pip', 'Great job, Mi!', 'Giỏi lắm Mi!'],
      ],
    },
    game: { kind: 'balloon', prompt: 'Color the balloon!', ids: ['red', 'blue', 'yellow', 'green'] },
    sticker: ['🎨', 'Bảng màu vui'],
    parent: {
      learned: 'red, blue, yellow, green',
      patterns: ['What color is it?', "It's red."],
      tips: [
        'Bé đã nhận biết 4 màu và biết hỏi – đáp về màu sắc.',
        'Chỉ vào đồ vật quanh nhà và hỏi "What color is it?".',
        'Cho bé tô màu và nói tên màu vừa dùng.',
      ],
    },
  }),
  make(U03, 2, {
    title: 'Pink, Orange, Purple',
    titleVi: 'Hồng, cam, tím',
    goal: "Bé nhận biết pink, orange, purple và trả lời: It's pink.",
    words: ['pink', 'orange', 'purple'],
    extras: ['red', 'blue', 'yellow', 'green'],
    chant: {
      title: 'More Colors Chant',
      rhythm: 'Vui nhộn, giọng cao dần ở mỗi màu mới',
      lines: [
        ['Pink, pink, pink — look, look, look!', 'Hồng, hồng, hồng — nhìn này!'],
        ['Orange, orange — hello, hello!', 'Cam ơi — xin chào!'],
        ['Purple, purple — look at the purple!', 'Tím ơi — nhìn màu tím kìa!'],
        ['Red, blue, yellow, green — I see all the colors!', 'Đỏ, xanh, vàng, lá — tớ thấy tất cả!'],
      ],
    },
    say: [["It's pink.", 'Màu hồng.'], ["It's orange.", 'Màu cam.'], ["It's purple.", 'Màu tím.']],
    talk: {
      scene: 'Lớp học vẽ — Bin hỏi màu của các hộp sơn mới',
      roleplay: 'Mi',
      lines: [
        ['Bin', 'What color is this?', 'Màu này là màu gì?'],
        ['Mi', "It's pink!", 'Màu hồng!'],
        ['Bin', 'And this?', 'Còn cái này?'],
        ['Mi', "It's orange!", 'Màu cam!'],
        ['Bin', 'What color is this?', 'Màu này là màu gì?'],
        ['Mi', "It's purple!", 'Màu tím!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['pink', 'orange', 'purple', 'red'] },
    sticker: ['🌈', 'Cầu vồng'],
    parent: {
      learned: 'pink, orange, purple',
      patterns: ['What color is this?', "It's pink."],
      tips: [
        'Bé đã biết đủ 7 màu cơ bản sau bài này.',
        'Cho bé chọn quần áo và nói màu bằng tiếng Anh.',
        'Chơi trò "I spy": bố mẹ nói màu, bé tìm đồ vật cùng màu.',
      ],
    },
  }),
  make(U03, 3, {
    title: 'What Color Is It?',
    titleVi: 'Nó màu gì?',
    goal: 'Bé đóng vai Mi, hỏi – đáp về màu sắc của quả bóng bay',
    words: ['red', 'blue', 'yellow', 'green'],
    extras: ['pink', 'orange', 'purple'],
    chant: {
      title: 'Balloon Chant',
      rhythm: 'Nhẹ nhàng, tay giơ cao như đang cầm bóng bay',
      lines: [
        ['What color is it? It\'s red!', 'Nó màu gì? Màu đỏ!'],
        ['What color is it? It\'s blue!', 'Nó màu gì? Màu xanh dương!'],
        ['What color is it? Yellow, yellow!', 'Nó màu gì? Màu vàng!'],
        ['Green, green — I see the colors!', 'Màu xanh lá — tớ thấy các màu!'],
      ],
    },
    say: [['What color is it?', 'Nó màu gì?'], ["It's yellow!", 'Màu vàng!'], ["It's green!", 'Màu xanh lá!']],
    talk: {
      scene: 'Công viên — Mi và Bin chơi với những quả bóng bay',
      roleplay: 'Mi',
      lines: [
        ['Mi', 'What color is it?', 'Nó màu gì?'],
        ['Bin', "It's red.", 'Màu đỏ.'],
        ['Mi', 'What color is this?', 'Còn quả này màu gì?'],
        ['Bin', "It's blue.", 'Màu xanh dương.'],
        ['Mi', 'Yellow!', 'Màu vàng!'],
        ['Bin', 'Green!', 'Màu xanh lá!'],
        GREAT,
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['red', 'blue', 'yellow', 'green'] },
    sticker: ['🎈', 'Bóng bay nhiều màu'],
    parent: {
      learned: 'red, blue, yellow, green (ôn tập)',
      patterns: ['What color is it? — It\'s red.'],
      tips: [
        'Bé đã đóng vai Mi và tự đặt câu hỏi về màu sắc.',
        'Hãy để bé hỏi bố mẹ: "What color is it?".',
        'Dùng bóng, đồ chơi hoặc rau củ để luyện thêm.',
      ],
    },
  }),
  make(U03, 4, {
    title: 'Colors Everywhere',
    titleVi: 'Màu sắc quanh em',
    goal: 'Ôn 7 màu qua truyện tranh và trò chơi tìm màu',
    words: ['red', 'blue', 'yellow', 'green', 'pink', 'orange', 'purple'],
    extras: ['apple', 'car', 'ball'],
    chant: {
      title: 'Rainbow Review Chant',
      rhythm: 'Hát liền một hơi, mỗi màu một nhịp vỗ tay',
      lines: [
        ['Red, red, red,', 'Đỏ, đỏ, đỏ,'],
        ['Blue, blue, blue,', 'Xanh, xanh, xanh,'],
        ['Yellow, yellow, yellow,', 'Vàng, vàng, vàng,'],
        ['Green and purple too!', 'Xanh lá và tím nữa!'],
        ["Let's learn colors,", 'Cùng học màu sắc nào,'],
        ['Me and you!', 'Bạn và tớ!'],
      ],
    },
    say: [['This is a red apple.', 'Đây là quả táo đỏ.'], ['This is a blue car.', 'Đây là chiếc xe xanh.'], ['What color is it?', 'Nó màu gì?']],
    talk: {
      scene: 'Mi và Bin đi tìm màu sắc quanh sân trường',
      roleplay: 'Bin',
      lines: [
        ['Mi', 'What color is it?', 'Nó màu gì?'],
        ['Bin', "It's orange!", 'Màu cam!'],
        ['Mi', 'And this?', 'Còn cái này?'],
        ['Bin', "It's purple!", 'Màu tím!'],
        ['Mi', 'What color is this?', 'Màu này là màu gì?'],
        ['Bin', "It's pink!", 'Màu hồng!'],
        ['Pip', 'You learned the colors!', 'Các bạn đã biết các màu rồi!'],
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['red', 'blue', 'yellow', 'green', 'pink', 'orange'] },
    story: {
      title: 'Colors Everywhere',
      pages: [
        ['Mi', 'This is a red apple.', 'Đây là quả táo đỏ.'],
        ['Bin', 'This is a blue car.', 'Đây là chiếc xe màu xanh.'],
        ['Mi', 'These are yellow flowers.', 'Đây là những bông hoa vàng.'],
        ['Pip', 'You learned the colors!', 'Các bạn đã biết các màu rồi!'],
      ],
    },
    sticker: ['🌟', 'Bé giỏi màu sắc'],
    parent: {
      learned: 'red, blue, yellow, green, pink, orange, purple',
      patterns: ['What color is it?', "It's red / blue / yellow ..."],
      tips: [
        'Bé đã học 7 màu sắc cơ bản và biết hỏi – đáp.',
        'Cùng bé đi quanh nhà và hỏi "What color is it?" với các đồ vật.',
        'Đọc lại truyện "Colors Everywhere" và để bé chỉ màu trong tranh.',
      ],
    },
  }),
];

/* ═════════════════════════ L1-U04 · Numbers ═════════════════════════ */
const U04 = 'L1-U04';
export const NUMBERS: Lesson[] = [
  make(U04, 1, {
    title: 'One, Two, Three, Four, Five',
    titleVi: 'Đếm từ một đến năm',
    goal: 'Bé đếm và nhận biết số 1–5; hỏi – đáp: How many? — Three!',
    words: ['one', 'two', 'three', 'four', 'five'],
    extras: ['six', 'seven'],
    chant: {
      title: 'Counting Chant',
      rhythm: 'Vỗ tay một nhịp cho mỗi con số',
      lines: [
        ['One, two, three — clap with me!', 'Một, hai, ba — vỗ tay cùng tớ!'],
        ['Four, five — count with me!', 'Bốn, năm — đếm cùng tớ!'],
        ['One, two, three, four, five,', 'Một, hai, ba, bốn, năm,'],
        ['Hello, hello — count again!', 'Xin chào — đếm lại nào!'],
      ],
    },
    say: [['How many?', 'Bao nhiêu?'], ['Three!', 'Ba!'], ["I'm five.", 'Tớ năm tuổi.']],
    talk: {
      scene: 'Tiệc sinh nhật — Mi và Bin đếm bóng bay',
      roleplay: 'Bin',
      lines: [
        ['Mi', 'How many balloons?', 'Có bao nhiêu quả bóng bay?'],
        ['Bin', 'Three!', 'Ba quả!'],
        ['Mi', 'How old are you?', 'Bạn mấy tuổi?'],
        ['Bin', "I'm five.", 'Tớ năm tuổi.'],
        GREAT,
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['one', 'two', 'three', 'four', 'five'] },
    sticker: ['🎈', 'Bóng bay đếm số'],
    parent: {
      learned: 'one, two, three, four, five',
      patterns: ['How many? — Three!', "How old are you? — I'm five."],
      tips: [
        'Bé đã học đếm từ 1 đến 5 bằng tiếng Anh.',
        'Cùng bé đếm đồ vật trong nhà: trái cây, nến, đồ chơi.',
        'Hỏi bé "How old are you?" để bé trả lời tuổi của mình.',
      ],
    },
  }),
  make(U04, 2, {
    title: 'Six, Seven, Eight, Nine, Ten',
    titleVi: 'Đếm từ sáu đến mười',
    goal: 'Bé đếm và nhận biết số 6–10 và trả lời: How many?',
    words: ['six', 'seven', 'eight', 'nine', 'ten'],
    extras: ['one', 'two', 'three', 'four', 'five'],
    chant: {
      title: 'Count to Ten Chant',
      rhythm: 'Nhanh dần, nhảy một bước cho mỗi số',
      lines: [
        ['Six, seven — jump, jump!', 'Sáu, bảy — nhảy nào!'],
        ['Eight, nine — clap, clap!', 'Tám, chín — vỗ tay!'],
        ['Ten, ten, ten — hello, ten!', 'Mười, mười, mười — xin chào số mười!'],
        ['One to ten — count again!', 'Từ một đến mười — đếm lại nào!'],
      ],
    },
    say: [['How many?', 'Bao nhiêu?'], ['Seven!', 'Bảy!'], ['Ten!', 'Mười!']],
    talk: {
      scene: 'Mi và Bin đếm bánh và quà trong buổi tiệc',
      roleplay: 'Mi',
      lines: [
        ['Bin', 'How many?', 'Có bao nhiêu?'],
        ['Mi', 'Six!', 'Sáu!'],
        ['Bin', 'And this?', 'Còn đây?'],
        ['Mi', 'Eight!', 'Tám!'],
        ['Bin', 'How many?', 'Có bao nhiêu?'],
        ['Mi', 'Ten!', 'Mười!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['six', 'seven', 'eight', 'nine', 'ten'] },
    sticker: ['🔢', 'Bé giỏi đếm số'],
    parent: {
      learned: 'six, seven, eight, nine, ten',
      patterns: ['How many? — Seven!'],
      tips: [
        'Bé đã biết đếm đến 10 bằng tiếng Anh.',
        'Đếm bậc cầu thang hoặc bước chân cùng bé.',
        'Chơi trò: bố mẹ nói số, bé giơ đúng số ngón tay.',
      ],
    },
  }),
  make(U04, 3, {
    title: 'How Old Are You?',
    titleVi: 'Bạn mấy tuổi?',
    goal: 'Bé đóng vai Mi, hỏi và trả lời về tuổi trong bữa tiệc sinh nhật',
    words: ['one', 'three', 'five', 'seven'],
    extras: ['two', 'four', 'six', 'ten'],
    chant: {
      title: 'Birthday Chant',
      rhythm: 'Vui vẻ như bài hát sinh nhật, giơ ngón tay theo số tuổi',
      lines: [
        ['How old are you? I\'m five!', 'Bạn mấy tuổi? Tớ năm tuổi!'],
        ['How old are you? I\'m six!', 'Bạn mấy tuổi? Tớ sáu tuổi!'],
        ['How old are you? I\'m seven!', 'Bạn mấy tuổi? Tớ bảy tuổi!'],
        ['One, two, three — clap with me!', 'Một, hai, ba — vỗ tay cùng tớ!'],
      ],
    },
    say: [['How old are you?', 'Bạn mấy tuổi?'], ["I'm five.", 'Tớ năm tuổi.'], ["I'm seven.", 'Tớ bảy tuổi.']],
    talk: {
      scene: 'Tiệc sinh nhật của Mi — bánh kem có nến',
      roleplay: 'Mi',
      lines: [
        ['Pip', 'Look! A birthday cake!', 'Nhìn kìa! Bánh sinh nhật!'],
        ['Bin', 'How many candles?', 'Có bao nhiêu cây nến?'],
        ['Mi', 'Five!', 'Năm cây!'],
        ['Bin', 'How old are you?', 'Bạn mấy tuổi?'],
        ['Mi', "I'm five.", 'Tớ năm tuổi.'],
        ['Mi', 'How old are you?', 'Bạn mấy tuổi?'],
        ['Bin', "I'm seven.", 'Tớ bảy tuổi.'],
        GREAT,
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['one', 'three', 'five', 'seven'] },
    sticker: ['🎂', 'Bánh sinh nhật'],
    parent: {
      learned: 'one, three, five, seven (ôn tập)',
      patterns: ["How old are you? — I'm five.", 'How many? — Five!'],
      tips: [
        'Bé đã đóng vai Mi trong hội thoại sinh nhật.',
        'Hỏi bé "How old are you?" mỗi ngày và để bé trả lời.',
        'Cho bé đếm nến trên bánh sinh nhật thật.',
      ],
    },
  }),
  make(U04, 4, {
    title: 'A Birthday Party',
    titleVi: 'Một buổi tiệc sinh nhật',
    goal: 'Ôn số 1–10 qua truyện tranh và trò chơi tìm số',
    words: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
    chant: {
      title: 'Count Again Chant',
      rhythm: 'Đọc chậm lần một, nhanh lần hai',
      lines: [
        ['One, two, three, four, five,', 'Một, hai, ba, bốn, năm,'],
        ['Six, seven, eight, nine, ten!', 'Sáu, bảy, tám, chín, mười!'],
        ['Count again, count again,', 'Đếm lại nào, đếm lại nào,'],
        ['Count with me!', 'Cùng đếm với tớ!'],
      ],
    },
    say: [['One cake!', 'Một cái bánh!'], ['Two gifts!', 'Hai món quà!'], ['Three balloons!', 'Ba quả bóng bay!']],
    talk: {
      scene: 'Mi và Bin đếm đồ vật trong bữa tiệc',
      roleplay: 'Bin',
      lines: [
        ['Mi', 'How many?', 'Có bao nhiêu?'],
        ['Bin', 'Two!', 'Hai!'],
        ['Mi', 'How many?', 'Có bao nhiêu?'],
        ['Bin', 'Four!', 'Bốn!'],
        ['Mi', 'How many?', 'Có bao nhiêu?'],
        ['Bin', 'Ten!', 'Mười!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['one', 'two', 'three', 'four', 'five', 'ten'] },
    story: {
      title: 'A Birthday Party',
      pages: [
        ['Mi', 'One cake!', 'Một cái bánh!'],
        ['Bin', 'Two gifts!', 'Hai món quà!'],
        ['Mi', 'Three balloons!', 'Ba quả bóng bay!'],
        ['Pip', 'Great job!', 'Giỏi lắm!'],
      ],
    },
    sticker: ['🏆', 'Cúp đếm số'],
    parent: {
      learned: 'one → ten',
      patterns: ['How many? — Three!', "How old are you? — I'm five."],
      tips: [
        'Bé đã hoàn thành chủ đề Numbers: đếm từ 1 đến 10.',
        'Cùng bé đếm đồ chơi, trái cây hoặc nến để luyện thêm.',
        'Khuyến khích bé tự hỏi "How many?" khi nhìn thấy một nhóm đồ vật.',
      ],
    },
  }),
];

/* ═════════════════════════ L1-U05 · My Body ═════════════════════════ */
const U05 = 'L1-U05';
export const BODY: Lesson[] = [
  make(U05, 1, {
    title: 'Head, Eyes, Ears, Nose',
    titleVi: 'Đầu, mắt, tai, mũi',
    goal: 'Bé nhận biết head, eyes, ears, nose và làm theo: Touch your nose!',
    words: ['head', 'eyes', 'ears', 'nose'],
    extras: ['mouth', 'hands', 'feet'],
    chant: {
      title: 'Touch Chant',
      rhythm: 'Vừa hát vừa chạm vào từng bộ phận trên cơ thể',
      lines: [
        ['Head, head — touch your head!', 'Cái đầu — chạm vào đầu nào!'],
        ['Eyes, eyes — touch your eyes!', 'Đôi mắt — chạm vào mắt nào!'],
        ['Ears, ears — touch your ears!', 'Đôi tai — chạm vào tai nào!'],
        ['Nose, nose — touch your nose!', 'Cái mũi — chạm vào mũi nào!'],
      ],
    },
    say: [["What's this?", 'Đây là gì?'], ["It's my head.", 'Đây là đầu của tớ.'], ['Touch your nose!', 'Chạm vào mũi nào!']],
    talk: {
      scene: 'Sân trường — Bin hỏi Mi về các bộ phận trên cơ thể',
      roleplay: 'Mi',
      lines: [
        ['Bin', "What's this?", 'Đây là gì?'],
        ['Mi', "It's my head.", 'Đây là đầu của tớ.'],
        ['Bin', 'What are these?', 'Đây là những gì?'],
        ['Mi', "They're my eyes.", 'Đó là đôi mắt của tớ.'],
        ['Pip', 'Great job, Mi!', 'Giỏi lắm Mi!'],
      ],
    },
    game: { kind: 'match', prompt: 'Match the words to the body parts!', ids: ['head', 'eyes', 'ears', 'nose'] },
    sticker: ['👃', 'Chiếc mũi vui'],
    parent: {
      learned: 'head, eyes, ears, nose',
      patterns: ["What's this? — It's my head.", 'Touch your nose!'],
      tips: [
        'Bé đã biết gọi tên 4 bộ phận trên khuôn mặt.',
        'Chơi trò "Touch your nose!" để bé chạm theo lời nói.',
        'Hỏi bé "What\'s this?" khi chỉ vào mặt bé.',
      ],
    },
  }),
  make(U05, 2, {
    title: 'Mouth, Hands, Feet',
    titleVi: 'Miệng, tay, chân',
    goal: 'Bé nhận biết mouth, hands, feet và làm theo: Clap your hands!',
    words: ['mouth', 'hands', 'feet'],
    extras: ['head', 'eyes', 'ears', 'nose'],
    chant: {
      title: 'Move Chant',
      rhythm: 'Vỗ tay, dậm chân theo từng dòng',
      lines: [
        ['Mouth, mouth — open your mouth!', 'Cái miệng — mở miệng ra nào!'],
        ['Hands, hands — clap your hands!', 'Đôi tay — vỗ tay nào!'],
        ['Feet, feet — move your feet!', 'Đôi chân — nhún chân nào!'],
        ['Clap, clap, clap!', 'Vỗ, vỗ, vỗ tay!'],
      ],
    },
    say: [['Clap your hands!', 'Vỗ tay nào!'], ['Move your feet!', 'Nhún chân nào!'], ['Touch your mouth!', 'Chạm vào miệng nào!']],
    talk: {
      scene: 'Sân tập thể dục — Mi ra lệnh, Bin làm theo',
      roleplay: 'Bin',
      lines: [
        ['Mi', 'Clap your hands!', 'Vỗ tay nào!'],
        ['Bin', 'OK!', 'Được thôi!'],
        ['Mi', 'Move your feet!', 'Nhún chân nào!'],
        ['Bin', 'OK!', 'Được thôi!'],
        ['Mi', 'Touch your mouth!', 'Chạm vào miệng nào!'],
        ['Bin', 'OK!', 'Được thôi!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['mouth', 'hands', 'feet', 'nose'] },
    sticker: ['👋', 'Đôi tay khéo léo'],
    parent: {
      learned: 'mouth, hands, feet',
      patterns: ['Clap your hands!', 'Move your feet!'],
      tips: [
        'Bé đã học thêm 3 bộ phận cơ thể và các mệnh lệnh đơn giản.',
        'Cùng bé nhảy và làm theo lời bài hát Move Chant.',
        'Dùng các câu "Clap your hands!" khi chơi để bé quen nghe.',
      ],
    },
  }),
  make(U05, 3, {
    title: 'Touch and Clap',
    titleVi: 'Chạm và vỗ tay',
    goal: 'Bé đóng vai Mi ra lệnh và Bin làm theo trong trò chơi vận động',
    words: ['head', 'nose', 'hands', 'feet'],
    extras: ['eyes', 'ears', 'mouth'],
    chant: {
      title: 'Follow Me Chant',
      rhythm: 'Cô nói – bé làm: chạm đúng bộ phận được gọi tên',
      lines: [
        ['Touch your head, touch your nose,', 'Chạm vào đầu, chạm vào mũi,'],
        ['Clap your hands, move your feet!', 'Vỗ tay, nhún chân nào!'],
        ['Head and nose, hands and feet,', 'Đầu và mũi, tay và chân,'],
        ['One more time — can you do it?', 'Thêm một lần nữa — bé làm được không?'],
      ],
    },
    say: [['Touch your head!', 'Chạm vào đầu nào!'], ['Touch your nose!', 'Chạm vào mũi nào!'], ['Clap your hands!', 'Vỗ tay nào!']],
    talk: {
      scene: 'Giờ thể dục — Pip dẫn trò chơi "làm theo lời nói"',
      roleplay: 'Mi',
      lines: [
        ['Pip', "Let's move!", 'Cùng vận động nào!'],
        ['Mi', 'Touch your head!', 'Chạm vào đầu nào!'],
        ['Bin', 'OK!', 'Được thôi!'],
        ['Mi', 'Touch your nose!', 'Chạm vào mũi nào!'],
        ['Bin', 'OK!', 'Được thôi!'],
        ['Bin', 'Clap your hands!', 'Vỗ tay nào!'],
        ['Mi', 'OK!', 'Được thôi!'],
        GREAT,
      ],
    },
    game: { kind: 'match', prompt: 'Match the words to the body parts!', ids: ['head', 'nose', 'hands', 'feet'] },
    sticker: ['🕺', 'Bé vận động'],
    parent: {
      learned: 'head, nose, hands, feet (ôn tập)',
      patterns: ['Touch your nose!', 'Clap your hands!'],
      tips: [
        'Bé đã chơi trò làm theo lệnh bằng tiếng Anh.',
        'Đổi vai: bé ra lệnh, bố mẹ làm theo.',
        'Tăng tốc dần để trò chơi thêm vui.',
      ],
    },
  }),
  make(U05, 4, {
    title: 'Mi Learns About Her Body',
    titleVi: 'Mi tìm hiểu cơ thể mình',
    goal: 'Ôn 7 bộ phận cơ thể qua truyện tranh và trò chơi tìm từ',
    words: ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'feet'],
    chant: {
      title: 'My Body Review Chant',
      rhythm: 'Chạm vào bộ phận đúng nhịp khi hát',
      lines: [
        ['Head, eyes, ears, nose,', 'Đầu, mắt, tai, mũi,'],
        ['Mouth, hands, feet — here we go!', 'Miệng, tay, chân — bắt đầu nào!'],
        ['Touch your nose! Clap your hands!', 'Chạm mũi nào! Vỗ tay nào!'],
        ["Let's learn my body!", 'Cùng học về cơ thể nào!'],
      ],
    },
    say: [['This is my head.', 'Đây là đầu của tớ.'], ['These are my ears.', 'Đây là đôi tai của tớ.'], ['This is my mouth.', 'Đây là miệng của tớ.']],
    talk: {
      scene: 'Mi chỉ vào cơ thể mình để giới thiệu cho Pip',
      roleplay: 'Mi',
      lines: [
        ['Pip', "What's this?", 'Đây là gì vậy?'],
        ['Mi', "It's my nose.", 'Đây là mũi của tớ.'],
        ['Pip', 'What are these?', 'Đây là những gì?'],
        ['Mi', "They're my feet.", 'Đó là đôi chân của tớ.'],
        ['Pip', 'Great job, Mi!', 'Giỏi lắm Mi!'],
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['head', 'eyes', 'ears', 'nose', 'mouth', 'feet'] },
    story: {
      title: 'Mi Learns About Her Body',
      pages: [
        ['Mi', 'This is my head.', 'Đây là đầu của tớ.'],
        ['Bin', 'These are my ears.', 'Đây là đôi tai của tớ.'],
        ['Mi', 'This is my mouth.', 'Đây là miệng của tớ.'],
        ['Bin', 'These are my feet.', 'Đây là đôi chân của tớ.'],
      ],
    },
    sticker: ['🧍', 'Bé khám phá cơ thể'],
    parent: {
      learned: 'head, eyes, ears, nose, mouth, hands, feet',
      patterns: ["What's this? — It's my head.", 'Touch your nose! Clap your hands!'],
      tips: [
        'Bé đã nhận biết 7 bộ phận cơ thể và làm theo các mệnh lệnh đơn giản.',
        'Cùng bé chơi "Touch your ...!" khi tắm hoặc thay quần áo.',
        'Khuyến khích bé tự nói tên bộ phận khi chạm vào chúng.',
      ],
    },
  }),
];

/* ═════════════════════════ L1-U06 · Animals ═════════════════════════ */
const U06 = 'L1-U06';
export const ANIMALS: Lesson[] = [
  make(U06, 1, {
    title: 'Cute Animals',
    titleVi: 'Những con vật đáng yêu',
    goal: "Bé nhận biết cat, dog, bird, fish và nói: It's a cat.",
    words: ['cat', 'dog', 'bird', 'fish'],
    extras: ['girl', 'boy', 'car', 'ball'],
    chant: {
      title: 'Animal Chant',
      rhythm: 'Vỗ tay đều, bắt chước tiếng kêu của từng con vật',
      lines: [
        ['Cat, cat, meow, meow!', 'Mèo kêu meo meo!'],
        ['Dog, dog, woof, woof!', 'Chó kêu gâu gâu!'],
        ['Bird, bird, tweet, tweet!', 'Chim kêu líu lo!'],
        ['Fish, fish, swim, swim!', 'Cá bơi, cá bơi!'],
      ],
    },
    say: [["What's this?", 'Đây là gì?'], ["It's a cat.", 'Đó là con mèo.'], ["It's a dog.", 'Đó là con chó.']],
    talk: {
      scene: 'Sân nhà bà ở quê — Mi và Bin gặp các con vật',
      roleplay: 'Mi',
      lines: [
        ['Bin', "What's this?", 'Đây là gì?'],
        ['Mi', "It's a cat.", 'Là con mèo.'],
        ['Bin', 'And this?', 'Còn đây?'],
        ['Mi', "It's a dog!", 'Là con chó!'],
        ['Pip', 'Great job, Mi!', 'Giỏi lắm Mi!'],
      ],
    },
    game: { kind: 'match', prompt: 'Match the animals!', ids: ['cat', 'dog', 'bird', 'fish'] },
    sticker: ['🐾', 'Dấu chân vui'],
    parent: {
      learned: 'cat, dog, bird, fish',
      patterns: ["What's this?", "It's a cat."],
      tips: [
        'Bé đã biết gọi tên 4 con vật và trả lời câu hỏi "What\'s this?".',
        'Cùng bé xem ảnh con vật và hỏi "What\'s this?".',
        'Bắt chước tiếng con vật để bé vui và nhớ lâu.',
      ],
    },
  }),
  make(U06, 2, {
    title: 'Farm Animals',
    titleVi: 'Con vật ở nông trại',
    goal: "Bé nhận biết duck, cow, pig, chicken và nói: They're cows.",
    words: ['duck', 'cow', 'pig', 'chicken'],
    extras: ['cat', 'dog', 'bird', 'fish'],
    chant: {
      title: 'Farm Chant',
      rhythm: 'Vui nhộn, mỗi dòng bắt chước tiếng một con vật',
      lines: [
        ['Duck, duck, quack, quack!', 'Vịt kêu cạp cạp!'],
        ['Cow, cow, moo, moo!', 'Bò kêu ùm bò!'],
        ['Pig, pig, oink, oink!', 'Heo kêu ụt ịt!'],
        ['Chicken, chicken, cluck, cluck!', 'Gà kêu cục tác!'],
      ],
    },
    say: [['What are these?', 'Đây là những con gì?'], ["They're cows.", 'Đó là những con bò.'], ["It's a pig.", 'Đó là con heo.']],
    talk: {
      scene: 'Nông trại của bà — Mi và Bin nhìn đàn vật nuôi',
      roleplay: 'Bin',
      lines: [
        ['Mi', 'What are these?', 'Đây là những con gì?'],
        ['Bin', "They're cows.", 'Đó là những con bò.'],
        ['Mi', 'How many ducks?', 'Có bao nhiêu con vịt?'],
        ['Bin', 'Two ducks!', 'Hai con vịt!'],
        ['Mi', "What's this?", 'Đây là gì?'],
        ['Bin', "It's a pig!", 'Là con heo!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['duck', 'cow', 'pig', 'chicken'] },
    sticker: ['🐮', 'Bạn nông trại'],
    parent: {
      learned: 'duck, cow, pig, chicken',
      patterns: ["What are these? — They're cows.", "What's this? — It's a pig."],
      tips: [
        'Bé đã học thêm 4 con vật ở nông trại.',
        'Chơi trò bắt chước tiếng kêu và đoán tên con vật.',
        'Hỏi bé "What are these?" khi nhìn ảnh nhiều con vật.',
      ],
    },
  }),
  make(U06, 3, {
    title: 'A Day on the Farm',
    titleVi: 'Một ngày ở nông trại',
    goal: 'Bé đóng vai Mi hỏi – đáp về các con vật trên nông trại',
    words: ['cow', 'pig', 'cat', 'dog'],
    extras: ['duck', 'chicken', 'bird', 'fish'],
    chant: {
      title: 'Farm Day Chant',
      rhythm: 'Đi nhẹ nhàng như đang dạo quanh nông trại',
      lines: [
        ["What's this? It's a cow!", 'Đây là gì? Là con bò!'],
        ["What's this? It's a pig!", 'Đây là gì? Là con heo!'],
        ["What's this? It's a chicken!", 'Đây là gì? Là con gà!'],
        ["Let's learn animals, you and me!", 'Cùng học về con vật, bạn và tớ!'],
      ],
    },
    say: [["It's a cow.", 'Là con bò.'], ["It's a pig.", 'Là con heo.'], ["It's a chicken.", 'Là con gà.']],
    talk: {
      scene: 'Mi thăm nông trại — Bin chỉ cho Mi xem các con vật',
      roleplay: 'Mi',
      lines: [
        ['Bin', "Look! What's this?", 'Nhìn kìa! Đây là gì?'],
        ['Mi', "It's a cow.", 'Là con bò.'],
        ['Bin', 'And this?', 'Còn đây?'],
        ['Mi', "It's a pig.", 'Là con heo.'],
        ['Mi', "What's this?", 'Đây là gì?'],
        ['Bin', "It's a chicken.", 'Là con gà.'],
        ['Pip', 'Great job, Mi!', 'Giỏi lắm Mi!'],
      ],
    },
    game: { kind: 'match', prompt: 'Match the animals!', ids: ['cow', 'pig', 'cat', 'dog'] },
    sticker: ['🐔', 'Bạn gà con'],
    parent: {
      learned: 'cow, pig, cat, dog (ôn tập)',
      patterns: ["What's this? — It's a cow."],
      tips: [
        'Bé đã đóng vai Mi và tự hỏi – đáp về con vật.',
        'Hãy đổi vai để bé hỏi bố mẹ "What\'s this?".',
        'Cùng bé xem sách tranh hoặc video về nông trại.',
      ],
    },
  }),
  make(U06, 4, {
    title: 'Mi Visits the Farm',
    titleVi: 'Mi đi thăm nông trại',
    goal: 'Ôn 8 con vật qua truyện tranh và trò chơi tìm con vật',
    words: ['cat', 'dog', 'bird', 'fish', 'duck', 'cow', 'pig', 'chicken'],
    chant: {
      title: 'Animal Review Chant',
      rhythm: 'Đọc to từng cặp, bắt chước tiếng con vật',
      lines: [
        ['Cat, cat, meow, meow! Dog, dog, woof, woof!', 'Mèo meo meo! Chó gâu gâu!'],
        ['Bird, bird, tweet, tweet! Fish, fish, swim, swim!', 'Chim líu lo! Cá bơi bơi!'],
        ['Cow, cow, moo, moo! Pig, pig, oink, oink!', 'Bò ùm bò! Heo ụt ịt!'],
        ['Duck, duck, quack, quack! Chicken, chicken, cluck, cluck!', 'Vịt cạp cạp! Gà cục tác!'],
      ],
    },
    say: [["What's this?", 'Đây là gì?'], ["It's a cow.", 'Là con bò.'], ["It's a chicken!", 'Là con gà!']],
    talk: {
      scene: 'Mi và Bin chơi trò đố nhau về các con vật',
      roleplay: 'Bin',
      lines: [
        ['Mi', "What's this?", 'Đây là gì?'],
        ['Bin', "It's a duck.", 'Là con vịt.'],
        ['Mi', 'What are these?', 'Đây là những con gì?'],
        ['Bin', "They're cows.", 'Đó là những con bò.'],
        ['Mi', 'How many ducks?', 'Có bao nhiêu con vịt?'],
        ['Bin', 'Two ducks!', 'Hai con vịt!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['cat', 'dog', 'bird', 'fish', 'duck', 'cow', 'pig', 'chicken'] },
    story: {
      title: 'Mi Visits the Farm',
      pages: [
        ['Mi', "Look! What's this?", 'Nhìn kìa! Đây là gì?'],
        ['Bin', "It's a cow.", 'Là con bò.'],
        ['Mi', "What's this?", 'Đây là gì?'],
        ['Bin', "It's a pig.", 'Là con heo.'],
        ['Mi', "It's a chicken!", 'Là con gà!'],
        ['Pip', 'Great job!', 'Giỏi lắm!'],
      ],
    },
    sticker: ['🐶', 'Bạn thú cưng'],
    parent: {
      learned: 'cat, dog, bird, fish, duck, cow, pig, chicken',
      patterns: ["What's this? — It's a cat.", "What are these? — They're cows."],
      tips: [
        'Bé đã hoàn thành chủ đề Animals với 8 con vật.',
        'Đọc lại truyện "Mi Visits the Farm" cùng bé.',
        'Cùng bé mô tả các con vật bé thấy hằng ngày.',
      ],
    },
  }),
];

/* ═════════════════════════ L1-U07 · Yummy Food ═════════════════════════ */
const U07 = 'L1-U07';
export const FOOD: Lesson[] = [
  make(U07, 1, {
    title: 'Apple, Banana, Rice, Milk',
    titleVi: 'Táo, chuối, cơm, sữa',
    goal: 'Bé nhận biết apple, banana, rice, milk và nói: I like bananas.',
    words: ['apple', 'banana', 'rice', 'milk'],
    extras: ['car', 'ball', 'book', 'dog'],
    chant: {
      title: 'Yummy Chant',
      rhythm: 'Vui vẻ, xoa bụng sau mỗi dòng',
      lines: [
        ['Apple, apple, I like apples!', 'Táo ơi, tớ thích táo!'],
        ['Banana, banana, so sweet!', 'Chuối ơi, ngọt quá!'],
        ['Rice and milk, yummy, yummy!', 'Cơm và sữa, ngon quá!'],
        ["Let's eat, let's eat!", 'Cùng ăn nào, cùng ăn nào!'],
      ],
    },
    say: [['I like apples.', 'Tớ thích táo.'], ['I like bananas.', 'Tớ thích chuối.'], ['Do you like milk?', 'Bạn có thích sữa không?']],
    talk: {
      scene: 'Bàn ăn sáng — Bin hỏi Mi thích ăn gì',
      roleplay: 'Mi',
      lines: [
        ['Bin', 'Do you like milk?', 'Bạn có thích sữa không?'],
        ['Mi', 'Yes, I do!', 'Có, tớ thích!'],
        ['Bin', 'Do you like bananas?', 'Bạn có thích chuối không?'],
        ['Mi', 'Yes, I do!', 'Có, tớ thích!'],
        ['Pip', 'Great job, Mi!', 'Giỏi lắm Mi!'],
      ],
    },
    game: { kind: 'match', prompt: 'Match the food!', ids: ['apple', 'banana', 'rice', 'milk'] },
    sticker: ['🍎', 'Quả táo đỏ'],
    parent: {
      learned: 'apple, banana, rice, milk',
      patterns: ['I like bananas.', 'Do you like milk? — Yes, I do.'],
      tips: [
        'Bé đã học tên 4 món ăn quen thuộc.',
        'Hỏi bé "Do you like ...?" khi cho bé ăn.',
        'Khuyến khích bé nói "Yes, I do!" hoặc "No, I don\'t."',
      ],
    },
  }),
  make(U07, 2, {
    title: 'Bread, Egg, Noodles',
    titleVi: 'Bánh mì, trứng, mì / phở',
    goal: "Bé nhận biết bread, egg, noodles và trả lời: Do you like eggs? — No, I don't.",
    words: ['bread', 'egg', 'noodles'],
    extras: ['apple', 'banana', 'rice', 'milk'],
    chant: {
      title: 'Breakfast Chant',
      rhythm: 'Vỗ tay đều, giọng vui như đang đói bụng',
      lines: [
        ['Bread, bread, I like bread!', 'Bánh mì ơi, tớ thích bánh mì!'],
        ['Egg, egg, I like eggs!', 'Trứng ơi, tớ thích trứng!'],
        ['Noodles, noodles, yummy, yummy!', 'Mì phở ơi, ngon quá!'],
        ['Yummy food for you and me!', 'Đồ ăn ngon cho bạn và tớ!'],
      ],
    },
    say: [['I like bread.', 'Tớ thích bánh mì.'], ['I like noodles.', 'Tớ thích mì.'], ["No, I don't.", 'Không, tớ không thích.']],
    talk: {
      scene: 'Quán ăn sáng — Mi hỏi Bin thích ăn gì',
      roleplay: 'Bin',
      lines: [
        ['Mi', 'Do you like noodles?', 'Bạn có thích mì không?'],
        ['Bin', 'Yes, I do!', 'Có, tớ thích!'],
        ['Mi', 'Do you like eggs?', 'Bạn có thích trứng không?'],
        ['Bin', "No, I don't.", 'Không, tớ không thích.'],
        ['Mi', 'Do you like bread?', 'Bạn có thích bánh mì không?'],
        ['Bin', 'Yes, I do!', 'Có, tớ thích!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['bread', 'egg', 'noodles', 'milk'] },
    sticker: ['🍞', 'Ổ bánh mì'],
    parent: {
      learned: 'bread, egg, noodles',
      patterns: ['Do you like eggs?', "Yes, I do. / No, I don't."],
      tips: [
        'Bé đã biết trả lời "Yes, I do" và "No, I don\'t".',
        'Tôn trọng sở thích của bé và để bé nói "No, I don\'t" khi không thích.',
        'Hỏi bé về món ăn sáng mỗi ngày.',
      ],
    },
  }),
  make(U07, 3, {
    title: 'Breakfast Time',
    titleVi: 'Giờ ăn sáng',
    goal: 'Bé đóng vai Bin, nói món mình thích và hỏi bạn',
    words: ['milk', 'bread', 'noodles', 'egg'],
    extras: ['apple', 'banana', 'rice'],
    chant: {
      title: 'Breakfast Time Chant',
      rhythm: 'Nhẹ nhàng, như đang cùng nhau ăn sáng',
      lines: [
        ['I like milk, I like bread,', 'Tớ thích sữa, tớ thích bánh mì,'],
        ['I like noodles, I like eggs!', 'Tớ thích mì, tớ thích trứng!'],
        ['Do you like milk? Yes, I do!', 'Bạn có thích sữa không? Có chứ!'],
        ["Let's eat, let's eat!", 'Cùng ăn nào!'],
      ],
    },
    say: [['I like bread and milk.', 'Tớ thích bánh mì và sữa.'], ['I like noodles!', 'Tớ thích mì!'], ['Do you like eggs?', 'Bạn có thích trứng không?']],
    talk: {
      scene: 'Bàn ăn sáng nhà Mi — Pip mời cả hai cùng ăn',
      roleplay: 'Bin',
      lines: [
        ['Pip', "Yummy! Let's eat!", 'Ngon quá! Cùng ăn nào!'],
        ['Mi', 'I like bread and milk.', 'Tớ thích bánh mì và sữa.'],
        ['Bin', 'I like noodles!', 'Tớ thích mì!'],
        ['Mi', 'Do you like eggs?', 'Bạn có thích trứng không?'],
        ['Bin', 'Yes, I do!', 'Có, tớ thích!'],
        GREAT,
      ],
    },
    game: { kind: 'match', prompt: 'Match the food!', ids: ['milk', 'bread', 'noodles', 'egg'] },
    sticker: ['🥛', 'Ly sữa tươi'],
    parent: {
      learned: 'milk, bread, noodles, egg (ôn tập)',
      patterns: ['I like bread and milk.', 'Do you like eggs? — Yes, I do.'],
      tips: [
        'Bé đã đóng vai Bin trong cuộc trò chuyện giờ ăn.',
        'Mỗi bữa ăn hãy nói một câu "I like ..." cùng bé.',
        'Hỏi bé "Do you like ...?" với món mới.',
      ],
    },
  }),
  make(U07, 4, {
    title: "Mi's Delicious Breakfast",
    titleVi: 'Bữa sáng ngon của Mi',
    goal: 'Ôn 7 món ăn qua truyện tranh và trò chơi tìm món ăn',
    words: ['apple', 'banana', 'rice', 'milk', 'bread', 'egg', 'noodles'],
    chant: {
      title: 'Yummy Food Review Chant',
      rhythm: 'Hát nhanh dần, xoa bụng cuối mỗi câu',
      lines: [
        ['Apple, apple, I like apples!', 'Táo ơi, tớ thích táo!'],
        ['Banana, banana, so sweet!', 'Chuối ơi, ngọt quá!'],
        ['Rice and noodles, yummy!', 'Cơm và mì, ngon quá!'],
        ['Milk and bread, what a treat!', 'Sữa và bánh mì, thật tuyệt!'],
        ['Eggs are good for me!', 'Trứng tốt cho tớ!'],
        ["Let's eat, let's eat!", 'Cùng ăn nào!'],
      ],
    },
    say: [['I like bananas.', 'Tớ thích chuối.'], ['Do you like milk?', 'Bạn có thích sữa không?'], ['Yummy food for us!', 'Đồ ăn ngon cho chúng mình!']],
    talk: {
      scene: 'Mi và Bin chơi trò hỏi – đáp về món ăn',
      roleplay: 'Mi',
      lines: [
        ['Bin', 'Do you like apples?', 'Bạn có thích táo không?'],
        ['Mi', 'Yes, I do!', 'Có, tớ thích!'],
        ['Bin', 'Do you like eggs?', 'Bạn có thích trứng không?'],
        ['Mi', "No, I don't.", 'Không, tớ không thích.'],
        ['Bin', 'Do you like noodles?', 'Bạn có thích mì không?'],
        ['Mi', 'Yes, I do!', 'Có, tớ thích!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['apple', 'banana', 'rice', 'milk', 'bread', 'noodles'] },
    story: {
      title: "Mi's Delicious Breakfast",
      pages: [
        ['Mi', 'I like bread and milk.', 'Tớ thích bánh mì và sữa.'],
        ['Bin', 'I like noodles!', 'Tớ thích mì!'],
        ['Mi', 'Yummy food for us!', 'Đồ ăn ngon cho chúng mình!'],
        ['Pip', 'Great job!', 'Giỏi lắm!'],
      ],
    },
    sticker: ['🍜', 'Tô mì thơm'],
    parent: {
      learned: 'apple, banana, rice, milk, bread, egg, noodles',
      patterns: ['I like bananas.', 'Do you like milk? — Yes / No.'],
      tips: [
        'Bé đã hoàn thành chủ đề Yummy Food với 7 món ăn.',
        'Cho bé gọi tên món ăn thật trong bữa ăn.',
        'Hỏi bé "Do you like ...?" để bé luyện trả lời Yes / No.',
      ],
    },
  }),
];

/* ═════════════════════════ L1-U08 · My Toys ═════════════════════════ */
const U08 = 'L1-U08';
export const TOYS: Lesson[] = [
  make(U08, 1, {
    title: 'Ball, Doll, Car, Teddy Bear',
    titleVi: 'Bóng, búp bê, xe, gấu bông',
    goal: 'Bé nhận biết ball, doll, car, teddy bear và nói: I have a ball.',
    words: ['ball', 'doll', 'car', 'teddy'],
    extras: ['dog', 'cat', 'apple', 'book'],
    chant: {
      title: 'My Toys Chant',
      rhythm: 'Vui vẻ, giơ đồ chơi lên khi hát đến tên của nó',
      lines: [
        ['I have a ball,', 'Tớ có quả bóng,'],
        ['I have a doll,', 'Tớ có búp bê,'],
        ['I have a car,', 'Tớ có chiếc xe,'],
        ['I have a teddy bear!', 'Tớ có gấu bông!'],
        ["Let's play!", 'Cùng chơi nào!'],
      ],
    },
    say: [['I have a ball.', 'Tớ có quả bóng.'], ['I have a car.', 'Tớ có chiếc xe.'], ["Let's play!", 'Cùng chơi nào!']],
    talk: {
      scene: 'Phòng đồ chơi của Bin — Mi xem các món đồ chơi',
      roleplay: 'Mi',
      lines: [
        ['Mi', "What's this?", 'Đây là gì?'],
        ['Bin', "It's a car.", 'Là chiếc xe.'],
        ['Mi', 'Do you have a teddy bear?', 'Bạn có gấu bông không?'],
        ['Bin', 'Yes, I do!', 'Có, tớ có!'],
        ['Mi', "Let's play!", 'Cùng chơi nào!'],
        ['Pip', 'Great job!', 'Giỏi lắm!'],
      ],
    },
    game: { kind: 'match', prompt: 'Match the toys!', ids: ['ball', 'doll', 'car', 'teddy'] },
    sticker: ['⚽', 'Quả bóng vui'],
    parent: {
      learned: 'ball, doll, car, teddy bear',
      patterns: ['I have a ball.', "Let's play!"],
      tips: [
        'Bé đã biết gọi tên 4 món đồ chơi quen thuộc.',
        'Khi chơi, hãy nói "I have a ..." cùng bé.',
        'Mời bé nói "Let\'s play!" để rủ bạn chơi.',
      ],
    },
  }),
  make(U08, 2, {
    title: 'Kite, Robot, Blocks',
    titleVi: 'Diều, người máy, xếp hình',
    goal: "Bé nhận biết kite, robot, blocks và hỏi – đáp: What's this? — It's a kite.",
    words: ['kite', 'robot', 'blocks'],
    extras: ['ball', 'doll', 'car', 'teddy'],
    chant: {
      title: 'Play Chant',
      rhythm: 'Nhún nhảy, giơ tay như đang thả diều',
      lines: [
        ['I have a kite,', 'Tớ có con diều,'],
        ['I have a robot,', 'Tớ có người máy,'],
        ['I have blocks!', 'Tớ có khối xếp hình!'],
        ["Let's play together!", 'Cùng chơi với nhau nào!'],
      ],
    },
    say: [['I have a kite.', 'Tớ có con diều.'], ['I have a robot.', 'Tớ có người máy.'], ["What's this?", 'Đây là gì?']],
    talk: {
      scene: 'Công viên — Mi và Bin khoe đồ chơi mới',
      roleplay: 'Mi',
      lines: [
        ['Bin', "What's this?", 'Đây là gì?'],
        ['Mi', "It's a kite!", 'Là con diều!'],
        ['Bin', 'And this?', 'Còn đây?'],
        ['Mi', "It's a robot!", 'Là người máy!'],
        ['Bin', "Let's play!", 'Cùng chơi nào!'],
        ['Mi', 'OK!', 'Được thôi!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['kite', 'robot', 'blocks', 'ball'] },
    sticker: ['🪁', 'Con diều bay'],
    parent: {
      learned: 'kite, robot, blocks',
      patterns: ["What's this? — It's a kite.", 'I have a robot.'],
      tips: [
        'Bé đã học thêm 3 món đồ chơi.',
        'Cùng bé chơi xếp hình và đếm khối.',
        'Hỏi "What\'s this?" khi bé lấy đồ chơi.',
      ],
    },
  }),
  make(U08, 3, {
    title: "Bin's Toy Room",
    titleVi: 'Phòng đồ chơi của Bin',
    goal: 'Bé đóng vai Bin, nói đồ chơi mình có và rủ bạn cùng chơi',
    words: ['robot', 'doll', 'ball', 'kite'],
    extras: ['car', 'teddy', 'blocks'],
    chant: {
      title: 'Toy Room Chant',
      rhythm: 'Vui tươi, vỗ tay sau mỗi câu',
      lines: [
        ['I have a robot, you have a doll,', 'Tớ có người máy, bạn có búp bê,'],
        ['I have a ball, you have a kite,', 'Tớ có bóng, bạn có diều,'],
        ["Let's play, let's play,", 'Cùng chơi nào, cùng chơi nào,'],
        ['Play together!', 'Chơi cùng nhau!'],
      ],
    },
    say: [['I have a robot.', 'Tớ có người máy.'], ['Do you have a ball?', 'Bạn có quả bóng không?'], ["Let's play!", 'Cùng chơi nào!']],
    talk: {
      scene: 'Phòng đồ chơi nhà Bin — đồ chơi xếp đầy kệ',
      roleplay: 'Bin',
      lines: [
        ['Pip', 'Look at all the toys!', 'Nhìn tất cả đồ chơi kìa!'],
        ['Bin', 'I have a robot.', 'Tớ có người máy.'],
        ['Mi', 'I have a doll.', 'Tớ có búp bê.'],
        ['Bin', "Let's play!", 'Cùng chơi nào!'],
        ['Mi', 'OK!', 'Được thôi!'],
        ['Mi', 'Do you have a ball?', 'Bạn có quả bóng không?'],
        ['Bin', 'Yes, I do!', 'Có, tớ có!'],
        GREAT,
      ],
    },
    game: { kind: 'match', prompt: 'Match the toys!', ids: ['robot', 'doll', 'ball', 'kite'] },
    sticker: ['🤖', 'Người máy dễ thương'],
    parent: {
      learned: 'robot, doll, ball, kite (ôn tập)',
      patterns: ['I have a robot.', 'Do you have a ball? — Yes, I do.'],
      tips: [
        'Bé đã đóng vai Bin trong hội thoại về đồ chơi.',
        'Hãy hỏi "Do you have a ...?" khi cùng chơi.',
        'Để bé tự nói tên đồ chơi khi dọn dẹp.',
      ],
    },
  }),
  make(U08, 4, {
    title: "Mi and Bin's Playtime",
    titleVi: 'Giờ chơi của Mi và Bin',
    goal: 'Ôn 7 món đồ chơi qua truyện tranh và trò chơi tìm đồ chơi',
    words: ['ball', 'doll', 'car', 'teddy', 'kite', 'robot', 'blocks'],
    chant: {
      title: 'Toys Review Chant',
      rhythm: 'Giơ từng món đồ chơi lên khi hát',
      lines: [
        ['I have a ball, I have a car,', 'Tớ có bóng, tớ có xe,'],
        ['I have a teddy bear,', 'Tớ có gấu bông,'],
        ['I have a kite, I have a robot,', 'Tớ có diều, tớ có người máy,'],
        ["Let's play together!", 'Cùng chơi với nhau nào!'],
      ],
    },
    say: [['I have a teddy bear.', 'Tớ có gấu bông.'], ['I have a kite.', 'Tớ có con diều.'], ["Let's play together!", 'Cùng chơi với nhau nào!']],
    talk: {
      scene: 'Mi và Bin rủ nhau chơi cùng đồ chơi',
      roleplay: 'Mi',
      lines: [
        ['Bin', 'Do you have a ball?', 'Bạn có quả bóng không?'],
        ['Mi', 'Yes, I do!', 'Có, tớ có!'],
        ['Bin', 'Do you have a robot?', 'Bạn có người máy không?'],
        ['Mi', "No, I don't.", 'Không, tớ không có.'],
        ['Mi', "Let's play!", 'Cùng chơi nào!'],
        ['Bin', 'Great!', 'Tuyệt!'],
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['ball', 'doll', 'car', 'teddy', 'kite', 'robot'] },
    story: {
      title: "Mi and Bin's Playtime",
      pages: [
        ['Mi', 'I have a teddy bear.', 'Tớ có gấu bông.'],
        ['Bin', 'I have a car.', 'Tớ có chiếc xe.'],
        ['Mi', 'I have a kite.', 'Tớ có con diều.'],
        ['Bin', 'I have a robot.', 'Tớ có người máy.'],
        ['Mi', "Let's play together!", 'Cùng chơi với nhau nào!'],
        ['Pip', 'Great job!', 'Giỏi lắm!'],
      ],
    },
    sticker: ['🧸', 'Gấu bông ôm ấp'],
    parent: {
      learned: 'ball, doll, car, teddy bear, kite, robot, blocks',
      patterns: ['I have a ball.', "Let's play!", "What's this? — It's a car."],
      tips: [
        'Bé đã hoàn thành chủ đề My Toys với 7 đồ chơi.',
        'Cùng bé đọc lại truyện và chơi đóng vai.',
        'Khuyến khích bé rủ bạn chơi bằng câu "Let\'s play!".',
      ],
    },
  }),
];

/* ═════════════════════════ L1-U09 · My School ═════════════════════════ */
const S01 = 'L1-U09';
export const SCHOOL: Lesson[] = [
  make(S01, 1, {
    title: 'Pencil, Pen, Book, Bag',
    titleVi: 'Bút chì, bút bi, sách, cặp',
    goal: 'Bé nhận biết pencil, pen, book, bag và hỏi – đáp: What\'s this? — It\'s a pen.',
    words: ['pencil', 'pen', 'book', 'bag'],
    extras: ['ruler', 'eraser', 'ball', 'car'],
    chant: {
      title: 'School Things Chant',
      rhythm: 'Vui tươi, giơ đồ dùng học tập lên khi hát',
      lines: [
        ['Pencil, pencil, I have a pencil!', 'Bút chì ơi, tớ có bút chì!'],
        ['Pen, pen, I have a pen!', 'Bút bi ơi, tớ có bút bi!'],
        ['Book, book, I have a book!', 'Quyển sách ơi, tớ có sách!'],
        ['Bag, bag, I have a bag!', 'Cặp sách ơi, tớ có cặp!'],
      ],
    },
    say: [["What's this?", 'Đây là gì?'], ["It's a pen.", 'Đây là cây bút bi.'], ['Do you have a bag?', 'Bạn có cặp sách không?']],
    talk: {
      scene: 'Lớp học — Mi và Bin kiểm tra đồ dùng học tập',
      roleplay: 'Mi',
      lines: [
        ['Mi', "What's this?", 'Đây là gì?'],
        ['Bin', "It's a pen.", 'Đây là cây bút bi.'],
        ['Mi', 'Do you have a bag?', 'Bạn có cặp sách không?'],
        ['Bin', 'Yes, I do!', 'Có, tớ có!'],
        ['Mi', 'May I have a pencil?', 'Cho tớ mượn bút chì được không?'],
        ['Bin', 'Here you are.', 'Của bạn đây.'],
        GREAT,
      ],
    },
    game: { kind: 'match', prompt: 'Match the words!', ids: ['pencil', 'pen', 'book', 'bag'] },
    sticker: ['✏️', 'Cây bút chì'],
    parent: {
      learned: 'pencil, pen, book, bag',
      patterns: ["What's this? — It's a pen.", 'May I have a pencil? — Here you are.'],
      tips: [
        'Bé đã biết gọi tên 4 đồ dùng học tập và hỏi mượn lịch sự.',
        'Nhắc bé nói "May I have ...?" khi muốn mượn đồ.',
        'Cùng bé sắp xếp cặp sách và nói tên từng món.',
      ],
    },
  }),
  make(S01, 2, {
    title: 'Ruler, Eraser, Desk',
    titleVi: 'Thước, tẩy, bàn học',
    goal: 'Bé nhận biết ruler, eraser, desk và hỏi mượn đồ: May I have a ruler?',
    words: ['ruler', 'eraser', 'desk'],
    extras: ['pencil', 'pen', 'book', 'bag'],
    chant: {
      title: 'Classroom Chant',
      rhythm: 'Đều đặn như nhịp gõ bút lên bàn',
      lines: [
        ['Ruler, ruler, long and straight!', 'Cây thước dài và thẳng!'],
        ['Eraser, eraser, rub, rub, rub!', 'Cục tẩy, xóa, xóa, xóa!'],
        ['Desk, desk, sit at my desk!', 'Bàn học, ngồi vào bàn nào!'],
        ['My school, my school — I love my school!', 'Trường của tớ — tớ yêu trường tớ!'],
      ],
    },
    say: [['May I have a ruler?', 'Cho tớ mượn cây thước được không?'], ['May I have an eraser?', 'Cho tớ mượn cục tẩy được không?'], ['Here you are.', 'Của bạn đây.']],
    talk: {
      scene: 'Giờ học vẽ — Bin cần thước và cục tẩy',
      roleplay: 'Bin',
      lines: [
        ['Bin', 'May I have a ruler?', 'Cho tớ mượn cây thước được không?'],
        ['Mi', 'Here you are.', 'Của bạn đây.'],
        ['Bin', 'Thank you.', 'Cảm ơn bạn.'],
        ['Mi', 'May I have an eraser?', 'Cho tớ mượn cục tẩy được không?'],
        ['Bin', 'Here you are.', 'Của bạn đây.'],
        ['Mi', 'Thank you!', 'Cảm ơn bạn!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['ruler', 'eraser', 'desk', 'pen'] },
    sticker: ['📏', 'Cây thước kẻ'],
    parent: {
      learned: 'ruler, eraser, desk',
      patterns: ['May I have a ruler?', 'Here you are. — Thank you.'],
      tips: [
        'Bé đã học thêm 3 từ về lớp học và cách mượn đồ lịch sự.',
        'Luyện bé nói "Thank you" mỗi khi nhận đồ.',
        'Cùng bé chơi trò mượn – cho đồ dùng học tập.',
      ],
    },
  }),
  make(S01, 3, {
    title: 'At My Desk',
    titleVi: 'Ở bàn học của tớ',
    goal: 'Bé đóng vai Mi, hỏi về đồ dùng và xin mượn đồ trong lớp',
    words: ['book', 'pencil', 'pen', 'desk'],
    extras: ['bag', 'ruler', 'eraser'],
    chant: {
      title: 'At My Desk Chant',
      rhythm: 'Hỏi – đáp luân phiên giữa hai nhóm',
      lines: [
        ["What's this? It's a book!", 'Đây là gì? Là quyển sách!'],
        ["What's this? It's a pencil!", 'Đây là gì? Là bút chì!'],
        ['May I have a pen? Here you are!', 'Cho tớ mượn bút được không? Đây nhé!'],
        ["Let's learn together!", 'Cùng học với nhau nào!'],
      ],
    },
    say: [["It's a book.", 'Đây là quyển sách.'], ['Do you have a pencil?', 'Bạn có bút chì không?'], ['May I have a pen?', 'Cho tớ mượn bút bi được không?']],
    talk: {
      scene: 'Bàn học trong lớp — Pip nhắc cả hai cùng học',
      roleplay: 'Mi',
      lines: [
        ['Pip', "Let's learn together!", 'Cùng học với nhau nào!'],
        ['Mi', "What's this?", 'Đây là gì?'],
        ['Bin', "It's a book.", 'Đây là quyển sách.'],
        ['Bin', 'Do you have a pencil?', 'Bạn có bút chì không?'],
        ['Mi', 'Yes, I do.', 'Có, tớ có.'],
        ['Mi', 'May I have a pen?', 'Cho tớ mượn bút bi được không?'],
        ['Bin', 'Here you are.', 'Của bạn đây.'],
        GREAT,
      ],
    },
    game: { kind: 'match', prompt: 'Match the words!', ids: ['book', 'pencil', 'pen', 'desk'] },
    sticker: ['🪑', 'Bàn học gọn gàng'],
    parent: {
      learned: 'book, pencil, pen, desk (ôn tập)',
      patterns: ["What's this?", 'Do you have a pencil? — Yes, I do.', 'May I have a pen?'],
      tips: [
        'Bé đã đóng vai Mi trong hội thoại 8 lượt ở lớp học.',
        'Đổi vai để bé trả lời các câu hỏi về đồ dùng.',
        'Nhắc bé dùng "May I have ...?" khi cần mượn đồ.',
      ],
    },
  }),
  make(S01, 4, {
    title: 'A Day at School',
    titleVi: 'Một ngày ở trường',
    goal: 'Ôn 7 đồ dùng học tập qua truyện tranh và trò chơi tìm đồ vật',
    words: ['pencil', 'pen', 'book', 'bag', 'ruler', 'eraser', 'desk'],
    chant: {
      title: 'My School Chant',
      rhythm: 'Rộn ràng như tiếng trống vào lớp',
      lines: [
        ['Pencil, pencil, I have a pencil!', 'Bút chì ơi, tớ có bút chì!'],
        ['Book, book, I have a book!', 'Quyển sách ơi, tớ có sách!'],
        ['Bag, bag, I have a bag!', 'Cặp sách ơi, tớ có cặp!'],
        ["Let's go to school, let's learn and play,", 'Cùng đến trường, cùng học và chơi,'],
        ['With my friends every day!', 'Cùng các bạn mỗi ngày!'],
      ],
    },
    say: [['I have a bag.', 'Tớ có cái cặp.'], ['I have a book and a pen.', 'Tớ có một quyển sách và một cây bút.'], ["Let's learn together!", 'Cùng học với nhau nào!']],
    talk: {
      scene: 'Giờ ra chơi — Mi và Bin đố nhau về đồ dùng học tập',
      roleplay: 'Bin',
      lines: [
        ['Mi', "What's this?", 'Đây là gì?'],
        ['Bin', "It's a ruler.", 'Đây là cây thước.'],
        ['Mi', 'What is this?', 'Còn đây là gì?'],
        ['Bin', "It's an eraser.", 'Đây là cục tẩy.'],
        ['Mi', 'Do you have a bag?', 'Bạn có cặp sách không?'],
        ['Bin', 'Yes, I do!', 'Có, tớ có!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['pencil', 'pen', 'book', 'bag', 'ruler', 'eraser'] },
    story: {
      title: 'A Day at School',
      pages: [
        ['Mi', 'I have a bag.', 'Tớ có một cái cặp.'],
        ['Bin', 'I have a book and a pen.', 'Tớ có một quyển sách và một cây bút.'],
        ['Mi', "Let's learn together!", 'Cùng học với nhau nào!'],
        ['Pip', 'Great job!', 'Giỏi lắm!'],
      ],
    },
    sticker: ['🎒', 'Cặp sách xinh'],
    parent: {
      learned: 'pencil, pen, book, bag, ruler, eraser, desk',
      patterns: ["What's this? — It's a pen.", 'Do you have a bag? — Yes, I do.', "Let's learn together!"],
      tips: [
        'Bé đã hoàn thành chủ đề My School với 7 đồ dùng.',
        'Cho bé gọi tên đồ dùng học tập khi chuẩn bị cặp mỗi tối.',
        'Đọc lại truyện "A Day at School" cùng bé.',
      ],
    },
  }),
];

export const UNIT_LESSONS: Lesson[] = [
  ...FAMILY,
  ...COLORS,
  ...NUMBERS,
  ...BODY,
  ...ANIMALS,
  ...FOOD,
  ...TOYS,
  ...SCHOOL,
];
