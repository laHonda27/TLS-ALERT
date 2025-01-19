import React from 'react';
import { Bell, Zap, Calendar } from 'lucide-react';

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
}

export function HowItWorksSection() {
  const steps: Step[] = [
    {
      icon: Bell,
      title: "Configurez vos alertes",
      description: "Indiquez vos préférences de dates et le type de rendez-vous souhaité."
    },
    {
      icon: Zap,
      title: "Recevez des notifications",
      description: "Soyez alerté instantanément dès qu'un créneau correspondant à vos critères se libère."
    },
    {
      icon: Calendar,
      title: "Réservez votre rendez-vous",
      description: "Cliquez sur le lien dans la notification pour accéder directement au créneau disponible."
    }
  ];

  return (
    <section id="how-it-works" className="relative py-16 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Comment ça marche ?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Un processus simple en trois étapes pour obtenir votre rendez-vous
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
