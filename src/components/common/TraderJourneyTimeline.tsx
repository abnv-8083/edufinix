import React, { useState, useRef } from 'react';
import { CheckCircle2, Compass } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Stage {
  step: string;
  phase: string;
  title: string;
  timeline: string;
  tagline: string;
  before: string;
  after: string;
  skills: string[];
}

const STAGES: Stage[] = [
  {
    step: '01',
    phase: 'Orientation & Foundations',
    title: 'Deconstructing Market Noise',
    timeline: 'Weeks 01 – 02',
    tagline: 'Replace guesswork with fundamental currency mechanics',
    before: 'Gambling on news headlines, impulse buying at random peaks, no understanding of spreads or session liquidity.',
    after: 'Fluent in currency pairs, pip calculations, leverage mathematics, and global session volume overlaps.',
    skills: ['Currency Cross Mechanics', 'Trading Platform Proficiency', 'Session Open Liquidity', 'Bid-Ask Spread Mechanics'],
  },
  {
    step: '02',
    phase: 'Technical Structure',
    title: 'Reading Institutional Footprints',
    timeline: 'Weeks 03 – 04',
    tagline: 'Observe where commercial liquidity rests before entering',
    before: 'Relying on lagging retail indicators (moving averages, stochastic oscillators) that lag price by 10 candles.',
    after: 'Mapping pure market structure, identifying order blocks, fair value gaps (FVG), and liquidity sweeps on naked charts.',
    skills: ['Market Structure Shift (MSS)', 'Order Block (OB) Identification', 'Fair Value Gap Inefficiencies', 'Multi-Timeframe Alignment'],
  },
  {
    step: '03',
    phase: 'Risk Engineering',
    title: 'Mathematical Capital Defense',
    timeline: 'Weeks 05 – 06',
    tagline: 'Survive first, compound second: the fund manager rule',
    before: 'Overleveraging account balance, revenge trading after a single loss, moving stop losses further away in panic.',
    after: 'Strict position sizing capped at 1% max risk, calculated lot sizes, disciplined 1:2+ R:R expectations on all trades.',
    skills: ['Position Sizing Formulas', 'Drawdown Mitigation Rules', 'Trade Journaling Rigor', 'Probabilistic Expectancy'],
  },
  {
    step: '04',
    phase: 'Live Market Mastery',
    title: 'Execution & Lifelong Guidance',
    timeline: 'Lifelong Alumni',
    tagline: 'Trade live alongside instructors in Kozhikode',
    before: 'Trading alone in isolation with no constructive trade audits, second-guessing every entry.',
    after: 'Confidence in execution, lifelong access to mentor reviews, 2-day mindset camping retreat, and alumni community.',
    skills: ['Live London & NY Execution', 'Funded Account Protocols', 'Psychological Resilience', 'Alumni Trade Audits'],
  },
];

export const TraderJourneyTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const currentStage = STAGES[activeStep];

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsBarRef = useRef<HTMLDivElement>(null);
  const detailsCardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 25,
        duration: 0.7,
        ease: 'power3.out',
      });

      if (stepsBarRef.current) {
        gsap.from(stepsBarRef.current.children, {
          scrollTrigger: {
            trigger: stepsBarRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 25,
          stagger: 0.1,
          duration: 0.65,
          ease: 'power2.out',
        });
      }

      if (detailsCardRef.current) {
        gsap.from(detailsCardRef.current, {
          scrollTrigger: {
            trigger: detailsCardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 35,
          duration: 0.8,
          ease: 'power3.out',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full rounded-2xl sm:rounded-3xl bg-white border border-[#101C32]/10 p-5 sm:p-8 lg:p-10 shadow-sm">
      {/* Header */}
      <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-8 border-b border-[#101C32]/10 gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#315FEA]">
            <Compass className="w-4 h-4" />
            <span>Curriculum Progression</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#101C32]">
            The Edufinix Transformation Pathway
          </h3>
          <p className="font-body text-xs sm:text-sm text-[#778397] max-w-xl">
            From complete beginner to disciplined, statistical market participant through a structured 4-phase offline evolution in Kozhikode.
          </p>
        </div>

        {/* Active phase badge */}
        <div className="text-right hidden sm:block">
          <span className="font-mono text-xs text-[#778397] block">ACTIVE PHASE</span>
          <span className="font-heading text-sm font-bold text-[#315FEA]">
            Phase {currentStage.step} of 04
          </span>
        </div>
      </div>

      {/* Interactive Step Navigator Bar */}
      <div ref={stepsBarRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {STAGES.map((stage, idx) => (
          <button
            key={stage.step}
            onClick={() => setActiveStep(idx)}
            className={`p-3.5 sm:p-4 rounded-xl text-left border transition-all cursor-pointer relative overflow-hidden ${
              activeStep === idx
                ? 'bg-[#101C32] text-white border-[#101C32] shadow-sm'
                : 'bg-[#F5F4EF] text-[#101C32] border-[#101C32]/10 hover:border-[#315FEA]/40'
            }`}
          >
            {/* Top Accent line when active */}
            {activeStep === idx && (
              <span className="absolute top-0 left-0 right-0 h-1 bg-[#315FEA]" />
            )}
            <div className="flex items-center justify-between mb-1.5">
              <span className={`font-mono text-xs font-bold ${activeStep === idx ? 'text-[#315FEA]' : 'text-[#778397]'}`}>
                PHASE {stage.step}
              </span>
              <span className={`text-[10px] font-mono ${activeStep === idx ? 'text-[#DCE5F1]/60' : 'text-[#778397]'}`}>
                {stage.timeline}
              </span>
            </div>
            <span className="font-heading text-xs sm:text-sm font-bold leading-snug block line-clamp-1">
              {stage.title}
            </span>
          </button>
        ))}
      </div>

      {/* Active Phase Deep Dive Card */}
      <div ref={detailsCardRef} className="rounded-2xl bg-[#F5F4EF] border border-[#101C32]/10 p-5 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-[#101C32]/10 gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#315FEA] font-semibold block">
              PHASE {currentStage.step} • {currentStage.phase}
            </span>
            <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#101C32] mt-0.5">
              {currentStage.title}
            </h4>
            <p className="font-body text-xs sm:text-sm text-[#778397] mt-1">
              {currentStage.tagline}
            </p>
          </div>

          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#101C32]/10 text-xs font-mono font-semibold text-[#101C32] self-start lg:self-auto shadow-xs">
            {currentStage.timeline}
          </span>
        </div>

        {/* Contrast Comparison: Before vs After */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
          {/* Before */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#FF4D4D]/20 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF4D4D] font-bold block flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF4D4D]" />
              THE RETAIL STRUGGLE (BEFORE)
            </span>
            <p className="font-body text-xs sm:text-sm text-[#778397] leading-relaxed">
              {currentStage.before}
            </p>
          </div>

          {/* After */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#25D366]/30 space-y-2 shadow-xs">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#0D8253] font-bold block flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              THE EDUFINIX STANDARD (AFTER)
            </span>
            <p className="font-body text-xs sm:text-sm text-[#101C32] font-medium leading-relaxed">
              {currentStage.after}
            </p>
          </div>
        </div>

        {/* Key Mastery Competencies */}
        <div className="space-y-2.5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#778397] font-semibold block">
            CORE COMPETENCIES DEVELOPED:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
            {currentStage.skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#101C32]/5 text-xs font-body font-medium text-[#101C32]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#315FEA] shrink-0" />
                <span className="truncate">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
