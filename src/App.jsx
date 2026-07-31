import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BentoGridSection from './components/BentoGridSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectModal from './components/ProjectModal';
import CommandPalette from './components/CommandPalette';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Keyboard shortcut (Cmd+K / Ctrl+K) handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen relative text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Background Interactive Particle Canvas */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Layout */}
      <main className="relative z-10 space-y-12">
        <HeroSection onOpenTerminal={() => setTerminalOpen(true)} />
        <BentoGridSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Popups */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <CommandPalette isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
}
