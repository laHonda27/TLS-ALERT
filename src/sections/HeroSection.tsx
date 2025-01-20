import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Bell } from 'lucide-react';
import { Section } from '../components/Section';
import { AnimatedIcon } from '../components/AnimatedIcon';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { WaveTransition } from '../components/WaveTransition';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const listItemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 }
};

const bounceAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const particleVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function HeroSection() {
  const decorRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animation des vagues
      gsap.to(decorRef.current, {
        x: "-=54", // Déplacement vers la gauche
        ease: "sine.inOut",
        duration: 4,
        repeat: -1,
        stagger: {
          each: 0.5, // Décalage entre chaque vague
          repeat: -1
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section className="relative overflow-hidden">
      {/* Background Image avec overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="TLS Alerte Interface"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
            {/* Content Container */}
            <motion.div 
              className="w-full lg:w-1/2 text-center lg:text-left space-y-4"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              {/* Top Content */}
              <div>
                <h1 className="text-[2.75rem] sm:text-5xl lg:text-6xl xl:text-7xl title-primary leading-tight">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    Obtenez votre rendez-vous
                  </span>{' '}
                  <span className="text-slate-900 dark:text-white">
                    TLSContact sans stress
                  </span>
                </h1>

                {/* Subtitle */}
                <motion.p 
                  className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mt-6"
                  variants={fadeInUp}
                >
                  Simplifiez vos démarches avec un système rapide et intelligent qui travaille pour vous 24/7
                </motion.p>
              </div>

              {/* Key Points avec icônes animées */}
              <motion.div 
                className="space-y-2 text-left"
                initial="initial"
                animate="animate"
              >
                {[
                  {
                    icon: "bell",
                    text: "Notifications instantanées dès qu'un créneau se libère"
                  },
                  {
                    icon: "clock",
                    text: "Suivi en temps réel de la disponibilité"
                  },
                  {
                    icon: "calendar",
                    text: "Réservez votre rendez-vous en quelques clics"
                  }
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    variants={listItemVariants}
                    transition={{ delay: index * 0.2 }}
                    className="text-gray-700 dark:text-gray-300 flex items-start gap-3"
                  >
                    <AnimatedIcon icon={point.icon as any} />
                    <span className="flex-1 min-w-0">{point.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Trust Message */}
              <motion.p 
                className="text-sm text-gray-600 dark:text-gray-400 mt-2"
                variants={fadeInUp}
              >
                Rejoignez des milliers d'utilisateurs satisfaits dès aujourd'hui
              </motion.p>

              {/* CTA Buttons */}
              <div className="mt-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      to="/auth"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      Commencer maintenant
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </motion.div>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      to="/how-it-works"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 dark:bg-indigo-500/10 hover:bg-white/20 dark:hover:bg-indigo-500/20 text-indigo-600 dark:text-white border border-indigo-200 dark:border-indigo-500/30 font-semibold transition-all"
                    >
                      Comment ça marche ?
                    </Link>
                  </motion.div>
                </div>

                {/* Sign up message */}
                <motion.p 
                  className="text-sm text-gray-600 dark:text-gray-400 mt-3 text-center lg:text-left"
                  variants={fadeInUp}
                >
                  Inscrivez-vous en quelques secondes. C'est simple et rapide !
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Élément décoratif de transition avec vagues */}
      <WaveTransition />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-indigo-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            variants={particleVariants}
            animate="animate"
          />
        ))}
      </div>
    </Section>
  );
}
