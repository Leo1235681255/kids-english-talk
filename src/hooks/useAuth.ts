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
  busy: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  accounts: () => Promise<Accounts>;
}

const friendly = (e: unknown) => {
  const code = (e as { code?: string })?.code ?? '';
  if (code === 'permission-denied') return 'Chưa có quyền truy cập dữ liệu. Admin cần kiểm tra lại luật Firestore.';
  if (code.startsWith('auth/network')) return 'Mất mạng rồi, bé thử lại nhé.';
  return 'Có lỗi xảy ra, thử lại sau nhé.';
};

export const useAuth = (): AuthApi => {
  const [loading, setLoading] = useState(authEnabled);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [record, setRecord] = useState<Student | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);
  const [error, setError] = useState('');
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
            : a.watchMyRecord(u, setRecord, (e) => setError(friendly(e)));
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

  return { enabled: authEnabled, loading, user, status, isAdmin, students, error, busy, signIn, signOut, accounts };
};
