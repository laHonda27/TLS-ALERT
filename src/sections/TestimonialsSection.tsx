import React from 'react';
import { Star } from 'lucide-react';
import { Section } from '../components/Section';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  rating: number;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      content: "Grâce à TLS Alerte, j'ai obtenu mon rendez-vous en moins d'une semaine. Le système de notification est vraiment efficace !",
      author: "Marie L.",
      role: "Étudiante",
      rating: 5
    },
    {
      content: "Un service indispensable qui m'a fait gagner un temps précieux. Je le recommande vivement à tous ceux qui cherchent un rendez-vous.",
      author: "Thomas D.",
      role: "Entrepreneur",
      rating: 5
    },
    {
      content: "Interface intuitive et notifications instantanées. Exactement ce dont j'avais besoin pour ne pas manquer les créneaux disponibles.",
      author: "Sophie M.",
      role: "Professionnelle",
      rating: 5
    }
  ];

  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ce que disent nos utilisateurs
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Découvrez les expériences de ceux qui ont déjà utilisé notre service
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg">
                {testimonial.rating} <Star className="w-4 h-4 ml-1 fill-current" />
              </div>
            </div>

            <blockquote>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "{testimonial.content}"
              </p>
              <footer>
                <div className="font-medium text-gray-900 dark:text-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </div>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>
    </Section>
  );
}
