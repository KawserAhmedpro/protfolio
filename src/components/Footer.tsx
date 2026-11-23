import React from 'react';
import { ArrowUp } from 'lucide-react';
import { sound } from '../utils/sound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 bg-[#07080B] border-t border-white/10 font-mono text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity & Copyright */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-white font-bold tracking-wider">
            KAWSER AHMED RATUL (RATUL)
          </div>
          <div className="text-zinc-500 text-[11px]">
            CSE Student @ Mymensingh Engineering College • Bangladesh
          </div>
          <div className="text-zinc-600 text-[10px]">
            © {new Date().getFullYear()} All rights reserved. Handcrafted digital environment.
          </div>
        </div>

        {/* Center: Tech Stack Disclosure */}
        <div className="text-center text-[11px] text-zinc-500 space-y-1">
          <div className="flex items-center justify-center gap-2">
            <span>REACT 19</span>
            <span>•</span>
            <span>TYPESCRIPT</span>
            <span>•</span>
            <span>TAILWIND CSS</span>
            <span>•</span>
            <span>WEB AUDIO API</span>
          </div>
          <div className="text-zinc-600 text-[10px]">
            NO GENERIC TEMPLATES // ZERO TRACKERS
          </div>
        </div>

        {/* Right: Back to Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F1218] border border-white/10 hover:border-[#C8FF00]/50 text-zinc-400 hover:text-white transition-all text-xs"
          >
            <span>Back to Viewport</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C8FF00]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
