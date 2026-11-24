import React from 'react';
import { Target, Compass, Award } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#101C32]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Editorial Anchor */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-medium text-[#315FEA]">
              <span>01</span>
              <span className="text-[#101C32]/30">/</span>
              <span>Institutional Philosophy</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#101C32] tracking-tight leading-[1.15]">
              Education Beyond the Charts.
            </h2>

            <div className="pt-4 border-l-2 border-[#315FEA] pl-5 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#778397] font-semibold block">
                The Edufinix Standard
              </span>
              <p className="font-body text-sm text-[#17263D] font-medium leading-relaxed">
                Trading is not about impulsive predictions or get-rich-quick gambles. It is a rigorous cognitive craft founded on statistical probability, disciplined risk control, and emotional equilibrium.
              </p>
            </div>
          </div>

          {/* Right Column: Exact Brand Introduction & 3 Foundations */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <p className="font-body text-lg sm:text-xl text-[#101C32] leading-relaxed font-normal">
                <strong className="font-semibold text-[#101C32]">Edufinix Trading Academy</strong> is a skill-oriented financial education institute dedicated to helping individuals develop practical Forex trading knowledge and market skills.
              </p>

              <p className="font-body text-base sm:text-lg text-[#778397] leading-relaxed">
                Through expert-led training, technical analysis, risk management and real-time market insights, we focus on building a strong foundation for informed and disciplined market participation.
              </p>
            </div>

            {/* 3 Core Editorial Cornerstones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#101C32]/10">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#315FEA]/10 text-[#315FEA] flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-heading text-sm font-semibold text-[#101C32]">
                  Practical Knowledge
                </h4>
                <p className="font-body text-xs text-[#778397] leading-relaxed">
                  Direct market mechanics taught with live price action, not theoretical textbook diagrams.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#315FEA]/10 text-[#315FEA] flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-heading text-sm font-semibold text-[#101C32]">
                  Disciplined Risk
                </h4>
                <p className="font-body text-xs text-[#778397] leading-relaxed">
                  Strict position sizing and capital preservation rules embedded into every single trade.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#315FEA]/10 text-[#315FEA] flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-heading text-sm font-semibold text-[#101C32]">
                  Continuous Mentorship
                </h4>
                <p className="font-body text-xs text-[#778397] leading-relaxed">
                  Lifelong guidance and community integration to navigate dynamic market environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

