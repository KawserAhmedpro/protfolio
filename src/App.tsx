import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { HeaderHUD } from './components/HeaderHUD';
import { FloatingNav } from './components/FloatingNav';
import { CommandPalette } from './components/CommandPalette';
import { TerminalDrawer } from './components/TerminalDrawer';
import { ApiPlaygroundModal } from './components/ApiPlaygroundModal';
import { ResumeModal } from './components/ResumeModal';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { JourneySection } from './components/JourneySection';
import { ResearchSection } from './components/ResearchSection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isApiSimulatorOpen, setIsApiSimulatorOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#090A0E] text-[#F3F4F6] selection:bg-[#C8FF00] selection:text-[#090A0E]">
      {/* Precision Trailing Cursor */}
      <CustomCursor />

      {/* Top HUD Telemetry Bar */}
      <HeaderHUD
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Floating Bottom Navigation Rail */}
      <FloatingNav />

      {/* Command Palette Modal (Ctrl+K / ⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenApiSimulator={() => setIsApiSimulatorOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive CLI Terminal Drawer */}
      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenApiSimulator={() => setIsApiSimulatorOpen(true)}
      />

      {/* Interactive ASP.NET Core API Simulator Modal */}
      <ApiPlaygroundModal
        isOpen={isApiSimulatorOpen}
        onClose={() => setIsApiSimulatorOpen(false)}
      />

      {/* Interactive Academic CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Main Sections */}
      <main className="relative">
        {/* 01 Entrance Viewport */}
        <HeroSection
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenApiSimulator={() => setIsApiSimulatorOpen(true)}
        />

        {/* 02 About & Principles */}
        <AboutSection />

        {/* 03 Projects & Immersive Case Studies */}
        <ProjectsSection
          onOpenApiSimulator={() => setIsApiSimulatorOpen(true)}
        />

        {/* 04 Technical Index & Skills */}
        <SkillsSection />

        {/* 05 Academic & Engineering Journey */}
        <JourneySection />

        {/* 06 Research & Curiosity Archive */}
        <ResearchSection />

        {/* 07 Human Dimension & Personal Interests */}
        <InterestsSection />

        {/* 08 Contact & Direct Dispatch */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
