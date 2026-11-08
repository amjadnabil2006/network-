import React, { useState } from 'react';
import { Palette, X, Check } from 'lucide-react';

export type ThemeId = 'gold' | 'black' | 'white' | 'navy' | 'burgundy' | 'sky';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  hex: string;
  bodyBg: string;
  wrapBg: string;
  borderColor: string;
  borderGlow: string;
  text: string;
  textSecondary: string;
  speedBg: string;
  speedText: string;
  speedBorder: string;
  inputBg: string;
  inputText: string;
  inputBorder: string;
  submitBg: string;
  submitText: string;
  tableBorder: string;
  tableRowHover: string;
  marqueeBg: string;
  marqueeText: string;
  phoneBg: string;
  phoneText: string;
  phoneBorder: string;
  logoBg?: string; // Special contrast background for 1.png in light themes
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  gold: {
    id: 'gold',
    name: 'ذهبي',
    hex: '#eab308',
    bodyBg: 'linear-gradient(135deg, #181303 0%, #291e04 50%, #130f02 100%)',
    wrapBg: 'rgba(30, 22, 6, 0.94)',
    borderColor: '#cdaf0b',
    borderGlow: '0 0 25px rgba(205, 175, 11, 0.4), 0 16px 36px rgba(0,0,0,0.8)',
    text: '#ffffff',
    textSecondary: '#fef08a',
    speedBg: 'rgba(255, 206, 0, 0.92)',
    speedText: '#000000',
    speedBorder: '#ffd700',
    inputBg: 'rgba(255, 255, 255, 0.88)',
    inputText: '#000000',
    inputBorder: '#cdaf0b',
    submitBg: 'linear-gradient(135deg, #ca8a04 0%, #a16207 100%)',
    submitText: '#ffffff',
    tableBorder: 'rgba(255, 255, 255, 0.15)',
    tableRowHover: 'rgba(205, 175, 11, 0.15)',
    marqueeBg: 'rgba(0, 0, 0, 0.35)',
    marqueeText: '#ffffff',
    phoneBg: 'rgba(205, 175, 11, 0.15)',
    phoneText: '#fde047',
    phoneBorder: '#cdaf0b',
  },
  black: {
    id: 'black',
    name: 'أسود',
    hex: '#090d16',
    bodyBg: 'linear-gradient(135deg, #04060c 0%, #0a0e19 50%, #05070f 100%)',
    wrapBg: 'rgba(12, 16, 26, 0.94)',
    borderColor: '#38bdf8',
    borderGlow: '0 0 25px rgba(56, 189, 248, 0.35), 0 16px 36px rgba(0,0,0,0.9)',
    text: '#ffffff',
    textSecondary: '#94a3b8',
    speedBg: '#1e293b',
    speedText: '#38bdf8',
    speedBorder: 'rgba(56, 189, 248, 0.4)',
    inputBg: 'rgba(255, 255, 255, 0.9)',
    inputText: '#000000',
    inputBorder: '#38bdf8',
    submitBg: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    submitText: '#ffffff',
    tableBorder: 'rgba(255, 255, 255, 0.12)',
    tableRowHover: 'rgba(56, 189, 248, 0.12)',
    marqueeBg: 'rgba(0, 0, 0, 0.45)',
    marqueeText: '#ffffff',
    phoneBg: 'rgba(56, 189, 248, 0.15)',
    phoneText: '#38bdf8',
    phoneBorder: 'rgba(56, 189, 248, 0.4)',
  },
  white: {
    id: 'white',
    name: 'أبيض',
    hex: '#f8fafc',
    bodyBg: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
    wrapBg: 'rgba(255, 255, 255, 0.98)',
    borderColor: '#0284c7',
    borderGlow: '0 0 20px rgba(2, 132, 199, 0.25), 0 10px 25px rgba(0,0,0,0.1)',
    text: '#0f172a', // Deep solid charcoal black for crystal-clear readability
    textSecondary: '#334155',
    speedBg: '#f1f5f9',
    speedText: '#0f172a',
    speedBorder: '#cbd5e1',
    inputBg: '#ffffff',
    inputText: '#0f172a',
    inputBorder: '#0284c7',
    submitBg: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    submitText: '#ffffff',
    tableBorder: '#e2e8f0',
    tableRowHover: 'rgba(2, 132, 199, 0.08)',
    marqueeBg: 'rgba(15, 23, 42, 0.06)',
    marqueeText: '#0f172a',
    phoneBg: '#f1f5f9',
    phoneText: '#0284c7',
    phoneBorder: '#bae6fd',
    logoBg: 'rgba(15, 23, 42, 0.92)', // High contrast frame for white logo text in white theme
  },
  navy: {
    id: 'navy',
    name: 'كحلي',
    hex: '#1e3a8a',
    bodyBg: 'linear-gradient(135deg, #030b1c 0%, #091736 50%, #040e24 100%)',
    wrapBg: 'rgba(10, 23, 49, 0.94)',
    borderColor: '#60a5fa',
    borderGlow: '0 0 25px rgba(96, 165, 250, 0.35), 0 16px 36px rgba(0,0,0,0.85)',
    text: '#ffffff',
    textSecondary: '#cbd5e1',
    speedBg: '#1e3a8a',
    speedText: '#ffffff',
    speedBorder: '#60a5fa',
    inputBg: 'rgba(255, 255, 255, 0.92)',
    inputText: '#000000',
    inputBorder: '#60a5fa',
    submitBg: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    submitText: '#ffffff',
    tableBorder: 'rgba(255, 255, 255, 0.15)',
    tableRowHover: 'rgba(96, 165, 250, 0.15)',
    marqueeBg: 'rgba(0, 0, 0, 0.35)',
    marqueeText: '#ffffff',
    phoneBg: 'rgba(37, 99, 235, 0.2)',
    phoneText: '#93c5fd',
    phoneBorder: '#60a5fa',
  },
  burgundy: {
    id: 'burgundy',
    name: 'دم غزال',
    hex: '#be123c',
    bodyBg: 'linear-gradient(135deg, #180306 0%, #2f060e 50%, #160205 100%)',
    wrapBg: 'rgba(42, 7, 14, 0.94)',
    borderColor: '#f43f5e',
    borderGlow: '0 0 25px rgba(244, 63, 94, 0.35), 0 16px 36px rgba(0,0,0,0.85)',
    text: '#ffffff',
    textSecondary: '#fecdd3',
    speedBg: '#881337',
    speedText: '#ffffff',
    speedBorder: '#f43f5e',
    inputBg: 'rgba(255, 255, 255, 0.92)',
    inputText: '#000000',
    inputBorder: '#f43f5e',
    submitBg: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
    submitText: '#ffffff',
    tableBorder: 'rgba(255, 255, 255, 0.15)',
    tableRowHover: 'rgba(244, 63, 94, 0.15)',
    marqueeBg: 'rgba(0, 0, 0, 0.35)',
    marqueeText: '#ffffff',
    phoneBg: 'rgba(225, 29, 72, 0.2)',
    phoneText: '#fda4af',
    phoneBorder: '#f43f5e',
  },
  sky: {
    id: 'sky',
    name: 'سماوي',
    hex: '#0284c7',
    bodyBg: 'linear-gradient(135deg, #021c30 0%, #053b61 50%, #022137 100%)',
    wrapBg: 'rgba(7, 41, 69, 0.94)',
    borderColor: '#38bdf8',
    borderGlow: '0 0 25px rgba(56, 189, 248, 0.35), 0 16px 36px rgba(0,0,0,0.85)',
    text: '#ffffff',
    textSecondary: '#bae6fd',
    speedBg: '#0284c7',
    speedText: '#ffffff',
    speedBorder: '#38bdf8',
    inputBg: 'rgba(255, 255, 255, 0.92)',
    inputText: '#000000',
    inputBorder: '#38bdf8',
    submitBg: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    submitText: '#ffffff',
    tableBorder: 'rgba(255, 255, 255, 0.15)',
    tableRowHover: 'rgba(56, 189, 248, 0.15)',
    marqueeBg: 'rgba(0, 0, 0, 0.35)',
    marqueeText: '#ffffff',
    phoneBg: 'rgba(2, 132, 199, 0.2)',
    phoneText: '#7dd3fc',
    phoneBorder: '#38bdf8',
  },
};

