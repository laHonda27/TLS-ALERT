import React from 'react';
import Wave from 'react-wavify';

interface WaveTransitionProps {
  className?: string;
  offsetY?: number;
}

export function WaveTransition({ className = '', offsetY = 0 }: WaveTransitionProps) {
  return (
    <div className={`absolute -bottom-1 left-1/2 w-[200%] -translate-x-1/2 ${className}`} style={{ transform: `translate(-50%, ${offsetY}px)` }}>
      <Wave
        fill="#6366F1"
        paused={false}
        options={{
          height: 10,
          amplitude: 15,
          speed: 0.15,
          points: 5
        }}
        className="absolute bottom-0 opacity-20 dark:opacity-40"
        style={{ transform: 'translateY(50%)' }}
      />
      <Wave
        fill="#9333EA"
        paused={false}
        options={{
          height: 8,
          amplitude: 20,
          speed: 0.2,
          points: 5
        }}
        className="absolute bottom-0 opacity-30 dark:opacity-60"
        style={{ transform: 'translateY(70%)' }}
      />
      <Wave
        fill="#EC4899"
        paused={false}
        options={{
          height: 12,
          amplitude: 25,
          speed: 0.25,
          points: 5
        }}
        className="absolute bottom-0 opacity-20 dark:opacity-40"
        style={{ transform: 'translateY(90%)' }}
      />
    </div>
  );
}