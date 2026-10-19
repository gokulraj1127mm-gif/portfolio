import React from 'react';
import { motion } from 'framer-motion';

const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Editorial Grid Texture */}
      <div className="absolute inset-0 bg-editorial-grid opacity-70" />

      {/* Atmospheric Emerald Light Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.07] blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-emerald-600/[0.06] blur-[150px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] rounded-full bg-teal-600/[0.05] blur-[160px]"
      />

      {/* Subtle Editorial Technical Crosshairs & Corner Accents */}
      <div className="absolute top-24 left-8 text-emerald-500/10 font-mono text-xs select-none">
        + 12.9716° N, 77.5946° E
      </div>
      <div className="absolute top-24 right-8 text-emerald-500/10 font-mono text-xs select-none hidden md:block">
        // SYSTEM_READY: OK
      </div>
    </div>
  );
};

export default FloatingIcons;
