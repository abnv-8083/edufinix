import React, { useState } from 'react';
import { Calculator, ShieldCheck, Info } from 'lucide-react';

export const RiskCalculator: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [accountSize, setAccountSize] = useState<number>(10000);
  const [riskPercent, setRiskPercent] = useState<number>(1);
  const [stopLossPips, setStopLossPips] = useState<number>(20);

  // Calculations:
  const dollarRisk = accountSize * (riskPercent / 100);
  const calculatedLotSize = stopLossPips > 0 ? (dollarRisk / (stopLossPips * 10)).toFixed(2) : '0.00';
  const reward1to2 = (dollarRisk * 2).toFixed(0);
  const reward1to3 = (dollarRisk * 3).toFixed(0);

  return (
    <div className={`p-4 sm:p-6 lg:p-8 rounded-2xl bg-white border border-[#101C32]/10 shadow-sm ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 mb-5 sm:mb-6 border-b border-[#101C32]/10 gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="p-2 sm:p-2.5 rounded-xl bg-[#315FEA]/10 text-[#315FEA] shrink-0">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#315FEA] font-bold block">
              MODULE 03 INTERACTIVE LAB
            </span>
            <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-[#101C32]">
              Educational Position Sizing Calculator
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono text-[#778397]">
          <ShieldCheck className="w-4 h-4 text-[#315FEA]" />
          <span>Capital Preservation First</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          {/* Account Balance */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#101C32] font-semibold">Account Capital</span>
              <span className="text-[#315FEA] font-bold">${accountSize.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={accountSize}
              onChange={(e) => setAccountSize(Number(e.target.value))}
              className="w-full accent-[#315FEA] cursor-pointer h-2 bg-gray-200 rounded-lg"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#778397]">
              <span>$1,000</span>
              <span>$50,000</span>
              <span>$100,000</span>
            </div>
          </div>

          {/* Risk Percentage */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#101C32] font-semibold">Risk Per Trade</span>
              <span className="text-[#315FEA] font-bold">{riskPercent}% of capital</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[0.5, 1.0, 2.0].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => setRiskPercent(rate)}
                  className={`py-2.5 sm:py-2 text-xs font-mono rounded-lg border transition-colors cursor-pointer ${
                    riskPercent === rate
                      ? 'bg-[#101C32] text-white border-[#101C32] font-bold'
                      : 'bg-[#F5F4EF] text-[#101C32] border-[#101C32]/10 hover:border-[#315FEA]'
                  }`}
                >
                  {rate}% <span className="hidden xs:inline">{rate <= 1 ? '(Inst.)' : '(Max)'}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Stop Loss Distance in Pips */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#101C32] font-semibold">Stop Loss Distance</span>
              <span className="text-[#315FEA] font-bold">{stopLossPips} Pips</span>
            </div>
            <input
              type="range"
              min="5"
              max="60"
              step="1"
              value={stopLossPips}
              onChange={(e) => setStopLossPips(Number(e.target.value))}
              className="w-full accent-[#315FEA] cursor-pointer h-2 bg-gray-200 rounded-lg"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#778397]">
              <span>5 Pips (Scalp)</span>
              <span>20 Pips (Intraday)</span>
              <span>60 Pips (Swing)</span>
            </div>
          </div>
        </div>

        {/* Calculated Results Card */}
        <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-[#101C32] text-white space-y-3.5 sm:space-y-4 border border-[#17263D]">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#DCE5F1]/60 block">
            CALCULATED PARAMETERS
          </span>

          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs text-[#DCE5F1]/80">Maximum Dollar Risk:</span>
              <span className="font-mono text-sm sm:text-base font-bold text-white">${dollarRisk.toFixed(0)}</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs text-[#DCE5F1]/80">Exact Position Size:</span>
              <span className="font-mono text-base sm:text-lg font-bold text-[#315FEA]">{calculatedLotSize} Lots</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
              <span className="text-[#DCE5F1]/80">Target 1:2 R:R Gain:</span>
              <span className="font-mono text-[#25D366] font-semibold">+${reward1to2}</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-[#DCE5F1]/80">Target 1:3 R:R Gain:</span>
              <span className="font-mono text-[#25D366] font-semibold">+${reward1to3}</span>
            </div>
          </div>

          <div className="pt-2 text-[10px] text-[#778397] flex items-start gap-1.5 leading-tight">
            <Info className="w-3.5 h-3.5 shrink-0 text-[#315FEA] mt-0.5" />
            <span>
              Calculated using standard 10$/pip quote standard. Taught practically in Module 03 for capital preservation.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
