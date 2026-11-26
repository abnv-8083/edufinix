import React, { useRef } from 'react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Button } from '../../components/common/Button';
import { IMAGES } from '../../data/assets';
import { Eye, Clock, Laptop } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const PracticalLearningSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const listItemsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      // Parallax scroll on image
      if (imageWrapperRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          { y: 30, scale: 0.96 },
          {
            y: -20,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }

      // Floating badge bounce
      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          scrollTrigger: {
            trigger: badgeRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
        });
      }

      // Right column text and methodology items
      if (listItemsRef.current) {
        const items = listItemsRef.current.children;
        gsap.from(items, {
          scrollTrigger: {
            trigger: listItemsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          x: 35,
          stagger: 0.15,
          duration: 0.75,
          ease: 'power3.out',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-14 sm:py-20 lg:py-28 bg-white border-b border-[#101C32]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Curated Photography Composition */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 pb-6 sm:pb-8">
            <div ref={imageWrapperRef} className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#101C32]/12 shadow-2xl bg-[#F5F4EF]">
              <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden group">
                <img
                  src={IMAGES.instructor.url}
                  alt={IMAGES.instructor.alt}
                  className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101C32]/75 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#DCE5F1]/80 block">
                    Interactive Teaching Framework
                  </span>
                  <p className="font-heading text-sm font-semibold text-white mt-0.5">
                    Live session breakdowns and structural market mapping in Kozhikode.
                  </p>
                </div>
              </div>
            </div>

            {/* Micro Badge floating accent */}
            <div ref={badgeRef} className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:right-6 bg-[#0D1728] text-white p-4 rounded-xl sm:rounded-2xl border border-[#1E2E48] shadow-2xl sm:max-w-[240px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#315FEA] animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#DCE5F1]/80 font-bold">
                  Market Execution
                </span>
              </div>
              <p className="font-heading text-xs font-semibold text-white">
                Live sessions during London &amp; New York session opens.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text & Practical Methodologies */}
          <div ref={textColRef} className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            <SectionHeader
              index="03"
              tagline="Practical Methodology"
              title="Learn Through the Market. Not Just About It."
              description="Most trading education relies on static past charts where hindsight makes every setup look effortless. At Edufinix, learning occurs while live prices move."
            />

            <div ref={listItemsRef} className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F5F4EF] border border-[#101C32]/5 interactive-card">
                <div className="p-2.5 rounded-lg bg-[#315FEA]/10 text-[#315FEA] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading text-sm font-bold text-[#101C32]">
                    Synchronized to Active Market Hours
                  </h4>
                  <p className="font-body text-xs text-[#778397] leading-relaxed">
                    Morning and evening classes align with global currency market volatility, allowing students to witness live liquidity sweeps and structural order blocks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F5F4EF] border border-[#101C32]/5 interactive-card">
                <div className="p-2.5 rounded-lg bg-[#315FEA]/10 text-[#315FEA] shrink-0 mt-0.5">
                  <Eye className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading text-sm font-bold text-[#101C32]">
                    Direct Observation &amp; Immediate Feedback
                  </h4>
                  <p className="font-body text-xs text-[#778397] leading-relaxed">
                    Mentors walk through the live charts, highlighting high-probability invalidations, risk-to-reward boundaries, and trade entry execution in real time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F5F4EF] border border-[#101C32]/5 interactive-card">
                <div className="p-2.5 rounded-lg bg-[#315FEA]/10 text-[#315FEA] shrink-0 mt-0.5">
                  <Laptop className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading text-sm font-bold text-[#101C32]">
                    Dedicated Offline Infrastructure
                  </h4>
                  <p className="font-body text-xs text-[#778397] leading-relaxed">
                    A distraction-free, professional learning suite in Kozhikode engineered for hands-on chart study, peer discussion, and focused trade debriefs.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button to="/programs" variant="secondary" size="md" showArrow={true}>
                View Complete Syllabus
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
