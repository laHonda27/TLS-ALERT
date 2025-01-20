import React from 'react';
import { Timer, Ban, EuroIcon, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { WaveTransition } from '../components/WaveTransition';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.2 }
};

export function ProblemSection() {
  return (
    <Section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="relative"
          >
            {/* Élément décoratif */}
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-indigo-500/10 rounded-full blur-2xl" />
            
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-6 relative"
            >
              Pourquoi la prise de rendez-vous est un casse-tête ?
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-8">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Entre actualisations constantes et frais élevés, la prise de rendez-vous peut devenir un véritable parcours du combattant.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Timer,
                    title: "Des heures perdues à actualiser la page",
                    description: "Rafraîchissez sans cesse en espérant trouver un créneau disponible."
                  },
                  {
                    icon: Ban,
                    title: "Des créneaux qui disparaissent en quelques secondes",
                    description: "La concurrence pour les créneaux rend la réservation presque impossible."
                  },
                  {
                    icon: EuroIcon,
                    title: "Des frais élevés en passant par une agence",
                    description: "Les agences facturent des tarifs exorbitants pour peu de garanties."
                  },
                  {
                    icon: AlertTriangle,
                    title: "Manque de visibilité sur les créneaux disponibles",
                    description: "L'incertitude totale sur les créneaux disponibles complique vos démarches."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800/50 dark:hover:bg-gray-800/80 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                        <item.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {item.title}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-600 dark:text-gray-300 mt-8"
              >
                C'est face à ces défis que nous avons décidé de repenser l'expérience de prise de rendez-vous.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative lg:pl-8 hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Élément décoratif */}
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Personne stressée devant un ordinateur"
                className="w-full h-full object-cover absolute inset-0"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 dark:from-indigo-900/30 dark:to-purple-900/30"></div>
            </div>
          </motion.div>
        </div>
      </div>
      <WaveTransition />
    </Section>
  );
}
