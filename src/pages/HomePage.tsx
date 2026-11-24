import React from 'react';
import { HeroSection } from '../sections/home/HeroSection';
import { IntroSection } from '../sections/home/IntroSection';
import { WhyEdufinixSection } from '../sections/home/WhyEdufinixSection';
import { PracticalLearningSection } from '../sections/home/PracticalLearningSection';
import { CurriculumPreviewSection } from '../sections/home/CurriculumPreviewSection';
import { MarketEscapeSection } from '../sections/home/MarketEscapeSection';
import { LearningEnvironmentSection } from '../sections/home/LearningEnvironmentSection';
import { ClosingCtaSection } from '../sections/home/ClosingCtaSection';
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
      <WhyEdufinixSection />
      <PracticalLearningSection />
      <CurriculumPreviewSection />
      <MarketEscapeSection />
      <LearningEnvironmentSection />
      <ClosingCtaSection />
    </div>
  );
};
