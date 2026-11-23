import React, { useState } from 'react';
import { CheckCircle2, Terminal, ArrowUpRight, Play, Pause, RotateCcw } from 'lucide-react';
import { GithubIcon } from './Icons';
import { sound } from '../utils/sound';

interface ProjectsSectionProps {
  onOpenApiSimulator: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenApiSimulator }) => {
  // Mini interactive focus timer for Study Tracker card preview
  const [timerSeconds, setTimerSeconds] = useState(1500); // 25 min default
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const activeCourse = 'CSE-301: Distributed Systems';

  // Study timer effect
  React.useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 1500));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 bg-[#0B0D12] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C8FF00] tracking-wider uppercase mb-2">
              <span>03 // ARTIFACTS</span>
              <span>•</span>
              <span className="text-zinc-500">ENGINEERING CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white">
              Selected Projects & Systems
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-500 max-w-sm sm:text-right">
            Real tools designed to resolve personal friction in academic research & backend engineering.
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-16">
          {/* PROJECT 01: STUDY TRACKER */}
          <div className="rounded-2xl bg-[#0F1218] border border-white/10 overflow-hidden shadow-2xl transition-all hover:border-[#C8FF00]/40 group">
            {/* Project Top HUD Bar */}
            <div className="flex flex-wrap items-center justify-between px-6 py-3.5 bg-[#141720] border-b border-white/10 gap-3 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-[#C8FF00]/15 text-[#C8FF00] font-bold">
                  PROJECT 01
                </span>
                <span className="text-zinc-400 font-semibold">STUDY TRACKER // WEB APP</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-500 text-[11px]">
                <span>CATEGORY: ACADEMIC ANALYTICS</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline text-emerald-400">DEPLOYED ON GITHUB PAGES</span>
              </div>
            </div>

            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Case Study Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-white group-hover:text-[#C8FF00] transition-colors">
                    Study Tracker
                  </h3>
                  <p className="text-zinc-400 font-mono text-xs mt-1">
                    Personal Academic Analytics & Productivity Engine
                  </p>
                </div>

                <div className="space-y-3 text-sm text-zinc-300 font-sans leading-relaxed">
                  <p>
                    <strong className="text-white">Problem:</strong> As a Computer Science undergraduate balancing algorithmic coursework, math, and software architecture, traditional generic to-do apps gave zero visibility into actual deep-work hours spent per topic.
                  </p>
                  <p>
                    <strong className="text-white">Solution:</strong> Designed and built a lightweight web application that enables granular topic breakdowns, live focus timing, daily and weekly study analytics, and historical performance tracking.
                  </p>
                </div>

                {/* Key Features Checklist */}
                <div className="space-y-2 pt-2">
                  <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    Core Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 font-sans">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span>Subject & Topic Hierarchy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span>Interactive Focus Timer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span>Daily Study Metrics & Charts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span>Historical Session Logs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span>Persistent Local State</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span>Distraction-Free UI</span>
                    </div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['JavaScript (ES6+)', 'HTML5 Semantic UI', 'CSS3 Architecture', 'LocalStorage', 'Client-side Charts'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="https://kawserahmedpro.github.io/Study_Tracker_webApp_for_personal_use/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    data-cursor="LIVE"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#C8FF00] hover:bg-[#b5e600] text-[#090A0E] font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Launch Live App</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href="https://github.com/KawserAhmedpro/Study_Tracker_webApp_for_personal_use"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    data-cursor="GITHUB"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/40 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Mini Preview Simulator */}
              <div className="lg:col-span-5 p-5 rounded-xl bg-black/50 border border-white/10 flex flex-col justify-between font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className="text-zinc-400 font-bold">SESSION SIMULATOR</span>
                  <span className="text-[10px] text-[#C8FF00]">ACTIVE COMPONENT</span>
                </div>

                {/* Focus Timer Demonstration */}
                <div className="my-6 text-center space-y-4">
                  <div className="text-xs text-zinc-400">Current Course Focus:</div>
                  <div className="px-3 py-1.5 rounded-md bg-white/5 text-zinc-200 text-xs font-semibold inline-block border border-white/10">
                    {activeCourse}
                  </div>

                  <div className="text-5xl font-black font-mono tracking-wider text-white py-2">
                    {formatTimer(timerSeconds)}
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        sound.playClick();
                        setIsTimerRunning(!isTimerRunning);
                      }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs uppercase transition-all cursor-pointer ${
                        isTimerRunning
                          ? 'bg-amber-400 hover:bg-amber-500 text-black'
                          : 'bg-[#C8FF00] hover:bg-[#b5e600] text-black'
                      }`}
                    >
                      {isTimerRunning ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                      <span>{isTimerRunning ? 'Pause' : 'Start Focus'}</span>
                    </button>

                    <button
                      onClick={() => {
                        sound.playClick();
                        setIsTimerRunning(false);
                        setTimerSeconds(1500);
                      }}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                      title="Reset Session"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Simulated Stat Strip */}
                <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="p-2 rounded bg-white/5">
                    <div className="text-zinc-500">TODAY</div>
                    <div className="text-white font-bold text-xs mt-0.5">4.2 hrs</div>
                  </div>
                  <div className="p-2 rounded bg-white/5">
                    <div className="text-zinc-500">STREAK</div>
                    <div className="text-[#C8FF00] font-bold text-xs mt-0.5">18 Days</div>
                  </div>
                  <div className="p-2 rounded bg-white/5">
                    <div className="text-zinc-500">SESSIONS</div>
                    <div className="text-white font-bold text-xs mt-0.5">7 Logged</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 02: RESEARCHMATE */}
          <div className="rounded-2xl bg-[#0F1218] border border-white/10 overflow-hidden shadow-2xl transition-all hover:border-cyan-400/40 group">
            {/* Project Top HUD Bar */}
            <div className="flex flex-wrap items-center justify-between px-6 py-3.5 bg-[#141720] border-b border-white/10 gap-3 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-400 font-bold">
                  PROJECT 02
                </span>
                <span className="text-zinc-400 font-semibold">RESEARCHMATE // WORKSPACE</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-500 text-[11px]">
                <span>CATEGORY: ACADEMIC RESEARCH WORKSPACE</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline text-cyan-400">DEPLOYED ON GITHUB PAGES</span>
              </div>
            </div>

            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-white group-hover:text-cyan-400 transition-colors">
                    ResearchMate
                  </h3>
                  <p className="text-zinc-400 font-mono text-xs mt-1">
                    Academic Literature Management & Paper Reading Workspace
                  </p>
                </div>

                <div className="space-y-3 text-sm text-zinc-300 font-sans leading-relaxed">
                  <p>
                    <strong className="text-white">Problem:</strong> Reading machine learning and computer science research papers regularly causes tab overload. Papers get lost, citations scatter across random notes, and contextual recall suffers.
                  </p>
                  <p>
                    <strong className="text-white">Solution:</strong> Built ResearchMate as an integrated client-side research hub. It allows researchers to save paper metadata, organize PDFs, annotate reading insights, and categorize literature with flexible tags.
                  </p>
                </div>

                {/* Key Features Checklist */}
                <div className="space-y-2 pt-2">
                  <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    Core Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 font-sans">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Research Paper Indexing & Catalog</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Metadata & Citation Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>PDF Document Viewer Workspace</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Split-View Reading & Note Taking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Tag-Based Search & Taxonomic Filter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Zero-Lag Client-Side Architecture</span>
                    </div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['JavaScript', 'HTML5 Semantic Workspace', 'CSS3 Grid Layout', 'Document Handling', 'Responsive UI'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="https://kawserahmedpro.github.io/ReasearchMate/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    data-cursor="LIVE"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-[#090A0E] font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Launch Live App</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href="https://github.com/KawserAhmedpro/ReasearchMate"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    data-cursor="GITHUB"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/40 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Research Workspace Mockup */}
              <div className="lg:col-span-5 p-5 rounded-xl bg-black/50 border border-white/10 flex flex-col justify-between font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className="text-zinc-400 font-bold">WORKSPACE INTERFACE</span>
                  <span className="text-[10px] text-cyan-400">PDF READER // NOTES SYNC</span>
                </div>

                {/* Mockup card */}
                <div className="my-4 space-y-3">
                  <div className="p-3 rounded-lg bg-[#141822] border border-white/10">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
                      <span className="text-cyan-400 font-bold">[PAPER ARCHIVE]</span>
                      <span>PDF 1.4 MB</span>
                    </div>
                    <div className="text-white text-xs font-semibold font-sans">
                      "Attention Is All You Need" — Vaswani et al.
                    </div>
                    <div className="mt-2 flex items-center gap-1.5">
                      <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[9px]">
                        NLP
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-white/5 text-zinc-400 text-[9px]">
                        Transformers
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-white/5 text-zinc-400 text-[9px]">
                        Attention
                      </span>
                    </div>
                  </div>

                  {/* Notes Panel Preview */}
                  <div className="p-3 rounded-lg bg-[#10131B] border border-white/5 text-[11px] font-sans text-zinc-300 space-y-1.5">
                    <div className="font-mono text-[10px] text-[#C8FF00] font-bold uppercase">
                      Synchronized Notes:
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      "Key insight: Multi-head attention allows the model to jointly attend to information from different representation subspaces at different positions."
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
                  <span>TAGS: ML • SYSTEMS • ALGORITHMS</span>
                  <span className="text-cyan-400 font-bold">ORGANIZED STORAGE</span>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 03: ASP.NET CORE BACKEND PRACTICE */}
          <div className="rounded-2xl bg-[#0F1218] border border-white/10 overflow-hidden shadow-2xl transition-all hover:border-purple-400/40 group">
            {/* Project Top HUD Bar */}
            <div className="flex flex-wrap items-center justify-between px-6 py-3.5 bg-[#141720] border-b border-white/10 gap-3 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-purple-500/15 text-purple-400 font-bold">
                  PROJECT 03
                </span>
                <span className="text-zinc-400 font-semibold">ASP.NET CORE // BACKEND SYSTEMS</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-500 text-[11px]">
                <span>CATEGORY: BACKEND WEB APIS & RDBMS</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline text-purple-400">C# • EF CORE • POSTGRESQL</span>
              </div>
            </div>

            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-white group-hover:text-purple-400 transition-colors">
                    ASP.NET Core Web API Practice & Systems
                  </h3>
                  <p className="text-zinc-400 font-mono text-xs mt-1">
                    Layered Architecture, Entity Framework Core & Relational Persistence
                  </p>
                </div>

                <div className="space-y-3 text-sm text-zinc-300 font-sans leading-relaxed">
                  <p>
                    <strong className="text-white">Focus:</strong> Building resilient backend services with C# and ASP.NET Core 8. Exploring the reality of production backend engineering: clean separation of concerns, secure authentication tokens, database migrations, and high-performance serialization.
                  </p>
                  <p>
                    <strong className="text-white">Implementation:</strong> Designed RESTful endpoints using repository abstractions, configured Entity Framework Core with PostgreSQL, implemented JWT token authentication, and enforced RFC 7807 error problem details.
                  </p>
                </div>

                {/* Key Features Checklist */}
                <div className="space-y-2 pt-2">
                  <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    Architectural Pillars:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 font-sans">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>RESTful Endpoints & HTTP Verbs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>EF Core Migrations & DbContext</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>PostgreSQL Relational Storage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>JWT Authentication & Roles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>Global Exception Middleware</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>DTO Modeling & AutoMapper</span>
                    </div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['C# (.NET 8)', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'JWT Bearer', 'Postman / Swagger'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      sound.playTerminal();
                      onOpenApiSimulator();
                    }}
                    data-cursor="TEST"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-purple-500 hover:bg-purple-400 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>Open API Workbench</span>
                  </button>

                  <a
                    href="https://github.com/KawserAhmedpro"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    data-cursor="GITHUB"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/40 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repositories</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive API Simulator Teaser */}
              <div className="lg:col-span-5 p-5 rounded-xl bg-black/50 border border-white/10 flex flex-col justify-between font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className="text-zinc-400 font-bold">KESTREL RUNTIME CONTROLLER</span>
                  <span className="text-[10px] text-purple-400">ASP.NET CORE 8</span>
                </div>

                <div className="my-4 p-3 rounded-lg bg-[#090A0E] border border-white/10 font-mono text-xs text-zinc-300 space-y-2">
                  <div className="text-[10px] text-zinc-500">// Sample Endpoint Routing</div>
                  <div className="text-emerald-400 font-semibold">[HttpGet("projects/summary")]</div>
                  <div className="text-zinc-400 text-[11px]">
                    public async Task&lt;ActionResult&gt; GetSummary() {'{'}
                    <br />
                    &nbsp;&nbsp;var list = await _repo.GetAsync();
                    <br />
                    &nbsp;&nbsp;return Ok(list);
                    <br />
                    {'}'}
                  </div>
                </div>

                <button
                  onClick={() => {
                    sound.playTerminal();
                    onOpenApiSimulator();
                  }}
                  className="w-full py-2.5 px-3 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  <span>Test Endpoints in Browser Simulator →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
