import React from 'react';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Cpu, Layers } from 'lucide-react';

export default function ProjectDetailView({ project, onBack }) {
  if (!project) return null;

  return (
    <div className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-fadeIn text-left">
      
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900 px-4 py-2 rounded-lg border border-zinc-800 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Projects Hub</span>
      </button>

      {/* Hero Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">
          <Layers className="w-3.5 h-3.5 text-white" />
          <span>{project.category} Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">{project.title}</h1>
        <p className="text-base sm:text-lg text-zinc-300 font-sans max-w-3xl">{project.subtitle}</p>
      </div>

      {/* Hero Image */}
      <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden glass-panel border border-zinc-800 bg-zinc-950">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
      </div>

      {/* Problem & Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-xl border border-zinc-800 bg-zinc-950/60 space-y-3">
          <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Problem Statement</h3>
          <p className="text-sm text-zinc-300 leading-relaxed">{project.problem}</p>
        </div>
        <div className="glass-panel p-6 rounded-xl border border-zinc-800 bg-zinc-950/60 space-y-3">
          <h3 className="text-xs font-mono text-white uppercase tracking-widest">Engineering Solution</h3>
          <p className="text-sm text-zinc-300 leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* Architecture Diagram */}
      {project.architecture && (
        <div className="space-y-3">
          <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2">
            <Cpu className="w-4 h-4 text-white" /> System Architecture Diagram
          </h3>
          <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 font-mono text-xs text-zinc-300 overflow-x-auto leading-tight">
            <pre>{project.architecture}</pre>
          </div>
        </div>
      )}

      {/* Engineering Rationale */}
      {project.decisions && (
        <div className="space-y-4">
          <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Key Engineering Rationale</h3>
          <div className="space-y-3">
            {project.decisions.map((dec, idx) => (
              <div key={idx} className="glass-panel p-5 rounded-xl border border-zinc-800 bg-zinc-950/40 text-xs text-zinc-300 leading-relaxed flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                <span>{dec}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions & Links */}
      <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-xs flex items-center gap-2 shadow-sm"
        >
          <Github className="w-4 h-4" />
          <span>Source Repository</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs border border-zinc-800 flex items-center gap-2 transition-all"
          >
            <ExternalLink className="w-4 h-4 text-white" />
            <span>Live Demo (recall.joeljeggy.dpdns.org)</span>
          </a>
        )}
      </div>

    </div>
  );
}
