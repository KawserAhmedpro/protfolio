import React, { useState } from 'react';
import { X, Printer, Copy, Check, GraduationCap, Code2, Database, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  const handleCopyMarkdown = () => {
    sound.playSuccess();
    const md = `# ${PORTFOLIO_DATA.personal.name} (${PORTFOLIO_DATA.personal.nickname})
${PORTFOLIO_DATA.personal.role} — ${PORTFOLIO_DATA.personal.institution}, Bangladesh
Location: ${PORTFOLIO_DATA.personal.locationCity}, Bangladesh
Email: ${PORTFOLIO_DATA.socialLinks.email}
GitHub: ${PORTFOLIO_DATA.socialLinks.github}
LinkedIn: ${PORTFOLIO_DATA.socialLinks.linkedin}
Facebook: ${PORTFOLIO_DATA.socialLinks.facebook}

## Academic Background
- B.Sc. in Computer Science & Engineering (Undergraduate, Ongoing)
  Mymensingh Engineering College (MEC) (Affiliated with University of Dhaka)

- Higher Secondary Certificate (HSC) — GPA 5.00 / 5.00
  Hajiganj Degree College, Cumilla Board

- Secondary School Certificate (SSC) — GPA 5.00 / 5.00
  Waruk Rahmania High School, Cumilla Board

- Junior School Certificate (JSC) — GPA 5.00 / 5.00
  Waruk Rahmania High School, Cumilla Board

- Primary School Certificate (PSC) — GPA 5.00 / 5.00
  Waruk Govt Primary School, Cumilla Board

## Technical Focus
- Core Languages: C#, C++, Python
- Backend Systems: ASP.NET Core, Web API, Entity Framework Core, RESTful API Design
- Database: PostgreSQL, Relational SQL, Schema Modeling
- Tools: Git, GitHub, Visual Studio, VS Code, Postman
- Exploring: Machine Learning, Transformers, Software Architecture

## Projects
- Dining Management System: https://kawserahmedpro.github.io/meal_management_system/login
- ResearchMate (Academic Literature Workspace): https://kawserahmedpro.github.io/ReasearchMate/
- ASP.NET Core Backend Practice (Web APIs, EF Core, PostgreSQL)`;

    navigator.clipboard.writeText(md);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in print:p-0 print:bg-white print:text-black">
      <div
        className="w-full max-w-3xl max-h-[90vh] rounded-2xl bg-[#0F1218] border border-white/15 shadow-2xl overflow-hidden flex flex-col print:border-none print:shadow-none print:bg-white print:max-h-none print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141720] border-b border-white/10 print:hidden select-none">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-[#C8FF00]" />
            <span className="text-white font-bold tracking-wider">
              CURRICULUM VITAE // KAWSER AHMED RATUL
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-colors cursor-pointer"
              title="Copy plain markdown format"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedText ? 'Copied' : 'Copy MD'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C8FF00] hover:bg-[#b2e600] text-black font-mono font-bold text-xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-white/10 transition-colors ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 font-sans text-zinc-300 print:text-black print:p-0">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-black/20">
            <h1 className="text-3xl font-black font-heading text-white print:text-black">
              Kawser Ahmed Ratul
            </h1>
            <p className="text-sm font-mono text-[#C8FF00] print:text-black mt-1 font-semibold">
              Computer Science & Engineering Student • Aspiring Backend Engineer
            </p>

            <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono text-zinc-400 print:text-black">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 print:hidden" />
                Mymensingh, Bangladesh
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-zinc-500 print:hidden" />
                {PORTFOLIO_DATA.socialLinks.email}
              </span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5 text-zinc-500 print:hidden" />
                github.com/KawserAhmedpro
              </span>
              <span className="flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5 text-zinc-500 print:hidden" />
                linkedin.com/in/kawserahmedratulpro
              </span>
              <span className="flex items-center gap-1">
                <FacebookIcon className="w-3.5 h-3.5 text-zinc-500 print:hidden" />
                facebook.com/kawserahmedpro
              </span>
            </div>
          </div>

          {/* Complete Academic Background */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C8FF00] print:text-black uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 print:hidden" />
              <span>Academic Track Record</span>
            </div>

            <div className="space-y-2.5">
              {PORTFOLIO_DATA.academicHistory.map((edu) => (
                <div
                  key={edu.level}
                  className="p-3.5 rounded-xl bg-black/40 border border-white/5 print:bg-transparent print:border-none print:p-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white print:text-black text-sm">
                    <span>
                      {edu.level} — {edu.degree}
                    </span>
                    <span
                      className={`font-mono text-xs ${
                        edu.status === 'Ongoing' ? 'text-cyan-400 print:text-black' : 'text-[#C8FF00] print:text-black'
                      }`}
                    >
                      {edu.result}
                    </span>
                  </div>
                  <div className="text-xs text-zinc-400 print:text-black mt-0.5">
                    {edu.institution} {edu.board && <span>• {edu.board}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Profile */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C8FF00] print:text-black uppercase tracking-wider">
              <Code2 className="w-4 h-4 print:hidden" />
              <span>Technical Skills</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-black/30 border border-white/5 print:bg-transparent print:border-none print:p-0">
                <strong className="text-white print:text-black block mb-1 font-mono">Languages & Frameworks:</strong>
                <span className="text-zinc-400 print:text-black">C#, ASP.NET Core, C++, Python, JavaScript (ES6+)</span>
              </div>
              <div className="p-3 rounded-lg bg-black/30 border border-white/5 print:bg-transparent print:border-none print:p-0">
                <strong className="text-white print:text-black block mb-1 font-mono">Backend & Databases:</strong>
                <span className="text-zinc-400 print:text-black">Web API, Entity Framework Core, PostgreSQL, Relational SQL, REST design</span>
              </div>
              <div className="p-3 rounded-lg bg-black/30 border border-white/5 print:bg-transparent print:border-none print:p-0">
                <strong className="text-white print:text-black block mb-1 font-mono">Developer Tools:</strong>
                <span className="text-zinc-400 print:text-black">Git, GitHub, Visual Studio, VS Code, Postman, CLI workflows</span>
              </div>
              <div className="p-3 rounded-lg bg-black/30 border border-white/5 print:bg-transparent print:border-none print:p-0">
                <strong className="text-white print:text-black block mb-1 font-mono">Active Curiosity / AI:</strong>
                <span className="text-zinc-400 print:text-black">Machine Learning, Transformers & Attention, Vector Spaces, Clean Architecture</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C8FF00] print:text-black uppercase tracking-wider">
              <Database className="w-4 h-4 print:hidden" />
              <span>Selected Projects & Systems</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-xl bg-black/30 border border-white/5 print:bg-transparent print:border-none print:p-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white print:text-black">
                  <span>Dining Management System — Hostel & Mess Digitization</span>
                  <span className="font-mono text-[11px] text-emerald-400 print:text-black">Live Project</span>
                </div>
                <p className="text-zinc-400 print:text-black mt-1 leading-relaxed">
                  Web-based platform modernizing student dining in halls and hostels. Includes Firebase authentication, member profiles, ON/OFF/DOUBLE meal state toggles, grocery expense ledger, dynamic meal rate calculation, and a transparent public portal.
                </p>
                <div className="mt-2 text-[11px] font-mono text-zinc-500 print:text-black">
                  Tech: JavaScript (ES6+), Firebase Auth, Real-Time Sync, HTML5, CSS3
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/30 border border-white/5 print:bg-transparent print:border-none print:p-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white print:text-black">
                  <span>ResearchMate — Academic Paper & Reading Workspace</span>
                  <span className="font-mono text-[11px] text-cyan-400 print:text-black">Live Project</span>
                </div>
                <p className="text-zinc-400 print:text-black mt-1 leading-relaxed">
                  Literature management hub designed to organize research papers, extract citations, read PDFs in split-view, and synchronize tagged notes across ML and Systems topics.
                </p>
                <div className="mt-2 text-[11px] font-mono text-zinc-500 print:text-black">
                  Tech: JavaScript, Workspace UI, Document Handling
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/30 border border-white/5 print:bg-transparent print:border-none print:p-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white print:text-black">
                  <span>ASP.NET Core Web API Labs & Backend Practice</span>
                  <span className="font-mono text-[11px] text-purple-400 print:text-black">Continuous Practice</span>
                </div>
                <p className="text-zinc-400 print:text-black mt-1 leading-relaxed">
                  Structured backend development practice utilizing C# and ASP.NET Core. Explores Clean Architecture, Entity Framework Core migrations, PostgreSQL database integration, JWT authentication, and RFC 7807 error middleware.
                </p>
                <div className="mt-2 text-[11px] font-mono text-zinc-500 print:text-black">
                  Tech: C#, ASP.NET Core 8, EF Core, PostgreSQL, Postman
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#121620] border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-500 print:hidden">
          <span>Kawser Ahmed Ratul — Portfolio CV</span>
          <span>Click outside or press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
