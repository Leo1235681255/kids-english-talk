import { LevelData, LessonData } from '../types';

export const LESSON_L1_U01_B1: LessonData = {
  id: 'L1-U01-B1',
  levelId: 'starter',
  unitId: 'L1-U01',
  title: 'Hello! I am Mi',
  titleVi: 'Xin chào! Tớ là Mi',
  subtitle: 'Làm quen 4 từ vựng đầu tiên & Chào hỏi bạn bè',
  targetWords: [
    {
      id: 'girl',
      en: 'girl',
      vi: 'bạn gái',
      image: '/assets/card_girl.png',
      phonetic: '/ɡɜːrl/',
      sentenceEn: 'I am a girl.',
      sentenceVi: 'Tớ là một bạn gái.'
    },
    {
      id: 'boy',
      en: 'boy',
      vi: 'bạn trai',
      image: '/assets/card_boy.png',
      phonetic: '/bɔɪ/',
      sentenceEn: 'He is a boy.',
      sentenceVi: 'Cậu ấy là một bạn trai.'
    },
    {
      id: 'friend',
      en: 'friend',
      vi: 'người bạn',
      image: '/assets/card_friend.png',
      phonetic: '/frend/',
      sentenceEn: "Let's be friends!",
      sentenceVi: 'Chúng mình làm bạn nhé!'
    },
    {
      id: 'hello',
      en: 'hello',
      vi: 'xin chào',
      image: '/assets/card_hello.png',
      phonetic: '/həˈloʊ/',
      sentenceEn: 'Hello, my friend!',
      sentenceVi: 'Xin chào bạn của tớ!'
    }
  ],
  warmup: {
    title: 'Hello Friends Chant!',
    rhythm: 'Vui tươi, rộn ràng, nhịp 4/4',
    lyrics: [
      'Hello, hello!',
      'Hi, hi, hi!',
      'Nice to meet you!',
      "Let's be friends!",
      'Hello, hello!',
      'Wave your hand!',
      'You and me,',
      "We're friends!"
    ],
    lyricsVi: [
      'Xin chào, xin chào!',
      'Chào bạn, chào bạn!',
      'Rất vui được gặp bạn!',
      'Chúng mình làm bạn nhé!',
      'Xin chào, xin chào!',
      'Hãy vẫy tay nào!',
      'Bạn và tớ,',
      'Chúng mình là bạn thân!'
    ]
  },
  listenTap: {
    questions: [
      {
        targetWord: { id: 'boy', en: 'boy', vi: 'bạn trai', image: '/assets/card_boy.png' },
        options: [
          { id: 'girl', en: 'girl', vi: 'bạn gái', image: '/assets/card_girl.png' },
          { id: 'boy', en: 'boy', vi: 'bạn trai', image: '/assets/card_boy.png' },
          { id: 'dog', en: 'dog', vi: 'chú chó', image: '/assets/card_dog.png' },
          { id: 'cat', en: 'cat', vi: 'chú mèo', image: '/assets/card_cat.png' }
        ]
      },
      {
        targetWord: { id: 'girl', en: 'girl', vi: 'bạn gái', image: '/assets/card_girl.png' },
        options: [
          { id: 'friend', en: 'friend', vi: 'người bạn', image: '/assets/card_friend.png' },
          { id: 'hello', en: 'hello', vi: 'xin chào', image: '/assets/card_hello.png' },
          { id: 'girl', en: 'girl', vi: 'bạn gái', image: '/assets/card_girl.png' },
          { id: 'boy', en: 'boy', vi: 'bạn trai', image: '/assets/card_boy.png' }
        ]
      },
      {
        targetWord: { id: 'friend', en: 'friend', vi: 'người bạn', image: '/assets/card_friend.png' },
        options: [
          { id: 'cat', en: 'cat', vi: 'chú mèo', image: '/assets/card_cat.png' },
          { id: 'friend', en: 'friend', vi: 'người bạn', image: '/assets/card_friend.png' },
          { id: 'boy', en: 'boy', vi: 'bạn trai', image: '/assets/card_boy.png' },
          { id: 'girl', en: 'girl', vi: 'bạn gái', image: '/assets/card_girl.png' }
        ]
      },
      {
        targetWord: { id: 'hello', en: 'hello', vi: 'xin chào', image: '/assets/card_hello.png' },
        options: [
          { id: 'hello', en: 'hello', vi: 'xin chào', image: '/assets/card_hello.png' },
          { id: 'dog', en: 'dog', vi: 'chú chó', image: '/assets/card_dog.png' },
          { id: 'boy', en: 'boy', vi: 'bạn trai', image: '/assets/card_boy.png' },
          { id: 'friend', en: 'friend', vi: 'người bạn', image: '/assets/card_friend.png' }
        ]
      }
    ]
  },
  sayIt: {
    items: [
      {
        word: { id: 'boy', en: 'boy', vi: 'bạn trai', image: '/assets/card_boy.png' },
        targetSentence: 'boy',
        pipPraise: 'Great! Say it again!'
      },
      {
        word: { id: 'girl', en: 'girl', vi: 'bạn gái', image: '/assets/card_girl.png' },
        targetSentence: 'girl',
        pipPraise: 'Super clear! You are doing awesome!'
      },
      {
        word: { id: 'hello', en: 'hello', vi: 'xin chào', image: '/assets/card_hello.png' },
        targetSentence: 'hello',
        pipPraise: 'Wonderful greeting! Great job!'
      },
      {
        word: { id: 'friend', en: 'friend', vi: 'người bạn', image: '/assets/card_friend.png' },
        targetSentence: 'friend',
        pipPraise: "Perfect! We're best friends!"
      }
    ]
  },
  talkTime: {
    scene: 'Cổng trường mầm non vào buổi sáng, Mi và Bin gặp nhau lần đầu',
    dialogue: [
      {
        id: 'd1',
        speaker: 'Bin',
        en: "Hi! What's your name?",
        vi: 'Chào bạn! Tên của bạn là gì?',
        avatar: '/assets/boy_avatar.png'
      },
      {
        id: 'd2',
        speaker: 'Mi',
        en: "I'm Mi. What's your name?",
        vi: 'Tớ là Mi. Bạn tên là gì thế?',
        avatar: '/assets/mi_avatar.png',
        roleplayTarget: true
      },
      {
        id: 'd3',
        speaker: 'Bin',
        en: "I'm Bin. Nice to meet you!",
        vi: 'Tớ là Bin. Rất vui được làm quen với bạn!',
        avatar: '/assets/boy_avatar.png'
      },
      {
        id: 'd4',
        speaker: 'Mi',
        en: 'Nice to meet you too!',
        vi: 'Tớ cũng rất vui được gặp bạn!',
        avatar: '/assets/mi_avatar.png',
        roleplayTarget: true
      },
      {
        id: 'd5',
        speaker: 'Pip',
        en: 'High five! Now you are friends!',
        vi: 'Đập tay nào! Giờ hai bạn đã là bạn thân rồi!',
        avatar: '/assets/pip_mascot.png'
      }
    ],
    roleplayAs: 'Mi'
  },
  playGame: {
    type: 'match_line',
    instruction: 'Drag or tap to match each word with the right picture!',
    pairs: [
      { id: 'p1', word: 'girl', image: '/assets/card_girl.png' },
      { id: 'p2', word: 'boy', image: '/assets/card_boy.png' },
      { id: 'p3', word: 'cat', image: '/assets/card_cat.png' },
      { id: 'p4', word: 'dog', image: '/assets/card_dog.png' }
    ]
  },
  reward: {
    stickerId: 'st_sparrow_badge',
    stickerName: 'Ngôi Sao Chăm Chỉ',
    stickerImage: '/assets/star_badge.png',
    celebrationText: 'Bé đã hoàn thành xuất sắc bài học Hello! I am Mi!'
  },
  storyTime: {
    title: 'A New Friend (Người bạn mới)',
    panels: [
      {
        panelNumber: 1,
        speaker: 'Mi & Bin',
        textEn: "Hello! What's your name?",
        textVi: 'Xin chào! Bạn tên là gì thế?',
        image: '/assets/storytime_1.png',
        description: 'Mi và Bin đứng trước cổng trường, mỉm cười vẫy tay chào nhau.'
      },
      {
        panelNumber: 2,
        speaker: 'Bin',
        textEn: "I'm Bin. What's your name?",
        textVi: 'Tớ là Bin. Bạn tên là gì?',
        image: '/assets/storytime_1.png',
        description: 'Bin đội mũ xanh, hào hứng giới thiệu bản thân.'
      },
      {
        panelNumber: 3,
        speaker: 'Mi',
        textEn: "I'm Mi. Nice to meet you!",
        textVi: 'Tớ là Mi. Rất vui được gặp bạn!',
        image: '/assets/storytime_1.png',
        description: 'Mi cười tươi, đưa tay làm quen với Bin.'
      },
      {
        panelNumber: 4,
        speaker: 'Bin & Pip',
        textEn: "Nice to meet you too! Let's play together!",
        textVi: 'Tớ cũng vui lắm! Cùng chơi nào!',
        image: '/assets/storytime_1.png',
        description: 'Chú chim Pip bay lượn chúc mừng tình bạn mới của Mi và Bin.'
      }
    ]
  },
  parentSummary: {
    todayWords: ['girl (bạn gái)', 'boy (bạn trai)', 'friend (người bạn)', 'hello (xin chào)'],
    communicationPatterns: [
      "What's your name? (Bạn tên là gì?)",
      "I'm Mi / I'm Bin (Tớ là...)",
      'Nice to meet you! (Rất vui được gặp bạn!)'
    ],
    pedagogicalAdvice: [
      'Bé đã tiếp thu và phát âm chuẩn 4 từ vựng cốt lõi.',
      'Bé đã tích cực luyện nói và tương tác trong hội thoại đóng vai.',
      'Khuyến khích bé thực hành chào "Hello!" và "What\'s your name?" với các thành viên trong gia đình.',
      'Dành cho bé lời khen ngợi chân thành để tạo sự tự tin giao tiếp tiếng Anh.'
    ],
    completionBadge: 'Thẻ bài Hoàn thành Starter Unit 1'
  }
};

