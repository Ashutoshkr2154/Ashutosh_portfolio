import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-pureBlack relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Typography */}
      <div className="absolute left-[-2%] bottom-[-5%] text-[15rem] font-black text-white/[0.01] select-none pointer-events-none uppercase tracking-tighter">
        Connect
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-goldMetallic font-bold text-[10px] tracking-[0.8em] uppercase mb-6 underline underline-offset-8 decoration-goldMetallic/30"
          >
            Inquiry & Collaboration
          </motion.h2>
          <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-goldMetallic via-silverChrome to-goldMetallic">Intelligence.</span>
          </h3>
        </div>

        {/* 3-Column Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* GitHub: Cyber Teal Theme */}
          <motion.a 
            href="https://github.com/Ashutoshkr2154" 
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -10 }}
            className="metallic-card p-10 flex flex-col items-center text-center group border-cyberTeal/10 hover:border-cyberTeal/40 transition-all duration-500 shadow-cyber-glow"
          >
            <div className="w-16 h-16 rounded-full bg-cyberTeal/5 border border-cyberTeal/20 flex items-center justify-center mb-6 group-hover:bg-cyberTeal group-hover:text-black transition-all">
              <span className="text-2xl italic font-black">Git</span>
            </div>
            <h4 className="text-xl font-black text-white mb-2 tracking-widest uppercase">Open Source</h4>
            <p className="text-cyberTeal text-[9px] font-black uppercase tracking-[0.3em] mb-8">@Ashutoshkr2154</p>
            <div className="w-full py-3 border border-white/5 text-silverChrome text-[9px] font-bold uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all">
              Explore Repos
            </div>
          </motion.a>

          {/* LinkedIn: Gold Theme */}
          <motion.a 
            href="https://www.linkedin.com/in/ashutosh-kumar-122327245/" 
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -10 }}
            className="metallic-card p-10 flex flex-col items-center text-center group border-goldMetallic/10 hover:border-goldMetallic/40 transition-all duration-500 shadow-gold-glow"
          >
            <div className="w-16 h-16 rounded-full bg-goldMetallic/5 border border-goldMetallic/20 flex items-center justify-center mb-6 group-hover:bg-gold-gradient group-hover:text-black transition-all">
              <span className="text-2xl italic font-black">In</span>
            </div>
            <h4 className="text-xl font-black text-white mb-2 tracking-widest uppercase">Professional</h4>
            <p className="text-goldMetallic text-[9px] font-black uppercase tracking-[0.3em] mb-8">Ashutosh Kumar</p>
            <div className="w-full py-3 border border-white/5 text-silverChrome text-[9px] font-bold uppercase tracking-widest group-hover:bg-gold-gradient group-hover:text-black transition-all">
              Connect Now
            </div>
          </motion.a>

          {/* Location: Emerald Theme */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="metallic-card p-10 flex flex-col items-center text-center group border-emeraldNeon/10 hover:border-emeraldNeon/40 transition-all duration-500 shadow-emerald-glow"
          >
            <div className="w-16 h-16 rounded-full bg-emeraldNeon/5 border border-emeraldNeon/20 flex items-center justify-center mb-6 group-hover:bg-emeraldNeon group-hover:text-black transition-all">
              <span className="text-2xl italic font-black">Loc</span>
            </div>
            <h4 className="text-xl font-black text-white mb-2 tracking-widest uppercase">Base Hub</h4>
            <p className="text-emeraldNeon text-[9px] font-black uppercase tracking-[0.3em] mb-8">Bhubaneswar, India</p>
            <div className="w-full py-3 border border-white/5 text-silverChrome text-[9px] font-bold uppercase tracking-widest">
              IST Timezone
            </div>
          </motion.div>

        </div>

        {/* Primary Contact Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="metallic-card p-12 bg-white/[0.02] border-white/5 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-goldMetallic/10 border border-goldMetallic/20 text-goldMetallic text-[8px] font-black uppercase tracking-[0.4em] mb-6">
              Primary Channel
            </span>
            <br />
            <a 
              href="mailto:ashutoshkr2154@gmail.com" 
              className="text-3xl md:text-5xl lg:text-6xl font-black text-white hover:text-goldMetallic transition-all tracking-tighter uppercase italic"
            >
              ashutoshkr2154<span className="text-goldMetallic">@</span>gmail.com
            </a>
          </div>

          <div className="lg:text-right flex flex-col gap-2">
            <p className="text-white text-xs font-black tracking-[0.3em] uppercase">Status: Available</p>
            <p className="text-silverDark text-[10px] uppercase tracking-[0.4em] font-bold">Associate AI Engineer Intern @ Advanze</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;