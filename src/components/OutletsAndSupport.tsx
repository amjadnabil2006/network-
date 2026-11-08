import React from 'react';
import { Store, Phone, MessageSquare, Clock, MapPin, HeadphonesIcon } from 'lucide-react';

export function OutletsAndSupport() {
  const outlets = [
    {
      name: 'سوبر ماركت النهضة',
      hours: 'دوام 24 ساعة متواصل',
      address: 'شارع خولان الرئيسي',
      isPrimary: true,
    },
    {
      name: 'بقالات ومراكز جوار الشبكة',
      hours: 'خلال ساعات العمل اليومية',
      address: 'جميع البقالات والمحلات المجاورة لشبكة البشير',
      isPrimary: false,
    },
  ];

  const phones = [
    { number: '781172077', role: 'الشكاوى والاقتراحات وتوصيل الخدمة', isPrimary: true },
    { number: '778884882', role: 'الدعم الفني وخدمة العملاء', isPrimary: false },
    { number: '778884883', role: 'المبيعات والاستفسارات', isPrimary: false },
  ];

  return (
    <section id="outlets-section" className="py-16 bg-slate-950/80 border-t border-slate-900" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Outlets Column (5 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                أماكن توافر الكروت
              </span>
              <h3 className="text-2xl font-bold text-white">نقاط البيع المعتمدة</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                يمكنك شراء كروت الشحن في أي وقت من الموزعين المعتمدين في المنطقة
              </p>
            </div>

            <div className="space-y-3">
              {outlets.map((outlet, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Store className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-white text-sm">{outlet.name}</h4>
                    </div>
                    {outlet.isPrimary && (
                      <span className="text-[11px] font-semibold text-emerald-400">نقطة رئيسية</span>
                    )}
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-400 pt-1">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{outlet.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{outlet.address}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Support Column (6 cols) */}
          <div id="support-section" className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                خدمة العملاء والشكاوى
              </span>
              <h3 className="text-2xl font-bold text-white">نحن هنا لخدمتك دائماً</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                للاقتراحات، الشكاوى، أو طلب توصيل مودم منزلي مباشر، اتصل أو راسلنا عبر واتساب
              </p>
            </div>

            <div className="space-y-3">
              {phones.map((p, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-4 flex-wrap"
                >
                  <div>
                    <span className="text-xs text-slate-400 block mb-0.5">{p.role}</span>
                    <a
                      href={`tel:${p.number}`}
                      className="text-lg font-mono font-bold text-white hover:text-cyan-400 transition-colors tabular-nums"
                    >
                      {p.number}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${p.number}`}
                      className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>اتصال</span>
                    </a>
                    <a
                      href={`https://wa.me/967${p.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>واتساب</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