export const LESSON_L1_U03_B1: LessonData = {
  id: 'L1-U03-B1',
  levelId: 'starter',
  unitId: 'L1-U03',
  title: 'Red, Blue, Yellow',
  titleVi: 'Màu đỏ, Màu xanh, Màu vàng',
  subtitle: 'Nhận biết 4 màu sắc kỳ diệu & Mẫu câu What color is it?',
  targetWords: [
    {
      id: 'red',
      en: 'red',
      vi: 'màu đỏ',
      image: '/assets/card_car.png',
      phonetic: '/red/',
      sentenceEn: "It's red.",
      sentenceVi: 'Nó có màu đỏ.'
    },
    {
      id: 'blue',
      en: 'blue',
      vi: 'màu xanh dương',
      image: '/assets/card_kite.png',
      phonetic: '/bluː/',
      sentenceEn: "It's blue.",
      sentenceVi: 'Nó có màu xanh dương.'
    },
    {
      id: 'yellow',
      en: 'yellow',
      vi: 'màu vàng',
      image: '/assets/card_teddy.png',
      phonetic: '/ˈjel.oʊ/',
      sentenceEn: "It's yellow.",
      sentenceVi: 'Nó có màu vàng.'
    },
    {
      id: 'green',
      en: 'green',
      vi: 'màu xanh lá',
      image: '/assets/card_ball.png',
      phonetic: '/ɡriːn/',
      sentenceEn: "It's green.",
      sentenceVi: 'Nó có màu xanh lá.'
    }
  ],
  warmup: {
    title: 'Colors in the Sky Chant',
    rhythm: 'Nhịp điệu nhún nhảy vui tươi',
    lyrics: [
      'Red, red, red — I see red!',
      'Blue, blue, blue — I see blue!',
      'Yellow, yellow — up in the sky!',
      'Green, green — wave hi!'
    ],
    lyricsVi: [
      'Đỏ, đỏ, đỏ — Tớ thấy màu đỏ!',
      'Xanh, xanh, xanh — Tớ thấy màu xanh!',
      'Vàng, vàng ơi — bay trên trời cao!',
      'Xanh lá cây ơi — cùng vẫy tay chào!'
    ]
  },
  listenTap: {
    questions: [
      {
        targetWord: { id: 'red', en: 'red', vi: 'màu đỏ', image: '/assets/card_car.png' },
        options: [
          { id: 'red', en: 'red', vi: 'màu đỏ', image: '/assets/card_car.png' },
          { id: 'blue', en: 'blue', vi: 'màu xanh dương', image: '/assets/card_kite.png' },
          { id: 'yellow', en: 'yellow', vi: 'màu vàng', image: '/assets/card_teddy.png' },
          { id: 'green', en: 'green', vi: 'màu xanh lá', image: '/assets/card_ball.png' }
        ]
      },
      {
        targetWord: { id: 'blue', en: 'blue', vi: 'màu xanh dương', image: '/assets/card_kite.png' },
        options: [
          { id: 'yellow', en: 'yellow', vi: 'màu vàng', image: '/assets/card_teddy.png' },
          { id: 'blue', en: 'blue', vi: 'màu xanh dương', image: '/assets/card_kite.png' },
          { id: 'red', en: 'red', vi: 'màu đỏ', image: '/assets/card_car.png' },
          { id: 'green', en: 'green', vi: 'màu xanh lá', image: '/assets/card_ball.png' }
        ]
      }
    ]
  },
  sayIt: {
    items: [
      {
        word: { id: 'red', en: 'red', vi: 'màu đỏ', image: '/assets/card_car.png' },
        targetSentence: "It's red",
        pipPraise: 'Bright and shiny red! Amazing!'
      },
      {
        word: { id: 'blue', en: 'blue', vi: 'màu xanh dương', image: '/assets/card_kite.png' },
        targetSentence: "It's blue",
        pipPraise: 'Sky blue! Excellent job!'
      }
    ]
  },
  talkTime: {
    scene: 'Lớp học vẽ cầu vồng của cô giáo',
    dialogue: [
      {
        id: 'c1',
        speaker: 'Bin',
        en: 'Look, Mi! What color is it?',
        vi: 'Nhìn này Mi! Nó màu gì thế?',
        avatar: '/assets/boy_avatar.png'
      },
      {
        id: 'c2',
        speaker: 'Mi',
        en: "It's red!",
        vi: 'Màu đỏ nè!',
        avatar: '/assets/mi_avatar.png',
        roleplayTarget: true
      },
      {
        id: 'c3',
        speaker: 'Bin',
        en: 'And this? What color is it?',
        vi: 'Còn cái này? Màu gì đây?',
        avatar: '/assets/boy_avatar.png'
      },
      {
        id: 'c4',
        speaker: 'Mi',
        en: "It's blue!",
        vi: 'Nó là màu xanh dương!',
        avatar: '/assets/mi_avatar.png',
        roleplayTarget: true
      },
      {
        id: 'c5',
        speaker: 'Pip',
        en: 'Great job, artist Mi!',
        vi: 'Giỏi quá, họa sĩ Mi ơi!',
        avatar: '/assets/pip_mascot.png'
      }
    ],
    roleplayAs: 'Mi'
  },
  playGame: {
    type: 'match_line',
    instruction: 'Match color names to objects!',
    pairs: [
      { id: 'm1', word: 'red', image: '/assets/card_car.png' },
      { id: 'm2', word: 'blue', image: '/assets/card_kite.png' },
      { id: 'm3', word: 'yellow', image: '/assets/card_teddy.png' },
      { id: 'm4', word: 'green', image: '/assets/card_ball.png' }
    ]
  },
  reward: {
    stickerId: 'st_palette',
    stickerName: 'Họa Sĩ Tí Hon',
    stickerImage: '/assets/sticker_pinkstar.png',
    celebrationText: 'Bé đã nhận diện và phát âm xuất sắc 4 màu sắc!'
  },
  storyTime: {
    title: 'The Colorful Rainbow (Cầu vồng rực rỡ)',
    panels: [
      {
        panelNumber: 1,
        speaker: 'Bin',
        textEn: 'Look at the rainbow, Mi!',
        textVi: 'Nhìn cầu vồng kìa Mi ơi!',
        image: '/assets/story_2.png',
        description: 'Bầu trời sau mưa xuất hiện cầu vồng rực rỡ.'
      },
      {
        panelNumber: 2,
        speaker: 'Mi',
        textEn: "I see red, blue, and yellow!",
        textVi: 'Tớ thấy màu đỏ, màu xanh dương và màu vàng!',
        image: '/assets/story_2.png',
        description: 'Mi chỉ tay lên trời mỉm cười.'
      },
      {
        panelNumber: 3,
        speaker: 'Pip',
        textEn: 'And green too! Colors are fun!',
        textVi: 'Và cả màu xanh lá nữa! Màu sắc thật kỳ diệu!',
        image: '/assets/story_2.png',
        description: 'Pip chao lượn quanh cầu vồng ngập tràn hạnh phúc.'
      }
    ]
  },
  parentSummary: {
    todayWords: ['red (màu đỏ)', 'blue (màu xanh dương)', 'yellow (màu vàng)', 'green (màu xanh lá)'],
    communicationPatterns: [
      'What color is it? (Nó màu gì?)',
      "It's red / It's blue... (Nó có màu...)"
    ],
    pedagogicalAdvice: [
      'Bé đã ghi nhớ và phản xạ nhanh với 4 màu cơ bản.',
      'Hãy chỉ vào các đồ vật trong phòng khách và hỏi: What color is it?',
      'Khen ngợi khi bé trả lời nguyên câu: It\'s yellow / It\'s red.'
    ],
    completionBadge: 'Thẻ bài Hoàn thành Colors Unit 3'
  }
};

