import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SubscriptionSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    // Lancer les confettis
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const colors = ['#7C3AED', '#8B5CF6', '#C4B5FD'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    // Redirection automatique après 5 secondes
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
          </div>
          
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Félicitations !
          </h2>
          
          <p className="mt-4 text-lg text-gray-600">
            Votre compte a été créé avec succès !
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Un email de confirmation vous a été envoyé.
            Veuillez vérifier votre boîte mail pour activer votre compte.
          </p>
          
          <div className="mt-8 space-y-4">
            <p className="text-sm text-gray-500">
              Une fois votre email confirmé, vous pourrez accéder à votre tableau de bord.
            </p>
            
            <button
              onClick={() => navigate('/auth')}
              className="w-full flex justify-center items-center px-8 py-3 gradient-bg text-white rounded-xl hover:opacity-90 transition-all duration-200"
            >
              Se connecter
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}