import { motion } from 'framer-motion';
import { Clock, Calendar, Bell, Shield } from 'lucide-react';

interface AnimatedIconProps {
  icon: 'clock' | 'calendar' | 'bell' | 'shield';
  className?: string;
}

const iconComponents = {
  clock: Clock,
  calendar: Calendar,
  bell: Bell,
  shield: Shield,
};

export function AnimatedIcon({ icon, className = '' }: AnimatedIconProps) {
  const IconComponent = iconComponents[icon];

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [0.8, 1.1, 1],
        opacity: 1
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className={`text-indigo-500/80 dark:text-indigo-400/80 ${className}`}
    >
      <IconComponent className="w-5 h-5" />
    </motion.div>
  );
}
