import React from 'react';
import { ArrowRight, Github, Linkedin, Code2, Mail, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HeroSection({ onOpenTerminal, onNavigate }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Full Width Hero Column */}
        <div className="max-w-2xl space-y-5 relative z-10">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono text-zinc-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span>{portfolioData.personal.status}</span>
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {portfolioData.personal.name}
            </h1>
            <div className="text-base sm:text-xl font-mono text-zinc-400 font-semibold">
              {portfolioData.personal.title}
            </div>
          </div>

          {/* Core Mission Headline */}
          <p className="text-base sm:text-lg text-zinc-200 font-sans leading-relaxed">
            {portfolioData.personal.headline}
          </p>

          {/* Bio Summary */}
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
            {portfolioData.personal.bio}
          </p>

          {/* Action Buttons & Social Icons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <button
              onClick={() => onNavigate('projects')}
              className="gsap-magnetic px-5 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-transform"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Social & Utility Icon Buttons */}
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="gsap-magnetic p-2.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 backdrop-blur-md transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="gsap-magnetic p-2.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 backdrop-blur-md transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.leetcode}
                target="_blank"
                rel="noreferrer"
                className="gsap-magnetic p-2.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 backdrop-blur-md transition-all"
                title="LeetCode Profile"
              >
                <Code2 className="w-4 h-4 text-zinc-400 group-hover:text-white" />
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="gsap-magnetic p-2.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 backdrop-blur-md transition-all"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="gsap-magnetic p-2.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 backdrop-blur-md transition-all flex items-center gap-1.5 text-xs font-mono"
                title="Command CLI (Cmd + K)"
              >
                <Terminal className="w-4 h-4" />
                <span className="text-[11px]">Cmd+K</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
