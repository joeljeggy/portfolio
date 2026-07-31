import React from 'react';
import { Cpu, Code, Cloud, Trophy, Zap, Compass, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function BentoGridSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>Overview & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Crafting Digital Systems with <span className="text-gradient-cyan">Precision</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            A glance into my core tech stack, quantitative achievements, and engineering philosophy.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Bio & Philosophy (Span 2 cols) */}
          <div className="md:col-span-2 glass-panel p-8 rounded-2xl glass-panel-hover flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Full-Stack Craftsmanship</h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I combine solid architectural foundations with cutting-edge frontend tooling. Whether designing sub-millisecond API endpoints or building intuitive dark-mode user interfaces, I prioritize maintainability, security, and exceptional user experience.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" /> High Performance
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-300 bg-violet-500/10 px-3 py-1.5 rounded-lg border border-violet-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" /> Pixel Perfect
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" /> Cloud Native
              </span>
            </div>
          </div>

          {/* Card 2: Key Stats Counter (Span 2 cols on mobile, 1 col on lg) */}
          <div className="md:col-span-1 glass-panel p-8 rounded-2xl glass-panel-hover flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <Trophy className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Track Record</h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {portfolioData.stats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient-cyan">{stat.value}</div>
                  <div className="text-[11px] text-slate-400 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Cloud & AI Spotlight */}
          <div className="md:col-span-1 glass-panel p-8 rounded-2xl glass-panel-hover flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-pink-400">Active Focus</span>
              <h4 className="text-xl font-bold text-white mt-1">Cloudflare & AI Edge</h4>
              <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                Deploying serverless edge workloads using Cloudflare Workers, vector database retrieval pipelines, and fine-tuned LLM agents.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-mono text-cyan-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> 100% Free Hosting Optimized
            </div>
          </div>

          {/* Card 4: Tech Skills Matrix (Span Full Width across 4 cols) */}
          <div className="md:col-span-3 lg:col-span-4 glass-panel p-8 rounded-2xl glass-panel-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Technical Arsenal</h3>
                <p className="text-xs text-slate-400">Modern frameworks, languages & infrastructure tools</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolioData.skillCategories.map((category, idx) => (
                <div key={idx} className="bg-white/5 p-5 rounded-xl border border-white/5 space-y-3">
                  <h4 className="text-sm font-semibold text-cyan-400 flex items-center justify-between">
                    <span>{category.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">{category.skills.length} Techs</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-mono text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
