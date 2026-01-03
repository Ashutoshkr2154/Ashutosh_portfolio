import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pureBlack border-t border-white/5 pt-24 pb-12 px-6 overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-goldMetallic/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Column 1: Professional Identity */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-14 h-14 bg-gold-gradient rounded-sm flex items-center justify-center font-black text-black text-2xl shadow-gold-glow">
                AK
              </div>
              <div>
                <h4 className="text-white font-black text-2xl tracking-tighter uppercase leading-none">
                  Ashutosh Kumar
                </h4>
                <p className="text-goldMetallic text-[10px] font-black tracking-[0.5em] uppercase mt-2">
                  AI/ML Engineer Intern @ Advanze
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8 font-medium">
              Architecting autonomous AI systems and high-performance RAG pipelines. 
              Engineering the intersection of Generative AI and production-ready enterprise solutions.
            </p>
          </div>

          {/* Column 2: System Navigation */}
          <div>
            <h5 className="text-white font-black text-[10px] tracking-[0.4em] uppercase mb-8 border-l-2 border-goldMetallic pl-4">
              Intelligence Map
            </h5>
            <ul className="space-y-4">
              {['Identity', 'History', 'Systems', 'Stack', 'Credentials'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-silverChrome text-[11px] font-bold uppercase tracking-widest hover:text-goldMetallic transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-goldMetallic group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Global Presence */}
          <div>
            <h5 className="text-white font-black text-[10px] tracking-[0.4em] uppercase mb-8 border-l-2 border-cyberTeal pl-4">
              Digital Presence
            </h5>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://github.com/Ashutoshkr2154" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-silverChrome text-[11px] font-bold uppercase tracking-widest hover:text-cyberTeal transition-colors flex items-center gap-3"
                >
                  <span className="text-sm">💻</span> GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/ashutosh-kumar-122327245/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-silverChrome text-[11px] font-bold uppercase tracking-widest hover:text-goldMetallic transition-colors flex items-center gap-3"
                >
                  <span className="text-sm">🔗</span> LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:ashutoshkr2154@gmail.com" 
                  className="text-silverChrome text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-3"
                >
                  <span className="text-sm">✉️</span> Inquiry
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Integrity Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">
              © {currentYear} Ashutosh Kumar | All Rights Reserved
            </p>
            <div className="flex items-center gap-3">
               <span className="w-2 h-2 rounded-full bg-goldMetallic/20"></span>
               <p className="text-goldMetallic/40 text-[9px] font-bold uppercase tracking-[0.2em]">
                 Engineered for Professional Excellence
               </p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right hidden md:block">
              <p className="text-white text-[10px] font-black tracking-widest uppercase">
                Bhubaneswar, Odisha
              </p>
              <p className="text-slate-500 text-[8px] uppercase tracking-[0.4em] mt-1">
                System Status: Active
              </p>
            </div>
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-emeraldNeon animate-ping absolute opacity-75"></div>
              <div className="relative w-3 h-3 rounded-full bg-emeraldNeon shadow-emerald-glow"></div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;