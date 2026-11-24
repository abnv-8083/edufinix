import React, { useState } from 'react';
import { Layers, ShieldCheck, Zap, Info, Activity } from 'lucide-react';

type ConceptId = 'order-block' | 'fvg' | 'liquidity-sweep' | 'risk-reward';

interface ConceptData {
  id: ConceptId;
  title: string;
  badge: string;
  icon: React.ReactNode;
  subtitle: string;
  description: string;
  institutionalLogic: string;
  practicalRule: string;
  metrics: { label: string; value: string; color?: string }[];
}

const CONCEPTS: ConceptData[] = [
  {
    id: 'order-block',
    title: 'Institutional Order Block (OB)',
    badge: 'Module 02 Core',
    icon: <Layers className="w-4 h-4 text-[#315FEA]" />,
    subtitle: 'High-Volume Institutional Footprint Zone',
    description: 'The last opposing candle prior to an aggressive structural displacement. This zone indicates where institutional banks placed heavy volume orders that remain partially unfilled.',
    institutionalLogic: 'Central banks and liquidity providers do not enter in single clicks. They leave resting limit orders in previous mitigation blocks that price revisits for liquidity fulfillment.',
    practicalRule: 'Wait for displacement confirmation and price return into the 50% equilibrium level of the order block before entry.',
    metrics: [
      { label: 'Timeframe Focus', value: '15M / 1H / 4H' },
      { label: 'Displacement Strength', value: 'High Momentum' },
      { label: 'Typical Invalidation', value: 'Base of OB Wick', color: '#FF6B6B' },
      { label: 'Expected Reaction', value: 'Fast Expansion', color: '#25D366' },
    ],
  },
  {
    id: 'fvg',
    title: 'Fair Value Gap (FVG)',
    badge: 'Price Imbalance',
    icon: <Zap className="w-4 h-4 text-[#315FEA]" />,
    subtitle: '3-Candle Market Inefficiency & Rebalance',
    description: 'Occurs when rapid aggressive buying or selling creates an imbalance where only one side of the market is offered. The space between Candle 1’s high and Candle 3’s low forms the gap.',
    institutionalLogic: 'Markets seek thermodynamic balance. Price frequently gravitates toward unfilled Fair Value Gaps to restore two-sided liquidity before resuming the dominant trend.',
    practicalRule: 'Look for confluence when an FVG overlaps with a key Fibonacci level (0.618–0.786) or session open timing.',
    metrics: [
      { label: 'Pattern Type', value: '3-Candle Inefficiency' },
      { label: 'Fill Probability', value: '~78% Historical' },
      { label: 'Entry Technique', value: 'Consequent Encroachment (50%)' },
      { label: 'Risk Window', value: 'Beyond Candle 1 Extremity', color: '#FF6B6B' },
    ],
  },
  {
    id: 'liquidity-sweep',
    title: 'Liquidity Sweep & Hunt',
    badge: 'Retail Trap Neutralization',
    icon: <Activity className="w-4 h-4 text-[#315FEA]" />,
    subtitle: 'Triggering Retail Stops to Fuel Expansion',
    description: 'A sharp wick penetration above a prominent previous high or below an obvious low designed to trigger retail breakout entries and hit protective stop losses.',
    institutionalLogic: 'Large financial institutions require enormous buy or sell orders. To execute large long positions, they need mass sell-stop orders, which they trigger by briefly pushing prices below key support.',
    practicalRule: 'Do not chase breakout candles outside ranges. Wait for the wick rejection back inside the range to trade in the direction of the sweep.',
    metrics: [
      { label: 'Target Zone', value: 'Equal Highs / Lows (EQH/EQL)' },
      { label: 'Execution Speed', value: 'Under 15 Minutes' },
      { label: 'Volume Signature', value: 'Spike & Divergence' },
      { label: 'Confirmation Signal', value: 'Close inside prior range', color: '#25D366' },
    ],
  },
  {
    id: 'risk-reward',
    title: 'Asymmetric 1:3 Risk-to-Reward',
    badge: 'Capital Preservation',
    icon: <ShieldCheck className="w-4 h-4 text-[#315FEA]" />,
    subtitle: 'Mathematical Edge Over Mere Win Rate',
    description: 'Trading is a numbers game governed by probability. An asymmetric 1:3 R:R framework ensures that even with a 40% win rate, your portfolio expands consistently while risk remains fixed at 1%.',
    institutionalLogic: 'Professional funds never focus on predicting where price goes; they engineer strictly controlled asymmetric payout ratios so that one winning trade absorbs three prior minor losses.',
    practicalRule: 'Never alter your stop loss once entered. Let mathematics and position sizing protect your mental capital.',
    metrics: [
      { label: 'Defined Risk', value: '1.0% Capital Max', color: '#FF6B6B' },
      { label: 'Target Expansion', value: '3.0% Profit Target', color: '#25D366' },
      { label: 'Required Win Rate', value: 'Only 33% to Breakeven' },
      { label: 'Expectancy Ratio', value: '+0.60 Units/Trade', color: '#315FEA' },
    ],
  },
];

