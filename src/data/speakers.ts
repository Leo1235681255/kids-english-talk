import { Speaker } from '../types';

export type Voice = 'Mi' | 'Bin' | 'Pip' | 'Teacher';

/** Avatar, name-chip colours and speech voice for everyone who talks in a lesson. */
export const SPEAKERS: Record<Speaker, { avatar: string; chip: string; voice: Voice }> = {
  Mi: { avatar: '/art/girl.png', chip: 'bg-yellow-400 text-yellow-950', voice: 'Mi' },
  Bin: { avatar: '/art/boy.png', chip: 'bg-blue-500 text-white', voice: 'Bin' },
  Pip: { avatar: '/art/pip_sit.png', chip: 'bg-orange-500 text-white', voice: 'Pip' },
  'Miss Hoa': { avatar: '/art/sp_hoa.png', chip: 'bg-emerald-500 text-white', voice: 'Teacher' },
  Lan: { avatar: '/art/sp_lan.png', chip: 'bg-pink-500 text-white', voice: 'Mi' },
  Mom: { avatar: '/art/sp_mom.png', chip: 'bg-rose-500 text-white', voice: 'Teacher' },
  Grandma: { avatar: '/art/sp_grandma.png', chip: 'bg-purple-500 text-white', voice: 'Teacher' },
  Ant: { avatar: '/art/sp_ant.png', chip: 'bg-red-500 text-white', voice: 'Pip' },
  'Little Crab': { avatar: '/art/sp_crab.png', chip: 'bg-red-400 text-white', voice: 'Bin' },
  Dolphin: { avatar: '/art/sp_dolphin.png', chip: 'bg-sky-500 text-white', voice: 'Mi' },
  Octopus: { avatar: '/art/sp_octopus.png', chip: 'bg-fuchsia-500 text-white', voice: 'Bin' },
};
