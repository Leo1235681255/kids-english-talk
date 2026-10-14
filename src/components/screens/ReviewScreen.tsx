import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Lesson } from '../../types';
import { Nav, ScreenFrame } from '../HeaderNavbar';
import { FlashGrid } from './NewWordsScreen';
import { playErrorSound, playSuccessSound, speakText } from '../../utils/audio';

const LETTERS = ['A', 'B', 'C'];

/** Level 3 review: pick the right answer for each question, then a short writing task. */
const Quiz: React.FC<{ lesson: Lesson; earn: (n: number) => void; onDone: () => void }> = ({ lesson, earn, onDone }) => {
  const quiz = lesson.quiz ?? [];
  // picked[i] = option index chosen, null until answered; a wrong pick stays visible and the child tries again
  const [picked, setPicked] = useState<(number | null)[]>(quiz.map(() => null));
  const [missed, setMissed] = useState<boolean[]>(quiz.map(() => false));
  const [done, setDone] = useState<boolean[]>(quiz.map(() => false));

  const pick = (qi: number, oi: number) => {
    if (done[qi]) return;
    setPicked((p) => p.map((x, i) => (i === qi ? oi : x)));
    if (oi === quiz[qi].answer) {
      playSuccessSound();
      if (!missed[qi]) earn(1);
      const nd = done.map((x, i) => (i === qi ? true : x));
      setDone(nd);
      if (nd.every(Boolean)) onDone();
    } else {
      playErrorSound();
      setMissed((m) => m.map((x, i) => (i === qi ? true : x)));
    }
  };

  return (
    <div className="mx-3 mt-4 rounded-2xl bg-white/95 px-3 py-3 shadow">
      <div className="text-lg font-black text-[#0f3a8a]">✅ Choose the correct answer</div>
      <ol className="mt-2 space-y-3">
        {quiz.map((q, qi) => (
          <li key={qi}>
            <button
              onClick={() => speakText(q.q.replace(/___/g, 'blank'), { speaker: 'Pip', rate: 0.9 })}
              className="text-left text-[1rem] font-black leading-snug text-[#0f3a8a]"
            >
              {qi + 1}. {q.q}
            </button>
            <div className="mt-1.5 grid grid-cols-1 gap-1.5">
              {q.options.map((o, oi) => {
                const chosen = picked[qi] === oi;
                const right = chosen && oi === q.answer;
                const wrong = chosen && oi !== q.answer;
                return (
                  <button
                    key={oi}
                    onClick={() => pick(qi, oi)}
                    className={`flex items-center gap-2 rounded-xl border-2 px-3 py-1.5 text-left text-[0.95rem] font-bold active:scale-[0.99] ${
                      right ? 'border-green-500 bg-green-100 text-green-800' : wrong ? 'border-rose-400 bg-rose-50 text-rose-700' : 'border-sky-100 bg-sky-50 text-slate-700'
                    }`}
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-xs font-black text-sky-600">
                      {right ? <Check className="h-4 w-4 text-green-600" strokeWidth={4} /> : wrong ? <X className="h-4 w-4 text-rose-500" strokeWidth={4} /> : LETTERS[oi]}
                    </span>
                    {o}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>
      {lesson.write && (
        <div className="mt-4 rounded-xl bg-amber-50 px-3 py-2">
          <div className="text-sm font-black text-amber-700">✍️ Write</div>
          <p className="text-[0.9rem] font-bold leading-snug text-slate-600">{lesson.write}</p>
        </div>
      )}
    </div>
  );
};

export const ReviewScreen: React.FC<{ lesson: Lesson; nav: Nav }> = ({ lesson, nav }) => {
  const [heard, setHeard] = useState<Set<string>>(new Set());
  const [quizDone, setQuizDone] = useState(!lesson.quiz?.length);
  return (
    <ScreenFrame screen="review" {...nav} nextReady={heard.size >= lesson.words.length && quizDone}>
      <div className="pt-2 pb-4">
        <div className="mx-auto mb-4 w-[88%] rounded-[1.6rem] bg-white/95 px-4 py-2.5 text-center text-[1.35rem] leading-tight font-black text-[#0f3a8a] shadow">
          Let's say the words again!
        </div>
        <FlashGrid lesson={lesson} compact onHeard={(id) => setHeard((s) => new Set(s).add(id))} />
        {lesson.quiz && lesson.quiz.length > 0 && <Quiz lesson={lesson} earn={nav.earn} onDone={() => setQuizDone(true)} />}
      </div>
    </ScreenFrame>
  );
};
