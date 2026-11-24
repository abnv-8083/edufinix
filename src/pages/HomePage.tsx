import React from 'react';
import { HeroSection } from '../sections/home/HeroSection';
import { IntroSection } from '../sections/home/IntroSection';
import { WhyEdufinixSection } from '../sections/home/WhyEdufinixSection';
import { PracticalLearningSection } from '../sections/home/PracticalLearningSection';
import { CurriculumPreviewSection } from '../sections/home/CurriculumPreviewSection';
import { MarketEscapeSection } from '../sections/home/MarketEscapeSection';
import { LearningEnvironmentSection } from '../sections/home/LearningEnvironmentSection';
import { ClosingCtaSection } from '../sections/home/ClosingCtaSection';
import { MarketStructureLab } from '../components/common/MarketStructureLab';
import { TraderJourneyTimeline } from '../components/common/TraderJourneyTimeline';
import { usePageMetadata } from '../hooks/usePageMetadata';

export const HomePage: React.FC = () => {
  usePageMetadata(
    'Understand the Market. Develop Your Edge. | Kozhikode, Kerala',
    'Edufinix Trading Academy is a skill-oriented financial education institute in Kozhikode, Kerala. Practical offline Forex market training, technical analysis, risk management, and lifelong mentorship.'
  );

  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <IntroSection />

      {/* Interactive Institutional Chart Lab Highlight Section */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#101C32]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 sm:mb-12 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#315FEA]">
              <span>Interactive Simulator</span>
              <span className="text-[#101C32]/30">/</span>
              <span>Module 02 &amp; 03 Preview</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#101C32] tracking-tight">
              Test Drive Institutional Price Concepts.
            </h2>
            <p className="font-body text-sm sm:text-base text-[#778397] leading-relaxed">
              Explore how Edufinix students learn to read naked price action, identify commercial order blocks, and execute with disciplined mathematical risk.
            </p>
          </div>

          <MarketStructureLab />
        </div>
      </section>

      <WhyEdufinixSection />
      
      <PracticalLearningSection />
      
      <CurriculumPreviewSection />

      {/* Student Transformation Pathway Timeline */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#F5F4EF] border-b border-[#101C32]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TraderJourneyTimeline />
        </div>
      </section>

      <MarketEscapeSection />
      
      <LearningEnvironmentSection />
      
      <ClosingCtaSection />
    </div>
  );
};
