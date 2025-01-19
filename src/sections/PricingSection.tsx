import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Section } from '../components/Section';

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

  return (
    <Section className="py-24">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#8257FF] mb-4">
            Nos forfaits
          </h2>
          <div className="space-y-2">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choisissez l'offre qui correspond à vos besoins.
            </p>
            <p className="text-lg font-bold text-gray-800 dark:text-white">
              Une fois votre demande administrative terminée, vous pouvez arrêter votre abonnement à tout moment. <br className="hidden sm:block"/>
            </p>
            <p className="font-bold text-xl text-[#8257FF] dark:text-[#8257FF]">
              Sans engagement.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden
                ${plan.popular ? 'ring-2 ring-[#8257FF]' : ''}
              `}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>
                
                <div className="text-center mb-8">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}€</span>
                  {plan.price !== "Sur mesure" && <span className="text-gray-600 dark:text-gray-300">/mois</span>}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="w-5 h-5 text-[#8257FF] mr-2" />
                      {feature}
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
                <div className="absolute top-0 right-0 bg-[#8257FF] text-white px-4 py-1 text-sm">
                  Populaire
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
