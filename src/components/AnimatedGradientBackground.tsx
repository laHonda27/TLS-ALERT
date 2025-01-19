import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export function AnimatedGradientBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 -z-10">
      {/* Base gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        isDark 
          ? 'from-gray-900 via-indigo-950 to-purple-900'
          : 'from-gray-50 via-indigo-50 to-purple-50'
      }`} />
      
      {/* Animated gradient overlays */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: isDark ? 0.5 : 0.3
        }}
        animate={{
          background: [
            `radial-gradient(circle at 0% 0%, ${isDark ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.2)'} 0%, transparent 50%)`,
            `radial-gradient(circle at 100% 100%, ${isDark ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.2)'} 0%, transparent 50%)`,
            `radial-gradient(circle at 0% 0%, ${isDark ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.2)'} 0%, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: `linear-gradient(180deg, ${
              isDark 
                ? 'rgba(99,102,241,0.3) 0%, rgba(168,85,247,0.3)'
                : 'rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.2)'
            } 100%)`,
          }}
          animate={{
            x: ['-25%', '25%', '-25%'],
            y: ['-25%', '15%', '-25%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute right-0 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: `linear-gradient(180deg, ${
              isDark 
                ? 'rgba(168,85,247,0.3) 0%, rgba(99,102,241,0.3)'
                : 'rgba(168,85,247,0.2) 0%, rgba(99,102,241,0.2)'
            } 100%)`,
          }}
          animate={{
            x: ['25%', '-15%', '25%'],
            y: ['25%', '-25%', '25%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-0 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: `linear-gradient(180deg, ${
              isDark 
                ? 'rgba(139,92,246,0.3) 0%, rgba(99,102,241,0.3)'
                : 'rgba(139,92,246,0.2) 0%, rgba(99,102,241,0.2)'
            } 100%)`,
          }}
          animate={{
            x: ['-25%', '25%', '-25%'],
            y: ['15%', '-15%', '15%'],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Subtle noise overlay */}
      <div 
        className={`absolute inset-0 ${isDark ? 'opacity-[0.015]' : 'opacity-[0.02]'}`}
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }} 
      />
    </div>
  );
}
