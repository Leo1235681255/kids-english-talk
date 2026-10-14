import { Line, Phrase } from '../types';

/** Level 3 · Adventurer · Quyển 3, parsed from KidsEnglishTalk_Quyen3_Adventurer_16_Units.md (one record per unit). */
export interface BookWord {
  id: string;
  en: string;
  vi: string;
  /** cut-out of the unit's New Words picture, /art/l3/<img>.jpg */
  img: string;
}

export interface BookUnit {
  code: string;
  words: BookWord[];
  chant: { title: string; lines: Phrase[] };
  say: Phrase[];
  scene: string;
  roleplay: 'Mi' | 'Bin';
  talk: Line[];
  story: { title: string; titleVi: string; pages: Line[]; questions: { q: string; vi: string; a: string }[] };
  quiz: { q: string; options: string[]; answer: number }[];
  write: string;
  badge: { name: string; vi: string };
  parent: { learned: string; patterns: string[]; tips: string[] };
}

export const BOOK3: BookUnit[] = [
 {
  "code": "L3-U01",
  "words": [
   {
    "id": "l3u01_live",
    "en": "live",
    "vi": "sống",
    "img": "u01_1"
   },
   {
    "id": "l3u01_hometown",
    "en": "hometown",
    "vi": "quê hương",
    "img": "u01_2"
   },
   {
    "id": "l3u01_grade",
    "en": "grade",
    "vi": "khối lớp",
    "img": "u01_3"
   },
   {
    "id": "l3u01_favorite",
    "en": "favorite",
    "vi": "yêu thích",
    "img": "u01_4"
   },
   {
    "id": "l3u01_subject",
    "en": "subject",
    "vi": "môn học",
    "img": "u01_5"
   },
   {
    "id": "l3u01_math",
    "en": "Math",
    "vi": "môn Toán",
    "img": "u01_6"
   },
   {
    "id": "l3u01_art",
    "en": "Art",
    "vi": "môn Mỹ thuật",
    "img": "u01_7"
   },
   {
    "id": "l3u01_p_e",
    "en": "P.E.",
    "vi": "môn Thể dục",
    "img": "u01_8"
   }
  ],
  "chant": {
   "title": "All About Me Song",
   "lines": [
    {
     "en": "Hello, everyone, this is me!",
     "vi": "Xin chào mọi người, đây là mình!"
    },
    {
     "en": "I'm nine years old, as you can see!",
     "vi": "Mình chín tuổi, như các bạn thấy đó!"
    },
    {
     "en": "I live in Ha Noi, on a busy street,",
     "vi": "Mình sống ở Hà Nội, trên một con phố nhộn nhịp,"
    },
    {
     "en": "My hometown's Hue — it's really sweet!",
     "vi": "Quê mình ở Huế — thật dễ thương!"
    },
    {
     "en": "I'm in Grade 4, and I love to learn,",
     "vi": "Mình học lớp 4, và mình rất thích học,"
    },
    {
     "en": "What's your favorite subject? It's your turn!",
     "vi": "Môn học yêu thích của bạn là gì? Đến lượt bạn rồi!"
    },
    {
     "en": "Tell me about you — I want to know you!",
     "vi": "Kể về bạn đi — mình muốn biết về bạn!"
    },
    {
     "en": "Nice to meet you! Nice to meet you, too!",
     "vi": "Rất vui được gặp bạn! Mình cũng rất vui được gặp bạn!"
    }
   ]
  },
  "say": [
   {
    "en": "Where do you live?",
    "vi": "Bạn sống ở đâu?"
   },
   {
    "en": "I live in Ha Noi.",
    "vi": "Mình sống ở Hà Nội."
   },
   {
    "en": "What's your favorite subject?",
    "vi": "Môn học yêu thích của bạn là gì?"
   },
   {
    "en": "It's English.",
    "vi": "Tiếng Anh."
   },
   {
    "en": "I'm in Grade 4.",
    "vi": "Mình học lớp 4."
   }
  ],
  "scene": "Ngày đầu năm học, lớp có bạn mới tên Tom đến từ nước Úc",
  "roleplay": "Mi",
  "talk": [
   {
    "who": "Miss Hoa",
    "en": "Class, this is Tom. He's our new friend.",
    "vi": "Cả lớp, đây là Tom. Bạn ấy là bạn mới của chúng ta."
   },
   {
    "who": "Tom",
    "en": "Hi, everyone! I'm Tom. I'm from Australia.",
    "vi": "Chào mọi người! Mình là Tom. Mình đến từ Úc."
   },
   {
    "who": "Mi",
    "en": "Hi, Tom! I'm Mi. Where do you live now?",
    "vi": "Chào Tom! Mình là Mi. Giờ bạn sống ở đâu?"
   },
   {
    "who": "Tom",
    "en": "I live near the school, on Le Loi Street.",
    "vi": "Mình sống gần trường, trên phố Lê Lợi."
   },
   {
    "who": "Bin",
    "en": "What's your favorite subject?",
    "vi": "Môn học yêu thích của bạn là gì?"
   },
   {
    "who": "Tom",
    "en": "I like Math. What about you?",
    "vi": "Mình thích Toán. Còn bạn thì sao?"
   },
   {
    "who": "Bin",
    "en": "My favorite subject is P.E. I love football!",
    "vi": "Môn yêu thích của mình là Thể dục. Mình mê bóng đá!"
   },
   {
    "who": "Tom",
    "en": "Me too! Let's play at break time.",
    "vi": "Mình cũng vậy! Giờ ra chơi mình chơi nhé."
   }
  ],
  "story": {
   "title": "Meet Tom",
   "titleVi": "Làm quen với Tom",
   "pages": [
    {
     "who": "Tom",
     "en": "Tom is ten years old.",
     "vi": "Tom mười tuổi."
    },
    {
     "who": "Pip",
     "en": "He is from Sydney, Australia.",
     "vi": "Bạn ấy đến từ Sydney, nước Úc."
    },
    {
     "who": "Pip",
     "en": "Now he lives in Ha Noi with his parents.",
     "vi": "Giờ bạn ấy sống ở Hà Nội cùng bố mẹ."
    },
    {
     "who": "Mi",
     "en": "He is in Grade 5 at Mi's school.",
     "vi": "Bạn ấy học lớp 5 ở trường của Mi."
    },
    {
     "who": "Pip",
     "en": "His favorite subject is Math, and he loves football.",
     "vi": "Môn yêu thích của bạn ấy là Toán, và bạn ấy mê bóng đá."
    },
    {
     "who": "Mi",
     "en": "He wants to learn Vietnamese, so Mi helps him.",
     "vi": "Bạn ấy muốn học tiếng Việt, nên Mi giúp bạn ấy."
    }
   ],
   "questions": [
    {
     "q": "How old is Tom?",
     "vi": "Tom bao nhiêu tuổi?",
     "a": "He is ten years old."
    },
    {
     "q": "Where is Tom from?",
     "vi": "Tom đến từ đâu?",
     "a": "He is from Sydney, Australia."
    },
    {
     "q": "True or False: Tom's favorite subject is Art.",
     "vi": "Đúng hay sai: Môn yêu thích của Tom là Mỹ thuật.",
     "a": "False. It's Math."
    }
   ]
  },
  "quiz": [
   {
    "q": "I ___ in Ha Noi.",
    "options": [
     "live",
     "lives",
     "living"
    ],
    "answer": 0
   },
   {
    "q": "What's your favorite subject? — ___",
    "options": [
     "It's Math.",
     "I'm ten.",
     "I live in Hue."
    ],
    "answer": 0
   },
   {
    "q": "Tom ___ from Australia.",
    "options": [
     "is",
     "am",
     "are"
    ],
    "answer": 0
   },
   {
    "q": "P.E. is a ___.",
    "options": [
     "subject",
     "hometown",
     "grade"
    ],
    "answer": 0
   }
  ],
  "write": "Viết 4 câu giới thiệu bản thân: My name is ___. I'm ___ years old. I live in ___. My favorite subject is ___.",
  "badge": {
   "name": "Super Speaker",
   "vi": "Người nói giỏi"
  },
  "parent": {
   "learned": "live, hometown, grade, favorite, subject, Math, Art, P.E",
   "patterns": [
    "Where do you live? — I live in Ha Noi.",
    "What's your favorite subject? — It's English.",
    "I'm in Grade 4."
   ],
   "tips": [
    "Cho bé tập giới thiệu bản thân 30 giây trước gương hoặc quay video.",
    "Hỏi bé về bạn mới ở lớp: “Where does your friend live?”",
    "Nhắc bé không chia sẻ địa chỉ nhà và số điện thoại với người lạ trên mạng."
   ]
  }
 },
 {
  "code": "L3-U02",
  "words": [
   {
    "id": "l3u02_hobby",
    "en": "hobby",
    "vi": "sở thích",
    "img": "u02_7"
   },
   {
    "id": "l3u02_free_time",
    "en": "free time",
    "vi": "thời gian rảnh",
    "img": "u02_8"
   },
   {
    "id": "l3u02_reading_comics",
    "en": "reading comics",
    "vi": "đọc truyện tranh",
    "img": "u02_1"
   },
   {
    "id": "l3u02_playing_chess",
    "en": "playing chess",
    "vi": "chơi cờ vua",
    "img": "u02_2"
   },
   {
    "id": "l3u02_painting",
    "en": "painting",
    "vi": "vẽ tranh",
    "img": "u02_3"
   },
   {
    "id": "l3u02_gardening",
    "en": "gardening",
    "vi": "làm vườn",
    "img": "u02_4"
   },
   {
    "id": "l3u02_collecting_stamps",
    "en": "collecting stamps",
    "vi": "sưu tầm tem",
    "img": "u02_5"
   },
   {
    "id": "l3u02_skateboarding",
    "en": "skateboarding",
    "vi": "trượt ván",
    "img": "u02_6"
   }
  ],
  "chant": {
   "title": "Free Time Song",
   "lines": [
    {
     "en": "What do you like doing in your free time?",
     "vi": "Bạn thích làm gì lúc rảnh rỗi?"
    },
    {
     "en": "I like reading comics, one at a time!",
     "vi": "Mình thích đọc truyện tranh, từng cuốn một!"
    },
    {
     "en": "She loves painting, he loves chess,",
     "vi": "Bạn ấy thích vẽ tranh, bạn ấy thích cờ vua,"
    },
    {
     "en": "Gardening, skating — which is best?",
     "vi": "Làm vườn, trượt ván — cái nào hay nhất?"
    },
    {
     "en": "Collecting stamps from near and far,",
     "vi": "Sưu tầm tem từ gần đến xa,"
    },
    {
     "en": "Hobbies make us who we are!",
     "vi": "Sở thích làm nên con người chúng ta!"
    }
   ]
  },
  "say": [
   {
    "en": "What do you like doing in your free time?",
    "vi": "Lúc rảnh bạn thích làm gì?"
   },
   {
    "en": "I like reading comics.",
    "vi": "Mình thích đọc truyện tranh."
   },
   {
    "en": "Does Bin like chess?",
    "vi": "Bin có thích cờ vua không?"
   },
   {
    "en": "Yes, he does.",
    "vi": "Có."
   }
  ],
  "scene": "Câu lạc bộ sở thích sau giờ học",
  "roleplay": "Mi",
  "talk": [
   {
    "who": "Tom",
    "en": "What do you like doing in your free time, Mi?",
    "vi": "Mi ơi, lúc rảnh bạn thích làm gì?"
   },
   {
    "who": "Mi",
    "en": "I love painting. I paint every weekend.",
    "vi": "Mình thích vẽ tranh. Cuối tuần nào mình cũng vẽ."
   },
   {
    "who": "Tom",
    "en": "Cool! Does Bin like painting, too?",
    "vi": "Tuyệt! Bin cũng thích vẽ à?"
   },
   {
    "who": "Mi",
    "en": "No, he doesn't. He enjoys playing chess.",
    "vi": "Không. Bạn ấy thích chơi cờ vua."
   },
   {
    "who": "Bin",
    "en": "Yes! I play chess with my dad every evening.",
    "vi": "Đúng vậy! Tối nào mình cũng chơi cờ với bố."
   },
   {
    "who": "Tom",
    "en": "I like collecting stamps. I have two hundred!",
    "vi": "Mình thích sưu tầm tem. Mình có hai trăm con!"
   },
   {
    "who": "Mi",
    "en": "Wow! Can you show us tomorrow?",
    "vi": "Ồ! Mai bạn cho tụi mình xem nhé?"
   },
   {
    "who": "Tom",
    "en": "Sure! I'll bring my stamp book.",
    "vi": "Được chứ! Mình sẽ mang cuốn sổ tem đến."
   }
  ],
  "story": {
   "title": "The After-School Club",
   "titleVi": "Câu lạc bộ sau giờ học",
   "pages": [
    {
     "who": "Mi",
     "en": "Every Friday, Mi's school has an after-school club.",
     "vi": "Thứ Sáu nào trường của Mi cũng có câu lạc bộ sau giờ học."
    },
    {
     "who": "Mi",
     "en": "Mi goes to the painting room because she loves art.",
     "vi": "Mi đến phòng vẽ vì bạn ấy yêu hội họa."
    },
    {
     "who": "Bin",
     "en": "Bin plays chess with his teacher. He is very good at it.",
     "vi": "Bin chơi cờ vua với thầy giáo. Bạn ấy chơi rất giỏi."
    },
    {
     "who": "Tom",
     "en": "Tom shows his stamps from twenty countries.",
     "vi": "Tom khoe bộ tem từ hai mươi quốc gia."
    },
    {
     "who": "Lan",
     "en": "Lan doesn't like painting, but she enjoys gardening.",
     "vi": "Lan không thích vẽ, nhưng bạn ấy thích làm vườn."
    },
    {
     "who": "Pip",
     "en": "She waters the plants in the school garden.",
     "vi": "Bạn ấy tưới cây trong vườn trường."
    }
   ],
   "questions": [
    {
     "q": "What does Mi love?",
     "vi": "Mi yêu thích điều gì?",
     "a": "She loves art (painting)."
    },
    {
     "q": "Who plays chess?",
     "vi": "Ai chơi cờ vua?",
     "a": "Bin plays chess."
    },
    {
     "q": "True or False: Lan enjoys painting.",
     "vi": "Đúng hay sai: Lan thích vẽ.",
     "a": "False. She enjoys gardening."
    }
   ]
  },
  "quiz": [
   {
    "q": "I like ___ comics.",
    "options": [
     "reading",
     "read",
     "reads"
    ],
    "answer": 0
   },
   {
    "q": "Does Tom like stamps? — ___",
    "options": [
     "Yes, he does.",
     "Yes, he is.",
     "Yes, I do."
    ],
    "answer": 0
   },
   {
    "q": "She waters plants every day. Her hobby is ___.",
    "options": [
     "gardening",
     "playing chess",
     "skateboarding"
    ],
    "answer": 0
   },
   {
    "q": "You need a helmet for ___.",
    "options": [
     "skateboarding",
     "reading comics",
     "collecting stamps"
    ],
    "answer": 0
   }
  ],
  "write": "Viết về sở thích của bạn: I like ___ in my free time. I ___ every ___. My friend likes ___.",
  "badge": {
   "name": "Hobby Hero",
   "vi": "Anh hùng sở thích"
  },
  "parent": {
   "learned": "hobby, free time, reading comics, playing chess, painting, gardening, collecting stamps, skateboarding",
   "patterns": [
    "What do you like doing in your free time?",
    "I like reading comics.",
    "Does Bin like chess? — Yes, he does."
   ],
   "tips": [
    "Cùng bé thử một sở thích mới mỗi tháng và nói về nó bằng tiếng Anh.",
    "Khi bé trượt ván, đạp xe: luôn đội mũ bảo hiểm.",
    "Hỏi thêm “Why do you like it?” để bé tập nói dài hơn."
   ]
  }
 },
 {
  "code": "L3-U03",
  "words": [
   {
    "id": "l3u03_price",
    "en": "price",
    "vi": "giá tiền",
    "img": "u03_1"
   },
   {
    "id": "l3u03_cheap",
    "en": "cheap",
    "vi": "rẻ",
    "img": "u03_2"
   },
   {
    "id": "l3u03_expensive",
    "en": "expensive",
    "vi": "đắt",
    "img": "u03_3"
   },
   {
    "id": "l3u03_buy",
    "en": "buy",
    "vi": "mua",
    "img": "u03_4"
   },
   {
    "id": "l3u03_sell",
    "en": "sell",
    "vi": "bán",
    "img": "u03_5"
   },
   {
    "id": "l3u03_thousand",
    "en": "thousand",
    "vi": "nghìn",
    "img": "u03_6"
   },
   {
    "id": "l3u03_money",
    "en": "money",
    "vi": "tiền",
    "img": "u03_7"
   },
   {
    "id": "l3u03_change",
    "en": "change",
    "vi": "tiền thối",
    "img": "u03_8"
   }
  ],
  "chant": {
   "title": "Shopping Day Song",
   "lines": [
    {
     "en": "Let's go shopping — one, two, three!",
     "vi": "Đi mua sắm nào — một, hai, ba!"
    },
    {
     "en": "How much is it? Tell me, please!",
     "vi": "Cái này bao nhiêu? Cho mình biết với!"
    },
    {
     "en": "It's twenty thousand — that's quite cheap!",
     "vi": "Hai mươi nghìn — khá rẻ đấy!"
    },
    {
     "en": "Ninety thousand? That's expensive — eek!",
     "vi": "Chín mươi nghìn ư? Đắt quá — ối!"
    },
    {
     "en": "Count your money, wait in line,",
     "vi": "Đếm tiền, xếp hàng chờ,"
    },
    {
     "en": "Here's your change — thank you, that's fine!",
     "vi": "Tiền thối của bạn đây — cảm ơn, được rồi!"
    }
   ]
  },
  "say": [
   {
    "en": "How much is this T-shirt?",
    "vi": "Chiếc áo thun này giá bao nhiêu?"
   },
   {
    "en": "It's ninety thousand dong.",
    "vi": "Chín mươi nghìn đồng."
   },
   {
    "en": "Can I have this pencil, please?",
    "vi": "Cho cháu cây bút chì này nhé."
   }
  ],
  "scene": "Tiệm văn phòng phẩm gần trường, Mi mua quà sinh nhật cho Lan",
  "roleplay": "Mi",
  "talk": [
   {
    "who": "Shopkeeper",
    "en": "Hello! Can I help you?",
    "vi": "Chào cháu! Cháu cần gì?"
   },
   {
    "who": "Mi",
    "en": "Yes, please. How much is this notebook?",
    "vi": "Dạ. Quyển vở này giá bao nhiêu ạ?"
   },
   {
    "who": "Shopkeeper",
    "en": "It's twenty thousand dong.",
    "vi": "Hai mươi nghìn đồng cháu ạ."
   },
   {
    "who": "Mi",
    "en": "And how much are these stickers?",
    "vi": "Còn mấy tấm sticker này bao nhiêu ạ?"
   },
   {
    "who": "Shopkeeper",
    "en": "They're fifteen thousand dong.",
    "vi": "Mười lăm nghìn đồng."
   },
   {
    "who": "Mi",
    "en": "Can I have the notebook and the stickers, please?",
    "vi": "Cho cháu lấy quyển vở và sticker nhé."
   },
   {
    "who": "Shopkeeper",
    "en": "That's thirty-five thousand dong.",
    "vi": "Tất cả ba mươi lăm nghìn đồng."
   },
   {
    "who": "Mi",
    "en": "Here's fifty thousand.",
    "vi": "Cháu gửi năm mươi nghìn ạ."
   },
   {
    "who": "Shopkeeper",
    "en": "Here's your change. Fifteen thousand. Thank you!",
    "vi": "Tiền thối của cháu đây, mười lăm nghìn. Cảm ơn cháu!"
   }
  ],
  "story": {
   "title": "Bin's Piggy Bank",
   "titleVi": "Chú heo đất của Bin",
   "pages": [
    {
     "who": "Bin",
     "en": "Bin wants to buy a new football.",
     "vi": "Bin muốn mua một quả bóng mới."
    },
    {
     "who": "Pip",
     "en": "It costs one hundred thousand dong.",
     "vi": "Nó giá một trăm nghìn đồng."
    },
    {
     "who": "Bin",
     "en": "Bin has only forty thousand dong in his piggy bank.",
     "vi": "Bin chỉ có bốn mươi nghìn đồng trong heo đất."
    },
    {
     "who": "Pip",
     "en": "Every week, he helps his mom and saves ten thousand dong.",
     "vi": "Mỗi tuần, bạn ấy giúp mẹ và để dành mười nghìn đồng."
    },
    {
     "who": "Pip",
     "en": "After six weeks, he has one hundred thousand dong.",
     "vi": "Sau sáu tuần, bạn ấy có một trăm nghìn đồng."
    },
    {
     "who": "Pip",
     "en": "He goes to the shop and buys the football. He is very happy!",
     "vi": "Bạn ấy đến cửa hàng mua quả bóng. Bạn ấy rất vui!"
    }
   ],
   "questions": [
    {
     "q": "How much is the football?",
     "vi": "Quả bóng giá bao nhiêu?",
     "a": "It's one hundred thousand dong."
    },
    {
     "q": "How much does Bin save every week?",
     "vi": "Mỗi tuần Bin để dành bao nhiêu?",
     "a": "Ten thousand dong."
    },
    {
     "q": "True or False: Bin buys the football after four weeks.",
     "vi": "Đúng hay sai: Bin mua quả bóng sau bốn tuần.",
     "a": "False. After six weeks."
    }
   ]
  },
  "quiz": [
   {
    "q": "How much ___ these pens?",
    "options": [
     "are",
     "is",
     "am"
    ],
    "answer": 0
   },
   {
    "q": "A pencil for 100,000 dong is ___.",
    "options": [
     "expensive",
     "cheap"
    ],
    "answer": 0
   },
   {
    "q": "20,000 + 30,000 = ___ thousand dong",
    "options": [
     "fifty",
     "forty",
     "sixty"
    ],
    "answer": 0
   },
   {
    "q": "It's 35,000 dong. I pay 50,000 dong. My change is ___.",
    "options": [
     "fifteen thousand",
     "twenty thousand",
     "five thousand"
    ],
    "answer": 0
   }
  ],
  "write": "Viết danh sách mua sắm có giá: I want to buy ___. It's ___ thousand dong. They're ___ thousand dong.",
  "badge": {
   "name": "Smart Shopper",
   "vi": "Người mua sắm thông minh"
  },
  "parent": {
   "learned": "price, cheap, expensive, buy, sell, thousand, money, change",
   "patterns": [
    "How much is this T-shirt?",
    "It's ninety thousand dong.",
    "Can I have this pencil, please?"
   ],
   "tips": [
    "Khi đi chợ, siêu thị, cho bé tự trả tiền và kiểm tra tiền thối.",
    "Tập đọc giá bằng tiếng Anh: “It's twenty-five thousand dong.”",
    "Cho bé một heo đất để học cách để dành tiền."
   ]
  }
 },
 {
  "code": "L3-U04",
  "words": [
   {
    "id": "l3u04_menu",
    "en": "menu",
    "vi": "thực đơn",
    "img": "u04_1"
   },
   {
    "id": "l3u04_waiter",
    "en": "waiter",
    "vi": "người phục vụ",
    "img": "u04_2"
   },
   {
    "id": "l3u04_order",
    "en": "order",
    "vi": "gọi món",
    "img": "u04_3"
   },
   {
    "id": "l3u04_a_bowl_of",
    "en": "a bowl of",
    "vi": "một bát / một tô",
    "img": "u04_4"
   },
   {
    "id": "l3u04_a_glass_of",
    "en": "a glass of",
    "vi": "một ly",
    "img": "u04_5"
   },
   {
    "id": "l3u04_spicy",
    "en": "spicy",
    "vi": "cay",
    "img": "u04_6"
   },
   {
    "id": "l3u04_delicious",
    "en": "delicious",
    "vi": "ngon",
    "img": "u04_7"
   },
   {
    "id": "l3u04_bill",
    "en": "bill",
    "vi": "hóa đơn",
    "img": "u04_8"
   }
  ],
  "chant": {
   "title": "Restaurant Song",
   "lines": [
    {
     "en": "Welcome! Here's the menu, please!",
     "vi": "Xin mời! Thực đơn đây ạ!"
    },
    {
     "en": "What would you like? Choose what you please!",
     "vi": "Quý khách muốn dùng gì? Cứ chọn món mình thích!"
    },
    {
     "en": "I'd like a bowl of noodles, hot!",
     "vi": "Cho cháu một tô phở nóng!"
    },
    {
     "en": "A glass of juice — thanks a lot!",
     "vi": "Một ly nước ép — cảm ơn nhiều!"
    },
    {
     "en": "Is it spicy? Just a bit!",
     "vi": "Có cay không? Chỉ hơi cay thôi!"
    },
    {
     "en": "Delicious, delicious — I love it!",
     "vi": "Ngon quá, ngon quá — mình thích lắm!"
    },
    {
     "en": "Can we have the bill, please?",
     "vi": "Cho tụi cháu xin hóa đơn ạ!"
    },
    {
     "en": "Here you are — come back soon, please!",
     "vi": "Của quý khách đây — lần sau lại đến nhé!"
    }
   ]
  },
  "say": [
   {
    "en": "What would you like?",
    "vi": "Quý khách muốn dùng gì?"
   },
   {
    "en": "I'd like a bowl of noodles, please.",
    "vi": "Cho cháu một tô phở ạ."
   },
   {
    "en": "Would you like some water?",
    "vi": "Cháu có muốn uống nước không?"
   },
   {
    "en": "No, thank you.",
    "vi": "Dạ không, cảm ơn."
   }
  ],
  "scene": "Quán ăn gia đình tối thứ Bảy, Mi và Bin đi ăn cùng bố của Mi",
  "roleplay": "Bin",
  "talk": [
   {
    "who": "Waiter",
    "en": "Good evening! Here's the menu.",
    "vi": "Chào buổi tối! Thực đơn đây ạ."
   },
   {
    "who": "Dad",
    "en": "Thank you. What would you like, kids?",
    "vi": "Cảm ơn anh. Các con muốn ăn gì?"
   },
   {
    "who": "Mi",
    "en": "I'd like a bowl of chicken noodles, please.",
    "vi": "Con muốn một tô phở gà ạ."
   },
   {
    "who": "Bin",
    "en": "Is the beef soup spicy?",
    "vi": "Súp bò có cay không ạ?"
   },
   {
    "who": "Waiter",
    "en": "Yes, it's a little spicy.",
    "vi": "Có, hơi cay một chút."
   },
   {
    "who": "Bin",
    "en": "Then I'd like fried rice, please.",
    "vi": "Vậy cho cháu cơm chiên ạ."
   },
   {
    "who": "Waiter",
    "en": "Would you like something to drink?",
    "vi": "Các cháu có muốn uống gì không?"
   },
   {
    "who": "Mi",
    "en": "Two glasses of orange juice, please.",
    "vi": "Cho hai ly nước cam ạ."
   },
   {
    "who": "Waiter",
    "en": "Sure! Enjoy your meal!",
    "vi": "Vâng! Chúc quý khách ngon miệng!"
   }
  ],
  "story": {
   "title": "The Wrong Food",
   "titleVi": "Mang nhầm món",
   "pages": [
    {
     "who": "Bin",
     "en": "On Sunday, Bin's family goes to a restaurant.",
     "vi": "Chủ Nhật, gia đình Bin đi nhà hàng."
    },
    {
     "who": "Bin",
     "en": "Bin orders a bowl of beef noodles and a glass of milk.",
     "vi": "Bin gọi một tô phở bò và một ly sữa."
    },
    {
     "who": "Pip",
     "en": "But the waiter brings fish soup and orange juice!",
     "vi": "Nhưng anh phục vụ lại mang súp cá và nước cam!"
    },
    {
     "who": "Bin",
     "en": "“Excuse me, this isn't my food,” Bin says politely.",
     "vi": "“Xin lỗi anh, đây không phải món của cháu,” Bin lịch sự nói."
    },
    {
     "who": "Pip",
     "en": "The waiter says sorry and brings the right food.",
     "vi": "Anh phục vụ xin lỗi và mang đúng món."
    },
    {
     "who": "Bin",
     "en": "The noodles are delicious. Bin says, “Thank you!”",
     "vi": "Phở rất ngon. Bin nói: “Cảm ơn anh!”"
    }
   ],
   "questions": [
    {
     "q": "What does Bin order?",
     "vi": "Bin gọi món gì?",
     "a": "A bowl of beef noodles and a glass of milk."
    },
    {
     "q": "What does the waiter bring first?",
     "vi": "Lúc đầu anh phục vụ mang món gì?",
     "a": "Fish soup and orange juice."
    },
    {
     "q": "True or False: Bin is angry and shouts.",
     "vi": "Đúng hay sai: Bin tức giận và la lên.",
     "a": "False. He speaks politely."
    }
   ]
  },
  "quiz": [
   {
    "q": "What would you like? — ___",
    "options": [
     "I'd like rice, please.",
     "I like rice.",
     "Yes, I would."
    ],
    "answer": 0
   },
   {
    "q": "a ___ of orange juice",
    "options": [
     "glass",
     "bowl",
     "plate"
    ],
    "answer": 0
   },
   {
    "q": "Would you like some chili? (bé không ăn được cay) — ___",
    "options": [
     "No, thank you.",
     "Yes, please."
    ],
    "answer": 0
   },
   {
    "q": "At the end of the meal, we ask for the ___.",
    "options": [
     "bill",
     "menu",
     "waiter"
    ],
    "answer": 0
   }
  ],
  "write": "Viết cách gọi bữa trưa của bạn: I'd like a bowl of ___ and a glass of ___, please. My favorite food is ___ because it's ___.",
  "badge": {
   "name": "Polite Diner",
   "vi": "Thực khách lịch sự"
  },
  "parent": {
   "learned": "menu, waiter, order, a bowl of, a glass of, spicy, delicious, bill",
   "patterns": [
    "What would you like?",
    "I'd like a bowl of noodles, please.",
    "Would you like some water? — No, thank you."
   ],
   "tips": [
    "Khi đi ăn, cho bé tự gọi món và nói “please”, “thank you”.",
    "Chơi nhà hàng ở nhà với thực đơn bé tự vẽ.",
    "Dạy bé lịch sự nói “Excuse me” khi cần gọi phục vụ."
   ]
  }
 },
 {
  "code": "L3-U05",
  "words": [
   {
    "id": "l3u05_turn_left",
    "en": "turn left",
    "vi": "rẽ trái",
    "img": "u05_1"
   },
   {
    "id": "l3u05_turn_right",
    "en": "turn right",
    "vi": "rẽ phải",
    "img": "u05_2"
   },
   {
    "id": "l3u05_go_straight",
    "en": "go straight",
    "vi": "đi thẳng",
    "img": "u05_3"
   },
   {
    "id": "l3u05_corner",
    "en": "corner",
    "vi": "góc phố",
    "img": "u05_4"
   },
   {
    "id": "l3u05_traffic_lights",
    "en": "traffic lights",
    "vi": "đèn giao thông",
    "img": "u05_5"
   },
   {
    "id": "l3u05_opposite",
    "en": "opposite",
    "vi": "đối diện",
    "img": "u05_6"
   },
   {
    "id": "l3u05_between",
    "en": "between",
    "vi": "ở giữa",
    "img": "u05_7"
   },
   {
    "id": "l3u05_post_office",
    "en": "post office",
    "vi": "bưu điện",
    "img": "u05_8"
   }
  ],
  "chant": {
   "title": "Which Way? Song",
   "lines": [
    {
     "en": "Excuse me, please, where's the zoo?",
     "vi": "Xin lỗi, sở thú ở đâu ạ?"
    },
    {
     "en": "Go straight ahead — I'll show you!",
     "vi": "Đi thẳng phía trước — mình chỉ cho!"
    },
    {
     "en": "Turn left at the traffic lights,",
     "vi": "Rẽ trái ở chỗ đèn giao thông,"
    },
    {
     "en": "Turn right at the corner — that's right!",
     "vi": "Rẽ phải ở góc phố — đúng rồi!"
    },
    {
     "en": "It's opposite the post office, see?",
     "vi": "Nó ở đối diện bưu điện, thấy chưa?"
    },
    {
     "en": "Between the bank and the bakery!",
     "vi": "Giữa ngân hàng và tiệm bánh!"
    }
   ]
  },
  "say": [
   {
    "en": "Excuse me, where's the post office?",
    "vi": "Xin lỗi, bưu điện ở đâu ạ?"
   },
   {
    "en": "Go straight and turn left at the traffic lights.",
    "vi": "Đi thẳng rồi rẽ trái ở đèn giao thông."
   },
   {
    "en": "It's opposite the park.",
    "vi": "Nó ở đối diện công viên."
   }
  ],
  "scene": "Trên phố, một du khách hỏi đường Mi và Bin",
  "roleplay": "Mi",
  "talk": [
   {
    "who": "Tourist",
    "en": "Excuse me. How can I get to the museum?",
    "vi": "Xin lỗi. Làm sao để đến bảo tàng vậy?"
   },
   {
    "who": "Mi",
    "en": "Go straight and turn right at the traffic lights.",
    "vi": "Cô đi thẳng rồi rẽ phải ở đèn giao thông ạ."
   },
   {
    "who": "Tourist",
    "en": "Turn right at the traffic lights. OK.",
    "vi": "Rẽ phải ở đèn giao thông. Được rồi."
   },
   {
    "who": "Bin",
    "en": "Then go past the post office.",
    "vi": "Sau đó đi qua bưu điện."
   },
   {
    "who": "Tourist",
    "en": "Is the museum near the post office?",
    "vi": "Bảo tàng có gần bưu điện không?"
   },
   {
    "who": "Mi",
    "en": "Yes. It's on the corner, opposite the park.",
    "vi": "Có ạ. Nó ở góc phố, đối diện công viên."
   },
   {
    "who": "Tourist",
    "en": "Thank you very much! You're very helpful.",
    "vi": "Cảm ơn các cháu nhiều! Các cháu giỏi quá."
   },
   {
    "who": "Bin",
    "en": "You're welcome! Have a nice day!",
    "vi": "Không có gì ạ! Chúc cô một ngày vui!"
   }
  ],
  "story": {
   "title": "Pip Delivers a Letter",
   "titleVi": "Pip đi đưa thư",
   "pages": [
    {
     "who": "Grandma",
     "en": "Grandma gives Pip a letter for Mi's teacher.",
     "vi": "Bà đưa Pip một lá thư gửi cô giáo của Mi."
    },
    {
     "who": "Pip",
     "en": "Pip flies straight along Hoa Sen Street.",
     "vi": "Pip bay thẳng dọc phố Hoa Sen."
    },
    {
     "who": "Pip",
     "en": "At the traffic lights, he turns left.",
     "vi": "Đến đèn giao thông, Pip rẽ trái."
    },
    {
     "who": "Pip",
     "en": "He sees the post office on the corner.",
     "vi": "Pip thấy bưu điện ở góc phố."
    },
    {
     "who": "Pip",
     "en": "The school is opposite the post office.",
     "vi": "Trường học ở đối diện bưu điện."
    },
    {
     "who": "Pip",
     "en": "It's between a bakery and a park.",
     "vi": "Trường nằm giữa tiệm bánh và công viên."
    },
    {
     "who": "Pip",
     "en": "Pip gives the letter to Miss Hoa. “Thank you, Pip!”",
     "vi": "Pip đưa thư cho cô Hoa. “Cảm ơn Pip!”"
    }
   ],
   "questions": [
    {
     "q": "Where does Pip turn left?",
     "vi": "Pip rẽ trái ở đâu?",
     "a": "At the traffic lights."
    },
    {
     "q": "What is opposite the post office?",
     "vi": "Cái gì ở đối diện bưu điện?",
     "a": "The school."
    },
    {
     "q": "True or False: The school is between a bank and a zoo.",
     "vi": "Đúng hay sai: Trường học ở giữa ngân hàng và sở thú.",
     "a": "False. It's between a bakery and a park."
    }
   ]
  },
  "quiz": [
   {
    "q": "➡️ (mũi tên rẽ phải) ___",
    "options": [
     "turn right",
     "turn left",
     "go straight"
    ],
    "answer": 0
   },
   {
    "q": "The bakery is ___ the bank and the school.",
    "options": [
     "between",
     "opposite",
     "on"
    ],
    "answer": 0
   },
   {
    "q": "Excuse me, ___ is the post office?",
    "options": [
     "where",
     "what",
     "who"
    ],
    "answer": 0
   },
   {
    "q": "Stop! The traffic light is ___.",
    "options": [
     "red",
     "green"
    ],
    "answer": 0
   }
  ],
  "write": "Viết chỉ đường từ trường về nhà bạn: Go straight. Turn ___ at the ___. My house is ___ the ___.",
  "badge": {
   "name": "Map Master",
   "vi": "Bậc thầy bản đồ"
  },
  "parent": {
   "learned": "turn left, turn right, go straight, corner, traffic lights, opposite, between, post office",
   "patterns": [
    "Excuse me, where's the post office?",
    "Go straight and turn left at the traffic lights.",
    "It's opposite the park."
   ],
   "tips": [
    "Cùng bé vẽ bản đồ đường từ nhà đến trường và chú thích bằng tiếng Anh.",
    "Khi đi đường, để bé chỉ đường: “Turn left here!”",
    "Dạy bé quy tắc qua đường: nhìn trái, nhìn phải, đi theo đèn xanh."
   ]
  }
 },
 {
  "code": "L3-U06",
  "words": [
   {
    "id": "l3u06_headache",
    "en": "headache",
    "vi": "đau đầu",
    "img": "u06_1"
   },
   {
    "id": "l3u06_toothache",
    "en": "toothache",
    "vi": "đau răng",
    "img": "u06_2"
   },
   {
    "id": "l3u06_stomachache",
    "en": "stomachache",
    "vi": "đau bụng",
    "img": "u06_3"
   },
   {
    "id": "l3u06_cold",
    "en": "cold",
    "vi": "cảm lạnh",
    "img": "u06_4"
   },
   {
    "id": "l3u06_fever",
    "en": "fever",
    "vi": "sốt",
    "img": "u06_5"
   },
   {
    "id": "l3u06_cough",
    "en": "cough",
    "vi": "ho",
    "img": "u06_6"
   },
   {
    "id": "l3u06_medicine",
    "en": "medicine",
    "vi": "thuốc",
    "img": "u06_7"
   },
   {
    "id": "l3u06_rest",
    "en": "rest",
    "vi": "nghỉ ngơi",
    "img": "u06_8"
   }
  ],
  "chant": {
   "title": "Healthy Me Song",
   "lines": [
    {
     "en": "What's the matter? You look sad.",
     "vi": "Bạn bị sao vậy? Trông bạn buồn quá."
    },
    {
     "en": "I have a toothache — it's really bad!",
     "vi": "Mình bị đau răng — đau lắm!"
    },
    {
     "en": "You should brush your teeth twice a day,",
     "vi": "Bạn nên đánh răng hai lần mỗi ngày,"
    },
    {
     "en": "And see the dentist right away!",
     "vi": "Và đi khám nha sĩ ngay nhé!"
    },
    {
     "en": "I have a cold and a cough, too,",
     "vi": "Mình bị cảm và ho nữa,"
    },
    {
     "en": "You should rest — that's good for you!",
     "vi": "Bạn nên nghỉ ngơi — tốt cho bạn đó!"
    },
    {
     "en": "You shouldn't eat too much candy,",
     "vi": "Bạn không nên ăn quá nhiều kẹo,"
    },
    {
     "en": "Stay healthy, happy — fine and dandy!",
     "vi": "Khỏe mạnh, vui vẻ — thật tuyệt vời!"
    }
   ]
  },
  "say": [
   {
    "en": "What's the matter?",
    "vi": "Bạn bị sao vậy?"
   },
   {
    "en": "I have a headache.",
    "vi": "Mình bị đau đầu."
   },
   {
    "en": "You should see a doctor.",
    "vi": "Bạn nên đi khám bác sĩ."
   },
   {
    "en": "You shouldn't eat too much candy.",
    "vi": "Bạn không nên ăn quá nhiều kẹo."
   }
  ],
  "scene": "Phòng y tế của trường, Bin thấy không khỏe",
  "roleplay": "Bin",
  "talk": [
   {
    "who": "Nurse",
    "en": "Hello, Bin. What's the matter?",
    "vi": "Chào Bin. Em bị sao thế?"
   },
   {
    "who": "Bin",
    "en": "I have a headache and a cough.",
    "vi": "Em bị đau đầu và ho ạ."
   },
   {
    "who": "Nurse",
    "en": "Let me check. Oh, you have a fever, too.",
    "vi": "Để cô xem nào. Ồ, em bị sốt nữa."
   },
   {
    "who": "Bin",
    "en": "What should I do?",
    "vi": "Em nên làm gì ạ?"
   },
   {
    "who": "Nurse",
    "en": "You should go home and rest. Drink lots of warm water.",
    "vi": "Em nên về nhà nghỉ ngơi. Uống nhiều nước ấm nhé."
   },
   {
    "who": "Bin",
    "en": "Should I take some medicine?",
    "vi": "Em có nên uống thuốc không ạ?"
   },
   {
    "who": "Nurse",
    "en": "Ask your mom first. She'll take you to the doctor.",
    "vi": "Hỏi mẹ em trước nhé. Mẹ sẽ đưa em đi khám."
   },
   {
    "who": "Mi",
    "en": "Get well soon, Bin!",
    "vi": "Mau khỏe nhé Bin!"
   }
  ],
  "story": {
   "title": "Too Much Candy",
   "titleVi": "Quá nhiều kẹo",
   "pages": [
    {
     "who": "Mi",
     "en": "Mi loves candy and ice cream.",
     "vi": "Mi rất thích kẹo và kem."
    },
    {
     "who": "Lan",
     "en": "At Lan's birthday party, she eats ten candies and three ice creams!",
     "vi": "Ở tiệc sinh nhật của Lan, Mi ăn mười cái kẹo và ba cây kem!"
    },
    {
     "who": "Mi",
     "en": "At night, Mi has a stomachache and a toothache.",
     "vi": "Tối đó, Mi bị đau bụng và đau răng."
    },
    {
     "who": "Mom",
     "en": "Mom says, “You shouldn't eat so many sweets.”",
     "vi": "Mẹ nói: “Con không nên ăn nhiều đồ ngọt như vậy.”"
    },
    {
     "who": "Mi",
     "en": "The next day, Mi goes to the dentist.",
     "vi": "Hôm sau, Mi đi khám nha sĩ."
    },
    {
     "who": "Pip",
     "en": "Now she brushes her teeth twice a day and eats more fruit.",
     "vi": "Bây giờ Mi đánh răng hai lần mỗi ngày và ăn nhiều trái cây hơn."
    }
   ],
   "questions": [
    {
     "q": "What does Mi eat at the party?",
     "vi": "Mi ăn gì ở bữa tiệc?",
     "a": "Ten candies and three ice creams."
    },
    {
     "q": "What's the matter with Mi at night?",
     "vi": "Tối đó Mi bị sao?",
     "a": "She has a stomachache and a toothache."
    },
    {
     "q": "True or False: Now Mi brushes her teeth once a day.",
     "vi": "Đúng hay sai: Bây giờ Mi đánh răng một lần mỗi ngày.",
     "a": "False. Twice a day."
    }
   ]
  },
  "quiz": [
   {
    "q": "I have a ___. (hình bạn ôm má vì đau răng)",
    "options": [
     "toothache",
     "headache",
     "fever"
    ],
    "answer": 0
   },
   {
    "q": "I have a cold. — You ___ rest.",
    "options": [
     "should",
     "shouldn't"
    ],
    "answer": 0
   },
   {
    "q": "You ___ eat too much candy.",
    "options": [
     "shouldn't",
     "should"
    ],
    "answer": 0
   },
   {
    "q": "What's the matter? — ___",
    "options": [
     "I have a cough.",
     "I'm nine.",
     "It's on the corner."
    ],
    "answer": 0
   }
  ],
  "write": "Viết lời khuyên cho một người bạn: My friend has a ___. He / She should ___. He / She shouldn't ___.",
  "badge": {
   "name": "Healthy Hero",
   "vi": "Người hùng sức khỏe"
  },
  "parent": {
   "learned": "headache, toothache, stomachache, cold, fever, cough, medicine, rest",
   "patterns": [
    "What's the matter? — I have a headache.",
    "You should see a doctor.",
    "You shouldn't eat too much candy."
   ],
   "tips": [
    "Dạy bé nói rõ khi không khỏe: “I have a headache.”",
    "Nhắc bé: chỉ uống thuốc khi người lớn hoặc bác sĩ cho phép.",
    "Cùng bé giữ thói quen rửa tay, đánh răng hai lần mỗi ngày và ngủ đúng giờ."
   ]
  }
 },
 {
  "code": "L3-U07",
  "words": [
   {
    "id": "l3u07_make_the_bed",
    "en": "make the bed",
    "vi": "dọn giường",
    "img": "u07_1"
   },
   {
    "id": "l3u07_wash_the_dishes",
    "en": "wash the dishes",
    "vi": "rửa bát",
    "img": "u07_2"
   },
   {
    "id": "l3u07_sweep_the_floor",
    "en": "sweep the floor",
    "vi": "quét nhà",
    "img": "u07_3"
   },
   {
    "id": "l3u07_water_the_plants",
    "en": "water the plants",
    "vi": "tưới cây",
    "img": "u07_4"
   },
   {
    "id": "l3u07_take_out_the_trash",
    "en": "take out the trash",
    "vi": "đổ rác",
    "img": "u07_5"
   },
   {
    "id": "l3u07_fold_the_clothes",
    "en": "fold the clothes",
    "vi": "gấp quần áo",
    "img": "u07_6"
   },
   {
    "id": "l3u07_always",
    "en": "always",
    "vi": "luôn luôn",
    "img": "u07_7"
   },
   {
    "id": "l3u07_never",
    "en": "never",
    "vi": "không bao giờ",
    "img": "u07_8"
   }
  ],
  "chant": {
   "title": "Helping Hands Song",
   "lines": [
    {
     "en": "Every morning, what do I do?",
     "vi": "Mỗi sáng, mình làm gì nhỉ?"
    },
    {
     "en": "I always make my bed — do you?",
     "vi": "Mình luôn dọn giường — còn bạn?"
    },
    {
     "en": "I usually water the plants with care,",
     "vi": "Mình thường tưới cây thật cẩn thận,"
    },
    {
     "en": "I sometimes sweep the floor — here and there!",
     "vi": "Thỉnh thoảng mình quét nhà — chỗ này chỗ kia!"
    },
    {
     "en": "I wash the dishes after dinner,",
     "vi": "Mình rửa bát sau bữa tối,"
    },
    {
     "en": "Helping at home makes me a winner!",
     "vi": "Giúp việc nhà làm mình thành người chiến thắng!"
    },
    {
     "en": "I never leave my clothes on the floor,",
     "vi": "Mình không bao giờ để quần áo trên sàn,"
    },
    {
     "en": "I fold them neatly — and do some more!",
     "vi": "Mình gấp gọn gàng — và làm thêm nữa!"
    }
   ]
  },
  "say": [
   {
    "en": "How often do you wash the dishes?",
    "vi": "Bạn có thường rửa bát không?"
   },
   {
    "en": "I sometimes wash the dishes.",
    "vi": "Thỉnh thoảng mình rửa bát."
   },
   {
    "en": "I never leave my toys on the floor.",
    "vi": "Mình không bao giờ để đồ chơi trên sàn."
   }
  ],
  "scene": "Sáng Chủ Nhật, cả nhà Mi dọn dẹp, Bin sang rủ đi chơi",
  "roleplay": "Mi",
  "talk": [
   {
    "who": "Bin",
    "en": "Hi, Mi! Can you come out and play?",
    "vi": "Chào Mi! Bạn ra chơi được không?"
   },
   {
    "who": "Mi",
    "en": "Not now. I'm helping my mom.",
    "vi": "Chưa được. Mình đang giúp mẹ."
   },
   {
    "who": "Bin",
    "en": "Do you help at home every day?",
    "vi": "Ngày nào bạn cũng giúp việc nhà à?"
   },
   {
    "who": "Mi",
    "en": "Yes. I always make my bed and fold my clothes.",
    "vi": "Ừ. Mình luôn dọn giường và gấp quần áo."
   },
   {
    "who": "Bin",
    "en": "How often do you wash the dishes?",
    "vi": "Bạn có thường rửa bát không?"
   },
   {
    "who": "Mi",
    "en": "I usually wash the dishes after dinner. And you?",
    "vi": "Mình thường rửa bát sau bữa tối. Còn bạn?"
   },
   {
    "who": "Bin",
    "en": "I sometimes take out the trash. I never cook!",
    "vi": "Thỉnh thoảng mình đổ rác. Mình chưa bao giờ nấu ăn!"
   },
   {
    "who": "Mi",
    "en": "Let's sweep the floor together. Then we can play!",
    "vi": "Cùng quét nhà nhé. Xong rồi mình chơi!"
   }
  ],
  "story": {
   "title": "Pip's Messy Nest",
   "titleVi": "Cái tổ bừa bộn của Pip",
   "pages": [
    {
     "who": "Pip",
     "en": "Pip's nest is always messy.",
     "vi": "Tổ của Pip lúc nào cũng bừa bộn."
    },
    {
     "who": "Pip",
     "en": "He never folds his tiny clothes, and he never sweeps.",
     "vi": "Pip không bao giờ gấp quần áo tí hon, cũng không bao giờ quét dọn."
    },
    {
     "who": "Pip",
     "en": "One day, he can't find his favorite hat!",
     "vi": "Một ngày, Pip không tìm thấy chiếc mũ yêu thích!"
    },
    {
     "who": "Mi",
     "en": "Mi and Bin come to help.",
     "vi": "Mi và Bin đến giúp."
    },
    {
     "who": "Pip",
     "en": "They sweep the floor, fold the clothes and take out the trash.",
     "vi": "Các bạn quét sàn, gấp quần áo và đổ rác."
    },
    {
     "who": "Pip",
     "en": "Under a pile of leaves, they find the hat!",
     "vi": "Dưới đống lá, các bạn tìm thấy chiếc mũ!"
    },
    {
     "who": "Pip",
     "en": "Now Pip always keeps his nest clean.",
     "vi": "Giờ Pip luôn giữ tổ sạch sẽ."
    }
   ],
   "questions": [
    {
     "q": "Why can't Pip find his hat?",
     "vi": "Vì sao Pip không tìm thấy mũ?",
     "a": "Because his nest is very messy."
    },
    {
     "q": "Who comes to help Pip?",
     "vi": "Ai đến giúp Pip?",
     "a": "Mi and Bin."
    },
    {
     "q": "True or False: Now Pip's nest is always messy.",
     "vi": "Đúng hay sai: Bây giờ tổ của Pip lúc nào cũng bừa bộn.",
     "a": "False. Now he always keeps it clean."
    }
   ]
  },
  "quiz": [
   {
    "q": "I ___ make my bed. (7/7 ngày)",
    "options": [
     "always",
     "sometimes",
     "never"
    ],
    "answer": 0
   },
   {
    "q": "I ___ cook. (0/7 ngày)",
    "options": [
     "never",
     "usually",
     "always"
    ],
    "answer": 0
   },
   {
    "q": "How often do you water the plants? — ___",
    "options": [
     "I usually water them.",
     "It's on Monday.",
     "Yes, I can."
    ],
    "answer": 0
   },
   {
    "q": "After dinner, there are dirty plates. I ___.",
    "options": [
     "wash the dishes",
     "make the bed",
     "fold the clothes"
    ],
    "answer": 0
   }
  ],
  "write": "Viết về việc nhà của bạn: I always ___. I usually ___. I sometimes ___. I never ___.",
  "badge": {
   "name": "Super Helper",
   "vi": "Siêu trợ thủ"
  },
  "parent": {
   "learned": "make the bed, wash the dishes, sweep the floor, water the plants, take out the trash, fold the clothes, always, never",
   "patterns": [
    "How often do you wash the dishes?",
    "I sometimes wash the dishes.",
    "I never leave my toys on the floor."
   ],
   "tips": [
    "Giao cho bé 1–2 việc nhà cố định mỗi ngày.",
    "Dùng bảng dán sticker để bé theo dõi việc nhà trong tuần.",
    "Khen nỗ lực của bé và cùng làm việc nhà với bé."
   ]
  }
 },
 {
  "code": "L3-U08",
  "words": [
   {
    "id": "l3u08_tiger",
    "en": "tiger",
    "vi": "con hổ",
    "img": "u08_1"
   },
   {
    "id": "l3u08_crocodile",
    "en": "crocodile",
    "vi": "cá sấu",
    "img": "u08_2"
   },
   {
    "id": "l3u08_kangaroo",
    "en": "kangaroo",
    "vi": "chuột túi",
    "img": "u08_3"
   },
   {
    "id": "l3u08_penguin",
    "en": "penguin",
    "vi": "chim cánh cụt",
    "img": "u08_4"
   },
   {
    "id": "l3u08_camel",
    "en": "camel",
    "vi": "lạc đà",
    "img": "u08_5"
   },
   {
    "id": "l3u08_bear",
    "en": "bear",
    "vi": "con gấu",
    "img": "u08_6"
   },
   {
    "id": "l3u08_owl",
    "en": "owl",
    "vi": "cú mèo",
    "img": "u08_7"
   },
   {
    "id": "l3u08_than",
    "en": "than",
    "vi": "hơn (dùng khi so sánh)",
    "img": "u08_8"
   }
  ],
  "chant": {
   "title": "Wild And Wonderful Song",
   "lines": [
    {
     "en": "A tiger is fast, a turtle is slow,",
     "vi": "Hổ thì nhanh, rùa thì chậm,"
    },
    {
     "en": "A tiger is faster — off we go!",
     "vi": "Hổ nhanh hơn — chạy thôi nào!"
    },
    {
     "en": "A bear is big, a penguin is small,",
     "vi": "Gấu thì to, chim cánh cụt thì nhỏ,"
    },
    {
     "en": "A camel is taller — look how tall!",
     "vi": "Lạc đà cao hơn — nhìn cao chưa kìa!"
    },
    {
     "en": "A kangaroo jumps higher than me,",
     "vi": "Chuột túi nhảy cao hơn cả mình,"
    },
    {
     "en": "An owl stays up later than you and me!",
     "vi": "Cú mèo thức khuya hơn cả bạn và mình!"
    },
    {
     "en": "Bigger, smaller, faster, slower,",
     "vi": "To hơn, nhỏ hơn, nhanh hơn, chậm hơn,"
    },
    {
     "en": "Wild animals — let's go explore!",
     "vi": "Động vật hoang dã — cùng khám phá nào!"
    }
   ]
  },
  "say": [
   {
    "en": "A tiger is faster than a crocodile.",
    "vi": "Hổ nhanh hơn cá sấu."
   },
   {
    "en": "Which is bigger, a camel or a kangaroo?",
    "vi": "Con nào to hơn, lạc đà hay chuột túi?"
   },
   {
    "en": "A camel is bigger.",
    "vi": "Lạc đà to hơn."
   }
  ],
  "scene": "Giờ học, cả lớp xem phim tài liệu về động vật hoang dã",
  "roleplay": "Mi",
  "talk": [
   {
    "who": "Tom",
    "en": "Look! A kangaroo! There are lots in Australia.",
    "vi": "Nhìn kìa! Chuột túi! Ở Úc có rất nhiều."
   },
   {
    "who": "Mi",
    "en": "Which is bigger, a kangaroo or a penguin?",
    "vi": "Con nào to hơn, chuột túi hay chim cánh cụt?"
   },
   {
    "who": "Tom",
    "en": "A kangaroo is bigger. And it's faster, too.",
    "vi": "Chuột túi to hơn. Và nó cũng nhanh hơn."
   },
   {
    "who": "Bin",
    "en": "Is a crocodile faster than a tiger?",
    "vi": "Cá sấu có nhanh hơn hổ không?"
   },
   {
    "who": "Tom",
    "en": "No, it isn't. Tigers are much faster.",
    "vi": "Không. Hổ nhanh hơn nhiều."
   },
   {
    "who": "Mi",
    "en": "But crocodiles are bigger, right?",
    "vi": "Nhưng cá sấu to hơn, phải không?"
   },
   {
    "who": "Tom",
    "en": "Yes. Big crocodiles are heavier than tigers.",
    "vi": "Đúng. Cá sấu lớn nặng hơn hổ."
   },
   {
    "who": "Bin",
    "en": "Wow! I like owls. They're small but clever.",
    "vi": "Ồ! Mình thích cú mèo. Chúng nhỏ nhưng thông minh."
   }
  ],
  "story": {
   "title": "The Race in the Forest",
   "titleVi": "Cuộc đua trong rừng",
   "pages": [
    {
     "who": "Pip",
     "en": "One day, the animals have a race in the forest.",
     "vi": "Một ngày, các con vật tổ chức một cuộc đua trong rừng."
    },
    {
     "who": "Pip",
     "en": "The tiger is faster than everyone, but he stops to sleep.",
     "vi": "Hổ nhanh hơn tất cả, nhưng nó dừng lại để ngủ."
    },
    {
     "who": "Pip",
     "en": "The kangaroo jumps higher, but she gets tired.",
     "vi": "Chuột túi nhảy cao hơn, nhưng cô ấy bị mệt."
    },
    {
     "who": "Pip",
     "en": "The camel is slower, but he never stops.",
     "vi": "Lạc đà chậm hơn, nhưng nó không bao giờ dừng lại."
    },
    {
     "who": "Pip",
     "en": "Step by step, the camel walks to the finish line.",
     "vi": "Từng bước một, lạc đà đi về đích."
    },
    {
     "who": "Pip",
     "en": "The camel wins! The owl says, “Slow and steady wins the race!”",
     "vi": "Lạc đà thắng! Cú mèo nói: “Chậm mà chắc sẽ thắng cuộc đua!”"
    }
   ],
   "questions": [
    {
     "q": "Who is faster than everyone?",
     "vi": "Ai nhanh hơn tất cả?",
     "a": "The tiger."
    },
    {
     "q": "Why does the kangaroo stop?",
     "vi": "Vì sao chuột túi dừng lại?",
     "a": "Because she gets tired."
    },
    {
     "q": "True or False: The tiger wins the race.",
     "vi": "Đúng hay sai: Hổ thắng cuộc đua.",
     "a": "False. The camel wins."
    }
   ]
  },
  "quiz": [
   {
    "q": "A bear is ___ than an owl.",
    "options": [
     "bigger",
     "big",
     "biggest"
    ],
    "answer": 0
   },
   {
    "q": "A penguin is ___ than a tiger.",
    "options": [
     "slower",
     "faster"
    ],
    "answer": 0
   },
   {
    "q": "Which is taller, a camel or a penguin? — ___",
    "options": [
     "A camel is taller.",
     "A penguin is taller."
    ],
    "answer": 0
   },
   {
    "q": "This animal lives in Australia and jumps very well. It's a ___.",
    "options": [
     "kangaroo",
     "bear",
     "owl"
    ],
    "answer": 0
   }
  ],
  "write": "So sánh các con vật: A ___ is bigger than a ___. A ___ is faster than a ___. My favorite wild animal is ___.",
  "badge": {
   "name": "Wildlife Explorer",
   "vi": "Nhà thám hiểm hoang dã"
  },
  "parent": {
   "learned": "tiger, crocodile, kangaroo, penguin, camel, bear, owl, than",
   "patterns": [
    "A tiger is faster than a crocodile.",
    "Which is bigger, a camel or a kangaroo?",
    "A camel is bigger."
   ],
   "tips": [
    "Xem phim tài liệu về động vật cùng bé và đặt câu so sánh.",
    "So sánh đồ vật trong nhà: “My bag is bigger than your bag.”",
    "Nói với bé vì sao cần bảo vệ động vật hoang dã."
   ]
  }
 },
 {
  "code": "L3-U09",
  "words": [
   {
    "id": "l3u09_yesterday",
    "en": "yesterday",
    "vi": "hôm qua",
    "img": "u09_1"
   },
   {
    "id": "l3u09_last_weekend",
    "en": "last weekend",
    "vi": "cuối tuần trước",
    "img": "u09_2"
   },
   {
    "id": "l3u09_visited",
    "en": "visited",
    "vi": "đã thăm",
    "img": "u09_3"
   },
   {
    "id": "l3u09_played",
    "en": "played",
    "vi": "đã chơi",
    "img": "u09_4"
   },
   {
    "id": "l3u09_watched",
    "en": "watched",
    "vi": "đã xem",
    "img": "u09_5"
   },
   {
    "id": "l3u09_cleaned",
    "en": "cleaned",
    "vi": "đã dọn dẹp",
    "img": "u09_6"
   },
   {
    "id": "l3u09_cooked",
    "en": "cooked",
    "vi": "đã nấu",
    "img": "u09_7"
   },
   {
    "id": "l3u09_stayed_at_home",
    "en": "stayed at home",
    "vi": "đã ở nhà",
    "img": "u09_8"
   }
  ],
  "chant": {
   "title": "Last Weekend Song",
   "lines": [
    {
     "en": "What did you do last weekend? Tell me, friend!",
     "vi": "Cuối tuần trước bạn đã làm gì? Kể mình nghe!"
    },
    {
     "en": "I visited my grandma — the fun didn't end!",
     "vi": "Mình đã đi thăm bà — vui không dứt!"
    },
    {
     "en": "I played football in the park,",
     "vi": "Mình đã chơi bóng đá ở công viên,"
    },
    {
     "en": "I watched a movie after dark!",
     "vi": "Mình đã xem phim khi trời tối!"
    },
    {
     "en": "I cleaned my room — it looks like new!",
     "vi": "Mình đã dọn phòng — trông như mới!"
    },
    {
     "en": "Did you stay at home? No, I didn't. How about you?",
     "vi": "Bạn có ở nhà không? Không. Còn bạn thì sao?"
    },
    {
     "en": "Last weekend was great — hip, hip, hooray!",
     "vi": "Cuối tuần trước thật tuyệt — hoan hô!"
    }
   ]
  },
  "say": [
   {
    "en": "What did you do last weekend?",
    "vi": "Cuối tuần trước bạn đã làm gì?"
   },
   {
    "en": "I visited my grandparents.",
    "vi": "Mình đã đi thăm ông bà."
   },
   {
    "en": "Did you watch TV?",
    "vi": "Bạn có xem TV không?"
   },
   {
    "en": "No, I didn't.",
    "vi": "Không."
   }
  ],
  "scene": "Sáng thứ Hai ở lớp, các bạn kể chuyện cuối tuần",
  "roleplay": "Bin",
  "talk": [
   {
    "who": "Mi",
    "en": "Hi, Bin! What did you do last weekend?",
    "vi": "Chào Bin! Cuối tuần trước bạn đã làm gì?"
   },
   {
    "who": "Bin",
    "en": "I stayed at home. I cleaned my room.",
    "vi": "Mình đã ở nhà. Mình đã dọn phòng."
   },
   {
    "who": "Mi",
    "en": "Did you play football?",
    "vi": "Bạn có chơi bóng đá không?"
   },
   {
    "who": "Bin",
    "en": "Yes, I did. I played with Tom on Sunday. And you?",
    "vi": "Có. Chủ Nhật mình đã chơi với Tom. Còn bạn?"
   },
   {
    "who": "Mi",
    "en": "I visited my grandma in Bac Ninh.",
    "vi": "Mình đã đi thăm bà ở Bắc Ninh."
   },
   {
    "who": "Bin",
    "en": "Did you cook with her?",
    "vi": "Bạn có nấu ăn cùng bà không?"
   },
   {
    "who": "Mi",
    "en": "Yes! We cooked banh xeo. It was delicious!",
    "vi": "Có! Bà cháu mình đã làm bánh xèo. Ngon lắm!"
   },
   {
    "who": "Tom",
    "en": "I watched a football match on TV!",
    "vi": "Mình đã xem một trận bóng đá trên TV!"
   }
  ],
  "story": {
   "title": "Pip's Diary",
   "titleVi": "Nhật ký của Pip",
   "pages": [
    {
     "who": "Mi",
     "en": "Last Saturday, I visited Mi's school.",
     "vi": "Thứ Bảy vừa rồi, mình đã đến thăm trường của Mi."
    },
    {
     "who": "Pip",
     "en": "I watched the children in the art club.",
     "vi": "Mình đã ngắm các bạn ở câu lạc bộ vẽ."
    },
    {
     "who": "Bin",
     "en": "In the afternoon, I played hide-and-seek with Bin.",
     "vi": "Buổi chiều, mình đã chơi trốn tìm với Bin."
    },
    {
     "who": "Pip",
     "en": "On Sunday, it rained, so I stayed at home.",
     "vi": "Chủ Nhật, trời mưa, nên mình đã ở nhà."
    },
    {
     "who": "Pip",
     "en": "I cleaned my nest and listened to music.",
     "vi": "Mình đã dọn tổ và nghe nhạc."
    },
    {
     "who": "Pip",
     "en": "It was a happy weekend!",
     "vi": "Đó là một cuối tuần vui vẻ!"
    }
   ],
   "questions": [
    {
     "q": "What did Pip do on Saturday afternoon?",
     "vi": "Chiều thứ Bảy Pip đã làm gì?",
     "a": "He played hide-and-seek with Bin."
    },
    {
     "q": "Why did Pip stay at home on Sunday?",
     "vi": "Vì sao Chủ Nhật Pip ở nhà?",
     "a": "Because it rained."
    },
    {
     "q": "True or False: Pip cleaned his nest on Saturday.",
     "vi": "Đúng hay sai: Pip dọn tổ vào thứ Bảy.",
     "a": "False. He cleaned it on Sunday."
    }
   ]
  },
  "quiz": [
   {
    "q": "Yesterday, I ___ football.",
    "options": [
     "played",
     "play",
     "playing"
    ],
    "answer": 0
   },
   {
    "q": "Did you visit your grandma? — ___",
    "options": [
     "Yes, I did.",
     "Yes, I do.",
     "Yes, I am."
    ],
    "answer": 0
   },
   {
    "q": "watch → ___",
    "options": [
     "watched",
     "watchd",
     "watching"
    ],
    "answer": 0
   },
   {
    "q": "Last weekend, she ___ at home.",
    "options": [
     "stayed",
     "stays",
     "stay"
    ],
    "answer": 0
   }
  ],
  "write": "Viết nhật ký cuối tuần: Last weekend, I ___. On Sunday, I ___. It was ___ (fun / great / boring).",
  "badge": {
   "name": "Story Teller",
   "vi": "Người kể chuyện"
  },
  "parent": {
   "learned": "yesterday, last weekend, visited, played, watched, cleaned, cooked, stayed at home",
   "patterns": [
    "What did you do last weekend?",
    "I visited my grandparents.",
    "Did you watch TV? — No, I didn't."
   ],
   "tips": [
    "Mỗi sáng thứ Hai, hỏi bé: “What did you do last weekend?”",
    "Khuyến khích bé viết nhật ký 2–3 câu mỗi tuần.",
    "Cùng bé xem ảnh gia đình và kể lại bằng thì quá khứ."
   ]
  }
 },
 {
  "code": "L3-U10",
  "words": [
   {
    "id": "l3u10_holiday",
    "en": "holiday",
    "vi": "kỳ nghỉ",
    "img": "u10_1"
   },
   {
    "id": "l3u10_went",
    "en": "went",
    "vi": "đã đi (go)",
    "img": "u10_2"
   },
   {
    "id": "l3u10_saw",
    "en": "saw",
    "vi": "đã thấy (see)",
    "img": "u10_3"
   },
   {
    "id": "l3u10_ate",
    "en": "ate",
    "vi": "đã ăn (eat)",
    "img": "u10_4"
   },
   {
    "id": "l3u10_swam",
    "en": "swam",
    "vi": "đã bơi (swim)",
    "img": "u10_5"
   },
   {
    "id": "l3u10_bought",
    "en": "bought",
    "vi": "đã mua (buy)",
    "img": "u10_6"
   },
   {
    "id": "l3u10_took_photos",
    "en": "took photos",
    "vi": "đã chụp ảnh (take)",
    "img": "u10_7"
   },
   {
    "id": "l3u10_souvenir",
    "en": "souvenir",
    "vi": "quà lưu niệm",
    "img": "u10_8"
   }
  ],
  "chant": {
   "title": "Holiday Memories Song",
   "lines": [
    {
     "en": "Where did you go on holiday? Tell me, please!",
     "vi": "Kỳ nghỉ bạn đã đi đâu? Kể mình nghe với!"
    },
    {
     "en": "I went to the beach — I felt the breeze!",
     "vi": "Mình đã đi biển — mình cảm nhận làn gió!"
    },
    {
     "en": "I swam in the sea and saw a boat,",
     "vi": "Mình đã bơi ở biển và thấy một con thuyền,"
    },
    {
     "en": "I bought a hat and a red raincoat!",
     "vi": "Mình đã mua một chiếc mũ và một chiếc áo mưa đỏ!"
    },
    {
     "en": "I ate seafood, yummy and sweet,",
     "vi": "Mình đã ăn hải sản, ngon và ngọt,"
    },
    {
     "en": "I took photos — what a treat!",
     "vi": "Mình đã chụp ảnh — tuyệt quá!"
    },
    {
     "en": "How was your holiday? It was great!",
     "vi": "Kỳ nghỉ của bạn thế nào? Tuyệt vời!"
    },
    {
     "en": "Next year? I just can't wait!",
     "vi": "Năm sau ư? Mình nóng lòng lắm rồi!"
    }
   ]
  },
  "say": [
   {
    "en": "Where did you go on holiday?",
    "vi": "Kỳ nghỉ bạn đã đi đâu?"
   },
   {
    "en": "I went to Da Lat with my family.",
    "vi": "Mình đã đi Đà Lạt cùng gia đình."
   },
   {
    "en": "How was your holiday?",
    "vi": "Kỳ nghỉ của bạn thế nào?"
   },
   {
    "en": "It was great!",
    "vi": "Tuyệt vời!"
   }
  ],
  "scene": "Ngày đầu năm học mới, các bạn khoe ảnh kỳ nghỉ hè",
  "roleplay": "Mi",
  "talk": [
   {
    "who": "Tom",
    "en": "Where did you go in the summer, Mi?",
    "vi": "Mi ơi, hè vừa rồi bạn đã đi đâu?"
   },
   {
    "who": "Mi",
    "en": "I went to Da Lat with my family.",
    "vi": "Mình đã đi Đà Lạt cùng gia đình."
   },
   {
    "who": "Tom",
    "en": "What did you see there?",
    "vi": "Bạn đã thấy gì ở đó?"
   },
   {
    "who": "Mi",
    "en": "I saw lots of flowers and a big lake.",
    "vi": "Mình đã thấy rất nhiều hoa và một hồ nước lớn."
   },
   {
    "who": "Bin",
    "en": "I went to Nha Trang. I swam every day!",
    "vi": "Mình đã đi Nha Trang. Ngày nào mình cũng bơi!"
   },
   {
    "who": "Tom",
    "en": "Did you take photos?",
    "vi": "Bạn có chụp ảnh không?"
   },
   {
    "who": "Bin",
    "en": "Yes, I did. Look! I took this photo of a turtle.",
    "vi": "Có. Nhìn này! Mình đã chụp con rùa này."
   },
   {
    "who": "Mi",
    "en": "Wow! How was your holiday, Tom?",
    "vi": "Ồ! Kỳ nghỉ của bạn thế nào, Tom?"
   },
   {
    "who": "Tom",
    "en": "It was great! I went back to Australia and saw my cousins.",
    "vi": "Tuyệt lắm! Mình đã về Úc và gặp các anh chị em họ."
   }
  ],
  "story": {
   "title": "A Postcard from Phu Quoc",
   "titleVi": "Tấm bưu thiếp từ Phú Quốc",
   "pages": [
    {
     "who": "Grandma",
     "en": "Dear Grandma,",
     "vi": "Bà kính yêu,"
    },
    {
     "who": "Pip",
     "en": "Last week, we went to Phu Quoc Island.",
     "vi": "Tuần trước, cả nhà cháu đã đi đảo Phú Quốc."
    },
    {
     "who": "Pip",
     "en": "We stayed in a small hotel near the beach.",
     "vi": "Cả nhà ở một khách sạn nhỏ gần biển."
    },
    {
     "who": "Pip",
     "en": "Every morning, I swam in the warm, blue sea.",
     "vi": "Mỗi sáng, cháu bơi ở vùng biển xanh ấm áp."
    },
    {
     "who": "Pip",
     "en": "I saw a starfish and ate grilled squid.",
     "vi": "Cháu đã thấy một con sao biển và ăn mực nướng."
    },
    {
     "who": "Pip",
     "en": "I bought a pearl necklace for you as a souvenir!",
     "vi": "Cháu đã mua một chiếc vòng ngọc trai làm quà cho bà!"
    },
    {
     "who": "Mi",
     "en": "Love, Mi",
     "vi": "Thương bà, Mi"
    }
   ],
   "questions": [
    {
     "q": "Where did Mi's family go?",
     "vi": "Gia đình Mi đã đi đâu?",
     "a": "They went to Phu Quoc Island."
    },
    {
     "q": "What did Mi eat?",
     "vi": "Mi đã ăn gì?",
     "a": "She ate grilled squid."
    },
    {
     "q": "True or False: Mi bought a hat for Grandma.",
     "vi": "Đúng hay sai: Mi đã mua một chiếc mũ cho bà.",
     "a": "False. She bought a pearl necklace."
    }
   ]
  },
  "quiz": [
   {
    "q": "Last summer, I ___ to Hue.",
    "options": [
     "went",
     "go",
     "goed"
    ],
    "answer": 0
   },
   {
    "q": "see → ___",
    "options": [
     "saw",
     "seed",
     "sees"
    ],
    "answer": 0
   },
   {
    "q": "How was your holiday? — ___",
    "options": [
     "It was great!",
     "I go to the beach.",
     "Yes, I do."
    ],
    "answer": 0
   },
   {
    "q": "I ___ a souvenir for my mom.",
    "options": [
     "bought",
     "buyed",
     "buy"
    ],
    "answer": 0
   }
  ],
  "write": "Viết một tấm bưu thiếp: Last summer, I went to ___. I saw ___. I ate ___. It was ___!",
  "badge": {
   "name": "Travel Star",
   "vi": "Ngôi sao du lịch"
  },
  "parent": {
   "learned": "holiday, went, saw, ate, swam, bought, took photos, souvenir",
   "patterns": [
    "Where did you go on holiday?",
    "I went to Da Lat with my family.",
    "How was your holiday? — It was great!"
   ],
   "tips": [
    "Cùng bé làm album ảnh kỳ nghỉ có chú thích bằng tiếng Anh.",
    "Dán bảng động từ bất quy tắc (go-went, see-saw…) lên tường phòng bé.",
    "Hỏi bé “Where did you go? What did you see?” sau mỗi chuyến đi chơi."
   ]
  }
 },
 {
  "code": "L3-U11",
  "words": [
   {
    "id": "l3u11_festival",
    "en": "festival",
    "vi": "lễ hội",
    "img": "u11_1"
   },
   {
    "id": "l3u11_celebrate",
    "en": "celebrate",
    "vi": "ăn mừng, kỷ niệm",
    "img": "u11_2"
   },
   {
    "id": "l3u11_mid_autumn_festival",
    "en": "Mid-Autumn Festival",
    "vi": "Tết Trung thu",
    "img": "u11_3"
   },
   {
    "id": "l3u11_lantern",
    "en": "lantern",
    "vi": "đèn lồng",
    "img": "u11_4"
   },
   {
    "id": "l3u11_mooncake",
    "en": "mooncake",
    "vi": "bánh trung thu",
    "img": "u11_5"
   },
   {
    "id": "l3u11_full_moon",
    "en": "full moon",
    "vi": "trăng tròn",
    "img": "u11_6"
   },
   {
    "id": "l3u11_christmas",
    "en": "Christmas",
    "vi": "Giáng sinh",
    "img": "u11_7"
   },
   {
    "id": "l3u11_teachers_day",
    "en": "Teachers' Day",
    "vi": "Ngày Nhà giáo",
    "img": "u11_8"
   }
  ],
  "chant": {
   "title": "Festivals Song",
   "lines": [
    {
     "en": "Festivals, festivals, all year long,",
     "vi": "Lễ hội ơi, quanh năm suốt tháng,"
    },
    {
     "en": "Let's celebrate with a happy song!",
     "vi": "Cùng ăn mừng bằng một bài hát vui!"
    },
    {
     "en": "Mid-Autumn comes with the full moon bright,",
     "vi": "Trung thu đến cùng ánh trăng tròn sáng,"
    },
    {
     "en": "Lanterns and mooncakes on a lovely night!",
     "vi": "Đèn lồng và bánh trung thu trong đêm tuyệt đẹp!"
    },
    {
     "en": "Teachers' Day is in November,",
     "vi": "Ngày Nhà giáo vào tháng Mười Một,"
    },
    {
     "en": "Flowers for teachers — always remember!",
     "vi": "Tặng hoa cho thầy cô — luôn nhớ nhé!"
    },
    {
     "en": "Christmas comes in cold December,",
     "vi": "Giáng sinh đến vào tháng Mười Hai lạnh giá,"
    },
    {
     "en": "Lights and presents — what a wonder!",
     "vi": "Ánh đèn và quà tặng — thật kỳ diệu!"
    }
   ]
  },
  "say": [
   {
    "en": "When is Children's Day?",
    "vi": "Ngày Thiếu nhi là khi nào?"
   },
   {
    "en": "It's on June 1st.",
    "vi": "Ngày 1 tháng 6."
   },
   {
    "en": "What do people do at Mid-Autumn Festival?",
    "vi": "Mọi người làm gì vào dịp Trung thu?"
   },
   {
    "en": "They eat mooncakes and carry lanterns.",
    "vi": "Họ ăn bánh trung thu và rước đèn lồng."
   }
  ],
  "scene": "Tom hỏi Mi và Bin về Tết Trung thu",
  "roleplay": "Mi",
  "talk": [
   {
    "who": "Tom",
    "en": "Mi, what's that lantern for?",
    "vi": "Mi ơi, chiếc đèn lồng đó để làm gì vậy?"
   },
   {
    "who": "Mi",
    "en": "It's for Mid-Autumn Festival. It's next week!",
    "vi": "Để đón Trung thu. Tuần sau là Trung thu rồi!"
   },
   {
    "who": "Tom",
    "en": "What do people do at Mid-Autumn Festival?",
    "vi": "Mọi người làm gì vào dịp Trung thu?"
   },
   {
    "who": "Mi",
    "en": "Children carry lanterns and watch the full moon.",
    "vi": "Trẻ em rước đèn và ngắm trăng tròn."
   },
   {
    "who": "Bin",
    "en": "We eat mooncakes, too. They're delicious!",
    "vi": "Tụi mình còn ăn bánh trung thu nữa. Ngon lắm!"
   },
   {
    "who": "Tom",
    "en": "Cool! In Australia, we don't celebrate it.",
    "vi": "Hay quá! Ở Úc, tụi mình không đón lễ này."
   },
   {
    "who": "Mi",
    "en": "What's your favorite festival, Tom?",
    "vi": "Lễ hội yêu thích của bạn là gì, Tom?"
   },
   {
    "who": "Tom",
    "en": "Christmas! It's in summer in Australia!",
    "vi": "Giáng sinh! Ở Úc, Giáng sinh vào mùa hè đấy!"
   }
  ],
  "story": {
   "title": "Lanterns for Everyone",
   "titleVi": "Đèn lồng cho mọi người",
   "pages": [
    {
     "who": "Pip",
     "en": "It's Mid-Autumn Festival tonight, and the moon is full.",
     "vi": "Tối nay là Trung thu, trăng tròn vành vạnh."
    },
    {
     "who": "Mi",
     "en": "Mi has a star lantern, and Bin has a fish lantern.",
     "vi": "Mi có chiếc đèn ông sao, Bin có chiếc đèn cá chép."
    },
    {
     "who": "Tom",
     "en": "But Tom doesn't have a lantern. He feels a little sad.",
     "vi": "Nhưng Tom không có đèn lồng. Bạn ấy hơi buồn."
    },
    {
     "who": "Grandma",
     "en": "Grandma shows the children how to make a paper lantern.",
     "vi": "Bà chỉ các bạn cách làm đèn lồng bằng giấy."
    },
    {
     "who": "Tom",
     "en": "Tom makes a beautiful moon lantern.",
     "vi": "Tom làm một chiếc đèn hình mặt trăng thật đẹp."
    },
    {
     "who": "Pip",
     "en": "Together, they carry their lanterns and sing under the full moon.",
     "vi": "Cả nhóm cùng rước đèn và hát dưới ánh trăng tròn."
    }
   ],
   "questions": [
    {
     "q": "What kind of lantern does Mi have?",
     "vi": "Mi có loại đèn lồng nào?",
     "a": "A star lantern."
    },
    {
     "q": "Who shows the children how to make a lantern?",
     "vi": "Ai chỉ các bạn cách làm đèn lồng?",
     "a": "Grandma."
    },
    {
     "q": "True or False: Tom buys a lantern at the shop.",
     "vi": "Đúng hay sai: Tom mua đèn lồng ở cửa hàng.",
     "a": "False. He makes a paper lantern."
    }
   ]
  },
  "quiz": [
   {
    "q": "Teachers' Day is in ___.",
    "options": [
     "November",
     "June",
     "December"
    ],
    "answer": 0
   },
   {
    "q": "Children's Day is ___ June 1st.",
    "options": [
     "on",
     "in",
     "at"
    ],
    "answer": 0
   },
   {
    "q": "At Mid-Autumn Festival, children eat ___.",
    "options": [
     "mooncakes",
     "banh chung",
     "birthday cake"
    ],
    "answer": 0
   },
   {
    "q": "Christmas is on December ___.",
    "options": [
     "25th",
     "1st",
     "20th"
    ],
    "answer": 0
   }
  ],
  "write": "Viết về lễ hội yêu thích: My favorite festival is ___. It's in ___. People ___. I ___.",
  "badge": {
   "name": "Festival Star",
   "vi": "Ngôi sao lễ hội"
  },
  "parent": {
   "learned": "festival, celebrate, Mid-Autumn Festival, lantern, mooncake, full moon, Christmas, Teachers' Day",
   "patterns": [
    "When is Children's Day? — It's on June 1st.",
    "What do people do at Mid-Autumn Festival?",
    "They eat mooncakes and carry lanterns."
   ],
   "tips": [
    "Dịp Trung thu, cùng bé làm đèn lồng giấy và nói các bước bằng tiếng Anh.",
    "Làm lịch lễ hội cả năm cùng bé.",
    "Kể cho bé về lễ hội của các nước khác và so sánh với Việt Nam."
   ]
  }
 },
 {
  "code": "L3-U12",
  "words": [
   {
    "id": "l3u12_polite",
    "en": "polite",
    "vi": "lịch sự",
    "img": "u12_1"
   },
   {
    "id": "l3u12_excuse_me",
    "en": "excuse me",
    "vi": "xin phép, xin lỗi (khi làm phiền)",
    "img": "u12_2"
   },
   {
    "id": "l3u12_sorry",
    "en": "sorry",
    "vi": "xin lỗi (khi có lỗi)",
    "img": "u12_3"
   },
   {
    "id": "l3u12_share",
    "en": "share",
    "vi": "chia sẻ",
    "img": "u12_4"
   },
   {
    "id": "l3u12_borrow",
    "en": "borrow",
    "vi": "mượn",
    "img": "u12_5"
   },
   {
    "id": "l3u12_take_turns",
    "en": "take turns",
    "vi": "lần lượt",
    "img": "u12_6"
   },
   {
    "id": "l3u12_line_up",
    "en": "line up",
    "vi": "xếp hàng",
    "img": "u12_7"
   },
   {
    "id": "l3u12_kind",
    "en": "kind",
    "vi": "tử tế",
    "img": "u12_8"
   }
  ],
  "chant": {
   "title": "Magic Manners Song",
   "lines": [
    {
     "en": "Could you help me, please? Sure, I can!",
     "vi": "Bạn giúp mình được không? Được chứ!"
    },
    {
     "en": "May I borrow your pen? Here, my friend!",
     "vi": "Mình mượn bút được không? Đây, bạn ơi!"
    },
    {
     "en": "Excuse me, please — can I come through?",
     "vi": "Xin lỗi — cho mình đi qua nhé?"
    },
    {
     "en": "I'm sorry! — That's OK, don't feel blue!",
     "vi": "Mình xin lỗi! — Không sao đâu, đừng buồn nhé!"
    },
    {
     "en": "Line up, take turns, share your toys,",
     "vi": "Xếp hàng, lần lượt, chia sẻ đồ chơi,"
    },
    {
     "en": "Kind words for all the girls and boys!",
     "vi": "Lời tử tế cho tất cả các bạn gái và bạn trai!"
    },
    {
     "en": "Please and thank you, every day,",
     "vi": "Làm ơn và cảm ơn, mỗi ngày,"
    },
    {
     "en": "Polite and kind — that's the way!",
     "vi": "Lịch sự và tử tế — đó là cách hay nhất!"
    }
   ]
  },
  "say": [
   {
    "en": "Could you help me, please?",
    "vi": "Bạn giúp mình được không?"
   },
   {
    "en": "Sure!",
    "vi": "Được chứ!"
   },
   {
    "en": "May I borrow your eraser?",
    "vi": "Mình mượn cục tẩy của bạn được không?"
   },
   {
    "en": "I'm sorry.",
    "vi": "Mình xin lỗi."
   },
   {
    "en": "That's OK.",
    "vi": "Không sao đâu."
   }
  ],
  "scene": "Trong thư viện trường",
  "roleplay": "Mi",
  "talk": [
   {
    "who": "Mi",
    "en": "Excuse me, Miss Hoa. Could you help me, please?",
    "vi": "Thưa cô Hoa, cô giúp em được không ạ?"
   },
   {
    "who": "Miss Hoa",
    "en": "Sure, Mi. What do you need?",
    "vi": "Được chứ Mi. Em cần gì?"
   },
   {
    "who": "Mi",
    "en": "I'm looking for a book about animals.",
    "vi": "Em đang tìm một cuốn sách về động vật."
   },
   {
    "who": "Miss Hoa",
    "en": "It's on the top shelf. Here you are.",
    "vi": "Nó ở kệ trên cùng. Của em đây."
   },
   {
    "who": "Mi",
    "en": "Thank you very much!",
    "vi": "Em cảm ơn cô nhiều ạ!"
   },
   {
    "who": "Bin",
    "en": "Oops! I'm sorry, Mi. I didn't see you.",
    "vi": "Ối! Mình xin lỗi Mi. Mình không thấy bạn."
   },
   {
    "who": "Mi",
    "en": "That's OK. But please don't run in the library.",
    "vi": "Không sao. Nhưng đừng chạy trong thư viện nhé."
   },
   {
    "who": "Bin",
    "en": "You're right. May I read with you?",
    "vi": "Bạn nói đúng. Mình đọc cùng bạn được không?"
   },
   {
    "who": "Mi",
    "en": "Sure! Let's share this book.",
    "vi": "Được chứ! Cùng xem chung cuốn này nhé."
   }
  ],
  "story": {
   "title": "The Magic Words",
   "titleVi": "Những từ diệu kỳ",
   "pages": [
    {
     "who": "Pip",
     "en": "Pip wants a cookie from the jar.",
     "vi": "Pip muốn lấy một chiếc bánh quy trong hũ."
    },
    {
     "who": "Pip",
     "en": "He shouts, “Give me a cookie!” Nobody moves.",
     "vi": "Pip hét lên: “Đưa bánh quy đây!” Không ai nhúc nhích."
    },
    {
     "who": "Mi",
     "en": "Mi whispers, “Try the magic words, Pip.”",
     "vi": "Mi thì thầm: “Thử nói những từ diệu kỳ xem Pip.”"
    },
    {
     "who": "Pip",
     "en": "Pip smiles and says, “Could I have a cookie, please?”",
     "vi": "Pip mỉm cười và nói: “Cho cháu xin một chiếc bánh quy được không ạ?”"
    },
    {
     "who": "Grandma",
     "en": "Grandma gives him a cookie. Pip says, “Thank you very much!”",
     "vi": "Bà đưa Pip một chiếc bánh. Pip nói: “Cháu cảm ơn bà nhiều ạ!”"
    },
    {
     "who": "Pip",
     "en": "Then Pip shares the cookie with Mi and Bin.",
     "vi": "Rồi Pip chia bánh cho Mi và Bin."
    }
   ],
   "questions": [
    {
     "q": "What does Pip want?",
     "vi": "Pip muốn gì?",
     "a": "A cookie."
    },
    {
     "q": "What are the magic words?",
     "vi": "Những từ diệu kỳ là gì?",
     "a": "“Please” and “thank you”."
    },
    {
     "q": "True or False: Pip eats the whole cookie alone.",
     "vi": "Đúng hay sai: Pip ăn hết chiếc bánh một mình.",
     "a": "False. He shares it with Mi and Bin."
    }
   ]
  },
  "quiz": [
   {
    "q": "You bump into a friend. You say: ___",
    "options": [
     "I'm sorry.",
     "Thank you.",
     "Here you are."
    ],
    "answer": 0
   },
   {
    "q": "___ you help me, please?",
    "options": [
     "Could",
     "Do",
     "Are"
    ],
    "answer": 0
   },
   {
    "q": "I'm sorry. — ___",
    "options": [
     "That's OK.",
     "You're welcome.",
     "Yes, please."
    ],
    "answer": 0
   },
   {
    "q": "You want to walk past someone. You say: ___",
    "options": [
     "Excuse me.",
     "Goodbye.",
     "Happy birthday."
    ],
    "answer": 0
   }
  ],
  "write": "Viết 3 câu lịch sự bạn dùng ở trường: Could you ___, please? May I ___? Thank you for ___.",
  "badge": {
   "name": "Kindness Champion",
   "vi": "Nhà vô địch tử tế"
  },
  "parent": {
   "learned": "polite, excuse me, sorry, share, borrow, take turns, line up, kind",
   "patterns": [
    "Could you help me, please? — Sure!",
    "May I borrow your eraser?",
    "I'm sorry. — That's OK."
   ],
   "tips": [
    "Ba mẹ làm gương nói “please”, “thank you”, “sorry” với bé mỗi ngày.",
    "Khen ngay khi bé cư xử lịch sự.",
    "Đóng vai các tình huống: mượn đồ, xin lỗi, nhờ giúp đỡ."
   ]
  }
 },
 {
  "code": "L3-U13",
  "words": [
   {
    "id": "l3u13_planet",
    "en": "planet",
    "vi": "hành tinh",
    "img": "u13_1"
   },
   {
    "id": "l3u13_recycle",
    "en": "recycle",
    "vi": "tái chế",
    "img": "u13_2"
   },
   {
    "id": "l3u13_plastic",
    "en": "plastic",
    "vi": "nhựa",
    "img": "u13_3"
   },
   {
    "id": "l3u13_trash",
    "en": "trash",
    "vi": "rác",
    "img": "u13_4"
   },
   {
    "id": "l3u13_save_water",
    "en": "save water",
    "vi": "tiết kiệm nước",
    "img": "u13_5"
   },
   {
    "id": "l3u13_turn_off",
    "en": "turn off",
    "vi": "tắt",
    "img": "u13_6"
   },
   {
    "id": "l3u13_plant_trees",
    "en": "plant trees",
    "vi": "trồng cây",
    "img": "u13_7"
   },
   {
    "id": "l3u13_reuse",
    "en": "reuse",
    "vi": "tái sử dụng",
    "img": "u13_8"
   }
  ],
  "chant": {
   "title": "Green Planet Song",
   "lines": [
    {
     "en": "Our planet is green, our planet is blue,",
     "vi": "Hành tinh của chúng ta xanh lá, xanh dương,"
    },
    {
     "en": "It needs our help — me and you!",
     "vi": "Nó cần sự giúp đỡ — của bạn và mình!"
    },
    {
     "en": "We must recycle paper and cans,",
     "vi": "Chúng ta phải tái chế giấy và lon,"
    },
    {
     "en": "Pick up trash with helping hands!",
     "vi": "Nhặt rác bằng đôi tay giúp đỡ!"
    },
    {
     "en": "We mustn't waste water — turn off the tap!",
     "vi": "Chúng ta không được lãng phí nước — khóa vòi lại!"
    },
    {
     "en": "Turn off the lights — clap, clap, clap!",
     "vi": "Tắt đèn đi — vỗ tay, vỗ tay!"
    },
    {
     "en": "Plant a tree and reuse your bag,",
     "vi": "Trồng một cái cây và dùng lại túi,"
    },
    {
     "en": "Save our planet — wave the flag!",
     "vi": "Hãy cứu hành tinh — vẫy cờ lên nào!"
    }
   ]
  },
  "say": [
   {
    "en": "We must recycle plastic bottles.",
    "vi": "Chúng ta phải tái chế chai nhựa."
   },
   {
    "en": "We mustn't drop trash on the street.",
    "vi": "Chúng ta không được xả rác ra đường."
   },
   {
    "en": "Turn off the lights, please.",
    "vi": "Làm ơn tắt đèn đi."
   }
  ],
  "scene": "Ngày “Green Day” ở trường, cả lớp nhặt rác ở công viên",
  "roleplay": "Bin",
  "talk": [
   {
    "who": "Miss Hoa",
    "en": "Today is Green Day. Let's clean the park!",
    "vi": "Hôm nay là Ngày Xanh. Cùng dọn dẹp công viên nào!"
   },
   {
    "who": "Bin",
    "en": "Look! There's so much plastic here.",
    "vi": "Nhìn kìa! Ở đây nhiều rác nhựa quá."
   },
   {
    "who": "Mi",
    "en": "We must pick it up. It's bad for animals.",
    "vi": "Chúng ta phải nhặt lên. Nó có hại cho động vật."
   },
   {
    "who": "Tom",
    "en": "Where should I put these bottles?",
    "vi": "Mình nên bỏ những chai này vào đâu?"
   },
   {
    "who": "Miss Hoa",
    "en": "Put them in the recycling bin, please.",
    "vi": "Bỏ chúng vào thùng tái chế nhé."
   },
   {
    "who": "Bin",
    "en": "And this paper bag? Can we reuse it?",
    "vi": "Còn túi giấy này? Mình dùng lại được không?"
   },
   {
    "who": "Miss Hoa",
    "en": "Yes! We mustn't waste anything.",
    "vi": "Được! Chúng ta không được lãng phí thứ gì."
   },
   {
    "who": "Mi",
    "en": "Let's plant a tree here, too!",
    "vi": "Mình trồng thêm một cái cây ở đây nữa nhé!"
   }
  ],
  "story": {
   "title": "The Sad Turtle",
   "titleVi": "Chú rùa buồn",
   "pages": [
    {
     "who": "Bin",
     "en": "One morning, Bin and his dad go to the beach.",
     "vi": "Một buổi sáng, Bin và bố đi ra biển."
    },
    {
     "who": "Pip",
     "en": "They see a turtle with a plastic bag on its head.",
     "vi": "Hai bố con thấy một con rùa có chiếc túi nhựa trên đầu."
    },
    {
     "who": "Dad",
     "en": "Dad gently takes the bag off, and the turtle swims away.",
     "vi": "Bố nhẹ nhàng gỡ chiếc túi ra, và con rùa bơi đi."
    },
    {
     "who": "Bin",
     "en": "Bin says, “We must keep the beach clean.”",
     "vi": "Bin nói: “Chúng ta phải giữ bãi biển sạch.”"
    },
    {
     "who": "Bin",
     "en": "The next weekend, Bin and his friends clean the beach.",
     "vi": "Cuối tuần sau, Bin và các bạn dọn rác trên bãi biển."
    },
    {
     "who": "Pip",
     "en": "They collect fifty plastic bottles and recycle them.",
     "vi": "Các bạn nhặt được năm mươi chai nhựa và mang đi tái chế."
    }
   ],
   "questions": [
    {
     "q": "What is on the turtle's head?",
     "vi": "Trên đầu con rùa có gì?",
     "a": "A plastic bag."
    },
    {
     "q": "What do Bin and his friends do the next weekend?",
     "vi": "Cuối tuần sau Bin và các bạn làm gì?",
     "a": "They clean the beach."
    },
    {
     "q": "True or False: They collect fifteen bottles.",
     "vi": "Đúng hay sai: Các bạn nhặt được mười lăm chai.",
     "a": "False. They collect fifty bottles."
    }
   ]
  },
  "quiz": [
   {
    "q": "We ___ drop trash in the river.",
    "options": [
     "mustn't",
     "must"
    ],
    "answer": 0
   },
   {
    "q": "We ___ save water.",
    "options": [
     "must",
     "mustn't"
    ],
    "answer": 0
   },
   {
    "q": "Put the plastic bottle in the ___.",
    "options": [
     "recycling bin",
     "sea",
     "river"
    ],
    "answer": 0
   },
   {
    "q": "When you leave the room, ___ the lights.",
    "options": [
     "turn off",
     "turn on",
     "plant"
    ],
    "answer": 0
   }
  ],
  "write": "Viết 3 việc bạn làm để bảo vệ Trái Đất: I must ___. I mustn't ___. I always ___.",
  "badge": {
   "name": "Planet Hero",
   "vi": "Người hùng hành tinh"
  },
  "parent": {
   "learned": "planet, recycle, plastic, trash, save water, turn off, plant trees, reuse",
   "patterns": [
    "We must recycle plastic bottles.",
    "We mustn't drop trash on the street.",
    "Turn off the lights, please."
   ],
   "tips": [
    "Cùng bé phân loại rác ở nhà.",
    "Mang túi vải khi đi chợ, siêu thị.",
    "Nhắc bé tắt đèn, khóa vòi nước khi không dùng."
   ]
  }
 },
 {
  "code": "L3-U14",
  "words": [
   {
    "id": "l3u14_space",
    "en": "space",
    "vi": "vũ trụ",
    "img": "u14_1"
   },
   {
    "id": "l3u14_astronaut",
    "en": "astronaut",
    "vi": "phi hành gia",
    "img": "u14_2"
   },
   {
    "id": "l3u14_rocket",
    "en": "rocket",
    "vi": "tên lửa",
    "img": "u14_3"
   },
   {
    "id": "l3u14_earth",
    "en": "Earth",
    "vi": "Trái Đất",
    "img": "u14_4"
   },
   {
    "id": "l3u14_mars",
    "en": "Mars",
    "vi": "sao Hỏa",
    "img": "u14_5"
   },
   {
    "id": "l3u14_star",
    "en": "star",
    "vi": "ngôi sao",
    "img": "u14_6"
   },
   {
    "id": "l3u14_telescope",
    "en": "telescope",
    "vi": "kính thiên văn",
    "img": "u14_7"
   },
   {
    "id": "l3u14_float",
    "en": "float",
    "vi": "lơ lửng",
    "img": "u14_8"
   }
  ],
  "chant": {
   "title": "Space Explorers Song",
   "lines": [
    {
     "en": "Three, two, one — blast off! Let's go!",
     "vi": "Ba, hai, một — phóng! Đi thôi!"
    },
    {
     "en": "Put on your helmet — we're going to fly!",
     "vi": "Đội mũ phi hành vào — chúng ta sắp bay rồi!"
    },
    {
     "en": "Up in the rocket, into the sky!",
     "vi": "Lên tên lửa, bay vào bầu trời!"
    },
    {
     "en": "Look at the Earth — so round and blue!",
     "vi": "Nhìn Trái Đất kìa — tròn và xanh quá!"
    },
    {
     "en": "The stars are twinkling — hello to you!",
     "vi": "Những vì sao lấp lánh — xin chào bạn!"
    },
    {
     "en": "We're going to land on Mars so red,",
     "vi": "Chúng ta sắp đáp xuống sao Hỏa đỏ rực,"
    },
    {
     "en": "And float like a feather over my head!",
     "vi": "Và lơ lửng như chiếc lông vũ trên đầu mình!"
    },
    {
     "en": "Space is amazing — now you know!",
     "vi": "Vũ trụ thật kỳ diệu — giờ bạn biết rồi!"
    }
   ]
  },
  "say": [
   {
    "en": "I'm going to be an astronaut.",
    "vi": "Mình sẽ trở thành phi hành gia."
   },
   {
    "en": "What are you going to do tonight?",
    "vi": "Tối nay bạn định làm gì?"
   },
   {
    "en": "We're going to watch the stars.",
    "vi": "Tụi mình sẽ ngắm sao."
   }
  ],
  "scene": "Giờ ra chơi, các bạn bàn kế hoạch cuối tuần",
  "roleplay": "Mi",
  "talk": [
   {
    "who": "Bin",
    "en": "What are you going to do this weekend, Mi?",
    "vi": "Mi ơi, cuối tuần này bạn định làm gì?"
   },
   {
    "who": "Mi",
    "en": "I'm going to visit the science museum.",
    "vi": "Mình sẽ đi bảo tàng khoa học."
   },
   {
    "who": "Bin",
    "en": "Cool! What are you going to see?",
    "vi": "Tuyệt! Bạn sẽ xem gì?"
   },
   {
    "who": "Mi",
    "en": "I'm going to see a real rocket and a space suit.",
    "vi": "Mình sẽ xem tên lửa thật và bộ đồ phi hành gia."
   },
   {
    "who": "Tom",
    "en": "Can I come with you? I love space!",
    "vi": "Mình đi cùng được không? Mình mê vũ trụ lắm!"
   },
   {
    "who": "Mi",
    "en": "Sure! Are you going to come, Bin?",
    "vi": "Được chứ! Bin có đi không?"
   },
   {
    "who": "Bin",
    "en": "Yes! And tonight I'm going to look at Mars with my telescope.",
    "vi": "Có! Và tối nay mình sẽ ngắm sao Hỏa bằng kính thiên văn."
   },
   {
    "who": "Tom",
    "en": "Wow! When I grow up, I'm going to be an astronaut!",
    "vi": "Ồ! Khi lớn lên, mình sẽ trở thành phi hành gia!"
   }
  ],
  "story": {
   "title": "Pip's Trip to the Moon",
   "titleVi": "Chuyến bay lên Mặt Trăng của Pip",
   "pages": [
    {
     "who": "Pip",
     "en": "One night, Pip has a wonderful dream.",
     "vi": "Một đêm, Pip có một giấc mơ tuyệt vời."
    },
    {
     "who": "Pip",
     "en": "He is an astronaut in a big red rocket.",
     "vi": "Pip là phi hành gia trên một chiếc tên lửa đỏ to."
    },
    {
     "who": "Pip",
     "en": "“Three, two, one — blast off!” The rocket flies into space.",
     "vi": "“Ba, hai, một — phóng!” Tên lửa bay vào vũ trụ."
    },
    {
     "who": "Pip",
     "en": "Pip floats in the rocket and looks at the blue Earth.",
     "vi": "Pip lơ lửng trong tên lửa và nhìn Trái Đất xanh."
    },
    {
     "who": "Pip",
     "en": "On the moon, he jumps very high and waves to the stars.",
     "vi": "Trên Mặt Trăng, Pip nhảy thật cao và vẫy chào các vì sao."
    },
    {
     "who": "Pip",
     "en": "Then Pip wakes up. “One day, I'm going to fly to the moon!”",
     "vi": "Rồi Pip tỉnh dậy. “Một ngày nào đó, mình sẽ bay lên Mặt Trăng!”"
    }
   ],
   "questions": [
    {
     "q": "What color is the rocket?",
     "vi": "Tên lửa màu gì?",
     "a": "It's red."
    },
    {
     "q": "What does Pip do on the moon?",
     "vi": "Pip làm gì trên Mặt Trăng?",
     "a": "He jumps very high and waves to the stars."
    },
    {
     "q": "True or False: Pip really goes to the moon.",
     "vi": "Đúng hay sai: Pip thật sự lên Mặt Trăng.",
     "a": "False. It's a dream."
    }
   ]
  },
  "quiz": [
   {
    "q": "I'm ___ to be an astronaut.",
    "options": [
     "going",
     "go",
     "goes"
    ],
    "answer": 0
   },
   {
    "q": "What ___ you going to do tonight?",
    "options": [
     "are",
     "is",
     "do"
    ],
    "answer": 0
   },
   {
    "q": "We live on ___.",
    "options": [
     "Earth",
     "Mars",
     "the moon"
    ],
    "answer": 0
   },
   {
    "q": "You look at the stars with a ___.",
    "options": [
     "telescope",
     "rocket",
     "helmet"
    ],
    "answer": 0
   }
  ],
  "write": "Viết kế hoạch cuối tuần: This weekend, I'm going to ___. I'm going to ___ with ___. It's going to be ___!",
  "badge": {
   "name": "Space Cadet",
   "vi": "Học viên vũ trụ"
  },
  "parent": {
   "learned": "space, astronaut, rocket, Earth, Mars, star, telescope, float",
   "patterns": [
    "I'm going to be an astronaut.",
    "What are you going to do tonight?",
    "We're going to watch the stars."
   ],
   "tips": [
    "Cùng bé ngắm trăng, sao vào buổi tối; tìm sao Hỏa (chấm sáng màu đỏ).",
    "Làm tên lửa bằng hộp giấy và vỏ chai cùng bé.",
    "Hỏi bé mỗi tối: “What are you going to do tomorrow?”"
   ]
  }
 },
 {
  "code": "L3-U15",
  "words": [
   {
    "id": "l3u15_camping",
    "en": "camping",
    "vi": "cắm trại",
    "img": "u15_1"
   },
   {
    "id": "l3u15_tent",
    "en": "tent",
    "vi": "cái lều",
    "img": "u15_2"
   },
   {
    "id": "l3u15_campfire",
    "en": "campfire",
    "vi": "lửa trại",
    "img": "u15_3"
   },
   {
    "id": "l3u15_flashlight",
    "en": "flashlight",
    "vi": "đèn pin",
    "img": "u15_4"
   },
   {
    "id": "l3u15_map",
    "en": "map",
    "vi": "bản đồ",
    "img": "u15_5"
   },
   {
    "id": "l3u15_backpack",
    "en": "backpack",
    "vi": "ba lô",
    "img": "u15_6"
   },
   {
    "id": "l3u15_forest",
    "en": "forest",
    "vi": "khu rừng",
    "img": "u15_7"
   },
   {
    "id": "l3u15_river",
    "en": "river",
    "vi": "con sông",
    "img": "u15_8"
   }
  ],
  "chant": {
   "title": "Campfire Song",
   "lines": [
    {
     "en": "Pack your backpack, take a map,",
     "vi": "Xếp ba lô, mang theo bản đồ,"
    },
    {
     "en": "Water, snacks and a warm cap!",
     "vi": "Nước, đồ ăn vặt và mũ ấm!"
    },
    {
     "en": "We'll put up a tent beside the river,",
     "vi": "Chúng ta sẽ dựng lều bên bờ sông,"
    },
    {
     "en": "Cool night air will make us shiver!",
     "vi": "Không khí đêm mát lạnh sẽ khiến ta run run!"
    },
    {
     "en": "Take a flashlight — it will be dark,",
     "vi": "Mang theo đèn pin — trời sẽ tối đó,"
    },
    {
     "en": "Owls will hoot and foxes bark!",
     "vi": "Cú sẽ kêu và cáo sẽ sủa!"
    },
    {
     "en": "Will it be fun? Yes, it will!",
     "vi": "Có vui không? Chắc chắn rồi!"
    },
    {
     "en": "Camping trip — up the hill!",
     "vi": "Chuyến cắm trại — lên đồi thôi!"
    }
   ]
  },
  "say": [
   {
    "en": "We'll take a tent and a flashlight.",
    "vi": "Chúng ta sẽ mang lều và đèn pin."
   },
   {
    "en": "Will it rain tomorrow?",
    "vi": "Ngày mai trời có mưa không?"
   },
   {
    "en": "No, it won't.",
    "vi": "Không đâu."
   },
   {
    "en": "I'll carry the map.",
    "vi": "Mình sẽ cầm bản đồ."
   }
  ],
  "scene": "Cả lớp chuẩn bị cho chuyến cắm trại cuối tuần",
  "roleplay": "Mi",
  "talk": [
   {
    "who": "Miss Hoa",
    "en": "Next Saturday, we'll go camping in Ba Vi Forest!",
    "vi": "Thứ Bảy tới, cả lớp sẽ đi cắm trại ở rừng Ba Vì!"
   },
   {
    "who": "Mi",
    "en": "Hooray! What will we take?",
    "vi": "Hoan hô! Chúng em sẽ mang gì ạ?"
   },
   {
    "who": "Miss Hoa",
    "en": "Take a backpack, water and a flashlight.",
    "vi": "Mang ba lô, nước và đèn pin nhé."
   },
   {
    "who": "Bin",
    "en": "Will we sleep in tents?",
    "vi": "Chúng em sẽ ngủ trong lều ạ?"
   },
   {
    "who": "Miss Hoa",
    "en": "Yes, you will. We'll have a campfire, too.",
    "vi": "Đúng vậy. Chúng ta còn đốt lửa trại nữa."
   },
   {
    "who": "Tom",
    "en": "Will it rain on Saturday?",
    "vi": "Thứ Bảy trời có mưa không ạ?"
   },
   {
    "who": "Miss Hoa",
    "en": "No, it won't. It will be sunny.",
    "vi": "Không đâu. Trời sẽ nắng."
   },
   {
    "who": "Mi",
    "en": "I'll bring my guitar. We can sing by the campfire!",
    "vi": "Em sẽ mang đàn ghi-ta. Chúng ta có thể hát bên lửa trại!"
   }
  ],
  "story": {
   "title": "Lost by the River",
   "titleVi": "Lạc bên bờ sông",
   "pages": [
    {
     "who": "Pip",
     "en": "The class goes camping in the forest.",
     "vi": "Cả lớp đi cắm trại trong rừng."
    },
    {
     "who": "Mi",
     "en": "After lunch, Mi and Bin look for pretty stones by the river.",
     "vi": "Sau bữa trưa, Mi và Bin đi tìm sỏi đẹp bên bờ sông."
    },
    {
     "who": "Pip",
     "en": "Soon, they can't see the tents. “Oh no! Where are we?”",
     "vi": "Chẳng mấy chốc, hai bạn không còn thấy lều. “Ôi không! Mình đang ở đâu?”"
    },
    {
     "who": "Bin",
     "en": "Bin takes out the map. “We'll follow the river back,” he says.",
     "vi": "Bin lấy bản đồ ra. “Chúng ta sẽ đi ngược theo dòng sông,” bạn ấy nói."
    },
    {
     "who": "Mi",
     "en": "Mi turns on her flashlight because it's getting dark.",
     "vi": "Mi bật đèn pin vì trời đang tối dần."
    },
    {
     "who": "Miss Hoa",
     "en": "Finally, they see the campfire. Miss Hoa smiles: “Welcome back!”",
     "vi": "Cuối cùng, hai bạn thấy lửa trại. Cô Hoa mỉm cười: “Chào mừng các em trở về!”"
    }
   ],
   "questions": [
    {
     "q": "What do Mi and Bin look for by the river?",
     "vi": "Mi và Bin tìm gì bên bờ sông?",
     "a": "Pretty stones."
    },
    {
     "q": "What does Bin use to find the way?",
     "vi": "Bin dùng gì để tìm đường?",
     "a": "A map."
    },
    {
     "q": "True or False: Mi turns on her flashlight because it's sunny.",
     "vi": "Đúng hay sai: Mi bật đèn pin vì trời nắng.",
     "a": "False. Because it's getting dark."
    }
   ]
  },
  "quiz": [
   {
    "q": "It ___ be sunny tomorrow.",
    "options": [
     "will",
     "is",
     "does"
    ],
    "answer": 0
   },
   {
    "q": "Will it rain? — No, it ___.",
    "options": [
     "won't",
     "will",
     "isn't"
    ],
    "answer": 0
   },
   {
    "q": "When you go camping, you sleep in a ___.",
    "options": [
     "tent",
     "backpack",
     "river"
    ],
    "answer": 0
   },
   {
    "q": "It's dark. I need a ___.",
    "options": [
     "flashlight",
     "backpack",
     "map"
    ],
    "answer": 0
   }
  ],
  "write": "Viết danh sách đồ đi cắm trại: I'll take ___. I'll need ___ because ___. It will be ___!",
  "badge": {
   "name": "Happy Camper",
   "vi": "Trại sinh vui vẻ"
  },
  "parent": {
   "learned": "camping, tent, campfire, flashlight, map, backpack, forest, river",
   "patterns": [
    "We'll take a tent and a flashlight.",
    "Will it rain tomorrow? — No, it won't.",
    "I'll carry the map."
   ],
   "tips": [
    "Tổ chức “cắm trại mini” trong nhà hoặc ngoài sân với lều và đèn pin.",
    "Dạy bé quy tắc an toàn: luôn đi cùng người lớn, không tự ý rời nhóm.",
    "Tập cho bé đọc bản đồ đơn giản của khu phố."
   ]
  }
 },
 {
  "code": "L3-U16",
  "words": [
   {
    "id": "l3u16_country",
    "en": "country",
    "vi": "đất nước",
    "img": "u16_1"
   },
   {
    "id": "l3u16_vietnam",
    "en": "Vietnam",
    "vi": "Việt Nam",
    "img": "u16_2"
   },
   {
    "id": "l3u16_japan",
    "en": "Japan",
    "vi": "Nhật Bản",
    "img": "u16_3"
   },
   {
    "id": "l3u16_australia",
    "en": "Australia",
    "vi": "nước Úc",
    "img": "u16_4"
   },
   {
    "id": "l3u16_the_usa",
    "en": "the USA",
    "vi": "nước Mỹ",
    "img": "u16_5"
   },
   {
    "id": "l3u16_the_uk",
    "en": "the UK",
    "vi": "nước Anh (Vương quốc Anh)",
    "img": "u16_6"
   },
   {
    "id": "l3u16_france",
    "en": "France",
    "vi": "nước Pháp",
    "img": "u16_7"
   },
   {
    "id": "l3u16_language",
    "en": "language",
    "vi": "ngôn ngữ",
    "img": "u16_8"
   }
  ],
  "chant": {
   "title": "One Big World Song",
   "lines": [
    {
     "en": "Around the world, here we go,",
     "vi": "Vòng quanh thế giới, đi thôi nào,"
    },
    {
     "en": "So many countries — hello, hello!",
     "vi": "Bao nhiêu đất nước — xin chào, xin chào!"
    },
    {
     "en": "I'm from Vietnam — xin chào, my friend!",
     "vi": "Mình đến từ Việt Nam — xin chào bạn nhé!"
    },
    {
     "en": "Konnichiwa from Japan — the fun won't end!",
     "vi": "Konnichiwa từ Nhật Bản — niềm vui không dứt!"
    },
    {
     "en": "G'day from Australia, bonjour from France,",
     "vi": "G'day từ nước Úc, bonjour từ nước Pháp,"
    },
    {
     "en": "Hello from the UK — let's all dance!",
     "vi": "Hello từ nước Anh — cùng nhảy nào!"
    },
    {
     "en": "Different languages, different lands,",
     "vi": "Ngôn ngữ khác nhau, đất nước khác nhau,"
    },
    {
     "en": "One big world — let's hold hands!",
     "vi": "Một thế giới rộng lớn — cùng nắm tay nhau!"
    }
   ]
  },
  "say": [
   {
    "en": "Where are you from?",
    "vi": "Bạn đến từ đâu?"
   },
   {
    "en": "I'm from Vietnam.",
    "vi": "Mình đến từ Việt Nam."
   },
   {
    "en": "She's from Japan. She's Japanese.",
    "vi": "Bạn ấy đến từ Nhật Bản. Bạn ấy là người Nhật."
   },
   {
    "en": "What language do they speak in France?",
    "vi": "Ở Pháp người ta nói tiếng gì?"
   },
   {
    "en": "French.",
    "vi": "Tiếng Pháp."
   }
  ],
  "scene": "Ngày hội văn hóa quốc tế ở trường, các bạn gặp Yuki từ Nhật Bản",
  "roleplay": "Mi",
  "talk": [
   {
    "who": "Mi",
    "en": "Hello! I'm Mi. Where are you from?",
    "vi": "Xin chào! Mình là Mi. Bạn đến từ đâu?"
   },
   {
    "who": "Yuki",
    "en": "Hi! I'm Yuki. I'm from Japan.",
    "vi": "Chào! Mình là Yuki. Mình đến từ Nhật Bản."
   },
   {
    "who": "Bin",
    "en": "Do you speak English, Yuki?",
    "vi": "Yuki có nói được tiếng Anh không?"
   },
   {
    "who": "Yuki",
    "en": "Yes, a little. And I speak Japanese, of course.",
    "vi": "Có, một chút. Và tất nhiên mình nói tiếng Nhật."
   },
   {
    "who": "Tom",
    "en": "I'm from Australia. We speak English there.",
    "vi": "Mình đến từ Úc. Ở đó người ta nói tiếng Anh."
   },
   {
    "who": "Yuki",
    "en": "Cool! What's your favorite food in Vietnam?",
    "vi": "Hay quá! Món ăn Việt Nam yêu thích của các bạn là gì?"
   },
   {
    "who": "Mi",
    "en": "Pho! You should try it. It's delicious!",
    "vi": "Phở! Bạn nên ăn thử. Ngon lắm!"
   },
   {
    "who": "Yuki",
    "en": "OK! Let's eat pho together after the festival!",
    "vi": "Được! Sau ngày hội mình cùng đi ăn phở nhé!"
   }
  ],
  "story": {
   "title": "Pen Pals",
   "titleVi": "Bạn qua thư",
   "pages": [
    {
     "who": "Mi",
     "en": "Mi has a pen pal named Emma.",
     "vi": "Mi có một người bạn qua thư tên là Emma."
    },
    {
     "who": "Pip",
     "en": "Emma is nine years old, and she's from London, the UK.",
     "vi": "Emma chín tuổi, bạn ấy đến từ London, nước Anh."
    },
    {
     "who": "Pip",
     "en": "Every month, they send emails to each other.",
     "vi": "Mỗi tháng, hai bạn gửi email cho nhau."
    },
    {
     "who": "Pip",
     "en": "Last month, Emma visited Paris and saw the Eiffel Tower.",
     "vi": "Tháng trước, Emma đã đến Paris và ngắm tháp Eiffel."
    },
    {
     "who": "Mi",
     "en": "Mi wrote about Tet and sent Emma a photo of banh chung.",
     "vi": "Mi đã viết về Tết và gửi Emma một tấm ảnh bánh chưng."
    },
    {
     "who": "Mi",
     "en": "Next summer, Emma is going to visit Vietnam. Mi will show her Ha Noi!",
     "vi": "Hè tới, Emma sẽ đến Việt Nam. Mi sẽ dẫn bạn ấy đi thăm Hà Nội!"
    }
   ],
   "questions": [
    {
     "q": "Where is Emma from?",
     "vi": "Emma đến từ đâu?",
     "a": "She's from London, the UK."
    },
    {
     "q": "What did Emma see in Paris?",
     "vi": "Emma đã ngắm gì ở Paris?",
     "a": "She saw the Eiffel Tower."
    },
    {
     "q": "True or False: Emma is going to visit Vietnam next winter.",
     "vi": "Đúng hay sai: Emma sẽ đến Việt Nam vào mùa đông tới.",
     "a": "False. Next summer."
    }
   ]
  },
  "quiz": [
   {
    "q": "I'm from Japan. I'm ___.",
    "options": [
     "Japanese",
     "Japan",
     "Japanish"
    ],
    "answer": 0
   },
   {
    "q": "Where are you from? — ___",
    "options": [
     "I'm from Vietnam.",
     "I'm nine.",
     "I like pho."
    ],
    "answer": 0
   },
   {
    "q": "In France, people speak ___.",
    "options": [
     "French",
     "France",
     "Japanese"
    ],
    "answer": 0
   },
   {
    "q": "Kangaroos live in ___.",
    "options": [
     "Australia",
     "the UK",
     "France"
    ],
    "answer": 0
   }
  ],
  "write": "Viết thư ngắn cho một người bạn nước ngoài: Hi! My name is ___. I'm from ___. I speak ___. Last weekend, I ___. Next summer, I'm going to ___.",
  "badge": {
   "name": "World Adventurer",
   "vi": "Nhà phiêu lưu thế giới"
  },
  "parent": {
   "learned": "country, Vietnam, Japan, Australia, the USA, the UK, France, language",
   "patterns": [
    "Where are you from? — I'm from Vietnam.",
    "She's from Japan. She's Japanese.",
    "What language do they speak in France? — French."
   ],
   "tips": [
    "Cùng bé xem bản đồ thế giới, tìm Việt Nam và các nước trong bài.",
    "Học cách chào hỏi bằng vài ngôn ngữ khác nhau cho vui.",
    "Khen bé đã hoàn thành cả Quyển 3 và tổ chức một buổi “World Party” nhỏ."
   ]
  }
 }
];
