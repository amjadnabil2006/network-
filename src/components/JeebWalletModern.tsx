import React, { useState } from 'react';
import { Copy, Check, X, CreditCard } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  networkCode?: string;
}

export function JeebWalletModern({ isOpen, onClose, networkCode = '23733' }: Props) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(networkCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    { title: 'شحن وسداد', desc: 'افتح تطبيق جيب > الشحن والسداد' },
    { title: 'خدمات الإنترنت', desc: 'اختر (الإنترنت والهاتف الثابت)' },
    { title: 'كروت الشبكات', desc: 'اختر (كروت الشبكات المحلية)' },
    { title: 'رمز شبكة البشير', desc: `أدخل رقم الشبكة: (${networkCode})` },
    { title: 'فئة الكرت', desc: 'حدد الفئة (100، 200، 300، 500)' },
    { title: 'استلام الكرت', desc: 'أكد السداد وسيصلك الكود فوراً' },
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      dir="rtl"
    >
      <div 
        className="relative w-full max-w-sm bg-gradient-to-b from-[#111625] to-[#0A0D17] border border-red-500/40 rounded-2xl shadow-[0_0_35px_rgba(239,68,68,0.25)] overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500" />

        {/* Compact Header */}
        <div className="p-3.5 pb-2.5 flex items-center justify-between border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center text-white font-black text-sm shadow-md shadow-red-600/30">
              جيب
            </div>
            <div>
              <h3 className="font-bold text-white text-xs">الشراء عبر محفظة جيب</h3>
              <p className="text-[10px] text-red-400">كود الشبكة المعتمد: {networkCode}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Compact Holographic Fintech Card */}
        <div className="p-3.5 space-y-3.5">
          <div 
            onClick={handleCopy}
            className="group relative h-36 rounded-xl p-3.5 bg-gradient-to-br from-red-600 via-rose-700 to-red-900 border border-white/20 shadow-lg overflow-hidden cursor-pointer transition-all duration-200 hover:scale-[1.01]"
          >
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-8 h-6 rounded bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-600 p-0.5 flex flex-col justify-between shadow-inner">
                    <div className="h-0.5 bg-amber-800/40 rounded-full" />
                    <div className="h-0.5 bg-amber-800/40 rounded-full" />
                  </div>
                  <CreditCard className="w-4 h-4 text-white/70" />
                </div>
                <span className="text-sm font-extrabold tracking-wide text-white">
                  شبكة البشير نت
                </span>
              </div>

              {/* Code Display */}
              <div>
                <span className="text-[10px] text-red-200 block mb-0.5">رمز الشبكة في جيب</span>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono tracking-widest text-white tabular-nums drop-shadow">
                    {networkCode}
                  </span>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md text-[11px] font-bold text-white border border-white/20 group-hover:bg-white group-hover:text-red-600 transition-colors">
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'تم النسخ!' : 'نسخ'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Steps List */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">
              خطوات الشحن:
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {steps.map((st, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg border text-[10px] flex items-start gap-1.5 ${
                    i === 3
                      ? 'bg-red-500/15 border-red-500/40 text-red-200 font-bold'
                      : 'bg-white/[0.03] border-white/[0.06] text-slate-300'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-red-600/40 text-red-300 font-bold flex items-center justify-center shrink-0 text-[9px] mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <strong className="block text-white mb-0.5 text-[10.5px]">{st.title}</strong>
                    <span className="text-[9.5px] text-slate-400 leading-tight block">{st.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleCopy}
            className="w-full py-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-red-600/30 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'تم نسخ رمز الشبكة 23733' : 'نسخ كود الشبكة (23733)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
