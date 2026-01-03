import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  { 
    title: "DATA SCIENCE MASTERS", 
    provider: "PW SKILLS",
    badge: "🏆" 
  },
  { 
    title: "DATA ANALYTICS COURSE", 
    provider: "PW SKILLS",
    badge: "📊" 
  },
  { 
    title: "GENERATIVE AI WITH NLP, AGENTIC AI & FINE TUNING", 
    provider: "EURON",
    badge: "🤖" 
  },
  { 
    title: "MASTERING THE POWER OF ARTIFICIAL INTELLIGENCE", 
    provider: "PW SKILLS",
    badge: "🧠" 
  },
  { 
    title: "GENERATIVE AI CERTIFICATION BOOTCAMP", 
    provider: "EURON",
    badge: "🔥" 
  }
];

const CertificationCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="metallic-card p-6 flex items-center gap-6 border-goldMetallic/20 shine-effect group hover:shadow-gold-glow"
  >
    {/* Metallic Medal Icon */}
    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-goldMetallic/10 border border-goldMetallic/30 flex items-center justify-center group-hover:bg-goldMetallic/20 transition-all duration-500">
      <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]">
        {cert.badge}
      </span>
    </div>

    {/* Certification Details */}
    <div className="flex-grow">
      <h4 className="text-white font-black text-sm uppercase tracking-tight leading-snug group-hover:text-goldMetallic transition-colors duration-300">
        {cert.title}
      </h4>
      <div className="mt-2 inline-block px-3 py-1 bg-silverChrome/10 border border-silverChrome/20 rounded-sm">
        <p className="text-goldMetallic text-[10px] font-black uppercase tracking-[0.2em]">
          {cert.provider}
        </p>
      </div>
    </div>
  </motion.div>
);

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-32 bg-pureBlack relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-goldMetallic font-bold text-xs tracking-[0.6em] uppercase mb-4">
            Achievements & Certifications
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6">
            Recognized <span className="text-gold">Competence.</span>
          </h3>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
            Specialization credentials demonstrating professional excellence in AI, Machine Learning, Data Science, and Generative AI.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <CertificationCard key={idx} index={idx} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;