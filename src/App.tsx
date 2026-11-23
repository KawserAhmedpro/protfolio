import React, { useState, useEffect } from 'react';
import { Sidebar, type TabId } from './components/portfolio/Sidebar';
import { MobileNav } from './components/portfolio/MobileNav';
import { CommandBar } from './components/portfolio/CommandBar';
import { HomeTab } from './components/portfolio/HomeTab';
import { AcademicsTab } from './components/portfolio/AcademicsTab';
import { ProjectsTab } from './components/portfolio/ProjectsTab';
import { SkillsTab } from './components/portfolio/SkillsTab';
import { ResearchTab } from './components/portfolio/ResearchTab';
import { JourneyTab } from './components/portfolio/JourneyTab';
import { ContactTab } from './components/portfolio/ContactTab';
import { FooterBar } from './components/portfolio/FooterBar';
import { ScheduleChatModal } from './components/portfolio/ScheduleChatModal';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabId>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [zoom, setZoom] = useState<number>(100);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync theme with html root class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const changeZoom = (delta: number) => {
    setZoom((prev) => Math.min(130, Math.max(75, prev + delta)));
  };

  const resetZoom = () => {
    setZoom(100);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kawserahmedratul@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div
      className="min-h-screen flex flex-col font-body-md antialiased text-on-surface bg-background"
      style={{ zoom: zoom !== 100 ? `${zoom}%` : undefined }}
    >
      {/* Mobile Top Navigation */}
      <MobileNav
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenSchedule={() => setIsScheduleOpen(true)}
        onCopyEmail={handleCopyEmail}
        copied={copiedEmail}
      />

      {/* Fixed Left Sidebar Navigation */}
      <Sidebar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isOpenMobile={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
        onChangeZoom={changeZoom}
        onResetZoom={resetZoom}
        onToggleFullscreen={toggleFullscreen}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-grow p-4 sm:p-6 lg:p-12 max-w-[1280px] w-full mx-auto relative z-10"
      >
        {/* Top Command Bar (Desktop only) */}
        <CommandBar
          onOpenSchedule={() => setIsScheduleOpen(true)}
          onCopyEmail={handleCopyEmail}
          copied={copiedEmail}
        />

        {/* Dynamic Tab Views */}
        <div id="page-content-wrapper" className="w-full h-full">
          {currentTab === 'home' && (
            <HomeTab
              setCurrentTab={setCurrentTab}
              onOpenResume={() => setIsResumeOpen(true)}
            />
          )}

          {currentTab === 'academics' && <AcademicsTab />}

          {currentTab === 'projects' && <ProjectsTab />}

          {currentTab === 'skills' && <SkillsTab />}

          {currentTab === 'research' && <ResearchTab />}

          {currentTab === 'journey' && <JourneyTab />}

          {currentTab === 'contact' && <ContactTab />}
        </div>
      </main>

      {/* Footer */}
      <FooterBar />

      {/* Dynamic Schedule Chat Modal */}
      <ScheduleChatModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />

      {/* Curriculum Vitae / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
