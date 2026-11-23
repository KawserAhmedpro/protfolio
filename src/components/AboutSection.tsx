import React, { useState } from 'react';
import { Code2, GraduationCap, MapPin } from 'lucide-react';
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
              <span>02 // IDENTITY</span>
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

        {/* Grid: Photo & Editorial Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Ratul's Portrait in Architectural HUD Frame */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-2xl bg-[#0F1218] border border-white/10 p-3 overflow-hidden shadow-2xl group">
              {/* Photo Frame Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 font-mono text-[10px] text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C8FF00]" />
                  <span className="text-white font-bold">RATUL_IDENTIFIER</span>
                </div>
                <span>24.7471° N, 90.4203° E</span>
              </div>

              {/* Photo Image with subtle filter */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-black/40">
                <img
                  src="/images/ratul.jpg"
                  alt="Kawser Ahmed Ratul"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-110 group-hover:grayscale-0"
                />

                {/* Subtle corner crosshairs */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C8FF00]" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C8FF00]" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C8FF00]" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C8FF00]" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 font-mono text-xs flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-[11px]">Kawser Ahmed Ratul</div>
                    <div className="text-[10px] text-zinc-400">Dept. of CSE, MEC</div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#C8FF00]/15 text-[#C8FF00] text-[9px] font-bold">
                    VERIFIED
                  </span>
                </div>
              </div>

              {/* Quick Academic Badges */}
              <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-[11px]">
                <div className="p-2 rounded bg-black/30 border border-white/5 text-zinc-300 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#C8FF00]" />
                  <span>MEC • Undergrad CSE</span>
                </div>
                <div className="p-2 rounded bg-black/30 border border-white/5 text-zinc-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C8FF00]" />
                  <span>Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Quick Stat Pill */}
            <div className="p-4 rounded-xl bg-[#0D1016] border border-white/5 font-mono text-xs text-zinc-400 flex items-center justify-between">
              <span>PRIMARY LEARNING RADAR:</span>
              <span className="text-[#C8FF00] font-bold">C# • ASP.NET CORE • AI</span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Values */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
              <p>
                My name is <strong className="text-white font-semibold">Kawser Ahmed Ratul</strong>. I am an undergraduate Computer Science and Engineering student at <strong className="text-white font-semibold">Mymensingh Engineering College</strong> in Bangladesh.
              </p>
              <p>
                In an era dominated by rapid hype cycles and superficial frameworks, I find my satisfaction in understanding the ground beneath the surface: how backend web servers accept TCP sockets, how relational databases execute query plans, and how neural representations encode language.
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
