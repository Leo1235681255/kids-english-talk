export type AccessStatus = 'open' | 'guest' | 'pending' | 'approved' | 'blocked' | 'admin';

/** The only lesson anyone can try before being approved: Unit 1, lesson 1. */
export const TRIAL_LESSONS = ['L1-U01-B1'];

export const canOpenLesson = (status: AccessStatus, lessonId: string) => {
  if (status === 'blocked') return false;
  if (status === 'guest' || status === 'pending') return TRIAL_LESSONS.includes(lessonId);
  return true; // open (accounts off), approved, admin
};
