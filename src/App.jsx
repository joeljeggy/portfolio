import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import WireframeBackground from './components/WireframeBackground';
import GSAPEffects from './components/GSAPEffects';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import HighlightsFocusSection from './components/HighlightsFocusSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationSection from './components/EducationSection';
import SkillsView from './components/SkillsView';
import ContactSection from './components/ContactSection';
import ProjectDetailView from './components/ProjectDetailView';
import CommandPalette from './components/CommandPalette';
import Footer from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [activeProject, setActiveProject] = useState(null);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Active section scroll spy for Navbar top bar sync
  useEffect(() => {
    if (activeView === 'project-detail') return;

    const sections = ['home', 'projects', 'experience', 'education', 'skills', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveView(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeView]);

  const handleNavigate = (viewId) => {
    setActiveProject(null);
    if (viewId === 'project-detail') return;

    if (activeView === 'project-detail') {
      setActiveView(viewId);
      setTimeout(() => {
        const el = document.getElementById(viewId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    const el = document.getElementById(viewId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveView(viewId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveView('home');
    }
  };

  const handleOpenProjectDetail = (project) => {
    setActiveProject(project);
    setActiveView('project-detail');
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
      {/* Background Particle Canvas & 3D Ambient Wireframe Solar System */}
      <ParticleBackground />
      {activeView !== 'project-detail' && <WireframeBackground />}
      <GSAPEffects />

      {/* Navigation Header */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Single-Page Section Layout */}
      <main className="relative z-10 min-h-[80vh]">
        {activeView === 'project-detail' ? (
          <ProjectDetailView
            project={activeProject}
            onBack={() => handleNavigate('home')}
          />
        ) : (
          <div className="space-y-4">
            <div id="home">
              <HeroSection
                onOpenTerminal={() => setTerminalOpen(true)}
                onNavigate={handleNavigate}
              />
            </div>
            
            <div id="projects">
              <ProjectsSection onSelectProject={handleOpenProjectDetail} />
            </div>
            
            <div id="focus">
              <HighlightsFocusSection />
            </div>

            <div id="experience">
              <ExperienceTimeline />
            </div>

            <div id="education">
              <EducationSection />
            </div>

            <div id="skills">
              <SkillsView />
            </div>

            <div id="contact">
              <ContactSection />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette Terminal Modal */}
      <CommandPalette isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
}
