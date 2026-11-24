import React from 'react';
import { Button } from '../../components/common/Button';
import { IMAGES } from '../../data/assets';
import { Compass, Shield, Heart } from 'lucide-react';

export const MarketEscapeSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-[#101C32] text-white relative overflow-hidden border-b border-[#17263D]">
      {/* Background Architectural Accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, rgba(49, 95, 234, 0.4) 0%, transparent 50%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-[#315FEA]" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#DCE5F1]">
              Exclusive Academy Retreat
            </span>
          </div>
          
          <h2 className="font-heading text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2 sm:mb-3">
            Beyond the Trading Screen.
          </h2>
          
          <p className="font-heading text-lg sm:text-xl lg:text-2xl text-[#315FEA] font-medium tracking-tight">
            Mentorship &amp; Market Escape
          </p>
        </div>

        {/* Editorial Two-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#17263D]">
              <div className="aspect-[16/10] sm:aspect-[16/9] relative overflow-hidden group">
                <img
                  src={IMAGES.marketEscape.url}
                  alt={IMAGES.marketEscape.alt}
                  className="w-full h-full object-cover object-center filter saturate-[0.9] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#101C32] via-[#101C32]/30 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-[#315FEA]">
                      IMMERSIVE 2-DAY RETREAT
                    </span>
                  </div>
                  <p className="font-heading text-sm sm:text-base font-semibold text-white">
                    Mindset development &amp; psychological resilience at a luxury resort.
                  </p>
                </div>
              </div>
            </div>

            {/* Spec Badge */}
            <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-5 sm:right-6 flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-[#17263D] border border-white/15 shadow-xl text-[11px] sm:text-xs font-mono text-[#DCE5F1]">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#315FEA] shrink-0" />
              <span>Two-Day Camping Experience • Luxury Resort Setting</span>
            </div>
          </div>

          {/* Right Column: Exact Description & Principles */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 sm:space-y-4 backdrop-blur-xs">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#DCE5F1]/60 font-semibold block">
                The Experience
              </span>
              <p className="font-body text-sm sm:text-base text-[#DCE5F1] leading-relaxed">
                An immersive two-day camping experience at a luxury resort, designed to provide psychological resilience and mindset development. The experience focuses on emotional stability and the disciplined mindset required for trading.
              </p>
            </div>

            {/* Retreat Focus Areas */}
            <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#DCE5F1]/90">
                <div className="p-1 rounded bg-[#315FEA]/20 text-[#315FEA] shrink-0 mt-0.5">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <span>Cultivating emotional composure away from volatile live market charts.</span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#DCE5F1]/90">
                <div className="p-1 rounded bg-[#315FEA]/20 text-[#315FEA] shrink-0 mt-0.5">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <span>Building psychological resilience against drawdowns and cognitive bias.</span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#DCE5F1]/90">
                <div className="p-1 rounded bg-[#315FEA]/20 text-[#315FEA] shrink-0 mt-0.5">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <span>Deep personal strategy audit with mentors and fellow traders.</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <Button to="/mentorship" variant="primary" size="md" showArrow={true} className="w-full sm:w-auto">
                Learn More About Mentorship
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
