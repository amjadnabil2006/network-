import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, ShieldCheck, Smartphone } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  networkCode?: string;
}

export function JeebWalletModal({ isOpen, onClose, networkCode = '23733' }: Props) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(networkCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const steps = [
    'افتح تطبيق "جيب" الإلكتروني على هاتفك واذهب إلى الشحن والسداد',
    'اختر باقة "الإنترنت والهاتف الثابت"',
    'اختر قائمة "كروت الشبكات المحلية"',
    `أدخل رقم شبكة البشير نت: (${networkCode})`,
    'اختر فئة الكرت المطلوبة (100، 200، 300، أو 500 ريال)',
    'أكّد عملية الشراء وسيصلك رقم الكرت فوراً برسالة نصية ومباشرة في التطبيق',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" dir="rtl">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Red Accent of Jeeb Wallet */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold text-lg backdrop-blur-md">
              جيب
            </div>
            <div>
              <h3 className="font-bold text-white text-base leading-tight">شراء كروت عبر محفظة جيب</h3>
              <p className="text-xs text-red-100">شحن فوري مباشر على مدار 24 ساعة</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Network Code Showcase */}
        <div className="p-6 space-y-6">
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 block mb-0.5">رمز شبكة البشير نت في تطبيق جيب</span>
              <span className="text-3xl font-extrabold font-mono text-amber-400 tracking-wider tabular-nums">
                {networkCode}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs transition-all ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-red-600 hover:bg-red-500 text-white shadow-md'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>تم النسخ بنجاح</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>نسخ رقم الشبكة</span>
                </>
              )}
            </button>
          </div>

          {/* Step by Step Guide */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
              خطوات الشراء السريعة:
            </h4>
            <div className="space-y-2.5">
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80 text-xs leading-relaxed text-slate-300"
                >
                  <span className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 font-bold flex items-center justify-center shrink-0 text-[11px] mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Notice & Outlink */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>دفع إلكتروني آمن ومعتمد</span>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors"
            >
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
