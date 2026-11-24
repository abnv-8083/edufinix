import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { CURRICULUM_DATA } from '../data/curriculum';
import { BRAND_INFO } from '../data/brand';
import { Check, Clock, ChevronDown, ChevronUp, Shield, Printer } from 'lucide-react';
import { RiskCalculator } from '../components/common/RiskCalculator';
import { usePageMetadata } from '../hooks/usePageMetadata';

export const ProgramsPage: React.FC = () => {
  usePageMetadata(
    'Programs & Curriculum | Practical Forex Syllabus',
    'Explore the 4 structured Forex modules at Edufinix: Foundations, Market Structure & Liquidity, Risk Management, and Trader Psychology. Offline training in Kozhikode.'
  );

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({
    'forex-foundations': true,
    'market-analysis': true,
    'risk-and-money-management': true,
    'trader-development': true,
  });

  const toggleTopicExpand = (id: string) => {
    setExpandedTopics(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredModules = selectedCategory === 'all'
    ? CURRICULUM_DATA
    : CURRICULUM_DATA.filter(m => m.id === selectedCategory);

  return (
    <div className="flex flex-col">
      {/* Editorial Header */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#F5F4EF] border-b border-[#101C32]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#315FEA]">
              <span>Curriculum &amp; Programs</span>
              <span className="text-[#101C32]/30">/</span>
              <span>Practical Forex Syllabus</span>
            </div>

            <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101C32] tracking-tight leading-[1.12]">
              Structured Forex Market Curriculum.
            </h1>

            <p className="font-body text-lg sm:text-xl text-[#778397] leading-relaxed">
              Every subject is engineered to build practical market competence — from foundational currency mechanics to institutional liquidity, rigorous capital preservation, and emotional discipline.
            </p>

            {/* Batch Schedule Pill */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#101C32]">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#101C32]/10 inline-flex items-center gap-2 shadow-xs">
                <Clock className="w-3.5 h-3.5 text-[#315FEA]" />
                <span>Morning Batch: 10:00 AM – 12:00 PM</span>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#101C32]/10 inline-flex items-center gap-2 shadow-xs">
                <Clock className="w-3.5 h-3.5 text-[#315FEA]" />
                <span>Evening Batch: 05:00 PM – 07:00 PM</span>
              </span>
              <button
                type="button"
                onClick={() => window.print()}
                className="px-3 py-1.5 rounded-lg bg-white border border-[#101C32]/10 inline-flex items-center gap-1.5 text-[#101C32] hover:border-[#315FEA] text-xs font-mono transition-colors cursor-pointer shadow-xs"
                title="Print or Save Official Syllabus Overview"
              >
                <Printer className="w-3.5 h-3.5 text-[#315FEA]" />
                <span>Print Syllabus</span>
              </button>
              <span className="text-[#778397] italic">
                (Trading days only • No classes Fri–Sun)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Explorer Section */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-[#101C32]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-10 mb-10 border-b border-[#101C32]/10">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-heading font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#101C32] text-white shadow-xs'
                  : 'bg-[#F5F4EF] text-[#101C32] hover:bg-[#DCE5F1]/50'
              }`}
            >
              All Subjects (01–04)
            </button>
            {CURRICULUM_DATA.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setSelectedCategory(mod.id)}
                className={`px-4 py-2 rounded-lg text-xs font-heading font-semibold transition-all ${
                  selectedCategory === mod.id
                    ? 'bg-[#101C32] text-white shadow-xs'
                    : 'bg-[#F5F4EF] text-[#101C32] hover:bg-[#DCE5F1]/50'
                }`}
              >
                {mod.number}. {mod.title}
              </button>
            ))}
          </div>

          {/* Module Cards Stack */}
          <div className="space-y-12">
            {filteredModules.map((module) => {
              const isExpanded = expandedTopics[module.id] ?? true;

              return (
                <div
                  key={module.id}
                  className="rounded-2xl border border-[#101C32]/10 bg-[#F5F4EF]/40 overflow-hidden shadow-xs transition-all"
                >
                  {/* Module Header Bar */}
                  <div 
                    onClick={() => toggleTopicExpand(module.id)}
                    className="p-6 sm:p-8 bg-white border-b border-[#101C32]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2.5 py-0.5 rounded bg-[#315FEA]/10 text-[#315FEA] font-mono text-xs font-bold">
                          MODULE {module.number}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#778397]">
                          {module.categoryName}
                        </span>
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#101C32]">
                        {module.title}
                      </h2>
                      <p className="font-body text-xs sm:text-sm text-[#778397] max-w-3xl">
                        {module.summary}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-3">
                      <span className="text-xs font-mono text-[#778397] hidden sm:inline">
                        {module.topics.length} Subjects
                      </span>
                      <div className="p-2 rounded-lg border border-[#101C32]/10 text-[#101C32]">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </div>
                  </div>

                  {/* Module Topics Grid */}
                  {isExpanded && (
                    <div className="p-6 sm:p-8 space-y-6 bg-[#F5F4EF]/30">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {module.topics.map((topic, tIdx) => (
                          <div
                            key={tIdx}
                            className="p-6 rounded-xl bg-white border border-[#101C32]/10 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#315FEA]/40 transition-colors"
                          >
                            <div className="space-y-3">
                              <div className="flex items-center justify-between text-xs font-mono text-[#778397]">
                                <span>SECTION {module.number}.{tIdx + 1}</span>
                                <span className="w-2 h-2 rounded-full bg-[#315FEA]" />
                              </div>

                              <h3 className="font-heading text-base sm:text-lg font-bold text-[#101C32]">
                                {topic.title}
                              </h3>

                              <p className="font-body text-xs text-[#778397] leading-relaxed">
                                {topic.description}
                              </p>
                            </div>

                            <div className="pt-4 border-t border-[#101C32]/10 space-y-2">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-[#101C32] font-semibold block">
                                Key Learning Outcomes:
                              </span>
                              {topic.keyPoints.map((point, pIdx) => (
                                <div key={pIdx} className="flex items-start gap-2 text-xs text-[#17263D]">
                                  <Check className="w-3.5 h-3.5 text-[#315FEA] shrink-0 mt-0.5" />
                                  <span className="leading-snug">{point}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Interactive Educational Calculator for Module 03 (Position Sizing & Risk) */}
                      {module.id === 'risk-and-money-management' && (
                        <div className="pt-4">
                          <RiskCalculator />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Institutional Integrity Note */}
          <div className="mt-14 p-6 rounded-2xl bg-[#F5F4EF] border border-[#101C32]/10 flex flex-col sm:flex-row items-start gap-4">
            <div className="p-2.5 rounded-xl bg-[#315FEA]/10 text-[#315FEA] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-xs">
              <h4 className="font-heading font-bold text-[#101C32]">
                Curriculum Structure Integrity
              </h4>
              <p className="text-[#778397] leading-relaxed">
                Edufinix Trading Academy operates strictly as an educational institution teaching Forex market analysis, technical concepts, and risk control. We do not promote get-rich-quick methods, promise fixed profits, or offer investment schemes. All training is conducted in-person at our Kozhikode facility.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Admissions Call to Action */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#101C32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#315FEA] font-semibold">
              Kozhikode Admissions
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-white">
              Enroll in the Next Practical Cohort.
            </h2>
            <p className="font-body text-sm sm:text-base text-[#DCE5F1]/80 max-w-xl mx-auto leading-relaxed">
              Connect with our admissions desk to learn about upcoming batch start dates, seat availability, and our offline training setup in Kozhikode.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg" showArrow={true} className="w-full sm:w-auto">
                Submit Admission Enquiry
              </Button>
              <a
                href={BRAND_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1EBE5D] transition-colors text-center w-full sm:w-auto"
              >
                Direct WhatsApp Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
