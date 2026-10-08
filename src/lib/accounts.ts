/** All Firebase code lives here and is loaded on demand, so the app stays light when accounts are off. */
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut, User } from 'firebase/auth';
import { collection, deleteDoc, doc, getDoc, getFirestore, onSnapshot, setDoc } from 'firebase/firestore';
import { ADMIN_EMAIL, firebaseConfig } from './config';
import { Student, StudentStatus } from '../types';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const students = () => collection(db, 'students');
const ref = (email: string) => doc(db, 'students', email.toLowerCase());

export interface AuthUser {
  email: string;
  name: string;
  photoURL: string;
}

const toUser = (u: User): AuthUser => ({ email: (u.email ?? '').toLowerCase(), name: u.displayName ?? '', photoURL: u.photoURL ?? '' });

export const isAdminEmail = (email: string) => email.toLowerCase() === ADMIN_EMAIL;

export const subscribeAuth = (cb: (u: AuthUser | null) => void) => onAuthStateChanged(auth, (u) => cb(u && u.email ? toUser(u) : null));

export const signInGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  try {
    await signInWithPopup(auth, provider);
  } catch (e) {
    const code = (e as { code?: string }).code ?? '';
    if (code === 'auth/popup-blocked' || code === 'auth/operation-not-supported-in-this-environment') {
      await signInWithRedirect(auth, provider);
    } else if (code !== 'auth/popup-closed-by-user' && code !== 'auth/cancelled-popup-request') {
      throw e;
    }
  }
};

export const signOutUser = () => signOut(auth);

/** Live view of the signed-in student's own record. A first-time Gmail is registered as "pending". */
export const watchMyRecord = (user: AuthUser, cb: (s: Student | null) => void, onError: (e: Error) => void) => {
  let asked = false;
  return onSnapshot(
    ref(user.email),
    async (snap) => {
      if (snap.exists()) {
        cb(snap.data() as Student);
        return;
      }
      cb(null);
      if (asked) return;
      asked = true;
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
        } satisfies Student);
      } catch (e) {
        onError(e as Error);
      }
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
