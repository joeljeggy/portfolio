import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import WireframeBackground from './components/WireframeBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HighlightsFocusSection from './components/HighlightsFocusSection';
import CodingStatsSection from './components/CodingStatsSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectDetailView from './components/ProjectDetailView';
import ResearchView from './components/ResearchView';
import AboutView from './components/AboutView';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsView from './components/SkillsView';
import ContactSection from './components/ContactSection';
import CommandPalette from './components/CommandPalette';
import Footer from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [activeProject, setActiveProject] = useState(null);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Handle URL hash changes for deep linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('project/')) {
        const projId = hash.replace('project/', '');
        setActiveView('project-detail');
      } else if (['home', 'projects', 'research', 'about', 'experience', 'skills', 'contact'].includes(hash)) {
        setActiveView(hash);
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view) => {
    setActiveView(view);
    setActiveProject(null);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProjectDetail = (project) => {
    setActiveProject(project);
    setActiveView('project-detail');
    window.location.hash = `project/${project.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <div className="min-h-screen relative text-zinc-100 bg-[#0a0a0a] selection:bg-white selection:text-black">
      {/* Background Particle Canvas & 3D Ambient Wireframe */}
      <ParticleBackground />
      <WireframeBackground />

      {/* Navigation Header */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main View Router */}
      <main className="relative z-10 min-h-[80vh]">
        {activeView === 'home' && (
          <>
            <HeroSection
              onOpenTerminal={() => setTerminalOpen(true)}
              onNavigate={handleNavigate}
            />
            <HighlightsFocusSection />
            <CodingStatsSection />
            <ProjectsSection onSelectProject={handleOpenProjectDetail} />
          </>
        )}

        {activeView === 'projects' && (
          <ProjectsSection onSelectProject={handleOpenProjectDetail} />
        )}

        {activeView === 'project-detail' && (
          <ProjectDetailView
            project={activeProject}
            onBack={() => handleNavigate('projects')}
          />
        )}

        {activeView === 'research' && <ResearchView />}
        {activeView === 'about' && <AboutView />}
        {activeView === 'experience' && <ExperienceTimeline />}
        {activeView === 'skills' && <SkillsView />}
        {activeView === 'contact' && <ContactSection />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette Terminal Modal */}
      <CommandPalette isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
}
