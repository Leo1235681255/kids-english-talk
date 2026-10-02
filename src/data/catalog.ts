import { LevelInfo, Unit } from '../types';

/** Three levels in total; Starter and Explorer are laid out now, Adventurer comes later. */
export const LEVELS: LevelInfo[] = [
  { level: 1, name: 'Starter', age: '4–6 tuổi', cefr: 'Pre-A1', blurb: 'Quyển 1 · 16 unit · nghe hiểu, nói từ đơn và câu 2–5 từ' },
  { level: 2, name: 'Explorer', age: '6–8 tuổi', cefr: 'A1', blurb: 'Quyển 2 · 16 unit · câu tối đa 8 từ, mỗi unit một trọng tâm ngữ pháp' },
  { level: 3, name: 'Adventurer', age: '8–10 tuổi', cefr: 'A1–A2', blurb: 'Quyển 3 · sắp ra mắt' },
];

const GRADIENTS = [
  'from-amber-300 to-orange-400',
  'from-pink-300 to-rose-400',
  'from-fuchsia-300 to-purple-400',
  'from-sky-300 to-blue-400',
  'from-emerald-300 to-teal-400',
  'from-lime-300 to-green-400',
  'from-yellow-300 to-amber-400',
  'from-red-300 to-orange-400',
];

const u = (
  code: string,
  headline: string,
  title: string,
  titleVi: string,
  pattern: string,
  vocab: string,
  emoji: string
): Unit => ({
  code,
  level: Number(code[1]) as 1 | 2 | 3,
  headline,
  title,
  titleVi,
  pattern,
  vocab,
  emoji,
  color: GRADIENTS[(Number(code.slice(-2)) - 1) % GRADIENTS.length],
});

