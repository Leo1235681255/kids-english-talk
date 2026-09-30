import React, { useState } from 'react';
import { Lesson } from '../../types';
import { Nav, ScreenFrame } from '../HeaderNavbar';
import { FlashGrid } from './NewWordsScreen';

export const ReviewScreen: React.FC<{ lesson: Lesson; nav: Nav }> = ({ lesson, nav }) => {
  const [heard, setHeard] = useState<Set<string>>(new Set());
  return (
    <ScreenFrame screen="review" {...nav} nextReady={heard.size >= lesson.words.length}>
      <div className="pt-2 pb-4">
        <div className="mx-auto mb-4 w-[88%] rounded-[1.6rem] bg-white/95 px-4 py-2.5 text-center text-[1.35rem] leading-tight font-black text-[#0f3a8a] shadow">
          Let's say the words again!
        </div>
        <FlashGrid lesson={lesson} compact onHeard={(id) => setHeard((s) => new Set(s).add(id))} />
      </div>
    </ScreenFrame>
  );
};
