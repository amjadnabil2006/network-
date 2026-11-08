import React, { useState } from 'react';
import { Clock, Calendar, DownloadCloud, Zap, Check, ArrowRight, Sparkles } from 'lucide-react';

interface Props {
  onSelectPackage: (pkgPrice: string) => void;
  onOpenWallet: () => void;
}

export function InteractivePricing({ onSelectPackage, onOpenWallet }: Props) {
  const [selectedIdx, setSelectedIdx] = useState<number>(1); // 200 Riyal default

  const packages = [
    {
      price: '100',
      currency: 'ريال',
      hours: '3 ساعات',
      validity: '3 أيام',
      download: '300 MB',
      speedTag: 'تصفح خفيف وتواصل',
      color: 'from-cyan-500/20 to-blue-500/10',
      borderColor: 'border-cyan-500/30',
      accentColor: 'text-cyan-400',
      isPopular: false,
    },
    {
      price: '200',
      currency: 'ريال',
      hours: '8 ساعات',
      validity: '8 أيام',
      download: '700 MB',
      speedTag: 'الأكثر استخداماً وطلباً',
      color: 'from-cyan-500/30 via-blue-600/20 to-indigo-600/20',
      borderColor: 'border-cyan-400',
      accentColor: 'text-cyan-300',
      isPopular: true,
    },
    {
      price: '300',
      currency: 'ريال',
      hours: '12 ساعة',
      validity: '12 يوم',
      download: '1000 MB (1GB)',
      speedTag: 'مشاهدة فيديو وتنزيل',
      color: 'from-blue-500/20 to-indigo-500/10',
      borderColor: 'border-blue-500/30',
      accentColor: 'text-blue-400',
      isPopular: false,
    },
    {
      price: '500',
      currency: 'ريال',
      hours: '20 ساعة',
      validity: '20 يوم',
      download: '2000 MB (2GB)',
      speedTag: 'باقة التوفير الفائقة',
      color: 'from-amber-500/20 to-rose-500/10',
      borderColor: 'border-amber-500/30',
      accentColor: 'text-amber-400',
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 relative z-10" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
            <Zap className="w-3.5 h-3.5" />
            <span>تسعيرات رسمية شفافة بدون انقطاع</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight [text-wrap:balance]">
            باقات كروت شبكة البشير نت
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            اختر باقتك المفضلة وسجل دخولك بلمسة واحدة، أو اشحن رصيدك عبر محفظة جيب
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((pkg, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`group relative rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer backdrop-blur-xl ${
                  pkg.isPopular
                    ? 'bg-gradient-to-b from-cyan-950/40 via-slate-900/80 to-slate-950/90 border-2 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.25)] scale-[1.02]'
                    : isSelected
                    ? 'bg-white/[0.05] border-2 border-cyan-500/60 shadow-xl'
                    : 'bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.04]'
                }`}
              >
                {/* Popular Badge */}
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-[11px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>الباقة الأكثر طلباً</span>
                  </div>
                )}

                <div>
                  {/* Price Tag */}
                  <div className="flex items-baseline gap-1.5 mb-1 pt-2">
                    <span className="text-4xl font-black text-white font-mono tabular-nums tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-sm font-bold text-slate-400">{pkg.currency}</span>
                  </div>

                  <p className="text-xs text-slate-400 mb-6">{pkg.speedTag}</p>

                  {/* Feature Breakdown */}
                  <div className="space-y-3.5 text-xs pt-4 border-t border-white/[0.08] mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span>الوقت الإجمالي:</span>
                      </div>
                      <span className="font-bold text-white font-mono">{pkg.hours}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span>مدة الصلاحية:</span>
                      </div>
                      <span className="font-bold text-white font-mono">{pkg.validity}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400">
                        <DownloadCloud className="w-4 h-4 text-emerald-400" />
                        <span>سعة التحميل:</span>
                      </div>
                      <span className="font-bold text-emerald-400 font-mono">{pkg.download}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Action Button */}
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPackage(pkg.price);
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      pkg.isPopular
                        ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black shadow-lg shadow-cyan-500/30'
                        : 'bg-white/[0.08] hover:bg-white/[0.15] text-white'
                    }`}
                  >
                    <span>تجربة تعبئة {pkg.price} ريال</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenWallet();
                    }}
                    className="w-full py-1.5 text-[11px] text-red-400 hover:text-red-300 transition-colors text-center"
                  >
                    شراء عبر محفظة جيب
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
