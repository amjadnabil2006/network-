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
  HelpCircle,
  Radio
} from 'lucide-react';
import heroImage from '../assets/images/hero_telecom_network_1794101524170.jpg';

interface Props {
  onOpenWallet: () => void;
  networkCode?: string;
}

export function HeroLogin({ onOpenWallet, networkCode = '23733' }: Props) {
  const [speed, setSpeed] = useState<string>('1m');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [sessionSeconds, setSessionSeconds] = useState<number>(0);
  const [downloadedBytes, setDownloadedBytes] = useState<number>(24.8);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Speed options mapping
  const speedOptions = [
    { id: '512k', label: '512 كيلو', subtitle: 'اقتصادي', badge: '512K' },
    { id: '1m', label: '1 ميجا', subtitle: 'السرعة العادية', badge: '1M', isDefault: true },
    { id: '2m', label: '2 ميجا', subtitle: 'متوسطة', badge: '2M' },
    { id: '3m', label: '3 ميجا', subtitle: 'سريعة', badge: '3M' },
    { id: '5m', label: '5 ميجا', subtitle: 'عالية الأداء', badge: '5M' },
    { id: '10m', label: '10 ميجا', subtitle: 'أقصى سرعة ألياف', badge: '10M' },
  ];

  // Live timer for active session
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoggedIn) {
      timer = setInterval(() => {
        setSessionSeconds((prev) => prev + 1);
        setDownloadedBytes((prev) => +(prev + 0.12).toFixed(2));
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
    setDownloadedBytes(12.4);
  };

  const handleQuickDemo = (card: string) => {
    setCardNumber(card);
    setErrorMessage(null);
    setIsLoggedIn(true);
    setSessionSeconds(0);
    setDownloadedBytes(8.2);
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

  const formatTime = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="login-section" className="relative pt-6 pb-16 overflow-hidden" dir="rtl">
      {/* Background Ambience with Generated High-Tech Asset */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={heroImage}
          alt="شبكة البشير نت"
          className="w-full h-full object-cover object-center filter blur-[1px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* News & Announcement Bar */}
        <div className="mb-8 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-cyan-400">تنويه الشبكة:</span>
            <span>نتمنى لكم قضاء أطيب الأوقات · للاستفسار أو تقديم شكوى أو طلب توصيل مودم لمنزلك: 781172077 أو 778884882</span>
          </div>
          <div className="flex items-center gap-2 mr-auto text-slate-400">
            <span>كود المحفظة:</span>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1 font-mono font-bold text-amber-400 hover:text-amber-300 transition-colors"
              title="انقر لنسخ الكود"
            >
              <span>{networkCode}</span>
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Hero Grid: Value Proposition + Interactive Hotspot Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (Brand Proposition) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                بوابة الدخول الذكية · الجيل الحديث
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
                أسرع اتصال إنترنت في منطقتك مع شبكة البشير
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                استمتع بسرعات عالية ومستقرة تصل إلى 10 ميجا مع باقات متنوعة تناسب احتياجاتك، ودعم فني على مدار الساعة.
              </p>
            </div>

            {/* Clean Unboxed Metadata Indicators */}
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <Radio className="w-4 h-4 text-cyan-400" />
                <span>تغطية لاسلكية قوية</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Gauge className="w-4 h-4 text-blue-400" />
                <span>سرعات من 512K إلى 10M</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>شحن عبر محفظة جيب</span>
              </div>
            </div>

            {/* Jeeb Wallet Banner Quick Button */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/40 via-slate-900 to-slate-900 border border-red-900/30 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-red-400 block mb-0.5">محفظة جيب الإلكترونية</span>
                <p className="text-xs text-slate-300">اشترِ كروت الشبكة مباشرة عبر كود الشبكة ({networkCode}) دون انتظار</p>
              </div>
              <button
                onClick={onOpenWallet}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shrink-0 shadow-lg shadow-red-900/20"
              >
                شراء كرت الآن
              </button>
            </div>
          </div>

          {/* Right Column: The Hotspot Login Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Subtle Ambient Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

              {!isLoggedIn ? (
                /* Login State */
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-white">تسجيل الدخول للشبكة</h2>
                      <p className="text-xs text-slate-400">أدخل رقم الكرت المطبوع لبدء التصفح</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Wifi className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Speed Profile Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                        <span>اختر سرعة التصفح</span>
                      </span>
                      <span className="text-[11px] text-slate-400">افتراضي: 1 ميجا</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {speedOptions.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setSpeed(opt.id)}
                          className={`p-2.5 rounded-xl border text-right transition-all text-xs flex flex-col justify-between ${
                            speed === opt.id
                              ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm'
                              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                          }`}
                        >
                          <span className="font-bold text-white">{opt.label}</span>
                          <span className="text-[10px] text-slate-400">{opt.subtitle}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Card Number Input */}
                  <div className="space-y-2">
                    <label htmlFor="card-input" className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                      <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                      <span>رقم الكرت</span>
                    </label>
                    <div className="relative">
                      <input
                        id="card-input"
                        type="tel"
                        value={cardNumber}
                        onChange={(e) => {
                          setCardNumber(e.target.value);
                          if (errorMessage) setErrorMessage(null);
                        }}
                        placeholder="أدخل رقم الكرت (مثال: 94821038)"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 font-mono text-base tracking-wider focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all tabular-nums"
                      />
                    </div>
                    {errorMessage && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                        <span>{errorMessage}</span>
                      </p>
                    )}
                  </div>

                  {/* Remember Me Option */}
                  <div className="flex items-center justify-between text-xs">
                    <label className="flex items-center gap-2 cursor-pointer text-slate-300 select-none">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                        className="w-4 h-4 rounded bg-slate-950 border-slate-700 text-blue-600 focus:ring-0 focus:ring-offset-0"
                      />
                      <span>تذكر هذا الكرت لتسجيل الدخول التلقائي</span>
                    </label>
                  </div>

                  {/* Primary Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>تسجيل الدخول الآن</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </button>

                  {/* Quick Testing helper so user can preview active session */}
                  <div className="pt-3 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                      <span>أو جرب كرت تجريبي للمعاينة:</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleQuickDemo('100-TEST-23733')}
                        className="flex-1 py-1.5 px-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg text-[11px] text-cyan-300 transition-colors"
                      >
                        كرت 100 ريال
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickDemo('200-TEST-23733')}
                        className="flex-1 py-1.5 px-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg text-[11px] text-blue-300 transition-colors"
                      >
                        كرت 200 ريال
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickDemo('500-TEST-23733')}
                        className="flex-1 py-1.5 px-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg text-[11px] text-amber-300 transition-colors"
                      >
                        كرت 500 ريال
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                /* Connected State (Active Session Simulation - status.html) */
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">أنت متصل بالإنترنت</h3>
                        <p className="text-xs text-emerald-400 font-medium">الجلسة نشطة ومستقرة</p>
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600/10 hover:bg-rose-600/20 text-rose-400 border border-rose-500/20 text-xs font-semibold transition-colors"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>قطع الاتصال</span>
                    </button>
                  </div>

                  {/* Session Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        <span>وقت الاتصال</span>
                      </div>
                      <span className="text-lg font-bold font-mono text-white tabular-nums">
                        {formatTime(sessionSeconds)}
                      </span>
                    </div>

                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                        <HardDriveDownload className="w-3.5 h-3.5 text-cyan-400" />
                        <span>التحميل المستهلك</span>
                      </div>
                      <span className="text-lg font-bold font-mono text-cyan-300 tabular-nums">
                        {downloadedBytes} MB
                      </span>
                    </div>
                  </div>

                  {/* Card Details Table */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2.5">
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">رقم الكرت المستخدم:</span>
                      <span className="font-mono font-bold text-white tabular-nums">{cardNumber}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">ملف السرعة:</span>
                      <span className="font-semibold text-cyan-400">
                        {speedOptions.find((s) => s.id === speed)?.label || '1 ميجا'}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400">عنوان IP الافتراضي:</span>
                      <span className="font-mono text-slate-300">192.168.88.245</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">عنوان MAC الجهاز:</span>
                      <span className="font-mono text-slate-400 text-[11px]">DC:A6:32:8B:11:04</span>
                    </div>
                  </div>

                  {/* Action row */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={onOpenWallet}
                      className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors text-center"
                    >
                      تجديد الرصيد عبر محفظة جيب
                    </button>
                    <a
                      href="#packages-section"
                      className="py-3 px-4 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 font-medium text-xs transition-colors text-center"
                    >
                      عرض الباقات
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
