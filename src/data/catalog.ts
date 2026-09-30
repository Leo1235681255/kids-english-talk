import { LevelInfo, Unit } from '../types';

export const LEVELS: LevelInfo[] = [
  { level: 1, name: 'Starter', age: '4–6 tuổi', cefr: 'Pre-A1', blurb: 'Nghe hiểu, nói từ đơn và câu 2–4 từ' },
  { level: 2, name: 'Explorer', age: '6–8 tuổi', cefr: 'A1', blurb: 'Hỏi – đáp câu ngắn, hội thoại 3–4 lượt' },
  { level: 3, name: 'Adventurer', age: '8–10 tuổi', cefr: 'A1–A2', blurb: 'Xử lý tình huống thực tế, kể lại chuyện' },
];

const u = (
  code: string,
  title: string,
  titleVi: string,
  pattern: string,
  vocab: string,
  emoji: string,
  color: string
): Unit => ({
  code,
  level: Number(code[1]) as 1 | 2 | 3,
  title,
  titleVi,
  pattern,
  vocab,
  emoji,
  color,
});

export const UNITS: Unit[] = [
  // Level 1 · Starter
  u('L1-U01', 'Hello!', 'Chào hỏi', "What's your name? — I'm Mi.", 'hello, hi, goodbye, name, friend, boy, girl', '👋', 'from-amber-300 to-orange-400'),
  u('L1-U02', 'My Family', 'Gia đình', "Who's this? — This is my mom.", 'mom, dad, brother, sister, grandma, grandpa, baby', '👨‍👩‍👧', 'from-pink-300 to-rose-400'),
  u('L1-U03', 'Colors', 'Màu sắc', "What color is it? — It's red.", 'red, blue, yellow, green, pink, orange, purple', '🎨', 'from-fuchsia-300 to-purple-400'),
  u('L1-U04', 'Numbers', 'Số 1–10', "How many? — Three!", 'one → ten', '🔢', 'from-sky-300 to-blue-400'),
  u('L1-U05', 'My Body', 'Cơ thể', 'Touch your nose!', 'head, eyes, ears, nose, mouth, hands, feet', '🙆', 'from-emerald-300 to-teal-400'),
  u('L1-U06', 'Animals', 'Con vật', "What's this? — It's a cat.", 'cat, dog, bird, fish, duck, cow, pig, chicken', '🐶', 'from-lime-300 to-green-400'),
  u('L1-U07', 'Yummy Food', 'Đồ ăn', 'I like bananas.', 'apple, banana, rice, milk, bread, egg, noodles', '🍌', 'from-yellow-300 to-amber-400'),
  u('L1-U08', 'My Toys', 'Đồ chơi', 'I have a ball. Let\'s play!', 'ball, doll, car, teddy bear, kite, robot, blocks', '🧸', 'from-red-300 to-orange-400'),
  // Level 2 · Explorer
  u('L2-U01', 'My School', 'Đồ dùng học tập', 'May I have a pencil? — Here you are.', 'pencil, pen, book, bag, ruler, eraser, desk', '✏️', 'from-blue-300 to-indigo-400'),
  u('L2-U02', 'Feelings', 'Cảm xúc', "How are you? — I'm happy.", 'happy, sad, angry, tired, hungry, scared, fine', '😊', 'from-yellow-300 to-orange-400'),
  u('L2-U03', 'Clothes', 'Quần áo', "I'm wearing a red T-shirt.", 'T-shirt, shorts, dress, hat, shoes, socks, jacket', '👕', 'from-pink-300 to-fuchsia-400'),
  u('L2-U04', 'My House', 'Nhà của em', "Where's the cat? — Under the table.", 'bedroom, kitchen, bathroom, living room, in, on, under', '🏠', 'from-orange-300 to-red-400'),
  u('L2-U05', 'Weather', 'Thời tiết', "What's the weather like? — It's sunny.", 'sunny, rainy, cloudy, windy, hot, cold, umbrella', '🌦️', 'from-cyan-300 to-sky-400'),
  u('L2-U06', 'I Can!', 'Khả năng', "Can you swim? — Yes, I can.", 'run, jump, swim, dance, sing, draw, ride a bike', '🏃', 'from-green-300 to-emerald-400'),
  u('L2-U07', 'My Day', 'Sinh hoạt hằng ngày', "What time is it? — It's seven o'clock.", 'get up, brush teeth, have breakfast, go to school, go to bed', '⏰', 'from-violet-300 to-purple-400'),
  u('L2-U08', 'At the Park', 'Vui chơi cùng bạn', "Let's play tag! — OK!", 'slide, swing, seesaw, sandbox, tag, hide-and-seek', '🛝', 'from-lime-300 to-green-400'),
  // Level 3 · Adventurer
  u('L3-U01', 'Hobbies', 'Sở thích', 'What do you like doing? — I like reading.', 'reading, cooking, painting, playing football, collecting', '📚', 'from-indigo-300 to-blue-400'),
  u('L3-U02', 'Shopping', 'Đi mua sắm', "How much is it? — It's twenty thousand dong.", 'shop, buy, price, cheap, expensive', '🛒', 'from-amber-300 to-yellow-400'),
  u('L3-U03', 'Around Town', 'Hỏi đường', "Where's the park? — Go straight and turn left.", 'hospital, post office, supermarket, street, left, right, straight', '🗺️', 'from-teal-300 to-cyan-400'),
  u('L3-U04', 'Jobs', 'Nghề nghiệp', "What does your mom do? — She's a teacher.", 'teacher, doctor, farmer, driver, cook, police officer, nurse', '👩‍🏫', 'from-rose-300 to-pink-400'),
  u('L3-U05', 'At the Restaurant', 'Gọi món', "What would you like? — I'd like noodles, please.", 'menu, chicken, soup, juice, water, please, thank you', '🍜', 'from-orange-300 to-amber-400'),
  u('L3-U06', 'Staying Healthy', 'Sức khỏe', "What's the matter? — I have a toothache.", 'headache, stomachache, cough, fever, rest, medicine', '🩺', 'from-green-300 to-teal-400'),
  u('L3-U07', 'My Holiday', 'Kỳ nghỉ', 'Where did you go? — I went to Da Lat.', 'beach, mountain, went, saw, ate, swam, took photos', '🏖️', 'from-sky-300 to-blue-400'),
  u('L3-U08', 'Festivals', 'Lễ hội', 'Happy New Year!', 'Tet, lucky money, lantern, mooncake, birthday, present', '🏮', 'from-red-300 to-rose-400'),
];

export const unitsOfLevel = (level: number) => UNITS.filter((x) => x.level === level);
export const unitByCode = (code: string) => UNITS.find((x) => x.code === code);
