import React from 'react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ShieldAlert, Sparkles, MessageCircle, Users, Activity, BarChart3, HelpCircle } from 'lucide-react';

export const WhyEdufinixSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#F5F4EF] border-b border-[#101C32]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-14 border-b border-[#101C32]/10">
          <SectionHeader
            index="02"
            tagline="Why Edufinix"
            title="Engineered for Practical Market Competence."
            description="Our institutional curriculum and support structure are designed around real-time market observation, individual discipline, and lifelong mentorship in Kozhikode."
          />
          <div className="hidden md:block text-right">
            <span className="font-mono text-xs text-[#778397] block">ADMISSIONS CRITERIA</span>
            <span className="font-heading text-sm font-semibold text-[#101C32]">Focused Offline Cohorts</span>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 pt-8 sm:pt-10">
          {/* Feature 01 & 02: Wide Leading Spread */}
          <div className="md:col-span-12 lg:col-span-8 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[#101C32]/10 shadow-sm relative overflow-hidden interactive-card">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
              <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#315FEA]/10 text-[#315FEA]">
                REAL-TIME EXECUTION
              </span>
              <span className="font-mono text-xs text-[#778397]">
                BENEFITS 01 &amp; 02
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* 01. Live Trading Sessions */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#101C32]">01.</span>
                  <div className="p-2 rounded-lg bg-[#315FEA]/10 text-[#315FEA]">
                    <Activity className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#101C32]">
                  Live Trading Sessions
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#778397] leading-relaxed">
                  Analyze real-time market execution alongside instructors during active session hours. Understand market structure, entry zones, and risk controls as live prices unfold across global sessions.
                </p>
              </div>

              {/* 02. Live Q&A Sessions */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#101C32]">02.</span>
                  <div className="p-2 rounded-lg bg-[#315FEA]/10 text-[#315FEA]">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#101C32]">
                  Live Q&amp;A Sessions
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#778397] leading-relaxed">
                  Interactive doubt clearance conducted daily where student questions and trade reviews are solved immediately against the current live market charts.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#101C32]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-[#778397]">
              <span className="font-mono text-[11px] sm:text-xs">
                SESSIONS: 10 AM – 12 PM / 05 PM – 07 PM
              </span>
              <span className="font-medium text-[#101C32] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                Active Market Days (Mon–Thu)
              </span>
            </div>
          </div>

          {/* Feature 03 & 07: Dark Impact Tile */}
          <div className="md:col-span-12 lg:col-span-4 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#0D1728] text-white border border-[#1E2E48] shadow-xl flex flex-col justify-between interactive-card-dark relative overflow-hidden">
            {/* Background subtle radial glow */}
            <div
              className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(49, 95, 234, 0.8) 0%, transparent 70%)',
              }}
            />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#315FEA] text-white shadow-sm">
                  UNINTERRUPTED
                </span>
                <span className="font-mono text-xs text-[#DCE5F1]/50">
                  03 / 07
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-white/10 text-[#315FEA]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-[#DCE5F1]/70 uppercase tracking-widest">
                    Support Architecture
                  </span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  24-Hour &amp; Lifelong Mentor Support
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#DCE5F1]/80 leading-relaxed">
                  Your growth is not confined to class hours. Students receive round-the-clock analytical guidance, doubt clarification, and lifelong mentor reviews even after completing the core modules.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#DCE5F1]/15 text-xs font-mono text-[#DCE5F1]/60 flex items-center justify-between relative z-10">
              <span>Direct Instructor Access</span>
              <span className="text-[#315FEA] font-semibold">Lifelong Partnership</span>
            </div>
          </div>

          {/* Feature 04: Institutional Funded-Account Support */}
          <div className="md:col-span-6 lg:col-span-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#101C32]/10 shadow-sm flex flex-col justify-between interactive-card">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#101C32]">04.</span>
                <span className="w-9 h-9 rounded-xl bg-[#315FEA]/10 text-[#315FEA] flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </span>
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-[#101C32]">
                Funded-Account Support
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#778397] leading-relaxed">
                Structured guidance on institutional evaluation metrics, disciplined maximum daily drawdown controls, and capital scaling rules.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#101C32]/10">
              <div className="flex items-start gap-2 text-[11px] text-[#778397] leading-tight">
                <ShieldAlert className="w-3.5 h-3.5 text-[#315FEA] shrink-0 mt-0.5" />
                <span>Eligibility is subject to academy terms and individual performance benchmarks.</span>
              </div>
            </div>
          </div>

          {/* Feature 05: Signal Bot Access */}
          <div className="md:col-span-6 lg:col-span-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#101C32]/10 shadow-sm flex flex-col justify-between interactive-card">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#101C32]">05.</span>
                <span className="w-9 h-9 rounded-xl bg-[#315FEA]/10 text-[#315FEA] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </span>
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-[#101C32]">
                Signal Bot Access After Completion
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#778397] leading-relaxed">
                Receive access to our proprietary analytical signal tool following course completion to complement and validate your independent technical setups.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#101C32]/10">
              <div className="flex items-start gap-2 text-[11px] text-[#778397] leading-tight">
                <ShieldAlert className="w-3.5 h-3.5 text-[#315FEA] shrink-0 mt-0.5" />
                <span>Analytical confirmation tool provided for educational verification after syllabus completion.</span>
              </div>
            </div>
          </div>

          {/* Feature 06: Community of Disciplined Traders */}
          <div className="md:col-span-12 lg:col-span-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#101C32]/10 shadow-sm flex flex-col justify-between interactive-card">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#101C32]">06.</span>
                <span className="w-9 h-9 rounded-xl bg-[#315FEA]/10 text-[#315FEA] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </span>
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-[#101C32]">
                Community of Disciplined Traders
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#778397] leading-relaxed">
                Connect and exchange analytical frameworks with an active peer group of traders who share common discipline, risk protocols, and dedication.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#101C32]/10 flex items-center justify-between text-xs font-mono text-[#778397]">
              <span>Active Alumni Network</span>
              <span className="text-[#315FEA] font-semibold">Kozhikode Cohort</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
