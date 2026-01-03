import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Advanze",
    role: "AI/ML Engineer Intern",
    duration: "Dec 2025 - June 2026",
    location: "Bhubaneswar, Odisha (On-site)",
    points: [
      "Architected production-ready OCR-based document processing pipelines using Tesseract and Python, structuring complex text from unstructured PDFs.",
      "Engineered high-performance Retrieval-Augmented Generation (RAG) systems using vector embeddings and similarity search for context-aware intelligence.",
      "Optimized automation workflows to transform raw data into actionable digital assets, enhancing internal processing efficiency."
    ],
    color: "text-emeraldNeon",
    glow: "shadow-emerald-glow"
  },
  {
    company: "Neural Row",
    role: "AI Engineer Intern",
    duration: "Nov 2024 - Feb 2025",
    points: [
      "Developed an AI-agent for high-fidelity video transcription and summarization using Whisper and proprietary LLM APIs.",
      "Automated messaging ecosystems using Telethon, achieving a 40% reduction in manual effort via intelligent notification triggers.",
      "Engineered custom NLP modules for advanced content classification and semantic analysis."
    ],
    color: "text-silverChrome",
    glow: "shadow-silver-glow"
  },
  {
    company: "Unified Mentor",
    role: "Data Analyst Intern",
    duration: "May 2024 - June 2024",
    points: [
      "Conducted deep-dive Exploratory Data Analysis (EDA) and statistical data cleaning using the Python/SQL stack.",
      "Architected baseline machine learning models using Scikit-learn to derive data-driven predictive insights.",
      "Produced comprehensive analytical reports to validate model training performance and statistical significance."
    ],
    color: "text-silverChrome",
    glow: ""
  }
];

const ExperienceCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative flex items-center justify-between w-full mb-24 ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      {/* Spacer for Desktop */}
      <div className="hidden md:block w-[45%]"></div>

      {/* Central Timeline Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-pureBlack border-2 border-goldMetallic shadow-gold-glow z-20 hidden md:block"></div>

      {/* Luxury Experience Card */}
      <div className={`w-full md:w-[45%] metallic-card p-8 md:p-10 relative border-t border-white/10 group hover:border-goldMetallic/40 transition-all duration-500 overflow-hidden`}>
        {/* Subtle Background Accent */}
        <div className={`absolute -top-12 -right-12 w-32 h-32 bg-goldMetallic/5 blur-[60px] rounded-full group-hover:bg-goldMetallic/10 transition-colors`}></div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[9px] font-black tracking-[0.4em] text-goldMetallic uppercase bg-goldMetallic/5 px-3 py-1 rounded-sm border border-goldMetallic/20">
              {exp.duration}
            </span>
            {index === 0 && (
              <span className="animate-pulse flex items-center gap-1.5 text-emeraldNeon text-[8px] font-black uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-emeraldNeon shadow-emerald-glow"></span>
                Active Role
              </span>
            )}
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter uppercase leading-none">
            {exp.company}
          </h3>
          <p className={`${exp.color} font-black text-[11px] mb-8 uppercase tracking-[0.3em] italic`}>
            {exp.role}
          </p>
          
          <ul className="space-y-5">
            {exp.points.map((point, i) => (
              <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start group/item">
                <span className="text-goldMetallic mr-4 mt-1.5 text-[8px] group-hover/item:scale-125 transition-transform">✦</span>
                <span className="group-hover/item:text-silverChrome transition-colors">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-pureBlack relative overflow-hidden">
      {/* Watermark Branding */}
      <div className="absolute top-40 right-[-2%] text-[15rem] font-black text-white/[0.01] select-none pointer-events-none uppercase tracking-tighter">
        Elite
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-32">
          <h2 className="text-goldMetallic font-bold text-xs tracking-[0.6em] uppercase mb-6 underline underline-offset-8 decoration-goldMetallic/30">
            Professional Trajectory
          </h2>
          <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-goldMetallic via-silverChrome to-goldMetallic">Evolution.</span>
          </h3>
        </div>

        {/* Central Vertical Rail */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-goldMetallic/20 to-transparent z-10 hidden md:block"></div>

        <div className="relative">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;