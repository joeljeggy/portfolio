import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Joel Jeggy Terminal Interface [v1.0.0]' },
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

  const quickCmds = ['help', 'bio', 'skills', 'projects', 'contact', 'education'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0a0a0c] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl font-mono text-sm">
        
        {/* Terminal Header */}
        <div className="bg-zinc-900 px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="text-xs text-zinc-300 font-semibold ml-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-zinc-400" /> joel@portfolio:~
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Command Shortcuts */}
        <div className="px-4 py-2 bg-zinc-950 border-b border-zinc-800 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-zinc-500 font-semibold uppercase text-[10px]">Shortcuts:</span>
          {quickCmds.map((qc) => (
            <button
              key={qc}
              onClick={() => handleCommand(qc)}
              className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all text-[11px]"
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
                <div className="text-white font-bold">{item.text}</div>
              )}
              {item.type === 'system' && (
                <div className="text-zinc-500 italic">{item.text}</div>
              )}
              {item.type === 'output' && (
                <div className="text-zinc-300 pl-3 border-l-2 border-zinc-700 whitespace-pre-wrap leading-relaxed">
                  {item.text}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Form */}
        <form onSubmit={handleSubmit} className="p-3 bg-zinc-950 border-t border-zinc-800 flex items-center gap-2">
          <span className="text-white font-bold ml-1">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent text-white focus:outline-none text-xs font-mono placeholder:text-zinc-600"
          />
          <button
            type="submit"
            className="p-1.5 rounded bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
}
