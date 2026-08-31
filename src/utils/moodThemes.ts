export type MoodId = 'cb' | 'zen' | 'hawaii' | 'anime' | 'scifi';

export interface MoodConfig {
  id: MoodId;
  name: string;
  subtitle: string;
  motto: string;
  themeColor: string; // Primary brand color
  themeColorLight: string; // Light accent/selection background
  badgeBorder: string;
}

export const MOODS: Record<MoodId, MoodConfig> = {
  zen: {
    id: 'zen',
    name: 'Zen',
    subtitle: 'Focus like still water, rise like the dawn.',
    motto: 'Focus like still water, rise like the dawn.',
    themeColor: '#0d5c6f', // Tranquil Deep Teal
    themeColorLight: '#e6f4f7',
    badgeBorder: '#0d5c6f',
  },
  hawaii: {
    id: 'hawaii',
    name: 'Hawaii',
    subtitle: 'Ride the wave to a 1600 score.',
    motto: 'Ride the wave to a 1600 score.',
    themeColor: '#0284c7', // Radiant Hawaiian Ocean Blue
    themeColorLight: '#e0f2fe',
    badgeBorder: '#0284c7',
  },
  anime: {
    id: 'anime',
    name: 'Anime',
    subtitle: 'Channel your inner power & shine like a star.',
    motto: 'Channel your inner power & shine like a star.',
    themeColor: '#5b21b6', // Deep Authentic Anime Violet / Indigo
    themeColorLight: '#f3e8ff',
    badgeBorder: '#5b21b6',
  },
  scifi: {
    id: 'scifi',
    name: 'Sci-Fi',
    subtitle: 'Lock on target. Rocket to a perfect score!',
    motto: 'Lock on target. Rocket to a perfect score!',
    themeColor: '#00838f', // Cyber Deep Cyan Blue
    themeColorLight: '#ecfeff',
    badgeBorder: '#06b6d4',
  },
  cb: {
    id: 'cb',
    name: 'Tradition',
    subtitle: 'Precision, discipline, and standard excellence.',
    motto: 'Precision, discipline, and standard excellence.',
    themeColor: '#003366', // Official Navy
    themeColorLight: '#e0ecf8',
    badgeBorder: '#003366',
  },
};

export const MOOD_LIST: MoodConfig[] = [
  MOODS.zen,
  MOODS.hawaii,
  MOODS.anime,
  MOODS.scifi,
  MOODS.cb,
];

export const DEFAULT_MOOD: MoodId = 'zen';
