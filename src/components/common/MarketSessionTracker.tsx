import React, { useState, useEffect } from 'react';
import { Clock, Globe, Flame } from 'lucide-react';

interface MarketSession {
  city: string;
  name: string;
  openUtc: number; // in UTC hours
  closeUtc: number;
  openIst: string;
  closeIst: string;
  color: string;
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
  },
  {
    city: 'New York',
    name: 'US Session',
    openUtc: 13,
    closeUtc: 21,
    openIst: '06:30 PM',
    closeIst: '02:30 AM',
    color: '#101C32',
  },
  {
    city: 'Tokyo',
    name: 'Asian Session',
    openUtc: 0,
    closeUtc: 8,
    openIst: '05:30 AM',
    closeIst: '01:30 PM',
    color: '#778397',
  },
];

export const MarketSessionTracker: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [currentUtcHour, setCurrentUtcHour] = useState<number>(0);
  const [currentIstTime, setCurrentIstTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentUtcHour(now.getUTCHours() + now.getUTCMinutes() / 60);

      // Format current IST
      const istString = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentIstTime(istString);
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const isSessionOpen = (session: MarketSession) => {
    if (session.openUtc < session.closeUtc) {
      return currentUtcHour >= session.openUtc && currentUtcHour < session.closeUtc;
    }
    // Wraps over midnight
    return currentUtcHour >= session.openUtc || currentUtcHour < session.closeUtc;
  };

  return (
    <div className={`p-4 sm:p-5 rounded-2xl bg-[#101C32] text-white border border-[#17263D] shadow-lg ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <Globe className="w-4 h-4 text-[#315FEA] shrink-0" />
          <span className="font-heading text-xs uppercase tracking-wider font-bold text-white">
            Global Market Sessions (IST Synced)
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#DCE5F1]/80">
          <Clock className="w-3.5 h-3.5 text-[#315FEA] shrink-0" />
          <span>Kozhikode: <strong className="text-white">{currentIstTime || 'IST Active'}</strong></span>
        </div>
      </div>

      {/* Session Pills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
        {SESSIONS.map((sess) => {
          const active = isSessionOpen(sess);
          return (
            <div
              key={sess.city}
              className={`p-3 rounded-xl border transition-all ${
                active
                  ? 'bg-[#17263D] border-[#315FEA]/60'
                  : 'bg-white/5 border-white/5 opacity-80'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-heading text-xs font-bold text-white">
                  {sess.city}
                </span>
                <span
                  className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-semibold uppercase ${
                    active
                      ? 'bg-[#315FEA] text-white animate-pulse'
                      : 'bg-white/10 text-[#DCE5F1]/50'
                  }`}
                >
                  {active ? 'Active Now' : 'Closed'}
                </span>
              </div>
              <p className="font-mono text-[11px] text-[#DCE5F1]/90">
                {sess.openIst} – {sess.closeIst} IST
              </p>
              <span className="text-[10px] text-[#778397] block mt-0.5">
                {sess.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Edufinix Batch Synchronization Bar */}
      <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-[#DCE5F1]/80 font-mono">
        <div className="flex items-start gap-2">
          <Flame className="w-3.5 h-3.5 text-[#315FEA] shrink-0 mt-0.5" />
          <span className="text-[11px] leading-relaxed">
            <strong className="text-white">Edufinix Timing Sync:</strong> Morning (10 AM–12 PM) &amp; Evening (05 PM–07 PM) batches align directly with live London &amp; US overlap volatility.
          </span>
        </div>
        <span className="text-[10px] text-[#315FEA] font-semibold shrink-0">
          Trading Days Only
        </span>
      </div>
    </div>
  );
};
