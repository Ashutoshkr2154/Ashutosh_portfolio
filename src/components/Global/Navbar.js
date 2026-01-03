import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Identity', href: '#home' },
    { name: 'Systems', href: '#projects' },
    { name: 'History', href: '#experience' },
    { name: 'Stack', href: '#skills' }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[5000] transition-all duration-500 px-6 py-4 ${
        scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Luxury Brand Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 bg-gold-gradient rounded-sm flex items-center justify-center font-black text-black text-xl shadow-gold-glow group-hover:scale-110 transition-transform">
            AK
          </div>
          <span className="text-white font-black text-xs uppercase tracking-[0.4em] hidden sm:block">
            Ashutosh <span className="text-goldMetallic">Kumar.</span>
          </span>
        </motion.div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-silverChrome text-[10px] font-black uppercase tracking-[0.3em] hover:text-goldMetallic transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-goldMetallic group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* Global CTA Action */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <a 
            href="#contact" 
            className="px-6 py-3 bg-white/5 border border-white/10 text-white font-black text-[9px] tracking-[0.3em] uppercase rounded-sm hover:bg-gold-gradient hover:text-black hover:border-transparent transition-all duration-500 shadow-lg"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;