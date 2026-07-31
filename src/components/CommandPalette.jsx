import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Joel J. Interactive CLI [v1.0.0]' },
    { type: 'system', text: 'Type "help" to see available commands or click a shortcut below.' }
  ]);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const output = portfolioData.terminalCommands[cmd] || `Command not found: "${cmd}". Type "help" for options.`;
    
    setHistory(prev => [
      ...prev,
      { type: 'user', text: `$ ${cmdStr}` },
      { type: 'output', text: output }
    ]);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  const quickCmds = ['help', 'bio', 'skills', 'projects', 'contact'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0d1322] border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl font-mono text-sm">
        
        {/* Terminal Header */}
        <div className="bg-[#121929] px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs text-slate-400 font-semibold ml-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" /> joel@portfolio:~
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Command Shortcuts */}
        <div className="px-4 py-2 bg-[#101625] border-b border-white/5 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-slate-500 font-semibold uppercase text-[10px]">Shortcuts:</span>
          {quickCmds.map((qc) => (
            <button
              key={qc}
              onClick={() => handleCommand(qc)}
              className="px-2.5 py-1 rounded bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 transition-all text-[11px]"
            >
              {qc}
            </button>
          ))}
        </div>

        {/* Terminal Console Stream */}
        <div className="p-4 h-72 overflow-y-auto space-y-2 text-xs">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-0.5">
              {item.type === 'user' && (
                <div className="text-cyan-400 font-semibold">{item.text}</div>
              )}
              {item.type === 'system' && (
                <div className="text-slate-400 italic">{item.text}</div>
              )}
              {item.type === 'output' && (
                <div className="text-slate-200 pl-3 border-l-2 border-cyan-500/40 whitespace-pre-wrap leading-relaxed">
                  {item.text}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Form */}
        <form onSubmit={handleSubmit} className="p-3 bg-[#0a0e1a] border-t border-white/10 flex items-center gap-2">
          <span className="text-cyan-400 font-bold ml-1">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-slate-100 focus:outline-none text-xs font-mono placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="p-1.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
}
