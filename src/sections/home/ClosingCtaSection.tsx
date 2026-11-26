import React, { useRef } from 'react';
import { Button } from '../../components/common/Button';
import { BRAND_INFO } from '../../data/brand';
import { Clock, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '../../components/common/Icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const ClosingCtaSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      if (cardRef.current) {
        gsap.from(cardRef.current, {
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          scale: 0.94,
          opacity: 0,
          y: 40,
          duration: 0.85,
          ease: 'power3.out',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-14 sm:py-20 lg:py-28 bg-[#F5F4EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={cardRef} className="p-6 sm:p-12 lg:p-16 rounded-3xl bg-[#0D1728] text-white border border-[#1E2E48] shadow-2xl relative overflow-hidden interactive-card-dark">
          
          {/* Subtle Graphic Aura */}
          <div 
            className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full pointer-events-none opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(49, 95, 234, 0.8) 0%, transparent 70%)',
            }}
          />

          <div className="relative max-w-3xl space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-mono text-[#DCE5F1]">
              <span className="w-2 h-2 rounded-full bg-[#315FEA] animate-pulse" />
              <span>Next Cohort Openings • Kozhikode</span>
            </div>

            <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Your Market Education <br className="hidden sm:inline" />
              Starts Here.
            </h2>

            <p className="font-body text-sm sm:text-base lg:text-lg text-[#DCE5F1]/80 max-w-xl leading-relaxed">
              Discover the Edufinix approach to practical Forex education, mentorship and disciplined market learning.
            </p>

            {/* CTAs - Stack full width on mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button to="/contact" variant="primary" size="lg" showArrow={true} className="w-full sm:w-auto shadow-md">
                Enquire About Admission
              </Button>

              <a
                href={BRAND_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#25D366] text-white text-sm font-body font-semibold hover:bg-[#1EBE5D] transition-colors shadow-sm w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Timings & Location Spec */}
            <div className="pt-6 sm:pt-8 mt-4 sm:mt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs font-mono text-[#DCE5F1]/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#315FEA] shrink-0" />
                <span>Kozhikode, Kerala, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#315FEA] shrink-0" />
                <span>Morning (10:00 AM) &amp; Evening (05:00 PM) Batches</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
