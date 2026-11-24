import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { BRAND_INFO } from '../../data/brand';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-end gap-3 group">
      {/* Interactive Tooltip Pill - Hidden on mobile screens */}
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-[#101C32] border border-[#101C32]/10 shadow-xl text-xs font-body animate-in fade-in duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Questions about Kozhikode batches?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#778397] hover:text-[#101C32] ml-1 p-0.5 rounded cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={BRAND_INFO.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with Edufinix Admissions on WhatsApp"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
      </a>
    </div>
  );
};
