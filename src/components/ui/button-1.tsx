'use client';

import type { HTMLAttributes } from 'react';

interface GradientButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const GradientButton = ({
  children,
  width = '300px',
  height = '60px',
  className = '',
  onClick,
  disabled = false,
  ...props
}: GradientButtonProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      className={`
        relative rounded-[30px] cursor-pointer font-semibold text-lg
        flex items-center justify-center text-white
        bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700
        shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      style={{
        width: width,
        height: height
      }}
      onClick={disabled ? undefined : onClick}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </div>
  );
};

export default GradientButton;