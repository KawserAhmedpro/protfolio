import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subjectTopic, setSubjectTopic] = useState('Backend Engineering / ASP.NET Core');
  const [messageText, setMessageText] = useState('');
  const [dispatchStatus, setDispatchStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.socialLinks.email);
    sound.playSuccess();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();
    setDispatchStatus('Opening email client...');
    
    const subject = encodeURIComponent(`[Portfolio Dispatch] ${subjectTopic}`);
    const body = encodeURIComponent(
      messageText || `Hi Ratul,\n\nI came across your personal digital portfolio and wanted to connect regarding ${subjectTopic}.\n\nBest regards.`
    );
    
    setTimeout(() => {
      window.location.href = `mailto:${PORTFOLIO_DATA.socialLinks.email}?subject=${subject}&body=${body}`;
      setDispatchStatus('Dispatch queued. Looking forward to speaking!');
      setTimeout(() => setDispatchStatus(null), 3000);
    }, 400);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 bg-[#090A0E] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C8FF00] tracking-wider uppercase mb-2">
              <span>07 // DISPATCH & CONTACT</span>
              <span>•</span>
              <span className="text-zinc-500">OPEN CHANNELS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white">
              Have something interesting in mind? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8FF00] to-white">
                Let's connect.
              </span>
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-500 max-w-sm sm:text-right">
            Open for technical discussions, open-source projects, and engineering conversations.
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links & Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[#0F1218] border border-white/10 shadow-xl space-y-4 group">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C8FF00]" />
                  <span>DIRECT INBOX</span>
                </span>
                <span className="text-[#C8FF00] font-bold">REPLY &lt; 24H</span>
              </div>

              <div>
                <a
                  href={`mailto:${PORTFOLIO_DATA.socialLinks.email}`}
                  className="text-lg sm:text-xl font-bold font-mono text-white hover:text-[#C8FF00] transition-colors break-all"
                >
                  {PORTFOLIO_DATA.socialLinks.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#C8FF00]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Email Copied to Clipboard!' : 'Copy Email Address'}</span>
                </button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* GitHub */}
              <a
                href={PORTFOLIO_DATA.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="p-4 rounded-xl bg-[#0D1016] border border-white/5 hover:border-[#C8FF00]/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-zinc-400 group-hover:text-white" />
                  <div>
                    <div className="text-xs font-bold text-white font-mono">GitHub</div>
                    <div className="text-[10px] text-zinc-500 font-mono">@KawserAhmedpro</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-[#C8FF00] transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={PORTFOLIO_DATA.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="p-4 rounded-xl bg-[#0D1016] border border-white/5 hover:border-cyan-400/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400" />
                  <div>
                    <div className="text-xs font-bold text-white font-mono">LinkedIn</div>
                    <div className="text-[10px] text-zinc-500 font-mono">kawserahmedratulpro</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>

            {/* Location & Academic Base Info */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-zinc-400 space-y-1">
              <div><strong className="text-zinc-200">BASE:</strong> Mymensingh Engineering College (MEC)</div>
              <div><strong className="text-zinc-200">LOCATION:</strong> Mymensingh, Bangladesh (UTC+6)</div>
              <div><strong className="text-zinc-200">STATUS:</strong> Open for learning collaborations & internships</div>
            </div>
          </div>

          {/* Right Column: Quick Dispatch Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0F1218] border border-white/10 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-mono text-xs">
              <span className="text-white font-bold flex items-center gap-2">
                <Send className="w-4 h-4 text-[#C8FF00]" />
                <span>QUICK DISPATCH TRANSMITTER</span>
              </span>
              <span className="text-zinc-500">DIRECT DISPATCH</span>
            </div>

            <form onSubmit={handleDispatch} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-2">
                  Select Topic of Inquiry:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Backend Engineering / ASP.NET Core',
                    'Database & Architecture Discussion',
                    'Machine Learning & Paper Reading',
                    'Open Source Collaboration',
                  ].map((topic) => {
                    const isSelected = subjectTopic === topic;
                    return (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => {
                          sound.playClick();
                          setSubjectTopic(topic);
                        }}
                        className={`p-2.5 rounded-lg text-left text-xs font-mono border transition-all ${
                          isSelected
                            ? 'bg-[#C8FF00]/15 border-[#C8FF00]/60 text-white font-semibold'
                            : 'bg-black/30 border-white/5 text-zinc-400 hover:border-white/20'
                        }`}
                      >
                        {topic}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-2">
                  Message / Brief Note:
                </label>
                <textarea
                  rows={4}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Hello Ratul, I was exploring your portfolio and wanted to discuss..."
                  className="w-full p-3.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs placeholder-zinc-600 focus:outline-none focus:border-[#C8FF00]/50 font-sans"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  data-cursor="DISPATCH"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C8FF00] hover:bg-[#b5e600] text-[#090A0E] font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#C8FF00]/15 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </button>

                {dispatchStatus && (
                  <span className="font-mono text-xs text-[#C8FF00] animate-pulse">
                    {dispatchStatus}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
