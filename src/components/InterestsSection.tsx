import React from 'react';
import { Target, Trophy, BookMarked, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const InterestsSection: React.FC = () => {
  const icons = [Target, Trophy, BookMarked, Terminal];

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-[#0B0D12] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C8FF00] tracking-wider uppercase mb-2">
            <span>// HUMAN DIMENSION</span>
            <span>•</span>
            <span className="text-zinc-500">BEYOND THE TERMINAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-white">
            Curiosities & Personal Interests
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.interests.map((interest, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={interest.title}
                onMouseEnter={() => sound.playHover()}
                className="p-5 rounded-xl bg-[#0D1016] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="w-5 h-5 text-[#C8FF00] group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-[10px] text-zinc-500">0{idx + 1}</span>
                  </div>

                  <h3 className="font-bold text-white text-sm mb-1 font-heading group-hover:text-[#C8FF00] transition-colors">
                    {interest.title}
                  </h3>

                  <div className="text-[10px] font-mono text-zinc-500 mb-2">
                    {interest.monikers}
                  </div>

                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-sans italic text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  "{interest.reflection}"
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
