import React from 'react';
import { MoodId } from '../utils/moodThemes';

interface MoodLogoIconProps {
  moodId: MoodId;
  size?: number;
  className?: string;
}

export const MoodLogoIcon: React.FC<MoodLogoIconProps> = ({ moodId, size = 42, className = '' }) => {
  if (moodId === 'zen') {
    // 🌿 Zen Logo: Elegant Mount Fuji with Crimson Sunrise & Emerald Bonsai
    return (
      <div 
        className={`relative flex items-center justify-center rounded-xl overflow-hidden shadow-sm shrink-0 ring-1 ring-black/10 ${className}`}
        style={{ width: size, height: size, background: 'linear-gradient(135deg, #05212b 0%, #0d5c6f 100%)' }}
        title="Zen Mood: Mount Fuji Sunrise"
      >
        <svg viewBox="0 0 48 48" width={size} height={size} fill="none">
          {/* Crimson Sun Disc */}
          <circle cx="24" cy="17" r="9" fill="#e11d48" />
          <circle cx="24" cy="17" r="13" fill="#f43f5e" fillOpacity="0.25" />
          {/* Mount Fuji Silhouette */}
          <path d="M 24 9 C 22 17 16 27 6 39 L 42 39 C 32 27 26 17 24 9 Z" fill="#03151c" />
          {/* Snowcap with 3 ridges */}
          <path d="M 24 9 C 22.6 14.5 20 19 16.5 23 C 18.8 22 21 23.5 24 25.5 C 27 23.5 29.2 22 31.5 23 C 28 19 25.4 14.5 24 9 Z" fill="#ffffff" />
          {/* Emerald Bonsai branches */}
          <ellipse cx="11" cy="31" rx="4.5" ry="2.2" fill="#0d9488" />
          <ellipse cx="9" cy="27" rx="3.5" ry="1.8" fill="#14b8a6" />
          <ellipse cx="14" cy="28" rx="2.5" ry="1.4" fill="#2dd4bf" />
        </svg>
      </div>
    );
  }

  if (moodId === 'hawaii') {
    // 🌺 Hawaii Logo: Vibrant Rainbow, Tropical Palm & Cresting Wave
    return (
      <div 
        className={`relative flex items-center justify-center rounded-xl overflow-hidden shadow-sm shrink-0 ring-1 ring-black/10 ${className}`}
        style={{ width: size, height: size, background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' }}
        title="Hawaii Mood: Rainbow & Ocean Breeze"
      >
        <svg viewBox="0 0 48 48" width={size} height={size} fill="none">
          {/* Rainbow Arcs */}
          <path d="M 7 37 A 17 17 0 0 1 41 37" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 11 37 A 13 13 0 0 1 37 37" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M 14.5 37 A 9.5 9.5 0 0 1 33.5 37" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
          {/* Palm Silhouette */}
          <path d="M 17 38 Q 21 24 28 18" stroke="#042f2e" strokeWidth="2.2" fill="none" />
          <path d="M 28 18 Q 20 12 14 16" stroke="#10b981" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 28 18 Q 34 11 39 16" stroke="#10b981" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 28 18 Q 30 26 36 28" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          {/* Wave crest */}
          <path d="M 5 37 Q 15 31 25 37 T 45 37" stroke="#ffffff" strokeWidth="2.2" fill="none" opacity="0.95" />
          {/* Hibiscus flower dot */}
          <circle cx="37" cy="27" r="2.8" fill="#f43f5e" />
          <circle cx="37" cy="27" r="1" fill="#fef08a" />
        </svg>
      </div>
    );
  }

  if (moodId === 'anime') {
    // ⚡ Anime Logo: Radiant Crescent Moon & 4-Point Sparkling Star
    return (
      <div 
        className={`relative flex items-center justify-center rounded-xl overflow-hidden shadow-sm shrink-0 ring-1 ring-black/10 ${className}`}
        style={{ width: size, height: size, background: 'linear-gradient(135deg, #2e1065 0%, #7c3aed 100%)' }}
        title="Anime Mood: Celestial Star Maiden"
      >
        <svg viewBox="0 0 48 48" width={size} height={size} fill="none">
          {/* Glowing Aura Ring */}
          <circle cx="24" cy="24" r="18" stroke="#d8b4fe" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.7" />
          {/* Golden Crescent Moon */}
          <path d="M 29 8 C 17 11 12 21 15 32 C 17 38 25 42 32 40 C 22 38 18 28 24 19 C 26 15 31 12 35 11 C 33 9 31 8 29 8 Z" fill="#fde047" />
          {/* 4-Point Shimmering Star */}
          <path d="M 33 15 Q 33 21 38 21 Q 33 21 33 27 Q 33 21 28 21 Q 33 21 33 15 Z" fill="#ffffff" />
          <circle cx="15" cy="18" r="1.8" fill="#f472b6" />
          <circle cx="36" cy="35" r="1.8" fill="#fde047" />
          <circle cx="20" cy="36" r="1.2" fill="#ffffff" />
        </svg>
      </div>
    );
  }

  if (moodId === 'scifi') {
    // 🚀 Sci-Fi Logo: Cyber Starfighter with Targeting Reticle & Plasma Burn
    return (
      <div 
        className={`relative flex items-center justify-center rounded-xl overflow-hidden shadow-sm shrink-0 ring-1 ring-black/10 ${className}`}
        style={{ width: size, height: size, background: 'linear-gradient(135deg, #031422 0%, #00838f 100%)' }}
        title="Sci-Fi Mood: Starfighter & Reticle"
      >
        <svg viewBox="0 0 48 48" width={size} height={size} fill="none">
          {/* Radar HUD circles */}
          <circle cx="24" cy="24" r="18" stroke="#06b6d4" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.65" />
          <circle cx="24" cy="24" r="8" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
          <line x1="24" y1="3" x2="24" y2="9" stroke="#06b6d4" strokeWidth="1.5" />
          <line x1="24" y1="39" x2="24" y2="45" stroke="#06b6d4" strokeWidth="1.5" />
          {/* Starfighter */}
          <g transform="translate(24,24)">
            {/* Forward cockpit & fuselage */}
            <path d="M 0 -15 L 5 3 L 0 1 L -5 3 Z" fill="#38bdf8" />
            {/* Swept wings */}
            <path d="M 0 -4 L 16 8 L 13 11 L 3 5 L -3 5 L -13 11 L -16 8 Z" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
            {/* Cockpit canopy */}
            <circle cx="0" cy="-6" r="2" fill="#ffffff" />
            {/* Plasma thruster blast */}
            <path d="M -2.5 5 L 0 13 L 2.5 5 Z" fill="#06b6d4" />
          </g>
          <circle cx="37" cy="14" r="1.5" fill="#ef4444" />
          <circle cx="11" cy="34" r="1.5" fill="#38bdf8" />
        </svg>
      </div>
    );
  }

  // 🏛️ College Board Tradition Logo: Classical Columns Shield & Gold Star
  return (
    <div 
      className={`relative flex items-center justify-center rounded-xl overflow-hidden shadow-sm shrink-0 ring-1 ring-black/10 ${className}`}
      style={{ width: size, height: size, background: 'linear-gradient(135deg, #001f3f 0%, #003366 100%)' }}
      title="College Board Tradition Mood"
    >
      <svg viewBox="0 0 48 48" width={size} height={size} fill="none">
        {/* Shield */}
        <path d="M 24 7 L 39 13 L 39 27 C 39 36 24 42 24 42 C 24 42 9 36 9 27 L 9 13 Z" fill="#003366" stroke="#93c5fd" strokeWidth="1.8" />
        {/* Pillars */}
        <rect x="17" y="19" width="3" height="13" fill="#ffffff" rx="0.5" />
        <rect x="28" y="19" width="3" height="13" fill="#ffffff" rx="0.5" />
        <rect x="15" y="17" width="18" height="2.5" fill="#ffffff" rx="0.5" />
        <rect x="14" y="32" width="20" height="2.5" fill="#ffffff" rx="0.5" />
        {/* Gold Star */}
        <polygon points="24,10 25.5,14 29.5,14.3 26.5,16.8 27.3,20.8 24,18.8 20.7,20.8 21.5,16.8 18.5,14.3 22.5,14" fill="#fbbf24" />
      </svg>
    </div>
  );
};
