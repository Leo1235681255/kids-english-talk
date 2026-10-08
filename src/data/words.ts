import { Word } from '../types';

const w = (id: string, vi: string, o: Partial<Word> = {}): Word => ({ id, en: o.en ?? id, vi, ...o });
/** picture word: cut-out art from public/art */
const a = (id: string, vi: string, o: Partial<Word> & { file?: string } = {}): Word => {
  const { file, ...rest } = o;
  return w(id, vi, { ...rest, art: `/art/w_${file ?? id}.png` });
};
const num = (id: string, vi: string, digit: string, tint: string) => w(id, vi, { digit, tint });
const portrait = (id: string, vi: string) => w(id, vi, { art: `/art/f_${id}.png`, framed: true });

/** Every word used by the lessons. Art comes from the unit mockups in /PHOTO; the few without a picture use emoji. */
export const WORDS: Record<string, Word> = {
  // Unit 1 · Hello!
  girl: w('girl', 'bạn gái', { art: '/art/girl.png' }),
  boy: w('boy', 'bạn trai', { art: '/art/boy.png' }),
  friend: w('friend', 'người bạn', { art: '/art/friend.png' }),
  hello: w('hello', 'xin chào', { art: '/art/hello.png' }),
  hi: w('hi', 'chào bạn', { emoji: '🙋', tint: '#FFE9B8' }),
  goodbye: w('goodbye', 'tạm biệt', { emoji: '👋', tint: '#D8ECFF' }),
  name: w('name', 'tên', { emoji: '🏷️', tint: '#E8DDFB' }),

  // Unit 2 · My Family
  mom: portrait('mom', 'mẹ'),
  dad: portrait('dad', 'bố'),
  brother: portrait('brother', 'anh / em trai'),
  sister: portrait('sister', 'chị / em gái'),
  grandma: portrait('grandma', 'bà'),
  grandpa: w('grandpa', 'ông', { emoji: '👴', tint: '#E4E2F5' }),
  baby: portrait('baby', 'em bé'),

  // Unit 3 · Colors (paint splats)
  red: a('red', 'màu đỏ'),
  blue: a('blue', 'màu xanh dương'),
  yellow: a('yellow', 'màu vàng'),
  green: a('green', 'màu xanh lá'),
  pink: a('pink', 'màu hồng'),
  orange: a('orange', 'màu cam'),
  purple: a('purple', 'màu tím'),

  // Unit 4 · Numbers
  one: num('one', 'một', '1', '#FFE3E3'),
  two: num('two', 'hai', '2', '#DDEBFF'),
  three: num('three', 'ba', '3', '#FFF3BF'),
  four: num('four', 'bốn', '4', '#DDF6D8'),
  five: num('five', 'năm', '5', '#FFE0F0'),
  six: num('six', 'sáu', '6', '#FFE6CC'),
  seven: num('seven', 'bảy', '7', '#E8DDFB'),
  eight: num('eight', 'tám', '8', '#D5F3F7'),
  nine: num('nine', 'chín', '9', '#FFE3E3'),
  ten: num('ten', 'mười', '10', '#DDEBFF'),

  // Unit 5 · My Body
  head: a('head', 'cái đầu'),
  eyes: a('eyes', 'đôi mắt'),
  ears: a('ears', 'đôi tai', { file: 'ear' }),
  nose: a('nose', 'cái mũi'),
  mouth: a('mouth', 'cái miệng'),
  hands: a('hands', 'đôi tay', { file: 'hand' }),
  feet: a('feet', 'đôi chân'),

  // Unit 6 · Animals
  cat: a('cat', 'con mèo'),
  dog: a('dog', 'con chó'),
  bird: a('bird', 'con chim'),
  fish: a('fish', 'con cá'),
  duck: a('duck', 'con vịt'),
  cow: a('cow', 'con bò'),
  pig: a('pig', 'con heo'),
  chicken: a('chicken', 'con gà'),

  // Unit 7 · Yummy Food
  apple: a('apple', 'quả táo'),
  banana: a('banana', 'quả chuối'),
  rice: a('rice', 'cơm'),
  milk: a('milk', 'sữa'),
  bread: a('bread', 'bánh mì'),
  egg: a('egg', 'quả trứng'),
  noodles: a('noodles', 'mì / phở'),

  // Unit 8 · My Toys
  ball: a('ball', 'quả bóng'),
  doll: a('doll', 'búp bê'),
  car: a('car', 'xe hơi'),
  teddy: a('teddy', 'gấu bông', { en: 'teddy bear' }),
  kite: a('kite', 'con diều'),
  robot: a('robot', 'người máy'),
  blocks: a('blocks', 'khối xếp hình'),

  // Level 2 · Unit 1 · My School
  pencil: a('pencil', 'bút chì'),
  pen: a('pen', 'bút bi'),
  book: a('book', 'quyển sách'),
  bag: a('bag', 'cặp sách'),
  ruler: a('ruler', 'cây thước'),
  eraser: a('eraser', 'cục tẩy'),
  desk: w('desk', 'bàn học', { emoji: '🪑', tint: '#F3E3C8' }),

  // Unit 10 · Feelings
  happy: w('happy', 'vui vẻ', { emoji: '😊', tint: '#FFF3BF' }),
  sad: w('sad', 'buồn', { emoji: '😢', tint: '#DDEBFF' }),
  angry: w('angry', 'tức giận', { emoji: '😠', tint: '#FFE3E3' }),
  tired: w('tired', 'mệt', { emoji: '😴', tint: '#E8DDFB' }),
  hungry: w('hungry', 'đói', { emoji: '🍽️', tint: '#FFE6CC' }),
  scared: w('scared', 'sợ hãi', { emoji: '😨', tint: '#D5F3F7' }),
  fine: w('fine', 'khỏe, ổn', { emoji: '🙂', tint: '#DDF6D8' }),

  // Unit 11 · Clothes
  tshirt: w('tshirt', 'áo thun', { en: 'T-shirt', emoji: '👕', tint: '#FFE3E3' }),
  pants: w('pants', 'quần dài', { emoji: '👖', tint: '#DDEBFF' }),
  dress: w('dress', 'váy đầm', { emoji: '👗', tint: '#FFE0F0' }),
  jacket: w('jacket', 'áo khoác', { emoji: '🧥', tint: '#FFF3BF' }),
  socks: w('socks', 'đôi tất', { emoji: '🧦', tint: '#E8DDFB' }),
  shoes: w('shoes', 'đôi giày', { emoji: '👟', tint: '#D5F3F7' }),

  // Unit 12 · My House
  bedroom: w('bedroom', 'phòng ngủ', { emoji: '🛏️', tint: '#E8DDFB' }),
  kitchen: w('kitchen', 'nhà bếp', { emoji: '🍳', tint: '#FFE6CC' }),
  bathroom: w('bathroom', 'phòng tắm', { emoji: '🛁', tint: '#D5F3F7' }),
  livingroom: w('livingroom', 'phòng khách', { en: 'living room', emoji: '🛋️', tint: '#FFE3E3' }),
  in: w('in', 'ở trong', { emoji: '📦', tint: '#F3E3C8' }),
  on: w('on', 'ở trên', { emoji: '🔝', tint: '#DDEBFF' }),
  under: w('under', 'ở dưới', { emoji: '⬇️', tint: '#DDF6D8' }),

  // Unit 13 · Weather
  sunny: w('sunny', 'trời nắng', { emoji: '☀️', tint: '#FFF3BF' }),
  cloudy: w('cloudy', 'nhiều mây', { emoji: '☁️', tint: '#E4E2F5' }),
  rainy: w('rainy', 'trời mưa', { emoji: '🌧️', tint: '#DDEBFF' }),
  snowy: w('snowy', 'có tuyết', { emoji: '❄️', tint: '#D5F3F7' }),
  windy: w('windy', 'có gió', { emoji: '💨', tint: '#DDF6D8' }),
  rainbow: w('rainbow', 'cầu vồng', { emoji: '🌈', tint: '#FFE0F0' }),

  // Unit 14 · Fruits (apple, banana come from Unit 7; "orange" the colour is taken, so the fruit gets its own id)
  orangefruit: w('orangefruit', 'quả cam', { en: 'orange', emoji: '🍊', tint: '#FFE6CC' }),
  grapes: w('grapes', 'chùm nho', { emoji: '🍇', tint: '#E8DDFB' }),
  watermelon: w('watermelon', 'dưa hấu', { emoji: '🍉', tint: '#DDF6D8' }),
  strawberry: w('strawberry', 'dâu tây', { emoji: '🍓', tint: '#FFE3E3' }),

  // Unit 15 · At the Zoo
  elephant: w('elephant', 'con voi', { emoji: '🐘', tint: '#E4E2F5' }),
  lion: w('lion', 'sư tử', { emoji: '🦁', tint: '#FFF3BF' }),
  monkey: w('monkey', 'con khỉ', { emoji: '🐒', tint: '#F3E3C8' }),
  giraffe: w('giraffe', 'hươu cao cổ', { emoji: '🦒', tint: '#FFE6CC' }),
  zebra: w('zebra', 'ngựa vằn', { emoji: '🦓', tint: '#E4E2F5' }),
  panda: w('panda', 'gấu trúc', { emoji: '🐼', tint: '#DDF6D8' }),

  // Unit 16 · Transportation (car comes from Unit 8)
  bus: w('bus', 'xe buýt', { emoji: '🚌', tint: '#FFF3BF' }),
  bike: w('bike', 'xe đạp', { emoji: '🚲', tint: '#DDF6D8' }),
  train: w('train', 'tàu hỏa', { emoji: '🚆', tint: '#DDEBFF' }),
  plane: w('plane', 'máy bay', { emoji: '✈️', tint: '#D5F3F7' }),
  boat: w('boat', 'tàu thủy', { emoji: '⛵', tint: '#E8DDFB' }),
};

export const COLOR_HEX: Record<string, string> = {
  red: '#EF4444',
  blue: '#3B82F6',
  yellow: '#FACC15',
  green: '#22C55E',
  pink: '#EC4899',
  orange: '#F97316',
  purple: '#8B5CF6',
};

/** Wrong-answer fillers that every Starter child can already recognise. */
export const FILLERS = ['car', 'ball', 'teddy', 'kite', 'dog', 'cat', 'apple', 'book'];

export const wordOf = (id: string): Word => WORDS[id] ?? { id, en: id, vi: '', emoji: '⭐' };
