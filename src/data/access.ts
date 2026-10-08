export type AccessStatus = 'open' | 'guest' | 'pending' | 'approved' | 'blocked' | 'admin';

/** Units anyone can try before being approved. */
export const TRIAL_UNITS = ['L1-U01'];

export const canOpenUnit = (status: AccessStatus, unitCode: string) => {
  if (status === 'blocked') return false;
  if (status === 'guest' || status === 'pending') return TRIAL_UNITS.includes(unitCode);
  return true; // open (accounts off), approved, admin
};
