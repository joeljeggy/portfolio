import React from 'react';
import { FileText, Award, Cpu, Brain, Home, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  FileText: FileText,
  Award: Award,
  Cpu: Cpu,
  Brain: Brain,
  Home: Home,
  Eye: Eye
};

export default function HighlightsFocusSection() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Technical Highlights Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <Sparkles className="w-4 h-4 text-white" />
            <span>Technical Capabilities</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.highlights.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Brain;
              return (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-xl border border-zinc-800 space-y-3 bg-zinc-950/40"
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                    <IconComp className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Focus Banner */}
        <div className="glass-panel p-8 rounded-xl border border-zinc-800 bg-zinc-950/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Active Engineering Focus</span>
              <h3 className="text-xl font-bold text-white mt-1">What I'm Currently Building</h3>
            </div>
            <span className="text-xs font-mono text-zinc-300 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 self-start sm:self-auto">
              🟢 In Development
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioData.currentFocus.map((focusItem, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                <span className="text-xs font-medium text-zinc-300 leading-relaxed">{focusItem}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
