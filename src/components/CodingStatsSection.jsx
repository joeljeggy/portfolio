import React from 'react';
import { Code2, ExternalLink, BarChart3 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CodingStatsSection() {
  const { leetcode } = portfolioData.codingStats;

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
              LeetCode Metrics
            </h2>
          </div>
        </div>

        {/* LeetCode Card Container */}
        <div className="w-full">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-zinc-800 bg-zinc-950/60 space-y-6">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">LeetCode Profile</h3>
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
                className="px-3.5 py-2 rounded-lg bg-white text-black font-semibold text-xs flex items-center gap-1.5 hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Problem Counters */}
            <div className="bg-zinc-900 p-5 rounded-lg border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Total Solved</span>
                <span className="text-xl font-extrabold text-white font-mono">{leetcode.totalSolved} Problems</span>
              </div>

              {/* Easy 9, Med 15, Hard 2 Pills */}
              <div className="grid grid-cols-3 gap-3 text-center font-mono text-xs">
                <div className="bg-zinc-950/80 p-3 rounded-lg border border-zinc-800 space-y-1">
                  <span className="text-[10px] text-zinc-400 uppercase block">Easy</span>
                  <span className="font-bold text-zinc-200 text-base">{leetcode.easySolved}</span>
                </div>
                <div className="bg-zinc-950/80 p-3 rounded-lg border border-zinc-800 space-y-1">
                  <span className="text-[10px] text-zinc-400 uppercase block">Med.</span>
                  <span className="font-bold text-white text-base">{leetcode.mediumSolved}</span>
                </div>
                <div className="bg-zinc-950/80 p-3 rounded-lg border border-zinc-800 space-y-1">
                  <span className="text-[10px] text-zinc-400 uppercase block">Hard</span>
                  <span className="font-bold text-zinc-400 text-base">{leetcode.hardSolved}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 text-xs font-mono text-zinc-400 flex items-center justify-between border-t border-zinc-800">
              <span>DSA Focus: Data Structures & Algorithms</span>
              <span className="text-white">Active LeetCode Solver</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
