import React, { useState } from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI & ML', 'Cloud & DevOps', 'Fullstack'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
              <Layers className="w-3.5 h-3.5" />
              <span>Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Featured <span className="text-gradient-violet">Projects & Architecture</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              High-impact platforms engineered for performance, scale, and seamless user experiences.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-surface/50 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden glass-panel-hover flex flex-col justify-between group border border-white/10"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-[#0b0f19]/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30">
                  {project.category}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-cyan-400" />
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Metrics Badges */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.metrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20"
                      >
                        ⚡ {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.slice(0, 4).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[10px] font-mono text-slate-500 px-1 py-0.5">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group/btn"
                  >
                    <span>View Architecture</span>
                    <Sparkles className="w-3.5 h-3.5 group-hover/btn:rotate-45 transition-transform" />
                  </button>

                  <div className="flex items-center gap-3 text-slate-400">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-400 transition-colors"
                      title="Live Preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
