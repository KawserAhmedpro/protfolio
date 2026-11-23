import React, { useState } from 'react';
import { CheckCircle2, Terminal, ArrowUpRight, Calculator, Plus, Minus } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { sound } from '../utils/sound';

interface ProjectsSectionProps {
  onOpenApiSimulator: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenApiSimulator }) => {
  // Interactive Mess Dining & Meal-Rate Simulator for Project 01
  const [totalMarketExpense, setTotalMarketExpense] = useState(8400); // ৳8,400
  const [totalMessMeals, setTotalMessMeals] = useState(140); // 140 total meals
  const [boarderMealState, setBoarderMealState] = useState<'ON' | 'OFF' | 'DOUBLE'>('DOUBLE');
  const boarderBaseMeals = 24;
  const boarderDeposit = 2000; // ৳2,000

  // Calculate live meal multiplier
  const multiplier = boarderMealState === 'DOUBLE' ? 2 : boarderMealState === 'ON' ? 1 : 0;
  const boarderActualMeals = boarderBaseMeals + (multiplier - 1);
  const liveMealRate = totalMessMeals > 0 ? totalMarketExpense / totalMessMeals : 0;
  const boarderTotalCost = boarderActualMeals * liveMealRate;
  const balance = boarderDeposit - boarderTotalCost;

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
            Real tools designed to resolve personal friction in student dining operations & academic research.
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-16">
          {/* PROJECT 01: DINING MANAGEMENT SYSTEM */}
          <div className="rounded-2xl bg-[#0F1218] border border-white/10 overflow-hidden shadow-2xl transition-all hover:border-[#C8FF00]/40 group">
            {/* Project Top HUD Bar */}
            <div className="flex flex-wrap items-center justify-between px-6 py-3.5 bg-[#141720] border-b border-white/10 gap-3 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-[#C8FF00]/15 text-[#C8FF00] font-bold">
                  PROJECT 01
                </span>
                <span className="text-zinc-400 font-semibold">DINING MANAGEMENT SYSTEM // WEB APP</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-500 text-[11px]">
                <span>CATEGORY: FULL-STACK WEB APP</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline text-emerald-400">DEPLOYED ON GITHUB PAGES</span>
              </div>
            </div>

            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-white group-hover:text-[#C8FF00] transition-colors">
                    Dining Management System
                  </h3>
                  <p className="text-zinc-400 font-mono text-xs mt-1">
                    Web-Based Hostel & Student Mess Dining Digitization Platform
                  </p>
                </div>

                <div className="space-y-3 text-sm text-zinc-300 font-sans leading-relaxed">
                  <p>
                    <strong className="text-white">Problem:</strong> In student hostels and messes across Bangladesh, maintaining physical paper registers leads to dispute-heavy meal rate math, misplaced grocery bazaar receipts, chaotic manager transitions, and lack of individual balance clarity.
                  </p>
                  <p>
                    <strong className="text-white">Solution:</strong> Architected a web-based platform with Firebase authentication, flexible daily meal state tracking (ON / OFF / DOUBLE), grocery expense logging, automatic live meal rate calculation, and a transparent public information portal.
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
                      <span>Member Profile Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span>Daily Meal Tracking (ON / OFF / DOUBLE)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span>Market & Expense Ledger</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span>Automatic Dynamic Meal Rate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span>Public Transparent Info Portal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span>Firebase Authentication & Admin Dash</span>
                    </div>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['JavaScript (ES6+)', 'Firebase Authentication', 'Real-Time Sync', 'HTML5 / CSS3', 'Financial Ledger Logic', 'Responsive Mobile-First'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="https://kawserahmedpro.github.io/meal_management_system/login"
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
                    href="https://www.linkedin.com/posts/kawserahmedratulpro_introducing-my-project-dining-management-activity-7530198268576862208-j5w6"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    data-cursor="POST"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 font-mono text-xs transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn Showcase Post ↗</span>
                  </a>

                  <a
                    href="https://github.com/KawserAhmedpro/meal_management_system"
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

              {/* Right Column: Interactive Dining & Meal-Rate Ledger Simulator */}
              <div className="lg:col-span-5 p-5 rounded-xl bg-black/50 border border-white/10 flex flex-col justify-between font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className="text-zinc-400 font-bold flex items-center gap-1.5">
                    <Calculator className="w-3.5 h-3.5 text-[#C8FF00]" />
                    <span>MEAL-RATE ENGINE SIMULATOR</span>
                  </span>
                  <span className="text-[10px] text-[#C8FF00]">LIVE FORMULA</span>
                </div>

                {/* Interactive calculation controls */}
                <div className="my-4 space-y-3 text-xs">
                  {/* Today's Meal State Toggle */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] text-zinc-400">Boarder Meal State (Today):</div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(['OFF', 'ON', 'DOUBLE'] as const).map((st) => (
                        <button
                          key={st}
                          onClick={() => {
                            sound.playClick();
                            setBoarderMealState(st);
                          }}
                          className={`py-1.5 rounded text-[11px] font-bold border transition-all cursor-pointer ${
                            boarderMealState === st
                              ? 'bg-[#C8FF00] text-black border-[#C8FF00]'
                              : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {st === 'OFF' ? 'OFF (0)' : st === 'ON' ? 'ON (1)' : 'DOUBLE (2)'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Market Expense adjustor */}
                  <div className="p-2.5 rounded-lg bg-[#141822] border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-zinc-500">TOTAL BAZAAR EXPENSE</div>
                      <div className="text-white font-bold text-sm">৳{totalMarketExpense.toLocaleString()}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          sound.playClick();
                          setTotalMarketExpense((prev) => Math.max(1000, prev - 500));
                        }}
                        className="p-1 rounded bg-white/5 hover:bg-white/10 text-zinc-300 cursor-pointer"
                        title="-৳500"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => {
                          sound.playClick();
                          setTotalMarketExpense((prev) => prev + 500);
                        }}
                        className="p-1 rounded bg-white/5 hover:bg-white/10 text-zinc-300 cursor-pointer"
                        title="+৳500"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Total Mess Meals adjustor */}
                  <div className="p-2.5 rounded-lg bg-[#141822] border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-zinc-500">TOTAL MESS MEALS CONSUMED</div>
                      <div className="text-white font-bold text-sm">{totalMessMeals} Meals</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          sound.playClick();
                          setTotalMessMeals((prev) => Math.max(20, prev - 10));
                        }}
                        className="p-1 rounded bg-white/5 hover:bg-white/10 text-zinc-300 cursor-pointer"
                        title="-10 meals"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => {
                          sound.playClick();
                          setTotalMessMeals((prev) => prev + 10);
                        }}
                        className="p-1 rounded bg-white/5 hover:bg-white/10 text-zinc-300 cursor-pointer"
                        title="+10 meals"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Computed Output Strip */}
                <div className="pt-3 border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400">Current Computed Meal Rate:</span>
                    <span className="text-[#C8FF00] font-bold text-sm">৳{liveMealRate.toFixed(2)} / meal</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[10px] pt-1">
                    <div className="p-2 rounded bg-white/5">
                      <div className="text-zinc-500">MEMBER TOTAL BILL</div>
                      <div className="text-white font-bold text-xs mt-0.5">৳{boarderTotalCost.toFixed(2)}</div>
                    </div>
                    <div className="p-2 rounded bg-white/5">
                      <div className="text-zinc-500">MEMBER BALANCE</div>
                      <div className={`font-bold text-xs mt-0.5 ${balance >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {balance >= 0 ? `+৳${balance.toFixed(2)} (Safe)` : `-৳${Math.abs(balance).toFixed(2)} (Due)`}
                      </div>
                    </div>
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
