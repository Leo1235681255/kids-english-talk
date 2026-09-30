import React, { useState } from 'react';
import { Play, Sparkles, BookOpen, Star, CheckCircle, ChevronRight } from 'lucide-react';
import { LevelData, UnitData, LessonData } from '../../types';
import { CURRICULUM_LEVELS } from '../../data/curriculum';
import { playPopSound, playSuccessSound, speakText } from '../../utils/audio';

interface HomeScreenProps {
  onStartLesson: (lesson: LessonData) => void;
  starsTotal: number;
  unlockedStickersCount: number;
  onOpenStickerBook: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onStartLesson,
  starsTotal,
  unlockedStickersCount,
  onOpenStickerBook
}) => {
  const [selectedLevelId, setSelectedLevelId] = useState<'starter' | 'explorer' | 'adventurer'>('starter');

  const currentLevel = CURRICULUM_LEVELS.find(l => l.id === selectedLevelId) || CURRICULUM_LEVELS[0];

  const handleLevelSelect = (levelId: 'starter' | 'explorer' | 'adventurer') => {
    playPopSound();
    setSelectedLevelId(levelId);
  };

  const handlePipIntro = () => {
    playPopSound();
    speakText("Hello friends! Welcome to Kids English Talk! Let's learn and have fun!", {
      speaker: 'Pip'
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 sm:py-6 flex flex-col gap-6">
      {/* Hero Welcome Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 text-white shadow-xl p-5 sm:p-8 border-4 border-white">
        {/* Decorative background clouds and shapes */}
        <div className="absolute top-2 right-4 text-white/30 text-6xl select-none pointer-events-none">☁️</div>
        <div className="absolute bottom-2 left-6 text-white/20 text-7xl select-none pointer-events-none">☁️</div>
        <div className="absolute top-1/2 right-1/4 text-yellow-300/40 text-4xl select-none pointer-events-none animate-pulse">✨</div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-yellow-300 font-extrabold text-xs sm:text-sm mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Dành cho bé 4–10 tuổi · Chuẩn Cambridge</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md mb-2">
              KIDS ENGLISH TALK
            </h1>
            <p className="text-blue-100 font-medium text-sm sm:text-base max-w-md">
              Học tiếng Anh giao tiếp tự nhiên cùng <span className="font-bold text-yellow-300">Mi</span>, <span className="font-bold text-emerald-300">Bin</span> và chú chim sẻ <span className="font-bold text-amber-300">Pip</span>!
            </p>

            {/* Quick stats badges */}
            <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/15 backdrop-blur-sm font-bold text-xs sm:text-sm">
                <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span>{starsTotal} Sao tích lũy</span>
              </div>
              <button
                onClick={onOpenStickerBook}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/15 backdrop-blur-sm font-bold text-xs sm:text-sm hover:bg-white/25 transition-all"
              >
                <span>🏆</span>
                <span>{unlockedStickersCount} Sticker</span>
              </button>
            </div>
          </div>

          {/* Interactive Mascot Group & Big Play Button */}
          <div className="flex flex-col items-center gap-4">
            <div
              onClick={handlePipIntro}
              className="cursor-pointer relative group flex items-center justify-center"
              title="Chạm vào để nghe Pip chào bé!"
            >
              <div className="w-44 sm:w-56 rounded-2xl overflow-hidden shadow-lg border-4 border-white/80 bg-white transition-transform group-hover:scale-105 active:scale-95">
                <img
                  src="/assets/home_characters.png"
                  alt="Mi, Bin and Pip"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Audio tap hint badge */}
              <div className="absolute -bottom-2 px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs shadow-md border border-white animate-bounce-soft">
                🔊 Chạm vào đây!
              </div>
            </div>

            {/* Start Button */}
            {currentLevel.units[0]?.lessons[0] && (
              <button
                onClick={() => {
                  playSuccessSound();
                  onStartLesson(currentLevel.units[0].lessons[0]);
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-3xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-amber-950 font-black text-lg sm:text-xl shadow-lg border-b-4 border-amber-600 transition-all flex items-center justify-center gap-3 animate-pulse-glow"
              >
                <div className="w-8 h-8 rounded-full bg-amber-950 text-amber-300 flex items-center justify-center">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
                <span>BẮT ĐẦU BÀI 1 NGAY</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Level Selection Tabs */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
          <span>📚 Chọn Cấp Độ Học</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {CURRICULUM_LEVELS.map((level) => {
            const isSelected = level.id === selectedLevelId;
            return (
              <button
                key={level.id}
                onClick={() => handleLevelSelect(level.id)}
                className={`p-4 rounded-3xl text-left transition-all border-4 ${
                  isSelected
                    ? 'bg-white border-blue-500 shadow-md ring-4 ring-blue-100'
                    : 'bg-white/80 border-slate-200 hover:border-blue-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${
                    level.id === 'starter'
                      ? 'bg-amber-100 text-amber-800'
                      : level.id === 'explorer'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {level.age}
                  </span>
                  <span className="text-xs font-bold text-slate-400">{level.cambridgeLevel}</span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-800">{level.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1">{level.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Units List for Active Level */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
            <span>🎯 Danh Sách Chủ Đề (Units)</span>
          </h2>
          <span className="text-xs sm:text-sm font-bold text-slate-500">
            {currentLevel.units.length} Chủ đề
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentLevel.units.map((unit: UnitData) => {
            const hasLesson = unit.lessons && unit.lessons.length > 0;
            return (
              <div
                key={unit.id}
                className="bg-white rounded-3xl p-5 border-3 border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-3 relative overflow-hidden"
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl p-2.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-inner flex items-center justify-center">
                    {unit.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg">
                        {unit.code}
                      </span>
                      {hasLesson && (
                        <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Sẵn sàng học
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-black text-slate-800 mt-1">
                      {unit.title} — {unit.titleVi}
                    </h3>
                    <p className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-xl mt-1.5 inline-block">
                      Mẫu câu: "{unit.pattern}"
                    </p>
                  </div>
                </div>

                {/* Words pill list */}
                <div className="flex flex-wrap gap-1.5">
                  {unit.wordsOverview.map((word, wIdx) => (
                    <span
                      key={wIdx}
                      className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                    >
                      {word}
                    </span>
                  ))}
                </div>

                {/* Start or preview button */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">
                    {hasLesson ? `${unit.lessons.length} Bài học chi tiết` : 'Theo lộ trình giáo trình'}
                  </span>

                  {hasLesson ? (
                    <button
                      onClick={() => {
                        playPopSound();
                        onStartLesson(unit.lessons[0]);
                      }}
                      className="px-4 py-2 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-extrabold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
                    >
                      <span>Vào học</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        playPopSound();
                        // Play preview chant or words
                        speakText(unit.title + '. ' + unit.pattern, { speaker: 'Pip' });
                      }}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs flex items-center gap-1"
                    >
                      <span>Nghe mẫu câu</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Characters Introduction Card */}
      <div className="rounded-3xl bg-white p-5 border-2 border-slate-100 shadow-sm">
        <h3 className="text-base font-black text-slate-800 mb-3 flex items-center gap-2">
          <span>👥 Bạn Đồng Hành Của Bé</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-amber-50 border border-amber-200">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 bg-white">
              <img src="/assets/sticker_mi.png" alt="Mi" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-black text-sm text-slate-800">Bé Mi (6 tuổi)</h4>
              <p className="text-xs text-slate-500">Tóc ngắn, áo vàng. Tò mò, hay hỏi "What's this?"</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-blue-50 border border-blue-200">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400 bg-white">
              <img src="/assets/sticker_bin.png" alt="Bin" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-black text-sm text-slate-800">Bé Bin (7 tuổi)</h4>
              <p className="text-xs text-slate-500">Đội mũ xanh, năng động, thích thể thao đồ chơi.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400 bg-white">
              <img src="/assets/sticker_pip.png" alt="Pip" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-black text-sm text-slate-800">Chim Sẻ Pip</h4>
              <p className="text-xs text-slate-500">"Thầy giáo" tí hon dẫn bài, cổ vũ & tặng sao.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
