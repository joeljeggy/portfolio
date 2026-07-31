import React, { useState, useEffect } from 'react';
import { ArrowUp, Cloud, Heart, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 py-12 relative bg-[#080b12] text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copy */}
        <div className="flex items-center gap-3">
          <Code2 className="w-5 h-5 text-cyan-400" />
          <span>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</span>
        </div>

        {/* Center: Cloudflare Pages Badge */}
        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-slate-300">
          <Cloud className="w-4 h-4 text-cyan-400" />
          <span>Hosted on <span className="text-white font-semibold">Cloudflare Pages</span> (Free Tier)</span>
        </div>

        {/* Right: Live Clock & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-cyan-400/80 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20">
            LOC: {time || '12:00:00 PM'}
          </span>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg glass-panel hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-colors"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
