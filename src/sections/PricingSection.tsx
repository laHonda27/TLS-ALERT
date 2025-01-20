import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ChevronDown } from 'lucide-react';
import { Section } from '../components/Section';
import { WaveTransition } from '../components/WaveTransition';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export function PricingSection() {
  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: "9.99",
      description: "Pour les besoins essentiels",
      features: [
        "Alertes par email",
        "Surveillance 24/7",
        "1 type de rendez-vous",
        "Support par email"
      ],
      cta: "Commencer",
      popular: false
    },
    {
      name: "Pro",
      price: "19.99",
      description: "Pour plus de flexibilité",
      features: [
        "Tout du forfait Basic",
        "Alertes SMS",
        "3 types de rendez-vous",
        "Support prioritaire"
      ],
      cta: "Commencer",
      popular: true
    },
    {
      name: "Premium",
      price: "29.99",
      description: "Pour les professionnels",
      features: [
        "Tout du forfait Pro",
        "Agent IA personnel",
        "Réservation automatique",
        "Support dédié 24/7"
      ],
      cta: "Commencer",
      popular: false
    }
  ];

  const [isOpenPricing, setOpenPricing] = useState(false);

  return (
    <Section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center mb-16">
          <div className="relative inline-flex flex-col items-center mb-12">
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#8257FF] mb-2 sm:mb-0">
                Nos forfaits
              </h2>
              <span className="inline-flex sm:absolute items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm whitespace-nowrap sm:-top-3 sm:-right-24">
                Sans engagement
              </span>
            </div>
          </div>
          <div className="space-y-2 relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 dark:from-indigo-400/10 dark:to-purple-400/10 blur-xl rounded-full" />
            <div className="relative text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-200 w-full px-8 py-8 backdrop-blur-sm rounded-2xl 
              border-2 border-gray-200/50 dark:border-white/10 shadow-lg
              text-center
              bg-white/50 dark:bg-gray-900/50">
              <p className="mb-10">
                <span className="block text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                  Choisissez l'offre qui correspond à vos besoins.
                </span>
                Une fois votre demande administrative terminée, vous pouvez arrêter votre abonnement à tout moment.
              </p>
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4">
                <ChevronDown className="w-6 h-6 text-[#8257FF] animate-bounce" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`
                  relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden
                  ${plan.popular ? 'ring-2 ring-[#8257FF]' : ''}
                `}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-3">
                    {plan.name}
                  </h3>
                  <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                    {plan.description}
                  </p>
                  
                  <div className="text-center mb-10">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}€</span>
                    {plan.price !== "Sur mesure" && <span className="text-gray-600 dark:text-gray-300">/mois</span>}
                  </div>

                  <ul className="space-y-5 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <Check className="w-5 h-5 text-[#8257FF] mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`
                      w-full py-3 px-4 rounded-lg font-medium transition-all duration-200
                      ${plan.popular 
                        ? 'bg-[#8257FF] text-white hover:bg-[#724BE5]' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                      }
                    `}
                  >
                    {plan.popular ? 'Choisir Pro' : `Choisir ${plan.name}`}
                  </button>
                </div>
                
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[#8257FF] text-white px-4 py-1 text-sm font-medium">
                    Populaire
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <WaveTransition/>

    </Section>
  );
}
