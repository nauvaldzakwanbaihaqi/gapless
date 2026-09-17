'use client';

import { motion } from 'motion/react';
import { useMemo } from 'react';

const COLORS = ['#FFD700', '#3B82F6', '#10B981', '#EC4899', '#8B5CF6', '#F59E0B', '#06B6D4'];

export function ConfettiEffect({ count = 50 }: { count?: number }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 600,
      y: -(Math.random() * 350 + 150),
      rot: Math.random() * 720 - 360,
      scale: Math.random() * 0.6 + 0.6,
      color: COLORS[i % COLORS.length],
      delay: Math.random() * 0.2,
      duration: Math.random() * 1.5 + 1.8,
      size: Math.random() > 0.5 ? 'rect' : 'circle',
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-50">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 1, x: 0, y: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [1, 1, 0],
            x: p.x,
            y: [0, p.y, p.y + 400],
            scale: [0, p.scale, p.scale * 0.8],
            rotate: p.rot,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            position: 'absolute',
            width: p.size === 'rect' ? 10 : 8,
            height: p.size === 'rect' ? 14 : 8,
            backgroundColor: p.color,
            borderRadius: p.size === 'circle' ? '50%' : '2px',
          }}
        />
      ))}
    </div>
  );
}
