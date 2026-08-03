import React from 'react';
import { ArrowRight, Github, Code2, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HeroSection({ onOpenTerminal, onNavigate }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full Width Hero Column */}
        <div className="max-w-3xl space-y-8 relative z-10">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span>{portfolioData.personal.status}</span>
          </div>

          {/* Name & Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-7xl font-extrabold text-white tracking-tight">
              {portfolioData.personal.name}
            </h1>
            <div className="text-xl sm:text-3xl font-mono text-zinc-400 font-semibold">
              {portfolioData.personal.title}
            </div>
          </div>

          {/* Core Mission Headline */}
          <p className="text-xl sm:text-2xl text-zinc-200 font-sans leading-relaxed">
            {portfolioData.personal.headline}
          </p>

          {/* Bio Summary */}
          <p className="text-base text-zinc-400 leading-relaxed max-w-2xl">
            {portfolioData.personal.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('projects')}
              className="px-6 py-3 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-sm flex items-center gap-2 shadow-md transition-all"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm flex items-center gap-2 border border-zinc-800 backdrop-blur-md transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={portfolioData.personal.leetcode}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm flex items-center gap-2 border border-zinc-800 backdrop-blur-md transition-all"
            >
              <Code2 className="w-4 h-4 text-zinc-400" />
              <span>LeetCode Profile</span>
            </a>

            <button
              onClick={onOpenTerminal}
              className="px-4 py-3 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 text-xs font-mono flex items-center gap-2 transition-all"
              title="Command CLI"
            >
              <Terminal className="w-4 h-4" />
              <span>Cmd + K</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
