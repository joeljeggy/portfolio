import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proven track record of engineering leadership, scalable systems architecture, and product delivery.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0b0f19] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300 shadow-md shadow-cyan-500/50" />

              {/* Glassmorphic Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl glass-panel-hover space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
