import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '../components/SectionContainer';
import { FaFlag } from 'react-icons/fa';
import { NewsletterModal } from '../components/NewsletterModal';

interface CountryInfo {
  name: string;
  flag: string;
  status: 'active' | 'coming-soon';
  description: string;
}

const countries: CountryInfo[] = [
  {
    name: 'Tunisie',
    flag: '/flags/tunisia.png',
    status: 'active',
    description: 'Notre système est entièrement fonctionnel pour les demandes en Tunisie.'
  },
  {
    name: 'Maroc',
    flag: '/flags/morocco.png',
    status: 'coming-soon',
    description: 'Bientôt disponible !'
  },
  {
    name: 'Algérie',
    flag: '/flags/algeria.png',
    status: 'coming-soon',
    description: 'Bientôt disponible !'
  }
];

const CountryCard: React.FC<CountryInfo> = ({ name, flag, status, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`flex flex-col items-center p-6 rounded-2xl ${
      status === 'active'
        ? 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-2 border-indigo-200 dark:border-indigo-700'
        : 'bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-gray-700'
    }`}
  >
    <div className="w-24 h-24 mb-4 relative">
      <img
        src={flag}
        alt={`Drapeau ${name}`}
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      {status === 'coming-soon' && (
        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm font-medium px-2 py-1 bg-indigo-600 rounded">
            Bientôt
          </span>
        </div>
      )}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
  </motion.div>
);

export const CountrySection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SectionContainer className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Actuellement disponible en Tunisie
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Nous sommes fiers de vous proposer un service d'alerte fiable et rapide en Tunisie,
          avec des plans d'expansion pour mieux servir l'Afrique du Nord.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {countries.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-indigo-900/40 rounded-2xl p-8 shadow-lg dark:shadow-indigo-900/20 border border-indigo-100 dark:border-indigo-800"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Restez informés des prochaines étapes !
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Inscrivez-vous à notre newsletter pour être averti dès que votre pays est pris en charge.
        </p>
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
        >
          <FaFlag className="w-5 h-5" />
          S'inscrire à la newsletter
        </motion.button>
      </motion.div>

      <NewsletterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </SectionContainer>
  );
};
