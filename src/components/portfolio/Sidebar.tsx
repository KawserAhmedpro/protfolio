import React from 'react';

export type TabId = 'home' | 'academics' | 'projects' | 'skills' | 'research' | 'journey' | 'contact';

interface SidebarProps {
  currentTab: TabId;
  setCurrentTab: (tab: TabId) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onChangeZoom: (delta: number) => void;
  onResetZoom: () => void;
  onToggleFullscreen: () => void;
  onOpenResume: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  setCurrentTab,
  isOpenMobile,
  onCloseMobile,
  theme,
  onToggleTheme,
  onChangeZoom,
  onResetZoom,
  onToggleFullscreen,
  onOpenResume,
}) => {
  const navItems: { id: TabId; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'academics', label: 'Academics', icon: 'school' },
    { id: 'projects', label: 'Projects', icon: 'terminal' },
    { id: 'skills', label: 'Skills', icon: 'psychology' },
    { id: 'research', label: 'Research', icon: 'science' },
    { id: 'journey', label: 'Journey', icon: 'timeline' },
    { id: 'contact', label: 'Contact', icon: 'mail' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={onCloseMobile}
        />
      )}

      <aside
        id="side-nav"
        className={`flex flex-col h-screen h-[100dvh] w-64 fixed left-0 top-0 bottom-0 z-50 bg-surface border-r border-outline-variant pt-8 pb-0 transition-transform duration-300 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 shadow-xl lg:shadow-none select-none`}
      >
        {/* Brand Block */}
        <div className="px-6 mb-8 flex justify-between items-start">
          <div className="p-1 cursor-pointer" onClick={() => { setCurrentTab('home'); onCloseMobile(); }}>
            <h2 className="font-h2 text-xl text-on-surface leading-tight font-bold tracking-tight">
              Kawser Ahmed Ratul
            </h2>
            <p className="font-mono-label text-[10px] text-primary-container mt-1 tracking-widest uppercase font-semibold">
              ratul // backend developer
            </p>
          </div>
          <button
            onClick={onCloseMobile}
            aria-label="Close Menu"
            className="lg:hidden text-on-surface hover:text-primary-container transition-colors p-1.5 border border-outline-variant bg-surface-container/60 flex items-center justify-center mt-1 rounded-xl active:scale-95"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

        {/* Navigation List */}
        <div className="flex flex-col gap-0.5 w-full overflow-y-auto flex-grow relative z-10 py-1">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentTab(item.id);
                  onCloseMobile();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`nav-item text-left w-[calc(100%-1rem)] ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="material-symbols-outlined text-base">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Footer Controls Toolbar */}
        <div className="flex-shrink-0 mt-auto px-4 py-4 border-t border-outline-variant relative z-20 bg-surface flex flex-col gap-3">
          {/* Icon Controls Toolbar */}
          <div className="flex items-center justify-between gap-1.5">
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Theme"
              className="flex-1 h-9 border border-outline-variant/50 bg-surface hover:border-primary-container hover:text-primary-container text-on-surface flex items-center justify-center rounded-lg transition-all active:scale-90"
            >
              <span className="material-symbols-outlined text-base">
                {theme === 'dark' ? 'dark_mode' : 'light_mode'}
              </span>
            </button>
            {/* Zoom In */}
            <button
              onClick={() => onChangeZoom(5)}
              title="Zoom In"
              aria-label="Zoom In"
              className="flex-1 h-9 border border-outline-variant/50 bg-surface hover:border-primary-container hover:text-primary-container text-on-surface flex items-center justify-center rounded-lg transition-all active:scale-90"
            >
              <span className="material-symbols-outlined text-base">zoom_in</span>
            </button>
            {/* Zoom Out */}
            <button
              onClick={() => onChangeZoom(-5)}
              title="Zoom Out"
              aria-label="Zoom Out"
              className="flex-1 h-9 border border-outline-variant/50 bg-surface hover:border-primary-container hover:text-primary-container text-on-surface flex items-center justify-center rounded-lg transition-all active:scale-90"
            >
              <span className="material-symbols-outlined text-base">zoom_out</span>
            </button>
            {/* Reset Zoom */}
            <button
              onClick={onResetZoom}
              title="Reset Zoom"
              aria-label="Reset Zoom"
              className="flex-1 h-9 border border-outline-variant/50 bg-surface hover:border-primary-container hover:text-primary-container text-on-surface flex items-center justify-center rounded-lg transition-all active:scale-90"
            >
              <span className="material-symbols-outlined text-base">restart_alt</span>
            </button>
            {/* Fullscreen */}
            <button
              onClick={onToggleFullscreen}
              title="Toggle Fullscreen"
              aria-label="Toggle Fullscreen"
              className="flex-1 h-9 border border-outline-variant/50 bg-surface hover:border-primary-container hover:text-primary-container text-on-surface flex items-center justify-center rounded-lg transition-all active:scale-90"
            >
              <span className="material-symbols-outlined text-base">fullscreen</span>
            </button>
          </div>

          {/* CV & Resume Buttons */}
          <div className="grid grid-cols-2 gap-2.5 w-full mt-1">
            <button
              onClick={onOpenResume}
              className="w-full bg-primary-container text-background font-mono-label text-xs font-bold py-2.5 px-3 rounded-xl hover:bg-primary-fixed-dim transition-all shadow-md uppercase tracking-widest flex items-center justify-center gap-1.5 border border-primary-container active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">download</span> CV
            </button>
            <button
              onClick={onOpenResume}
              className="w-full border border-outline-variant bg-surface-container/30 text-on-surface font-mono-label text-xs font-bold py-2.5 px-3 rounded-xl hover:border-primary-container hover:text-primary-container transition-all uppercase tracking-widest flex items-center justify-center gap-1.5 active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">description</span> Resume
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
