import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

export default function Auth() {
  const [searchParams] = useSearchParams();
  const [isSignUp, setIsSignUp] = useState(searchParams.get('signup') === 'true');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const checkUserExists = async (email: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id')
        .single();

      if (error && !error.message.includes('No rows found')) {
        throw error;
      }

      return !!data;
    } catch (error) {
      console.error('Error checking user:', error);
      return false;
    }
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

  const getErrorMessage = (error: any) => {
    if (error.message.includes('email_address_invalid') || error.message.includes('is invalid')) {
      return 'Adresse email invalide. Veuillez entrer une adresse email valide';
    }
    if (error.message === 'Invalid login credentials') {
      return 'Email ou mot de passe incorrect';
    }
    if (error.message.includes('Email not confirmed')) {
      return 'Email non confirmé. Veuillez vérifier votre boîte mail';
    }
    if (error.message.includes('User already registered')) {
      return 'Un compte existe déjà avec cette adresse email';
    }
    if (error.message.includes('Email link is invalid or has expired')) {
      return 'Le lien de confirmation est invalide ou a expiré';
    }
    if (error.message.includes('Password should be at least')) {
      return 'Le mot de passe doit contenir au moins 6 caractères';
    }
    if (error.message.includes('Email not confirmed')) {
      return 'Email non confirmé. Veuillez vérifier votre boîte mail';
    }
    if (error.message.includes('User already registered')) {
      return 'Un compte existe déjà avec cette adresse email';
    }
    if (error.message.includes('Email link is invalid or has expired')) {
      return 'Le lien de confirmation est invalide ou a expiré';
    }
    return error.message;
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email.trim());
  };

  useEffect(() => {
    setIsSignUp(searchParams.get('signup') === 'true');
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmail(email.trim());

    if (!validateEmail(email)) {
      toast.error('Veuillez entrer une adresse email valide');
      return;
    }

    setLoading(true);

    try {
      validatePassword(password);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
      return;
    }

    if (isSignUp) {
      const userExists = await checkUserExists(email);
      if (userExists) {
        toast.error('Un compte existe déjà avec cette adresse email');
        setLoading(false);
        return;
      }
    }

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth`,
            data: {
              email: email,
            }
          }
        });
        if (error) throw error;
        toast.success('Un email de confirmation vous a été envoyé. Veuillez vérifier votre boîte mail pour activer votre compte.');
        navigate('/auth');
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast.success('Connexion réussie');
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    const newMode = !isSignUp;
    setIsSignUp(newMode);
    navigate(`/auth${newMode ? '?signup=true' : ''}`);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isSignUp ? 'Créer un compte' : 'Se connecter'}
          </h2>
          <h2 className="mt-2 text-center text-sm text-gray-600">
            {isSignUp ? 'Déjà inscrit ?' : 'Pas encore de compte ?'} <button onClick={toggleMode} className="font-medium text-indigo-600 hover:text-indigo-500">{isSignUp ? 'Se connecter' : "S'inscrire"}</button>
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Adresse email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="exemple@domaine.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                minLength={6}
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? 'Chargement...' : isSignUp ? 'Créer un compte' : 'Se connecter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}