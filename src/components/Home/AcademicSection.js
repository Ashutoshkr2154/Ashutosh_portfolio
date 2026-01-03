import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: "B.Tech in Computer Science & Data Science",
    institution: "GITA Autonomous College, Bhubaneswar",
    duration: "2022 - 2026",
    metric: "CGPA: 8.81 / 10",
    description: "Specializing in AI and ML with a focus on autonomous system architectures and deep learning."
  },
  {
    degree: "Class 12 (Higher Secondary)",
    institution: "SJ DAV Public School, Chaibasa",
    duration: "2020 - 2022",
    metric: "Percentage: 64.6%",
    description: "Focused on Mathematics and Computer Science fundamentals."
  }
];

const AcademicSection = () => {
  return (
    <section id="academic" className="py-32 px-6 bg-pureBlack relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-goldMetallic font-bold text-xs tracking-[0.6em] uppercase mb-6 underline underline-offset-8 decoration-goldMetallic/30">
            Academic Foundation
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-8">
            The <span className="text-gold">Pedigree.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {education.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="metallic-card p-10 border border-white/5 bg-neutral-900/40 relative overflow-hidden group"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 p-6 opacity-10 text-5xl font-black text-goldMetallic group-hover:scale-110 transition-transform">
                0{idx + 1}
              </div>

              <span className="text-goldMetallic text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">
                {edu.duration}
              </span>
              <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
                {edu.degree}
              </h4>
              <p className="text-silverChrome font-bold uppercase tracking-[0.2em] text-[10px] mb-6">
                {edu.institution}
              </p>
              
              <div className="inline-block px-4 py-2 bg-gold-gradient rounded-sm text-black font-black text-xs mb-6">
                {edu.metric}
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;