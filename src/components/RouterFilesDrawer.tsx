import React, { useState } from 'react';
import { X, Download, FileCode, Check, Copy, ExternalLink, HardDrive } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function RouterFilesDrawer({ isOpen, onClose }: Props) {
  const [selectedFile, setSelectedFile] = useState<'login' | 'status' | 'logout'>('login');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const files = [
    { id: 'login', name: 'login.html', desc: 'صفحة تسجيل الدخول الأصلية لراوتر ميكروتك' },
    { id: 'status', name: 'status.html', desc: 'صفحة الرصيد ومعلومات الجلسة النشطة' },
    { id: 'logout', name: 'logout.html', desc: 'صفحة تأكيد قطع الاتصال والخروج' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" dir="rtl">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">ملفات راوتر ميكروتك (Hotspot Files)</h3>
              <p className="text-xs text-slate-400">الملفات الأصلية المستخرجة من 23733.zip</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/23733.zip"
              download="23733.zip"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>تحميل 23733.zip</span>
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="px-6 py-2.5 bg-slate-950/60 border-b border-slate-800/80 flex items-center gap-2">
          {files.map((file) => (
            <button
              key={file.id}
              onClick={() => setSelectedFile(file.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                selectedFile === file.id
                  ? 'bg-cyan-600/20 border border-cyan-500/40 text-cyan-300'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>{file.name}</span>
            </button>
          ))}
          <a
            href={`/${selectedFile}.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-auto text-xs text-slate-400 hover:text-white flex items-center gap-1"
          >
            <span>فتح في نافذة جديدة</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Live Iframe Preview of the original router file */}
        <div className="flex-1 bg-black overflow-hidden relative min-h-[450px]">
          <iframe
            src={`/${selectedFile}.html`}
            title={`معاينة ${selectedFile}.html`}
            className="w-full h-full border-0"
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>هذه الملفات متوافقة مع جميع راوترات MikroTik RouterOS</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs"
          >
            إغلاق المعاينة
          </button>
        </div>
      </div>
    </div>
  );
}
