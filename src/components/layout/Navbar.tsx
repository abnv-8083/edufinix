import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { EdufinixLogo } from '../brand/EdufinixLogo';
import { BRAND_INFO } from '../../data/brand';
import { ThemeSwitcher } from '../common/ThemeSwitcher';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Mentorship', path: '/mentorship' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll position for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-porcelain-subtle/95 backdrop-blur-md border-b border-[#101C32]/10 shadow-xs py-3.5'
            : 'bg-porcelain-subtle border-b border-[#101C32]/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <EdufinixLogo variant="dark" size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-1.5 rounded-md text-sm font-body font-medium transition-colors duration-150 ${
                      isActive
                        ? 'text-[#315FEA] font-semibold bg-[#315FEA]/5'
                        : 'text-[#17263D] hover:text-[#315FEA] hover:bg-[#101C32]/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Header Right Action, Theme Switcher & Enquire CTA */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Palette / Theme Switcher */}
              <ThemeSwitcher variant="navbar" />

              {/* WhatsApp Quick Link */}
              <a
                href={BRAND_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#101C32] hover:text-[#315FEA] border border-[#101C32]/15 rounded-md hover:border-[#315FEA]/50 transition-colors"
                title="Direct WhatsApp Admissions Desk"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              {/* Primary Enquire Now CTA */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-body font-semibold uppercase tracking-wider text-white bg-[#101C32] hover:bg-[#17263D] active:bg-[#0c1524] transition-all shadow-xs group"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger & Quick Theme */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeSwitcher variant="navbar" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg border border-[#101C32]/15 text-[#101C32] hover:bg-[#101C32]/5 focus:outline-none focus:ring-2 focus:ring-[#315FEA]"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto animate-in fade-in duration-200 bg-porcelain-subtle">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#778397] mb-2">
              Navigation
            </span>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-2xl font-heading font-semibold py-3 border-b border-[#101C32]/10 transition-colors flex items-center justify-between ${
                    isActive ? 'text-[#315FEA]' : 'text-[#101C32]'
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 opacity-40" />
              </NavLink>
            ))}
          </div>

          {/* Mobile Batch Schedule Summary */}
          <div className="mt-8 p-4 rounded-xl bg-white border border-[#101C32]/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#101C32]">
                Active Batch Hours
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#315FEA]/10 text-[#315FEA] font-semibold">
                Kozhikode
              </span>
            </div>
            <div className="text-xs text-[#778397] space-y-1">
              <p><strong className="text-[#101C32]">Morning:</strong> 10:00 AM – 12:00 PM</p>
              <p><strong className="text-[#101C32]">Evening:</strong> 05:00 PM – 07:00 PM</p>
              <p className="text-[11px] italic text-[#778397]">Trading days only. No classes Fri–Sun.</p>
            </div>
          </div>

          {/* Quick Action CTAs */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-4 rounded-lg bg-[#101C32] text-white text-center font-heading font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Enquire About Admission</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            
            <a
              href={BRAND_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-lg bg-[#25D366] text-white text-center font-body font-medium text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message on WhatsApp (+91 6369-637566)</span>
            </a>

            <a
              href={`tel:${BRAND_INFO.contact.phoneRaw}`}
              className="w-full py-2.5 px-4 rounded-lg border border-[#101C32]/20 text-[#101C32] text-center font-body text-xs font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: +91 6369-637566</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
