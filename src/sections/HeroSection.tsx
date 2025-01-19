import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell, Shield, Clock, Users } from 'lucide-react';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => (
  <div className="card flex items-center space-x-2 p-3">
    <Icon className="w-5 h-5 text-primary-500" />
    <div>
      <div className="text-primary font-bold">{value}</div>
      <div className="text-xs text-muted">{label}</div>
    </div>
  </div>
);

export function HeroSection() {
  return (
    <Section className='relative py-2 sm:py-4'>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-2 sm:space-y-4 lg:space-y-2">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100/50 dark:bg-primary-900/20 backdrop-blur-sm"
            >
              <Bell className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-400">
                Ne manquez plus jamais un rendez-vous
              </span>
            </motion.div>

            {/* Main content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl title-primary leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  Obtenez votre rendez-vous
                </span>{' '}
                <span className="text-primary">
                  TLSContact sans stress
                </span>
              </h1>

              <p className="text-xl text-secondary max-w-xl">
                Notre système de notification intelligent vous alerte instantanément dès qu'un créneau se libère. Simplifiez votre processus de réservation.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4 my-8">
                <StatCard icon={Users} value="10,000+" label="Utilisateurs actifs" />
                <StatCard icon={Clock} value="24/7" label="Surveillance active" />
                <StatCard icon={Shield} value="100%" label="Sécurisé" />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/auth"
                    className="btn-primary"
                  >
                    Commencer maintenant
                    <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/how-it-works"
                    className="btn-secondary"
                  >
                    Comment ça marche ?
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative lg:block"
          >
             <img
                src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="TLS Alerte Interface"
                className="w-full h-full object-cover"
              />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
