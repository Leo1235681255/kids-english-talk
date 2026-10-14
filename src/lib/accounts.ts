/** All Firebase code lives here and is loaded on demand, so the app stays light when accounts are off. */
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut, User } from 'firebase/auth';
import { collection, deleteDoc, deleteField, doc, getDoc, getFirestore, limit, onSnapshot, orderBy, query, setDoc, updateDoc } from 'firebase/firestore';
import { ADMIN_EMAIL, firebaseConfig } from './config';
import { Honor, Student, StudentStatus } from '../types';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const students = () => collection(db, 'students');
const ref = (email: string) => doc(db, 'students', email.toLowerCase());

export interface AuthUser {
  uid: string;
  email: string;
  name: string;
  photoURL: string;
}

const toUser = (u: User): AuthUser => ({ uid: u.uid, email: (u.email ?? '').toLowerCase(), name: u.displayName ?? '', photoURL: u.photoURL ?? '' });

export const isAdminEmail = (email: string) => email.toLowerCase() === ADMIN_EMAIL;

export const subscribeAuth = (cb: (u: AuthUser | null) => void) => onAuthStateChanged(auth, (u) => cb(u && u.email ? toUser(u) : null));

/* One device at a time: every sign-in takes over the account, and the device that was signed in before is signed out. */
const SESSION_KEY = 'ket_session';
const CLAIM_KEY = 'ket_claim';
const store = {
  get: (k: string) => {
    try {
      return localStorage.getItem(k);
    } catch {
      return null;
    }
  },
  set: (k: string, v: string) => {
    try {
      localStorage.setItem(k, v);
    } catch {
      /* private mode: this device can't be told apart from a fresh one */
    }
  },
  del: (k: string) => {
    try {
      localStorage.removeItem(k);
    } catch {
      /* ignore */
    }
  },
};

