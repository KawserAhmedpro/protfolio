import React from 'react';
import type { TabId } from './KhokaSidebar';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../Icons';

interface HomeTabProps {
  setCurrentTab: (tab: TabId) => void;
  onOpenResume: () => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ setCurrentTab, onOpenResume }) => {
  const researchInterests = [
    'Backend Architecture',
    'C# & ASP.NET Core',
    'PostgreSQL & SQL',
    'RESTful Web APIs',
    'Machine Learning',
    'Algorithms & Data Structures',
    'Database Indexing',
    'System Design',
  ];

  return (
    <div className="flex flex-col gap-8 animate-fade-in max-w-[1280px] mx-auto pb-12">
      <section className="profile-section relative">
        <div className="profile-layout grid gap-10 items-start" style={{ gridTemplateColumns: 'minmax(0, 1fr)' }}>
          {/* LEFT COLUMN: Portrait Photo (Sharp Corners) + Find my Resume Links */}
          <div className="profile-sidebar min-w-0 w-full flex flex-col gap-5">
            <div className="w-full relative group/photo">
              {/* Profile Image (Sharp original uncapped aspect ratio) */}
              <div className="overflow-hidden border border-outline-variant bg-surface-container/20 rounded-lg">
                <img
                  id="profile-avatar-img"
                  src="/images/ratul.jpg"
                  alt="Kawser Ahmed Ratul"
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto block object-cover grayscale-0 hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Explore Projects Button */}
            <button
              onClick={() => {
                setCurrentTab('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-2.5 px-4 bg-primary-container text-background hover:bg-primary-container/90 font-mono-label text-xs md:text-sm font-bold tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-all duration-200 text-center active:scale-95"
            >
              <span>Explore Projects</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>

            {/* Curriculum Vitae Section (Under Photo) */}
            <div className="flex flex-col gap-2 pt-1 border-t border-outline-variant/60">
              <h3 className="font-body-md text-base text-on-surface font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary-container text-lg">description</span>
                <span>Curriculum Vitae</span>
              </h3>
              <div className="flex flex-col gap-1.5 pl-2 font-body-md text-sm">
                <button
                  onClick={onOpenResume}
                  className="text-primary-container hover:underline font-semibold inline-flex items-center gap-1.5 text-left"
                >
                  <span className="material-symbols-outlined text-xs">picture_as_pdf</span>
                  <span>Curriculum Vitae (CV)</span>
                </button>
                <button
                  onClick={onOpenResume}
                  className="text-primary-container hover:underline font-semibold inline-flex items-center gap-1.5 text-left"
                >
                  <span className="material-symbols-outlined text-xs">description</span>
                  <span>Resume (Interactive / PDF)</span>
                </button>
              </div>
            </div>

            {/* Research & Engineering Interests (Left Column) */}
            <div className="flex flex-col gap-3 pt-4 border-t border-outline-variant/60">
              <h3 className="font-mono-label text-xs uppercase font-bold tracking-wider text-primary-container flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">radar</span>
                <span>Technical Interests</span>
              </h3>
              <div className="flex flex-wrap gap-2 font-mono-label text-xs">
                {researchInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 bg-surface-container/60 border border-outline-variant rounded-full text-on-surface hover:border-primary-container hover:text-primary-container cursor-default transition-all duration-200 hover:bg-primary-container/10 font-semibold tracking-wider text-[11px]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Find Me @ Social Links + Name & Bio */}
          <div className="profile-biography min-w-0 flex flex-col w-full">
            <header className="mb-6">
              <h1 className="font-h1 text-4xl font-bold text-on-surface mb-2">
                Kawser Ahmed Ratul
              </h1>
              <p className="text-base text-on-surface-variant font-mono-label">
                Computer Science & Engineering Student @ MEC • Backend Developer
              </p>
            </header>

            {/* Connect / Social Links Bar at top right */}
            <div className="flex flex-wrap items-center gap-3 mb-6 pb-4 border-b border-outline-variant/60">
              <span className="text-sm font-semibold text-on-surface-variant mr-1 font-mono-label">
                Connect
              </span>

              {/* GitHub */}
              <a
                href="https://github.com/KawserAhmedpro"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub @KawserAhmedpro"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-surface-container/60 border border-outline-variant/80 flex items-center justify-center text-on-surface hover:border-primary-container hover:text-primary-container transition-all active:scale-95 group"
              >
                <GithubIcon className="w-[18px] h-[18px] fill-current" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kawserahmedratulpro/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-surface-container/60 border border-outline-variant/80 flex items-center justify-center text-on-surface hover:border-primary-container hover:text-[#0A66C2] transition-all active:scale-95 group"
              >
                <LinkedinIcon className="w-[18px] h-[18px] fill-current" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/kawserahmedpro"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook @kawserahmedpro"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-surface-container/60 border border-outline-variant/80 flex items-center justify-center text-on-surface hover:border-primary-container hover:text-[#1877F2] transition-all active:scale-95 group"
              >
                <FacebookIcon className="w-[18px] h-[18px] fill-current" />
              </a>

              {/* Email */}
              <a
                href="mailto:kawserahmedratul@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Email: kawserahmedratul@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-surface-container/60 border border-outline-variant/80 flex items-center justify-center text-on-surface hover:border-primary-container hover:text-[#ea4335] transition-all active:scale-95 group"
              >
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>

            {/* Bio Body (Markdown Rendered High-Contrast) */}
            <div className="markdown-content font-body-lg text-base md:text-lg text-on-surface-variant leading-relaxed text-left space-y-4">
              <h2>Welcome to My Corner of the Web!</h2>
              <p>
                Hello, I’m <strong>Kawser Ahmed Ratul</strong>.
              </p>
              <p>
                I am an undergraduate student pursuing a B.Sc. in <strong>Computer Science and Engineering</strong> at{' '}
                <strong>Mymensingh Engineering College</strong>, affiliated with the University of Dhaka. My academic and
                software engineering interests are grounded in a deep curiosity for <strong>backend systems</strong>,
                relational database internals, and software architecture.
              </p>
              <p>
                My primary technical focus centers on <strong>C#</strong>, <strong>ASP.NET Core Web APIs</strong>,{' '}
                <strong>Entity Framework Core</strong>, and <strong>PostgreSQL</strong>. Rather than superficial abstractions,
                I focus on understanding the fundamentals: query execution plans, HTTP request life cycles, RESTful design principles,
                and maintainable database schemas.
              </p>
              <p>
                I actively build practical applications to solve real problems encountered in student life and academia,
                including:
              </p>
              <div className="pl-4 border-l-2 border-primary-container/40 space-y-1 my-3">
                <p>
                  • <strong>Dining Management System</strong> — A full-featured web application engineered to automate hostel
                  meal counting, daily bazaar expenses, and precise per-meal cost calculations.
                </p>
                <p>
                  • <strong>ResearchMate</strong> — An academic research workspace to organize research papers, save metadata,
                  read PDFs, and keep literature reviews structured.
                </p>
                <p>
                  • <strong>Study Tracker</strong> — A personal productivity tool with subject tracking, session timers, and
                  daily progress analytics.
                </p>
                <p>
                  • <strong>ASP.NET Core REST API Services</strong> — Practical backend projects exploring JWT authentication,
                  PostgreSQL database migrations, and clean CRUD endpoints.
                </p>
              </div>
              <p>
                Throughout my academic journey, I have maintained a strong track record of academic excellence, achieving a{' '}
                <strong>straight GPA 5.00</strong> across all national board examinations: <strong>PSC</strong>, <strong>JSC</strong>,{' '}
                <strong>SSC</strong>, and <strong>HSC</strong> under the Cumilla Board.
              </p>
              <p>
                Outside of backend engineering, I enjoy reading research papers on Machine Learning and Transformer architectures,
                solving programming problems, and playing cricket. I am continually learning, experimenting, and building to grow into a
                capable software engineer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
