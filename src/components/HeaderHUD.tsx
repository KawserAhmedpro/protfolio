import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Search, Radio } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface HeaderHUDProps {
  onOpenCommandPalette: () => void;
  onOpenTerminal: () => void;
}

export const HeaderHUD: React.FC<HeaderHUDProps> = ({
  onOpenCommandPalette,
  onOpenTerminal,
}) => {
  const [bdTime, setBdTime] = useState<string>('');
  const [soundActive, setSoundActive] = useState<boolean>(sound.isEnabled());

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Dhaka',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        setBdTime(formatter.format(now));
      } catch {
        setBdTime('11:55 AM (BST)');
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSoundToggle = () => {
    const newState = sound.toggle();
    setSoundActive(newState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-3 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Identity & Telemetry Monogram */}
        <div className="pointer-events-auto flex items-center gap-3">
          <a
            href="#hero"
            onClick={() => sound.playClick()}
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-[#0F1218]/90 border border-white/10 hover:border-[#C8FF00]/60 transition-all backdrop-blur-md group"
            data-cursor="HOME"
          >
            <div className="relative flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-ping opacity-75 absolute" />
              <span className="w-2 h-2 rounded-full bg-[#C8FF00] relative" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-xs font-bold text-white tracking-wider group-hover:text-[#C8FF00] transition-colors">
                  {PORTFOLIO_DATA.personal.nickname.toUpperCase()}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono hidden sm:inline">
                  // {PORTFOLIO_DATA.personal.handle}
                </span>
              </div>
              <span className="text-[9px] font-mono text-zinc-400 hidden md:inline">
                CSE @ MEC • BANGLADESH
              </span>
            </div>
          </a>

          {/* Coordinates Tag (Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/40 border border-white/5 font-mono text-[10px] text-zinc-400">
            <Radio className="w-3 h-3 text-[#C8FF00]" />
            <span>{PORTFOLIO_DATA.personal.coordinates}</span>
          </div>
        </div>

        {/* Center: Live Local Time in Bangladesh (UTC+6) */}
        <div className="pointer-events-auto hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0F1218]/80 border border-white/5 backdrop-blur-md font-mono text-xs text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-500">DHAKA (UTC+6):</span>
          <span className="text-zinc-200 font-medium tracking-wide">{bdTime || '11:55:00 AM'}</span>
        </div>

        {/* Right: Actions (Sound, Terminal, Command Palette) */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Sound FX Toggle */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={() => sound.playHover()}
            title={soundActive ? 'Sound Effects Enabled (Click to Mute)' : 'Sound Effects Muted (Click to Enable)'}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md font-mono text-[11px] border transition-all backdrop-blur-md ${
              soundActive
                ? 'bg-[#C8FF00]/10 border-[#C8FF00]/40 text-[#C8FF00]'
                : 'bg-[#0F1218]/90 border-white/10 text-zinc-400 hover:text-zinc-200 hover:border-white/20'
            }`}
            data-cursor="AUDIO"
          >
            {soundActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{soundActive ? 'SFX ON' : 'SFX OFF'}</span>
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={() => {
              sound.playTerminal();
              onOpenTerminal();
            }}
            onMouseEnter={() => sound.playHover()}
            title="Open Interactive Terminal Workbench (Press ` or T)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#0F1218]/90 border border-white/10 hover:border-[#C8FF00]/50 text-zinc-300 hover:text-white font-mono text-[11px] transition-all backdrop-blur-md"
            data-cursor="TERM"
          >
            <Terminal className="w-3.5 h-3.5 text-[#C8FF00]" />
            <span className="hidden sm:inline">CLI ~</span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenCommandPalette();
            }}
            onMouseEnter={() => sound.playHover()}
            title="Open Command Palette (Ctrl+K or ⌘K)"
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0F1218]/90 border border-white/10 hover:border-[#C8FF00]/50 text-zinc-300 hover:text-white font-mono text-[11px] transition-all backdrop-blur-md shadow-sm"
            data-cursor="CMD"
          >
            <Search className="w-3.5 h-3.5 text-zinc-400" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-400 border border-zinc-700">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
};
