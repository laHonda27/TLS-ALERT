import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function SectionContainer({ 
  children, 
  className = '',
  noPadding = false 
}: SectionContainerProps) {
  return (
    <section 
      className={`
        relative
        ${noPadding ? '' : 'py-12'}
        transition-all duration-700
        ${className}
      `}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
