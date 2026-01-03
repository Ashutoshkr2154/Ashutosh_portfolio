import React from 'react';

const AchievementsSection = () => {
  const certifications = [
    "Data Science Masters – PW Skills",
    "Generative AI with NLP & Agentic AI – EURON",
    "Mastering Artificial Intelligence – PW Skills",
    "Project Completion Certificate – Neural Row"
  ];

  return (
    <section id="achievements" className="py-24 px-6 bg-cyber-gradient border-y border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Academic/Impact Stats */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Academic Excellence & <span className="text-neonBlue text-glow">Recognition</span>
          </h2>
          <div className="flex items-center space-x-6">
            <div className="p-6 bg-slate-900 rounded-xl border border-neonBlue/30 text-center">
              <div className="text-4xl font-extrabold text-neonBlue">8.8</div>
              <div className="text-xs text-slate-500 uppercase mt-2">Current CGPA</div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Final-year B.Tech in Computer Science & Data Science at GITA Autonomous College. 
              Consistently high performance in technical coursework and real-world implementation.
            </p>
          </div>
        </div>

        {/* Certifications List */}
        <div className="glass-card p-8">
          <h3 className="text-white font-bold mb-6 flex items-center">
            <span className="mr-2">🎖️</span> Industry Certifications
          </h3>
          <ul className="space-y-4">
            {certifications.map((cert, i) => (
              <li key={i} className="flex items-center text-slate-300 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-neonBlue mr-3 shadow-glow"></span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;