import React from 'react';
import { Cpu, Brain, Database, Wrench, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsView() {
  const { skills } = portfolioData;

  const categories = [
    { title: 'Programming Languages', list: skills.programming, icon: Code2 },
    { title: 'AI & Vector Systems', list: skills.ai, icon: Brain },
    { title: 'Backend & Web Stack', list: skills.backend, icon: Database },
    { title: 'Embedded & Hardware', list: skills.embedded, icon: Cpu },
    { title: 'Engineering Tools', list: skills.tools, icon: Wrench },
  ];

  return (
    <section id="skills" className="py-24 relative text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            <Cpu className="w-3.5 h-3.5 text-white" />
            <span>Technical Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Skill Set
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Categorized technical stack focused on depth, performance, and hardware-software synergy.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div key={idx} className="glass-panel p-6 rounded-xl border border-zinc-800 bg-zinc-950/40 space-y-4">
                <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
                  <IconComp className="w-5 h-5 text-white" />
                  <h3 className="text-base font-bold text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.list.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="text-xs font-mono text-zinc-300 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-600 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
