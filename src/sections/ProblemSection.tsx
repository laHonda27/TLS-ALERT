import React from 'react';
import { Timer, Clock, XCircle } from 'lucide-react';
import { SectionContainer } from '../components/SectionContainer';

export function ProblemSection() {
  return (
    <SectionContainer>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Fini les attentes interminables
          </h2>
          <div className="space-y-8">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Obtenir un rendez-vous TLSContact est souvent un véritable parcours du combattant.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <Timer className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Des heures passées à actualiser la page
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Des créneaux qui disparaissent en quelques secondes
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <Clock className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Un temps précieux perdu en surveillance
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:pl-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
              alt="Personne stressée devant un ordinateur"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 dark:from-indigo-900/30 dark:to-purple-900/30"></div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
