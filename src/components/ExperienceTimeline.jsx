import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <Briefcase className="w-3.5 h-3.5 text-white" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Hackathons
          </h2>
        </div>

        {/* Experience Timeline Cards */}
        <div className="grid grid-cols-1 gap-6">
          {portfolioData.experience.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-xl border border-zinc-800 bg-zinc-950/60 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-zinc-300 font-medium mt-1">
                    <Building2 className="w-4 h-4 text-zinc-400" />
                    <span>{exp.institution}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
                {exp.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
