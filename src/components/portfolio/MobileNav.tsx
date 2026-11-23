import React, { useState, useEffect } from 'react';

interface MobileNavProps {
  onOpenMobileMenu: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenSchedule: () => void;
  onCopyEmail: () => void;
  copied: boolean;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  onOpenMobileMenu,
  theme,
  onToggleTheme,
  onOpenSchedule,
  onCopyEmail,
  copied,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [timeStr, setTimeStr] = useState('--:--:-- --');
  const [dateStr, setDateStr] = useState('-------, --- --');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const optionsTime: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const optionsDate: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      };
      setTimeStr(new Intl.DateTimeFormat('en-US', optionsTime).format(now));
      setDateStr(new Intl.DateTimeFormat('en-US', optionsDate).format(now).toUpperCase());
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Cycle mobile slides every 4 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <nav className="lg:hidden fixed top-0 left-0 w-full z-30 border-b border-outline-variant bg-background/90 backdrop-blur-md h-16 flex items-center px-4 justify-between gap-3 select-none">
      {/* Brand Name */}
      <span className="font-h1 text-primary-container tracking-tight text-[15px] font-bold flex items-center flex-shrink-0">
        Ratul
      </span>

      {/* Integrated Academic Status Widget (Mobile) */}
      <div
        id="mobile-widget-stack"
        className="flex-grow h-9 relative rounded-lg border border-outline-variant/60 bg-surface-container/40 overflow-hidden flex items-center px-3 select-none"
      >
        <div className="w-full h-full overflow-hidden relative">
          <div
            id="mobile-widget-slides"
            className="w-full h-full flex flex-col transition-transform duration-500"
            style={{
              transform: `translateY(-${slideIndex * 100}%)`,
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Slide 0: Clock & Date */}
            <div className="w-full h-full flex-shrink-0 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary-container/80">schedule</span>
              <div className="flex flex-col justify-center min-w-0">
                <span className="font-code-block text-[10px] font-bold text-primary-container leading-none">
                  {timeStr}
                </span>
                <span className="font-mono-label text-[8px] text-on-surface-variant/70 uppercase font-semibold leading-none mt-1 truncate">
                  {dateStr}
                </span>
              </div>
            </div>

            {/* Slide 1: Focus */}
            <div className="w-full h-full flex-shrink-0 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary-container/80">code</span>
              <div className="flex flex-col justify-center min-w-0">
                <span className="font-mono-label text-[7px] text-on-surface-variant/60 uppercase tracking-widest font-bold leading-none mb-0.5">
                  Focus
                </span>
                <span className="font-mono-label text-[9px] text-primary-container font-bold leading-none truncate">
                  C# • ASP.NET Core • ML
                </span>
              </div>
            </div>

            {/* Slide 2: Academic Impact */}
            <div className="w-full h-full flex-shrink-0 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary-container/80">school</span>
              <div className="flex flex-col justify-center min-w-0">
                <span className="font-mono-label text-[7px] text-on-surface-variant/60 uppercase tracking-widest font-bold leading-none mb-0.5">
                  Academics
                </span>
                <span className="font-mono-label text-[9px] text-primary-container font-bold leading-none truncate">
                  MEC CSE • 5.00 GPA
                </span>
              </div>
            </div>

            {/* Slide 3: Quick Copy Email */}
            <div className="w-full h-full flex-shrink-0 flex items-center justify-between gap-1.5 pr-2.5">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="material-symbols-outlined text-xs text-primary-container/80 shrink-0">mail</span>
                <span className="font-mono-label text-[8px] sm:text-[9px] text-primary-container font-bold truncate">
                  Email
                </span>
              </div>
              <button
                onClick={onCopyEmail}
                className="h-5 px-2 shrink-0 border border-outline-variant bg-surface-container/90 hover:border-primary-container text-on-surface font-mono-label text-[8px] uppercase tracking-wider font-extrabold rounded-full transition-all inline-flex items-center gap-1 shadow-sm active:scale-95"
              >
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute right-2 top-0 bottom-0 flex flex-col justify-center gap-0.5 pointer-events-none">
          {[0, 1, 2, 3].map((idx) => (
            <div
              key={idx}
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                slideIndex === idx ? 'bg-primary-container' : 'bg-on-surface-variant/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <button
          onClick={onOpenSchedule}
          type="button"
          aria-label="Schedule Chat"
          className="text-primary-container hover:text-white hover:bg-primary-container transition-all p-1.5 border border-outline-variant bg-surface-container flex items-center justify-center rounded-lg active:scale-95 touch-manipulation cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm pointer-events-none">calendar_month</span>
        </button>
        <button
          onClick={onToggleTheme}
          type="button"
          aria-label="Toggle Theme"
          className="text-primary-container hover:text-white hover:bg-primary-container transition-all p-1.5 border border-outline-variant bg-surface-container flex items-center justify-center rounded-lg active:scale-95 touch-manipulation cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm pointer-events-none">
            {theme === 'dark' ? 'dark_mode' : 'light_mode'}
          </span>
        </button>
        <button
          onClick={onOpenMobileMenu}
          type="button"
          aria-label="Open Menu"
          className="text-primary-container hover:text-white hover:bg-primary-container transition-colors p-1.5 border border-outline-variant bg-surface-container flex items-center justify-center rounded-lg active:scale-95 touch-manipulation cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm pointer-events-none">menu</span>
        </button>
      </div>
    </nav>
  );
};
