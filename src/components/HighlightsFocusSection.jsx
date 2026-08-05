import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HighlightsFocusSection() {
  return (
    <section className="py-10 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Current Focus Banner */}
        <div className="glass-panel p-8 rounded-xl border border-zinc-800 bg-zinc-950/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white">What I'm Currently Building</h3>
            </div>
            <span className="text-xs font-mono text-zinc-300 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 self-start sm:self-auto">
              🟢 In Development
            </span>
          </div>

          {/* Single Active Build Display */}
          <div className="bg-zinc-900/60 p-5 rounded-lg border border-zinc-800 flex items-start gap-3.5">
            <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">TempoRun Extension: Step Counting & Auto Stride Calibration</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {portfolioData.currentFocus[0]}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
