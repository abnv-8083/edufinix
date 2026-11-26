import React, { useRef } from 'react';
import { Target, Compass, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const IntroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      // Animate left column
      gsap.from(leftColRef.current, {
        scrollTrigger: {
          trigger: leftColRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Animate right column prose
      gsap.from(rightColRef.current, {
        scrollTrigger: {
          trigger: rightColRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Animate 3 cards with stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 25,
          scale: 0.95,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power2.out',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-14 sm:py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#101C32]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Editorial Anchor */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-6">
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
            <div ref={rightColRef} className="space-y-6">
              <p className="font-body text-lg sm:text-xl text-[#101C32] leading-relaxed font-normal">
                <strong className="font-semibold text-[#101C32]">Edufinix Trading Academy</strong> is a skill-oriented financial education institute dedicated to helping individuals develop practical Forex trading knowledge and market skills.
              </p>

              <p className="font-body text-base sm:text-lg text-[#778397] leading-relaxed">
                Through expert-led training, technical analysis, risk management and real-time market insights, we focus on building a strong foundation for informed and disciplined market participation.
              </p>
            </div>

            {/* 3 Core Editorial Cornerstones */}
            <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#101C32]/10">
              <div className="p-4 rounded-xl bg-[#F5F4EF]/60 border border-[#101C32]/5 interactive-card space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#315FEA]/10 text-[#315FEA] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-heading text-sm font-bold text-[#101C32]">
                  Practical Knowledge
                </h4>
                <p className="font-body text-xs text-[#778397] leading-relaxed">
                  Direct market mechanics taught with live price action, not theoretical textbook diagrams.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F4EF]/60 border border-[#101C32]/5 interactive-card space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#315FEA]/10 text-[#315FEA] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-heading text-sm font-bold text-[#101C32]">
                  Disciplined Risk
                </h4>
                <p className="font-body text-xs text-[#778397] leading-relaxed">
                  Strict position sizing and capital preservation rules embedded into every single trade.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F4EF]/60 border border-[#101C32]/5 interactive-card space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#315FEA]/10 text-[#315FEA] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-heading text-sm font-bold text-[#101C32]">
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
