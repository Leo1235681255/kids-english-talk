import React from 'react';
import { LogOut, ShieldCheck, X } from 'lucide-react';
import { AuthApi } from '../hooks/useAuth';

interface Props {
  open: boolean;
  onClose: () => void;
  auth: AuthApi;
  /** why the modal popped up, e.g. a locked lesson was tapped */
  reason?: string;
  onOpenAdmin: () => void;
}

const GoogleG: React.FC = () => (
  <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden>
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.5 17.7 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z" />
    <path fill="#FBBC05" d="M10.5 28.7c-.5-1.5-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.5 0 20.1 0 24s.9 7.5 2.6 10.8l7.9-6.1z" />
    <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.9 2.3-8.4 2.3-6.3 0-11.6-4-13.5-9.7l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
  </svg>
);

const BADGE: Record<string, { text: string; cls: string }> = {
  pending: { text: '⏳ Chờ duyệt', cls: 'bg-amber-100 text-amber-700' },
  approved: { text: '✅ Đã được duyệt', cls: 'bg-emerald-100 text-emerald-700' },
  blocked: { text: '🚫 Đã bị khoá', cls: 'bg-rose-100 text-rose-700' },
  admin: { text: '🛡️ Quản trị viên', cls: 'bg-indigo-100 text-indigo-700' },
};

const MESSAGE: Record<string, string> = {
  pending: 'Gmail của bé đã được gửi cho admin. Khi được duyệt, tất cả bài học sẽ mở. Trong lúc chờ, bé học thử Unit 1 nhé!',
  approved: 'Tất cả bài học đã mở cho bé. Chúc bé học vui!',
  blocked: 'Tài khoản này đang bị khoá. Phụ huynh vui lòng liên hệ admin để được hỗ trợ.',
  admin: 'Bạn có thể duyệt, cấp, chặn hoặc xoá tài khoản học viên.',
};

export const AccountModal: React.FC<Props> = ({ open, onClose, auth, reason, onOpenAdmin }) => {
  if (!open) return null;
  const { user, status } = auth;
  const badge = BADGE[status];
  const pendingCount = auth.students.filter((s) => s.status === 'pending').length;

  return (
    <div className="fixed inset-0 z-[65] flex items-end justify-center bg-black/40" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[430px] rounded-t-[2rem] bg-gradient-to-b from-[#e7f3ff] to-[#fffaf0] px-5 pb-8 pt-4 a-pop"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-[#0f3a8a]">👤 Tài khoản</h2>
          <button onClick={onClose} aria-label="Đóng" className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-500 shadow">
            <X className="h-5 w-5" />
          </button>
        </div>

        {reason && <p className="mt-2 rounded-2xl bg-amber-50 px-3 py-2 text-sm font-bold text-amber-800">{reason}</p>}

        {auth.loading ? (
          <p className="py-8 text-center font-bold text-slate-500">Đang kiểm tra…</p>
        ) : !user ? (
          <div className="mt-4 text-center">
            <img src="/art/pip_heart.png" alt="Pip" className="mx-auto w-24 a-bob" draggable={false} />
            <p className="mt-2 text-sm font-semibold text-slate-600">
              Đăng nhập bằng Gmail của bé. Admin sẽ duyệt để mở toàn bộ bài học. Unit 1 luôn học thử được.
            </p>
            <button
              onClick={auth.signIn}
              disabled={auth.busy}
              className="mx-auto mt-4 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-black text-slate-700 shadow-[0_4px_0_rgba(0,0,0,0.12)] active:scale-95 disabled:opacity-60"
            >
              <GoogleG /> {auth.busy ? 'Đang mở Google…' : 'Đăng nhập bằng Google'}
            </button>
          </div>
        ) : (
          <div className="mt-4">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-3 py-3 shadow-sm">
              {user.photoURL ? (
                <img src={user.photoURL} alt="" referrerPolicy="no-referrer" className="h-12 w-12 rounded-full" />
              ) : (
                <div className="grid h-12 w-12 place-items-center rounded-full bg-sky-200 text-xl font-black text-sky-700">{user.email[0]?.toUpperCase()}</div>
              )}
              <div className="min-w-0">
                {user.name && <div className="truncate text-base font-black text-[#0f3a8a]">{user.name}</div>}
                <div className="truncate text-xs font-bold text-slate-500">{user.email}</div>
                {badge && <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-black ${badge.cls}`}>{badge.text}</span>}
              </div>
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-600">{MESSAGE[status]}</p>

            {status === 'admin' && (
              <button
                onClick={() => {
                  onClose();
                  onOpenAdmin();
                }}
                className="pill-btn mt-3 flex w-full items-center justify-center gap-2 px-4 py-3 text-base"
              >
                <ShieldCheck className="h-5 w-5" /> Quản lý học viên
                {pendingCount > 0 && <span className="rounded-full bg-white px-2 text-sm font-black text-rose-600">{pendingCount}</span>}
              </button>
            )}
            <button
              onClick={auth.signOut}
              className="mx-auto mt-3 flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-black text-slate-500 shadow active:scale-95"
            >
              <LogOut className="h-4 w-4" /> Đăng xuất
            </button>
          </div>
        )}
        {auth.error && <p className="mt-3 text-center text-sm font-bold text-rose-600">{auth.error}</p>}
      </div>
    </div>
  );
};
