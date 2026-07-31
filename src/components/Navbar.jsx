import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Code2, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenTerminal }) {
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
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0b0f19]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              Joel J. <Sparkles className="w-3.5 h-3.5 text-cyan-400 inline" />
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400/80">Full-Stack Architect</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-full hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/5 hover:bg-cyan-500/10 hover:text-cyan-400 px-3.5 py-2 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-all duration-200 group"
            title="Open Command Terminal"
          >
            <Terminal className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-200" />
            <span>Cmd + K</span>
          </button>

          <a
            href="#contact"
            className="text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:opacity-95 transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenTerminal}
            className="p-2 text-cyan-400 bg-white/5 rounded-lg border border-white/10"
            title="Terminal"
          >
            <Terminal className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-white/5 rounded-lg border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center text-sm font-semibold px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-md"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
