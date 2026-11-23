import React, { useState, useEffect } from 'react';
import { sound } from '../utils/sound';

interface NavItem {
  id: string;
  number: string;
  label: string;
  shortcut: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', number: '01', label: 'HOME', shortcut: '1' },
  { id: 'about', number: '02', label: 'ABOUT', shortcut: '2' },
  { id: 'projects', number: '03', label: 'PROJECTS', shortcut: '3' },
  { id: 'skills', number: '04', label: 'SKILLS', shortcut: '4' },
  { id: 'journey', number: '05', label: 'JOURNEY', shortcut: '5' },
  { id: 'research', number: '06', label: 'RESEARCH', shortcut: '6' },
  { id: 'contact', number: '07', label: 'CONTACT', shortcut: '7' },
];

export const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    // IntersectionObserver to detect active section
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard shortcut listener (1-7)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is inside an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      const match = NAV_ITEMS.find((item) => item.shortcut === e.key);
      if (match) {
        e.preventDefault();
        sound.playClick();
        const target = document.getElementById(match.id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(match.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollTo = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav
      aria-label="Portfolio Sections"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-full px-3"
    >
      <div className="flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-[#0D1016]/90 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/80">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              onMouseEnter={() => sound.playHover()}
              data-cursor={`GO ${item.number}`}
              className={`relative px-2.5 sm:px-3.5 py-1.5 rounded-full font-mono text-[11px] sm:text-xs transition-all duration-200 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#C8FF00] text-[#090A0E] font-bold shadow-md shadow-[#C8FF00]/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className={`text-[10px] ${isActive ? 'text-[#090A0E]/70 font-semibold' : 'text-zinc-500'}`}>
                {item.number}
              </span>
              <span className="hidden sm:inline tracking-wider">{item.label}</span>
              <span className="sm:hidden tracking-wider">{item.label.slice(0, 3)}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
