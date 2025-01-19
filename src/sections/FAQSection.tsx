import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionContainer } from '../components/SectionContainer';

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Comment fonctionne TLS Alerte ?",
      answer: "TLS Alerte surveille en continu les créneaux disponibles sur le site TLSContact. Dès qu'un créneau se libère, vous recevez une notification instantanée par email ou SMS selon votre abonnement."
    },
    {
      question: "Combien de créneaux puis-je surveiller simultanément ?",
      answer: "Cela dépend de votre abonnement. Le plan gratuit permet de surveiller un créneau à la fois, tandis que le plan Pro permet d'en surveiller jusqu'à 5 simultanément."
    },
    {
      question: "Les notifications sont-elles vraiment instantanées ?",
      answer: "Oui ! Notre système vérifie les créneaux en temps réel et vous notifie immédiatement dès qu'une place se libère, vous donnant ainsi les meilleures chances d'obtenir le rendez-vous."
    },
    {
      question: "Puis-je choisir le type de notification ?",
      answer: "Absolument ! Vous pouvez choisir de recevoir les notifications par email (disponible sur tous les plans) ou par SMS (disponible sur les plans Pro et Entreprise)."
    }
  ];

  return (
    <SectionContainer className="overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Questions fréquentes
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300">
            Tout ce que vous devez savoir sur TLS Alerte
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-sm bg-white/5 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full p-4 sm:p-6 text-left flex justify-between items-center gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-gray-600 dark:text-gray-300 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-4 sm:p-6 pt-0 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
