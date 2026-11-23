import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, CornerDownLeft, X, Code, ExternalLink, Terminal, Volume2, Copy, Check, FileText } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
  onOpenApiSimulator: () => void;
  onOpenResume: () => void;
}

interface CommandItem {
  id: string;
  category: 'Navigation' | 'Projects' | 'Actions' | 'External';
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal,
  onOpenApiSimulator,
  onOpenResume,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.socialLinks.email);
    sound.playSuccess();
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 1200);
  };

  const scrollTo = (id: string) => {
    sound.playClick();
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: 'nav-home',
      category: 'Navigation',
      title: '01 — Jump to Home / Viewport',
      subtitle: 'Digital entrance & system telemetry',
      icon: <ArrowRight className="w-4 h-4 text-[#C8FF00]" />,
      action: () => scrollTo('hero'),
    },
    {
      id: 'nav-about',
      category: 'Navigation',
      title: '02 — Read Identity & Approach',
      subtitle: 'Background, CSE journey at MEC, engineering ethos',
      icon: <ArrowRight className="w-4 h-4 text-[#C8FF00]" />,
      action: () => scrollTo('about'),
    },
    {
      id: 'nav-projects',
      category: 'Navigation',
      title: '03 — Inspect Case Studies & Projects',
      subtitle: 'Dining Management System, ResearchMate, ASP.NET Core APIs',
      icon: <ArrowRight className="w-4 h-4 text-[#C8FF00]" />,
      action: () => scrollTo('projects'),
    },
    {
      id: 'nav-skills',
      category: 'Navigation',
      title: '04 — View Technical Index',
      subtitle: 'C#, ASP.NET Core, EF Core, PostgreSQL, Tools',
      icon: <ArrowRight className="w-4 h-4 text-[#C8FF00]" />,
      action: () => scrollTo('skills'),
    },
    {
      id: 'nav-journey',
      category: 'Navigation',
      title: '05 — Explore Journey Timeline',
      subtitle: 'Chronicle of learning milestones and reflections',
      icon: <ArrowRight className="w-4 h-4 text-[#C8FF00]" />,
      action: () => scrollTo('journey'),
    },
    {
      id: 'nav-research',
      category: 'Navigation',
      title: '06 — Open Research & Curiosity Archive',
      subtitle: 'Transformer attention, RAG, database storage internals',
      icon: <ArrowRight className="w-4 h-4 text-[#C8FF00]" />,
      action: () => scrollTo('research'),
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      title: '07 — Dispatch / Contact Kawser Ahmed Ratul',
      subtitle: 'Email, GitHub, LinkedIn connections',
      icon: <ArrowRight className="w-4 h-4 text-[#C8FF00]" />,
      action: () => scrollTo('contact'),
    },

    // Projects Direct
    {
      id: 'proj-dining',
      category: 'Projects',
      title: 'Open Dining Management System (Live Web App)',
      subtitle: 'Hostel & mess meal calculation, grocery logs & Firebase auth',
      icon: <ExternalLink className="w-4 h-4 text-[#C8FF00]" />,
      action: () => {
        window.open(PORTFOLIO_DATA.projects[0].liveUrl, '_blank');
        onClose();
      },
    },
    {
      id: 'proj-dining-linkedin',
      category: 'Projects',
      title: 'View Dining Management System Showcase on LinkedIn',
      subtitle: 'Feature walkthrough video and project overview post',
      icon: <LinkedinIcon className="w-4 h-4 text-blue-400" />,
      action: () => {
        window.open(PORTFOLIO_DATA.projects[0].linkedInPostUrl, '_blank');
        onClose();
      },
    },
    {
      id: 'proj-researchmate',
      category: 'Projects',
      title: 'Open ResearchMate (Live Web App)',
      subtitle: 'Academic literature management & paper workspace',
      icon: <ExternalLink className="w-4 h-4 text-cyan-400" />,
      action: () => {
        window.open(PORTFOLIO_DATA.projects[1].liveUrl, '_blank');
        onClose();
      },
    },

    // Actions
    {
      id: 'act-resume',
      category: 'Actions',
      title: 'View Academic CV / Resume',
      subtitle: 'Printable CV, technical profile, academic history',
      icon: <FileText className="w-4 h-4 text-[#C8FF00]" />,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'act-api',
      category: 'Actions',
      title: 'Launch ASP.NET Core API Simulator',
      subtitle: 'Test simulated endpoints (GET /health, /projects, /papers)',
      icon: <Code className="w-4 h-4 text-[#C8FF00]" />,
      action: () => {
        onClose();
        onOpenApiSimulator();
      },
    },
    {
      id: 'act-terminal',
      category: 'Actions',
      title: 'Launch Interactive CLI Terminal',
      subtitle: 'Run command-line queries and curl simulated endpoints',
      icon: <Terminal className="w-4 h-4 text-[#C8FF00]" />,
      action: () => {
        onClose();
        onOpenTerminal();
      },
    },
    {
      id: 'act-email',
      category: 'Actions',
      title: copiedEmail ? 'Email Copied!' : 'Copy Direct Email Address',
      subtitle: PORTFOLIO_DATA.socialLinks.email,
      icon: copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-300" />,
      action: copyEmail,
    },
    {
      id: 'act-sound',
      category: 'Actions',
      title: sound.isEnabled() ? 'Mute Sound FX' : 'Enable Sound FX',
      subtitle: 'Toggle tactile Web Audio synthesizer clicks & ticks',
      icon: <Volume2 className="w-4 h-4 text-zinc-300" />,
      action: () => {
        sound.toggle();
        onClose();
      },
    },

    // External
    {
      id: 'ext-github',
      category: 'External',
      title: 'GitHub Profile — @KawserAhmedpro',
      subtitle: 'Repositories, open-source code & experiments',
      icon: <ExternalLink className="w-4 h-4 text-zinc-300" />,
      action: () => {
        window.open(PORTFOLIO_DATA.socialLinks.github, '_blank');
        onClose();
      },
    },
    {
      id: 'ext-linkedin',
      category: 'External',
      title: 'LinkedIn Profile — Kawser Ahmed Ratul',
      subtitle: 'Professional network & academic updates',
      icon: <ExternalLink className="w-4 h-4 text-zinc-300" />,
      action: () => {
        window.open(PORTFOLIO_DATA.socialLinks.linkedin, '_blank');
        onClose();
      },
    },
  ];

  const filtered = commands.filter((cmd) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.subtitle.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      sound.playHover();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      sound.playHover();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-2xl rounded-xl bg-[#0D1016] border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#121620]">
          <Search className="w-5 h-5 text-zinc-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type a command, project, or section name... (e.g. 'dining', 'resume', 'contact')"
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/5"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Command List */}
        <div className="overflow-y-auto p-2 divide-y divide-white/5">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-zinc-500 font-mono text-sm">
              No matching commands or destinations found for "{query}".
            </div>
          ) : (
            filtered.map((cmd, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={() => {
                    cmd.action();
                  }}
                  onMouseEnter={() => {
                    setSelectedIndex(index);
                    sound.playHover();
                  }}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#C8FF00]/10 border border-[#C8FF00]/30 text-white'
                      : 'text-zinc-300 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-md ${
                        isSelected ? 'bg-[#C8FF00]/20 text-[#C8FF00]' : 'bg-white/5 text-zinc-400'
                      }`}
                    >
                      {cmd.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm text-white truncate">{cmd.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-zinc-400">
                          {cmd.category}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 truncate">{cmd.subtitle}</p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1 font-mono text-[10px] text-zinc-500">
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[#C8FF00]">
                        <span>Execute</span>
                        <CornerDownLeft className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 bg-[#090A0E] text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <div>
            <span>Ratul's Workspace HUD</span>
          </div>
        </div>
      </div>
    </div>
  );
};
