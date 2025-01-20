import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '../components/SectionContainer';
import { Clock, Users, Lightbulb, Globe, ChevronDown } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

interface StoryCard {
  icon: React.ElementType;
  title: string;
  content: string;
  highlight: string;
  gradient: string;
  image: string;
}

export function StorySection() {
  const stories: StoryCard[] = [
    {
      icon: Clock,
      title: "Le Déclencheur",
      content: "Tout a commencé lors d'un renouvellement de titre de séjour. Des journées entières passées à actualiser frénétiquement la page TLSContact, l'angoisse grandissante face à l'expiration imminente du titre, et toujours aucun créneau disponible. Une situation stressante et chronophage que beaucoup connaissent trop bien.",
      highlight: "L'urgence d'agir",
      gradient: "from-pink-500 to-rose-500",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1470"
    },
    {
      icon: Users,
      title: "Le Constat",
      content: "En échangeant avec d'autres, la réalité est devenue évidente : des milliers de personnes vivaient le même cauchemar. Étudiants risquant de compromettre leur année, professionnels contraints de payer des sommes exorbitantes en agence, familles dans l'incertitude... Un problème systémique qui nécessitait une vraie solution.",
      highlight: "Une galère collective",
      gradient: "from-purple-500 to-indigo-500",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1469"
    },
    {
      icon: Lightbulb,
      title: "L'Innovation",
      content: "L'idée de TLS Alerte est née de ce besoin urgent : créer un système qui surveillerait automatiquement les créneaux 24h/24 et alerterait instantanément les utilisateurs. Plus besoin de rafraîchir manuellement, plus de stress, plus de temps perdu. Une solution technologique pour un problème humain.",
      highlight: "La technologie au service de tous",
      gradient: "from-amber-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1474"
    },
    {
      icon: Globe,
      title: "L'Ambition",
      content: "Aujourd'hui, TLS Alerte va au-delà de la simple notification. C'est un outil complet qui redonne le contrôle aux utilisateurs dans leurs démarches administratives. Notre vision ? Étendre cette solution à d'autres pays, car le droit à des services administratifs accessibles ne devrait pas être un luxe.",
      highlight: "Un impact durable",
      gradient: "from-emerald-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1472"
    }
  ];

  return (
    <SectionContainer className="overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.div 
            variants={fadeInUp}
            className="mb-20"
          >
            <h2 className="text-5xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Notre Histoire
              </span>
            </h2>
            <div className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 dark:from-indigo-400/10 dark:to-purple-400/10 blur-xl rounded-full" />
              <div className="relative text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-200 w-full px-8 py-6 backdrop-blur-sm rounded-2xl 
                border-2 border-gray-200/50 dark:border-white/10
                text-left lg:text-center
                bg-white/50 dark:bg-gray-900/50">
                <p>
                  <span className="block text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-3">De la frustration à l'innovation :</span>
                  <span className="text-xl">Decrouvrez ici pourquoi nous avons mis en place cette solution innovante pour ne plus manquer de rendez-vous</span>
                </p>
                <motion.div 
                  className="flex justify-center mt-6"
                  initial={{ y: 0 }}
                  animate={{ y: 10 }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <ChevronDown className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="max-w-7xl mx-auto">
              {/* Container principal avec padding pour la ligne */}
              <div className="relative pl-8 lg:pl-0">
                {/* Ligne de timeline */}
                <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

                {/* Contenu */}
                <div className="space-y-12 lg:space-y-32">
                  {stories.map((story, index) => {
                    const Icon = story.icon;
                    const isEven = index % 2 === 0;
                    
                    return (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="relative"
                      >
                        {/* Point de timeline */}
                        <div className="absolute left-[-4px] lg:left-1/2 top-[28px] lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-2 h-2 lg:w-3 lg:h-3">
                          <div className={`w-full h-full rounded-full bg-gradient-to-r ${story.gradient}`} />
                        </div>

                        {/* Grid container */}
                        <div className={`ml-8 lg:ml-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                          {/* Contenu */}
                          <div className={`relative p-6 lg:p-8 rounded-2xl transition-all duration-300 
                            dark:bg-gray-800/80 dark:hover:bg-gray-800/95 
                            bg-gray-50/80 hover:bg-gray-100/95 
                            backdrop-blur-sm border border-white/10 dark:border-white/5
                            ${isEven ? '' : 'lg:col-start-2'}`}>
                            <div className={`flex items-center gap-4 mb-6 flex-wrap ${isEven ? 'lg:justify-end' : ''}`}>
                              <div className={`p-3 rounded-xl bg-gradient-to-r ${story.gradient}`}>
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100">
                                {story.title}
                              </h3>
                            </div>
                            <div className={`space-y-4 ${isEven ? 'lg:text-right' : ''}`}>
                              <p className="text-lg text-gray-600 dark:text-gray-300">
                                {story.content}
                              </p>
                              <span className={`inline-block py-1.5 px-4 rounded-full text-sm font-medium bg-gradient-to-r ${story.gradient} text-white`}>
                                {story.highlight}
                              </span>
                            </div>
                          </div>

                          {/* Image */}
                          <div className={`relative group ${isEven ? 'lg:col-start-2' : ''}`}>
                            <div className="absolute inset-0 bg-gradient-to-r opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                              style={{
                                backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                                '--tw-gradient-from': `var(--tw-${story.gradient.split(' ')[0]})`,
                                '--tw-gradient-to': `var(--tw-${story.gradient.split(' ')[2]})`
                              }}
                            />
                            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-300">
                              <img 
                                src={story.image} 
                                alt={story.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