export const MarketStructureLab: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<ConceptId>('order-block');
  const activeData = CONCEPTS.find((c) => c.id === selectedConcept)!;

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl bg-[#0D1728] text-white border border-[#1E2E48] overflow-hidden shadow-2xl">
      {/* Terminal Title Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-[#09111F] border-b border-[#1E2E48]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block opacity-80" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block opacity-80" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block opacity-80" />
          </div>
          <span className="text-[#1E2E48]">|</span>
          <div className="flex items-center gap-2 text-xs font-mono text-[#DCE5F1]/80">
            <span className="text-[#315FEA] font-semibold">EDX_TERMINAL</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline text-[#778397]">Institutional Price Action Lab</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-[#DCE5F1]/70">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-[#25D366] font-semibold">Interactive Chart Engine</span>
        </div>
      </div>

      {/* Concept Switcher Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 p-2 bg-[#09111F]/60 border-b border-[#1E2E48]">
        {CONCEPTS.map((concept) => (
          <button
            key={concept.id}
            onClick={() => setSelectedConcept(concept.id)}
            className={`flex items-center gap-2 p-2.5 sm:p-3 rounded-xl text-left transition-all cursor-pointer ${
              selectedConcept === concept.id
                ? 'bg-[#17263D] text-white border border-[#315FEA]/60 shadow-md'
                : 'text-[#DCE5F1]/60 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <div className={`p-1.5 rounded-lg shrink-0 ${
              selectedConcept === concept.id ? 'bg-[#315FEA] text-white' : 'bg-white/5 text-[#778397]'
            }`}>
              {concept.icon}
            </div>
            <div className="min-w-0">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-[#315FEA] font-semibold truncate">
                {concept.badge}
              </span>
              <span className="block text-xs sm:text-sm font-heading font-semibold text-white truncate">
                {concept.title.split('(')[0]}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 lg:p-8">
        {/* Left Column: Interactive Candlestick SVG Visualization */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="relative rounded-2xl bg-[#09111F] border border-[#1E2E48] p-4 sm:p-6 overflow-hidden">
            {/* Grid Background Lines */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(49, 95, 234, 0.15) 1px, transparent 1px),
                                  linear-gradient(to bottom, rgba(49, 95, 234, 0.15) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Asset Header Info */}
            <div className="flex items-center justify-between mb-4 relative z-10 font-mono text-xs pb-3 border-b border-[#1E2E48]">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white tracking-wider">EUR/USD</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-[#DCE5F1]">15M</span>
                <span className="text-[10px] text-[#25D366] font-semibold">+1.0842 ▲</span>
              </div>
              <div className="text-[11px] text-[#778397]">
                Session: <span className="text-white">London High Volatility</span>
              </div>
            </div>

            {/* Dynamic SVG Candlestick Diagram */}
            <div className="relative h-64 sm:h-72 w-full flex items-center justify-center z-10">
              <svg viewBox="0 0 540 260" className="w-full h-full overflow-visible">
                {/* Horizontal Level Guides */}
                <line x1="20" y1="50" x2="520" y2="50" stroke="#1E2E48" strokeDasharray="3 3" />
                <text x="525" y="53" fill="#778397" fontSize="9" fontFamily="monospace">1.0880</text>

                <line x1="20" y1="120" x2="520" y2="120" stroke="#1E2E48" strokeDasharray="3 3" />
                <text x="525" y="123" fill="#778397" fontSize="9" fontFamily="monospace">1.0850</text>

                <line x1="20" y1="190" x2="520" y2="190" stroke="#1E2E48" strokeDasharray="3 3" />
                <text x="525" y="193" fill="#778397" fontSize="9" fontFamily="monospace">1.0820</text>

                {/* Candlesticks Sequence (1 to 8) */}
                {/* Candle 1: Neutral Bullish */}
                <line x1="50" y1="130" x2="50" y2="175" stroke="#25D366" strokeWidth="1.5" />
                <rect x="42" y="140" width="16" height="25" fill="#25D366" rx="1.5" />

                {/* Candle 2: Strong Down / Bearish Pre-displacement */}
                <line x1="105" y1="125" x2="105" y2="185" stroke="#FF4D4D" strokeWidth="1.5" />
                <rect x="97" y="135" width="16" height="40" fill="#FF4D4D" rx="1.5" />

                {/* Candle 3: Order Block Candle (Bullish Inception) */}
                <line x1="160" y1="150" x2="160" y2="205" stroke="#FF4D4D" strokeWidth="1.5" />
                <rect x="152" y="160" width="16" height="38" fill={selectedConcept === 'order-block' ? '#315FEA' : '#FF4D4D'} rx="1.5" />

                {/* Candle 4: Aggressive Displacement Bullish */}
                <line x1="215" y1="85" x2="215" y2="170" stroke="#25D366" strokeWidth="1.5" />
                <rect x="207" y="95" width="16" height="70" fill="#25D366" rx="1.5" />

                {/* Candle 5: Gap continuation */}
                <line x1="270" y1="60" x2="270" y2="115" stroke="#25D366" strokeWidth="1.5" />
                <rect x="262" y="65" width="16" height="40" fill="#25D366" rx="1.5" />

                {/* Candle 6: Retracement to mitigation */}
                <line x1="325" y1="85" x2="325" y2="155" stroke="#FF4D4D" strokeWidth="1.5" />
                <rect x="317" y="95" width="16" height="50" fill="#FF4D4D" rx="1.5" />

                {/* Candle 7: Tap & Expansion */}
                <line x1="380" y1="65" x2="380" y2="150" stroke="#25D366" strokeWidth="1.5" />
                <rect x="372" y="75" width="16" height="60" fill="#25D366" rx="1.5" />

                {/* Candle 8: Live Running Target Expansion */}
                <line x1="435" y1="35" x2="435" y2="90" stroke="#25D366" strokeWidth="1.5" />
                <rect x="427" y="42" width="16" height="40" fill="#25D366" rx="1.5" />

                {/* DYNAMIC ANNOTATIONS BASED ON SELECTED CONCEPT */}
                {selectedConcept === 'order-block' && (
                  <g className="transition-all duration-500">
                    {/* OB Highlight Zone */}
                    <rect x="145" y="155" width="190" height="45" fill="rgba(49, 95, 234, 0.22)" stroke="#315FEA" strokeWidth="1.5" strokeDasharray="4 4" rx="4" />
                    <text x="155" y="150" fill="#315FEA" fontSize="10" fontWeight="bold" fontFamily="monospace">
                      BULLISH ORDER BLOCK (OB) ZONE
                    </text>
                    <path d="M 335 155 Q 360 140 375 145" stroke="#315FEA" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />
                    <circle cx="375" cy="148" r="4" fill="#315FEA" className="animate-ping" />
                    <circle cx="375" cy="148" r="3" fill="#315FEA" />
                    <text x="360" y="172" fill="#DCE5F1" fontSize="9" fontFamily="monospace">Mitigation Tap</text>
                  </g>
                )}

                {selectedConcept === 'fvg' && (
                  <g className="transition-all duration-500">
                    {/* FVG Highlight Zone between Candle 3 High and Candle 5 Low */}
                    <rect x="195" y="105" width="140" height="40" fill="rgba(37, 211, 102, 0.2)" stroke="#25D366" strokeWidth="1.5" strokeDasharray="3 3" rx="4" />
                    <text x="200" y="100" fill="#25D366" fontSize="10" fontWeight="bold" fontFamily="monospace">
                      FAIR VALUE GAP (IMBALANCE)
                    </text>
                    <line x1="200" y1="125" x2="335" y2="125" stroke="#25D366" strokeWidth="1" strokeDasharray="2 2" />
                    <text x="340" y="128" fill="#25D366" fontSize="9" fontFamily="monospace">50% Midpoint</text>
                  </g>
                )}

                {selectedConcept === 'liquidity-sweep' && (
                  <g className="transition-all duration-500">
                    {/* Liquidity High Line */}
                    <line x1="80" y1="50" x2="300" y2="50" stroke="#FFBD2E" strokeWidth="1.5" strokeDasharray="4 4" />
                    <text x="90" y="42" fill="#FFBD2E" fontSize="9" fontWeight="bold" fontFamily="monospace">
                      PREVIOUS SWING HIGH (BUY-SIDE LIQUIDITY)
                    </text>
                    {/* Wick Sweep Indicator */}
                    <circle cx="270" cy="50" r="8" fill="none" stroke="#FF4D4D" strokeWidth="2" className="animate-pulse" />
                    <text x="285" y="45" fill="#FF4D4D" fontSize="10" fontWeight="bold" fontFamily="monospace">
                      SWEEP! Retail Stops Triggered
                    </text>
                  </g>
                )}

                {selectedConcept === 'risk-reward' && (
                  <g className="transition-all duration-500">
                    {/* Take Profit Zone */}
                    <rect x="360" y="42" width="120" height="95" fill="rgba(37, 211, 102, 0.18)" stroke="#25D366" strokeWidth="1.5" rx="3" />
                    <text x="370" y="60" fill="#25D366" fontSize="10" fontWeight="bold" fontFamily="monospace">
                      TARGET: +3.0R (+$300)
                    </text>

                    {/* Entry Line */}
                    <line x1="350" y1="137" x2="490" y2="137" stroke="#315FEA" strokeWidth="2" />
                    <text x="370" y="132" fill="#315FEA" fontSize="9" fontWeight="bold" fontFamily="monospace">
                      ENTRY: 1.0838
                    </text>

                    {/* Stop Loss Zone */}
                    <rect x="360" y="137" width="120" height="32" fill="rgba(255, 77, 77, 0.2)" stroke="#FF4D4D" strokeWidth="1.5" rx="3" />
                    <text x="370" y="158" fill="#FF4D4D" fontSize="10" fontWeight="bold" fontFamily="monospace">
                      STOP: -1.0R (-$100)
                    </text>
                  </g>
                )}
              </svg>
            </div>

            {/* Bottom Chart Footer Info */}
            <div className="mt-3 pt-3 border-t border-[#1E2E48] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#778397]">
              <span>Kozhikode Live Room Demo</span>
              <span className="text-[#315FEA]">Active Price Action Breakdown</span>
            </div>
          </div>
        </div>

        {/* Right Column: Institutional Explanation & Metrics */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#315FEA] font-semibold">
                {activeData.subtitle}
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                {activeData.title}
              </h3>
            </div>

            <p className="font-body text-xs sm:text-sm text-[#DCE5F1]/80 leading-relaxed">
              {activeData.description}
            </p>

            <div className="p-3.5 rounded-xl bg-[#17263D]/80 border border-[#1E2E48] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#315FEA] font-bold block flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                INSTITUTIONAL MECHANICS
              </span>
              <p className="text-xs text-[#DCE5F1]/90 leading-relaxed font-body">
                {activeData.institutionalLogic}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#09111F] border border-[#1E2E48] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#25D366] font-bold block flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                STUDENT EXECUTION RULE
              </span>
              <p className="text-xs text-[#DCE5F1]/90 leading-relaxed font-body">
                {activeData.practicalRule}
              </p>
            </div>
          </div>

          {/* Metric Badges */}
          <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-[#1E2E48]">
            {activeData.metrics.map((m, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-[#09111F] border border-[#1E2E48]">
                <span className="block text-[10px] font-mono text-[#778397] uppercase truncate">{m.label}</span>
                <span
                  className="block text-xs font-mono font-bold mt-0.5 truncate"
                  style={{ color: m.color || '#FFFFFF' }}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
