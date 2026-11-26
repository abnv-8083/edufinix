import React, { useRef } from 'react';
import { Button } from '../components/common/Button';
import { IMAGES } from '../data/assets';
import { Activity, MessageCircle, Users, Shield, Heart, CheckCircle2 } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const MentorshipPage: React.FC = () => {
  usePageMetadata(
    'Mentorship & Market Escape | Mindset Resilience',
    'Continuous 24-hour mentor support, lifelong community, and the signature 2-day luxury resort camping retreat for psychological resilience.'
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      if (pillarsRef.current) {
        gsap.from(pillarsRef.current.children, {
          scrollTrigger: {
            trigger: pillarsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 35,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="flex flex-col">
      {/* Editorial Header */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#F5F4EF] border-b border-[#101C32]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#315FEA]">
              <span>Academy Mentorship</span>
              <span className="text-[#101C32]/30">/</span>
              <span>Continuous Guidance</span>
            </div>

            <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101C32] tracking-tight leading-[1.12]">
              Mentorship Built for Disciplined Market Participants.
            </h1>

            <p className="font-body text-base sm:text-lg lg:text-xl text-[#778397] leading-relaxed">
              Trading is not an isolated pursuit. At Edufinix, learning is grounded in real-time chart application, around-the-clock mentor support, peer community, and immersive mindset retreats.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars of Mentorship Spread */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-[#101C32]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-10 sm:mb-16 space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#315FEA] font-semibold">
              PILLARS OF GUIDANCE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101C32]">
              A Complete Mentorship Ecosystem
            </h2>
          </div>

          <div ref={pillarsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Pillar 1: Live Market Learning */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F4EF] border border-[#101C32]/10 flex flex-col justify-between space-y-5 sm:space-y-6 interactive-card shadow-2xs">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#315FEA]/10 text-[#315FEA]">
                    <Activity className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-[#778397]">01 / EXECUTION</span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#101C32]">
                  Live Market Learning
                </h3>

                <p className="font-body text-xs text-[#778397] leading-relaxed">
                  Active price action observation during global trading sessions to bridge textbook theory with dynamic market behavior.
                </p>

                <ul className="space-y-2.5 pt-3 sm:pt-4 border-t border-[#101C32]/10 text-xs text-[#17263D]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#315FEA] shrink-0 mt-0.5" />
                    <span><strong>Live Trading Sessions:</strong> Observe market structure and entry invalidations as candles form.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#315FEA] shrink-0 mt-0.5" />
                    <span><strong>Live Q&amp;A:</strong> Daily doubt clearance directly against the real-time active charts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#315FEA] shrink-0 mt-0.5" />
                    <span><strong>Practical Market Insights:</strong> Unfiltered feedback on structural shifts, liquidity traps, and execution.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 sm:pt-4 text-[11px] font-mono text-[#778397]">
                Morning &amp; Evening Batches • Kozhikode
              </div>
            </div>

            {/* Pillar 2: Continuous Support */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1728] text-white border border-[#1E2E48] shadow-xl flex flex-col justify-between space-y-5 sm:space-y-6 interactive-card-dark">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#315FEA] text-white">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-[#DCE5F1]/60">02 / CONTINUOUS</span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                  Continuous Support
                </h3>

                <p className="font-body text-xs text-[#DCE5F1]/80 leading-relaxed">
                  Your journey as a trader involves ongoing refinement, journal review, and direct access to academic guidance whenever needed.
                </p>

                <ul className="space-y-2.5 pt-3 sm:pt-4 border-t border-white/10 text-xs text-[#DCE5F1]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#315FEA] shrink-0 mt-0.5" />
                    <span><strong>24-Hour Mentor Support:</strong> Submit charts and clarify analytical questions around the clock.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#315FEA] shrink-0 mt-0.5" />
                    <span><strong>Lifelong Mentor Support:</strong> Ongoing access to mentors for strategy reviews throughout your trading journey.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#315FEA] shrink-0 mt-0.5" />
                    <span><strong>Personalised Trading Strategy:</strong> Formulation of a custom trading routine suited to your risk tolerance.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 sm:pt-4 text-[11px] font-mono text-[#DCE5F1]/60">
                Enduring Academic Partnership
              </div>
            </div>

            {/* Pillar 3: Community */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F4EF] border border-[#101C32]/10 flex flex-col justify-between space-y-5 sm:space-y-6 interactive-card shadow-2xs">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#315FEA]/10 text-[#315FEA]">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-[#778397]">03 / NETWORK</span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#101C32]">
                  Trader Community
                </h3>

                <p className="font-body text-xs text-[#778397] leading-relaxed">
                  Surround yourself with like-minded, disciplined peers who share your commitment to market education and capital preservation.
                </p>

                <ul className="space-y-2.5 pt-3 sm:pt-4 border-t border-[#101C32]/10 text-xs text-[#17263D]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#315FEA] shrink-0 mt-0.5" />
                    <span><strong>Lifelong Community Access:</strong> Maintain continuous connection with the Edufinix alumni network.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#315FEA] shrink-0 mt-0.5" />
                    <span><strong>Interaction With Fellow Traders:</strong> Share journal entries, dissect trade setups, and grow together.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#315FEA] shrink-0 mt-0.5" />
                    <span><strong>Market-Related Meetups:</strong> Regular offline sessions and roundtables across Kerala.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 sm:pt-4 text-[11px] font-mono text-[#778397]">
                Kerala Regional Trader Network
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Deep-Dive: Mentorship & Market Escape */}
      <section className="py-14 sm:py-20 lg:py-32 bg-[#101C32] text-white relative border-b border-[#17263D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#17263D]">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden group">
                  <img
                    src={IMAGES.marketEscape.url}
                    alt={IMAGES.marketEscape.alt}
                    className="w-full h-full object-cover object-center filter saturate-[0.9] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101C32]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#315FEA] block mb-1">
                      LUXURY RESORT CAMPING
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-white">
                      The Mentorship &amp; Market Escape
                    </h3>
                  </div>
                </div>
              </div>

              {/* Second Supporting Vignette */}
              <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-[#DCE5F1]">
                <span>2-Day Mindset &amp; Resilience Immersion</span>
                <span className="text-[#315FEA]">Offline Experience</span>
              </div>
            </div>

            {/* Description & Mindset Framework */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#315FEA] font-semibold">
                  SIGNATURE EXPERIENCE
                </span>
                <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  Beyond the Trading Screen. <br />
                  <span className="text-[#315FEA]">Mentorship &amp; Market Escape</span>
                </h2>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 text-[#DCE5F1] space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
                <p className="font-medium text-white">
                  "An immersive two-day camping experience at a luxury resort, designed to provide psychological resilience and mindset development. The experience focuses on emotional stability and the disciplined mindset required for trading."
                </p>
                <p className="text-xs sm:text-sm text-[#DCE5F1]/80">
                  Trading consistency is rarely broken by chart knowledge alone — it is broken by psychological exhaustion, emotional impulses, and cognitive bias under risk. The Market Escape removes you from the constant flicker of price ticks to build emotional stamina in a serene natural setting.
                </p>
              </div>

              {/* Core Pillars of the Escape */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1 sm:pt-2">
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#17263D] border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#315FEA]">
                    <Heart className="w-4 h-4" />
                    <span className="font-heading text-xs font-bold text-white">Emotional Stability</span>
                  </div>
                  <p className="text-[11px] text-[#DCE5F1]/70 leading-relaxed">
                    De-escalating performance anxiety, FOMO, and revenge impulses through mental reset protocols.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-[#17263D] border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#315FEA]">
                    <Shield className="w-4 h-4" />
                    <span className="font-heading text-xs font-bold text-white">Psychological Resilience</span>
                  </div>
                  <p className="text-[11px] text-[#DCE5F1]/70 leading-relaxed">
                    Developing the mental discipline to handle drawdowns without deviating from your core trading rules.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button to="/contact" variant="primary" size="md" showArrow={true} className="w-full sm:w-auto">
                  Enquire About Upcoming Escape
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trader Psychological Protocol Summary */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#F5F4EF] border-b border-[#101C32]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 sm:mb-14 space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#315FEA] font-semibold">
              EXECUTION DISCIPLINE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101C32]">
              The Discipline Protocol
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#778397]">
              Every Edufinix student is taught to treat trading as an institutional profession.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#101C32]/10 space-y-2.5 sm:space-y-3">
              <span className="font-mono text-lg sm:text-xl font-bold text-[#315FEA]">01.</span>
              <h3 className="font-heading text-sm sm:text-base font-bold text-[#101C32]">Strict Journaling</h3>
              <p className="font-body text-xs text-[#778397] leading-relaxed">
                Log every trade setup, timeframe rationale, execution screenshot, and emotional state before and after entry.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#101C32]/10 space-y-2.5 sm:space-y-3">
              <span className="font-mono text-lg sm:text-xl font-bold text-[#315FEA]">02.</span>
              <h3 className="font-heading text-sm sm:text-base font-bold text-[#101C32]">Pre-Trade Audit</h3>
              <p className="font-body text-xs text-[#778397] leading-relaxed">
                Execute only when high timeframe structure, supply/demand imbalances, and liquidity sweep criteria align.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#101C32]/10 space-y-2.5 sm:space-y-3">
              <span className="font-mono text-lg sm:text-xl font-bold text-[#315FEA]">03.</span>
              <h3 className="font-heading text-sm sm:text-base font-bold text-[#101C32]">Daily Loss Limit</h3>
              <p className="font-body text-xs text-[#778397] leading-relaxed">
                Adhere to strict hard stop-out rules that automatically terminate trading for the day when risk boundaries are reached.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#101C32]/10 space-y-2.5 sm:space-y-3">
              <span className="font-mono text-lg sm:text-xl font-bold text-[#315FEA]">04.</span>
              <h3 className="font-heading text-sm sm:text-base font-bold text-[#101C32]">Continuous Revision</h3>
              <p className="font-body text-xs text-[#778397] leading-relaxed">
                Attend regular revision sessions, live Q&amp;A, and regional meetups to keep analytical skills sharp and disciplined.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
