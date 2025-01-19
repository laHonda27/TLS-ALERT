import React from 'react';
import { motion } from 'framer-motion';
import { Euro, Shield, Clock, Eye, Lock, Zap, ArrowRight } from 'lucide-react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { SectionContainer } from '../components/SectionContainer';
import { Link } from 'react-router-dom';

interface ComparisonItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const CTAButtons = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${className}`}>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
    >
      Essayez notre service
      <ArrowRight className="w-5 h-5" />
    </motion.button>
    <Link to="/features" className="w-full sm:w-auto">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-white/10 dark:bg-indigo-500/20 hover:bg-white/20 dark:hover:bg-indigo-500/30 text-indigo-600 dark:text-white px-8 py-3 rounded-xl font-semibold transition-all border border-indigo-200 dark:border-white/20 hover:border-indigo-300 dark:hover:border-white/40"
      >
        Découvrir nos fonctionnalités
      </motion.button>
    </Link>
  </div>
);

export function ComparisonSection() {
  const comparisonData: {
    traditional: ComparisonItem[];
    ourService: ComparisonItem[];
  } = {
    traditional: [
      {
        icon: Euro,
        title: "Coût élevé",
        description: "Des tarifs excessifs pour un service basique"
      },
      {
        icon: Shield,
        title: "Manque de transparence",
        description: "Aucune garantie sur les processus utilisés"
      },
      {
        icon: Eye,
        title: "Aucune visibilité",
        description: "Pas d'information sur la file d'attente"
      },
      {
        icon: Clock,
        title: "Temps d'attente variable",
        description: "Délais imprévisibles et souvent longs"
      },
      {
        icon: Lock,
        title: "Dépendance",
        description: "Recours à des contacts privilégiés"
      }
    ],
    ourService: [
      {
        icon: Euro,
        title: "Coût abordable",
        description: "Un tarif juste pour un service premium"
      },
      {
        icon: Shield,
        title: "Transparence totale",
        description: "Processus clair et éthique"
      },
      {
        icon: Eye,
        title: "Informations en temps réel",
        description: "Suivi en direct de votre position"
      },
      {
        icon: Clock,
        title: "Rapidité garantie",
        description: "Optimisation automatique des délais"
      },
      {
        icon: Zap,
        title: "100% indépendant",
        description: "Service automatisé et équitable"
      }
    ]
  };

  return (
    <SectionContainer className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-500 dark:via-purple-500 dark:to-indigo-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Pourquoi choisir notre service ?
          </h2>
      
        </motion.div>

        {/* CTA Section au-dessus des comparaisons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-16"
        >
          <div className="relative bg-white/95 dark:bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-white/10 dark:to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
                Faites le choix d'un service rapide, transparent, et abordable.
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-white/90 mb-8">
                Oubliez les complications avec les agences.
              </p>
              <CTAButtons />
            </div>
          </div>
          {/* Ligne décorative en bas */}
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-y-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 relative">
          {/* Notre Service */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group bg-white/95 dark:bg-white/10 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-white/10 dark:to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                Notre Service
              </h3>
              <div className="space-y-8">
                {comparisonData.ourService.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={`our-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 group/item"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-white/20 rounded-xl flex items-center justify-center text-indigo-600 dark:text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                        <p className="text-gray-600 dark:text-white/80 text-sm">{item.description}</p>
                      </div>
                      <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 dark:bg-emerald-500/20 rounded-full">
                        <FaCheck className="text-emerald-600 dark:text-emerald-400" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Services Agences */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group bg-white/95 dark:bg-white/10 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 dark:from-white/10 dark:to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                Services Agences
              </h3>
              <div className="space-y-8">
                {comparisonData.traditional.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={`trad-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 group/item"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-white/20 rounded-xl flex items-center justify-center text-red-600 dark:text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                        <p className="text-gray-600 dark:text-white/80 text-sm">{item.description}</p>
                      </div>
                      <div className="flex items-center justify-center w-8 h-8 bg-red-100 dark:bg-red-500/20 rounded-full">
                        <FaTimes className="text-red-600 dark:text-red-400" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
