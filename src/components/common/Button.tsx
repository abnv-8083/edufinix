import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  showArrow?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  target,
  rel,
  icon,
  showArrow = false,
  fullWidth = false,
  children,
  className = '',
  disabled,
  ...rest
}) => {
  const baseStyles = "inline-flex items-center justify-center font-body font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none group";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 rounded-md gap-1.5 tracking-wide",
    md: "text-sm px-5 py-2.5 rounded-lg gap-2 tracking-normal",
    lg: "text-base px-7 py-3.5 rounded-lg gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary: "bg-[#315FEA] text-white hover:bg-[#254eca] active:bg-[#1d41ab] shadow-sm hover:shadow-md focus-visible:ring-[#315FEA]",
    secondary: "bg-[#101C32] text-white hover:bg-[#17263D] active:bg-[#0c1524] shadow-sm focus-visible:ring-[#101C32]",
    dark: "bg-[#17263D] text-[#F5F4EF] hover:bg-[#101C32] border border-[#DCE5F1]/15 active:bg-[#0d1624] focus-visible:ring-[#315FEA]",
    outline: "bg-transparent text-[#101C32] border border-[#101C32]/25 hover:border-[#101C32] hover:bg-[#101C32]/5 active:bg-[#101C32]/10 focus-visible:ring-[#101C32]",
    ghost: "bg-transparent text-[#101C32] hover:bg-[#101C32]/5 active:bg-[#101C32]/10 focus-visible:ring-[#101C32]",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#1EBE5D] active:bg-[#199E4E] shadow-sm focus-visible:ring-[#25D366]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)} 
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...rest}>
      {content}
    </button>
  );
};

