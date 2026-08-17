import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsGrid } from './components/SkillsGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveResumeModal } from './components/InteractiveResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    // Always enforce dark mode on root
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 selection:bg-red-600 selection:text-white font-sans antialiased">
      {/* Navigation Header */}
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <AboutSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <ExperienceTimeline />
        <SkillsGrid />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Interactive Printable & Downloadable Resume Modal */}
      <InteractiveResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
