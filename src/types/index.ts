export type ScreenType = 
  | 'home'
  | 'warmup'      // 1/10
  | 'newwords'    // 2/10
  | 'listentap'   // 3/10
  | 'sayit'       // 4/10
  | 'talktime'    // 5/10
  | 'play'        // 6/10
  | 'reward'      // 7/10
  | 'storytime'   // 8/10
  | 'review'      // 9/10
  | 'forparents'; // 10/10

export interface WordItem {
  id: string;
  en: string;
  vi: string;
  image: string;
  phonetic?: string;
  sentenceEn?: string;
  sentenceVi?: string;
}

export interface DialogueLine {
  id: string;
  speaker: 'Mi' | 'Bin' | 'Pip' | 'Teacher';
  en: string;
  vi: string;
  avatar: string;
  roleplayTarget?: boolean;
}

export interface MatchingPair {
  id: string;
  word: string;
  image: string;
}

export interface StoryPanel {
  panelNumber: number;
  speaker: string;
  textEn: string;
  textVi: string;
  image: string;
  description: string;
}

export interface LessonData {
  id: string; // e.g. "L1-U01-B1"
  levelId: string; // "starter" | "explorer" | "adventurer"
  unitId: string; // "L1-U01"
  title: string;
  titleVi: string;
  subtitle: string;
  targetWords: WordItem[];
  warmup: {
    title: string;
    lyrics: string[];
    lyricsVi: string[];
    rhythm: string;
    backgroundPrompt?: string;
  };
  listenTap: {
    questions: {
      targetWord: WordItem;
      options: WordItem[];
    }[];
  };
  sayIt: {
    items: {
      word: WordItem;
      targetSentence?: string;
      pipPraise: string;
    }[];
  };
  talkTime: {
    scene: string;
    dialogue: DialogueLine[];
    roleplayAs: 'Mi' | 'Bin';
  };
  playGame: {
    type: 'match_line' | 'tap_find';
    instruction: string;
    pairs: MatchingPair[];
  };
  reward: {
    stickerId: string;
    stickerName: string;
    stickerImage: string;
    celebrationText: string;
  };
  storyTime: {
    title: string;
    panels: StoryPanel[];
  };
  parentSummary: {
    todayWords: string[];
    communicationPatterns: string[];
    pedagogicalAdvice: string[];
    completionBadge: string;
  };
}

export interface UnitData {
  id: string;
  code: string;
  title: string;
  titleVi: string;
  pattern: string;
  wordsOverview: string[];
  color: string;
  icon: string;
  lessons: LessonData[];
}

export interface LevelData {
  id: 'starter' | 'explorer' | 'adventurer';
  title: string;
  nameVi: string;
  age: string;
  cambridgeLevel: string;
  description: string;
  units: UnitData[];
}