interface Props {
  currentTheme: ThemeId;
  onSelectTheme: (id: ThemeId) => void;
}

export function ColorPaletteDrawer({ currentTheme, onSelectTheme }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const themeList: ThemeId[] = ['gold', 'black', 'white', 'navy', 'burgundy', 'sky'];

  return (
    <div className="fixed left-3 top-1/2 -translate-y-1/2 z-50 flex items-center" dir="rtl">
      {/* Floating Animated Trigger Button on the Left */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-12 h-12 rounded-2xl bg-black/80 hover:bg-black text-white border-2 flex flex-col items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
        style={{
          borderColor: THEMES[currentTheme].borderColor,
          boxShadow: `0 0 18px ${THEMES[currentTheme].hex}55`,
        }}
        aria-label="التحكم في الألوان"
        title="تغيير لون الصفحة"
      >
        <Palette className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
        <span className="text-[9px] font-bold mt-0.5" style={{ color: THEMES[currentTheme].borderColor }}>
          لون
        </span>
      </button>

      {/* Animated Popout Drawer with 6 Colors */}
      {isOpen && (
        <div 
          className="mr-3 w-48 p-3 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)] text-white space-y-2.5 animate-in fade-in slide-in-from-left duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
              <Palette className="w-3.5 h-3.5" />
              <span>اختر لون الصفحة:</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 rounded-md hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 6 Explicit Color Options */}
          <div className="space-y-1.5">
            {themeList.map((tId) => {
              const t = THEMES[tId];
              const isSelected = currentTheme === tId;
              return (
                <button
                  key={tId}
                  onClick={() => {
                    onSelectTheme(tId);
                  }}
                  className={`w-full px-2.5 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-white/20 shadow-md ring-1 ring-white/50'
                      : 'hover:bg-white/10 text-slate-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-4 h-4 rounded-full border border-white/40 shadow-sm shrink-0"
                      style={{ backgroundColor: t.hex }}
                    />
                    <span>{t.name}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          <div className="pt-1 border-t border-white/10 text-[10px] text-center text-slate-400">
            اللون الحالي: <strong className="text-white">{THEMES[currentTheme].name}</strong>
          </div>
        </div>
      )}
    </div>
  );
}
