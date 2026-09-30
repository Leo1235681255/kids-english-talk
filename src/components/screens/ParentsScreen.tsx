import React from 'react';
import { CheckCircle2, Heart, Award, ArrowRight, Home, Sparkles } from 'lucide-react';
import { LessonData } from '../../types';
import { playPopSound } from '../../utils/audio';

interface ParentsScreenProps {
  lesson: LessonData;
  starsTotal: number;
  onGoHome: () => void;
  onNextLesson?: () => void;
}

export const ParentsScreen: React.FC<ParentsScreenProps> = ({
  lesson,
  starsTotal,
  onGoHome,
  onNextLesson
}) => {
  const summary = lesson.parentSummary;

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col gap-5">
      {/* Header */}
      <div className="text-center">
        <span className="px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 font-black text-xs uppercase tracking-wider inline-block mb-1 shadow-sm">
          Báo Cáo Tiến Độ
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
          Bài Học Hôm Nay (For Parents)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
          Tóm tắt kết quả rèn luyện và gợi ý đồng hành cùng con tại nhà
        </p>
      </div>

      {/* Main Report Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-teal-200 shadow-lg flex flex-col gap-6">
        {/* Results Checklist */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base sm:text-lg font-black text-slate-800 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span>Kết quả học tập của bé:</span>
          </h3>

          <div className="flex flex-col gap-2.5">
            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <span className="text-emerald-600 text-lg">✅</span>
              <div>
                <span className="font-extrabold text-sm text-slate-800 block">
                  Bé đã làm quen và ghi nhớ 4 từ vựng:
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-600">
                  {summary.todayWords.join(', ')}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-blue-50/70 border border-blue-200">
              <span className="text-blue-600 text-lg">✅</span>
              <div>
                <span className="font-extrabold text-sm text-slate-800 block">
                  Bé đã thực hành mẫu câu giao tiếp:
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-600">
                  {summary.communicationPatterns.join(' · ')}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-amber-50/70 border border-amber-200">
              <span className="text-amber-600 text-lg">✅</span>
              <div>
                <span className="font-extrabold text-sm text-slate-800 block">
                  Hoàn thành trò chơi tương tác & Sưu tập sticker:
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-600">
                  Đã nhận huy hiệu "{lesson.reward.stickerName}" và tích lũy {starsTotal} ngôi sao chăm chỉ!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pedagogical Advice for Parents */}
        <div className="flex flex-col gap-3 pt-3 border-t border-slate-100">
          <h3 className="text-base sm:text-lg font-black text-slate-800 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <span>Gợi ý cho phụ huynh đồng hành cùng con:</span>
          </h3>

          <ul className="flex flex-col gap-2">
            {summary.pedagogicalAdvice.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <span className="text-teal-600 font-bold">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pip Encouragement footer banner */}
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-rose-100 to-amber-100 border border-rose-200">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 bg-white flex-shrink-0 animate-bounce-soft">
            <img src="/assets/sticker_pip.png" alt="Pip" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-sm font-black text-rose-950 block">
              Great progress! Keep going!
            </span>
            <span className="text-xs font-bold text-slate-600">
              Ba mẹ hãy đập tay (High five) và khen ngợi bé sau buổi học nhé!
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <button
            onClick={() => {
              playPopSound();
              onGoHome();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Về Trang Chủ</span>
          </button>

          <button
            onClick={() => {
              playPopSound();
              if (onNextLesson) {
                onNextLesson();
              } else {
                onGoHome();
              }
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-black text-base shadow-md flex items-center justify-center gap-2 transition-all"
          >
            <span>Tiếp Tục Bài Học Tiếp Theo</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
