import React from 'react';

export interface SectionHeaderProps {
  index?: string;
  tagline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  tagline,
  title,
  description,
  align = 'left',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div className={`space-y-3 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {/* Category / Number Tracker */}
      {(index || tagline) && (
        <div className={`flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] font-medium ${isCenter ? 'justify-center' : ''}`}>
          {index && (
            <span className={isDark ? 'text-[#315FEA]' : 'text-[#315FEA] font-semibold'}>
              {index}
            </span>
          )}
          {index && tagline && (
            <span className={isDark ? 'text-[#DCE5F1]/30' : 'text-[#101C32]/20'}>/</span>
          )}
          {tagline && (
            <span className={isDark ? 'text-[#DCE5F1]/70' : 'text-[#778397]'}>
              {tagline}
            </span>
          )}
        </div>
      )}

      {/* Main Headline */}
      <h2 
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight ${
          isDark ? 'text-white' : 'text-[#101C32]'
        }`}
      >
        {title}
      </h2>

      {/* Controlled Line-Length Editorial Description */}
      {description && (
        <p 
          className={`font-body text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-[#DCE5F1]/80' : 'text-[#778397]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

