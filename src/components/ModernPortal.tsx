import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  CreditCard, 
  Gauge, 
  ArrowRight, 
  CheckCircle2, 
  LogOut, 
  Clock, 
  HardDriveDownload, 
  Sparkles, 
  Copy, 
  Check, 
  ShieldAlert,
  Zap,
  Radio,
  Share2,
  Lock,
  Layers,
  Activity
} from 'lucide-react';
import { NetworkSpeedGauge } from './NetworkSpeedGauge';

interface Props {
  onOpenWallet: () => void;
  networkCode?: string;
  prefilledCard?: string;
}

export function ModernPortal({ onOpenWallet, networkCode = '23733', prefilledCard = '' }: Props) {
  const [speedId, setSpeedId] = useState<string>('1m');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [sessionSeconds, setSessionSeconds] = useState<number>(0);
  const [downloadedBytes, setDownloadedBytes] = useState<number>(14.6);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync prefilled card if clicked from pricing
  useEffect(() => {
    if (prefilledCard) {
      setCardNumber(`${prefilledCard}-CARD-23733`);
    }
  }, [prefilledCard]);

  // Speed Profiles
  const speedProfiles = [
    { id: '512k', label: '512 كيلو', subtitle: 'اقتصادي', mbps: 0.5, tag: 'Eco' },
    { id: '1m', label: '1 ميجا', subtitle: 'سرعة عادية', mbps: 1.0, tag: 'Standard', isDefault: true },
    { id: '2m', label: '2 ميجا', subtitle: 'سرعة متوسطة', mbps: 2.0, tag: 'Turbo' },
    { id: '3m', label: '3 ميجا', subtitle: 'سرعة سريعة', mbps: 3.0, tag: 'Gaming' },
    { id: '5m', label: '5 ميجا', subtitle: 'سرعة فائقة', mbps: 5.0, tag: 'Ultra' },
    { id: '10m', label: '10 ميجا', subtitle: 'أقصى سرعة ألياف', mbps: 10.0, tag: 'Fiber Giga' },
  ];

  // Active session timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoggedIn) {
      timer = setInterval(() => {
        setSessionSeconds((prev) => prev + 1);
        setDownloadedBytes((prev) => +(prev + 0.16).toFixed(2));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isLoggedIn]);

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!cardNumber.trim()) {
      setErrorMessage('يرجى إدخال رقم الكرت للمتابعة');
      return;
    }
    setErrorMessage(null);
    setIsLoggedIn(true);
    setSessionSeconds(0);
    setDownloadedBytes(8.4);
  };

  const handleQuickDemo = (cardName: string) => {
    setCardNumber(cardName);
    setErrorMessage(null);
    setIsLoggedIn(true);
    setSessionSeconds(0);
    setDownloadedBytes(12.5);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSessionSeconds(0);
    setErrorMessage(null);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(networkCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const formatTimer = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const selectedSpeedObj = speedProfiles.find((s) => s.id === speedId) || speedProfiles[1];

  return (
    <div id="portal" className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-4 pb-12" dir="rtl">
      {/* Cyber Glowing News & Announcement Marquee Banner */}
      <div className="mb-8 p-3 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-xl flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-bold text-cyan-400">تنويه الشبكة المباشر:</span>
          <span className="text-slate-300">
            لسنا الوحيدون ولكننا الأفضل · نتمنى لكم قضاء أطيب الأوقات · للاستفسار أو طلب مودم منزلي: 781172077 أو 778884882
          </span>
        </div>
        <div className="flex items-center gap-2 mr-auto text-xs text-slate-400">
          <span>كود المحفظة:</span>
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-600/20 border border-red-500/30 text-red-400 font-mono font-bold hover:bg-red-600/30 transition-colors"
          >
            <span>{networkCode}</span>
            {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Dual Grid: Interactive Console + Speedometer & Wallet */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (Hotspot Main Interactive Card) */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-black/40 backdrop-blur-2xl border border-white/[0.12] shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Top Animated Laser Edge */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />

            {!isLoggedIn ? (
              /* State 1: Futuristic Login Console */
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Console Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/25">
                      <div className="w-full h-full bg-[#090E1A] rounded-[14px] flex items-center justify-center text-cyan-400">
                        <Wifi className="w-6 h-6 animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        شبكة البشير نت
                      </h2>
                      <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>بوابة الاتصال الذكية · تغطية ألياف نشطة</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-left">
                    <span className="text-[10px] text-slate-500 block uppercase font-mono">SIGNAL</span>
                    <div className="flex items-end gap-1">
                      <span className="w-1 h-2 bg-emerald-400 rounded-sm" />
                      <span className="w-1 h-3 bg-emerald-400 rounded-sm" />
                      <span className="w-1 h-4 bg-emerald-400 rounded-sm" />
                      <span className="w-1 h-5 bg-emerald-400 rounded-sm" />
                      <span className="text-xs font-mono font-bold text-emerald-400 mr-1">100%</span>
                    </div>
                  </div>
                </div>

                {/* Futuristic Speed Selector Cards */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-bold flex items-center gap-1.5">
                      <Gauge className="w-4 h-4 text-cyan-400" />
                      <span>اختر سرعة التصفح المطلوبة</span>
                    </span>
                    <span className="text-[11px] text-cyan-400 font-mono">
                      السرعة المختارة: {selectedSpeedObj.label}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {speedProfiles.map((sp) => {
                      const isSelected = speedId === sp.id;
                      return (
                        <button
                          key={sp.id}
                          type="button"
                          onClick={() => setSpeedId(sp.id)}
                          className={`p-3 rounded-2xl border text-right transition-all duration-200 flex flex-col justify-between ${
                            isSelected
                              ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.25)] scale-[1.02]'
                              : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.2]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 font-bold">
                              {sp.tag}
                            </span>
                            {isSelected && <Zap className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />}
                          </div>
                          <div>
                            <span className="font-bold text-white text-sm block">{sp.label}</span>
                            <span className="text-[11px] text-slate-400">{sp.subtitle}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Card Number Input */}
                <div className="space-y-2">
                  <label htmlFor="card-number-input" className="text-xs font-bold text-slate-200 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <CreditCard className="w-4 h-4 text-blue-400" />
                      <span>أدخل رقم الكرت المطبوع</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {cardNumber.length > 0 ? `${cardNumber.length} خانات` : ''}
                    </span>
                  </label>

                  <div className="relative">
                    <input
                      id="card-number-input"
                      type="tel"
                      value={cardNumber}
                      onChange={(e) => {
                        setCardNumber(e.target.value);
                        if (errorMessage) setErrorMessage(null);
                      }}
                      placeholder="أدخل رقم الكرت (مثال: 94821038)"
                      className="w-full h-14 bg-black/50 border-2 border-white/[0.1] focus:border-cyan-400 rounded-2xl px-5 text-center text-white placeholder-slate-600 font-mono text-xl tracking-widest font-black focus:outline-none focus:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all tabular-nums"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400/50 pointer-events-none">
                      <Lock className="w-5 h-5" />
                    </div>
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-rose-400 flex items-center gap-1.5 mt-1 animate-shake">
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </p>
                  )}
                </div>

                {/* Remember Toggle */}
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="w-4 h-4 rounded bg-black/60 border-slate-700 text-cyan-500 focus:ring-0 cursor-pointer"
                    />
                    <span>حفظ وتذكر الكرت لتسجيل الدخول التلقائي</span>
                  </label>
                  <span className="text-[11px] text-slate-500">مشفر ومحمي</span>
                </div>

                {/* Primary Cyber Login Button */}
                <button
                  type="submit"
                  className="w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-slate-950 font-black text-base transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2.5 group cursor-pointer active:scale-[0.99]"
                >
                  <span className="text-white drop-shadow-md">تسجيل الدخول إلى الإنترنت</span>
                  <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:-translate-x-1" />
                </button>

                {/* Quick Test Cards Row */}
                <div className="pt-2 border-t border-white/[0.06] text-center">
                  <span className="text-[11px] text-slate-400 block mb-2">
                    اختبار تجريبي فوري لشاشة الاتصال والرصيد:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => handleQuickDemo('100-TEST-23733')}
                      className="py-2 px-2 rounded-xl bg-white/[0.04] hover:bg-cyan-500/20 border border-white/[0.08] hover:border-cyan-500/40 text-xs text-cyan-300 font-bold transition-all"
                    >
                      كرت 100 ريال
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickDemo('200-TEST-23733')}
                      className="py-2 px-2 rounded-xl bg-white/[0.04] hover:bg-blue-500/20 border border-white/[0.08] hover:border-blue-500/40 text-xs text-blue-300 font-bold transition-all"
                    >
                      كرت 200 ريال
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickDemo('500-TEST-23733')}
                      className="py-2 px-2 rounded-xl bg-white/[0.04] hover:bg-amber-500/20 border border-white/[0.08] hover:border-amber-500/40 text-xs text-amber-300 font-bold transition-all"
                    >
                      كرت 500 ريال
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              /* State 2: Active Connected Session (Status Mode) */
              <div className="space-y-6 animate-fade-in">
                {/* Status Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                      <CheckCircle2 className="w-7 h-7 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white">متصل بالإنترنت بنجاح</h3>
                      <p className="text-xs text-emerald-400 font-semibold">
                        الجلسة نشطة ومستقرة عبر شبكة البشير
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-400 border border-rose-500/30 text-xs font-bold transition-all shadow-md"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>قطع الاتصال</span>
                  </button>
                </div>

                {/* Live Session Counter Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] text-center">
                    <span className="text-[11px] text-slate-400 block mb-1">وقت الاتصال المباشر</span>
                    <span className="text-xl font-black font-mono text-cyan-300 tabular-nums">
                      {formatTimer(sessionSeconds)}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] text-center">
                    <span className="text-[11px] text-slate-400 block mb-1">البيانات المستهلكة</span>
                    <span className="text-xl font-black font-mono text-emerald-400 tabular-nums">
                      {downloadedBytes} MB
                    </span>
                  </div>

                  <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-black/40 border border-white/[0.08] text-center">
                    <span className="text-[11px] text-slate-400 block mb-1">السرعة المحددة</span>
                    <span className="text-xl font-black font-mono text-amber-400 tabular-nums">
                      {selectedSpeedObj.label}
                    </span>
                  </div>
                </div>

                {/* Session Diagnostic HUD */}
                <div className="p-4 rounded-2xl bg-black/30 border border-white/[0.06] space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-white/[0.06]">
                    <span className="text-slate-400">رقم الكرت النشط:</span>
                    <span className="font-mono font-bold text-white tabular-nums">{cardNumber}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.06]">
                    <span className="text-slate-400">عنوان IP الخاص بك:</span>
                    <span className="font-mono text-cyan-300">192.168.88.245</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.06]">
                    <span className="text-slate-400">عنوان الجهاز MAC:</span>
                    <span className="font-mono text-slate-400">DC:A6:32:8B:11:04</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">حالة الرصيد:</span>
                    <span className="font-semibold text-emerald-400">صالح ونشط</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={onOpenWallet}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 text-white font-bold text-xs transition-all shadow-lg shadow-red-600/30 text-center"
                  >
                    شحن رصيد جديد عبر محفظة جيب
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById('pricing');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-bold text-xs transition-colors"
                  >
                    عرض الباقات
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Live Speedometer + Jeeb Quick Access */}
        <div className="lg:col-span-5 space-y-6">
          {/* Futuristic Speedometer Gauge */}
          <NetworkSpeedGauge
            selectedSpeedMbps={selectedSpeedObj.mbps}
            isActive={isLoggedIn}
          />

          {/* Quick Jeeb Wallet Showcase Card */}
          <div 
            onClick={onOpenWallet}
            className="p-5 rounded-3xl bg-gradient-to-br from-red-950/40 via-[#150a10] to-[#0d0f1a] border border-red-500/30 hover:border-red-500/60 transition-all duration-300 shadow-xl cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-red-600/40">
                  جيب
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">محفظة جيب الإلكترونية</h4>
                  <span className="text-[11px] text-red-300">شراء كروت فوري بكود ({networkCode})</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-bold border border-red-500/30 group-hover:bg-red-600 group-hover:text-white transition-colors">
                شراء كرت
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              اشترِ كروت شبكة البشير نت مباشرة من تطبيق جيب في ثوانٍ معدودة دون الحاجة للذهاب إلى البقالة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
