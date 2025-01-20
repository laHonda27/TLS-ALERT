import React from 'react';
import { Bell, Zap, Clock, Shield } from 'lucide-react';
import { Section } from '../components/Section';
import { WaveTransition } from '../components/WaveTransition';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: Bell,
      title: 'Notifications instantanées',
      description: 'Soyez alerté dès qu\'un créneau se libère, où que vous soyez.',
    },
    {
      icon: Zap,
      title: 'Réaction rapide',
      description: 'Réservez votre créneau en quelques secondes avant qu\'il ne soit pris.',
    },
    {
      icon: Clock,
      title: 'Surveillance 24/7',
      description: 'Notre système vérifie les créneaux en continu, même pendant votre sommeil.',
    },
    {
      icon: Shield,
      title: 'Sécurisé',
      description: 'Vos données sont protégées et jamais partagées avec des tiers.',
    },
  ];

  return (
    <Section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Fonctionnalités
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Tout ce dont vous avez besoin pour obtenir votre rendez-vous plus facilement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <WaveTransition/>

    </Section>
  );
}
