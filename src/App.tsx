/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Download, Wifi, FileArchive, Globe, Eye } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'login' | 'status' | 'file'>('login');

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 flex flex-col font-sans" dir="rtl">
      {/* Top Bar */}
      <header className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between gap-3 sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
            <Wifi className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-sm text-white block">شبكة البشير نت</span>
            <span className="text-[11px] text-slate-400">كود المحفظة: 23733</span>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveView('login')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeView === 'login'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            صفحة تسجيل الدخول
          </button>
          <button
            onClick={() => setActiveView('status')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeView === 'status'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            صفحة الرصيد (status)
          </button>
          <button
            onClick={() => setActiveView('file')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
              activeView === 'file'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            ملف 23733.zip
          </button>
        </div>

        {/* Download Button */}
        <a
          href="/23733.zip"
          download="23733.zip"
          className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors shadow-sm"
        >
          <Download className="w-3.5 h-3.5" />
          <span>تحميل 23733.zip</span>
        </a>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4">
        {activeView === 'login' && (
          <div className="w-full max-w-xl bg-black rounded-xl overflow-hidden shadow-2xl border border-slate-800 min-h-[700px] flex flex-col">
            <iframe
              src="/login.html"
              title="صفحة تسجيل دخول شبكة البشير نت"
              className="w-full flex-1 min-h-[700px] border-0 bg-transparent"
            />
          </div>
        )}

        {activeView === 'status' && (
          <div className="w-full max-w-xl bg-black rounded-xl overflow-hidden shadow-2xl border border-slate-800 min-h-[500px] flex flex-col">
            <iframe
              src="/status.html"
              title="صفحة الرصيد"
              className="w-full flex-1 min-h-[500px] border-0 bg-transparent"
            />
          </div>
        )}

        {activeView === 'file' && (
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4">
              <FileArchive className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-white mb-1">ملف 23733.zip</h2>
            <p className="text-xs text-slate-400 mb-5">
              الملف محفوظ ومستخرج في المجلد الجذري، وجاهز للرفع على راوتر ميكروتك
            </p>

            <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl text-xs space-y-2 mb-5 text-right">
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">اسم الملف:</span>
                <span className="font-mono text-cyan-300 font-bold">23733.zip</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">الحجم:</span>
                <span className="font-mono text-emerald-400 font-bold">576 KB</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">المسار:</span>
                <span className="font-mono text-slate-300">/23733.zip</span>
              </div>
            </div>

            <a
              href="/23733.zip"
              download="23733.zip"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-xs"
            >
              <Download className="w-4 h-4" />
              <span>تحميل الملف الآن</span>
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
