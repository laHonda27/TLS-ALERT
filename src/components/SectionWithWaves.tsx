import React from 'react';

interface SectionWithWavesProps {
  children: React.ReactNode;
  className?: string;
  colorFrom?: string;
  colorTo?: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export function SectionWithWaves({
  children,
  className = '',
  colorFrom = 'from-indigo-900',
  colorTo = 'to-purple-900',
  isFirst = false,
  isLast = false
}: SectionWithWavesProps) {
  return (
    <section className={`relative ${className}`}>
      {/* Fond dégradé de la section */}
      <div className={`absolute inset-0 bg-gradient-to-b ${colorFrom} ${colorTo} opacity-50`} />

      {/* Vague du haut (sauf pour la première section) */}
      {!isFirst && (
        <div className="absolute top-0 left-0 right-0 h-32 -translate-y-24 overflow-hidden">
          <svg
            className="absolute w-full h-full transform scale-x-[-1]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className={`fill-current ${colorFrom} opacity-20`}
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <path
              className={`fill-current ${colorFrom} opacity-30 translate-y-3`}
              d="M0,192L48,181.3C96,171,192,149,288,128C384,107,480,85,576,90.7C672,96,768,128,864,154.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      )}

      {/* Vague du bas (sauf pour la dernière section) */}
      {!isLast && (
        <div className="absolute bottom-0 left-0 right-0 h-32 translate-y-24 overflow-hidden">
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className={`fill-current ${colorTo} opacity-20`}
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,122.7C672,149,768,235,864,266.7C960,299,1056,277,1152,234.7C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
            <path
              className={`fill-current ${colorTo} opacity-30 -translate-y-3`}
              d="M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,117.3C672,139,768,181,864,197.3C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>
        </div>
      )}

      {/* Contenu de la section */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Animation de vagues latérales */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-32 animate-wave-slow">
          <div className={`w-full h-full bg-gradient-to-r ${colorFrom} opacity-10`} />
        </div>
        <div className="absolute inset-y-0 right-0 w-32 animate-wave-slower">
          <div className={`w-full h-full bg-gradient-to-l ${colorTo} opacity-10`} />
        </div>
      </div>
    </section>
  );
}