export const LESSON_L1_U06_B1: LessonData = {
  id: 'L1-U06-B1',
  levelId: 'starter',
  unitId: 'L1-U06',
  title: 'Cute Animals',
  titleVi: 'Những Con Vật Đáng Yêu',
  subtitle: 'Làm quen bạn Cat, Dog, Bird, Fish & Tiếng kêu con vật',
  targetWords: [
    {
      id: 'cat',
      en: 'cat',
      vi: 'con mèo',
      image: '/assets/item_cat.png',
      phonetic: '/kæt/',
      sentenceEn: "It's a cat. The cat says meow!",
      sentenceVi: 'Đó là chú mèo kêu meo meo!'
    },
    {
      id: 'dog',
      en: 'dog',
      vi: 'con chó',
      image: '/assets/item_dog.png',
      phonetic: '/dɔːɡ/',
      sentenceEn: "It's a dog. Woof woof!",
      sentenceVi: 'Đó là chú cún gâu gâu!'
    },
    {
      id: 'bird',
      en: 'bird',
      vi: 'con chim',
      image: '/assets/item_bird.png',
      phonetic: '/bɜːrd/',
      sentenceEn: 'Pip is a little bird.',
      sentenceVi: 'Pip là một chú chim sẻ nhỏ.'
    },
    {
      id: 'fish',
      en: 'fish',
      vi: 'con cá',
      image: '/assets/item_fish.png',
      phonetic: '/fɪʃ/',
      sentenceEn: 'The fish swims in the pond.',
      sentenceVi: 'Chú cá bơi lội dưới ao.'
    }
  ],
  warmup: {
    title: 'Animal Friends Song',
    rhythm: 'Giai điệu vui nhộn mô phỏng tiếng con vật',
    lyrics: [
      'Meow, meow, says the cat!',
      'Woof, woof, says the dog!',
      'Tweet, tweet, little bird!',
      'Swim, swim, happy fish!'
    ],
    lyricsVi: [
      'Meo meo, chú mèo kêu!',
      'Gâu gâu, chú cún chào!',
      'Líu lo, chim sẻ hát!',
      'Vẫy đuôi, cá tung tăng!'
    ]
  },
  listenTap: {
    questions: [
      {
        targetWord: { id: 'cat', en: 'cat', vi: 'con mèo', image: '/assets/item_cat.png' },
        options: [
          { id: 'cat', en: 'cat', vi: 'con mèo', image: '/assets/item_cat.png' },
          { id: 'dog', en: 'dog', vi: 'con chó', image: '/assets/item_dog.png' },
          { id: 'bird', en: 'bird', vi: 'con chim', image: '/assets/item_bird.png' },
          { id: 'fish', en: 'fish', vi: 'con cá', image: '/assets/item_fish.png' }
        ]
      },
      {
        targetWord: { id: 'dog', en: 'dog', vi: 'con chó', image: '/assets/item_dog.png' },
        options: [
          { id: 'bird', en: 'bird', vi: 'con chim', image: '/assets/item_bird.png' },
          { id: 'dog', en: 'dog', vi: 'con chó', image: '/assets/item_dog.png' },
          { id: 'cat', en: 'cat', vi: 'con mèo', image: '/assets/item_cat.png' },
          { id: 'fish', en: 'fish', vi: 'con cá', image: '/assets/item_fish.png' }
        ]
      }
    ]
  },
  sayIt: {
    items: [
      {
        word: { id: 'cat', en: 'cat', vi: 'con mèo', image: '/assets/item_cat.png' },
        targetSentence: "It's a cat",
        pipPraise: 'Meow! Perfect cat sound!'
      },
      {
        word: { id: 'dog', en: 'dog', vi: 'con chó', image: '/assets/item_dog.png' },
        targetSentence: "It's a dog",
        pipPraise: 'Woof woof! Excellent!'
      }
    ]
  },
  talkTime: {
    scene: 'Trang trại quê bà với nhiều bạn thú cưng dễ thương',
    dialogue: [
      {
        id: 'a1',
        speaker: 'Bin',
        en: "What's this, Mi?",
        vi: 'Con gì đây Mi ơi?',
        avatar: '/assets/boy_avatar.png'
      },
      {
        id: 'a2',
        speaker: 'Mi',
        en: "It's a cat. The cat says meow!",
        vi: 'Đó là chú mèo! Mèo kêu meo meo!',
        avatar: '/assets/mi_avatar.png',
        roleplayTarget: true
      },
      {
        id: 'a3',
        speaker: 'Bin',
        en: 'And what is that swimming?',
        vi: 'Còn con gì đang bơi thế kia?',
        avatar: '/assets/boy_avatar.png'
      },
      {
        id: 'a4',
        speaker: 'Mi',
        en: "It's a fish!",
        vi: 'Đó là chú cá!',
        avatar: '/assets/mi_avatar.png',
        roleplayTarget: true
      },
      {
        id: 'a5',
        speaker: 'Pip',
        en: 'You know all the animals!',
        vi: 'Bé biết hết tên các con vật rồi, giỏi quá!',
        avatar: '/assets/pip_mascot.png'
      }
    ],
    roleplayAs: 'Mi'
  },
  playGame: {
    type: 'match_line',
    instruction: 'Nối các bạn động vật với từ tương ứng nhé!',
    pairs: [
      { id: 'pa1', word: 'cat', image: '/assets/item_cat.png' },
      { id: 'pa2', word: 'dog', image: '/assets/item_dog.png' },
      { id: 'pa3', word: 'bird', image: '/assets/item_bird.png' },
      { id: 'pa4', word: 'fish', image: '/assets/item_fish.png' }
    ]
  },
  reward: {
    stickerId: 'st_animal_lover',
    stickerName: 'Bạn Của Muôn Thú',
    stickerImage: '/assets/sticker_pip.png',
    celebrationText: 'Bé đã thuộc hết tên các con vật quen thuộc!'
  },
  storyTime: {
    title: 'A Day on Grandma Farm',
    panels: [
      {
        panelNumber: 1,
        speaker: 'Mi',
        textEn: 'Look at the puppy running!',
        textVi: 'Nhìn chú cún con đang chạy kìa!',
        image: '/assets/story_2.png',
        description: 'Chú cún vẫy đuôi mừng rỡ trước hiên nhà.'
      },
      {
        panelNumber: 2,
        speaker: 'Bin',
        textEn: 'And the fish in the pond!',
        textVi: 'Và đàn cá bơi lượn dưới ao!',
        image: '/assets/story_2.png',
        description: 'Đàn cá vàng tung tăng bơi lội đón tia nắng sớm.'
      }
    ]
  },
  parentSummary: {
    todayWords: ['cat (con mèo)', 'dog (con chó)', 'bird (con chim)', 'fish (con cá)'],
    communicationPatterns: [
      "What's this? — It's a cat. (Đây là con gì? — Đó là con mèo.)",
      'The cat says meow. (Mèo kêu meo meo.)'
    ],
    pedagogicalAdvice: [
      'Học qua tiếng kêu con vật giúp bé kích thích phản xạ ngôn ngữ tự nhiên.',
      'Cùng bé đố vui tiếng kêu và gọi tên tiếng Anh các con vật xung quanh.'
    ],
    completionBadge: 'Thẻ bài Hoàn thành Animals Unit 6'
  }
};

