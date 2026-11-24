import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export interface LogoProps {
  variant?: 'light' | 'dark' | 'monochrome-white' | 'monochrome-dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  showSubtitle?: boolean;
  isLink?: boolean;
  className?: string;
}

export const EdufinixMonogram: React.FC<{
  size?: number;
  variant?: 'light' | 'dark' | 'monochrome-white' | 'monochrome-dark' | 'cobalt';
  className?: string;
}> = ({ size = 36, variant = 'dark', className = '' }) => {
  let themeAccent = '#315FEA';
  let themeDark = '#101C32';

  try {
    const { currentTheme } = useTheme();
    if (currentTheme) {
      themeAccent = currentTheme.accent;
      themeDark = currentTheme.dark;
    }
  } catch {
    // fallback if outside ThemeProvider
  }

  // Determine fill colors based on background
  const isDarkBg = variant === 'light' || variant === 'monochrome-white';
  const primaryFill = isDarkBg ? '#FFFFFF' : themeDark;
  const accentFill = variant === 'monochrome-white' 
    ? '#FFFFFF' 
    : variant === 'monochrome-dark' 
      ? themeDark 
      : themeAccent;

  const badgeBg = isDarkBg ? 'rgba(255, 255, 255, 0.08)' : 'rgba(16, 28, 50, 0.04)';
  const badgeBorder = isDarkBg ? 'rgba(255, 255, 255, 0.12)' : 'rgba(16, 28, 50, 0.1)';

  return (
    <div 
      className={`inline-flex items-center justify-center rounded-lg border transition-all duration-300 shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: badgeBg,
        borderColor: badgeBorder,
      }}
      aria-label="Edufinix Monogram"
    >
      <svg
        width={size * 0.7}
        height={size * 0.7}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vertical Anchor Stem */}
        <path
          d="M8 8H15V36H8V8Z"
          fill={primaryFill}
        />
        {/* Top Architectural Tier */}
        <path
          d="M15 8H35V14H15V8Z"
          fill={primaryFill}
        />
        {/* Middle Precision Crossbar with Theme Accent */}
        <path
          d="M15 19H28V25H15V19Z"
          fill={accentFill}
        />
        {/* Bottom Foundation Tier */}
        <path
          d="M15 30H35V36H15V30Z"
          fill={primaryFill}
        />
        {/* Calibrated Discipline Coordinate */}
        <circle
          cx="34"
          cy="22"
          r="2.5"
          fill={accentFill}
        />
      </svg>
    </div>
  );
};

export const EdufinixLogo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = false,
  showSubtitle = true,
  isLink = true,
  className = '',
}) => {
  let themeAccent = '#315FEA';

  try {
    const { currentTheme } = useTheme();
    if (currentTheme) {
      themeAccent = currentTheme.accent;
    }
  } catch {
    // fallback
  }

  const isDarkBg = variant === 'light' || variant === 'monochrome-white';
  const textColor = isDarkBg ? 'text-white' : 'text-[#101C32]';
  const subtitleColor = isDarkBg ? 'text-[#DCE5F1]/70' : 'text-[#778397]';

  const sizeConfigs = {
    sm: { monogram: 28, text: 'text-base sm:text-lg', sub: 'text-[8px] sm:text-[9px]', tracking: 'tracking-tight' },
    md: { monogram: 34, text: 'text-xl sm:text-2xl', sub: 'text-[9px] sm:text-[10px]', tracking: 'tracking-tight' },
    lg: { monogram: 42, text: 'text-2xl sm:text-3xl', sub: 'text-[10px] sm:text-xs', tracking: 'tracking-tight' },
    xl: { monogram: 52, text: 'text-3xl sm:text-4xl', sub: 'text-xs sm:text-sm', tracking: 'tracking-tight' },
  };

  const currentSize = sizeConfigs[size];

  const content = (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none group max-w-full ${className}`}>
      {/* Monogram Mark */}
      <EdufinixMonogram size={currentSize.monogram} variant={variant} />

      {/* Typographic Wordmark */}
      <div className="flex flex-col justify-center leading-none min-w-0">
        <div className="flex items-center">
          <span 
            className={`font-heading font-bold ${currentSize.text} ${currentSize.tracking} ${textColor} transition-colors flex items-baseline`}
          >
            Edufini
            {/* Custom crafted X with fine precision intersection */}
            <span className="relative inline-block ml-[0.5px]">
              <span className={textColor}>x</span>
              <span 
                className="absolute -top-0.5 right-0 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full"
                style={{ 
                  backgroundColor: variant === 'monochrome-white' || variant === 'monochrome-dark' ? 'currentColor' : themeAccent,
                  transform: 'translate(40%, -20%)' 
                }}
              />
            </span>
          </span>
        </div>

        {/* Subtitle / Institutional Descriptor */}
        {showSubtitle && (
          <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 truncate">
            <span className={`font-body font-medium uppercase tracking-[0.14em] sm:tracking-[0.16em] ${currentSize.sub} ${subtitleColor} truncate`}>
              Trading Academy
            </span>
            <span 
              className="w-1 h-1 rounded-full shrink-0" 
              style={{ backgroundColor: variant === 'monochrome-white' ? '#FFFFFF' : themeAccent }}
            />
            <span className={`font-body font-medium uppercase tracking-[0.14em] sm:tracking-[0.16em] ${currentSize.sub} ${subtitleColor} hidden xs:inline`}>
              Kozhikode
            </span>
          </div>
        )}

        {/* Optional Tagline */}
        {showTagline && (
          <span className="font-body text-[10px] sm:text-[11px] tracking-wide mt-1 text-[#778397] font-medium hidden sm:inline">
            Learn. Trade. Grow.
          </span>
        )}
      </div>
    </div>
  );

  if (isLink) {
    return (
      <Link to="/" className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315FEA] rounded shrink-0">
        {content}
      </Link>
    );
  }

  return content;
};
