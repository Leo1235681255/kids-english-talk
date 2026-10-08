import { FIND, GREAT, make, MATCH } from './units';

/* Units 10–16 of Quyển 1 · Starter. Source: PHOTO/KidsEnglishTalk_Starter_16_Units.md */

/* ═════════════════════════ L1-U10 · Feelings ═════════════════════════ */
const U10 = 'L1-U10';
export const FEELINGS = [
  make(U10, 1, {
    title: 'Happy, Sad, Angry',
    titleVi: 'Vui, buồn, tức giận',
    goal: "Bé nhận biết happy, sad, angry và nói: I'm happy.",
    words: ['happy', 'sad', 'angry'],
    extras: ['tired', 'fine'],
    chant: {
      title: 'Feelings Chant',
      rhythm: 'Đổi nét mặt theo từng cảm xúc khi hát',
      lines: [
        ['Happy, happy — smile with me!', 'Vui vẻ, vui vẻ — cười cùng mình!'],
        ['Sad, sad — one, two, three.', 'Buồn, buồn — một, hai, ba.'],
        ['Angry face — take a breath!', 'Mặt giận dữ — hít thở nào!'],
        ["Now I'm happy!", 'Giờ mình vui rồi!'],
      ],
    },
    say: [['How are you?', 'Bạn thấy thế nào?'], ["I'm happy.", 'Mình vui.'], ["I'm sad.", 'Mình buồn.']],
    talk: {
      scene: 'Sân trường — Bin hỏi thăm Mi',
      roleplay: 'Mi',
      lines: [
        ['Bin', 'How are you?', 'Bạn thấy thế nào?'],
        ['Mi', "I'm happy.", 'Mình vui lắm.'],
        ['Bin', 'Are you OK?', 'Bạn ổn chứ?'],
        ['Mi', "I'm sad.", 'Mình buồn.'],
        ['Pip', 'Great job, Mi!', 'Giỏi lắm Mi!'],
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['happy', 'sad', 'angry', 'tired'] },
    sticker: ['😊', 'Nụ cười tươi'],
    parent: {
      learned: 'happy, sad, angry',
      patterns: ['How are you?', "I'm happy."],
      tips: [
        'Bé đã biết gọi tên 3 cảm xúc đầu tiên bằng tiếng Anh.',
        'Hỏi bé "How are you?" mỗi sáng và để bé chọn khuôn mặt phù hợp.',
        'Cho bé làm mặt vui, buồn, giận trước gương rồi nói từ tương ứng.',
      ],
    },
  }),
  make(U10, 2, {
    title: 'Tired, Hungry, Scared, Fine',
    titleVi: 'Mệt, đói, sợ, ổn',
    goal: "Bé nhận biết tired, hungry, scared, fine và nói: I'm hungry.",
    words: ['tired', 'hungry', 'scared', 'fine'],
    extras: ['happy', 'sad'],
    chant: {
      title: 'Tired & Hungry Chant',
      rhythm: 'Chậm rãi, ngáp một cái khi hát đến "tired"',
      lines: [
        ["Tired, tired — I'm sleepy!", 'Mệt ơi — mình buồn ngủ!'],
        ["Hungry, hungry — I'm hungry!", 'Đói ơi — mình đói bụng!'],
        ['Scared, scared — hold my hand.', 'Sợ ơi — nắm tay mình nhé.'],
        ["Fine, fine — I'm okay!", 'Ổn ơi — mình không sao!'],
      ],
    },
    say: [["I'm tired.", 'Mình mệt.'], ["I'm hungry.", 'Mình đói.'], ["I'm fine.", 'Mình ổn.']],
    talk: {
      scene: 'Cuối buổi chiều — Mi và Bin chơi mệt rồi',
      roleplay: 'Bin',
      lines: [
        ['Mi', 'How are you, Bin?', 'Bạn thấy thế nào, Bin?'],
        ['Bin', "I'm tired.", 'Mình mệt.'],
        ['Mi', 'Are you hungry?', 'Bạn có đói không?'],
        ['Bin', "Yes, I'm hungry!", 'Có, mình đói!'],
        ['Mi', 'Are you scared?', 'Bạn có sợ không?'],
        ['Bin', "No, I'm fine!", 'Không, mình ổn!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['tired', 'hungry', 'scared', 'fine'] },
    sticker: ['😴', 'Bé buồn ngủ'],
    parent: {
      learned: 'tired, hungry, scared, fine',
      patterns: ["I'm hungry.", "I'm fine."],
      tips: [
        'Bé đã học thêm 4 từ chỉ cảm giác cơ thể và cảm xúc.',
        'Khi bé đói hoặc buồn ngủ, nhắc bé nói "I\'m hungry / I\'m tired".',
        'Cho bé nắm tay bạn khi nói "scared" để bé thấy an toàn.',
      ],
    },
  }),
  make(U10, 3, {
    title: 'How Are You?',
    titleVi: 'Bạn thấy thế nào?',
    goal: 'Bé đóng vai Mi, hỏi – đáp về cảm xúc với Bin',
    words: ['happy', 'sad', 'angry', 'fine'],
    extras: ['tired', 'hungry', 'scared'],
    chant: {
      title: 'How Are You? Chant',
      rhythm: 'Hỏi – đáp: nhóm một hỏi, nhóm hai trả lời',
      lines: [
        ['How are you? How are you?', 'Bạn thấy thế nào? Bạn thấy thế nào?'],
        ["I'm happy! I'm happy!", 'Mình vui! Mình vui!'],
        ['Are you OK? Are you OK?', 'Bạn ổn chứ? Bạn ổn chứ?'],
        ["I'm fine! I'm fine!", 'Mình ổn! Mình ổn!'],
      ],
    },
    say: [['How are you?', 'Bạn thấy thế nào?'], ['Are you OK?', 'Bạn ổn chứ?'], ["I'm fine.", 'Mình ổn.']],
    talk: {
      scene: 'Giờ ra chơi — Mi và Bin hỏi thăm nhau',
      roleplay: 'Mi',
      lines: [
        ['Bin', 'How are you?', 'Bạn thấy thế nào?'],
        ['Mi', "I'm happy.", 'Mình vui lắm.'],
        ['Bin', 'Are you OK?', 'Bạn ổn chứ?'],
        ['Mi', "I'm sad.", 'Mình buồn.'],
        ['Bin', 'How are you?', 'Bạn thấy thế nào?'],
        ['Mi', "I'm fine.", 'Mình ổn.'],
        GREAT,
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['happy', 'sad', 'angry', 'fine'] },
    sticker: ['🤗', 'Bạn thân thiện'],
    parent: {
      learned: 'happy, sad, angry, fine (ôn tập)',
      patterns: ["How are you? — I'm happy.", "Are you OK? — I'm fine."],
      tips: [
        'Bé đã đóng vai Mi trong hội thoại về cảm xúc.',
        'Đổi vai: bé hỏi "How are you?", bố mẹ trả lời.',
        'Khen bé khi bé dám nói cảm xúc thật của mình.',
      ],
    },
  }),
  make(U10, 4, {
    title: "Mi's Feelings Today",
    titleVi: 'Cảm xúc hôm nay của Mi',
    goal: 'Ôn 7 từ về cảm xúc qua truyện tranh và trò chơi tìm từ',
    words: ['happy', 'sad', 'angry', 'tired', 'hungry', 'scared', 'fine'],
    chant: {
      title: 'Feelings Review Chant',
      rhythm: 'Nhanh dần, đổi nét mặt theo từng từ',
      lines: [
        ['Happy, sad, angry too,', 'Vui, buồn, cả giận nữa,'],
        ['Tired, hungry — how are you?', 'Mệt, đói — bạn thấy thế nào?'],
        ['Scared or fine, I know,', 'Sợ hay ổn, mình đều biết,'],
        ["Let's talk feelings, let's go!", 'Cùng nói về cảm xúc nào!'],
      ],
    },
    say: [["I'm happy!", 'Mình vui!'], ["I'm hungry.", 'Mình đói.'], ["Now I'm fine!", 'Giờ mình ổn rồi!']],
    talk: {
      scene: 'Mi kể cho Pip nghe cảm xúc của mình hôm nay',
      roleplay: 'Mi',
      lines: [
        ['Pip', 'How are you, Mi?', 'Bạn thấy thế nào, Mi?'],
        ['Mi', "I'm happy!", 'Mình vui!'],
        ['Pip', 'Are you hungry?', 'Bạn có đói không?'],
        ['Mi', "Yes, I'm hungry.", 'Có, mình đói.'],
        ['Pip', 'Are you tired?', 'Bạn có mệt không?'],
        ['Mi', "Yes, I'm tired.", 'Có, mình mệt.'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['happy', 'sad', 'angry', 'tired', 'hungry', 'scared'] },
    story: {
      title: "Mi's Feelings Today",
      pages: [
        ['Mi', "I'm happy!", 'Mình vui!'],
        ['Mi', "I'm hungry.", 'Mình đói.'],
        ['Mi', "I'm tired.", 'Mình mệt.'],
        ['Mi', "Now I'm fine!", 'Giờ mình ổn rồi!'],
        ['Pip', 'Great job!', 'Giỏi lắm!'],
      ],
    },
    sticker: ['⭐', 'Ngôi sao cảm xúc'],
    parent: {
      learned: 'happy, sad, angry, tired, hungry, scared, fine',
      patterns: ["How are you? — I'm happy.", "Are you OK? — I'm fine."],
      tips: [
        'Bé đã hoàn thành chủ đề Feelings với 7 từ về cảm xúc.',
        'Hỏi bé về cảm xúc mỗi ngày và khuyến khích bé trả lời bằng tiếng Anh.',
        'Đọc lại truyện "Mi\'s Feelings Today" cùng bé.',
      ],
    },
  }),
];

/* ═════════════════════════ L1-U11 · Clothes ═════════════════════════ */
const U11 = 'L1-U11';
export const CLOTHES = [
  make(U11, 1, {
    title: 'T-shirt, Pants, Dress',
    titleVi: 'Áo thun, quần dài, váy',
    goal: "Bé nhận biết T-shirt, pants, dress và nói: What's this? — It's a T-shirt.",
    words: ['tshirt', 'pants', 'dress'],
    extras: ['jacket', 'socks'],
    chant: {
      title: 'Get Dressed Chant',
      rhythm: 'Vui tươi, chỉ vào đồ mình đang mặc khi hát',
      lines: [
        ['T-shirt, T-shirt, this is my T-shirt!', 'Áo thun ơi, đây là áo thun của mình!'],
        ['Pants, pants, these are my pants!', 'Quần ơi, đây là quần của mình!'],
        ['Dress, dress, look at my dress!', 'Váy ơi, nhìn váy của mình này!'],
        ["Let's get dressed!", 'Cùng mặc đồ nào!'],
      ],
    },
    say: [["What's this?", 'Đây là gì?'], ["It's a T-shirt.", 'Đó là áo thun.'], ["It's a dress.", 'Đó là cái váy.']],
    talk: {
      scene: 'Phòng ngủ — Mi và Bin chọn quần áo buổi sáng',
      roleplay: 'Mi',
      lines: [
        ['Mi', "What's this?", 'Đây là gì?'],
        ['Bin', "It's a T-shirt.", 'Đó là áo thun.'],
        ['Mi', "And what's this?", 'Còn đây là gì?'],
        ['Bin', "It's a dress.", 'Đó là cái váy.'],
        ['Pip', 'Great job, Mi!', 'Giỏi lắm Mi!'],
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['tshirt', 'pants', 'dress', 'jacket'] },
    sticker: ['👕', 'Áo thun xinh'],
    parent: {
      learned: 'T-shirt, pants, dress',
      patterns: ["What's this? — It's a T-shirt."],
      tips: [
        'Bé đã biết gọi tên 3 món quần áo đầu tiên bằng tiếng Anh.',
        'Khi mặc đồ cho bé, hỏi "What\'s this?" và để bé trả lời.',
        'Cho bé tự chỉ và nói tên món đồ mình đang mặc.',
      ],
    },
  }),
  make(U11, 2, {
    title: 'Jacket, Socks, Shoes',
    titleVi: 'Áo khoác, tất, giày',
    goal: 'Bé nhận biết jacket, socks, shoes và nói: This is my jacket.',
    words: ['jacket', 'socks', 'shoes'],
    extras: ['tshirt', 'pants', 'dress'],
    chant: {
      title: 'Jacket & Shoes Chant',
      rhythm: 'Giậm chân nhẹ theo nhịp khi hát đến "shoes"',
      lines: [
        ['Jacket, jacket, I have a jacket!', 'Áo khoác ơi, mình có áo khoác!'],
        ['Socks, socks, these are my socks!', 'Tất ơi, đây là đôi tất của mình!'],
        ['Shoes, shoes, put on my shoes!', 'Giày ơi, mang giày vào nào!'],
        ["Let's go!", 'Đi thôi!'],
      ],
    },
    say: [['This is my jacket.', 'Đây là áo khoác của mình.'], ['These are my socks.', 'Đây là đôi tất của mình.'], ['These are my shoes.', 'Đây là đôi giày của mình.']],
    talk: {
      scene: 'Cửa nhà — Mi và Bin chuẩn bị ra ngoài',
      roleplay: 'Bin',
      lines: [
        ['Mi', 'Look at my jacket!', 'Nhìn áo khoác của mình này!'],
        ['Bin', "What's this?", 'Đây là gì?'],
        ['Mi', 'These are my socks.', 'Đây là đôi tất của mình.'],
        ['Bin', 'And what are these?', 'Còn đây là gì?'],
        ['Mi', 'These are my shoes.', 'Đây là đôi giày của mình.'],
        ['Bin', "Let's go!", 'Đi thôi!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['jacket', 'socks', 'shoes', 'dress'] },
    sticker: ['🧥', 'Áo khoác ấm'],
    parent: {
      learned: 'jacket, socks, shoes',
      patterns: ['This is my jacket.', 'These are my socks.'],
      tips: [
        'Bé đã học thêm 3 món: jacket, socks, shoes.',
        'Khi mang giày tất cho bé, nói "Socks and shoes!".',
        'Để bé chỉ vào đồ trong tủ và gọi tên.',
      ],
    },
  }),
  make(U11, 3, {
    title: 'What Color Is It?',
    titleVi: 'Nó màu gì?',
    goal: 'Bé hỏi – đáp về quần áo và màu sắc: What color is it? — It\'s red.',
    words: ['tshirt', 'pants', 'dress', 'jacket'],
    extras: ['red', 'blue', 'yellow', 'green'],
    chant: {
      title: 'What Color Is It? Chant',
      rhythm: 'Hỏi – đáp: nhóm một hỏi, nhóm hai trả lời',
      lines: [
        ['What color is it? Red!', 'Nó màu gì? Màu đỏ!'],
        ['A red T-shirt!', 'Một cái áo thun đỏ!'],
        ['What color is it? Blue!', 'Nó màu gì? Màu xanh!'],
        ['Blue pants for me and you!', 'Quần xanh cho bạn và mình!'],
      ],
    },
    say: [['What color is it?', 'Nó màu gì?'], ["It's red.", 'Nó màu đỏ.'], ['Is this your jacket?', 'Đây có phải áo khoác của bạn không?']],
    talk: {
      scene: 'Phòng thay đồ — Mi hỏi Bin về quần áo',
      roleplay: 'Mi',
      lines: [
        ['Mi', "What's this?", 'Đây là gì?'],
        ['Bin', "It's a T-shirt.", 'Đó là áo thun.'],
        ['Mi', 'What color is it?', 'Nó màu gì?'],
        ['Bin', "It's red.", 'Nó màu đỏ.'],
        ['Mi', 'Is this your jacket?', 'Đây có phải áo khoác của bạn không?'],
        ['Bin', 'Yes, it is.', 'Đúng vậy.'],
        GREAT,
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['tshirt', 'pants', 'dress', 'jacket'] },
    sticker: ['🌈', 'Tủ đồ nhiều màu'],
    parent: {
      learned: 'T-shirt, pants, dress, jacket (ôn tập)',
      patterns: ["What's this? — It's a T-shirt.", "What color is it? — It's red.", 'Is this your jacket? — Yes, it is.'],
      tips: [
        'Bé đã kết hợp tên quần áo với màu sắc đã học ở Unit 3.',
        'Chỉ vào đồ của bé và hỏi "What color is it?".',
        'Đổi vai để bé là người đặt câu hỏi.',
      ],
    },
  }),
  make(U11, 4, {
    title: 'A Rainy Day',
    titleVi: 'Một ngày mưa',
    goal: 'Ôn 6 món quần áo qua truyện tranh và trò chơi tìm đồ',
    words: ['tshirt', 'pants', 'dress', 'jacket', 'socks', 'shoes'],
    chant: {
      title: 'Clothes Review Chant',
      rhythm: 'Rộn ràng, nhún nhảy như đang chọn đồ',
      lines: [
        ['T-shirt, pants, jacket too!', 'Áo thun, quần dài, cả áo khoác nữa!'],
        ['Socks and shoes for me and you!', 'Tất và giày cho bạn và mình!'],
        ['What are you wearing? Look and see!', 'Bạn đang mặc gì? Nhìn xem nào!'],
        ["Let's get dressed, one, two, three!", 'Cùng mặc đồ nào, một, hai, ba!'],
      ],
    },
    say: [["It's rainy today.", 'Hôm nay trời mưa.'], ['Here is my jacket.', 'Áo khoác của mình đây.'], ["I'm ready! Let's go!", 'Mình sẵn sàng rồi! Đi thôi!']],
    talk: {
      scene: 'Trước cửa nhà — trời mưa, Mi và Bin chọn đồ',
      roleplay: 'Bin',
      lines: [
        ['Mi', "It's rainy today.", 'Hôm nay trời mưa.'],
        ['Bin', "What's this?", 'Đây là gì?'],
        ['Mi', "It's a jacket.", 'Đó là áo khoác.'],
        ['Bin', 'Is this your jacket?', 'Đây có phải áo khoác của bạn không?'],
        ['Mi', 'Yes, it is.', 'Đúng vậy.'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['tshirt', 'pants', 'dress', 'jacket', 'socks', 'shoes'] },
    story: {
      title: 'A Rainy Day',
      pages: [
        ['Mi', "It's rainy today.", 'Hôm nay trời mưa.'],
        ['Bin', 'Here is my jacket.', 'Áo khoác của mình đây.'],
        ['Mi', "Now I'm ready! Let's go!", 'Giờ mình sẵn sàng rồi! Đi thôi!'],
        ['Pip', 'Great job!', 'Giỏi lắm!'],
      ],
    },
    sticker: ['👗', 'Bé mặc đẹp'],
    parent: {
      learned: 'T-shirt, pants, dress, jacket, socks, shoes',
      patterns: ["What's this? — It's a T-shirt.", "What color is it? — It's red.", "Let's go!"],
      tips: [
        'Bé đã hoàn thành chủ đề Clothes với 6 món quần áo.',
        'Hỏi bé "What\'s this?" khi cùng chọn quần áo mỗi ngày.',
        'Đọc lại truyện "A Rainy Day" cùng bé.',
      ],
    },
  }),
];

/* ═════════════════════════ L1-U12 · My House ═════════════════════════ */
const U12 = 'L1-U12';
export const HOUSE = [
  make(U12, 1, {
    title: 'Bedroom, Kitchen, Bathroom, Living Room',
    titleVi: 'Các phòng trong nhà',
    goal: "Bé nhận biết bedroom, kitchen, bathroom, living room và nói: It's the kitchen.",
    words: ['bedroom', 'kitchen', 'bathroom', 'livingroom'],
    extras: ['cat'],
    chant: {
      title: 'My House Chant',
      rhythm: 'Vui tươi, dang tay như đang giới thiệu ngôi nhà',
      lines: [
        ['Bedroom, bedroom — sleep at night!', 'Phòng ngủ — ngủ vào ban đêm!'],
        ['Kitchen, kitchen — food is nice!', 'Nhà bếp — đồ ăn ngon!'],
        ['Bathroom, bathroom — wash and clean!', 'Phòng tắm — tắm rửa sạch sẽ!'],
        ['Living room — our cozy scene!', 'Phòng khách — cả nhà ấm cúng!'],
      ],
    },
    say: [['This is the kitchen.', 'Đây là nhà bếp.'], ['This is the bedroom.', 'Đây là phòng ngủ.'], ["Let's go to the bathroom.", 'Cùng vào phòng tắm nào.']],
    talk: {
      scene: 'Mi dẫn Bin đi thăm nhà',
      roleplay: 'Mi',
      lines: [
        ['Mi', 'Welcome to my house!', 'Chào mừng đến nhà mình!'],
        ['Bin', "What's this?", 'Đây là gì?'],
        ['Mi', "It's the kitchen.", 'Đó là nhà bếp.'],
        ['Bin', "And what's this?", 'Còn đây là gì?'],
        ['Mi', "It's the bedroom.", 'Đó là phòng ngủ.'],
        ['Pip', 'Great job, Mi!', 'Giỏi lắm Mi!'],
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['bedroom', 'kitchen', 'bathroom', 'livingroom'] },
    sticker: ['🏠', 'Ngôi nhà thân yêu'],
    parent: {
      learned: 'bedroom, kitchen, bathroom, living room',
      patterns: ["What's this? — It's the kitchen."],
      tips: [
        'Bé đã biết gọi tên 4 phòng trong nhà bằng tiếng Anh.',
        'Dắt bé đi quanh nhà và hỏi "What\'s this?" ở mỗi phòng.',
        'Khi vào bếp, nhắc "kitchen"; khi đi ngủ, nhắc "bedroom".',
      ],
    },
  }),
  make(U12, 2, {
    title: 'In, On, Under',
    titleVi: 'Trong, trên, dưới',
    goal: 'Bé hiểu in, on, under và nói: The cat is under the table.',
    words: ['in', 'on', 'under'],
    extras: ['cat', 'bedroom', 'kitchen'],
    chant: {
      title: 'In, On, Under Chant',
      rhythm: 'Dùng tay làm động tác: vào trong, lên trên, xuống dưới',
      lines: [
        ['In, in, in the box!', 'Trong, trong, trong cái hộp!'],
        ['On, on, on the table!', 'Trên, trên, trên cái bàn!'],
        ['Under, under, under the chair!', 'Dưới, dưới, dưới cái ghế!'],
        ["Where's the cat? Look around!", 'Con mèo ở đâu? Nhìn quanh xem!'],
      ],
    },
    say: [["Where's the cat?", 'Con mèo ở đâu?'], ["It's under the table.", 'Nó ở dưới gầm bàn.'], ["It's on the sofa.", 'Nó ở trên ghế sofa.']],
    talk: {
      scene: 'Phòng khách — Mi và Bin tìm con mèo',
      roleplay: 'Bin',
      lines: [
        ['Mi', "Where's the cat?", 'Con mèo ở đâu?'],
        ['Bin', "It's under the table.", 'Nó ở dưới gầm bàn.'],
        ['Mi', "Where's the cat now?", 'Giờ con mèo ở đâu?'],
        ['Bin', "It's on the sofa.", 'Nó ở trên ghế sofa.'],
        ['Mi', 'And now?', 'Còn bây giờ?'],
        ['Bin', "It's in the box!", 'Nó ở trong cái hộp!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['in', 'on', 'under', 'cat'] },
    sticker: ['📦', 'Thám tử nhí'],
    parent: {
      learned: 'in, on, under',
      patterns: ["Where's the cat? — It's under the table."],
      tips: [
        'Bé đã học 3 giới từ chỉ vị trí: in, on, under.',
        'Giấu một món đồ chơi và hỏi bé "Where is it?".',
        'Cho bé tự đặt đồ vào trong, trên, dưới hộp và nói to.',
      ],
    },
  }),
  make(U12, 3, {
    title: "Where's the Cat?",
    titleVi: 'Con mèo ở đâu?',
    goal: 'Bé đóng vai Mi, hỏi – đáp về vị trí của con mèo trong nhà',
    words: ['in', 'on', 'under', 'livingroom'],
    extras: ['cat', 'bedroom', 'kitchen', 'bathroom'],
    chant: {
      title: "Where's the Cat? Chant",
      rhythm: 'Hỏi – đáp: nhóm một hỏi, nhóm hai trả lời',
      lines: [
        ["Where's the cat? Where's the cat?", 'Con mèo ở đâu? Con mèo ở đâu?'],
        ["It's in the bedroom!", 'Nó ở trong phòng ngủ!'],
        ["Where's the cat? Where's the cat?", 'Con mèo ở đâu? Con mèo ở đâu?'],
        ["It's under the table!", 'Nó ở dưới gầm bàn!'],
      ],
    },
    say: [["Where's the cat?", 'Con mèo ở đâu?'], ["It's in the bedroom.", 'Nó ở trong phòng ngủ.'], ["It's on the sofa.", 'Nó ở trên ghế sofa.']],
    talk: {
      scene: 'Cả ngôi nhà — Mi và Bin đi tìm mèo',
      roleplay: 'Mi',
      lines: [
        ['Mi', "Where's the cat?", 'Con mèo ở đâu?'],
        ['Bin', "It's under the table.", 'Nó ở dưới gầm bàn.'],
        ['Mi', "Where's the cat?", 'Con mèo ở đâu?'],
        ['Bin', "It's in the bedroom.", 'Nó ở trong phòng ngủ.'],
        ['Mi', "Where's the cat?", 'Con mèo ở đâu?'],
        ['Bin', "It's on the sofa.", 'Nó ở trên ghế sofa.'],
        GREAT,
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['in', 'on', 'under', 'livingroom'] },
    sticker: ['🐱', 'Bạn của chú mèo'],
    parent: {
      learned: 'in, on, under, living room (ôn tập)',
      patterns: ["Where's the cat?", "It's under the table.", "It's in the bedroom."],
      tips: [
        'Bé đã đóng vai Mi trong hội thoại 6 lượt về vị trí.',
        'Đổi vai để bé hỏi "Where\'s the cat?".',
        'Chơi trốn tìm đồ vật quanh nhà bằng tiếng Anh.',
      ],
    },
  }),
  make(U12, 4, {
    title: 'Where Is Kitty?',
    titleVi: 'Mèo con ở đâu?',
    goal: 'Ôn 7 từ về ngôi nhà qua truyện tranh và trò chơi tìm từ',
    words: ['bedroom', 'kitchen', 'bathroom', 'livingroom', 'in', 'on', 'under'],
    chant: {
      title: 'My House Review Chant',
      rhythm: 'Nhanh dần, chỉ vào từng phòng khi hát',
      lines: [
        ['Bedroom, kitchen, bathroom too,', 'Phòng ngủ, nhà bếp, phòng tắm nữa,'],
        ['Living room — I love you!', 'Phòng khách — mình yêu bạn!'],
        ['In, on, under, all around!', 'Trong, trên, dưới, khắp mọi nơi!'],
        ['The happiest home that can be found!', 'Ngôi nhà hạnh phúc nhất trên đời!'],
      ],
    },
    say: [['Kitty is in the bedroom.', 'Mèo con ở trong phòng ngủ.'], ['Kitty is under the table.', 'Mèo con ở dưới gầm bàn.'], ['Here you are, Kitty!', 'Mèo con đây rồi!']],
    talk: {
      scene: 'Mi và Bin cùng đi tìm mèo con Kitty',
      roleplay: 'Bin',
      lines: [
        ['Mi', "Where's Kitty?", 'Mèo con ở đâu?'],
        ['Bin', "It's in the bedroom.", 'Nó ở trong phòng ngủ.'],
        ['Mi', 'And now?', 'Còn bây giờ?'],
        ['Bin', "It's on the sofa.", 'Nó ở trên ghế sofa.'],
        ['Mi', 'And now?', 'Còn bây giờ?'],
        ['Bin', "It's under the table.", 'Nó ở dưới gầm bàn.'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['bedroom', 'kitchen', 'bathroom', 'livingroom'] },
    story: {
      title: 'Where Is Kitty?',
      pages: [
        ['Pip', 'Kitty is in the bedroom.', 'Mèo con ở trong phòng ngủ.'],
        ['Pip', 'Kitty is on the sofa.', 'Mèo con ở trên ghế sofa.'],
        ['Pip', 'Kitty is under the table.', 'Mèo con ở dưới gầm bàn.'],
        ['Mi', 'Here you are, Kitty!', 'Mèo con đây rồi!'],
      ],
    },
    sticker: ['🛋️', 'Nhà ấm cúng'],
    parent: {
      learned: 'bedroom, kitchen, bathroom, living room, in, on, under',
      patterns: ["Where's the cat?", "It's under the table.", "It's in the bedroom."],
      tips: [
        'Bé đã hoàn thành chủ đề My House với 7 từ.',
        'Hỏi bé đồ vật đang ở đâu trong nhà: "Where is it?".',
        'Đọc lại truyện "Where Is Kitty?" cùng bé.',
      ],
    },
  }),
];

/* ═════════════════════════ L1-U13 · Weather ═════════════════════════ */
const U13 = 'L1-U13';
export const WEATHER = [
  make(U13, 1, {
    title: 'Sunny, Cloudy, Rainy',
    titleVi: 'Nắng, nhiều mây, mưa',
    goal: "Bé nhận biết sunny, cloudy, rainy và nói: It's sunny today.",
    words: ['sunny', 'cloudy', 'rainy'],
    extras: ['snowy', 'windy'],
    chant: {
      title: 'Weather Chant',
      rhythm: 'Vui tươi, vẽ mặt trời, đám mây và hạt mưa bằng tay',
      lines: [
        ["Sunny, sunny, it's sunny!", 'Nắng ơi, trời nắng rồi!'],
        ["Cloudy, cloudy, it's cloudy!", 'Mây ơi, trời nhiều mây!'],
        ["Rainy, rainy, it's rainy!", 'Mưa ơi, trời mưa rồi!'],
        ["What's the weather? Look outside!", 'Thời tiết thế nào? Nhìn ra ngoài xem!'],
      ],
    },
    say: [["What's the weather?", 'Thời tiết thế nào?'], ["It's sunny.", 'Trời nắng.'], ["It's rainy.", 'Trời mưa.']],
    talk: {
      scene: 'Bên cửa sổ — Mi và Bin nhìn thời tiết',
      roleplay: 'Mi',
      lines: [
        ['Mi', "What's the weather?", 'Thời tiết thế nào?'],
        ['Bin', "It's cloudy.", 'Trời nhiều mây.'],
        ['Mi', 'And now?', 'Còn bây giờ?'],
        ['Bin', "It's rainy.", 'Trời mưa.'],
        ['Pip', 'Great job, Mi!', 'Giỏi lắm Mi!'],
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['sunny', 'cloudy', 'rainy', 'windy'] },
    sticker: ['☀️', 'Bé yêu nắng'],
    parent: {
      learned: 'sunny, cloudy, rainy',
      patterns: ["What's the weather? — It's sunny."],
      tips: [
        'Bé đã biết 3 kiểu thời tiết phổ biến bằng tiếng Anh.',
        'Mỗi sáng cùng bé nhìn ra cửa sổ và hỏi "What\'s the weather?".',
        'Cho bé vẽ mặt trời, mây và mưa rồi nói tên từng hình.',
      ],
    },
  }),
  make(U13, 2, {
    title: 'Snowy, Windy, Rainbow',
    titleVi: 'Tuyết, gió, cầu vồng',
    goal: "Bé nhận biết snowy, windy, rainbow và nói: It's windy.",
    words: ['snowy', 'windy', 'rainbow'],
    extras: ['sunny', 'cloudy', 'rainy'],
    chant: {
      title: 'Snowy & Windy Chant',
      rhythm: 'Nhẹ nhàng như tuyết rơi, rồi vung tay như gió thổi',
      lines: [
        ["Snowy, snowy, it's snowy!", 'Tuyết ơi, trời có tuyết!'],
        ["Windy, windy, it's windy!", 'Gió ơi, trời nổi gió!'],
        ['Rainbow, rainbow, look up high!', 'Cầu vồng ơi, nhìn lên cao!'],
        ['A rainbow in the sky!', 'Cầu vồng trên bầu trời!'],
      ],
    },
    say: [["It's snowy.", 'Trời có tuyết.'], ["It's windy.", 'Trời có gió.'], ['Look! A rainbow!', 'Nhìn kìa! Cầu vồng!']],
    talk: {
      scene: 'Ngoài sân — Mi và Bin ngắm bầu trời',
      roleplay: 'Bin',
      lines: [
        ['Mi', "What's the weather?", 'Thời tiết thế nào?'],
        ['Bin', "It's windy.", 'Trời có gió.'],
        ['Mi', 'Look at the sky!', 'Nhìn bầu trời kìa!'],
        ['Bin', 'Look! A rainbow!', 'Nhìn kìa! Cầu vồng!'],
        ['Mi', 'Wow! So beautiful!', 'Ôi! Đẹp quá!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['snowy', 'windy', 'rainbow', 'sunny'] },
    sticker: ['🌈', 'Cầu vồng xinh'],
    parent: {
      learned: 'snowy, windy, rainbow',
      patterns: ["It's windy.", 'Look! A rainbow!'],
      tips: [
        'Bé đã học thêm 3 từ về thời tiết.',
        'Khi trời có gió, nhắc bé nói "It\'s windy".',
        'Sau cơn mưa, cùng bé tìm cầu vồng và nói "Look! A rainbow!".',
      ],
    },
  }),
  make(U13, 3, {
    title: 'Is It Raining?',
    titleVi: 'Trời đang mưa à?',
    goal: "Bé hỏi – đáp: Is it rainy? — Yes, it is. / No, it isn't.",
    words: ['sunny', 'cloudy', 'rainy', 'snowy'],
    extras: ['windy', 'rainbow'],
    chant: {
      title: 'Is It Raining? Chant',
      rhythm: 'Hỏi – đáp: nhóm một hỏi, nhóm hai trả lời',
      lines: [
        ['Is it raining? Yes, it is!', 'Trời đang mưa à? Đúng vậy!'],
        ['Is it snowy? No, it isn\'t!', 'Có tuyết không? Không có!'],
        ['Is it sunny? Yes, it is!', 'Trời nắng à? Đúng vậy!'],
        ['Look outside!', 'Nhìn ra ngoài xem!'],
      ],
    },
    say: [['Is it raining?', 'Trời đang mưa à?'], ['Yes, it is.', 'Đúng vậy.'], ["No, it isn't.", 'Không phải.']],
    talk: {
      scene: 'Phòng khách — Mi và Bin đoán thời tiết bên ngoài',
      roleplay: 'Mi',
      lines: [
        ['Mi', "What's the weather?", 'Thời tiết thế nào?'],
        ['Bin', "It's cloudy.", 'Trời nhiều mây.'],
        ['Mi', 'Is it raining?', 'Trời đang mưa à?'],
        ['Bin', 'Yes, it is.', 'Đúng vậy.'],
        ['Mi', 'Is it snowy?', 'Có tuyết không?'],
        ['Bin', "No, it isn't.", 'Không có.'],
        GREAT,
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['sunny', 'cloudy', 'rainy', 'snowy'] },
    sticker: ['🌦️', 'Bé dự báo thời tiết'],
    parent: {
      learned: 'sunny, cloudy, rainy, snowy (ôn tập)',
      patterns: ['Is it raining? — Yes, it is.', "Is it snowy? — No, it isn't."],
      tips: [
        'Bé đã luyện câu hỏi Yes/No về thời tiết.',
        'Hỏi bé "Is it sunny?" khi nhìn ra ngoài.',
        'Khuyến khích bé trả lời cả câu "Yes, it is." hoặc "No, it isn\'t.".',
      ],
    },
  }),
  make(U13, 4, {
    title: 'A Rainbow Day',
    titleVi: 'Ngày cầu vồng',
    goal: 'Ôn 6 từ về thời tiết qua truyện tranh và trò chơi tìm từ',
    words: ['sunny', 'cloudy', 'rainy', 'snowy', 'windy', 'rainbow'],
    chant: {
      title: 'Weather Review Chant',
      rhythm: 'Nhanh dần, đổi động tác theo từng kiểu thời tiết',
      lines: [
        ['Sunny, rainy, cloudy, cold!', 'Nắng, mưa, nhiều mây, lạnh!'],
        ['A colorful rainbow bright and bold!', 'Cầu vồng rực rỡ sắc màu!'],
        ["Whatever the weather, let's learn and play,", 'Thời tiết thế nào cũng cùng học và chơi,'],
        ["It's a beautiful day!", 'Một ngày thật đẹp!'],
      ],
    },
    say: [["It's rainy today.", 'Hôm nay trời mưa.'], ['Look! A rainbow!', 'Nhìn kìa! Cầu vồng!'], ["It's a beautiful day!", 'Một ngày thật đẹp!']],
    talk: {
      scene: 'Sau cơn mưa — Mi và Bin tìm thấy cầu vồng',
      roleplay: 'Bin',
      lines: [
        ['Mi', "What's the weather?", 'Thời tiết thế nào?'],
        ['Bin', "It's rainy today.", 'Hôm nay trời mưa.'],
        ['Mi', 'Look at the sky!', 'Nhìn lên trời kìa!'],
        ['Bin', 'Look! A rainbow!', 'Nhìn kìa! Cầu vồng!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['sunny', 'cloudy', 'rainy', 'snowy', 'windy', 'rainbow'] },
    story: {
      title: 'A Rainbow Day',
      pages: [
        ['Mi', "It's rainy today.", 'Hôm nay trời mưa.'],
        ['Bin', 'Look! A rainbow!', 'Nhìn kìa! Cầu vồng!'],
        ['Mi', "It's a beautiful day!", 'Một ngày thật đẹp!'],
        ['Pip', 'Great job!', 'Giỏi lắm!'],
      ],
    },
    sticker: ['🌤️', 'Ngày đẹp trời'],
    parent: {
      learned: 'sunny, cloudy, rainy, snowy, windy, rainbow',
      patterns: ["What's the weather? — It's sunny.", 'Is it raining? — Yes, it is.', "Let's go outside!"],
      tips: [
        'Bé đã hoàn thành chủ đề Weather với 6 từ.',
        'Cùng bé nói về thời tiết mỗi ngày: "What\'s the weather today?".',
        'Đọc lại truyện "A Rainbow Day" cùng bé.',
      ],
    },
  }),
];

/* ═════════════════════════ L1-U14 · Fruits ═════════════════════════ */
const U14 = 'L1-U14';
export const FRUITS = [
  make(U14, 1, {
    title: 'Apple, Banana, Orange',
    titleVi: 'Táo, chuối, cam',
    goal: "Bé nhận biết apple, banana, orange và nói: What's this? — It's an apple.",
    words: ['apple', 'banana', 'orangefruit'],
    extras: ['grapes', 'strawberry'],
    chant: {
      title: 'Fruits Chant',
      rhythm: 'Vui tươi, giả vờ cắn một miếng khi hát',
      lines: [
        ['Apple, apple, red and sweet!', 'Táo ơi, đỏ và ngọt!'],
        ['Banana, banana, yellow treat!', 'Chuối ơi, món ngon màu vàng!'],
        ['Orange, orange, round and nice!', 'Cam ơi, tròn và ngon!'],
        ["I like fruits, they're yummy, yummy!", 'Mình thích trái cây, ngon ơi là ngon!'],
      ],
    },
    say: [["What's this?", 'Đây là gì?'], ["It's an apple.", 'Đó là quả táo.'], ["It's a banana.", 'Đó là quả chuối.']],
    talk: {
      scene: 'Gian bếp — Mi và Bin nhìn rổ trái cây',
      roleplay: 'Mi',
      lines: [
        ['Mi', "What's this?", 'Đây là gì?'],
        ['Bin', "It's an apple.", 'Đó là quả táo.'],
        ['Mi', "And what's this?", 'Còn đây là gì?'],
        ['Bin', "It's a banana.", 'Đó là quả chuối.'],
        ['Pip', 'Great job, Mi!', 'Giỏi lắm Mi!'],
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['apple', 'banana', 'orangefruit', 'grapes'] },
    sticker: ['🍎', 'Bé thích trái cây'],
    parent: {
      learned: 'apple, banana, orange',
      patterns: ["What's this? — It's an apple."],
      tips: [
        'Bé đã biết gọi tên 3 loại trái cây quen thuộc bằng tiếng Anh.',
        'Khi ăn trái cây, hỏi bé "What\'s this?".',
        'Chú ý "an apple" và "an orange" (bắt đầu bằng nguyên âm).',
      ],
    },
  }),
  make(U14, 2, {
    title: 'Grapes, Watermelon, Strawberry',
    titleVi: 'Nho, dưa hấu, dâu tây',
    goal: 'Bé nhận biết grapes, watermelon, strawberry và nói: I like strawberries.',
    words: ['grapes', 'watermelon', 'strawberry'],
    extras: ['apple', 'banana', 'orangefruit'],
    chant: {
      title: 'Grapes & Watermelon Chant',
      rhythm: 'Giòn giã, vỗ tay như tiếng cắn trái cây',
      lines: [
        ['Grapes, grapes, purple surprise!', 'Nho ơi, màu tím thật bất ngờ!'],
        ['Watermelon, big and green!', 'Dưa hấu ơi, to và xanh!'],
        ['Strawberry, strawberry, red and sweet!', 'Dâu tây ơi, đỏ và ngọt!'],
        ['Crunch, crunch, chew, chew!', 'Rộp rộp, nhai nhai!'],
      ],
    },
    say: [['I like grapes.', 'Mình thích nho.'], ['I like watermelon.', 'Mình thích dưa hấu.'], ['I like strawberries.', 'Mình thích dâu tây.']],
    talk: {
      scene: 'Chợ trái cây — Mi và Bin chọn mua',
      roleplay: 'Bin',
      lines: [
        ['Mi', 'Look! Grapes!', 'Nhìn kìa! Nho!'],
        ['Bin', "What's this?", 'Đây là gì?'],
        ['Mi', "It's a watermelon.", 'Đó là quả dưa hấu.'],
        ['Bin', "Wow, it's big!", 'Ôi, to quá!'],
        ['Mi', 'I like strawberries!', 'Mình thích dâu tây!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['grapes', 'watermelon', 'strawberry', 'apple'] },
    sticker: ['🍓', 'Dâu tây ngọt'],
    parent: {
      learned: 'grapes, watermelon, strawberry',
      patterns: ['I like grapes.', 'I like strawberries.'],
      tips: [
        'Bé đã học thêm 3 loại trái cây.',
        'Khi đi chợ, để bé chỉ và gọi tên loại bé thích.',
        'Khuyến khích bé nói "I like ..." với loại trái cây yêu thích.',
      ],
    },
  }),
  make(U14, 3, {
    title: 'Do You Like Bananas?',
    titleVi: 'Bạn có thích chuối không?',
    goal: "Bé hỏi – đáp: Do you like bananas? — Yes, I do. / No, I don't.",
    words: ['apple', 'banana', 'grapes', 'strawberry'],
    extras: ['orangefruit', 'watermelon'],
    chant: {
      title: 'Do You Like...? Chant',
      rhythm: 'Hỏi – đáp: nhóm một hỏi, nhóm hai trả lời',
      lines: [
        ['Do you like bananas? Yes, I do!', 'Bạn có thích chuối không? Có chứ!'],
        ["Do you like grapes? No, I don't!", 'Bạn có thích nho không? Không!'],
        ['Do you like apples? Yes, I do!', 'Bạn có thích táo không? Có chứ!'],
        ['Yummy, yummy fruits!', 'Trái cây ngon ơi là ngon!'],
      ],
    },
    say: [['Do you like bananas?', 'Bạn có thích chuối không?'], ['Yes, I do!', 'Có, mình thích!'], ["No, I don't.", 'Không, mình không thích.']],
    talk: {
      scene: 'Bàn ăn — Mi và Bin hỏi nhau thích gì',
      roleplay: 'Mi',
      lines: [
        ['Mi', "What's this?", 'Đây là gì?'],
        ['Bin', "It's an apple.", 'Đó là quả táo.'],
        ['Mi', 'Do you like bananas?', 'Bạn có thích chuối không?'],
        ['Bin', 'Yes, I do!', 'Có, mình thích!'],
        ['Mi', 'Do you like grapes?', 'Bạn có thích nho không?'],
        ['Bin', "No, I don't.", 'Không, mình không thích.'],
        GREAT,
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['apple', 'banana', 'grapes', 'strawberry'] },
    sticker: ['🍇', 'Thám tử trái cây'],
    parent: {
      learned: 'apple, banana, grapes, strawberry (ôn tập)',
      patterns: ['Do you like bananas? — Yes, I do.', "Do you like grapes? — No, I don't."],
      tips: [
        'Bé đã luyện hỏi – đáp về sở thích trái cây.',
        'Hỏi bé "Do you like ...?" khi ăn và để bé trả lời Yes/No.',
        'Cho bé thoải mái nói "No, I don\'t" — nói thật cũng là giỏi.',
      ],
    },
  }),
  make(U14, 4, {
    title: 'A Picnic Day',
    titleVi: 'Ngày dã ngoại',
    goal: 'Ôn 6 loại trái cây qua truyện tranh và trò chơi tìm từ',
    words: ['apple', 'banana', 'orangefruit', 'grapes', 'watermelon', 'strawberry'],
    chant: {
      title: 'Fruits Review Chant',
      rhythm: 'Nhanh dần, vỗ tay theo từng loại trái cây',
      lines: [
        ['Apples, bananas, watermelon green,', 'Táo, chuối, dưa hấu xanh,'],
        ['Sweetest fruits you have ever seen!', 'Trái cây ngọt nhất bạn từng thấy!'],
        ['Crunch, crunch, chew, chew,', 'Rộp rộp, nhai nhai,'],
        ['Fruits are good for me and you!', 'Trái cây tốt cho bạn và mình!'],
      ],
    },
    say: [['We have many fruits!', 'Chúng mình có nhiều trái cây!'], ['I like strawberries!', 'Mình thích dâu tây!'], ["It's so yummy!", 'Ngon quá!']],
    talk: {
      scene: 'Bãi cỏ xanh — Mi và Bin đi dã ngoại',
      roleplay: 'Bin',
      lines: [
        ['Mi', 'Look! We have many fruits!', 'Nhìn này! Chúng mình có nhiều trái cây!'],
        ['Bin', "What's this?", 'Đây là gì?'],
        ['Mi', "It's a strawberry.", 'Đó là quả dâu tây.'],
        ['Bin', 'Do you like strawberries?', 'Bạn có thích dâu tây không?'],
        ['Mi', 'Yes, I do!', 'Có, mình thích!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['apple', 'banana', 'orangefruit', 'grapes', 'watermelon', 'strawberry'] },
    story: {
      title: 'A Picnic Day',
      pages: [
        ['Mi', 'Look! We have many fruits!', 'Nhìn này! Chúng mình có nhiều trái cây!'],
        ['Mi', 'I like strawberries!', 'Mình thích dâu tây!'],
        ['Bin', "It's so yummy!", 'Ngon quá!'],
        ['Pip', 'Great job!', 'Giỏi lắm!'],
      ],
    },
    sticker: ['🧺', 'Bữa tiệc trái cây'],
    parent: {
      learned: 'apple, banana, orange, grapes, watermelon, strawberry',
      patterns: ["What's this? — It's an apple.", 'Do you like bananas? — Yes, I do.', 'I like apples.'],
      tips: [
        'Bé đã hoàn thành chủ đề Fruits với 6 loại trái cây.',
        'Khuyến khích bé nói "I like..." và "I don\'t like...".',
        'Đọc lại truyện "A Picnic Day" cùng bé.',
      ],
    },
  }),
];

/* ═════════════════════════ L1-U15 · At the Zoo ═════════════════════════ */
const U15 = 'L1-U15';
export const ZOO = [
  make(U15, 1, {
    title: 'Elephant, Lion, Monkey',
    titleVi: 'Voi, sư tử, khỉ',
    goal: "Bé nhận biết elephant, lion, monkey và nói: What's this? — It's a lion.",
    words: ['elephant', 'lion', 'monkey'],
    extras: ['giraffe', 'panda'],
    chant: {
      title: 'Zoo Chant',
      rhythm: 'Vui tươi, bắt chước dáng đi của từng con vật',
      lines: [
        ['Look, look, at the zoo!', 'Nhìn kìa, nhìn kìa, ở sở thú!'],
        ['Elephant, lion, I see you!', 'Voi ơi, sư tử ơi, mình thấy bạn rồi!'],
        ['Monkey, monkey, swing, swing, swing!', 'Khỉ ơi, khỉ ơi, đu, đu, đu!'],
        ["Let's go, let's go, at the zoo!", 'Đi thôi, đi thôi, đến sở thú!'],
      ],
    },
    say: [["What's this?", 'Đây là con gì?'], ["It's an elephant.", 'Đó là con voi.'], ["It's a lion.", 'Đó là con sư tử.']],
    talk: {
      scene: 'Cổng sở thú — Mi và Bin xem các con vật',
      roleplay: 'Mi',
      lines: [
        ['Mi', "What's this?", 'Đây là con gì?'],
        ['Bin', "It's an elephant.", 'Đó là con voi.'],
        ['Mi', "And what's this?", 'Còn đây là con gì?'],
        ['Bin', "It's a lion.", 'Đó là con sư tử.'],
        ['Pip', 'Great job, Mi!', 'Giỏi lắm Mi!'],
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['elephant', 'lion', 'monkey', 'giraffe'] },
    sticker: ['🦁', 'Bạn của sư tử'],
    parent: {
      learned: 'elephant, lion, monkey',
      patterns: ["What's this? — It's a lion."],
      tips: [
        'Bé đã biết gọi tên 3 con vật ở sở thú bằng tiếng Anh.',
        'Cùng bé bắt chước tiếng gầm của sư tử và vòi voi.',
        'Chú ý "an elephant" (nguyên âm) và "a lion".',
      ],
    },
  }),
  make(U15, 2, {
    title: 'Giraffe, Zebra, Panda',
    titleVi: 'Hươu cao cổ, ngựa vằn, gấu trúc',
    goal: 'Bé nhận biết giraffe, zebra, panda và nói: This is a panda.',
    words: ['giraffe', 'zebra', 'panda'],
    extras: ['elephant', 'lion', 'monkey'],
    chant: {
      title: 'Giraffe & Panda Chant',
      rhythm: 'Vươn cao như hươu, rồi ngồi nhai tre như gấu trúc',
      lines: [
        ['Giraffe so tall, what a view!', 'Hươu cao cổ cao quá, nhìn xa ghê!'],
        ['Zebra, zebra, black and white!', 'Ngựa vằn ơi, sọc đen sọc trắng!'],
        ['Panda, panda, what a sight!', 'Gấu trúc ơi, đáng yêu quá!'],
        ['So many animals for me and you!', 'Thật nhiều con vật cho bạn và mình!'],
      ],
    },
    say: [['This is a giraffe.', 'Đây là hươu cao cổ.'], ['This is a zebra.', 'Đây là ngựa vằn.'], ['This is a panda.', 'Đây là gấu trúc.']],
    talk: {
      scene: 'Khu thú — Mi và Bin ngắm hươu, ngựa vằn',
      roleplay: 'Bin',
      lines: [
        ['Mi', 'Look at the giraffe!', 'Nhìn hươu cao cổ kìa!'],
        ['Bin', "It's so tall!", 'Cao quá!'],
        ['Mi', "What's this?", 'Đây là con gì?'],
        ['Bin', "It's a zebra.", 'Đó là con ngựa vằn.'],
        ['Mi', 'And this?', 'Còn đây?'],
        ['Bin', "It's a panda!", 'Đó là gấu trúc!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['giraffe', 'zebra', 'panda', 'lion'] },
    sticker: ['🐼', 'Bạn gấu trúc'],
    parent: {
      learned: 'giraffe, zebra, panda',
      patterns: ['This is a panda.', "It's a zebra."],
      tips: [
        'Bé đã học thêm 3 con vật: giraffe, zebra, panda.',
        'Cùng bé xem video hoặc ảnh động vật và gọi tên.',
        'Khuyến khích bé nói "I see a ..." khi nhìn thấy con vật.',
      ],
    },
  }),
  make(U15, 3, {
    title: 'Is This a Panda?',
    titleVi: 'Đây có phải gấu trúc không?',
    goal: 'Bé hỏi – đáp: Is this a panda? — Yes, it is.',
    words: ['elephant', 'monkey', 'panda', 'lion'],
    extras: ['giraffe', 'zebra'],
    chant: {
      title: 'Is This a...? Chant',
      rhythm: 'Hỏi – đáp: nhóm một hỏi, nhóm hai trả lời',
      lines: [
        ['Is this a monkey? Yes, it is!', 'Đây có phải con khỉ không? Đúng rồi!'],
        ['Is this a panda? Yes, it is!', 'Đây có phải gấu trúc không? Đúng rồi!'],
        ["What's this? It's an elephant!", 'Đây là con gì? Là con voi!'],
        ['Roar, roar — a lion!', 'Gầm gừ — sư tử!'],
      ],
    },
    say: [["What's this?", 'Đây là con gì?'], ['Is this a monkey?', 'Đây có phải con khỉ không?'], ['Yes, it is.', 'Đúng rồi.']],
    talk: {
      scene: 'Giữa sở thú — Mi đố Bin đoán con vật',
      roleplay: 'Mi',
      lines: [
        ['Mi', "What's this?", 'Đây là con gì?'],
        ['Bin', "It's an elephant.", 'Đó là con voi.'],
        ['Mi', 'Is this a monkey?', 'Đây có phải con khỉ không?'],
        ['Bin', 'Yes, it is.', 'Đúng rồi.'],
        ['Mi', 'Is this a panda?', 'Đây có phải gấu trúc không?'],
        ['Bin', 'Yes, it is.', 'Đúng rồi.'],
        GREAT,
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['elephant', 'monkey', 'panda', 'lion'] },
    sticker: ['🐘', 'Thám tử sở thú'],
    parent: {
      learned: 'elephant, lion, monkey, panda (ôn tập)',
      patterns: ["What's this? — It's an elephant.", 'Is this a panda? — Yes, it is.'],
      tips: [
        'Bé đã luyện câu hỏi Yes/No về con vật.',
        'Chỉ vào ảnh con vật và hỏi "Is this a ...?".',
        'Thỉnh thoảng cố ý hỏi sai để bé nói "No, it isn\'t!".',
      ],
    },
  }),
  make(U15, 4, {
    title: 'A Day at the Zoo',
    titleVi: 'Một ngày ở sở thú',
    goal: 'Ôn 6 con vật ở sở thú qua truyện tranh và trò chơi tìm từ',
    words: ['elephant', 'lion', 'monkey', 'giraffe', 'zebra', 'panda'],
    chant: {
      title: 'Zoo Review Chant',
      rhythm: 'Nhanh dần, bắt chước từng con vật khi hát',
      lines: [
        ['Look, look, at the zoo!', 'Nhìn kìa, nhìn kìa, ở sở thú!'],
        ['Monkey, giraffe, zebra too,', 'Khỉ, hươu cao cổ, cả ngựa vằn nữa,'],
        ['Panda, panda, I like you!', 'Gấu trúc ơi, mình thích bạn!'],
        ['We love the zoo! Hooray!', 'Chúng mình yêu sở thú! Hoan hô!'],
      ],
    },
    say: [['Look! An elephant!', 'Nhìn kìa! Con voi!'], ['A tall giraffe!', 'Một chú hươu cao cổ thật cao!'], ['A cute panda!', 'Một chú gấu trúc dễ thương!']],
    talk: {
      scene: 'Chuyến tham quan — Mi và Bin gặp nhiều con vật',
      roleplay: 'Bin',
      lines: [
        ['Mi', 'Look! An elephant!', 'Nhìn kìa! Con voi!'],
        ['Bin', 'A tall giraffe!', 'Một chú hươu cao cổ thật cao!'],
        ['Mi', "What's this?", 'Đây là con gì?'],
        ['Bin', "It's a panda!", 'Đó là gấu trúc!'],
        ['Mi', 'A cute panda!', 'Gấu trúc dễ thương!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['elephant', 'lion', 'monkey', 'giraffe', 'zebra', 'panda'] },
    story: {
      title: 'A Day at the Zoo',
      pages: [
        ['Mi', 'Look! An elephant!', 'Nhìn kìa! Con voi!'],
        ['Mi', 'A tall giraffe!', 'Một chú hươu cao cổ thật cao!'],
        ['Bin', 'A cute panda!', 'Một chú gấu trúc dễ thương!'],
        ['Pip', 'Great job!', 'Giỏi lắm!'],
      ],
    },
    sticker: ['🦒', 'Người bạn sở thú'],
    parent: {
      learned: 'elephant, lion, monkey, giraffe, zebra, panda',
      patterns: ["What's this? — It's a lion.", 'Is this a panda? — Yes, it is.', 'I see a ...'],
      tips: [
        'Bé đã hoàn thành chủ đề At the Zoo với 6 con vật.',
        'Gọi tên con vật khi đi công viên, sở thú hoặc xem sách tranh.',
        'Đọc lại truyện "A Day at the Zoo" cùng bé.',
      ],
    },
  }),
];

/* ═════════════════════════ L1-U16 · Transportation ═════════════════════════ */
const U16 = 'L1-U16';
export const TRANSPORT = [
  make(U16, 1, {
    title: 'Car, Bus, Bike',
    titleVi: 'Ô tô, xe buýt, xe đạp',
    goal: "Bé nhận biết car, bus, bike và nói: What's this? — It's a car.",
    words: ['car', 'bus', 'bike'],
    extras: ['train', 'plane'],
    chant: {
      title: 'Beep Beep Chant',
      rhythm: 'Nhộn nhịp, bắt chước tiếng còi và tiếng chuông xe',
      lines: [
        ['Car, car, vroom, vroom, vroom!', 'Ô tô ơi, brừm, brừm, brừm!'],
        ['Bus, bus, beep, beep, beep!', 'Xe buýt ơi, bíp, bíp, bíp!'],
        ['Bike, bike, ring, ring, ring!', 'Xe đạp ơi, kính coong, kính coong!'],
        ["Let's go, let's go!", 'Đi thôi, đi thôi!'],
      ],
    },
    say: [["What's this?", 'Đây là gì?'], ["It's a car.", 'Đó là ô tô.'], ["It's a bus.", 'Đó là xe buýt.']],
    talk: {
      scene: 'Bên đường — Mi và Bin xem xe chạy',
      roleplay: 'Mi',
      lines: [
        ['Mi', "What's this?", 'Đây là gì?'],
        ['Bin', "It's a car.", 'Đó là ô tô.'],
        ['Mi', 'And this?', 'Còn đây?'],
        ['Bin', "It's a bus.", 'Đó là xe buýt.'],
        ['Pip', 'Great job, Mi!', 'Giỏi lắm Mi!'],
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['car', 'bus', 'bike', 'train'] },
    sticker: ['🚗', 'Tài xế nhí'],
    parent: {
      learned: 'car, bus, bike',
      patterns: ["What's this? — It's a car."],
      tips: [
        'Bé đã biết gọi tên 3 phương tiện quen thuộc bằng tiếng Anh.',
        'Khi ra đường, chỉ xe và hỏi bé "What\'s this?".',
        'Cùng bé bắt chước tiếng "vroom" và "beep".',
      ],
    },
  }),
  make(U16, 2, {
    title: 'Train, Plane, Boat',
    titleVi: 'Tàu hỏa, máy bay, tàu thủy',
    goal: 'Bé nhận biết train, plane, boat và nói: This is a plane.',
    words: ['train', 'plane', 'boat'],
    extras: ['car', 'bus', 'bike'],
    chant: {
      title: 'Train & Plane Chant',
      rhythm: 'Xình xịch như tàu, rồi dang tay bay như máy bay',
      lines: [
        ['Train, train, choo, choo, choo!', 'Tàu hỏa ơi, xình xịch, xình xịch!'],
        ['Plane, plane, up in the sky!', 'Máy bay ơi, bay trên trời cao!'],
        ['Boat, boat, on the sea!', 'Tàu thủy ơi, trên biển khơi!'],
        ['Near and far, by plane or boat!', 'Gần và xa, bằng máy bay hay tàu thủy!'],
      ],
    },
    say: [['This is a train.', 'Đây là tàu hỏa.'], ['This is a plane.', 'Đây là máy bay.'], ['This is a boat.', 'Đây là tàu thủy.']],
    talk: {
      scene: 'Bến tàu — Mi và Bin nhìn tàu và máy bay',
      roleplay: 'Bin',
      lines: [
        ['Mi', 'Look! A train!', 'Nhìn kìa! Tàu hỏa!'],
        ['Bin', "What's this?", 'Đây là gì?'],
        ['Mi', "It's a plane.", 'Đó là máy bay.'],
        ['Bin', 'And this?', 'Còn đây?'],
        ['Mi', "It's a boat.", 'Đó là tàu thủy.'],
        ['Bin', "Let's go!", 'Đi thôi!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['train', 'plane', 'boat', 'bus'] },
    sticker: ['✈️', 'Phi công nhí'],
    parent: {
      learned: 'train, plane, boat',
      patterns: ['This is a plane.', "It's a boat."],
      tips: [
        'Bé đã học thêm 3 phương tiện: train, plane, boat.',
        'Khi thấy máy bay trên trời, cùng bé nói "Plane!".',
        'Chơi trò đóng vai lái tàu, lái máy bay bằng tiếng Anh.',
      ],
    },
  }),
  make(U16, 3, {
    title: 'Do You Like Planes?',
    titleVi: 'Bạn có thích máy bay không?',
    goal: 'Bé hỏi – đáp: Is this a bus? — Yes, it is. Do you like planes? — Yes, I do!',
    words: ['car', 'bus', 'train', 'plane'],
    extras: ['bike', 'boat'],
    chant: {
      title: 'Do You Like Planes? Chant',
      rhythm: 'Hỏi – đáp: nhóm một hỏi, nhóm hai trả lời',
      lines: [
        ['Is this a bus? Yes, it is!', 'Đây có phải xe buýt không? Đúng rồi!'],
        ['Do you like planes? Yes, I do!', 'Bạn có thích máy bay không? Có chứ!'],
        ["Let's go, let's go,", 'Đi thôi, đi thôi,'],
        ['Beep, beep! Me and you!', 'Bíp, bíp! Bạn và mình!'],
      ],
    },
    say: [['Is this a bus?', 'Đây có phải xe buýt không?'], ['Yes, it is.', 'Đúng rồi.'], ['Do you like planes?', 'Bạn có thích máy bay không?']],
    talk: {
      scene: 'Phòng chơi — Mi và Bin chơi đố xe',
      roleplay: 'Mi',
      lines: [
        ['Mi', "What's this?", 'Đây là gì?'],
        ['Bin', "It's a car.", 'Đó là ô tô.'],
        ['Mi', 'Is this a bus?', 'Đây có phải xe buýt không?'],
        ['Bin', 'Yes, it is.', 'Đúng rồi.'],
        ['Mi', 'Do you like planes?', 'Bạn có thích máy bay không?'],
        ['Bin', 'Yes, I do!', 'Có, mình thích!'],
        GREAT,
      ],
    },
    game: { kind: 'match', prompt: MATCH, ids: ['car', 'bus', 'train', 'plane'] },
    sticker: ['🚌', 'Bạn xe buýt'],
    parent: {
      learned: 'car, bus, train, plane (ôn tập)',
      patterns: ["What's this? — It's a car.", 'Is this a bus? — Yes, it is.', 'Do you like planes? — Yes, I do.'],
      tips: [
        'Bé đã luyện câu hỏi Yes/No và nói về sở thích với phương tiện.',
        'Hỏi bé "Do you like ...?" khi cùng xem xe trên đường.',
        'Đổi vai để bé đặt câu hỏi cho bố mẹ.',
      ],
    },
  }),
  make(U16, 4, {
    title: 'A Trip to the Beach',
    titleVi: 'Chuyến đi biển',
    goal: 'Ôn 6 phương tiện giao thông qua truyện tranh và trò chơi tìm từ',
    words: ['car', 'bus', 'bike', 'train', 'plane', 'boat'],
    chant: {
      title: 'Transportation Review Chant',
      rhythm: 'Nhanh dần, bắt chước tiếng từng phương tiện',
      lines: [
        ['Car, bus, bike and train!', 'Ô tô, xe buýt, xe đạp và tàu hỏa!'],
        ['Boat on the sea and a big plane!', 'Tàu thủy trên biển và máy bay to!'],
        ["Let's go, let's go, near and far,", 'Đi thôi, đi thôi, gần và xa,'],
        ['By bus, by boat, by train, by car!', 'Bằng xe buýt, tàu thủy, tàu hỏa, ô tô!'],
      ],
    },
    say: [['We go by car.', 'Chúng mình đi bằng ô tô.'], ['Look! A boat!', 'Nhìn kìa! Tàu thủy!'], ['I see a plane!', 'Mình thấy máy bay!']],
    talk: {
      scene: 'Bãi biển — Mi và Bin nhìn tàu và máy bay',
      roleplay: 'Bin',
      lines: [
        ['Mi', 'We go to the beach by car.', 'Chúng mình đi biển bằng ô tô.'],
        ['Mi', 'Look! A boat!', 'Nhìn kìa! Tàu thủy!'],
        ['Bin', 'I see a plane!', 'Mình thấy máy bay!'],
        ['Mi', 'Do you like planes?', 'Bạn có thích máy bay không?'],
        ['Bin', 'Yes, I do!', 'Có, mình thích!'],
        GREAT,
      ],
    },
    game: { kind: 'tapfind', prompt: FIND, ids: ['car', 'bus', 'bike', 'train', 'plane', 'boat'] },
    story: {
      title: 'A Trip to the Beach',
      pages: [
        ['Pip', 'We go to the beach by car.', 'Cả nhà đi biển bằng ô tô.'],
        ['Mi', 'Look! A boat!', 'Nhìn kìa! Tàu thủy!'],
        ['Bin', 'I see a plane!', 'Mình thấy máy bay!'],
        ['Pip', 'Great job!', 'Giỏi lắm!'],
      ],
    },
    sticker: ['🏖️', 'Chuyến đi biển'],
    parent: {
      learned: 'car, bus, bike, train, plane, boat',
      patterns: ["What's this? — It's a car.", 'Is this a bus? — Yes, it is.', "Let's go!"],
      tips: [
        'Bé đã hoàn thành chủ đề Transportation — kết thúc Quyển 1 Starter.',
        'Gọi tên phương tiện khi cùng bé ra ngoài.',
        'Đọc lại truyện "A Trip to the Beach" cùng bé.',
      ],
    },
  }),
];

export const UNIT_LESSONS_B = [...FEELINGS, ...CLOTHES, ...HOUSE, ...WEATHER, ...FRUITS, ...ZOO, ...TRANSPORT];
