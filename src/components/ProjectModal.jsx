import React from 'react';
import { X, ExternalLink, Github, CheckCircle, Cpu, Zap } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl glass-panel rounded-2xl border border-white/15 overflow-hidden shadow-2xl space-y-0 my-8">
        
        {/* Header Bar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-surface/80">
          <div>
            <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest">
              {project.category} Case Study
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Visual Image */}
        <div className="relative h-64 sm:h-80 bg-slate-900 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-90" />
        </div>

        {/* Modal Content Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-2">Project Overview</h4>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Key Achievements / Metrics */}
          <div>
            <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Zap className="w-4 h-4" /> Key Performance Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs font-mono text-emerald-300 font-medium">{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Matrix */}
          <div>
            <h4 className="text-sm font-mono text-violet-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" /> Architecture & Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono text-slate-200 bg-white/5 border border-white/10 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-medium text-xs flex items-center gap-2 border border-white/10 transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white"
            >
              Close Window
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
