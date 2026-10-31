import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // Disable scrolling when preloader is active
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#ff2a2a] overflow-hidden"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 1.0, ease: [0.85, 0, 0.15, 1], delay: 0.3 }
      }}
      onAnimationComplete={() => {
        if (onComplete) onComplete();
      }}
    >
      {/* Logo container */}
      <motion.div 
        className="relative flex items-center justify-center select-none"
        exit={{ 
          scale: 0.85, 
          opacity: 0,
          transition: { duration: 0.7, ease: [0.85, 0, 0.15, 1] } 
        }}
      >
        {/* Background Layer - Dark semi-transparent text */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-display tracking-tight text-black/15 uppercase">
          Dhanush Ragul.
        </h1>

        {/* Foreground Layer - White text with clip-path water fill animation */}
        <motion.h1 
          className="absolute text-4xl sm:text-6xl md:text-8xl font-black font-display tracking-tight text-white uppercase"
          style={{ WebkitUserSelect: 'none' }}
          initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
          animate={{ 
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
          }}
          transition={{ 
            duration: 1.6, 
            ease: [0.76, 0, 0.24, 1], 
            delay: 0.2 
          }}
        >
          Dhanush Ragul.
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
