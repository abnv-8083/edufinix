import React from 'react';
import { Button } from '../components/common/Button';
import { BRAND_INFO } from '../data/brand';
import { IMAGES } from '../data/assets';
import { Compass, Eye, ShieldCheck, MapPin, CheckCircle } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';

export const AboutPage: React.FC = () => {
  usePageMetadata(
    'About the Academy | Institutional Profile',
    'Edufinix Trading Academy is a skill-oriented financial education institute dedicated to practical Forex market training, technical analysis, risk management and market strategies in Kozhikode, Kerala.'
  );

  return (
    <div className="flex flex-col">
      {/* Editorial Page Header */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#F5F4EF] border-b border-[#101C32]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#315FEA]">
              <span>About Edufinix</span>
              <span className="text-[#101C32]/30">/</span>
              <span>Institutional Profile</span>
            </div>

            <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101C32] tracking-tight leading-[1.12]">
              Fostering Disciplined Market Participants.
            </h1>

            <p className="font-body text-base sm:text-lg lg:text-xl text-[#778397] leading-relaxed">
              Edufinix Trading Academy is a skill-oriented financial education institute dedicated to practical Forex market training, technical analysis, risk management and market strategies in Kozhikode, Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-[#101C32]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Overview Prose & Editorial Callout */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-[#315FEA] font-semibold">
                  Institutional Profile
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101C32] tracking-tight">
                  Company Overview
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg font-body text-[#17263D] leading-relaxed">
                <p className="p-4 sm:p-5 rounded-2xl bg-[#F5F4EF] border-l-4 border-[#315FEA] text-[#101C32] font-medium italic">
                  "At Edufinix Trading Academy, we believe that financial literacy and market expertise are essential skills in today's economy."
                </p>

                <p className="text-[#778397]">
                  Our mission is to make quality financial education accessible to students, professionals, entrepreneurs and individuals seeking to build a strong foundation in Forex trading.
                </p>

                <p className="text-[#778397]">
                  With a focus on skill development, continuous learning and practical application, Edufinix Trading Academy is committed to helping individuals enhance their financial knowledge and improve their market decision-making abilities.
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-[#101C32]/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#778397]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#315FEA]" />
                  <span>Kozhikode, Kerala, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#315FEA]" />
                  <span>Practical Offline Focus</span>
                </div>
              </div>
            </div>

            {/* Right Column: Curated Academy Photography */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#101C32]/12 shadow-xl bg-[#F5F4EF]">
                <div className="aspect-[4/3] xs:aspect-[16/11] sm:aspect-[4/5] relative overflow-hidden group">
                  <img
                    src={IMAGES.classroomOverview.url}
                    alt={IMAGES.classroomOverview.alt}
                    className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101C32]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-[#315FEA] block">
                      Offline Academy Environment
                    </span>
                    <p className="font-heading text-xs sm:text-sm font-semibold text-white">
                      Structured learning suites configured for focused chart observation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#101C32] text-white border-b border-[#17263D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#315FEA] font-semibold">
              Guiding Principles
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Vision &amp; Mission
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#DCE5F1]/70">
              Clear institutional commitments guiding every lesson, practical session, and student relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            
            {/* Vision Card */}
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#17263D] border border-white/10 shadow-xl flex flex-col justify-between space-y-5 sm:space-y-6">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2 sm:p-2.5 rounded-xl bg-[#315FEA]/20 text-[#315FEA]">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#DCE5F1]/60">
                    OUR VISION
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  The Academy Vision
                </h3>

                <p className="font-body text-sm sm:text-base text-[#DCE5F1] leading-relaxed">
                  &ldquo;{BRAND_INFO.vision}&rdquo;
                </p>

                <p className="font-body text-xs text-[#DCE5F1]/75 leading-relaxed pt-2 border-t border-white/10">
                  Edufinix aspires to develop financially aware, analytical, and skilled market participants who can navigate the dynamic world of global Forex trading with confidence and discipline.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#315FEA] pt-2 sm:pt-4">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Empowerment through practical skills</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#17263D] border border-white/10 shadow-xl flex flex-col justify-between space-y-5 sm:space-y-6">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2 sm:p-2.5 rounded-xl bg-[#315FEA]/20 text-[#315FEA]">
                    <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#DCE5F1]/60">
                    OUR MISSION
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  The Academy Mission
                </h3>

                <p className="font-body text-sm sm:text-base text-[#DCE5F1] leading-relaxed">
                  &ldquo;{BRAND_INFO.mission}&rdquo;
                </p>

                <p className="font-body text-xs text-[#DCE5F1]/75 leading-relaxed pt-2 border-t border-white/10">
                  We are dedicated to bridging theory and real-market application through structured offline training, hands-on mentorship, and active session chart study.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#315FEA] pt-2 sm:pt-4">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Structured training &amp; hands-on learning</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bridging Theory & Real-Market Application */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#F5F4EF] border-b border-[#101C32]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 sm:mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#315FEA] font-semibold block mb-1.5 sm:mb-2">
              The Educational Approach
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101C32]">
              Bridging Theory &amp; Real-Market Application
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#101C32]/10 space-y-2.5 sm:space-y-3">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#101C32]">01</span>
              <h3 className="font-heading text-base sm:text-lg font-bold text-[#101C32]">
                Structure First
              </h3>
              <p className="font-body text-xs text-[#778397] leading-relaxed">
                Rather than treating charts as random spikes, we teach students how institutional participants engineer liquidity and create directional order flow.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#101C32]/10 space-y-2.5 sm:space-y-3">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#101C32]">02</span>
              <h3 className="font-heading text-base sm:text-lg font-bold text-[#101C32]">
                Risk as the Foundation
              </h3>
              <p className="font-body text-xs text-[#778397] leading-relaxed">
                Long-term survival in Forex trading depends not on win rates, but on mathematically sound position sizing, drawdown ceilings, and strict risk discipline.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#101C32]/10 space-y-2.5 sm:space-y-3">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#101C32]">03</span>
              <h3 className="font-heading text-base sm:text-lg font-bold text-[#101C32]">
                Mindset &amp; Accountability
              </h3>
              <p className="font-body text-xs text-[#778397] leading-relaxed">
                Continuous mentor interaction and peer accountability help traders dismantle revenge trading, FOMO, and emotional volatility.
              </p>
            </div>
          </div>

          {/* Action Strip */}
          <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-2xl bg-[#101C32] text-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                Ready to explore our structured curriculum?
              </h4>
              <p className="font-body text-xs text-[#DCE5F1]/70">
                Explore our full syllabus covering Forex foundations, liquidity, and trading psychology.
              </p>
            </div>
            <Button to="/programs" variant="primary" size="md" showArrow={true} className="w-full sm:w-auto">
              View Programs &amp; Curriculum
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
