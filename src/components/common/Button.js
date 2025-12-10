import React from 'react';
import Link from 'next/link';

const variantClasses = {
  primary:
    'border border-[#c18c35] bg-[#0f1320] text-[#f6f0dd] hover:border-amber-300 shadow-[0_12px_28px_rgba(0,0,0,0.32)]',
  secondary:
    'border border-white/20 bg-white/5 text-[#f6f0dd] hover:border-amber-300 shadow-[0_8px_20px_rgba(0,0,0,0.25)]',
  ghost: 'border border-white/0 bg-transparent text-[#f6f0dd] hover:border-amber-300',
};

const Button = ({ children, href, onClick, variant = 'primary', className = '', fullWidth = false, type = 'button' }) => {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition duration-150 cursor-pointer';
  const classes = `${base} ${variantClasses[variant] || variantClasses.primary} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
