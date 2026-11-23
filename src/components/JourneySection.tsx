import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const JourneySection: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<number>(PORTFOLIO_DATA.journey.length - 1);

  return (
    <section id="journey" className="relative py-28 px-4 sm:px-6 bg-[#0B0D12] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C8FF00] tracking-wider uppercase mb-2">
              <span>05 // CHRONICLE</span>
              <span>•</span>
              <span className="text-zinc-500">ACADEMIC & CODE PATH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white">
              The Learning Journey
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-500 max-w-sm sm:text-right">
            Honest milestones from enrolling in CSE at MEC to architecting Web APIs and dissecting AI research.
          </div>
        </div>

        {/* Milestone Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Timeline Rail (Left) */}
          <div className="lg:col-span-5 space-y-3">
            {PORTFOLIO_DATA.journey.map((item, index) => {
              const isSelected = index === activeMilestone;
              return (
                <div
                  key={item.phase}
                  onClick={() => {
                    sound.playClick();
                    setActiveMilestone(index);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#151924] border-[#C8FF00]/50 shadow-lg'
                      : 'bg-[#0D1016] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-[#C8FF00] text-black'
                          : 'bg-white/5 text-zinc-400 group-hover:text-white'
                      }`}
                    >
                      {item.year}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white font-mono truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-zinc-500 truncate">{item.context}</div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#C8FF00] translate-x-1' : 'text-zinc-600'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Active Milestone Deep-Dive Card (Right) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0F1218] border border-white/10 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
              <span className="text-[#C8FF00] font-bold">
                {PORTFOLIO_DATA.journey[activeMilestone].year} // {PORTFOLIO_DATA.journey[activeMilestone].phase}
              </span>
              <span className="text-zinc-500">MEC CSE MILESTONE</span>
            </div>

            <div className="py-6 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                  {PORTFOLIO_DATA.journey[activeMilestone].title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  {PORTFOLIO_DATA.journey[activeMilestone].context}
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                {PORTFOLIO_DATA.journey[activeMilestone].description}
              </p>

              {/* Reflection / Takeaway Box */}
              <div className="p-4 rounded-xl bg-black/50 border-l-2 border-[#C8FF00] font-sans text-xs sm:text-sm text-zinc-300 space-y-1">
                <span className="font-mono text-[10px] text-[#C8FF00] font-bold uppercase tracking-wider block">
                  Core Engineering Takeaway:
                </span>
                <p className="italic">
                  "{PORTFOLIO_DATA.journey[activeMilestone].takeaway}"
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {PORTFOLIO_DATA.journey[activeMilestone].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono text-[11px] text-zinc-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Next / Prev navigation within card */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-zinc-500">
              <button
                disabled={activeMilestone === 0}
                onClick={() => {
                  sound.playClick();
                  setActiveMilestone((prev) => Math.max(0, prev - 1));
                }}
                className="hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                ← Previous Milestone
              </button>
              <button
                disabled={activeMilestone === PORTFOLIO_DATA.journey.length - 1}
                onClick={() => {
                  sound.playClick();
                  setActiveMilestone((prev) => Math.min(PORTFOLIO_DATA.journey.length - 1, prev + 1));
                }}
                className="hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                Next Milestone →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
