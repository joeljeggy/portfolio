import React from 'react';
import { Github, Code2, ExternalLink, BarChart3, CheckCircle2, Circle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CodingStatsSection() {
  const { leetcode, github } = portfolioData.codingStats;

  return (
    <section className="py-16 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <BarChart3 className="w-3.5 h-3.5 text-white" />
              <span>Coding Metrics</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              GitHub & LeetCode Profiles
            </h2>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* GitHub Stats Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-zinc-800 bg-zinc-950/60 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">GitHub Activity</h3>
                    <a
                      href={github.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1"
                    >
                      <span>@{github.username}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <a
                  href={github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-md bg-white text-black font-semibold text-xs flex items-center gap-1.5 hover:bg-zinc-200 transition-colors"
                >
                  <span>Follow</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* GitHub Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 space-y-1">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">Public Repositories</span>
                  <div className="text-2xl font-bold text-white">12</div>
                </div>

                <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 space-y-1">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">Contributions</span>
                  <div className="text-2xl font-bold text-white">450+ this year</div>
                </div>
              </div>

              {/* Open Source Repos */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Featured Open Source Repos</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href="https://github.com/joeljeggy/Recall-2.0"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 flex items-center justify-between text-xs text-zinc-200 transition-colors"
                  >
                    <span className="font-mono font-semibold">Recall-2.0</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>

                  <a
                    href="https://github.com/joeljeggy/TempoRun"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 flex items-center justify-between text-xs text-zinc-200 transition-colors"
                  >
                    <span className="font-mono font-semibold">TempoRun</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-3 text-xs font-mono text-zinc-400 flex items-center justify-between border-t border-zinc-800">
              <span>Primary Stack: C++, Python, JavaScript</span>
              <span className="text-white">Active Contributor</span>
            </div>
          </div>

          {/* LeetCode Card with Packed Bubble Chart & Exact Counters */}
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-zinc-800 bg-zinc-950/60 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">LeetCode Metrics</h3>
                    <a
                      href={leetcode.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1"
                    >
                      <span>@{leetcode.username}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <a
                  href={leetcode.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-md bg-white text-black font-semibold text-xs flex items-center gap-1.5 hover:bg-zinc-200 transition-colors"
                >
                  <span>View Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Exact Counters Bar */}
              <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Total Solved</span>
                  <span className="text-xl font-extrabold text-white font-mono">{leetcode.totalSolved} Problems</span>
                </div>

                {/* Easy 9, Med 15, Hard 2 Pills */}
                <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
                  <div className="bg-zinc-950/80 p-2.5 rounded border border-zinc-800 space-y-0.5">
                    <span className="text-[10px] text-zinc-400 uppercase block">Easy</span>
                    <span className="font-bold text-zinc-200 text-sm">{leetcode.easySolved}</span>
                  </div>
                  <div className="bg-zinc-950/80 p-2.5 rounded border border-zinc-800 space-y-0.5">
                    <span className="text-[10px] text-zinc-400 uppercase block">Med.</span>
                    <span className="font-bold text-white text-sm">{leetcode.mediumSolved}</span>
                  </div>
                  <div className="bg-zinc-950/80 p-2.5 rounded border border-zinc-800 space-y-0.5">
                    <span className="text-[10px] text-zinc-400 uppercase block">Hard</span>
                    <span className="font-bold text-zinc-400 text-sm">{leetcode.hardSolved}</span>
                  </div>
                </div>
              </div>

              {/* Packed Bubble Chart for Categories */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  <span>DSA Category Packed Bubble Chart</span>
                  <span className="text-zinc-300">Topic Coverage</span>
                </div>

                {/* Packed Bubble Container */}
                <div className="bg-zinc-900/60 p-4 rounded-lg border border-zinc-800 min-h-[160px] flex flex-wrap items-center justify-center gap-2.5">
                  {leetcode.categories.map((cat, idx) => (
                    <div
                      key={idx}
                      className="rounded-full bg-zinc-900 border border-zinc-700 hover:border-white hover:bg-white hover:text-black font-mono text-xs flex flex-col items-center justify-center p-3 text-center transition-all duration-200 shadow-md group cursor-pointer"
                      style={{
                        width: `${cat.size * 2}px`,
                        height: `${cat.size * 2}px`
                      }}
                      title={`${cat.name}: ${cat.count} problems`}
                    >
                      <span className="font-semibold text-[11px] leading-tight group-hover:text-black text-zinc-200">{cat.name}</span>
                      <span className="text-[10px] text-zinc-400 group-hover:text-zinc-700 font-bold">x{cat.count}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-3 text-xs font-mono text-zinc-400 flex items-center justify-between border-t border-zinc-800">
              <span>DSA Focus: Data Structures & Algorithms</span>
              <span className="text-white">Active LeetCode Solver</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
