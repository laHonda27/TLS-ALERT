import React from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={clsx('relative py-16 sm:py-16', className)}>
      {/* Contenu */}
      {children}
    </section>
  );
}