export const CURRICULUM_LEVELS: LevelData[] = [
  {
    id: 'starter',
    title: 'Level 1: Starter',
    nameVi: 'Khởi động (4–6 tuổi)',
    age: '4–6 tuổi',
    cambridgeLevel: 'Pre-A1',
    description: 'Chưa cần biết đọc, học qua nghe tranh và nói câu ngắn 2–4 từ',
    units: [
      {
        id: 'L1-U01',
        code: 'Unit 1',
        title: 'Hello!',
        titleVi: 'Chào hỏi & Làm quen',
        pattern: "What's your name? — I'm Mi.",
        wordsOverview: ['hello', 'hi', 'goodbye', 'name', 'friend', 'boy', 'girl'],
        color: 'from-amber-400 to-orange-400',
        icon: '👋',
        lessons: [LESSON_L1_U01_B1]
      },
      {
        id: 'L1-U02',
        code: 'Unit 2',
        title: 'My Family',
        titleVi: 'Gia đình thân yêu',
        pattern: "Who's this? — This is my mom.",
        wordsOverview: ['mom', 'dad', 'brother', 'sister', 'grandma', 'grandpa', 'baby'],
        color: 'from-pink-400 to-rose-400',
        icon: '👨‍👩‍👧',
        lessons: []
      },
      {
        id: 'L1-U03',
        code: 'Unit 3',
        title: 'Colors',
        titleVi: 'Màu sắc kỳ diệu',
        pattern: "What color is it? — It's red.",
        wordsOverview: ['red', 'blue', 'yellow', 'green', 'pink', 'orange', 'purple'],
        color: 'from-emerald-400 to-teal-400',
        icon: '🎨',
        lessons: [LESSON_L1_U03_B1]
      },
      {
        id: 'L1-U04',
        code: 'Unit 4',
        title: 'Numbers (1–10)',
        titleVi: 'Chữ số vui nhộn',
        pattern: 'How many? — Three! · How old are you?',
        wordsOverview: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
        color: 'from-blue-400 to-indigo-400',
        icon: '🔢',
        lessons: []
      },
      {
        id: 'L1-U05',
        code: 'Unit 5',
        title: 'My Body',
        titleVi: 'Cơ thể của em',
        pattern: 'Touch your nose! · Clap your hands!',
        wordsOverview: ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'feet'],
        color: 'from-cyan-400 to-sky-400',
        icon: '🖐️',
        lessons: []
      },
      {
        id: 'L1-U06',
        code: 'Unit 6',
        title: 'Animals',
        titleVi: 'Thế giới động vật',
        pattern: "What's this? — It's a cat.",
        wordsOverview: ['cat', 'dog', 'bird', 'fish', 'duck', 'cow', 'pig', 'chicken'],
        color: 'from-lime-400 to-green-500',
        icon: '🐶',
        lessons: [LESSON_L1_U06_B1]
      },
      {
        id: 'L1-U07',
        code: 'Unit 7',
        title: 'Yummy Food',
        titleVi: 'Món ăn ngon',
        pattern: 'I like bananas. · Do you like milk?',
        wordsOverview: ['apple', 'banana', 'rice', 'milk', 'bread', 'egg', 'noodles'],
        color: 'from-amber-400 to-yellow-500',
        icon: '🍎',
        lessons: []
      },
      {
        id: 'L1-U08',
        code: 'Unit 8',
        title: 'My Toys',
        titleVi: 'Đồ chơi của bé',
        pattern: 'I have a ball. · Let\'s play!',
        wordsOverview: ['ball', 'doll', 'car', 'teddy bear', 'kite', 'robot', 'blocks'],
        color: 'from-purple-400 to-violet-500',
        icon: '🧸',
        lessons: []
      }
    ]
  },
  {
    id: 'explorer',
    title: 'Level 2: Explorer',
    nameVi: 'Khám phá (6–8 tuổi)',
    age: '6–8 tuổi',
    cambridgeLevel: 'A1 (Starters)',
    description: 'Bé nhận mặt từ, hỏi đáp câu ngắn 3–4 lượt hội thoại',
    units: [
      {
        id: 'L2-U01',
        code: 'Unit 1',
        title: 'My School',
        titleVi: 'Trường học của em',
        pattern: 'May I have a pencil? — Here you are.',
        wordsOverview: ['pencil', 'pen', 'book', 'bag', 'ruler', 'eraser', 'desk'],
        color: 'from-indigo-400 to-blue-500',
        icon: '🎒',
        lessons: []
      },
      {
        id: 'L2-U02',
        code: 'Unit 2',
        title: 'Feelings',
        titleVi: 'Cảm xúc',
        pattern: "How are you? — I'm happy.",
        wordsOverview: ['happy', 'sad', 'angry', 'tired', 'hungry', 'scared', 'fine'],
        color: 'from-pink-400 to-rose-500',
        icon: '😊',
        lessons: []
      },
      {
        id: 'L2-U03',
        code: 'Unit 3',
        title: 'Clothes',
        titleVi: 'Trang phục',
        pattern: "What are you wearing? — I'm wearing a red T-shirt.",
        wordsOverview: ['T-shirt', 'shorts', 'dress', 'hat', 'shoes', 'socks', 'jacket'],
        color: 'from-teal-400 to-cyan-500',
        icon: '👕',
        lessons: []
      },
      {
        id: 'L2-U04',
        code: 'Unit 4',
        title: 'My House',
        titleVi: 'Ngôi nhà nhỏ',
        pattern: "Where's the cat? — It's under the table.",
        wordsOverview: ['bedroom', 'kitchen', 'bathroom', 'living room', 'in', 'on', 'under'],
        color: 'from-amber-400 to-orange-500',
        icon: '🏡',
        lessons: []
      }
    ]
  },
  {
    id: 'adventurer',
    title: 'Level 3: Adventurer',
    nameVi: 'Phiêu lưu (8–10 tuổi)',
    age: '8–10 tuổi',
    cambridgeLevel: 'A1–A2 (Movers)',
    description: 'Xử lý tình huống thực tế, kể lại câu chuyện ngắn bằng tiếng Anh',
    units: [
      {
        id: 'L3-U01',
        code: 'Unit 1',
        title: 'Hobbies',
        titleVi: 'Sở thích thú vị',
        pattern: 'What do you like doing? — I like reading.',
        wordsOverview: ['reading', 'cooking', 'painting', 'football', 'collecting'],
        color: 'from-purple-500 to-indigo-600',
        icon: '⚽',
        lessons: []
      },
      {
        id: 'L3-U02',
        code: 'Unit 2',
        title: 'Shopping',
        titleVi: 'Mua sắm',
        pattern: 'How much is it? — It\'s twenty thousand dong.',
        wordsOverview: ['shop', 'buy', 'price', 'cheap', 'expensive'],
        color: 'from-emerald-500 to-green-600',
        icon: '🛒',
        lessons: []
      },
      {
        id: 'L3-U03',
        code: 'Unit 3',
        title: 'Around Town',
        titleVi: 'Khám phá phố phường',
        pattern: "Where's the park? — Go straight and turn left.",
        wordsOverview: ['hospital', 'post office', 'supermarket', 'street', 'left', 'right'],
        color: 'from-sky-500 to-blue-600',
        icon: '🗺️',
        lessons: []
      }
    ]
  }
];

export const ALL_STICKERS = [
  { id: 'st_star', name: 'Ngôi Sao Sáng', image: '/assets/sticker_pinkstar.png', description: 'Hoàn thành bài học với sự chăm chỉ!' },
  { id: 'st_mi', name: 'Bé Mi Vui Vẻ', image: '/assets/sticker_mi.png', description: 'Mở khóa khi tham gia hội thoại cùng Mi!' },
  { id: 'st_bin', name: 'Bin Năng Động', image: '/assets/sticker_bin.png', description: 'Mở khóa khi đạt 3 sao phần Nói!' },
  { id: 'st_pip', name: 'Chim Sẻ Pip', image: '/assets/sticker_pip.png', description: 'Thầy giáo tí hon dẫn đường cho bé!' },
  { id: 'st_badge', name: 'Huy Hiệu Vàng', image: '/assets/star_badge.png', description: 'Đạt điểm tối đa trò chơi nối từ!' }
];
