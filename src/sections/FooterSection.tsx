import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { SectionContainer } from '../components/SectionContainer';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { name: 'Fonctionnalités', href: '/features' },
      { name: 'Tarifs', href: '/pricing' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Témoignages', href: '/testimonials' }
    ],
    company: [
      { name: 'À propos', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Carrières', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    legal: [
      { name: 'Conditions d\'utilisation', href: '/terms' },
      { name: 'Politique de confidentialité', href: '/privacy' },
      { name: 'Mentions légales', href: '/legal' }
    ],
    social: [
      { name: 'Facebook', icon: Facebook, href: '#' },
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'Instagram', icon: Instagram, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: '#' }
    ]
  };

  return (
    <SectionContainer className="mt-24">
      <footer className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 py-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Produit</h3>
              <ul className="space-y-2">
                {links.product.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Entreprise</h3>
              <ul className="space-y-2">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Légal</h3>
              <ul className="space-y-2">
                {links.legal.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                {links.social.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{link.name}</span>
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-white/10 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  TLS Alerte
                </span>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-300">
                &copy; {currentYear} TLS Alerte. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </SectionContainer>
  );
}
