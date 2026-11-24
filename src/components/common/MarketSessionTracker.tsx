import React, { useState, useEffect } from 'react';
import { Clock, Globe, Flame, Zap } from 'lucide-react';

interface MarketSession {
  city: string;
  name: string;
  openUtc: number; // in UTC hours
  closeUtc: number;
  openIst: string;
  closeIst: string;
  color: string;
  accentClass: string;
  volatility: 'High' | 'Medium' | 'Moderate';
}

const SESSIONS: MarketSession[] = [
  {
    city: 'London',
    name: 'European Session',
    openUtc: 8,
    closeUtc: 16,
    openIst: '01:30 PM',
    closeIst: '09:30 PM',
    color: '#315FEA',
    accentClass: 'border-[#315FEA]',
    volatility: 'High',
  },
  {
    city: 'New York',
    name: 'US Session',
    openUtc: 13,
    closeUtc: 21,
    openIst: '06:30 PM',
    closeIst: '02:30 AM',
    color: '#25D366',
    accentClass: 'border-[#25D366]',
    volatility: 'High',
  },
  {
    city: 'Tokyo',
    name: 'Asian Session',
    openUtc: 0,
    closeUtc: 8,
    openIst: '05:30 AM',
    closeIst: '01:30 PM',
    color: '#EAB308',
    accentClass: 'border-[#EAB308]',
    volatility: 'Moderate',
  },
];

export const MarketSessionTracker: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [currentUtcHour, setCurrentUtcHour] = useState<number>(0);
  const [currentIstTime, setCurrentIstTime] = useState<string>('');
  const [currentIstDate, setCurrentIstDate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentUtcHour(now.getUTCHours() + now.getUTCMinutes() / 60);

      const istTime = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentIstTime(istTime);

      const istDate = now.toLocaleDateString('en-IN', {
        timeZone: 'Asia/Kolkata',
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
      setCurrentIstDate(istDate);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const isSessionOpen = (session: MarketSession) => {
    if (session.openUtc < session.closeUtc) {
      return currentUtcHour >= session.openUtc && currentUtcHour < session.closeUtc;
    }
    return currentUtcHour >= session.openUtc || currentUtcHour < session.closeUtc;
  };

  // Calculate session progress percentage
  const getSessionProgress = (session: MarketSession) => {
    if (!isSessionOpen(session)) return 0;
    let duration = session.closeUtc - session.openUtc;
    if (duration < 0) duration += 24;

    let elapsed = currentUtcHour - session.openUtc;
    if (elapsed < 0) elapsed += 24;

    return Math.min(100, Math.max(0, Math.round((elapsed / duration) * 100)));
  };

  const isOverlapActive = isSessionOpen(SESSIONS[0]) && isSessionOpen(SESSIONS[1]);

  return (
    <div className={`p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-[#0D1728] text-white border border-[#1E2E48] shadow-2xl relative overflow-hidden ${className}`}>
      {/* Background Decorative Glow */}
      <div 
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(49, 95, 234, 0.6) 0%, transparent 70%)',
        }}
      />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#1E2E48] relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-[#315FEA]/15 text-[#315FEA]">
            <Globe className="w-4 h-4 shrink-0" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#315FEA] font-bold block">
              REAL-TIME GLOBAL VOLATILITY
            </span>
            <h3 className="font-heading text-sm sm:text-base font-bold text-white">
              Forex Market Sessions (IST Synchronized)
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Overlap Status Pill */}
          {isOverlapActive && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[10px] font-mono text-[#25D366] font-semibold animate-pulse">
              <Zap className="w-3 h-3 text-[#25D366]" />
              <span>London-NY Overlap Active</span>
            </div>
          )}

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#101C32] border border-[#1E2E48] text-xs font-mono text-[#DCE5F1]">
            <Clock className="w-3.5 h-3.5 text-[#315FEA] shrink-0" />
            <span>Kozhikode: <strong className="text-white font-bold">{currentIstTime || 'IST Active'}</strong></span>
            <span className="text-white/40 hidden xs:inline">• {currentIstDate}</span>
          </div>
        </div>
      </div>

      {/* Session Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-5 relative z-10">
        {SESSIONS.map((sess) => {
          const active = isSessionOpen(sess);
          const progress = getSessionProgress(sess);

          return (
            <div
              key={sess.city}
              className={`p-4 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                active
                  ? 'bg-[#17263D] border-[#315FEA]/60 shadow-lg'
                  : 'bg-[#101C32]/70 border-[#1E2E48] opacity-75 hover:opacity-100'
              }`}
            >
              {/* Active Pulse Glow Bar at top */}
              {active && (
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#315FEA] to-[#25D366]"
                />
              )}

              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading text-sm sm:text-base font-bold text-white">
                    {sess.city}
                  </span>
                  <span className="text-[10px] font-mono text-[#778397]">
                    ({sess.volatility})
                  </span>
                </div>
                <span
                  className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    active
                      ? 'bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 animate-pulse'
                      : 'bg-white/5 text-[#778397] border border-white/5'
                  }`}
                >
                  {active ? 'Active Now' : 'Closed'}
                </span>
              </div>

              <p className="font-mono text-xs text-[#DCE5F1] font-semibold">
                {sess.openIst} – {sess.closeIst} <span className="text-[#778397] font-normal">IST</span>
              </p>

              <span className="text-[11px] text-[#778397] block mt-0.5">
                {sess.name}
              </span>

              {/* Session Progress Bar if open */}
              {active && (
                <div className="mt-3 pt-2.5 border-t border-white/10">
                  <div className="flex justify-between text-[10px] font-mono text-[#DCE5F1]/80 mb-1">
                    <span>Session Progress</span>
                    <span className="text-[#315FEA] font-bold">{progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#315FEA] to-[#25D366] h-full rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Edufinix Batch Synchronization Bar */}
      <div className="mt-5 pt-4 border-t border-[#1E2E48] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#DCE5F1]/80 font-mono relative z-10">
        <div className="flex items-start gap-2">
          <Flame className="w-4 h-4 text-[#315FEA] shrink-0 mt-0.5 animate-pulse" />
          <span className="text-[11px] leading-relaxed">
            <strong className="text-white">Edufinix Timing Sync:</strong> Morning (10 AM–12 PM) &amp; Evening (05 PM–07 PM) offline batches align directly with European open &amp; US overlap volume surges.
          </span>
        </div>
        <span className="text-[10px] text-[#315FEA] bg-[#315FEA]/10 px-2.5 py-1 rounded border border-[#315FEA]/20 font-semibold shrink-0">
          Trading Days Only (Mon–Thu)
        </span>
      </div>
    </div>
  );
};
