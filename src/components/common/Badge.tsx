import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'porcelain' | 'cobalt' | 'navy' | 'mist' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'porcelain',
  size = 'md',
  className = '',
}) => {
  const base = "inline-flex items-center font-mono font-medium tracking-wider uppercase rounded-full select-none";
  
  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-0.5 gap-1",
    md: "text-xs px-3 py-1 gap-1.5",
  };

  const variantStyles = {
    porcelain: "bg-[#F5F4EF] text-[#101C32] border border-[#101C32]/10",
    cobalt: "bg-[#315FEA]/10 text-[#315FEA] border border-[#315FEA]/20",
    navy: "bg-[#101C32] text-white border border-[#17263D]",
    mist: "bg-[#DCE5F1] text-[#101C32] border border-[#DCE5F1]/80",
    outline: "bg-transparent text-[#778397] border border-[#778397]/30",
  };

  return (
    <span className={`${base} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

