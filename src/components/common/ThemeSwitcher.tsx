import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { useTheme, THEMES } from '../../context/ThemeContext';
import type { ThemeId } from '../../context/ThemeContext';

export const ThemeSwitcher: React.FC<{ variant?: 'navbar' | 'floating' }> = ({ variant = 'navbar' }) => {
  const { theme, setTheme, currentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  if (variant === 'floating') {
    return (
      <div ref={dropdownRef} className="hidden sm:block fixed bottom-6 left-6 z-50">
        {/* Floating Trigger Button */}
        <button
          onClick={toggleOpen}
          aria-label="Change Website Color Theme"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#101C32] text-white border border-[#17263D] shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#315FEA]"
        >
          <div className="flex items-center gap-1">
            <span
              className="w-3 h-3 rounded-full border border-white/20"
              style={{ backgroundColor: currentTheme.accent }}
            />
            <span
              className="w-3 h-3 rounded-full border border-white/20 -ml-1.5"
              style={{ backgroundColor: currentTheme.dark }}
            />
          </div>
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#DCE5F1] group-hover:text-white">
            {currentTheme.name}
          </span>
          <Palette className="w-3.5 h-3.5 text-[#315FEA] group-hover:rotate-45 transition-transform" />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute bottom-14 left-0 w-72 p-3 rounded-2xl bg-white border border-[#101C32]/10 shadow-2xl space-y-2 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-2 pt-1 pb-2 border-b border-[#101C32]/10 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#778397] font-semibold">
                Select Academy Theme
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#315FEA]/10 text-[#315FEA] font-bold">
                3 Themes
              </span>
            </div>

            <div className="space-y-1.5">
              {THEMES.map((t) => {
                const isSelected = t.id === theme;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id as ThemeId);
                      setIsOpen(false);
                    }}
                    className={`w-full p-2.5 rounded-xl text-left border transition-all flex items-center justify-between group ${
                      isSelected
                        ? 'bg-[#101C32] text-white border-[#101C32] shadow-xs'
                        : 'bg-[#F5F4EF] text-[#101C32] border-transparent hover:border-[#315FEA]/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Color Preview Swatch */}
                      <div className="flex items-center gap-1 shrink-0">
                        <span
                          className="w-4 h-4 rounded-full border border-black/10 shadow-xs"
                          style={{ backgroundColor: t.accent }}
                        />
                        <span
                          className="w-4 h-4 rounded-full border border-black/10 -ml-2 shadow-xs"
                          style={{ backgroundColor: t.dark }}
                        />
                      </div>

                      <div className="space-y-0.5">
                        <span className={`block font-heading text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-[#101C32]'}`}>
                          {t.name}
                        </span>
                        <span className={`block text-[10px] font-mono ${isSelected ? 'text-[#DCE5F1]/70' : 'text-[#778397]'}`}>
                          {t.tagline}
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-[#315FEA] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            <p className="px-2 pt-1 text-[10px] text-[#778397] leading-tight">
              Instant site-wide palette switch. Preserves typography and institutional layout.
            </p>
          </div>
        )}
      </div>
    );
  }

  // Navbar variant
  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={toggleOpen}
        type="button"
        aria-label="Change Website Color Theme"
        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium text-[#101C32] hover:text-[#315FEA] border border-[#101C32]/15 rounded-md hover:border-[#315FEA]/50 transition-colors"
      >
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: currentTheme.accent }}
        />
        <span className="hidden sm:inline">{currentTheme.name}</span>
        <Palette className="w-3.5 h-3.5 text-[#315FEA]" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 p-3 rounded-2xl bg-white border border-[#101C32]/10 shadow-2xl space-y-2 animate-in fade-in zoom-in-95 duration-150 z-50">
          <div className="px-2 pt-1 pb-1.5 border-b border-[#101C32]/10 flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#778397] font-semibold">
              Color Palette
            </span>
            <Sparkles className="w-3 h-3 text-[#315FEA]" />
          </div>

          <div className="space-y-1">
            {THEMES.map((t) => {
              const isSelected = t.id === theme;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id as ThemeId);
                    setIsOpen(false);
                  }}
                  className={`w-full p-2 rounded-xl text-left border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#101C32] text-white border-[#101C32] shadow-xs'
                      : 'bg-[#F5F4EF] text-[#101C32] border-transparent hover:border-[#315FEA]/30'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-xs"
                      style={{ backgroundColor: t.accent }}
                    />
                    <div>
                      <span className={`block font-heading text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-[#101C32]'}`}>
                        {t.name}
                      </span>
                      <span className={`block text-[9px] font-mono ${isSelected ? 'text-[#DCE5F1]/70' : 'text-[#778397]'}`}>
                        {t.tagline}
                      </span>
                    </div>
                  </div>

                  {isSelected && <Check className="w-3.5 h-3.5 text-[#315FEA]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
