import React, { useEffect } from 'react';

// Global Components
import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';
import CursorGlow from './components/Global/CursorGlow'; 

// Home & Section Components
import Hero from './components/Home/Hero';
import ExperienceSection from './components/Experience/ExperienceSection';
import ProjectSection from './components/Projects/ProjectSection';
import SkillsSection from './components/Home/SkillsSection';
import AcademicSection from './components/Home/AcademicSection';
import CertificationsSection from './components/Home/CertificationsSection';
import AboutMeSection from './components/Home/AboutMeSection';
import ContactSection from './components/Home/ContactSection';

function App() {
  useEffect(() => {
    // 🔍 SEO & Meta Impact Optimization
    document.title = "Ashutosh Kumar | AI/ML Engineer | GenAI & RAG Specialist";
  }, []);

  return (
    <div className="bg-pureBlack min-h-screen selection:bg-goldMetallic selection:text-black overflow-x-hidden">
      
      {/* 🔮 0. INTERACTIVE LUXURY LAYER */}
      <CursorGlow />

      {/* 💎 1. GLOBAL NAVIGATION (Glassmorphism + Gold Accents) */}
      <Navbar />

      <main>
        {/* 🚀 2. PRIMARY IDENTITY (Hero) */}
        <Hero />

        {/* 📈 3. PROFESSIONAL EVOLUTION (Advanze & Neural Row Trajectory) */}
        <ExperienceSection />

        {/* 🛠️ 4. INTELLIGENT SYSTEMS (AgentX, RAG Pipelines & YouTube Generator) */}
        <ProjectSection />

        {/* ⚡ 5. TECHNICAL ARSENAL (AI/ML Categorized Stack) */}
        <SkillsSection />

        {/* 🎓 6. ACADEMIC PEDIGREE (GITA Autonomous 8.81 CGPA Proof) */}
        <AcademicSection />

        {/* 🏆 7. VERIFIED CREDENTIALS (PW Skills & Euron Validation) */}
        <CertificationsSection />

        {/* 🧠 8. PROFESSIONAL NARRATIVE (The Story of Ashutosh Kumar) */}
        <AboutMeSection />

        {/* 🔗 9. INQUIRY HUB (Direct Communication & Social Connections) */}
        <ContactSection />
      </main>

      {/* 🛡️ 10. GLOBAL SEAL OF QUALITY (Corporate Footer) */}
      <Footer />
    </div>
  );
}

export default App;