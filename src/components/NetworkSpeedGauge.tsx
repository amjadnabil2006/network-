import React, { useState, useEffect } from 'react';
import { Gauge, Activity, ArrowDown, ArrowUp, RefreshCw } from 'lucide-react';

interface Props {
  selectedSpeedMbps?: number;
  isActive?: boolean;
}

export function NetworkSpeedGauge({ selectedSpeedMbps = 10, isActive = false }: Props) {
  const [speed, setSpeed] = useState<number>(0);
  const [ping, setPing] = useState<number>(14);
  const [jitter, setJitter] = useState<number>(2);
  const [isTesting, setIsTesting] = useState<boolean>(false);

  useEffect(() => {
    if (isActive) {
      // Simulate real-time fluctuating throughput close to selected max speed
      const interval = setInterval(() => {
        const variation = (Math.random() - 0.48) * 0.8;
        const current = Math.max(0.2, Math.min(selectedSpeedMbps, +(selectedSpeedMbps * 0.94 + variation).toFixed(1)));
        setSpeed(current);
        setPing(Math.floor(12 + Math.random() * 5));
        setJitter(Math.floor(1 + Math.random() * 2));
      }, 1200);
      return () => clearInterval(interval);
    } else {
      setSpeed(selectedSpeedMbps);
    }
  }, [isActive, selectedSpeedMbps]);

  const runSpeedTest = () => {
    setIsTesting(true);
    setSpeed(0.5);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const simulatedVal = +((selectedSpeedMbps * (step / 10)) + (Math.random() * 0.6)).toFixed(1);
      setSpeed(Math.min(selectedSpeedMbps, simulatedVal));
      if (step >= 10) {
        clearInterval(interval);
        setIsTesting(false);
      }
    }, 150);
  };

  // Calculate gauge angle (-90deg to +90deg)
  const maxScale = Math.max(selectedSpeedMbps, 10);
  const percentage = Math.min(100, (speed / maxScale) * 100);
  const angle = -90 + (percentage / 100) * 180;

  return (
    <div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-xl relative overflow-hidden" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-bold text-white tracking-wide">مؤشر أداء الشبكة المباشر</span>
        </div>
        <button
          onClick={runSpeedTest}
          disabled={isTesting}
          className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-3 h-3 ${isTesting ? 'animate-spin' : ''}`} />
          <span>{isTesting ? 'جاري الفحص...' : 'قياس السرعة'}</span>
        </button>
      </div>

      {/* Futuristic Radial Gauge Display */}
      <div className="flex items-center justify-center py-2 relative">
        <svg viewBox="0 0 200 110" className="w-48 overflow-visible">
          {/* Gauge Background Track */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Glowing Active Track */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="url(#speedGradient)"
            strokeWidth="12"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (percentage / 100) * 251.2}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />

          {/* Center Needle */}
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="30"
            stroke="#00F2FE"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              transform: `rotate(${angle}deg)`,
              transformOrigin: '100px 100px',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
          <circle cx="100" cy="100" r="7" fill="#00F2FE" />
          <circle cx="100" cy="100" r="3" fill="#050811" />

          {/* Gradients */}
          <defs>
            <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F2FE" />
              <stop offset="60%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Digital Speed Readout */}
        <div className="absolute bottom-1 text-center">
          <span className="text-3xl font-black font-mono tracking-tight text-white tabular-nums drop-shadow-[0_0_12px_rgba(0,242,254,0.6)]">
            {speed}
          </span>
          <span className="text-xs text-cyan-400 font-bold block -mt-1">Mbps</span>
        </div>
      </div>

      {/* Telemetry Strip */}
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/[0.06] text-center text-xs">
        <div className="p-1.5 rounded-lg bg-black/30">
          <span className="text-[10px] text-slate-400 block">Ping (الاستجابة)</span>
          <span className="font-mono font-bold text-emerald-400 tabular-nums">{ping} ms</span>
        </div>
        <div className="p-1.5 rounded-lg bg-black/30">
          <span className="text-[10px] text-slate-400 block">التذبذب (Jitter)</span>
          <span className="font-mono font-bold text-cyan-300 tabular-nums">{jitter} ms</span>
        </div>
        <div className="p-1.5 rounded-lg bg-black/30">
          <span className="text-[10px] text-slate-400 block">استقرار البث</span>
          <span className="font-mono font-bold text-indigo-300 tabular-nums">99.8%</span>
        </div>
      </div>
    </div>
  );
}
