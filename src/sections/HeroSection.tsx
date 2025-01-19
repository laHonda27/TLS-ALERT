import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { AnimatedIcon } from '../components/AnimatedIcon';
import { motion, AnimatePresence } from 'framer-motion';

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
  return (
    <section id="hero" className="relative min-h-[100vh] lg:min-h-[100vh] overflow-hidden lg:pt-28">
      {/* Background Image avec overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="TLS Alerte Interface"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative w-full h-full flex flex-col justify-between">
        <div className="flex-1 flex items-stretch">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16 h-full">
              {/* Content Container */}
              <motion.div 
                className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-between h-full py-8 lg:py-0"
                initial="initial"
                animate="animate"
                variants={fadeInUp}
              >
                {/* Top Content */}
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-500 bg-clip-text text-transparent">
                      Obtenez votre rendez-vous TLSContact sans stress
                    </span>
                  </h1>

                  {/* Nouvelle phrase d'accroche comparative */}
                  <motion.p 
                    className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mt-4 font-medium"
                    variants={fadeInUp}
                  >
                    Plus rapide qu'une agence. Plus simple qu'un appel.
                  </motion.p>

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
                  className="space-y-4 sm:space-y-6 text-left mt-12"
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
                  className="text-sm text-gray-600 dark:text-gray-400 mt-8"
                  variants={fadeInUp}
                >
                  Rejoignez des milliers d'utilisateurs satisfaits dès aujourd'hui
                </motion.p>

                {/* CTA Buttons */}
                <div className="mt-12">
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
      </div>

      {/* Scroll Indicator - Outside of the main content grid */}
      <div className="absolute bottom-7 left-0 right-0">
        <motion.div 
          className="flex flex-col items-center"
          animate={bounceAnimation}
        >
          <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          <span className="text-xs text-gray-600 dark:text-gray-400">Faites défiler pour en savoir plus</span>
        </motion.div>
      </div>
    </section>
  );
}
