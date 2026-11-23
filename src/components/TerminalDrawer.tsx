import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApiSimulator: () => void;
}

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({
  isOpen,
  onClose,
  onOpenApiSimulator,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      command: 'ratul --version',
      output: (
        <div className="text-zinc-400 space-y-1">
          <p className="text-[#C8FF00] font-bold">
            KAWSER AHMED RATUL (RATUL) — Personal Digital Environment v2.4
          </p>
          <p>Undergraduate in Computer Science & Engineering @ Mymensingh Engineering College.</p>
          <p className="text-xs text-zinc-500">
            Type <span className="text-[#C8FF00]">help</span> for a list of available commands, or <span className="text-[#C8FF00]">curl /api/v1/health</span> to test the ASP.NET Core simulator.
          </p>
        </div>
      ),
      timestamp: '11:50:00',
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        sound.playTerminal();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    sound.playTerminal();
    const timestamp = new Date().toLocaleTimeString();
    const lower = cmd.toLowerCase();

    let output: React.ReactNode;

    if (lower === 'clear' || lower === 'cls') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (lower === 'help') {
      output = (
        <div className="space-y-1.5 text-xs">
          <p className="text-[#C8FF00] font-bold">AVAILABLE COMMANDS:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-zinc-300">
            <div><span className="text-white font-mono font-bold">whoami</span> — Identity & CSE background</div>
            <div><span className="text-white font-mono font-bold">projects</span> — Deployed applications & repos</div>
            <div><span className="text-white font-mono font-bold">skills</span> — Categorized technical index</div>
            <div><span className="text-white font-mono font-bold">curl &lt;path&gt;</span> — Fire simulated ASP.NET Core API</div>
            <div><span className="text-white font-mono font-bold">api</span> — Open full visual API simulator</div>
            <div><span className="text-white font-mono font-bold">research</span> — Research topics & papers explored</div>
            <div><span className="text-white font-mono font-bold">contact</span> — Email, GitHub, LinkedIn</div>
            <div><span className="text-white font-mono font-bold">status</span> — Real-time telemetry & coordinates</div>
            <div><span className="text-white font-mono font-bold">clear</span> — Wipe terminal history</div>
          </div>
        </div>
      );
    } else if (lower === 'whoami' || lower === 'about') {
      output = (
        <div className="space-y-1 text-xs text-zinc-300">
          <p className="text-[#C8FF00] font-bold">{PORTFOLIO_DATA.personal.name} ({PORTFOLIO_DATA.personal.nickname})</p>
          <p>{PORTFOLIO_DATA.personal.role} at {PORTFOLIO_DATA.personal.institution}, Bangladesh.</p>
          <p className="text-zinc-400">
            Aspiring backend software engineer. Curious about C#, ASP.NET Core Web APIs, relational databases (PostgreSQL), and mathematical foundations of AI & Machine Learning.
          </p>
        </div>
      );
    } else if (lower === 'projects') {
      output = (
        <div className="space-y-2 text-xs">
          <p className="text-[#C8FF00] font-bold">PORTFOLIO ARTIFACTS & CASE STUDIES:</p>
          {PORTFOLIO_DATA.projects.map((p) => (
            <div key={p.id} className="border-l-2 border-white/20 pl-2">
              <span className="text-white font-bold">{p.number} // {p.title}</span>
              <p className="text-zinc-400">{p.tagline}</p>
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noreferrer" className="text-[#C8FF00] underline mr-3">
                  Live App ↗
                </a>
              )}
              {p.linkedInPostUrl && (
                <a href={p.linkedInPostUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline mr-3">
                  LinkedIn Showcase ↗
                </a>
              )}
              {p.githubUrl && (
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white underline">
                  GitHub ↗
                </a>
              )}
            </div>
          ))}
        </div>
      );
    } else if (lower === 'skills') {
      output = (
        <div className="space-y-2 text-xs text-zinc-300">
          <p className="text-[#C8FF00] font-bold">TECHNICAL EXPLORATION INDEX:</p>
          <div>
            <span className="text-emerald-400 font-mono font-semibold">[Core Languages]:</span> C#, C++, Python
          </div>
          <div>
            <span className="text-cyan-400 font-mono font-semibold">[Backend Engineering]:</span> ASP.NET Core, Web API, Entity Framework Core, RESTful Design, LINQ
          </div>
          <div>
            <span className="text-purple-400 font-mono font-semibold">[Databases & Storage]:</span> PostgreSQL, Relational SQL, Schema Modeling
          </div>
          <div>
            <span className="text-amber-400 font-mono font-semibold">[Tooling]:</span> Git, GitHub, Visual Studio, VS Code, Postman
          </div>
          <div>
            <span className="text-pink-400 font-mono font-semibold">[Active Radar]:</span> Machine Learning, Transformers, Clean Architecture
          </div>
        </div>
      );
    } else if (lower.startsWith('curl')) {
      const parts = cmd.split(' ');
      const endpoint = parts[1] || '/api/v1/health';
      const match = PORTFOLIO_DATA.simulatedApiEndpoints.find(
        (e) => e.path.toLowerCase() === endpoint.toLowerCase() || endpoint.includes(e.path.split('?')[0])
      );

      if (match) {
        output = (
          <div className="space-y-1.5 text-xs font-mono">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-emerald-400 font-bold">HTTP/1.1 {match.responseCode} OK</span>
              <span>•</span>
              <span className="text-zinc-500">Latency: {match.responseTimeMs}ms</span>
              <span>•</span>
              <span className="text-zinc-500">Server: Kestrel (.NET 8.0)</span>
            </div>
            <pre className="p-2.5 rounded bg-black/60 border border-white/10 text-emerald-300 overflow-x-auto text-[11px]">
              {JSON.stringify(match.responseBody, null, 2)}
            </pre>
            <p className="text-[10px] text-zinc-500">
              Simulated response from Ratul's ASP.NET Core controller. Type <span className="text-[#C8FF00]">api</span> to open the visual tester.
            </p>
          </div>
        );
      } else {
        output = (
          <div className="text-xs text-amber-400 font-mono">
            Endpoint "{endpoint}" not mapped in simulated sandbox.
            <br />
            Try: <span className="text-white">curl /api/v1/health</span> or <span className="text-white">curl /api/v1/projects/summary</span> or <span className="text-white">curl /api/v1/research/papers?tag=ml</span>
          </div>
        );
      }
    } else if (lower === 'api') {
      onOpenApiSimulator();
      output = <p className="text-xs text-[#C8FF00]">Launching interactive ASP.NET Core visual workbench...</p>;
    } else if (lower === 'research') {
      output = (
        <div className="space-y-1.5 text-xs text-zinc-300">
          <p className="text-[#C8FF00] font-bold">CURIOSITY & RESEARCH NOTEBOOK:</p>
          {PORTFOLIO_DATA.researchArchive.map((r) => (
            <div key={r.id} className="border-l-2 border-[#C8FF00]/40 pl-2">
              <span className="text-white font-semibold">[{r.code}] {r.title}</span>
              <p className="text-zinc-400 text-[11px]">{r.summary}</p>
            </div>
          ))}
        </div>
      );
    } else if (lower === 'contact') {
      output = (
        <div className="space-y-1 text-xs text-zinc-300">
          <p className="text-[#C8FF00] font-bold">DISPATCH & CONTACT CHANNELS:</p>
          <p>Email: <a href={`mailto:${PORTFOLIO_DATA.socialLinks.email}`} className="text-white underline">{PORTFOLIO_DATA.socialLinks.email}</a></p>
          <p>GitHub: <a href={PORTFOLIO_DATA.socialLinks.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PORTFOLIO_DATA.socialLinks.github}</a></p>
          <p>LinkedIn: <a href={PORTFOLIO_DATA.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PORTFOLIO_DATA.socialLinks.linkedin}</a></p>
        </div>
      );
    } else if (lower === 'status') {
      output = (
        <div className="space-y-1 text-xs text-zinc-300 font-mono">
          <p><span className="text-zinc-500">HOST:</span> MEC-STUDENT-WORKBENCH // Windows x64</p>
          <p><span className="text-zinc-500">LOCATION:</span> {PORTFOLIO_DATA.personal.coordinates} (Mymensingh, BD)</p>
          <p><span className="text-zinc-500">TELEMETRY:</span> {PORTFOLIO_DATA.telemetry.systemStatus}</p>
          <p><span className="text-zinc-500">STACK:</span> {PORTFOLIO_DATA.telemetry.coreStack}</p>
        </div>
      );
    } else {
      output = (
        <p className="text-xs text-red-400 font-mono">
          Command not recognized: "{cmd}". Type <span className="text-white font-bold underline">help</span> for commands.
        </p>
      );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: cmd,
        output,
        timestamp,
      },
    ]);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 max-h-[70vh] sm:max-h-[60vh] flex flex-col bg-[#090A0E]/95 border-t border-white/20 backdrop-blur-xl shadow-2xl font-mono animate-slide-up">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#121620] border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-[#C8FF00]" />
          <span className="text-xs font-bold text-white tracking-wider">
            RATUL_TERMINAL // BANGLADESH [BASH / KESTREL SIMULATOR]
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] border border-emerald-500/20">
            ONLINE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenApiSimulator}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#C8FF00]/10 border border-[#C8FF00]/30 text-[#C8FF00] hover:bg-[#C8FF00]/20 text-[10px] transition-colors cursor-pointer"
          >
            <Sparkles className="w-3 h-3" />
            <span>Open API UI</span>
          </button>
          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Output Stream */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-mono text-zinc-300">
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-zinc-500">
              <span className="text-[#C8FF00]">ratul@mec:~$</span>
              <span className="text-white font-bold">{item.command}</span>
              <span className="text-[10px] text-zinc-600 ml-auto">{item.timestamp}</span>
            </div>
            <div className="pl-4 pt-0.5">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Command Input Prompt */}
      <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 bg-[#0D1016] border-t border-white/10">
        <span className="text-[#C8FF00] font-bold text-xs select-none">ratul@mec:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type command (e.g. 'help', 'whoami', 'projects', 'curl /api/v1/health')..."
          className="flex-1 bg-transparent text-xs text-white placeholder-zinc-600 focus:outline-none font-mono"
        />
        <button
          type="submit"
          className="p-1.5 rounded bg-white/5 hover:bg-[#C8FF00]/20 text-zinc-400 hover:text-[#C8FF00] transition-colors cursor-pointer"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
