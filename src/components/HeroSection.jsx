import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const roles = [
  "Full-Stack Architect",
  "AI Systems Engineer",
  "Cloud Native Developer",
  "UI/UX Perfectionist"
];

export default function HeroSection({ onOpenTerminal }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-violet-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 backdrop-blur-md shadow-md animate-float">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>{portfolioData.personal.status}</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Architecting Next-Gen <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Digital Experiences</span>
          </h1>

          {/* Typing Sub-headline */}
          <div className="h-10 flex items-center justify-center">
            <p className="text-xl sm:text-2xl font-mono text-slate-300">
              I am a <span className="text-violet-400 font-semibold">{text}</span>
              <span className="animate-pulse text-cyan-400 font-bold ml-0.5">|</span>
            </p>
          </div>

          {/* Bio Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Specializing in high-performance web applications, intelligent AI integrations, and cloud infrastructure with zero compromise on visual elegance.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-200"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenTerminal}
              className="px-6 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-cyan-400 font-medium text-sm flex items-center gap-2 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-200"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Interactive CLI</span>
            </button>
          </div>

          {/* Social Icons Bar */}
          <div className="pt-6 flex items-center justify-center gap-6 text-slate-400">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:text-cyan-400 hover:bg-white/10 hover:scale-110 transition-all"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:text-cyan-400 hover:bg-white/10 hover:scale-110 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.personal.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:text-cyan-400 hover:bg-white/10 hover:scale-110 transition-all"
              title="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:text-cyan-400 hover:bg-white/10 hover:scale-110 transition-all"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
