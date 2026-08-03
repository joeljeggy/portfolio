import React, { useState, useEffect } from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
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
    <footer className="border-t border-zinc-800 py-12 relative bg-[#070709] text-zinc-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copy */}
        <div className="flex items-center gap-2.5 text-zinc-300">
          <Code2 className="w-4 h-4 text-white" />
          <span>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</span>
        </div>

        {/* Right: Live Clock & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-zinc-300 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">
            LOC: {time || '12:00:00 PM'}
          </span>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
