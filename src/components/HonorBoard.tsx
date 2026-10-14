import React, { useEffect, useState } from 'react';
import { AuthApi } from '../hooks/useAuth';
import { Honor } from '../types';

const MEDAL = ['🥇', '🥈', '🥉'];
const TINT = ['from-amber-200 to-yellow-100', 'from-slate-200 to-slate-50', 'from-orange-200 to-amber-50'];
const SHOWN = 10;

/** Public "Bảng vinh danh": the children with the most stars. Names are shortened ("Bé An"), no photos or emails. */
export const HonorBoard: React.FC<{ auth: AuthApi; stars: number }> = ({ auth, stars }) => {
  const [list, setList] = useState<Honor[] | null>(null);

  useEffect(() => {
    if (!auth.enabled) return;
    let off = () => {};
    let dead = false;
    auth
      .accounts()
      .then((a) => {
        if (dead) return;
        off = a.watchHonors(setList, () => setList([]));
      })
      .catch(() => setList([]));
    return () => {
      dead = true;
      off();
    };
  }, [auth.enabled]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!auth.enabled) return null;

  const top = (list ?? []).slice(0, SHOWN);
  const mine = auth.user ? (list ?? []).findIndex((h) => h.uid === auth.user!.uid) : -1;

  return (
    <section className="mt-7 rounded-[1.6rem] bg-gradient-to-b from-[#fff3c4] to-[#fffaf0] px-3.5 pb-4 pt-4 shadow-[0_4px_0_rgba(200,150,40,0.25)]">
      <div className="text-center">
        <div className="text-3xl leading-none">🏆</div>
        <h2 className="text-2xl font-black text-[#0f3a8a]">Bảng vinh danh</h2>
        <p className="text-xs font-semibold text-slate-500">Những bé chăm học nhất cùng Mi, Bin và Pip</p>
      </div>

      {list === null ? (
        <p className="py-6 text-center text-sm font-bold text-slate-400">Đang tải…</p>
      ) : top.length === 0 ? (
        <p className="py-6 text-center text-sm font-bold text-slate-500">
          Chưa có bé nào trên bảng. Học thật nhiều và bé sẽ là người đầu tiên được vinh danh! ⭐
        </p>
      ) : (
        <ol className="mt-3 space-y-2">
          {top.map((h, i) => (
            <li
              key={h.uid}
              className={`flex items-center gap-3 rounded-2xl bg-gradient-to-r px-3 py-2 shadow-sm ${TINT[i] ?? 'from-white to-white'} ${
                auth.user?.uid === h.uid ? 'ring-2 ring-sky-400' : ''
              }`}
            >
              <span className="w-8 shrink-0 text-center text-2xl font-black text-[#0f3a8a]">{MEDAL[i] ?? i + 1}</span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-base font-black text-[#0f3a8a]">{h.name}</div>
                <div className="text-[11px] font-bold text-slate-500">{h.lessons} bài đã học</div>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-sm font-black text-amber-600 shadow-sm">⭐ {h.stars}</span>
            </li>
          ))}
        </ol>
      )}

      {auth.status === 'approved' && mine >= SHOWN && (
        <p className="mt-3 text-center text-xs font-bold text-sky-700">
          Bé đang đứng hạng {mine + 1} với ⭐ {stars}. Cố lên nhé!
        </p>
      )}
      {auth.status !== 'approved' && auth.status !== 'admin' && (
        <p className="mt-3 text-center text-[11px] font-semibold text-slate-400">Bé được admin duyệt và học bài sẽ tự có tên trên bảng này.</p>
      )}
    </section>
  );
};
