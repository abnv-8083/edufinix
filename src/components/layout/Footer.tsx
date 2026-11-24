import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { EdufinixLogo } from '../brand/EdufinixLogo';
import { BRAND_INFO } from '../../data/brand';
import { ASSET_NOTICE } from '../../data/assets';
import { InstagramIcon } from '../common/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101C32] text-[#F5F4EF] border-t border-[#17263D] pt-12 pb-10 sm:pt-16 sm:pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand & Quick Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-14 border-b border-[#DCE5F1]/10">
          {/* Brand Intro Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <EdufinixLogo variant="light" size="lg" showSubtitle={true} />

            <p className="font-body text-xs sm:text-sm text-[#DCE5F1]/80 leading-relaxed max-w-md pt-1 sm:pt-2">
              Edufinix Trading Academy is a skill-oriented financial education institute based in Kozhikode, Kerala. Dedicated to practical Forex market training, technical analysis, disciplined risk management, and lifelong mentorship.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#DCE5F1]/90">
              <span className="w-2 h-2 rounded-full bg-[#315FEA] animate-pulse" />
              <span>Offline Campus • Kozhikode, Kerala</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] font-semibold text-[#DCE5F1]/50">
              Academy
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-body">
              <li>
                <Link to="/" className="text-[#DCE5F1]/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#DCE5F1]/80 hover:text-white transition-colors">
                  About the Academy
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-[#DCE5F1]/80 hover:text-white transition-colors">
                  Programs &amp; Curriculum
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-[#DCE5F1]/80 hover:text-white transition-colors">
                  Mentorship &amp; Escape
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#DCE5F1]/80 hover:text-white transition-colors">
                  Contact &amp; Admissions
                </Link>
              </li>
              <li>
                <Link to="/brand" className="text-[#315FEA] hover:text-white transition-colors font-medium">
                  Brand Identity Guide →
                </Link>
              </li>
            </ul>
          </div>

          {/* Batch Timings Column */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] font-semibold text-[#DCE5F1]/50">
              Batch Schedules
            </h4>
            <div className="space-y-2.5 sm:space-y-3 text-xs font-body text-[#DCE5F1]/80">
              <div className="p-3 rounded-lg bg-white/5 border border-white/5 space-y-1">
                <span className="font-semibold text-white block">Morning Batch</span>
                <span className="font-mono text-[#315FEA] block">10:00 AM – 12:00 PM</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/5 space-y-1">
                <span className="font-semibold text-white block">Evening Batch</span>
                <span className="font-mono text-[#315FEA] block">05:00 PM – 07:00 PM</span>
              </div>
              <p className="text-[11px] text-[#778397] leading-tight">
                Classes conducted during trading days only. No classes Friday through Sunday.
              </p>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] font-semibold text-[#DCE5F1]/50">
              Direct Contact
            </h4>
            <div className="space-y-2 sm:space-y-2.5 text-xs font-body text-[#DCE5F1]/80">
              <a
                href={`tel:${BRAND_INFO.contact.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#315FEA] shrink-0" />
                <span className="font-mono">{BRAND_INFO.contact.phone}</span>
              </a>

              <a
                href={`mailto:${BRAND_INFO.contact.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#315FEA] shrink-0" />
                <span className="truncate">{BRAND_INFO.contact.email}</span>
              </a>

              <a
                href={BRAND_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <InstagramIcon className="w-4 h-4 text-[#315FEA] shrink-0" />
                <span>{BRAND_INFO.contact.instagram}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#315FEA] shrink-0 mt-0.5" />
                <span>Kozhikode, Kerala, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Risk Disclaimer Box (Mandatory Financial Responsibility) */}
        <div className="my-6 sm:my-8 p-4 sm:p-5 rounded-xl bg-[#17263D]/60 border border-[#DCE5F1]/10 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          <div className="p-2 rounded-lg bg-[#315FEA]/15 text-[#315FEA] shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h5 className="font-heading text-xs uppercase tracking-wider font-semibold text-white">
              Financial Risk Notice &amp; Educational Disclaimer
            </h5>
            <p className="font-body text-[11px] sm:text-xs text-[#DCE5F1]/70 leading-relaxed">
              {BRAND_INFO.disclaimer}
            </p>
          </div>
        </div>

        {/* Bottom Credits & Asset Notice */}
        <div className="pt-6 border-t border-[#DCE5F1]/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-body text-[#778397]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Edufinix Trading Academy.</span>
            <span>•</span>
            <span className="italic">"Learn. Trade. Grow."</span>
          </div>

          <div className="text-[10px] sm:text-[11px] text-[#778397]/80 text-center md:text-right max-w-xl">
            {ASSET_NOTICE}
          </div>
        </div>
      </div>
    </footer>
  );
};
