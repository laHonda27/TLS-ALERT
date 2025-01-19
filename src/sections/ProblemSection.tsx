import React, { useEffect, useRef, useState } from 'react';
import { Timer, Ban, EuroIcon, AlertTriangle, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ProgressIndicator = ({ current, total }: { current: number; total: number }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1.5 bg-gray-200 dark:bg-gray-700">
        <div
          className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 transition-transform duration-500 ease-out origin-left"
          style={{ transform: `scaleX(${(current + 1) / total})` }}
        />
      </div>
    </div>
  );
};

export function ProblemSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const lastScrollPosition = useRef(0);
  const hasJustExited = useRef(false);
  const touchStart = useRef<number | null>(null);

  const chapters = [
    {
      icon: AlertTriangle,
      title: "L'urgence d'un rendez-vous, sans système d'alerte",
      content: "Imaginez : vous devez obtenir un visa rapidement pour vos études ou un voyage d'affaires. TLSContact ne propose aucun système d'alerte. Vous êtes laissé dans l'incertitude totale, sans visibilité sur les créneaux disponibles. Cette situation est particulièrement stressante quand les délais sont serrés et que chaque jour compte."
    },
    {
      icon: Timer,
      title: "La course effrénée aux créneaux disponibles",
      content: "Les créneaux apparaissent et disparaissent en quelques secondes. Vous passez des heures à actualiser manuellement la page, espérant être au bon moment au bon endroit. Cette méthode est non seulement chronophage mais aussi extrêmement frustrante. Sans automatisation, vos chances d'obtenir un rendez-vous rapidement sont très faibles."
    },
    {
      icon: EuroIcon,
      title: "Le coût caché des solutions alternatives",
      content: "Face à cette situation, beaucoup se tournent vers des agences spécialisées qui facturent des frais exorbitants, parfois plusieurs centaines d'euros, pour un simple rendez-vous. Ces intermédiaires profitent de votre désespoir, sans pour autant garantir un créneau rapide. C'est un cercle vicieux qui pénalise particulièrement les étudiants et les familles."
    },
    {
      icon: CheckCircle,
      title: "TLS Alerte : Votre solution intelligente",
      content: "C'est pour résoudre ces problèmes que nous avons créé TLS Alerte. Notre système surveille automatiquement les créneaux disponibles 24h/24 et vous alerte instantanément dès qu'un rendez-vous se libère. Plus besoin de payer des frais d'agence ou de perdre des heures devant votre écran. Avec TLS Alerte, reprenez le contrôle de votre temps et de votre budget."
    }
  ];

  const navigateToSection = (sectionId: string) => {
    console.log('Navigation vers:', sectionId);
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) {
      console.log('Section cible non trouvée:', sectionId);
      return;
    }

    isAnimating.current = true;
    setIsActive(false);
    document.body.style.overflow = 'auto';
    
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });

    setTimeout(() => {
      isAnimating.current = false;
      document.body.style.overflow = '';
    }, 1000);
  };

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      if (!sectionRef.current || isActive) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const currentScroll = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      // On vérifie si on vient de quitter la section
      if (Math.abs(currentScroll - lastScrollPosition.current) > windowHeight) {
        hasJustExited.current = true;
        setTimeout(() => {
          hasJustExited.current = false;
        }, 2000); // On augmente le délai à 2 secondes
      }
      
      // On sauvegarde la position
      lastScrollPosition.current = currentScroll;

      // Calcul de la position relative par rapport à la fenêtre
      const viewportBottom = windowHeight;
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      
      const isEnteringFromTop = elementTop < viewportBottom && elementBottom > 0;
      const isSignificantlyVisible = (viewportBottom - elementTop) > 300;

      if (isEnteringFromTop && isSignificantlyVisible && !hasJustExited.current) {
        scrollTimeout = setTimeout(() => {
          document.body.style.overflow = 'hidden';
          sectionRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' });
          setIsActive(true);
          // On ne réinitialise plus la position des slides
          if (containerRef.current && currentSlide === 0) {
            containerRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
          }
        }, 50);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isActive, currentSlide]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isActive || isAnimating.current) {
        console.log('Scroll ignoré - isActive:', isActive, 'isAnimating:', isAnimating.current);
        return;
      }

      console.log('Scroll détecté - deltaY:', e.deltaY, 'currentSlide:', currentSlide);
      
      if (e.deltaY > 0 && currentSlide === chapters.length - 1) {
        console.log('Dernière slide, scroll vers le bas');
        e.preventDefault();
        navigateToSection('how-it-works');
        return;
      }
      
      if (e.deltaY < 0 && currentSlide === 0) {
        console.log('Première slide, scroll vers le haut');
        e.preventDefault();
        navigateToSection('hero');
        return;
      }

      e.preventDefault();
      setCurrentSlide(prev => {
        const next = e.deltaY > 0 
          ? Math.min(prev + 1, chapters.length - 1)
          : Math.max(prev - 1, 0);
        console.log('Navigation entre slides:', prev, '->', next);
        return next;
      });
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (!isActive) return;
      touchStart.current = event.touches[0].clientY;
      console.log('Touch start:', touchStart.current);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isActive || touchStart.current === null) return;

      const currentTouch = event.touches[0].clientY;
      const diff = touchStart.current - currentTouch;

      console.log('Touch move - diff:', diff, 'currentSlide:', currentSlide);

      if (Math.abs(diff) < 5) return;

      event.preventDefault();

      if (diff > 0 && currentSlide === chapters.length - 1) {
        console.log('Dernière slide, swipe vers le haut');
        navigateToSection('how-it-works');
      } else if (diff < 0 && currentSlide === 0) {
        console.log('Première slide, swipe vers le bas');
        navigateToSection('hero');
      } else {
        setCurrentSlide(prev => {
          const next = diff > 0 
            ? Math.min(prev + 1, chapters.length - 1)
            : Math.max(prev - 1, 0);
          console.log('Navigation entre slides (touch):', prev, '->', next);
          return next;
        });
      }

      touchStart.current = null;
    };

    if (isActive) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('touchstart', handleTouchStart, { passive: false });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isActive, currentSlide, chapters.length]);

  const renderChapter = (chapter: typeof chapters[0], index: number) => {
    const Icon = chapter.icon;
    return (
      <div
        key={index}
        className="min-w-full h-full flex flex-col items-center justify-center px-4 md:px-8 space-y-6 relative rounded-3xl"
      >
        <div className="absolute top-4 right-4 md:right-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
          <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300">
            <span>{index + 1}</span>
            <span className="mx-2">/</span>
            <span>{chapters.length}</span>
          </div>
        </div>

        {/* Instructions de scroll en haut pour desktop */}
        {index > 0 && (
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center space-y-2">
            <svg 
              className="w-6 h-6 text-gray-400 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Défiler vers le haut
            </span>
          </div>
        )}

        {/* Instructions de swipe en haut pour mobile */}
        {index > 0 && (
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 md:hidden">
            <div className="flex flex-col items-center space-y-2">
              <svg 
                className="w-6 h-6 text-gray-400 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Swiper vers le haut
              </span>
            </div>
          </div>
        )}

        {/* Contenu principal */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-8 mt-16">
          <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
            <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
            {chapter.title}
          </h2>
          
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl">
            {chapter.content}
          </p>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
          {/* Instructions de scroll pour desktop */}
          {index < chapters.length - 1 && (
            <div className="hidden md:flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Défiler vers le bas
              </span>
              <svg 
                className="w-6 h-6 text-gray-400 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          )}

          {/* Instructions de swipe pour mobile */}
          {index < chapters.length - 1 && (
            <div className="flex flex-col items-center space-y-2 md:hidden">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Swiper vers le bas
              </span>
              <svg 
                className="w-6 h-6 text-gray-400 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative w-full h-screen overflow-hidden rounded-3xl pt-20"
    >
      {/* Halo animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-theme-lighter via-theme-light to-theme-base dark:from-indigo-950 dark:via-gray-900 dark:to-gray-900 animate-gradient-slow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.3),rgba(99,102,241,0)_50%)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.2),rgba(99,102,241,0)_50%)] animate-pulse"></div>
      </div>

      {isActive && <ProgressIndicator current={currentSlide} total={chapters.length} />}
      <div
        ref={containerRef}
        className="relative w-full h-full flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {chapters.map((chapter, index) => (
          <div
            key={index}
            className="min-w-full h-full flex flex-col items-center justify-center px-4 md:px-8 space-y-6 relative"
          >
            <div className="absolute top-4 right-4 md:right-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
              <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300">
                <span>{index + 1}</span>
                <span className="mx-2">/</span>
                <span>{chapters.length}</span>
              </div>
            </div>

            {/* Instructions de scroll en haut pour desktop */}
            {index > 0 && (
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center space-y-2">
                <svg 
                  className="w-6 h-6 text-gray-400 animate-bounce" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Défiler vers le haut
                </span>
              </div>
            )}

            {/* Instructions de swipe en haut pour mobile */}
            {index > 0 && (
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 md:hidden">
                <div className="flex flex-col items-center space-y-2">
                  <svg 
                    className="w-6 h-6 text-gray-400 animate-bounce" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Swiper vers le haut
                  </span>
                </div>
              </div>
            )}

            {/* Contenu principal */}
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-8 mt-16">
              <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                <chapter.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
                {chapter.title}
              </h2>
              
              <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl">
                {chapter.content}
              </p>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
              {/* Instructions de scroll pour desktop */}
              {index < chapters.length - 1 && (
                <div className="hidden md:flex flex-col items-center space-y-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Défiler vers le bas
                  </span>
                  <svg 
                    className="w-6 h-6 text-gray-400 animate-bounce" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}

              {/* Instructions de swipe pour mobile */}
              {index < chapters.length - 1 && (
                <div className="flex flex-col items-center space-y-2 md:hidden">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Swiper vers le bas
                  </span>
                  <svg 
                    className="w-6 h-6 text-gray-400 animate-bounce" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
