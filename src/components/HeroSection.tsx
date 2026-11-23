import React, { useState } from 'react';
import { ArrowDown, Terminal, Sparkles, MapPin, Cpu, Database, Network, BookOpen, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface HeroSectionProps {
  onOpenTerminal: () => void;
  onOpenApiSimulator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenTerminal,
  onOpenApiSimulator,
}) => {
  const [activeNode, setActiveNode] = useState<string | null>('aspnet');

  const architectureNodes = [
    {
      id: 'client',
      label: 'HTTP Client',
      sub: 'JSON / REST',
      icon: Network,
      color: 'text-zinc-400',
      activeBorder: 'border-zinc-400',
      description: 'Incoming HTTP requests from web clients, desktop frontends, and curl CLI.',
    },
    {
      id: 'aspnet',
      label: 'ASP.NET Core API',
      sub: 'Kestrel / Middleware',
      icon: Cpu,
      color: 'text-[#C8FF00]',
      activeBorder: 'border-[#C8FF00]',
      description: 'C# controllers, dependency injection, JWT auth policies, model validation, and RFC 7807 error responses.',
    },
    {
      id: 'efcore',
      label: 'EF Core 8 / LINQ',
      sub: 'Data Mapping',
      icon: Layers,
      color: 'text-cyan-400',
      activeBorder: 'border-cyan-400',
      description: 'Type-safe LINQ queries, DbContext lifecycle, relational migrations, and repository abstractions.',
    },
    {
      id: 'postgres',
      label: 'PostgreSQL DB',
      sub: 'ACID / B-Tree',
      icon: Database,
      color: 'text-indigo-400',
      activeBorder: 'border-indigo-400',
      description: 'Structured relational data, foreign keys, transaction boundaries, and indexing optimization.',
    },
    {
      id: 'research',
      label: 'AI & Research Lab',
      sub: 'Papers / Vectors',
      icon: BookOpen,
      color: 'text-emerald-400',
      activeBorder: 'border-emerald-400',
      description: 'Reading machine learning research papers, analyzing transformer attention, and experimenting with vector embeddings.',
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 flex flex-col justify-between overflow-hidden bg-grid-subtle">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C8FF00]/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Top Status & Location Badge */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
            <span>MEC CSE UNDERGRADUATE</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
            <MapPin className="w-3 h-3 text-[#C8FF00]" />
            <span>MYMENSINGH, BANGLADESH</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/5 text-xs font-mono text-zinc-500">
            <span>STATUS: 200 OK // READY</span>
          </div>
        </div>

        {/* Main Kinetic Typography */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight text-white leading-[1.05]">
            KAWSER AHMED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8FF00] via-lime-200 to-white">
              RATUL
            </span>
          </h1>

          <div className="max-w-3xl pt-2">
            <p className="text-xl sm:text-2xl md:text-3xl text-zinc-200 font-sans font-light tracking-tight leading-snug">
              Computer Science student. Developer in progress.{' '}
              <span className="text-zinc-400">
                Curious about how backend systems and machine intelligence work under the hood.
              </span>
            </p>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans max-w-2xl leading-relaxed">
              Crafting structured Web APIs with <strong className="text-zinc-200 font-semibold">C# & ASP.NET Core</strong>, managing relational data in <strong className="text-zinc-200 font-semibold">PostgreSQL</strong>, and reading academic papers on <strong className="text-zinc-200 font-semibold">AI & Transformers</strong>.
            </p>
          </div>
        </div>

        {/* Interactive Architecture Core: The Systems Workbench */}
        <div className="mt-10 p-5 sm:p-7 rounded-2xl bg-[#0D1016]/90 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
              <Sparkles className="w-4 h-4 text-[#C8FF00]" />
              <span className="text-white font-bold tracking-wider uppercase">Interactive Architecture Core</span>
              <span className="text-zinc-600">// Click nodes to inspect</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
              <span>PROTOCOL: HTTP ➔ C# CLR ➔ DB / AI</span>
            </div>
          </div>

          {/* Interactive Circuit Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-5">
            {architectureNodes.map((node) => {
              const Icon = node.icon;
              const isSelected = activeNode === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveNode(node.id);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="NODE"
                  className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between h-28 group ${
                    isSelected
                      ? `bg-[#161B26] ${node.activeBorder} shadow-lg shadow-black/60`
                      : 'bg-black/30 border-white/5 hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <Icon className={`w-5 h-5 ${node.color}`} />
                    <span className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300">
                      0{architectureNodes.indexOf(node) + 1}
                    </span>
                  </div>

                  <div>
                    <div className="font-mono text-xs font-bold text-white group-hover:text-[#C8FF00] transition-colors truncate">
                      {node.label}
                    </div>
                    <div className="font-mono text-[10px] text-zinc-400 truncate">
                      {node.sub}
                    </div>
                  </div>

                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8FF00]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          {activeNode && (
            <div className="mt-4 p-3.5 rounded-lg bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs text-zinc-300 animate-fade-in">
              <div className="flex items-center gap-2">
                <span className="text-[#C8FF00] font-bold">
                  {architectureNodes.find((n) => n.id === activeNode)?.label}:
                </span>
                <span className="text-zinc-400 font-sans text-xs">
                  {architectureNodes.find((n) => n.id === activeNode)?.description}
                </span>
              </div>
              <button
                onClick={() => {
                  sound.playTerminal();
                  onOpenApiSimulator();
                }}
                className="text-[11px] text-[#C8FF00] hover:underline flex items-center gap-1 self-start sm:self-auto shrink-0"
              >
                <span>Test in API Workbench</span>
                <span>→</span>
              </button>
            </div>
          )}
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            onClick={() => sound.playClick()}
            data-cursor="PROJECTS"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#C8FF00] hover:bg-[#b5e600] text-[#090A0E] font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#C8FF00]/15"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={() => {
              sound.playClick();
              onOpenApiSimulator();
            }}
            data-cursor="SIMULATOR"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#141822] hover:bg-[#1A202E] border border-white/10 hover:border-[#C8FF00]/50 text-white font-mono text-xs font-semibold tracking-wide transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C8FF00]" />
            <span>Launch API Workbench</span>
          </button>

          <button
            onClick={() => {
              sound.playTerminal();
              onOpenTerminal();
            }}
            data-cursor="CLI"
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-transparent hover:bg-white/5 border border-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-all"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI ~</span>
          </button>
        </div>
      </div>

      {/* Viewport Bottom Monospace Ticker */}
      <div className="max-w-7xl mx-auto w-full pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/5 font-mono text-[11px] text-zinc-500">
        <div className="flex items-center gap-4">
          <span>COORDINATES: {PORTFOLIO_DATA.personal.coordinates}</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">SYSTEM: ASP.NET CORE / POSTGRESQL</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-400">LEARNING. BUILDING. EXPLORING.</span>
        </div>
      </div>
    </section>
  );
};
