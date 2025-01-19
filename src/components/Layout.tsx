import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative">
      {/* Fond principal avec dégradé */}
      <div className="fixed inset-0 bg-[#1a1333]">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl" />
      </div>
      
      {/* Contenu */}
      <div className="relative">{children}</div>
    </div>
  );
}
