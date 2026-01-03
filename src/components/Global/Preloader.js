import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-pureBlack flex flex-col items-center justify-center"
        >
          {/* Central Luxury Branding */}
          <div className="relative mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-24 h-24 bg-gold-gradient rounded-sm flex items-center justify-center font-black text-black text-4xl shadow-gold-glow relative z-10"
            >
              AK
            </motion.div>
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-goldMetallic/20 blur-[60px] rounded-full"></div>
          </div>

          {/* Progress Metrics */}
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-goldMetallic font-black text-6xl tracking-tighter mb-2 italic"
            >
              {progress}%
            </motion.p>
            <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute top-0 left-0 h-full bg-gold-gradient"
              ></motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-silverChrome text-[10px] font-bold uppercase tracking-[0.5em] mt-6"
            >
              Initializing Intelligence Systems
            </motion.p>
          </div>

          {/* Location Identifier */}
          <div className="absolute bottom-10">
            <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.4em]">
              Bhubaneswar, Odisha | 2026
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;