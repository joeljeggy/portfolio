import React from 'react';
import { ExternalLink, Github, Zap, Brain } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResearchView() {
  const { research } = portfolioData;

  return (
    <section id="research" className="py-24 relative text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            <Brain className="w-3.5 h-3.5 text-white" />
            <span>AI Research & Benchmarks</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Research & Publications
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Exploring multi-agent long-term memory systems, hybrid vector retrieval, and temporal context decay algorithms.
          </p>
        </div>

        {/* Paper Feature Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-xl border border-zinc-800 space-y-8 bg-zinc-950/60 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{research.status}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">{research.title}</h2>
            </div>
            
            <a
              href={research.paperUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-xs flex items-center gap-2 self-start sm:self-auto shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>View Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Abstract */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Abstract & Core Thesis</h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed bg-zinc-900/60 p-5 rounded-xl border border-zinc-800">
              "{research.abstract}"
            </p>
          </div>

          {/* Mathematical Decay Formula */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Ebbinghaus Memory Decay Formula</h3>
            <div className="bg-[#0a0a0c] p-4 rounded-xl border border-zinc-800 font-mono text-xs text-zinc-200 space-y-2">
              <div className="text-zinc-400">// Temporal Retention Equation:</div>
              <div className="text-white font-bold">R(t) = e ^ ( -t / S )</div>
              <div className="text-zinc-400 text-[11px] pt-1">
                Where R(t) is context retention probability, t is dialogue turn distance, and S is memory stability threshold.
              </div>
            </div>
          </div>

          {/* Benchmarks Grid */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-white" /> Empirical Benchmark Results
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {research.benchmarks.map((bm, idx) => (
                <div key={idx} className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl space-y-1">
                  <div className="text-xs font-mono text-white font-semibold">{bm.metric}</div>
                  <div className="text-xs text-zinc-400">{bm.value}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
