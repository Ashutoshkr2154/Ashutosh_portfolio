import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[11000] flex items-center justify-center px-6">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-pureBlack/90 backdrop-blur-md"
          ></motion.div>

          {/* Luxury Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-neutral-900 border border-goldMetallic/20 rounded-2xl overflow-hidden shadow-gold-glow"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-silverChrome hover:text-goldMetallic transition-colors z-20"
            >
              ✕
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Left Sidebar: Academic Proof */}
              <div className="lg:w-1/3 bg-white/5 p-10 border-r border-white/5">
                <h3 className="text-goldMetallic font-black text-xs tracking-[0.4em] uppercase mb-10">
                  Academic Proof
                </h3>
                <div className="mb-12">
                  <p className="text-white font-black text-5xl tracking-tighter mb-2">8.81</p>
                  <p className="text-goldMetallic text-[9px] font-bold uppercase tracking-[0.3em]">
                    Cumulative CGPA
                  </p>
                </div>
                <div className="space-y-8">
                  <div>
                    <p className="text-white font-bold text-xs uppercase tracking-widest mb-1">
                      B.Tech in CS & DS
                    </p>
                    <p className="text-slate-500 text-[10px] uppercase font-bold">
                      GITA Autonomous College
                    </p>
                    <p className="text-silverDark text-[9px] uppercase tracking-widest mt-1">
                      2022 - 2026
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs uppercase tracking-widest mb-1">
                      Higher Secondary
                    </p>
                    <p className="text-slate-500 text-[10px] uppercase font-bold">
                      SJ DAV Public School
                    </p>
                    <p className="text-silverDark text-[9px] uppercase tracking-widest mt-1">
                      Percentage: 64.6%
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Credential Matrix */}
              <div className="lg:w-2/3 p-10">
                <h3 className="text-goldMetallic font-black text-xs tracking-[0.4em] uppercase mb-10">
                  Specialization Matrix
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Data Science Masters - PW Skills",
                    "GenAI & Agentic AI - Euron",
                    "Data Analytics - PW Skills",
                    "AI Power Course - PW Skills",
                    "GenAI Bootcamp - Euron",
                    "AI Project - Neural Row"
                  ].map((cert, idx) => (
                    <div 
                      key={idx}
                      className="p-4 bg-white/5 border border-white/5 rounded-sm flex items-center gap-3"
                    >
                      <span className="text-goldMetallic text-[10px]">🏆</span>
                      <p className="text-silverChrome text-[10px] font-bold uppercase tracking-tight">
                        {cert}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Location Footer */}
                <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
                  <div>
                    <p className="text-white text-[10px] font-black uppercase tracking-widest">
                      Bhubaneswar, Odisha
                    </p>
                    <p className="text-slate-500 text-[8px] uppercase tracking-[0.4em] mt-1">
                      Current Professional Base
                    </p>
                  </div>
                  <a 
                    href="/Ashutosh_kumar_resume.pdf" 
                    download
                    className="px-6 py-3 bg-gold-gradient text-black font-black text-[9px] tracking-[0.2em] uppercase rounded-sm hover:scale-105 transition-all"
                  >
                    Get Full PDF
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;