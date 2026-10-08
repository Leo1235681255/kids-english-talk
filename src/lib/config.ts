/** The one admin who approves students. Keep in sync with firestore.rules. */
export const ADMIN_EMAIL = 'nguyentoandinh.0511@gmail.com';

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

/** Accounts are only switched on once Firebase is configured; until then the app stays fully open. */
export const authEnabled = Boolean(firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId && firebaseConfig.appId);
