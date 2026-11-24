import React from 'react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Building2, Users2, Radio, CalendarDays, InfinityIcon } from 'lucide-react';
import { IMAGES } from '../../data/assets';

export const LearningEnvironmentSection: React.FC = () => {
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
    <section className="py-14 sm:py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#101C32]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-14 border-b border-[#101C32]/10">
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
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {pillars.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-5 sm:p-6 rounded-2xl border border-[#101C32]/10 bg-[#F5F4EF] hover:border-[#315FEA]/40 transition-all flex flex-col justify-between ${
                  idx === 4 ? 'sm:col-span-2 bg-[#101C32] text-white border-[#17263D]' : ''
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
            <div className="rounded-2xl overflow-hidden border border-[#101C32]/10 shadow-lg bg-[#F5F4EF] h-full flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={IMAGES.studentsStudy.url}
                  alt={IMAGES.studentsStudy.alt}
                  className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101C32]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#315FEA] block">
                    Kozhikode Academy Culture
                  </span>
                  <p className="font-heading text-xs sm:text-sm font-semibold text-white">
                    Rigorous peer collaboration and live market review.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 bg-white flex-grow flex flex-col justify-center space-y-2 border-t border-[#101C32]/10">
                <span className="text-xs font-mono text-[#315FEA] uppercase tracking-wider font-semibold">
                  OFFLINE ADVANTAGE
                </span>
                <p className="text-xs text-[#17263D] leading-relaxed">
                  Real-time face-to-face discussion eliminates isolation, accelerates chart pattern recognition, and holds traders accountable to their risk management rules.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
