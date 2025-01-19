import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import { ArrowLeft, ArrowRight, CheckCircle2, CreditCard, Mail, User } from 'lucide-react';

type Plan = {
  id: string;
  name: string;
  price: string;
  features: string[];
};

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '9.99',
    features: [
      'Alertes par email',
      'Surveillance 24/7',
      '1 type de rendez-vous',
      'Support par email'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '19.99',
    features: [
      'Tout du forfait Basic',
      'Alertes SMS',
      '3 types de rendez-vous',
      'Support prioritaire'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '29.99',
    features: [
      'Tout du forfait Pro',
      'Agent IA personnel',
      'Réservation automatique',
      'Types illimités',
      'Support dédié 24/7'
    ]
  }
];

export default function Subscribe() {
  const [searchParams] = useSearchParams();
  const selectedPlanId = searchParams.get('plan') || 'basic';
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);

  const selectedPlan = plans.find(plan => plan.id === selectedPlanId) || plans[0];

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email.trim());
  };

  const validatePassword = (password: string) => {
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    
    if (password.length < minLength) {
      throw new Error(`Le mot de passe doit contenir au moins ${minLength} caractères`);
    }
    if (!hasUpperCase) {
      throw new Error('Le mot de passe doit contenir au moins une majuscule');
    }
    if (!hasNumber) {
      throw new Error('Le mot de passe doit contenir au moins un chiffre');
    }
    return true;
  };

  const handleNext = async () => {
    if (step === 1) {
      if (!fullName.trim()) {
        toast.error('Veuillez entrer votre nom complet');
        return;
      }
      if (!validateEmail(email)) {
        toast.error('Veuillez entrer une adresse email valide');
        return;
      }
      try {
        validatePassword(password);
      } catch (error) {
        toast.error(error.message);
        return;
      }
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      navigate('/');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Créer l'utilisateur avec Supabase
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth`,
          data: {
            full_name: fullName,
            subscription_plan: selectedPlan.id
          }
        }
      });

      if (signUpError) throw signUpError;

      // Afficher un message de succès
      toast.success(
        'Inscription réussie ! Veuillez vérifier votre boîte mail pour confirmer votre compte.',
        { duration: 6000 }
      );

      // Rediriger vers la page de succès
      navigate('/subscription-success');
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      toast.error(
        error.message === 'User already registered'
          ? 'Un compte existe déjà avec cette adresse email'
          : 'Une erreur est survenue lors de l\'inscription'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header avec progression */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={handleBack}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Retour
              </button>
              <div className="flex items-center space-x-4">
                <div className={`flex items-center ${step >= 1 ? 'text-indigo-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 1 ? 'bg-indigo-100' : 'bg-gray-100'
                  }`}>
                    <User className="h-5 w-5" />
                  </div>
                  <span className="ml-2 font-medium">Compte</span>
                </div>
                <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`} />
                <div className={`flex items-center ${step >= 2 ? 'text-indigo-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 2 ? 'bg-indigo-100' : 'bg-gray-100'
                  }`}>
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <span className="ml-2 font-medium">Paiement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Étape 1: Informations du compte */}
          {step === 1 && (
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Créez votre compte
                </h2>
                <p className="mt-2 text-gray-600">
                  Forfait sélectionné : {selectedPlan.name}
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="jean@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Mot de passe
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Au moins 6 caractères, une majuscule et un chiffre
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-8 py-3 gradient-bg text-white rounded-xl hover:opacity-90 transition-all duration-200"
                >
                  Continuer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          )}

          {/* Étape 2: Paiement */}
          {step === 2 && (
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Finaliser votre abonnement
                </h2>
                <p className="mt-2 text-gray-600">
                  Forfait {selectedPlan.name} - {selectedPlan.price}€/mois
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Récapitulatif de votre forfait
                </h3>
                <ul className="space-y-3">
                  {selectedPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-t border-gray-200 pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center items-center px-8 py-3 gradient-bg text-white rounded-xl hover:opacity-90 transition-all duration-200"
                  >
                    {loading ? 'Traitement en cours...' : 'Confirmer l\'abonnement'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}