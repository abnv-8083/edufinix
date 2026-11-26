import React, { useRef } from 'react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Building2, Users2, Radio, CalendarDays, InfinityIcon } from 'lucide-react';
import { IMAGES } from '../../data/assets';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const LearningEnvironmentSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pillarsGridRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);

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

      if (pillarsGridRef.current) {
        gsap.from(pillarsGridRef.current.children, {
          scrollTrigger: {
            trigger: pillarsGridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.75,
          ease: 'power3.out',
        });
      }

      if (imageCardRef.current) {
        gsap.fromTo(
          imageCardRef.current,
          { y: 30, scale: 0.97 },
          {
            y: -15,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const pillars = [
    {
      icon: <Building2 className="w-5 h-5 text-[#315FEA]" />,
      title: "Offline Sessions",
      summary: "In-person classroom training located in Kozhikode, ensuring direct interpersonal attention, interactive whiteboard theory, and real-time chart feedback.",
      tag: "Kozhikode Campus"
    },
    {
      icon: <Users2 className="w-5 h-5 text-[#315FEA]" />,
      title: "Interaction With Fellow Traders",
      summary: "Exchange trade notes, audit journals, and discuss market structure setups with a cohort of disciplined peers working toward the same objective.",
      tag: "Peer Network"
    },
    {
      icon: <Radio className="w-5 h-5 text-[#315FEA]" />,
      title: "Live Trade Streaming",
      summary: "Experience live market streaming during key European and New York volume surges to see order execution logic unfold in real time.",
      tag: "Active Market Feed"
    },
    {
      icon: <CalendarDays className="w-5 h-5 text-[#315FEA]" />,
      title: "Market-Related Meetups",
      summary: "Periodic offline gatherings and market debriefs in Kerala to review macroeconomic shifts, central bank policies, and seasonal liquidity cycles.",
      tag: "Regional Gatherings"
    },
    {
      icon: <InfinityIcon className="w-5 h-5 text-[#315FEA]" />,
      title: "Lifetime Community Access",
      summary: "Continuous membership in the Edufinix alumni group, providing enduring camaraderie, shared market outlooks, and lifelong support.",
      tag: "Enduring Connection"
    }
  ];

  return (
    <section ref={containerRef} className="py-14 sm:py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#101C32]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-14 border-b border-[#101C32]/10">
          <SectionHeader
            index="05"
            tagline="Academy Infrastructure"
            title="The Learning Environment."
            description="Built to foster deep market focus, hands-on collaboration, and uninterrupted professional discipline in Kozhikode, Kerala."
          />
          <div className="text-xs font-mono text-[#778397]">
            <span>STRUCTURE: 5 PILLARS</span>
          </div>
        </div>

        {/* Original Editorial Grid Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-8 sm:pt-10 items-stretch">
          
          {/* Left Column: 5 Structural Pillars */}
          <div ref={pillarsGridRef} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {pillars.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-5 sm:p-6 rounded-2xl border border-[#101C32]/10 bg-[#F5F4EF] hover:border-[#315FEA]/40 transition-all flex flex-col justify-between interactive-card ${
                  idx === 4 ? 'sm:col-span-2 bg-[#0D1728] text-white border-[#1E2E48] interactive-card-dark' : ''
                }`}
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${idx === 4 ? 'bg-white/10 text-white' : 'bg-white text-[#315FEA] shadow-xs'}`}>
                      {item.icon}
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider ${idx === 4 ? 'text-[#DCE5F1]/70' : 'text-[#778397]'}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className={`font-heading text-sm sm:text-base font-bold ${idx === 4 ? 'text-white' : 'text-[#101C32]'}`}>
                    {item.title}
                  </h3>

                  <p className={`font-body text-xs leading-relaxed ${idx === 4 ? 'text-[#DCE5F1]/80' : 'text-[#778397]'}`}>
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Editorial Atmosphere Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div ref={imageCardRef} className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#101C32]/10 shadow-2xl bg-[#F5F4EF] h-full flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={IMAGES.studentsStudy.url}
                  alt={IMAGES.studentsStudy.alt}
                  className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101C32]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#DCE5F1]/80 block">
                    Kozhikode Learning Suite
                  </span>
                  <p className="font-heading text-sm font-semibold text-white mt-0.5">
                    Focused study stations, multi-screen charting desks, and collaborative debrief spaces.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-white flex items-center justify-between border-t border-[#101C32]/10 text-xs font-mono text-[#778397]">
                <span>CAMPUS ADMISSIONS</span>
                <span className="text-[#315FEA] font-semibold">Morning &amp; Evening Batches</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
