import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 relative text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            <Briefcase className="w-3.5 h-3.5 text-white" />
            <span>Career & Education</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional Journey
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Engineering education at MACE Kothamangalam and hackathon leadership.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-zinc-800 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-white group-hover:scale-125 transition-all duration-200" />

              {/* Glassmorphic Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-xl border border-zinc-800 bg-zinc-950/40 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-300 font-medium mt-1">
                      <Building2 className="w-4 h-4 text-zinc-400" />
                      <span>{exp.institution}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-white" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {exp.details}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
