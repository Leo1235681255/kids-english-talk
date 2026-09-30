import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Lesson } from '../../types';
import { Nav, ScreenFrame } from '../HeaderNavbar';
import { Bubble } from '../ui/Art';

interface Props {
  lesson: Lesson;
  nav: Nav;
  lessonStars: number;
  next?: Lesson;
  onNextLesson: () => void;
}

export const ParentsScreen: React.FC<Props> = ({ lesson, nav, lessonStars, next, onNextLesson }) => {
  const { learned, patterns, tips } = lesson.parent;
  const rows = [`Bé đã học từ vựng: ${learned}.`, ...tips];

  return (
    <ScreenFrame screen="forparents" {...nav} onNext={nav.onHome} nextLabel="Xong" nextReady>
      <div className="px-4 pt-2 pb-4">
        <div className="rounded-[1.8rem] bg-[#fffaf0] px-4 py-4 shadow-[0_8px_22px_rgba(20,80,90,0.2)] border-[3px] border-white">
          <h2 className="text-center text-[1.6rem] font-black text-[#0f3a8a]">Bài học hôm nay</h2>
          <div className="mt-0.5 text-center text-xs font-bold text-slate-400">
            {lesson.id} · {lesson.title} — {lesson.titleVi}
          </div>

          <ul className="mt-3 space-y-3">
            {rows.map((r, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-0.5 grid place-items-center w-6 h-6 shrink-0 rounded-full bg-green-500 text-white">
                  <Check className="w-4 h-4" strokeWidth={4} />
                </span>
                <span className="text-[0.98rem] font-bold leading-snug text-[#0f3a8a]">{r}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 rounded-2xl bg-sky-50 px-3 py-2.5">
            <div className="text-sm font-black text-[#0f3a8a]">Mẫu câu</div>
            <ul className="mt-1 text-sm font-semibold text-slate-600 list-disc pl-5">
              {patterns.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-sm font-black text-amber-600">
            ⭐ {lessonStars} sao trong bài này
          </div>
        </div>

        {next && (
          <button onClick={onNextLesson} className="pill-btn mx-auto mt-5 flex w-full items-center justify-center gap-2 px-5 py-3 text-lg">
            Bài tiếp theo: {next.title}
            <ArrowRight className="w-5 h-5" strokeWidth={3} />
          </button>
        )}

        <div className="mt-4 flex items-end justify-between">
          <Bubble tail="r" className="mb-8 flex items-center gap-2 px-3 py-2 text-sm leading-tight">
            <span className="text-2xl">❤️</span>
            <span>
              Great progress!
              <br />
              Keep going!
            </span>
          </Bubble>
          <img src="/art/pip_heart.png" alt="Pip" className="w-32 a-bob drop-shadow-lg" draggable={false} />
        </div>
      </div>
    </ScreenFrame>
  );
};
