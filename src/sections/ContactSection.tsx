import React, { useState } from 'react';
import { Section } from '../components/Section';
import { HelpCircle, Users, MessageCircle, Send } from 'lucide-react';
import toast from 'react-hot-toast';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simuler un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Réinitialiser le formulaire
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Afficher un message de succès
      toast.success('Message envoyé avec succès !');
    } catch (error) {
      toast.error('Une erreur est survenue lors de l\'envoi du message.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Section>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Entrons en contact !
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Un projet en tête ? Une question ? Notre équipe est là pour vous accompagner. Écrivez-nous et nous reviendrons vers vous sous 24h.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Pourquoi nous contacter ?
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Support technique</h3>
                  <p className="text-gray-600 dark:text-gray-300">Des questions sur l'utilisation de notre service ? (Réservé aux abonnés)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                    <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Partenariat</h3>
                  <p className="text-gray-600 dark:text-gray-300">Envie de collaborer avec nous ?</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Suggestions</h3>
                  <p className="text-gray-600 dark:text-gray-300">Des idées pour améliorer notre service ?</p>
                </div>
              </div>

              <div className="mt-8 p-4 sm:p-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-2">Réponse rapide garantie</h3>
                <p>Notre équipe s'engage à vous répondre sous 24h ouvrées. Votre satisfaction est notre priorité !</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-200 dark:border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-200 dark:border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-200 dark:border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-900 dark:text-white"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="support">Support technique</option>
                  <option value="partnership">Partenariat</option>
                  <option value="suggestion">Suggestions</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-200 dark:border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-900 dark:text-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg transition-all duration-200"
              >
                Envoyer le message
                <Send className="ml-2 h-5 w-5 inline" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
