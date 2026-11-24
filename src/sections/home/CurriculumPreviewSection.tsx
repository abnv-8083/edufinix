import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Button } from '../../components/common/Button';
import { CURRICULUM_DATA } from '../../data/curriculum';
import { Check, ChevronRight } from 'lucide-react';

export const CurriculumPreviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeModule = CURRICULUM_DATA[activeTab];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#F5F4EF] border-b border-[#101C32]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-[#101C32]/10">
          <SectionHeader
            index="04"
            tagline="Academic Syllabus"
            title="Build Your Understanding of the Forex Market."
            description="Our curriculum is logically sequenced to guide you from foundational currency dynamics to advanced liquidity concepts, capital preservation, and live execution."
          />
          <div>
            <Button to="/programs" variant="outline" size="md" showArrow={true} className="w-full sm:w-auto">
              Explore Full Curriculum
            </Button>
          </div>
        </div>

        {/* Category Navigation Pills - 1 col on mobile, 2 on small tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 pt-6 sm:pt-8 mb-6 sm:mb-8">
          {CURRICULUM_DATA.map((module, idx) => (
            <button
              key={module.id}
              onClick={() => setActiveTab(idx)}
              className={`p-3.5 sm:p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#101C32] text-white border-[#101C32] shadow-sm'
                  : 'bg-white text-[#101C32] border-[#101C32]/10 hover:border-[#101C32]/30'
              }`}
            >
              <span className={`block font-mono text-[11px] sm:text-xs font-semibold mb-0.5 sm:mb-1 ${activeTab === idx ? 'text-[#315FEA]' : 'text-[#778397]'}`}>
                {module.number} / {module.categoryName}
              </span>
              <span className="font-heading font-bold text-sm sm:text-base leading-snug block">
                {module.title}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Module Display Card */}
        <div className="bg-white rounded-2xl border border-[#101C32]/10 p-5 sm:p-8 lg:p-10 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 sm:pb-8 mb-6 sm:mb-8 border-b border-[#101C32]/10 gap-3 sm:gap-4">
            <div className="space-y-1">
              <span className="font-mono text-[11px] sm:text-xs text-[#315FEA] uppercase tracking-widest font-semibold">
                MODULE {activeModule.number} • {activeModule.categoryName}
              </span>
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#101C32]">
                {activeModule.title}
              </h3>
            </div>
            <p className="font-body text-xs sm:text-sm text-[#778397] max-w-xl">
              {activeModule.summary}
            </p>
          </div>

          {/* Module Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {activeModule.topics.map((topic, i) => (
              <div 
                key={i} 
                className="p-4 sm:p-5 rounded-xl bg-[#F5F4EF]/70 border border-[#101C32]/5 hover:border-[#315FEA]/30 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] sm:text-xs text-[#778397]">
                      TOPIC {activeModule.number}.{i + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#315FEA]" />
                  </div>
                  <h4 className="font-heading text-sm sm:text-base font-bold text-[#101C32]">
                    {topic.title}
                  </h4>
                  <p className="font-body text-xs text-[#778397] leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#101C32]/5 space-y-1.5">
                  {topic.keyPoints.slice(0, 2).map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-1.5 text-[11px] text-[#17263D]">
                      <Check className="w-3 h-3 text-[#315FEA] shrink-0" />
                      <span className="truncate">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note in card */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#101C32]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <span className="text-[#778397] text-[11px] sm:text-xs">
              All subjects taught through hands-on offline sessions in Kozhikode.
            </span>
            <Link
              to="/programs"
              className="font-heading font-semibold text-[#315FEA] hover:text-[#254eca] inline-flex items-center gap-1 text-xs"
            >
              <span>Explore all module details</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
