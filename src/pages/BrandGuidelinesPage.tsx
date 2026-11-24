import React from 'react';
import { EdufinixLogo, EdufinixMonogram } from '../components/brand/EdufinixLogo';
import { Button } from '../components/common/Button';
import { Check, X, Layers, Compass } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { usePageMetadata } from '../hooks/usePageMetadata';

export const BrandGuidelinesPage: React.FC = () => {
  usePageMetadata(
    'Brand Identity System & Design Standards',
    'Executive design presentation for Edufinix Trading Academy: typography, logo construction, color tokens, and identity guidelines.'
  );

  const { currentTheme } = useTheme();

  const brandColors = [
    {
      name: "Midnight Navy / Dark Base",
      hex: currentTheme.dark,
      role: "Primary Dark Surface & Authority",
      usage: "Hero backgrounds, dark editorial spreads, footer, high-contrast headings.",
    },
    {
      name: "Deep Ink / Secondary Dark",
      hex: currentTheme.id === 'emerald' ? '#122A20' : currentTheme.id === 'amber' ? '#27201B' : '#17263D',
      role: "Secondary Dark Surface",
      usage: "Layered containers within dark sections, elevated cards, borders.",
    },
    {
      name: "Brand Primary Accent",
      hex: currentTheme.accent,
      role: "Selective Brand Accent",
      usage: "Monogram crossbar, CTA buttons, active status dots, category indices.",
    },
    {
      name: "Porcelain / Paper Base",
      hex: currentTheme.light,
      role: "Primary Editorial Light Background",
      usage: "Paper-textured editorial sections, light backgrounds, card containers.",
    },
    {
      name: "Mist / Secondary Detail",
      hex: currentTheme.id === 'emerald' ? '#D0E0D6' : currentTheme.id === 'amber' ? '#E8E0D1' : '#DCE5F1',
      role: "Subtle Visual Detail",
      usage: "Muted borders, secondary text in dark sections, architectural tints.",
    },
    {
      name: "Slate / Editorial Body",
      hex: currentTheme.id === 'emerald' ? '#5F7369' : currentTheme.id === 'amber' ? '#7A7065' : '#778397',
      role: "Editorial Body & Captions",
      usage: "Paragraph body text, section sub-descriptors, timestamps, meta notes.",
    },
    {
      name: "Pure White",
      hex: "#FFFFFF",
      role: "High-Contrast Surface",
      usage: "Clean card backings, elevated light elements, crisp typographic contrast.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Masthead */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#101C32] text-white border-b border-[#17263D] relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#315FEA]">
              <span>Executive Creative Direction</span>
              <span className="text-white/30">•</span>
              <span>Edufinix Trading Academy</span>
            </div>

            <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Brand Identity System &amp; Design Standards.
            </h1>

            <p className="font-body text-base sm:text-lg text-[#DCE5F1]/80 leading-relaxed">
              An original typographic and vector identity built for an established financial education institution — eschewing generic candlestick cliches and upward arrows in favor of architectural discipline.
            </p>
          </div>
        </div>
      </section>

      {/* Concept Narrative */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#101C32]/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#315FEA] font-semibold">
                CORE IDENTITY PHILOSOPHY
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#101C32]">
                The Market Journal Concept
              </h2>
              <p className="font-body text-sm sm:text-base text-[#778397] leading-relaxed">
                The visual identity merges the intellectual authority of a financial publication with the structural permanence of a classical educational academy.
              </p>
              <div className="space-y-3 pt-2 text-xs text-[#17263D]">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5F4EF]">
                  <Layers className="w-4 h-4 text-[#315FEA] shrink-0 mt-0.5" />
                  <span><strong>Typographic-First Construction:</strong> The name "Edufinix" is typeset with a bespoke architectural 'E' and an intersecting custom 'x' glyph.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5F4EF]">
                  <Compass className="w-4 h-4 text-[#315FEA] shrink-0 mt-0.5" />
                  <span><strong>Restrained Chromatic Rhythm:</strong> Controlled deployment of Warm Porcelain and Midnight Navy rather than generic gradients or loud neon.</span>
                </div>
              </div>
            </div>

            {/* Visual Logo Specimen Showcase */}
            <div className="lg:col-span-6 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F5F4EF] border border-[#101C32]/10 space-y-4 sm:space-y-6 overflow-hidden">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#778397]">
                  PRIMARY MARK SPECIMEN (ACTIVE THEME)
                </span>
                <div className="p-4 sm:p-8 rounded-2xl bg-white border border-[#101C32]/10 flex items-center justify-center overflow-x-auto">
                  <EdufinixLogo variant="dark" size="lg" showTagline={true} isLink={false} />
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#778397]">
                  DARK REVERSE SPECIMEN
                </span>
                <div className="p-4 sm:p-8 rounded-2xl bg-[#101C32] border border-[#17263D] flex items-center justify-center overflow-x-auto">
                  <EdufinixLogo variant="light" size="lg" showTagline={true} isLink={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monogram Geometry Breakdown */}
      <section className="py-14 sm:py-20 bg-[#F5F4EF] border-b border-[#101C32]/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#315FEA] font-semibold">
              VECTOR GEOMETRY
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#101C32]">
              The "Precision Apex" E Monogram
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#778397]">
              Engineered for absolute scalability from a 16px favicon up to monumental architectural signage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#101C32]/10 space-y-3 sm:space-y-4 text-center">
              <div className="flex justify-center py-2 sm:py-4">
                <EdufinixMonogram size={72} variant="dark" />
              </div>
              <h3 className="font-heading text-sm sm:text-base font-bold text-[#101C32]">Standard Signature</h3>
              <p className="text-xs text-[#778397] leading-relaxed">
                Foundation spine with calibrated central accent tier and discipline coordinate marker.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#101C32] text-white border border-[#17263D] space-y-3 sm:space-y-4 text-center">
              <div className="flex justify-center py-2 sm:py-4">
                <EdufinixMonogram size={72} variant="light" />
              </div>
              <h3 className="font-heading text-sm sm:text-base font-bold text-white">Dark Section Signature</h3>
              <p className="text-xs text-[#DCE5F1]/70 leading-relaxed">
                Porcelain white tiers with active dynamic accent on dark backdrop.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#101C32]/10 space-y-3 sm:space-y-4 text-center">
              <div className="flex justify-center py-2 sm:py-4">
                <EdufinixMonogram size={72} variant="monochrome-dark" />
              </div>
              <h3 className="font-heading text-sm sm:text-base font-bold text-[#101C32]">Monochrome Verification</h3>
              <p className="text-xs text-[#778397] leading-relaxed">
                100% single-ink compliance ensuring perfect reproduction on letterheads, embossing, and uniform embroidery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Specifications */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#101C32]/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#315FEA] font-semibold">
                SYSTEM TOKENS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#101C32]">
                Active Theme Palette: {currentTheme.name}
              </h2>
            </div>
            <span className="font-mono text-xs text-[#778397] uppercase">THEME: {currentTheme.id}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {brandColors.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border border-[#101C32]/10 overflow-hidden shadow-xs bg-[#F5F4EF]"
              >
                <div
                  className="h-20 sm:h-28 w-full border-b border-[#101C32]/10 transition-colors duration-300"
                  style={{ backgroundColor: c.hex }}
                />
                <div className="p-4 space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xs sm:text-sm font-bold text-[#101C32]">{c.name}</h3>
                    <code className="text-xs font-mono font-semibold text-[#315FEA]">{c.hex}</code>
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-mono text-[#778397]">{c.role}</p>
                  <p className="text-[11px] text-[#17263D] leading-tight pt-1">{c.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Usage Rules (Do's & Don'ts) */}
      <section className="py-14 sm:py-20 bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="space-y-1 sm:space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#315FEA] font-semibold">
              INTEGRITY GUIDELINES
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#101C32]">
              Brand Usage Rules
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Approved Practices */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F4EF] border border-[#101C32]/10 space-y-3.5 sm:space-y-4">
              <div className="flex items-center gap-2 text-green-600 font-heading font-bold text-sm">
                <Check className="w-5 h-5" />
                <span>Approved Brand Practices</span>
              </div>
              <ul className="space-y-2.5 sm:space-y-3 text-xs text-[#17263D]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5" />
                  <span>Always write <strong>"Edufinix"</strong> with only the capital 'E' in running text and wordmarks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5" />
                  <span>Use Warm Porcelain or Alabaster as the paper background for editorial light sections.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5" />
                  <span>Include the official tagline <em>"Learn. Trade. Grow."</em> on formal presentation collateral.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5" />
                  <span>Maintain the mandatory financial risk disclaimer on all educational publications.</span>
                </li>
              </ul>
            </div>

            {/* Prohibited Practices */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F4EF] border border-[#101C32]/10 space-y-3.5 sm:space-y-4">
              <div className="flex items-center gap-2 text-red-600 font-heading font-bold text-sm">
                <X className="w-5 h-5" />
                <span>Strictly Prohibited</span>
              </div>
              <ul className="space-y-2.5 sm:space-y-3 text-xs text-[#17263D]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                  <span>Do NOT write the primary wordmark as <strong>"EDUFINIX"</strong> in all-caps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                  <span>Do NOT add generic currency symbols ($, €, ₹), graduation caps, or stock market arrows to the logo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                  <span>Do NOT apply garish gradients, 3D chrome effects, or blue glowing SaaS halos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                  <span>Never publish fabricated profits, fake dashboards, or guaranteed returns.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 sm:pt-6 flex justify-center">
            <Button to="/" variant="secondary" size="md">
              Return to Website Experience
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