const newId = () => (typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`);

/** Short human label for the admin list, e.g. "Safari · iPhone". */
const deviceLabel = () => {
  const ua = navigator.userAgent;
  const os = /iPhone/.test(ua) ? 'iPhone' : /iPad/.test(ua) ? 'iPad' : /Android/.test(ua) ? 'Android' : /Windows/.test(ua) ? 'Windows' : /Mac OS X/.test(ua) ? 'Mac' : /Linux/.test(ua) ? 'Linux' : 'Thiết bị';
  const browser = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /Chrome|CriOS/.test(ua) ? 'Chrome' : /Firefox|FxiOS/.test(ua) ? 'Firefox' : /Safari/.test(ua) ? 'Safari' : 'Trình duyệt';
  return `${browser} · ${os}`;
};

export type KickReason = 'other-device' | 'removed';

export const signInGoogle = async () => {
  store.set(CLAIM_KEY, '1'); // this device is about to sign in, so it takes the account over
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  try {
    await signInWithPopup(auth, provider);
  } catch (e) {
    const code = (e as { code?: string }).code ?? '';
    if (code === 'auth/popup-blocked' || code === 'auth/operation-not-supported-in-this-environment') {
      await signInWithRedirect(auth, provider);
    } else if (code !== 'auth/popup-closed-by-user' && code !== 'auth/cancelled-popup-request') {
      store.del(CLAIM_KEY);
      throw e;
    } else {
      store.del(CLAIM_KEY);
    }
  }
};

export const signOutUser = () => {
  store.del(SESSION_KEY);
  store.del(CLAIM_KEY);
  return signOut(auth);
};

/**
 * Live view of the signed-in student's own record. A first-time Gmail is registered as "pending".
 * Also enforces one device per account: a fresh sign-in takes over, any other device is signed out via `onKicked`.
 */
export const watchMyRecord = (user: AuthUser, cb: (s: Student | null) => void, onError: (e: Error) => void, onKicked: (why: KickReason) => void) => {
  let created = false;
  let seen = false;
  let claiming = false;
  const kick = (why: KickReason) => {
    store.del(SESSION_KEY);
    store.del(CLAIM_KEY);
    signOut(auth).finally(() => onKicked(why));
  };
  const claim = () => {
    const session = { id: newId(), device: deviceLabel(), at: Date.now() };
    store.set(SESSION_KEY, session.id);
    store.del(CLAIM_KEY);
    return session;
  };
  return onSnapshot(
    ref(user.email),
    async (snap) => {
      if (!snap.exists()) {
        if (seen) {
          kick('removed'); // the admin deleted this account while the child was signed in
          return;
        }
        cb(null);
        if (created) return;
        created = true;
        const now = Date.now();
        try {
          await setDoc(ref(user.email), {
            email: user.email,
            name: user.name,
            photoURL: user.photoURL,
            status: 'pending',
            source: 'self',
            createdAt: now,
            updatedAt: now,
            session: claim(),
          } satisfies Student);
        } catch (e) {
          onError(e as Error);
        }
        return;
      }
      seen = true;
      const data = snap.data() as Student;
      const mine = store.get(SESSION_KEY);
      if (store.get(CLAIM_KEY) || !mine) {
        // fresh sign-in (or a session from before this rule existed): this device becomes the active one
        if (claiming) return;
        claiming = true;
        const session = claim();
        try {
          await updateDoc(ref(user.email), { session, name: user.name || data.name, photoURL: user.photoURL || data.photoURL });
          cb({ ...data, session });
        } catch (e) {
          onError(e as Error);
        } finally {
          claiming = false;
        }
        return;
      }
      if (claiming) return;
      if (data.session?.id !== mine) {
        kick('other-device');
        return;
      }
      cb(data);
    },
    (e) => onError(e)
  );
};

/* ───────────── admin ───────────── */

export const watchStudents = (cb: (list: Student[]) => void, onError: (e: Error) => void) =>
  onSnapshot(
    students(),
    (snap) => cb(snap.docs.map((d) => d.data() as Student).sort((a, b) => b.createdAt - a.createdAt)),
    (e) => onError(e)
  );

export const setStatus = (email: string, status: StudentStatus) =>
  setDoc(ref(email), { status, updatedAt: Date.now(), ...(status === 'approved' ? { approvedBy: ADMIN_EMAIL } : {}) }, { merge: true });

export const removeStudent = (email: string) => deleteDoc(ref(email));

/** Pre-approve Gmail addresses the admin hands out; students just sign in with Google. */
export const grantEmails = async (emails: string[]) => {
  const now = Date.now();
  for (const raw of emails) {
    const email = raw.toLowerCase();
    const existing = await getDoc(ref(email));
    if (existing.exists()) {
      await setDoc(ref(email), { status: 'approved', updatedAt: now, approvedBy: ADMIN_EMAIL }, { merge: true });
    } else {
      await setDoc(ref(email), { email, name: '', photoURL: '', status: 'approved', source: 'admin', createdAt: now, updatedAt: now, approvedBy: ADMIN_EMAIL });
    }
  }
};

/** Admin: sign the student's current device out (they can sign in again right away). */
export const kickDevice = (email: string) => updateDoc(ref(email), { session: deleteField() });

/* ───────────── honor board ───────────── */

const honors = () => collection(db, 'honors');

/** "Nguyễn Văn An" -> "Bé An": the given name only, so no full names are shown in public. */
export const shortName = (full: string) => {
  const last = full.trim().split(/\s+/).pop() ?? '';
  return last ? `Bé ${last}` : 'Bé yêu';
};

/** Top children by stars. Hidden ones are dropped here so the board never shows them. */
export const watchHonors = (cb: (list: Honor[]) => void, onError: (e: Error) => void, includeHidden = false) =>
  onSnapshot(
    query(honors(), orderBy('stars', 'desc'), limit(includeHidden ? 100 : 40)),
    (snap) => {
      const all = snap.docs.map((d) => ({ ...(d.data() as Omit<Honor, 'uid'>), uid: d.id }));
      cb(includeHidden ? all : all.filter((h) => !h.hidden));
    },
    (e) => onError(e)
  );

/** An approved child's own progress, shown on the board. */
export const saveHonor = (user: AuthUser, stars: number, lessons: number) =>
  setDoc(doc(db, 'honors', user.uid), { name: shortName(user.name), stars, lessons, updatedAt: Date.now() }, { merge: true });

export const setHonorHidden = (uid: string, hidden: boolean) => setDoc(doc(db, 'honors', uid), { hidden }, { merge: true });
export const removeHonor = (uid: string) => deleteDoc(doc(db, 'honors', uid));
