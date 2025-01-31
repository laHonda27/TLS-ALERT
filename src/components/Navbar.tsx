import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Bell } from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/');
      toast.success('Déconnexion réussie');
    } catch (error) {
      toast.error('Erreur lors de la déconnexion');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-1.5 sm:space-x-2">
              <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
              <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent whitespace-nowrap">
                TLS Alerte
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <ThemeToggle />
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                >
                  Tableau de bord
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth"
                  className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 whitespace-nowrap"
                >
                  Connexion
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}