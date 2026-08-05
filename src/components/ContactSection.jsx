import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare, ShieldCheck, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitted(true);
    confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Direct Info & Copy Email */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                <MessageSquare className="w-3.5 h-3.5 text-white" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Let's Build Something <br />
                Extraordinary
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Have a project in mind, an embedded hardware challenge, or looking for a full-stack engineer? Feel free to reach out directly.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="glass-panel p-6 rounded-xl space-y-4 border border-zinc-800 bg-zinc-950/60">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Direct Contact Details</span>
              
              <div className="flex items-center justify-between bg-zinc-900 p-3.5 rounded-lg border border-zinc-800">
                <span className="text-sm font-mono text-zinc-200 select-all">{portfolioData.personal.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-md bg-white text-black text-xs font-mono font-semibold flex items-center gap-1.5 hover:bg-zinc-200 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-black" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              <div className="flex items-center justify-between bg-zinc-900 p-3.5 rounded-lg border border-zinc-800">
                <span className="text-sm font-mono text-zinc-200 select-all">{portfolioData.personal.phone}</span>
                <span className="text-xs font-mono text-zinc-400">Phone / WhatsApp</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-panel p-8 rounded-xl border border-zinc-800 bg-zinc-950/80 shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 text-white mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Transmitted!</h3>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                  Thank you for reaching out. I will respond to your message shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 rounded-lg glass-input text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-lg glass-input text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">Project Brief / Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project vision..."
                    className="w-full px-4 py-3 rounded-lg glass-input text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
