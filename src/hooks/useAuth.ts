import { useCallback, useEffect, useRef, useState } from 'react';
import { authEnabled } from '../lib/config';
import { AccessStatus } from '../data/access';
import { Student } from '../types';
import type { AuthUser } from '../lib/accounts';

type Accounts = typeof import('../lib/accounts');

export interface AuthApi {
  enabled: boolean;
  /** true until the first sign-in state is known */
  loading: boolean;
  user: AuthUser | null;
  status: AccessStatus;
  isAdmin: boolean;
  /** admin only: every student record, live */
  students: Student[];
  error: string;
  /** set when this device was signed out (another device signed in, or the admin removed the account) */
  notice: string;
  busy: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  accounts: () => Promise<Accounts>;
}

const friendly = (e: unknown) => {
  const code = (e as { code?: string })?.code ?? '';
  if (code === 'permission-denied') return 'Chưa có quyền truy cập dữ liệu. Admin cần kiểm tra lại luật Firestore.';
  if (code.startsWith('auth/network')) return 'Mất mạng rồi, bé thử lại nhé.';
  if (code === 'auth/unauthorized-domain') return `Tên miền ${location.hostname} chưa được thêm vào Firebase (Authentication → Settings → Authorized domains).`;
  if (code === 'auth/operation-not-allowed') return 'Chưa bật đăng nhập Google trong Firebase (Authentication → Sign-in method → Google).';
  if (code === 'auth/invalid-api-key' || code === 'auth/api-key-not-valid') return 'Khoá API Firebase chưa đúng. Admin kiểm tra lại cấu hình trên Vercel.';
  if (code === 'unavailable' || code === 'failed-precondition') return 'Chưa tạo Firestore Database hoặc chưa kết nối được. Admin kiểm tra lại trong Firebase.';
  return `Có lỗi xảy ra, thử lại sau nhé.${code ? ` (${code})` : ''}`;
};

export const useAuth = (): AuthApi => {
  const [loading, setLoading] = useState(authEnabled);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [record, setRecord] = useState<Student | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);
  const mod = useRef<Promise<Accounts> | null>(null);

  const accounts = useCallback(() => (mod.current ??= import('../lib/accounts')), []);

  useEffect(() => {
    if (!authEnabled) return;
    let offAuth = () => {};
    let offData = () => {};
    let dead = false;
    accounts()
      .then((a) => {
        if (dead) return;
        offAuth = a.subscribeAuth((u) => {
          offData();
          offData = () => {};
          setUser(u);
          setRecord(null);
          setStudents([]);
          setError('');
          setLoading(false);
          if (!u) {
            setIsAdmin(false);
            return;
          }
          const admin = a.isAdminEmail(u.email);
          setIsAdmin(admin);
          offData = admin
            ? a.watchStudents(setStudents, (e) => setError(friendly(e)))
            : a.watchMyRecord(
                u,
                setRecord,
                (e) => setError(friendly(e)),
                (why) =>
                  setNotice(
                    why === 'other-device'
                      ? 'Tài khoản này vừa đăng nhập trên thiết bị khác nên thiết bị này đã được đăng xuất. Mỗi tài khoản chỉ học được trên 1 thiết bị.'
                      : 'Tài khoản này đã bị xoá khỏi danh sách. Bé đăng nhập lại và chờ admin duyệt nhé.'
                  )
              );
        });
      })
      .catch(() => {
        setLoading(false);
        setError('Không tải được phần đăng nhập.');
      });
    return () => {
      dead = true;
      offAuth();
      offData();
    };
  }, [accounts]);

  const signIn = useCallback(async () => {
    setBusy(true);
    setError('');
    setNotice('');
    try {
      await (await accounts()).signInGoogle();
    } catch (e) {
      setError(friendly(e));
    } finally {
      setBusy(false);
    }
  }, [accounts]);

  const signOut = useCallback(async () => {
    await (await accounts()).signOutUser();
  }, [accounts]);

  const status: AccessStatus = !authEnabled
    ? 'open'
    : isAdmin
      ? 'admin'
      : !user
        ? 'guest'
        : record?.status ?? 'pending';

  return { enabled: authEnabled, loading, user, status, isAdmin, students, error, notice, busy, signIn, signOut, accounts };
};
