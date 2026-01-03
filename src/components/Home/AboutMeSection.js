import React from 'react';
import { motion } from 'framer-motion';

const skillSets = [
  {
    category: "AI & Generative Engineering",
    skills: [
      "Generative AI & Agentic AI Workflows ",
      "NLP: Text Preprocessing, Tokenization, Embeddings [cite: 18]",
      "LLM Applications & Prompt Engineering [cite: 19]",
      "RAG Systems & Vector Search [cite: 34]"
    ]
  },
  {
    category: "Machine Learning Intelligence",
    skills: [
      "Supervised & Unsupervised Learning [cite: 17]",
      "Feature Engineering & Model Evaluation [cite: 17]",
      "Exploratory Data Analysis (EDA) [cite: 19]",
      "Statistical Analysis & Data Cleaning [cite: 19]"
    ]
  },
  {
    category: "Technical Stack",
    skills: [
      "Programming: Python, SQL [cite: 16]",
      "Libraries: Pandas, NumPy, Scikit-learn [cite: 20]",
      "Visualization: Matplotlib, Seaborn [cite: 20]",
      "Frameworks: Flask, FastAPI [cite: 20, 37]"
    ]
  },
  {
    category: "Infrastructure & Tools",
    skills: [
      "Databases: MySQL, MongoDB [cite: 21]",
      "Cloud: AWS (Foundational) [cite: 21]",
      "Version Control: Git, GitHub [cite: 22]",
      "OOP Principles & Data Structures [cite: 16]"
    ]
  }
];

const SkillCard = ({ category, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="metallic-card p-8 h-full relative group border-goldMetallic/20 overflow-hidden"
  >
    {/* Animated Corner Accent */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-goldMetallic/5 -rotate-45 translate-x-12 -translate-y-12 group-hover:bg-goldMetallic/10 transition-all duration-500"></div>
    
    <h3 className="text-cyberTeal font-black text-[11px] tracking-[0.4em] uppercase mb-8 flex items-center gap-3">
      <span className="w-2 h-2 rounded-full bg-cyberTeal shadow-emerald-glow"></span>
      {category}
    </h3>
    
    <div className="space-y-4 relative z-10">
      {skills.map((skill, i) => (
        <div key={i} className="flex items-start gap-3 group/item">
          <span className="text-goldMetallic mt-1 text-[10px] group-hover/item:scale-125 transition-transform">✦</span>
          <p className="text-silverChrome text-[12px] font-bold leading-relaxed tracking-tight group-hover/item:text-white transition-colors">
            {skill}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-pureBlack relative overflow-hidden">
      {/* Dynamic Background Text */}
      <div className="absolute top-[-5%] right-[-2%] text-[15rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
        Stack
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-goldMetallic font-bold text-xs tracking-[0.6em] uppercase mb-6 underline underline-offset-8 decoration-goldMetallic/30">
            Technical Architecture
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-tight">
            System <span className="text-gold">Capability.</span>
          </h3>
          <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.2em] uppercase max-w-2xl mx-auto">
            A specialized arsenal focused on Generative AI, RAG architectures, and scalable Machine Learning systems[cite: 31, 34].
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillSets.map((set, idx) => (
            <SkillCard key={idx} index={idx} {...set} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;