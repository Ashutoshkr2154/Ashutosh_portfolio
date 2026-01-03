import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "YouTube Idea Generator",
    desc: "A high-performance intelligence system integrating FastAPI and Streamlit to architect trending, audience-centric content strategies via YouTube and SerpAPI data synching.",
    tech: ["FastAPI", "Streamlit", "YouTube API", "LLMs"],
    impact: "80% Reduction in Content Planning",
    badge: "INDUSTRY LEVEL",
    link: "https://github.com/Ashutoshkr2154/youtube_videos_idea_generator",
    glow: "gold"
  },
  {
    title: "AgentX – AI Creator",
    desc: "Autonomous multi-agent architecture engineered with LangChain and LangGraph to transform raw conceptual topics into fully researched, SEO-optimized professional blog ecosystems.",
    tech: ["LangChain", "LangGraph", "Flask", "OpenAI"],
    impact: "End-to-End Publication Automation",
    badge: "PRODUCTION READY",
    link: "https://github.com/Ashutoshkr2154/AI-Powered-Content-Creation-AgentX",
    glow: "emerald"
  },
  {
    title: "SEO Optimization Agent",
    desc: "Advanced neural application utilizing GPT-4 and Gemini vision models to dissect video metadata and render high-conversion thumbnail strategies for scalable SEO growth.",
    tech: ["GPT-4", "Gemini", "Streamlit", "Python"],
    impact: "Multi-Model AI Content Synthesis",
    badge: "REAL-WORLD AI",
    link: "https://github.com/Ashutoshkr2154",
    glow: "teal"
  },
  {
    title: "Video Intelligence Agent",
    desc: "Next-generation automation utility leveraging the Whisper API and GPT-4 for high-fidelity speech-to-text transcription and intelligent semantic summarization of video assets.",
    tech: ["Whisper API", "GPT-4", "Streamlit", "Python"],
    impact: "Smart Semantic Summarization",
    badge: "AI / ML POWERED",
    link: "https://github.com/Ashutoshkr2154/youtube_videos_idea_generator",
    glow: "silver"
  }
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-32 bg-pureBlack relative px-6 border-t border-white/5 overflow-hidden">
      {/* Background Luxury Element: Large Faint Text */}
      <div className="absolute left-[-2%] top-20 text-[15rem] font-black text-white/[0.01] select-none pointer-events-none uppercase tracking-tighter">
        Inventions
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-goldMetallic font-bold text-[10px] tracking-[0.8em] uppercase mb-4"
          >
            Project Portfolio
          </motion.h2>
          <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-goldMetallic via-silverChrome to-goldMetallic">Systems.</span>
          </h3>
        </div>

        {/* Symmetric Metallic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              whileHover={{ y: -12 }}
              className={`relative group bg-neutral-900/40 border border-white/10 p-10 flex flex-col h-[580px] rounded-sm backdrop-blur-3xl overflow-hidden transition-all duration-500`}
            >
              {/* Corner Glow Accents based on project theme */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 blur-[100px] opacity-20 transition-opacity duration-500 group-hover:opacity-40 
                ${proj.glow === 'gold' ? 'bg-goldMetallic' : proj.glow === 'emerald' ? 'bg-emeraldNeon' : proj.glow === 'teal' ? 'bg-cyberTeal' : 'bg-silverChrome'}`} 
              />

              {/* Luxury Badge Tag */}
              <div className="mb-10 flex justify-between items-center">
                <span className={`text-[9px] font-black tracking-[0.3em] px-4 py-1.5 border uppercase rounded-full bg-black/50
                  ${proj.glow === 'gold' ? 'text-goldMetallic border-goldMetallic/30' : 
                    proj.glow === 'emerald' ? 'text-emeraldNeon border-emeraldNeon/30' : 
                    proj.glow === 'teal' ? 'text-cyberTeal border-cyberTeal/30' : 
                    'text-silverChrome border-silverChrome/30'}`}
                >
                  {proj.badge}
                </span>
                <span className="text-white/10 font-black text-2xl tracking-tighter">0{idx + 1}</span>
              </div>
              
              {/* Project Title: Chrome Typography */}
              <h4 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter uppercase leading-none group-hover:text-goldMetallic transition-colors duration-500">
                {proj.title}
              </h4>
              
              {/* Professional Description */}
              <p className="text-slate-400 text-[13px] md:text-sm leading-relaxed mb-8 flex-grow font-medium">
                {proj.desc}
              </p>
              
              {/* Metrics & Technical Footer */}
              <div className="mt-auto space-y-8">
                <div className="pt-6 border-t border-white/5">
                  <p className="text-[9px] text-slate-500 uppercase tracking-[0.4em] font-bold mb-3">System Performance</p>
                  <p className="text-sm text-silverChrome font-black italic tracking-tight underline decoration-goldMetallic/20 underline-offset-4">
                    {proj.impact}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map(t => (
                    <span key={t} className="text-[8px] bg-white/5 text-white/70 px-3 py-1.5 border border-white/5 font-black uppercase tracking-widest hover:border-goldMetallic/40 hover:text-goldMetallic transition-all duration-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Glassmorphism Action Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-10">
                  <a 
                    href={proj.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="py-4 bg-gold-gradient text-black font-black text-[10px] tracking-[0.3em] text-center uppercase shadow-gold-glow hover:scale-[1.05] transition-all duration-500"
                  >
                    View Source
                  </a>
                  <button className="py-4 border border-white/10 text-white font-black text-[10px] tracking-[0.3em] uppercase hover:bg-white/5 transition-all duration-500">
                    Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;