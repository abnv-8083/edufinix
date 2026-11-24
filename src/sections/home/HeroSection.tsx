import React, { useRef } from 'react';
import { Clock, ShieldCheck, MapPin } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { IMAGES } from '../../data/assets';
import { MarketSessionTracker } from '../../components/common/MarketSessionTracker';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance Choreography
  useGSAP(
    () => {
      // Respect prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.6,
      })
        .from(
          headlineRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
          },
          '-=0.3'
        )
        .from(
          buttonsRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          imageCardRef.current,
          {
            opacity: 0,
            scale: 0.96,
            y: 30,
            duration: 0.9,
          },
          '-=0.6'
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pt-14 lg:pb-32 border-b border-[#101C32]/10 bg-[#F5F4EF]"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(16, 28, 50, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(16, 28, 50, 0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Subtle Radial Atmospheric Glow */}
      <div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(49, 95, 234, 0.25) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Masthead Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 sm:pb-8 sm:mb-10 border-b border-[#101C32]/12 text-[11px] sm:text-xs font-mono tracking-wider text-[#778397] uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#315FEA] animate-pulse" />
            <span className="font-semibold text-[#101C32]">Edufinix Trading Academy</span>
            <span className="text-[#101C32]/30">/</span>
            <span>Journal Vol. 01</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 text-[#101C32]">
              <MapPin className="w-3.5 h-3.5 text-[#315FEA]" />
              <span>Kozhikode, Kerala</span>
            </span>
            <span className="hidden xs:inline-flex items-center gap-1.5 text-[#101C32]">
              <Clock className="w-3.5 h-3.5 text-[#315FEA]" />
              <span>Trading Days Only</span>
            </span>
          </div>
        </div>

        {/* Hero Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Expressive Typography & Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#101C32]/10 shadow-xs max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#315FEA]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.2em] font-semibold text-[#315FEA] truncate">
                Skill-Oriented Forex Institute
              </span>
              <span className="text-gray-300 hidden xs:inline">•</span>
              <span className="text-[11px] font-body text-[#778397] hidden xs:inline">
                Practical Market Training
              </span>
            </div>

            <h1
              ref={headlineRef}
              className="font-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-[#101C32] tracking-tight leading-[1.12] sm:leading-[1.08] break-words"
            >
              Understand <br className="hidden sm:inline" />
              the Market. <br />
              <span className="relative inline-block text-[#101C32]">
                Develop Your Edge.
                <svg
                  className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full text-[#315FEA]/40 h-2.5 sm:h-3"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9C70 3 230 3 298 9"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="font-body text-base sm:text-lg lg:text-xl text-[#17263D]/80 leading-relaxed max-w-xl font-normal">
              Practical Forex education built around market understanding, disciplined decision-making and real-time learning in Kozhikode.
            </p>

            {/* CTAs */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto"
            >
              <Button to="/programs" variant="secondary" size="lg" showArrow={true} className="w-full sm:w-auto shadow-sm">
                Explore the Academy
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="w-full sm:w-auto hover:bg-white">
                Speak With Our Team
              </Button>
            </div>

            {/* Institutional Credentials Strip */}
            <div className="pt-6 sm:pt-8 border-t border-[#101C32]/10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
              <div className="p-3 sm:p-0 rounded-xl bg-white/60 sm:bg-transparent border border-[#101C32]/5 sm:border-0 interactive-card">
                <span className="block font-heading text-xs uppercase tracking-wider font-semibold text-[#101C32]">
                  Offline Sessions
                </span>
                <span className="font-body text-xs text-[#778397] mt-0.5 sm:mt-1 block">
                  Interactive classroom training in Kozhikode
                </span>
              </div>
              <div className="p-3 sm:p-0 rounded-xl bg-white/60 sm:bg-transparent border border-[#101C32]/5 sm:border-0 interactive-card">
                <span className="block font-heading text-xs uppercase tracking-wider font-semibold text-[#101C32]">
                  Live Market Analysis
                </span>
                <span className="font-body text-xs text-[#778397] mt-0.5 sm:mt-1 block">
                  Morning &amp; evening active session timings
                </span>
              </div>
              <div className="p-3 sm:p-0 rounded-xl bg-white/60 sm:bg-transparent border border-[#101C32]/5 sm:border-0 interactive-card">
                <span className="block font-heading text-xs uppercase tracking-wider font-semibold text-[#101C32]">
                  Lifelong Mentorship
                </span>
                <span className="font-body text-xs text-[#778397] mt-0.5 sm:mt-1 block">
                  Continuous support beyond syllabus
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Art-Directed Photograph with Floating Glass Badges */}
          <div ref={imageCardRef} className="lg:col-span-5 relative w-full">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#101C32]/12 bg-white shadow-2xl">
              {/* Image Frame */}
              <div className="aspect-[4/3] xs:aspect-[16/11] sm:aspect-[3/3.5] lg:aspect-[4/5] relative overflow-hidden group">
                <img
                  src={IMAGES.hero.url}
                  alt={IMAGES.hero.alt}
                  className="w-full h-full object-cover object-center filter saturate-[0.92] contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle gradient vignette for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09111F]/90 via-[#09111F]/30 to-transparent" />

                {/* Floating Top Badge: Live Session Status */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#09111F]/80 backdrop-blur-md border border-white/15 text-white shadow-lg text-[11px] font-mono">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
                    </span>
                    <span className="font-bold">LIVE EXECUTION LAB</span>
                  </div>
                </div>

                {/* Editorial Caption Tag in overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#315FEA]" />
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] text-[#DCE5F1]/80">
                      Curated Study Environment
                    </span>
                  </div>
                  <p className="font-heading text-xs sm:text-sm font-semibold text-white leading-snug">
                    Real-time market depth, structure mapping, and disciplined risk evaluation.
                  </p>
                </div>
              </div>

              {/* Editorial Spec Header on Card */}
              <div className="p-3.5 sm:p-4 bg-white border-t border-[#101C32]/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 truncate">
                  <ShieldCheck className="w-4 h-4 text-[#315FEA] shrink-0" />
                  <span className="font-body font-medium text-[#101C32] truncate">Disciplined Education Protocol</span>
                </div>
                <span className="font-mono text-[10px] sm:text-[11px] text-[#778397] shrink-0 ml-2">BATCH 2026/27</span>
              </div>
            </div>

            {/* Overlapping Batch Badge - Responsive placement */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-4 md:-left-6 p-4 rounded-xl bg-[#0D1728] text-white border border-[#1E2E48] shadow-2xl sm:max-w-xs animate-float-slow">
              <div className="flex items-center gap-2 text-xs font-mono text-[#DCE5F1]/80 mb-1">
                <Clock className="w-3.5 h-3.5 text-[#315FEA]" />
                <span>Active Batches (Mon–Thu)</span>
              </div>
              <p className="font-heading text-xs font-semibold text-white">
                10:00 AM – 12:00 PM <span className="text-[#315FEA] font-normal">•</span> 05:00 PM – 07:00 PM
              </p>
              <p className="text-[10px] text-[#778397] mt-0.5">Classes during active trading days only</p>
            </div>
          </div>
        </div>

        {/* Global Market Sessions & IST Synchronization Bar */}
        <div className="mt-14 sm:mt-18">
          <MarketSessionTracker />
        </div>
      </div>
    </section>
  );
};
