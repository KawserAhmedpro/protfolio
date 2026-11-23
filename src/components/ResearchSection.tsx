import React, { useState } from 'react';
import { BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { ResearchTopic } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const ResearchSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<ResearchTopic | null>(PORTFOLIO_DATA.researchArchive[0]);

  return (
    <section id="research" className="relative py-28 px-4 sm:px-6 bg-[#090A0E] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C8FF00] tracking-wider uppercase mb-2">
              <span>06 // DISCOVERY & CURIOSITY</span>
              <span>•</span>
              <span className="text-zinc-500">DIGITAL LAB NOTEBOOK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white">
              Research & Technical Reading Log
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-500 max-w-sm sm:text-right">
            Dissecting literature in Machine Learning, Transformer architectures, and Database storage engines.
          </div>
        </div>

        {/* Research Topics Catalog */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {PORTFOLIO_DATA.researchArchive.map((item) => {
            const isSelected = selectedTopic?.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedTopic(item);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#121622] border-[#C8FF00]/50 shadow-xl'
                    : 'bg-[#0D1016] border-white/5 hover:border-white/20 hover:bg-[#10131B]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-3">
                    <span className="text-[#C8FF00] font-bold">{item.code}</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-zinc-400 text-[10px] border border-white/10">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#C8FF00] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono text-cyan-400 mb-3">
                    // DOMAIN: {item.domain}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div className="text-[11px] text-zinc-400 font-sans">
                    <strong className="text-zinc-300 font-semibold font-mono">Curiosity Trigger: </strong>
                    {item.curiosityReason}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.keyConcepts.map((concept) => (
                      <span
                        key={concept}
                        className="px-2 py-0.5 rounded bg-white/5 font-mono text-[10px] text-zinc-400 border border-white/5"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between font-mono text-[11px] text-zinc-500">
                    <span>{item.notesCount} SYNTHESIZED NOTES</span>
                    <span className="text-[#C8FF00] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Explore Notes</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Research Philosophy Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0F1218] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-[#C8FF00] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white font-heading">
                Literature Over Hype: The Research Habit
              </div>
              <p className="text-xs text-zinc-400 font-sans mt-0.5">
                I built ResearchMate specifically to maintain this daily practice — archiving papers, writing summaries, and connecting theoretical papers to backend implementation.
              </p>
            </div>
          </div>

          <a
            href="https://kawserahmedpro.github.io/ReasearchMate/"
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.playClick()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-200 hover:text-white shrink-0 transition-colors"
          >
            <span>Open ResearchMate Workspace</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
