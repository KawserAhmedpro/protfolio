import React, { useState } from 'react';
import { Search, Terminal, Cpu, Database, Wrench, Sparkles, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Capabilities', icon: Sparkles },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'backend', label: 'Backend Engineering', icon: Cpu },
    { id: 'database', label: 'Databases & Storage', icon: Database },
    { id: 'tools', label: 'Developer Tooling', icon: Wrench },
    { id: 'exploring', label: 'Active Radar / AI', icon: Terminal },
  ];

  const filteredSkills = PORTFOLIO_DATA.skills.filter((skill) => {
    const matchesCat = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.context.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 bg-[#090A0E] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C8FF00] tracking-wider uppercase mb-2">
              <span>04 // TECHNICAL INDEX</span>
              <span>•</span>
              <span className="text-zinc-500">HONEST CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white">
              Skills, Stack & Systems
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-500 max-w-sm sm:text-right">
            Zero fake percentage bars. Clear distinction between what I build with and what I am currently exploring.
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#0D1016] border border-white/10">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    sound.playClick();
                    setSelectedCategory(cat.id);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#C8FF00] text-black font-bold shadow-md shadow-[#C8FF00]/15'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter technologies..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[#0D1016] border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#C8FF00]/50 font-mono"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const isExploring = skill.category === 'exploring';
            return (
              <div
                key={skill.name}
                className={`p-5 rounded-xl border transition-all flex flex-col justify-between group ${
                  isExploring
                    ? 'bg-[#12141C] border-purple-500/20 hover:border-purple-400/40'
                    : 'bg-[#0D1016] border-white/5 hover:border-[#C8FF00]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-base font-bold text-white group-hover:text-[#C8FF00] transition-colors">
                      {skill.name}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                        isExploring
                          ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                          : 'bg-white/5 text-zinc-300 border border-white/10'
                      }`}
                    >
                      {skill.badge || (isExploring ? 'Exploring' : 'Used in Practice')}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 font-mono text-[11px] text-zinc-500">
                  <span className="text-zinc-400 font-semibold">Context: </span>
                  <span>{skill.context}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C8FF00]" />
            <span>LEARNING CADENCE: Reading docs & building proof-of-concepts every week.</span>
          </div>
          <span className="text-zinc-500">C# • ASP.NET Core • PostgreSQL • Python</span>
        </div>
      </div>
    </section>
  );
};
