import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ activeView, onNavigate, onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', view: 'home' },
    { name: 'Projects', view: 'projects' },
    { name: 'Research', view: 'research' },
    { name: 'About', view: 'about' },
    { name: 'Experience', view: 'experience' },
    { name: 'Skills', view: 'skills' },
    { name: 'Contact', view: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'py-3 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-800 shadow-xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2.5 text-left group">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-zinc-800 flex items-center justify-center text-white group-hover:border-zinc-600 transition-all">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-bold text-white tracking-tight">
            {portfolioData.personal.name}
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-800">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => onNavigate(link.view)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-150 ${
                activeView === link.view
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all"
            title="Command Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-zinc-400" />
            <span>Cmd + K</span>
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black shadow-sm transition-all"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-lg border border-zinc-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-zinc-800 px-4 pt-3 pb-6 mt-3 space-y-2 text-left bg-[#0a0a0a]">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => {
                onNavigate(link.view);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-md"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
