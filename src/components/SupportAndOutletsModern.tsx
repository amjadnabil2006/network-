import React from 'react';
import { Store, Phone, MessageSquare, Clock, MapPin, Headphones, Send, Radio } from 'lucide-react';

export function SupportAndOutletsModern() {
  const outlets = [
    {
      name: 'سوبر ماركت النهضة',
      hours: 'دوام متواصل 24 ساعة',
      address: 'شارع خولان - بالقرب من برج الإرسال',
      badge: 'المركز الرئيسي',
      is24h: true,
    },
    {
      name: 'مراكز وبقالات جوار الشبكة',
      hours: 'خلال ساعات الدوام الرسمية',
      address: 'جميع البقالات والمحلات المجاورة لشبكة البشير',
      badge: 'موزعون معتمدون',
      is24h: false,
    },
  ];

  const phones = [
    { number: '781172077', label: 'الشكاوى والاقتراحات وطلب إيصال الخدمة', role: 'الخط الساخن الرئيسي' },
    { number: '778884882', label: 'الدعم الفني وخدمة العملاء', role: 'دعم فني وتوصيل مودم' },
    { number: '778884883', label: 'المبيعات والاستفسارات السريعة', role: 'مبيعات الكروت' },
  ];

  return (
    <section id="support" className="py-16 relative z-10 border-t border-white/[0.06]" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Outlets Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
                <Store className="w-3.5 h-3.5" />
                <span>نقاط التوزيع المعتمدة</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">مراكز بيع كروت الشبكة</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                متوفرة على مدار الساعة في أشهر المراكز المعتمدة والمحلات القريبة منك
              </p>
            </div>

            <div className="space-y-4">
              {outlets.map((out, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all space-y-3 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                        <Store className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">{out.name}</h4>
                        <span className="text-[11px] text-cyan-400 font-semibold">{out.badge}</span>
                      </div>
                    </div>
                    {out.is24h && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold animate-pulse">
                        24 ساعة
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span>{out.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span>{out.address}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Hotlines & WhatsApp (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                <Headphones className="w-3.5 h-3.5" />
                <span>فريق الدعم الفني وخدمة العملاء</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">تواصل معنا مباشرة</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                لتقديم شكوى أو طلب توصيل مودم لاسلكي أو فايبر لمنزلك
              </p>
            </div>

            <div className="space-y-3">
              {phones.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-emerald-500/40 transition-all flex items-center justify-between gap-4 flex-wrap shadow-lg"
                >
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 block mb-0.5">{item.role}</span>
                    <span className="text-[11px] text-slate-400 block mb-1">{item.label}</span>
                    <a
                      href={`tel:${item.number}`}
                      className="text-xl font-black font-mono tracking-wider text-white hover:text-cyan-400 transition-colors tabular-nums"
                    >
                      {item.number}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${item.number}`}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>اتصال</span>
                    </a>
                    <a
                      href={`https://wa.me/967${item.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-lg shadow-emerald-600/20"
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
