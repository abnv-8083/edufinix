import React, { useState } from 'react';
import { Calculator, ShieldCheck, Info } from 'lucide-react';

export const RiskCalculator: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [accountSize, setAccountSize] = useState<number>(10000);
  const [riskPercent, setRiskPercent] = useState<number>(1);
  const [stopLossPips, setStopLossPips] = useState<number>(20);

  // Calculations:
  const dollarRisk = accountSize * (riskPercent / 100);
  const calculatedLotSize = stopLossPips > 0 ? (dollarRisk / (stopLossPips * 10)).toFixed(2) : '0.00';
  const reward1to1 = (dollarRisk * 1).toFixed(0);
  const reward1to2 = (dollarRisk * 2).toFixed(0);
  const reward1to3 = (dollarRisk * 3).toFixed(0);

  return (
    <div className={`p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#101C32]/10 shadow-sm ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 sm:pb-6 mb-6 border-b border-[#101C32]/10 gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#315FEA]/10 text-[#315FEA] shrink-0">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#315FEA] font-bold block">
              MODULE 03 INTERACTIVE LAB
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#101C32]">
              Institutional Position Sizing Calculator
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101C32]/5 text-xs font-mono text-[#101C32]">
          <ShieldCheck className="w-4 h-4 text-[#315FEA]" />
          <span>Capital Preservation First</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-5">
          {/* Account Balance */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[#101C32] font-semibold">Account Capital</span>
              <span className="text-[#315FEA] font-bold text-sm bg-[#315FEA]/10 px-2.5 py-0.5 rounded-md">
                ${accountSize.toLocaleString()} USD
              </span>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[5000, 10000, 25000, 50000, 100000].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setAccountSize(size)}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded-md border transition-all cursor-pointer ${
                    accountSize === size
                      ? 'bg-[#101C32] text-white border-[#101C32]'
                      : 'bg-[#F5F4EF] text-[#778397] border-[#101C32]/10 hover:border-[#315FEA]'
                  }`}
                >
                  ${(size / 1000).toFixed(0)}k
                </button>
              ))}
            </div>

            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={accountSize}
              onChange={(e) => setAccountSize(Number(e.target.value))}
              className="w-full accent-[#315FEA] cursor-pointer h-2 bg-[#DCE5F1] rounded-lg mt-2"
            />
          </div>

          {/* Risk Percentage */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[#101C32] font-semibold">Risk Per Trade</span>
              <span className="text-[#315FEA] font-bold text-sm bg-[#315FEA]/10 px-2.5 py-0.5 rounded-md">
                {riskPercent}% (${dollarRisk.toFixed(0)})
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[0.5, 1.0, 2.0].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => setRiskPercent(rate)}
                  className={`py-2 text-xs font-mono rounded-lg border transition-all cursor-pointer ${
                    riskPercent === rate
                      ? 'bg-[#101C32] text-white border-[#101C32] font-bold shadow-xs'
                      : 'bg-[#F5F4EF] text-[#101C32] border-[#101C32]/10 hover:border-[#315FEA]'
                  }`}
                >
                  {rate}% <span className="text-[10px] opacity-75">{rate === 1.0 ? '(Standard)' : rate === 0.5 ? '(Conservative)' : '(Max Aggressive)'}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Stop Loss Distance */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[#101C32] font-semibold">Stop Loss Distance</span>
              <span className="text-[#315FEA] font-bold text-sm bg-[#315FEA]/10 px-2.5 py-0.5 rounded-md">
                {stopLossPips} Pips
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="60"
              step="1"
              value={stopLossPips}
              onChange={(e) => setStopLossPips(Number(e.target.value))}
              className="w-full accent-[#315FEA] cursor-pointer h-2 bg-[#DCE5F1] rounded-lg"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#778397]">
              <span>5 Pips (Scalp)</span>
              <span>20 Pips (Intraday)</span>
              <span>60 Pips (Swing)</span>
            </div>
          </div>

          {/* Dynamic Visual Risk-to-Reward Ratio Bar */}
          <div className="pt-2">
            <span className="text-[11px] font-mono text-[#778397] uppercase tracking-wider block mb-2 font-semibold">
              Visual Risk-to-Reward Distribution:
            </span>
            <div className="flex items-center gap-1 w-full h-8 rounded-lg overflow-hidden border border-[#101C32]/10 p-0.5 bg-[#F5F4EF]">
              <div
                className="bg-[#FF4D4D] text-white text-[10px] font-mono font-bold flex items-center justify-center rounded transition-all duration-300"
                style={{ width: '25%' }}
                title="1R Risk"
              >
                Risk -${dollarRisk.toFixed(0)}
              </div>
              <div
                className="bg-[#25D366] text-white text-[10px] font-mono font-bold flex items-center justify-center rounded transition-all duration-300"
                style={{ width: '75%' }}
                title="3R Target Reward"
              >
                Target +${reward1to3} (1:3 R:R)
              </div>
            </div>
          </div>
        </div>

        {/* Calculated Results Card */}
        <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-[#0D1728] text-white space-y-4 border border-[#1E2E48] shadow-xl">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#315FEA] font-bold block">
              EXECUTION PARAMETERS
            </span>
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          </div>

          <div className="space-y-3 font-mono">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs text-[#DCE5F1]/80">Maximum Dollar Risk:</span>
              <span className="text-sm sm:text-base font-bold text-[#FF6B6B]">-${dollarRisk.toFixed(0)}</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs text-[#DCE5F1]/80">Exact Position Size:</span>
              <span className="text-base sm:text-lg font-bold text-[#315FEA] bg-[#315FEA]/20 px-2.5 py-0.5 rounded">
                {calculatedLotSize} Lots
              </span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
              <span className="text-[#DCE5F1]/80">Target 1:1 Gain:</span>
              <span className="font-mono text-[#DCE5F1] font-semibold">+${reward1to1}</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
              <span className="text-[#DCE5F1]/80">Target 1:2 Gain:</span>
              <span className="font-mono text-[#25D366] font-semibold">+${reward1to2}</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-[#DCE5F1]/80">Target 1:3 Gain (Academy Target):</span>
              <span className="font-mono text-[#25D366] font-bold text-sm">+${reward1to3}</span>
            </div>
          </div>

          <div className="pt-2 text-[10px] text-[#778397] flex items-start gap-1.5 leading-tight border-t border-white/10">
            <Info className="w-3.5 h-3.5 shrink-0 text-[#315FEA] mt-0.5" />
            <span>
              Standard lot size assumes USD as quote currency (e.g. EUR/USD with $10 per pip per 1.00 lot). Formulas taught in Module 03.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
