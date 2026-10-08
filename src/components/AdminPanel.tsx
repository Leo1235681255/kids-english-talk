import React, { useMemo, useState } from 'react';
import { Ban, Check, RotateCcw, Trash2, UserPlus, X } from 'lucide-react';
import { AuthApi } from '../hooks/useAuth';
import { Student, StudentStatus } from '../types';

interface Props {
  open: boolean;
  onClose: () => void;
  auth: AuthApi;
}

type Tab = StudentStatus | 'add';
type Accounts = Awaited<ReturnType<AuthApi['accounts']>>;

const EMAIL_RE = /^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]+$/;
const fmt = (t: number) => new Date(t).toLocaleDateString('vi-VN');

const Btn: React.FC<{ onClick: () => void; tone: 'green' | 'red' | 'gray'; children: React.ReactNode }> = ({ onClick, tone, children }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-black active:scale-95 ${
      tone === 'green' ? 'bg-emerald-500 text-white' : tone === 'red' ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-600'
    }`}
  >
    {children}
  </button>
);

export const AdminPanel: React.FC<Props> = ({ open, onClose, auth }) => {
  const [tab, setTab] = useState<Tab>('pending');
  const [q, setQ] = useState('');
  const [text, setText] = useState('');
  const [note, setNote] = useState('');
  const [working, setWorking] = useState(false);

  const counts = useMemo(() => {
    const c = { pending: 0, approved: 0, blocked: 0 };
    auth.students.forEach((s) => (c[s.status] += 1));
    return c;
  }, [auth.students]);

  if (!open) return null;

  const list = tab === 'add' ? [] : auth.students.filter((s) => s.status === tab && `${s.email} ${s.name}`.toLowerCase().includes(q.trim().toLowerCase()));

  const run = async (fn: (a: Accounts) => Promise<unknown>) => {
    setWorking(true);
    try {
      await fn(await auth.accounts());
      return true;
    } catch {
      setNote('Không thực hiện được. Kiểm tra lại mạng hoặc luật Firestore.');
      return false;
    } finally {
      setWorking(false);
    }
  };

  const setStatus = (s: Student, status: StudentStatus) => run((a) => a.setStatus(s.email, status));
  const block = (s: Student) => {
    if (window.confirm(`Chặn ${s.email}?\nHọ sẽ không vào học được nữa, kể cả bài học thử.`)) setStatus(s, 'blocked');
  };
  const remove = (s: Student) => {
    if (window.confirm(`Xoá ${s.email} khỏi danh sách?\nNếu họ đăng nhập lại sẽ trở thành "chờ duyệt". Muốn cấm hẳn hãy dùng Chặn.`)) {
      run((a) => a.removeStudent(s.email));
    }
  };

  const grant = async () => {
    const parts = text
      .split(/[\s,;]+/)
      .map((x) => x.trim().toLowerCase())
      .filter(Boolean);
    const ok = [...new Set(parts.filter((x) => EMAIL_RE.test(x)))];
    const bad = parts.filter((x) => !EMAIL_RE.test(x));
    if (!ok.length) {
      setNote(bad.length ? `Email chưa đúng: ${bad.join(', ')}` : 'Nhập ít nhất một Gmail.');
      return;
    }
    if (await run((a) => a.grantEmails(ok))) {
      setText('');
      setNote(`Đã cấp quyền cho ${ok.length} Gmail.${bad.length ? ` Bỏ qua (sai định dạng): ${bad.join(', ')}` : ''}`);
    }
  };

  const TABS: { id: Tab; label: string }[] = [
    { id: 'pending', label: `Chờ duyệt (${counts.pending})` },
    { id: 'approved', label: `Đã duyệt (${counts.approved})` },
    { id: 'blocked', label: `Đã chặn (${counts.blocked})` },
    { id: 'add', label: '+ Cấp Gmail' },
  ];

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/50 sm:items-center" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-[92dvh] w-full max-w-[430px] flex-col overflow-hidden rounded-t-[2rem] bg-[#f5f9ff] a-pop sm:rounded-[2rem]"
      >
        <div className="flex items-center justify-between px-4 pb-2 pt-4">
          <div>
            <h2 className="text-xl font-black text-[#0f3a8a]">🛡️ Quản lý học viên</h2>
            <p className="text-[11px] font-bold text-slate-500">
              {auth.students.length} tài khoản · {auth.user?.email}
            </p>
          </div>
          <button onClick={onClose} aria-label="Đóng" className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-500 shadow">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex gap-1.5 overflow-x-auto px-4 pb-2 hide-scroll">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTab(t.id);
                setNote('');
              }}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-black ${tab === t.id ? 'bg-[#0f3a8a] text-white' : 'bg-white text-slate-500 shadow-sm'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-6 hide-scroll">
          {auth.error && <p className="mb-2 rounded-xl bg-rose-50 px-3 py-2 text-xs font-bold text-rose-600">{auth.error}</p>}
          {note && <p className="mb-2 rounded-xl bg-sky-50 px-3 py-2 text-xs font-bold text-sky-700">{note}</p>}

          {tab === 'add' ? (
            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <p className="text-sm font-black text-[#0f3a8a]">Cấp quyền bằng Gmail</p>
              <p className="mt-0.5 text-xs font-semibold text-slate-500">
                Dán một hoặc nhiều Gmail (cách nhau bằng dấu phẩy, khoảng trắng hoặc xuống dòng). Học viên chỉ cần đăng nhập Google bằng đúng Gmail này là vào học luôn.
              </p>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={5}
                placeholder={'hocvien1@gmail.com\nhocvien2@gmail.com'}
                className="mt-2 w-full rounded-xl border-2 border-slate-200 p-2 text-sm font-semibold outline-none focus:border-sky-400"
              />
              <button onClick={grant} disabled={working} className="pill-btn mt-2 flex w-full items-center justify-center gap-2 px-4 py-2.5 text-sm disabled:opacity-60">
                <UserPlus className="h-4 w-4" /> Cấp quyền
              </button>
            </div>
          ) : (
            <>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Tìm theo Gmail hoặc tên…"
                className="mb-2 w-full rounded-full border-2 border-slate-200 bg-white px-4 py-2 text-sm font-semibold outline-none focus:border-sky-400"
              />
              {list.length === 0 && <p className="py-10 text-center text-sm font-bold text-slate-400">Chưa có tài khoản nào ở mục này.</p>}
              <div className="space-y-2">
                {list.map((s) => (
                  <div key={s.email} className="rounded-2xl bg-white p-3 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      {s.photoURL ? (
                        <img src={s.photoURL} alt="" referrerPolicy="no-referrer" className="h-10 w-10 shrink-0 rounded-full" />
                      ) : (
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sky-100 font-black text-sky-600">{s.email[0]?.toUpperCase()}</div>
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-black text-[#0f3a8a]">{s.name || s.email}</div>
                        {s.name && <div className="truncate text-[11px] font-bold text-slate-500">{s.email}</div>}
                        <div className="text-[10px] font-bold text-slate-400">
                          {s.source === 'admin' ? 'Admin cấp' : 'Tự đăng ký'} · {fmt(s.createdAt)}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {s.status === 'pending' && (
                        <>
                          <Btn tone="green" onClick={() => setStatus(s, 'approved')}>
                            <Check className="h-3.5 w-3.5" /> Duyệt
                          </Btn>
                          <Btn tone="red" onClick={() => block(s)}>
                            <Ban className="h-3.5 w-3.5" /> Chặn
                          </Btn>
                        </>
                      )}
                      {s.status === 'approved' && (
                        <>
                          <Btn tone="gray" onClick={() => setStatus(s, 'pending')}>
                            <RotateCcw className="h-3.5 w-3.5" /> Thu hồi
                          </Btn>
                          <Btn tone="red" onClick={() => block(s)}>
                            <Ban className="h-3.5 w-3.5" /> Chặn
                          </Btn>
                        </>
                      )}
                      {s.status === 'blocked' && (
                        <Btn tone="gray" onClick={() => setStatus(s, 'pending')}>
                          <RotateCcw className="h-3.5 w-3.5" /> Bỏ chặn
                        </Btn>
                      )}
                      <Btn tone="red" onClick={() => remove(s)}>
                        <Trash2 className="h-3.5 w-3.5" /> Xoá
                      </Btn>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
