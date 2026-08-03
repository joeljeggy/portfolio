import React from 'react';
import { User, Compass, Brain, Cpu, Code2, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutView() {
  return (
    <section id="about" className="py-24 relative text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            <User className="w-3.5 h-3.5 text-white" />
            <span>Engineering Story</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Joel Jeggy
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Computer Science Engineer passionate about building real-world AI systems, microcontroller hardware, and multi-agent LLM memory layers.
          </p>
        </div>

        {/* Story Summary Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-xl border border-zinc-800 space-y-4 bg-zinc-950/60">
          <h2 className="text-2xl font-bold text-white">Engineering Philosophy</h2>
          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
            I believe software should demonstrate real technical depth rather than superficial abstractions. My work bridges the gap between low-level hardware microcontrollers (ESP32/ESP8266) and high-level artificial intelligence systems (vector retrieval, hybrid SentenceTransformers, and generative LLMs).
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Compass className="w-5 h-5 text-white" /> Engineering Journey
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.journey.map((step, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl border border-zinc-800 bg-zinc-950/40 space-y-3">
                <span className="text-xs font-mono text-zinc-300 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                  {step.year}
                </span>
                <h4 className="text-lg font-bold text-white mt-1">{step.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests Grid */}
        <div className="glass-panel p-8 rounded-xl border border-zinc-800 bg-zinc-950/60 space-y-6">
          <h3 className="text-xl font-bold text-white">Primary Technical Focus Areas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Multi-Agent LLMs', icon: Brain },
              { name: 'Microcontrollers', icon: Cpu },
              { name: 'Computer Vision', icon: Globe },
              { name: 'Home Automation', icon: Compass },
              { name: 'Open Source', icon: Code2 },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800 text-center space-y-2">
                  <IconComponent className="w-6 h-6 text-white mx-auto" />
                  <div className="text-xs font-semibold text-zinc-300">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
