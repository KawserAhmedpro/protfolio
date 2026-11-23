import React, { useState, useEffect } from 'react';

interface CommandBarProps {
  onOpenSchedule: () => void;
  onCopyEmail: () => void;
  copied: boolean;
}

export const CommandBar: React.FC<CommandBarProps> = ({
  onOpenSchedule,
  onCopyEmail,
  copied,
}) => {
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

  return (
    <div
      id="command-bar"
      className="hidden lg:flex sticky top-6 z-30 items-center justify-between w-full h-14 px-6 rounded-2xl border border-primary-container/10 shadow-none bg-surface/80 dark:bg-surface-container/40 backdrop-blur-2xl overflow-hidden mb-8 select-none transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-outline-variant"></div>

      {/* Default Command Items */}
      <div className="flex items-center justify-between w-full overflow-x-auto no-scrollbar gap-4">
        {/* Clock & Date */}
        <div className="flex-shrink-0 flex items-center gap-2.5 hover:scale-[1.02] hover:bg-primary-container/5 border border-transparent hover:border-outline-variant/30 rounded-full px-3 py-1.5 transition-all duration-200 cursor-default">
          <span className="material-symbols-outlined text-base text-primary-container/60">schedule</span>
          <div className="flex flex-col justify-center">
            <span id="widget-clock" className="font-code-block text-[11px] font-bold text-primary-container leading-none">
              {timeStr}
            </span>
            <span id="widget-date" className="font-mono-label text-[9px] text-on-surface-variant/70 uppercase font-semibold leading-none mt-1">
              {dateStr}
            </span>
          </div>
        </div>

        <div className="h-5 w-px bg-outline-variant/50 hidden md:block flex-shrink-0"></div>

        {/* Technical Focus */}
        <div className="flex-shrink-0 flex items-center gap-2.5 hover:scale-[1.02] hover:bg-primary-container/5 border border-transparent hover:border-outline-variant/30 rounded-full px-3 py-1.5 transition-all duration-200 cursor-default">
          <span className="material-symbols-outlined text-base text-primary-container/60">code</span>
          <div className="flex flex-col">
            <span className="font-mono-label text-[9px] text-on-surface-variant/60 uppercase tracking-widest font-bold leading-none mb-0.5">
              Engineering Focus
            </span>
            <span className="font-mono-label text-[10px] text-primary-container font-bold leading-none">
              Backend • C# • ASP.NET Core
            </span>
          </div>
        </div>

        <div className="h-5 w-px bg-outline-variant/50 hidden md:block flex-shrink-0"></div>

        {/* Academic Impact */}
        <div className="flex-shrink-0 flex items-center gap-2.5 hover:scale-[1.02] hover:bg-primary-container/5 border border-transparent hover:border-outline-variant/30 rounded-full px-3 py-1.5 transition-all duration-200 cursor-default">
          <span className="material-symbols-outlined text-base text-primary-container/60">school</span>
          <div className="flex flex-col">
            <span className="font-mono-label text-[9px] text-on-surface-variant/60 uppercase tracking-widest font-bold leading-none mb-0.5">
              Academic Record
            </span>
            <span className="font-mono-label text-[10px] text-primary-container font-bold leading-none">
              MEC CSE • 5.00 GPA Streak
            </span>
          </div>
        </div>

        <div className="h-5 w-px bg-outline-variant/50 hidden md:block flex-shrink-0"></div>

        {/* Quick Email Action Center */}
        <div className="flex-shrink-0 flex items-center gap-2">
          <button
            onClick={onCopyEmail}
            title="Click to copy email address"
            className="h-8 px-3.5 border border-outline-variant/80 bg-surface-container/40 hover:border-primary-container hover:text-primary-container text-on-surface font-mono-label text-[9px] uppercase tracking-widest font-extrabold rounded-full transition-all flex items-center gap-1.5 hover:bg-primary-container/5 hover:scale-[1.03] active:scale-[0.97] shadow-sm whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[12px]">mail</span>
            <span>{copied ? 'EMAIL COPIED!' : 'COPY EMAIL'}</span>
          </button>
        </div>

        <div className="h-5 w-px bg-outline-variant/50 hidden md:block flex-shrink-0"></div>
      </div>

      {/* Schedule Chat (Always Visible on Desktop) */}
      <div className="flex-shrink-0 flex items-center pl-4 border-l border-outline-variant/50 ml-2">
        <button
          onClick={onOpenSchedule}
          className="h-8 px-3.5 bg-primary-container text-background font-mono-label text-[9px] uppercase tracking-widest font-extrabold rounded-full hover:bg-primary-fixed-dim transition-all flex items-center gap-1.5 hover:scale-[1.03] active:scale-[0.97] shadow-sm border border-primary-container whitespace-nowrap"
        >
          <span className="material-symbols-outlined text-[12px]">calendar_month</span>
          <span>Schedule Chat</span>
        </button>
      </div>
    </div>
  );
};
