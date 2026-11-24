import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Radio } from 'lucide-react';

interface TickerAsset {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  baseVal: number;
  decimals: number;
}

const INITIAL_ASSETS: TickerAsset[] = [
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: '1.0842', change: '+0.18%', isPositive: true, baseVal: 1.0842, decimals: 4 },
  { symbol: 'GBP/USD', name: 'British Pound', price: '1.2715', change: '+0.25%', isPositive: true, baseVal: 1.2715, decimals: 4 },
  { symbol: 'USD/JPY', name: 'US Dollar / Yen', price: '154.68', change: '-0.32%', isPositive: false, baseVal: 154.68, decimals: 2 },
  { symbol: 'XAU/USD', name: 'Gold (Ounce)', price: '2,884.50', change: '+0.64%', isPositive: true, baseVal: 2884.50, decimals: 2 },
  { symbol: 'USD/CHF', name: 'US Dollar / Franc', price: '0.8924', change: '-0.11%', isPositive: false, baseVal: 0.8924, decimals: 4 },
  { symbol: 'AUD/USD', name: 'Aussie Dollar', price: '0.6538', change: '+0.41%', isPositive: true, baseVal: 0.6538, decimals: 4 },
  { symbol: 'DXY', name: 'US Dollar Index', price: '104.12', change: '-0.15%', isPositive: false, baseVal: 104.12, decimals: 2 },
  { symbol: 'BTC/USD', name: 'Bitcoin', price: '94,820', change: '+1.85%', isPositive: true, baseVal: 94820, decimals: 0 },
];

export const MarketTicker: React.FC = () => {
  const [assets, setAssets] = useState<TickerAsset[]>(INITIAL_ASSETS);
  const [activeTickSymbol, setActiveTickSymbol] = useState<string | null>(null);

  // Micro-simulation of institutional tick updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAssets((prev) => {
        const randomIndex = Math.floor(Math.random() * prev.length);
        const item = prev[randomIndex];
        const tickDelta = (Math.random() * 0.0008 - 0.00035) * item.baseVal;
        const newBase = Math.max(0.01, item.baseVal + tickDelta);
        const isUp = tickDelta >= 0;
        const formattedPrice = item.decimals === 0 
          ? Math.round(newBase).toLocaleString() 
          : newBase.toFixed(item.decimals);
        const currentChange = (parseFloat(item.change) + (isUp ? 0.02 : -0.02)).toFixed(2);

        setActiveTickSymbol(item.symbol);
        setTimeout(() => setActiveTickSymbol(null), 1200);

        return prev.map((asset, i) =>
          i === randomIndex
            ? {
                ...asset,
                price: formattedPrice,
                change: `${parseFloat(currentChange) >= 0 ? '+' : ''}${currentChange}%`,
                isPositive: parseFloat(currentChange) >= 0,
                baseVal: newBase,
              }
            : asset
        );
      });
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0D1728] text-white border-b border-[#1E2E48] text-xs select-none overflow-hidden h-9 flex items-center relative z-40">
      {/* Institutional Live Indicator Badge */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#101C32] border-r border-[#1E2E48] text-[10px] font-mono tracking-wider uppercase font-semibold text-[#315FEA] shrink-0 z-10 shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
        </span>
        <span className="tracking-widest">LIVE DESK</span>
      </div>

      {/* Infinite Scrolling Ticker Track */}
      <div className="overflow-hidden flex-1 relative flex items-center mask-gradient">
        <div className="animate-ticker flex items-center gap-8 py-1 font-mono text-[11px]">
          {/* First set */}
          {assets.concat(assets).map((asset, index) => {
            const isTickActive = activeTickSymbol === asset.symbol;
            return (
              <div
                key={`${asset.symbol}-${index}`}
                className={`flex items-center gap-2 whitespace-nowrap px-2 py-0.5 rounded transition-colors duration-300 ${
                  isTickActive
                    ? asset.isPositive
                      ? 'bg-[#25D366]/20 text-[#25D366]'
                      : 'bg-[#FF4D4D]/20 text-[#FF4D4D]'
                    : 'text-[#DCE5F1]/90'
                }`}
              >
                <span className="font-semibold text-white tracking-wide">{asset.symbol}</span>
                <span className="font-bold">{asset.price}</span>
                <span
                  className={`flex items-center text-[10px] font-medium ${
                    asset.isPositive ? 'text-[#25D366]' : 'text-[#FF6B6B]'
                  }`}
                >
                  {asset.isPositive ? (
                    <TrendingUp className="w-3 h-3 inline mr-0.5" />
                  ) : (
                    <TrendingDown className="w-3 h-3 inline mr-0.5" />
                  )}
                  {asset.change}
                </span>
                <span className="text-[#3E4F6E] ml-2">•</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Session status indicator */}
      <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-[#101C32] border-l border-[#1E2E48] text-[10px] font-mono text-[#778397] shrink-0 z-10">
        <Radio className="w-3 h-3 text-[#315FEA] animate-pulse" />
        <span className="text-white/80">Kozhikode Campus:</span>
        <span className="text-[#315FEA] font-semibold">Active Hours</span>
      </div>
    </div>
  );
};
