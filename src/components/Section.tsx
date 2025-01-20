import React from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={clsx('relative py-16 sm:py-16', className)}>
      {/* Contenu */}
      {children}
    </section>
  );
}
