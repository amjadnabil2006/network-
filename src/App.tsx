/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Download, Wifi, Check, Copy } from 'lucide-react';
import { JeebWalletModern } from './components/JeebWalletModern';
import { ColorPaletteDrawer, THEMES, ThemeId } from './components/ColorPaletteDrawer';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>('navy');
  const [view, setView] = useState<'login' | 'status'>('login');
  const [speed, setSpeed] = useState<string>('55987b0d-ca6d-464f-93c8-db9ac4a0800e');
  const [uname, setUname] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(true);
  const [walletModalOpen, setWalletModalOpen] = useState<boolean>(false);
  const [activeSession, setActiveSession] = useState<boolean>(false);
  const [sessionSeconds, setSessionSeconds] = useState<number>(180);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const theme = THEMES[currentTheme];

  // Active session timer simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (activeSession) {
      timer = setInterval(() => {
        setSessionSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [activeSession]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uname.trim()) {
      showToast('يرجى إدخال رقم الكرت للمتابعة');
      return;
    }
    setActiveSession(true);
    setView('status');
    showToast('تم تسجيل الدخول بنجاح');
  };

  const handleLogout = () => {
    setActiveSession(false);
    setView('login');
    showToast('تم تسجيل الخروج');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const formatUptime = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-start p-2 sm:p-4 selection:bg-amber-400/30 selection:text-amber-100 relative transition-all duration-500" 
      style={{ background: theme.bodyBg, color: theme.text }}
      dir="rtl"
    >
      {/* ========================================================================= */}
      {/* 1. FLOATING COLOR CONTROLLER ON THE LEFT (متحرك في الجهة اليسار)          */}
      {/* ========================================================================= */}
      <ColorPaletteDrawer 
        currentTheme={currentTheme}
        onSelectTheme={(newTheme) => {
          setCurrentTheme(newTheme);
          showToast(`تم التغيير إلى اللون: ${THEMES[newTheme].name}`);
        }}
      />

      {/* Minimalist Top Bar for Controls & 23733.zip Download */}
      <div className="w-full max-w-[420px] mb-2 py-1.5 px-3 rounded-xl bg-black/35 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs z-30">
        <div className="flex items-center gap-1.5">
          <Wifi className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-bold text-[11px] text-white">شبكة البشير نت</span>
        </div>

        <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded border border-white/10 text-[11px]">
          <button
            onClick={() => setView('login')}
            className={`px-2.5 py-0.5 rounded font-bold transition-colors ${
              view === 'login' ? 'bg-[#cdaf0b] text-black shadow-sm' : 'text-slate-300 hover:text-white'
            }`}
          >
            تسجيل الدخول
          </button>
          <button
            onClick={() => setView('status')}
            className={`px-2.5 py-0.5 rounded font-bold transition-colors ${
              view === 'status' ? 'bg-[#cdaf0b] text-black shadow-sm' : 'text-slate-300 hover:text-white'
            }`}
          >
            الرصيد
          </button>
        </div>

        <a
          href="/23733.zip"
          download="23733.zip"
          className="flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold px-2 py-1 rounded-lg transition-colors shadow-sm"
          title="تحميل ملف 23733.zip الأصلي"
        >
          <Download className="w-3 h-3" />
          <span>23733.zip</span>
        </a>
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed top-12 z-50 px-4 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-lg shadow-xl flex items-center gap-1.5 animate-bounce">
          <Check className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Container - Completely Static (صفحة ثابتة) */}
      <div className="w-full flex justify-center z-20 py-1">
        <div 
          ref={wrapRef}
          className="original-wrap"
          style={{
            borderColor: theme.borderColor,
            boxShadow: theme.borderGlow,
            backgroundColor: theme.wrapBg,
            color: theme.text,
            transition: 'background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
          }}
        >
          {view === 'login' ? (
            /* ========================================================================= */
            /* EXACT ORIGINAL LOGIN DESIGN (مع عدم حذف أي عنصر إطلاقاً + تحسين الصور)   */
            /* ========================================================================= */
            <div>
              {/* Enhanced Banner 1 (1.png) - With High Contrast Scrim for White Theme */}
              <div 
                className="banner-original block mb-1 p-1 rounded-xl transition-all"
                style={{
                  backgroundColor: currentTheme === 'white' ? 'rgba(15, 23, 42, 0.94)' : 'transparent',
                  border: currentTheme === 'white' ? '1px solid rgba(2, 132, 199, 0.3)' : 'none',
                  boxShadow: currentTheme === 'white' ? '0 4px 14px rgba(0,0,0,0.15)' : 'none',
                }}
              >
                <img 
                  src="/1.png" 
                  width="100%" 
                  alt="شبكة البشير نت" 
                  className="w-full block"
                  style={{
                    filter: currentTheme === 'white' 
                      ? 'contrast(1.08) brightness(1.02)' 
                      : 'drop-shadow(0 2px 8px rgba(0,0,0,0.5)) contrast(1.05)',
                  }}
                />
              </div>

              &ensp;

              {/* Enhanced Banner 2 (1.gif) - High Definition */}
              <div className="banner-original block mb-2 rounded-xl overflow-hidden shadow-md border border-white/10">
                <img 
                  src="/1.gif" 
                  width="100%" 
                  alt="إعلان الشبكة" 
                  className="w-full block" 
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    filter: 'contrast(1.04) brightness(1.01)',
                  }}
                />
              </div>

              {/* Original Marquee with Adaptive Colors */}
              <div 
                style={{ 
                  overflow: 'hidden', 
                  margin: '8px 0 12px 0', 
                  borderRadius: '6px', 
                  padding: '6px 0', 
                  background: theme.marqueeBg 
                }}
              >
                {React.createElement(
                  'marquee',
                  {
                    id: 'marquee',
                    align: 'center',
                    truespeed: 'truespeed',
                    nowrap: 'nowrap',
                    scrolldelay: 60,
                    valign: 'middle',
                    loop: 'INFINITE',
                    dir: 'rtl',
                    direction: 'right',
                    scrollamount: 3,
                    className: 'cursor-pointer',
                  },
                  <em style={{ color: theme.marqueeText, fontSize: '13px', fontWeight: 600 }}>
                    لسنا الوحيدون ولاكننا الافضل....... نتمنى لكم قضاء اطيب الاوقات للاستفسار او لتقديم شكوى او طلب توصيل مودم لمنزلك يرجى التواصل بنا واتس اب 778884882 او 778884883
                  </em>
                )}
              </div>

              {/* Original Jeeb Wallet Card (من ملف wallet.js الأصلي) */}
              <div 
                className="wallet-card-item cursor-pointer"
                onClick={() => setWalletModalOpen(true)}
                style={{
                  border: '3px solid #e1202e',
                  outline: '2px solid #fff',
                  borderRadius: '10px',
                  margin: '10px auto',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: '#fff',
                  userSelect: 'none',
                  boxSizing: 'border-box',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{ color: '#e1202e', textAlign: 'center', fontSize: '12px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px' }}>
                  <span style={{ color: '#e1202e', fontWeight: 800 }}>الان يمكنك شراء الكروت مباشرة من محفظة جيب</span>
                  <button 
                    type="button" 
                    id="show_wallet_0"
                    style={{ background: '#e1202e', color: '#fff', padding: '5px 0', borderRadius: '5px', width: '100px', fontSize: '16px', border: 0, margin: '0 auto', cursor: 'pointer', fontWeight: 700 }}
                  >
                    شراء
                  </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '24px', fontWeight: 900, color: '#e1202e', padding: '0 4px' }}>جيب</span>
                </div>
              </div>

              {/* Original Network Title - Bold & High Contrast in ALL themes (بما فيها الأبيض) */}
              <h1 
                style={{ 
                  textAlign: 'center', 
                  color: theme.text, 
                  fontSize: '24px', 
                  margin: '14px 0', 
                  fontWeight: 900,
                  letterSpacing: '0.5px',
                  textShadow: currentTheme === 'white' ? 'none' : '0 2px 10px rgba(0,0,0,0.6)'
                }}
              >
                شبكة البشير نت
              </h1>

              {/* Original Form with Speed Dropdown, Card Input & Submit */}
              <form onSubmit={handleLoginSubmit} style={{ width: '100%', marginBottom: '20px' }}>
                {/* Speed Select Dropdown (كما كانت في التصميم الأصلي تماماً) */}
                <div style={{ position: 'relative', display: 'block', textAlign: 'right' }}>
                  <img 
                    className="original-ico" 
                    src="/user.svg" 
                    alt="#" 
                  />
                  <select 
                    id="speed" 
                    name="speed" 
                    value={speed}
                    onChange={(e) => setSpeed(e.target.value)}
                    className="original-speed"
                    style={{
                      backgroundColor: theme.speedBg,
                      color: theme.speedText,
                      borderColor: theme.speedBorder,
                    }}
                  >
                    <option value="55987b0d-ca6d-464f-93c8-db9ac4a0800f">سرعه 512 </option>
                    <option value="55987b0d-ca6d-464f-93c8-db9ac4a0800e">سرعة عادية 1 ميجا</option>
                    <option value="55987b0d-ca6d-464f-93c8-db9ac4a0800d">سرعة متوسطة 2 ميجا</option>
                    <option value="55987b0d-ca6d-464f-93c8-db9ac4a0800c">سرعة  3 ميجا </option>
                    <option value="55987b0d-ca6d-464f-93c8-db9ac4a0800b"> سرعة 5 ميجا</option>
                    <option value="55987b0d-ca6d-464f-93c8-db9ac4a0800a"> سرعة 10 ميجا </option>
                  </select>
                </div>

                {/* Card Input with Password Icon & Remember */}
                <div style={{ position: 'relative', display: 'block', textAlign: 'right' }}>
                  <img 
                    id="img" 
                    className="original-ico" 
                    src="/password.svg" 
                    alt="#" 
                  />
                  <input 
                    name="username" 
                    type="tel" 
                    id="uname" 
                    value={uname}
                    onChange={(e) => setUname(e.target.value)}
                    placeholder="رقم الكرت" 
                    required 
                    className="original-input"
                    style={{
                      backgroundColor: theme.inputBg,
                      color: theme.inputText,
                      borderColor: theme.inputBorder,
                    }}
                  />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '14px', fontSize: '13px' }}>
                    <input 
                      checked={remember} 
                      id="remember" 
                      name="remember" 
                      type="checkbox" 
                      value="ON" 
                      onChange={(e) => setRemember(e.target.checked)}
                      style={{ cursor: 'pointer' }}
                    />
                    <label htmlFor="remember" style={{ cursor: 'pointer', color: theme.textSecondary, fontWeight: 600 }}>
                      تذكر هذا الكرت
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <input 
                  type="submit" 
                  value="تسجيل الدخول" 
                  className="original-submit"
                  style={{
                    background: theme.submitBg,
                    color: theme.submitText,
                  }}
                />
              </form>

              {/* Modernized Pricing Section */}
              <div className="my-4">
                <div className="flex items-center justify-between mb-2 px-1">
                  <h1 style={{ color: theme.text, fontSize: '18px', margin: 0, fontWeight: 900 }} className="flex items-center gap-1.5">
                    <span>💳</span>
                    <span>اسعار الكروت</span>
                  </h1>
                </div>

                {/* 2x2 Pricing Cards Grid (إطار موحد لجميع الكروت) */}
                <div className="grid grid-cols-2 gap-2 text-right">
                  {[
                    { price: '100 ريال', time: '3 ساعات', validity: '3 أيام', mb: '300 ميجا' },
                    { price: '200 ريال', time: '8 ساعات', validity: '8 أيام', mb: '700 ميجا' },
                    { price: '300 ريال', time: '12 ساعة', validity: '12 يوم', mb: '1000 ميجا' },
                    { price: '500 ريال', time: '20 ساعة', validity: '20 يوم', mb: '2000 ميجا' },
                  ].map((pkg, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl border-2 flex flex-col justify-between relative select-none shadow-sm transition-colors card-breath-effect"
                      style={{
                        backgroundColor: currentTheme === 'white' ? '#f8fafc' : 'rgba(0,0,0,0.35)',
                        borderColor: theme.borderColor,
                      }}
                    >
                      {/* Card Price & Data */}
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-base font-black font-mono tracking-tight" style={{ color: theme.borderColor }}>
                          {pkg.price}
                        </span>
                        <span 
                          className="text-[10px] font-extrabold px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: currentTheme === 'white' ? 'rgba(2, 132, 199, 0.1)' : 'rgba(255,255,255,0.1)',
                            color: currentTheme === 'white' ? '#0284c7' : '#38bdf8',
                          }}
                        >
                          {pkg.mb}
                        </span>
                      </div>

                      {/* Card Specs */}
                      <div className="space-y-1 text-[11px] pt-1.5 border-t border-white/10 opacity-95">
                        <div className="flex items-center justify-between">
                          <span className="opacity-70 text-[10px]">الوقت:</span>
                          <span className="font-bold">{pkg.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="opacity-70 text-[10px]">الصلاحية:</span>
                          <span className="font-bold">{pkg.validity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Original Outlets & Support Information */}
              <h1 style={{ fontSize: '15px', color: theme.text, lineHeight: '1.6', margin: '10px 0', fontWeight: 'bold' }}>
                تباع كروت الشبكة في
                <br />
                سوبر ماركت النهضه دوام24 ساعه العنوان شارع خولان 
                <br /><br />
                وجميع البقالات المجاورة لشبكة البشير
                <br />
                جميع البقالات المجاورة للشبكة
              </h1>

              <div style={{ marginTop: '16px', color: theme.text }}>
                <h2 style={{ fontSize: '14px', marginBottom: '6px', color: theme.textSecondary, fontWeight: 600 }}>
                  للشكاوى والاقتراحات وطلب ايصال الخدمة
                </h2>
                <a 
                  className="phone-original" 
                  href="tel:781172077"
                  style={{
                    backgroundColor: theme.phoneBg,
                    color: theme.phoneText,
                    border: `1px solid ${theme.phoneBorder}`,
                  }}
                >
                  781172077
                </a>
              </div>
            </div>
          ) : (
            /* ========================================================================= */
            /* EXACT ORIGINAL STATUS DESIGN (معلومات الرصيد والجلسة النشطة)              */
            /* ========================================================================= */
            <div>
              <div 
                className="banner-original block mb-3 p-1 rounded-xl transition-all"
                style={{
                  backgroundColor: currentTheme === 'white' ? 'rgba(15, 23, 42, 0.94)' : 'transparent',
                  border: currentTheme === 'white' ? '1px solid rgba(2, 132, 199, 0.3)' : 'none',
                }}
              >
                <img 
                  src="/1.png" 
                  width="100%" 
                  alt="البشير نت" 
                  className="w-full block" 
                />
              </div>

              <div style={{ textAlign: 'center', margin: '14px 0', fontSize: '14px', color: '#10b981', fontWeight: 'bold' }}>
                مرحباً بك , أنت متصل بشبكة البشير نت بنجاح!
              </div>

              <table dir="rtl" className="original-table" align="right" style={{ color: theme.text }}>
                <tbody>
                  <tr>
                    <td align="right" style={{ borderColor: theme.tableBorder }}><b>متصل منذ:</b></td>
                    <td style={{ borderColor: theme.tableBorder }}><b>{formatUptime(sessionSeconds)}</b></td>
                  </tr>
                  <tr>
                    <td align="right" style={{ borderColor: theme.tableBorder }}><b>اجمالي التحميل : <br /> اجمالي الرفع :</b></td>
                    <td style={{ borderColor: theme.tableBorder }}><b>{(12.4 + (sessionSeconds * 0.05)).toFixed(2)} MB <br /> {(1.8 + (sessionSeconds * 0.01)).toFixed(2)} MB</b></td>
                  </tr>
                  <tr>
                    <td align="right" style={{ borderColor: theme.tableBorder }}><b>تحميل هذه الجلسة:</b></td>
                    <td style={{ borderColor: theme.tableBorder }}><b>{(14.2 + (sessionSeconds * 0.06)).toFixed(2)} MB</b></td>
                  </tr>
                  <tr>
                    <td align="right" style={{ borderColor: theme.tableBorder }}><b>الوقت المتبقي:</b></td>
                    <td style={{ borderColor: theme.tableBorder }}><b>7h 45m</b></td>
                  </tr>
                  <tr>
                    <td align="right" style={{ borderColor: theme.tableBorder }}><b>التحميل المتبقي:</b></td>
                    <td style={{ borderColor: theme.tableBorder }}><b>685.8 MB</b></td>
                  </tr>
                </tbody>
              </table>

              <div style={{ marginTop: '14px' }}>
                <button 
                  onClick={handleLogout}
                  className="original-submit"
                  style={{ background: '#dc3a41', color: '#fff' }}
                >
                  تسجيل الخروج
                </button>
              </div>

              <div style={{ marginTop: '20px', color: theme.text }}>
                <h2 style={{ fontSize: '14px', marginBottom: '6px', color: theme.textSecondary }}>
                  للشكاوى والاقتراحات يرجى التواصل معنا
                </h2>
                <hr style={{ border: '0', borderTop: `1px solid ${theme.tableBorder}`, margin: '8px auto', width: '80%' }} />
                <a 
                  className="phone-original" 
                  href="tel:781172077"
                  style={{
                    backgroundColor: theme.phoneBg,
                    color: theme.phoneText,
                    border: `1px solid ${theme.phoneBorder}`,
                  }}
                >
                  781172077
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <footer style={{ marginTop: '12px', textAlign: 'center', fontSize: '12px', color: theme.textSecondary }}>
        <p>شبكة البشير نت · كود المحفظة 23733</p>
      </footer>

      {/* Jeeb Wallet Step Modal */}
      <JeebWalletModern
        isOpen={walletModalOpen}
        onClose={() => setWalletModalOpen(false)}
        networkCode="23733"
      />
    </div>
  );
}
