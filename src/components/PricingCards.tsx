import React from 'react';
import { Clock, Calendar, DownloadCloud, Sparkles } from 'lucide-react';

interface Props {
  onOpenWallet: () => void;
}

export function PricingCards({ onOpenWallet }: Props) {
  const packages = [
    {
      price: '100',
      currency: 'ريال',
      time: '3 ساعات',
      validity: '3 أيام',
      download: '300 ميجا',
      tagline: 'مناسبة للتصفح السريع والرسائل',
      isPopular: false,
    },
    {
      price: '200',
      currency: 'ريال',
      time: '8 ساعات',
      validity: '8 أيام',
      download: '700 ميجا',
      tagline: 'الباقة الأكثر طلباً واستخداماً',
      isPopular: true,
    },
    {
      price: '300',
      currency: 'ريال',
      time: '12 ساعة',
      validity: '12 يوم',
      download: '1000 ميجا (1 جيجا)',
      tagline: 'مثالية لمشاهدة الفيديو والعمل',
      isPopular: false,
    },
    {
      price: '500',
      currency: 'ريال',
      time: '20 ساعة',
      validity: '20 يوم',
      download: '2000 ميجا (2 جيجا)',
      tagline: 'أكبر سعة توفير لأطول مدة',
      isPopular: false,
    },
  ];

  return (
    <section id="packages-section" className="py-16 bg-slate-950/60 border-t border-slate-900" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            شفافية ومرونة بدون التزامات
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            أسعار كروت شبكة البشير نت
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            اختر الباقة المناسبة لاحتياجك، وتصفح الإنترنت بأعلى سرعة دون انقطاع
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-6 transition-all flex flex-col justify-between ${
                pkg.isPopular
                  ? 'bg-slate-900 border-2 border-cyan-500/80 shadow-xl shadow-cyan-950/30'
                  : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {pkg.isPopular && (
                <div className="text-[11px] font-bold text-cyan-400 pb-2 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>الأكثر اختياراً في الشبكة</span>
                </div>
              )}

              <div>
                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-3xl font-extrabold text-white font-mono tabular-nums">
                    {pkg.price}
                  </span>
                  <span className="text-xs font-medium text-slate-400">{pkg.currency}</span>
                </div>
                <p className="text-xs text-slate-400 mb-6">{pkg.tagline}</p>

                {/* Specs List with Clean Unboxed Typography */}
                <div className="space-y-3 text-xs pt-4 border-t border-slate-800/80 mb-6">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-2 text-slate-400">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span>الوقت الإجمالي:</span>
                    </span>
                    <span className="font-semibold text-white font-mono">{pkg.time}</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>فترة الصلاحية:</span>
                    </span>
                    <span className="font-semibold text-white font-mono">{pkg.validity}</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-2 text-slate-400">
                      <DownloadCloud className="w-4 h-4 text-emerald-400" />
                      <span>حجم التحميل:</span>
                    </span>
                    <span className="font-semibold text-emerald-400 font-mono">{pkg.download}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenWallet}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all text-center ${
                  pkg.isPopular
                    ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-md'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
              >
                شراء عبر محفظة جيب
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
