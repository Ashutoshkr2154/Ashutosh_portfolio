import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-pureBlack overflow-hidden pt-20">
      
      {/* 💎 LUXURY BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-goldMetallic/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyberTeal/5 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Futuristic Luminous Grid Streaks */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-goldMetallic/20 to-transparent"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[1px] w-full bg-gradient-to-r from-transparent via-emeraldNeon/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* 🤖 PREMIUM AI PROFILE FRAME */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-12 group"
        >
          {/* Outer Multi-Tone Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-goldMetallic via-cyberTeal to-emeraldNeon opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700"></div>
          
          {/* Metallic Frame with Image */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-[3px] bg-gradient-to-b from-goldMetallic via-silverChrome to-cyberTeal shadow-gold-glow">
            <div className="w-full h-full rounded-full bg-pureBlack overflow-hidden border-4 border-pureBlack">
              <img 
                src="/profile.jpg" 
                alt="Ashutosh Kumar" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Ashutosh+Kumar&background=000&color=FFD700&size=512"; }}
              />
            </div>
          </div>
          
          {/* Floating Status Orbs */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-emeraldNeon rounded-full shadow-emerald-glow animate-bounce"></div>
          <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-cyberTeal rounded-full shadow-cyber-glow animate-pulse"></div>
        </motion.div>

        {/* 🏆 ELITE HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-block mb-6 px-6 py-2 border border-goldMetallic/20 rounded-full bg-goldMetallic/5 backdrop-blur-sm">
            <span className="text-goldMetallic text-[10px] font-black uppercase tracking-[0.4em]">
              Available for Associate AI Roles
            </span>
          </div>
          
          <h1 className="text-5xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85]">
            Ashutosh <span className="text-transparent bg-clip-text bg-gradient-to-r from-goldMetallic via-goldDeep to-goldMetallic">Kumar.</span>
          </h1>
          <h2 className="mt-6 text-silverChrome text-sm md:text-xl font-bold uppercase tracking-[0.5em] flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-goldMetallic hidden md:block"></span>
            Aspiring AI/ML Engineer & Data Scientist
            <span className="h-[1px] w-12 bg-goldMetallic hidden md:block"></span>
          </h2>
        </motion.div>

        {/* 🧠 PROFESSIONAL MISSION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 max-w-3xl mx-auto text-slate-400 text-sm md:text-lg leading-relaxed font-medium"
        >
          Final-year CS & DS student and AI/ML Engineer Intern at Advanze. 
          Specializing in Generative AI, RAG Systems, and NLP to architect intelligent, 
          scalable AI solutions for real-world complexities.
        </motion.p>

        {/* ⚡ HIGH-CONVERSION ACTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          <a href="#projects" className="px-10 py-5 bg-gold-gradient text-black font-black text-[10px] tracking-widest uppercase rounded-sm shadow-gold-glow hover:scale-105 transition-all">
            View Projects
          </a>
          
          {/* SECURE DOWNLOAD LINK */}
          <a 
            href="/Ashutosh_kumar_resume.pdf" 
            download="Ashutosh_Kumar_Resume.pdf"
            className="px-10 py-5 border-2 border-silverChrome/30 text-white font-black text-[10px] tracking-widest uppercase rounded-sm hover:bg-white/5 hover:border-white transition-all shadow-lg"
          >
            Download Resume
          </a>

          <a 
            href="https://www.linkedin.com/in/ashutosh-kumar-122327245/" 
            target="_blank" 
            rel="noreferrer" 
            className="px-10 py-5 bg-cyberTeal/10 border border-cyberTeal/30 text-cyberTeal font-black text-[10px] tracking-widest uppercase rounded-sm hover:bg-cyberTeal hover:text-black transition-all"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* LUXURY SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[8px] uppercase tracking-[0.5em] text-goldMetallic/40">Discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-goldMetallic to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;