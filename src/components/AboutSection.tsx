import React, { useState } from 'react';
import { Code2, Terminal, Cpu, Database, Award, Radio, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const AboutSection: React.FC = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState<number>(0);

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 bg-[#090A0E] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C8FF00] tracking-wider uppercase mb-2">
              <span>02 // IDENTITY & BACKGROUND</span>
              <span>•</span>
              <span className="text-zinc-500">MEC CSE STUDENT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white">
              Behind the Code & Circuits
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-500 max-w-xs sm:text-right">
            [TRANSPARENCY]: Aspiring software engineer. No fake seniority. Relentless curiosity.
          </div>
        </div>

        {/* Grid: Academic Dossier & Editorial Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Academic & Technical Dossier HUD */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-2xl bg-[#0F1218] border border-white/10 p-5 shadow-2xl space-y-4">
              {/* Dossier Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#C8FF00]" />
                  <span className="text-white font-bold tracking-wider">ACADEMIC_RECORD // MEC</span>
                </div>
                <span className="text-[10px] text-[#C8FF00] font-bold px-2 py-0.5 rounded bg-[#C8FF00]/10 border border-[#C8FF00]/25">
                  GPA 5.00 STREAK
                </span>
              </div>

              {/* Verified Merit Achievement Pill */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="text-[11px] font-mono text-amber-200">
                  <strong className="text-white font-bold">Consistent Academic Excellence:</strong> Achieved GPA 5.00 in PSC, JSC, SSC, and HSC under Cumilla Board.
                </div>
              </div>

              {/* Complete Educational Timeline Breakdown */}
              <div className="space-y-2.5 font-mono">
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-bold">
                  Education History:
                </div>

                <div className="space-y-2 text-xs">
                  {PORTFOLIO_DATA.academicHistory.map((edu) => (
                    <div
                      key={edu.level}
                      className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-white/15 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-1.5 py-0.5 rounded bg-white/10 text-white font-bold text-[10px]">
                            {edu.level}
                          </span>
                          <span className="font-bold text-white text-xs">{edu.degree}</span>
                        </div>
                        <span
                          className={`font-mono font-bold text-[11px] ${
                            edu.status === 'Ongoing' ? 'text-cyan-400' : 'text-[#C8FF00]'
                          }`}
                        >
                          {edu.result}
                        </span>
                      </div>

                      <div className="mt-1 text-[11px] text-zinc-400 font-sans">
                        {edu.institution} {edu.board && <span className="text-zinc-500">• {edu.board}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack Badges */}
              <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 font-mono text-[11px]">
                <div className="p-2.5 rounded-lg bg-black/30 border border-white/5 text-zinc-300 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#C8FF00]" />
                  <span>C# / ASP.NET Core</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/30 border border-white/5 text-zinc-300 flex items-center gap-2">
                  <Database className="w-4 h-4 text-cyan-400" />
                  <span>PostgreSQL / EF Core</span>
                </div>
              </div>
            </div>

            {/* Quick Location & Status Tag */}
            <div className="p-4 rounded-xl bg-[#0D1016] border border-white/5 font-mono text-xs text-zinc-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-[#C8FF00] animate-pulse" />
                <span>LOCATION: MYMENSINGH, BD</span>
              </span>
              <span className="text-zinc-500">UTC+6 BST</span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Values */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
              <p>
                My name is <strong className="text-white font-semibold">Kawser Ahmed Ratul</strong>. I am an undergraduate Computer Science and Engineering student at <strong className="text-white font-semibold">Mymensingh Engineering College</strong> in Bangladesh.
              </p>
              <p>
                Throughout my academic journey — from achieving GPA 5.00 across PSC, JSC, SSC, and HSC to diving into the rigors of university engineering — I have prioritized discipline, deep understanding, and steady commitment over quick shortcuts.
              </p>
              <p>
                In software engineering, I gravitate toward backend systems: how web servers accept network connections, how relational databases execute query plans, and how neural representations encode language.
              </p>
              <p>
                My core backend development focus is with <strong className="text-white font-semibold">C# and ASP.NET Core</strong>. I appreciate the strict type safety, performance characteristics, and clear architectural boundaries the .NET ecosystem affords. When studying database management, I prioritize relational integrity, indexing strategies, and transactional consistency in PostgreSQL.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base">
                I do not call myself a senior architect or veteran consultant. I am a dedicated student and builder who loves writing software, reading original research papers, and tackling engineering challenges with patience and discipline.
              </p>
            </div>

            {/* Core Values / Learning Mindset Accordion */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
                <Code2 className="w-4 h-4 text-[#C8FF00]" />
                <span>HOW I APPROACH ENGINEERING</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PORTFOLIO_DATA.personal.principles.map((pr, index) => {
                  const isSelected = selectedPrinciple === index;
                  return (
                    <div
                      key={pr.number}
                      onClick={() => {
                        sound.playClick();
                        setSelectedPrinciple(index);
                      }}
                      onMouseEnter={() => sound.playHover()}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#151924] border-[#C8FF00]/50 shadow-md'
                          : 'bg-[#0D1016] border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-[#C8FF00]">
                          {pr.number}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">PRINCIPLE</span>
                      </div>
                      <h4 className="font-semibold text-white text-sm mb-1.5 font-heading">
                        {pr.title}
                      </h4>
                      <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                        {pr.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
