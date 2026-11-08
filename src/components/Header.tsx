import React from 'react';
import { Download, Wifi } from 'lucide-react';

interface Props {
  onOpenWallet: () => void;
  onOpenFiles: () => void;
}

export function Header({ onOpenWallet, onOpenFiles }: Props) {
  return (
    <header className="sticky top-0 z-40 bg-[#050811]/85 backdrop-blur-xl border-b border-white/[0.08] px-4 sm:px-8 py-3.5" dir="rtl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#portal" className="flex items-center gap-2.5 text-lg font-black text-white whitespace-nowrap shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-md shadow-cyan-500/20">
            <div className="w-full h-full bg-[#050811] rounded-[10px] flex items-center justify-center text-cyan-400">
              <Wifi className="w-4 h-4" />
            </div>
          </div>
          <span>شبكة البشير نت</span>
        </a>

        {/* Zone 2: 4-5 Clean Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#portal" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            بوابة الدخول
          </a>
          <a href="#pricing" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            باقات الكروت
          </a>
          <button 
            onClick={onOpenWallet}
            className="hover:text-red-400 transition-colors whitespace-nowrap shrink-0 text-slate-300 cursor-pointer"
          >
            محفظة جيب
          </button>
          <a href="#support" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            نقاط البيع والدعم
          </a>
          <button
            onClick={onOpenFiles}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 text-slate-400 text-xs cursor-pointer hover:underline"
          >
            ملفات الراوتر الأصلية
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/23733.zip"
            download="23733.zip"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition-all shadow-lg shadow-cyan-500/25 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>تحميل 23733.zip</span>
          </a>
        </div>
      </div>
    </header>
  );
}