/** Source of truth: PHOTO/KidsEnglishTalk_Starter_16_Units.md and ..._Quyen2_Explorer_16_Units.md */
export const UNITS: Unit[] = [
  // Level 1 · Starter · Quyển 1
  u('L1-U01', 'Hello, Friends!', 'Hello!', 'Chào hỏi', "What's your name? — I'm Mi.", 'hello, hi, goodbye, name, friend, boy, girl', '👋'),
  u('L1-U02', 'I Love My Family!', 'My Family', 'Gia đình', "Who's this? — This is my mom.", 'mom, dad, brother, sister, grandma, grandpa, baby', '👨‍👩‍👧'),
  u('L1-U03', "Let's Learn Colors!", 'Colors', 'Màu sắc', "What color is it? — It's red.", 'red, blue, yellow, green, pink, orange, purple', '🎨'),
  u('L1-U04', "Let's Learn Numbers!", 'Numbers', 'Số đếm 1–10', 'How many? — Three!', 'one, two, three … ten', '🔢'),
  u('L1-U05', 'Touch Your Nose!', 'My Body', 'Cơ thể', "What's this? — It's my head.", 'head, eyes, ears, nose, mouth, hands, feet', '🙆'),
  u('L1-U06', 'Hello, Farm Animals!', 'Animals', 'Con vật', "What's this? — It's a cat.", 'cat, dog, bird, fish, duck, cow, pig, chicken', '🐶'),
  u('L1-U07', 'Yummy, Yummy Food!', 'Yummy Food', 'Đồ ăn ngon', 'Do you like milk? — Yes, I do!', 'apple, banana, rice, milk, bread, egg, noodles', '🍌'),
  u('L1-U08', "Let's Play Together!", 'My Toys', 'Đồ chơi', "What's this? — It's a car.", 'ball, doll, car, teddy bear, kite, robot, blocks', '🧸'),
  u('L1-U09', "Let's Go to School!", 'My School', 'Đồ dùng học tập', "What's this? — It's a pen.", 'pencil, pen, book, bag, ruler, eraser', '✏️'),
  u('L1-U10', 'How Are You?', 'Feelings', 'Cảm xúc', "How are you? — I'm happy.", 'happy, sad, angry, tired, hungry, scared, fine', '😊'),
  u('L1-U11', "Let's Get Dressed!", 'Clothes', 'Quần áo', "What's this? — It's a T-shirt.", 'T-shirt, pants, dress, jacket, socks, shoes', '👕'),
  u('L1-U12', "Where's the Cat?", 'My House', 'Nhà của em', "Where's the cat? — It's under the table.", 'bedroom, kitchen, bathroom, living room, in, on, under', '🏠'),
  u('L1-U13', "What's the Weather?", 'Weather', 'Thời tiết', "What's the weather? — It's cloudy.", 'sunny, cloudy, rainy, snowy, windy, rainbow', '🌦️'),
  u('L1-U14', 'I Like Fruits!', 'Fruits', 'Trái cây', "What's this? — It's an apple.", 'apple, banana, orange, grapes, watermelon, strawberry', '🍓'),
  u('L1-U15', "Let's Go to the Zoo!", 'At the Zoo', 'Sở thú', "What's this? — It's an elephant.", 'elephant, lion, monkey, giraffe, zebra, panda', '🦁'),
  u('L1-U16', "Beep, Beep! Let's Go!", 'Transportation', 'Phương tiện giao thông', "What's this? — It's a car.", 'car, bus, bike, train, plane, boat', '🚌'),

  // Level 2 · Explorer · Quyển 2
  u('L2-U01', 'Stand Up, Sit Down!', 'My New Class', 'Lớp học mới', 'Stand up! Sit down! Please open your book.', 'stand up, sit down, open, close, listen, look, raise your hand', '🏫'),
  u('L2-U02', 'This Is My Friend!', 'My Friends', 'Bạn bè của em', 'He is / She is + tall, short, kind, funny', 'tall, short, long hair, short hair, glasses, kind, funny', '🧑‍🤝‍🧑'),
  u('L2-U03', 'Yes, I Can!', 'I Can!', 'Em làm được!', "I can swim. I can't fly.", 'run, jump, swim, dance, sing, draw, ride a bike', '💪'),
  u('L2-U04', "Let's Play Badminton!", 'Sports', 'Thể thao', "Do you play …? — Yes, I do. / No, I don't.", 'football, basketball, badminton, volleyball, table tennis, jump rope', '⚽'),
  u('L2-U05', 'What Time Is It?', 'My Day', 'Một ngày của em', "What time is it? — It's seven o'clock.", 'get up, brush my teeth, have breakfast, go to school, have lunch, do homework', '⏰'),
  u('L2-U06', 'What Day Is It Today?', 'Days of the Week', 'Các ngày trong tuần', "What day is it today? — It's Monday.", 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday', '📅'),
  u('L2-U07', "I'm Reading a Book!", 'What Are You Doing?', 'Em đang làm gì?', "What are you doing? — I'm reading.", 'reading, writing, drawing, singing, eating, sleeping, cooking', '📖'),
  u('L2-U08', 'Do You Have a Pet?', 'My Pets', 'Thú cưng', 'Do you have a pet? — Yes, I do. I have a rabbit.', 'pet, rabbit, hamster, parrot, turtle, puppy, kitten', '🐰'),
  u('L2-U09', 'There Is a Butterfly!', 'In the Garden', 'Trong khu vườn', 'There is a bee. There are three bees.', 'flower, tree, grass, butterfly, bee, ant, ladybug', '🦋'),
  u('L2-U10', 'I Can See a Dolphin!', 'Ocean Friends', 'Đại dương', 'What can you see? — I can see a dolphin.', 'sea, whale, dolphin, shark, octopus, crab, starfish', '🐬'),
  u('L2-U11', 'Where Are You Going?', 'Around Town', 'Quanh thị trấn', "Where are you going? — I'm going to the library.", 'park, library, market, supermarket, bakery, hospital, bus stop', '🏙️'),
  u('L2-U12', 'What Does Your Mom Do?', 'Jobs', 'Nghề nghiệp', "What does your mom do? — She's a nurse.", 'teacher, doctor, nurse, farmer, cook, driver, police officer', '👩‍⚕️'),
  u('L2-U13', 'I Can Play the Piano!', 'Music Time', 'Giờ âm nhạc', 'Can you play the piano? — Yes, I can.', 'piano, guitar, drum, violin, flute, trumpet, band', '🎹'),
  u('L2-U14', 'I Like Summer!', 'Seasons', 'Các mùa trong năm', "What's your favorite season? — I like summer.", 'spring, summer, fall, winter, warm, cool, season', '🍂'),
  u('L2-U15', 'This Is for You!', 'Happy Birthday!', 'Sinh nhật', 'Happy birthday! This is for you. — Thank you!', 'birthday, cake, candle, present, balloon, card, party', '🎂'),
  u('L2-U16', 'Happy New Year!', 'Tet Holiday', 'Tết Nguyên đán', 'Happy New Year!', 'Tet, New Year, lucky money, fireworks, banh chung, peach blossom, lion dance', '🧧'),
];

export const unitsOfLevel = (level: number) => UNITS.filter((x) => x.level === level);
export const unitByCode = (code: string) => UNITS.find((x) => x.code === code);
