import React, { useState } from 'react';

interface Project {
  id: string;
  shortCode: string;
  year: string;
  title: string;
  category: string;
  filterCat: 'BACKEND' | 'FULLSTACK' | 'TOOLS';
  techBadges: string[];
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  linkedInUrl?: string;
}

export const ProjectsTab: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'BACKEND' | 'FULLSTACK' | 'TOOLS'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('dining-system');

  const projects: Project[] = [
    {
      id: 'dining-system',
      shortCode: 'DM',
      year: '2026',
      title: 'Dining Management System (Meal Management System)',
      category: 'Fullstack / Operations',
      filterCat: 'FULLSTACK',
      techBadges: ['JavaScript', 'Tailwind CSS', 'LocalStorage / DB', 'HTML5'],
      summary:
        'A comprehensive web application engineered to eliminate the manual, error-prone record-keeping in university student dorms and shared messes.',
      problem:
        'Managing student hostels and mess accounts manually with physical logbooks causes errors in meal counting, lost receipts for daily bazar purchases, confusion over individual deposits, and disputes when calculating end-of-month per-meal costs.',
      solution:
        'Engineered an intuitive dining management system where students can turn meal status ON/OFF daily, managers can input daily market expense items, and the system automatically calculates total meals, cumulative bazar expenditure, and accurate real-time meal rates per member.',
      features: [
        'Role-based workflow for Mess Manager and Member accounts',
        'Daily meal tracking with breakfast, lunch, and dinner toggles',
        'Daily market expense logging with date, item breakdown, and cost',
        'Automated real-time meal rate calculation: Total Bazar Cost ÷ Total Meals Consumed',
        'Individual member balance sheet with deposits, meals eaten, and refund/due totals',
        'Clean, accessible responsive UI for quick updates on mobile and desktop',
      ],
      liveUrl: 'https://kawserahmedpro.github.io/meal_management_system/login',
      githubUrl: 'https://github.com/KawserAhmedpro/meal_management_system',
      linkedInUrl: 'https://lnkd.in/p/gQmurhj3',
    },
    {
      id: 'research-mate',
      shortCode: 'RM',
      year: '2025',
      title: 'ResearchMate — Research Paper Workspace',
      category: 'Academic Tools / Productivity',
      filterCat: 'TOOLS',
      techBadges: ['JavaScript', 'IndexedDB', 'PDF Reader', 'CSS3'],
      summary:
        'A distraction-free literature review workstation and metadata manager designed for academic researchers and computer science students.',
      problem:
        'Undergraduates and researchers downloading numerous arXiv PDFs frequently lose track of paper abstracts, citation bibtex, key methodologies, personal reading notes, and research taxonomies across disorganized local folders.',
      solution:
        'Built a centralized browser workspace to catalog research papers, categorize them by topic (e.g. AI, Transformers, Database engines), store paper metadata, and record notes alongside reading progress.',
      features: [
        'Paper repository with searchable titles, authors, venues, and publication years',
        'Categorized taxonomy tags (e.g. Machine Learning, Distributed Systems, Algorithms)',
        'Built-in note-taking interface for literature review summaries and key equations',
        'Reading status tracker (To Read, In Progress, Read, Bookmarked)',
        'Local client-side persistence for immediate offline access',
      ],
      liveUrl: 'https://kawserahmedpro.github.io/ReasearchMate/',
      githubUrl: 'https://github.com/KawserAhmedpro/ReasearchMate',
    },
    {
      id: 'study-tracker',
      shortCode: 'ST',
      year: '2025',
      title: 'Study Tracker — Personal Productivity Suite',
      category: 'Productivity / Web App',
      filterCat: 'TOOLS',
      techBadges: ['Web App', 'Analytics', 'Timer API', 'Responsive UI'],
      summary:
        'A personal time management and curriculum tracking tool designed to build consistent study habits for engineering coursework.',
      problem:
        'Balancing multiple rigorous CSE courses simultaneously without quantifiable study data leads to inefficient time distribution and cramming before semester finals.',
      solution:
        'Created a streamlined productivity companion to log focused study blocks, monitor subject-wise progress, analyze daily time allocation with visual stats, and ensure accountability.',
      features: [
        'Course and topic tracking with completion status',
        'Integrated study timer for deep focus sessions',
        'Daily and weekly study hour statistics and productivity metrics',
        'Historical session logs with notes and focus ratings',
      ],
      liveUrl: 'https://kawserahmedpro.github.io/Study_Tracker_webApp_for_personal_use/',
    },
    {
      id: 'aspnet-api-suite',
      shortCode: 'API',
      year: '2026',
      title: 'ASP.NET Core REST API Practice & Architecture',
      category: 'Backend / Systems',
      filterCat: 'BACKEND',
      techBadges: ['C#', 'ASP.NET Core', 'EF Core', 'PostgreSQL', 'JWT'],
      summary:
        'Production-patterned backend services implementing clean layered architecture, Entity Framework Core migrations, relational modeling, and JWT authentication.',
      problem:
        'Moving from basic CRUD scripts to professional enterprise-ready backend systems requires structured dependency injection, repository abstractions, stateless authentication, and secure database migrations.',
      solution:
        'Developed end-to-end backend Web APIs in C# and ASP.NET Core featuring clean separation of concerns, generic repository patterns, PostgreSQL database mappings, input validation, and JWT token protection.',
      features: [
        'Clean controller and service layer separation with Dependency Injection',
        'Entity Framework Core code-first migrations with PostgreSQL relational schemas',
        'Stateless JWT authentication and role-based authorization',
        'Standardized HTTP status codes, structured error handling, and response wrappers',
        'Postman collection documentation for rapid endpoint verification',
      ],
      githubUrl: 'https://github.com/KawserAhmedpro',
    },
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = activeFilter === 'ALL' || p.filterCat === activeFilter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.techBadges.some((t) => t.toLowerCase().includes(query)) ||
      p.summary.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-6 animate-fade-in max-w-[1280px] mx-auto pb-12">
      {/* Header Section */}
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight font-h1">
          Projects
        </h1>
        <p className="text-xs md:text-sm text-on-surface-variant font-mono-label">
          Featured full-stack applications, personal productivity tools, and backend API engineering.
        </p>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-surface-container/30 p-2 rounded-xl border border-outline-variant mt-2">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {(['ALL', 'FULLSTACK', 'BACKEND', 'TOOLS'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`proj-filter-btn px-3 py-1 rounded-lg font-mono-label text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-primary-container text-background shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {filter === 'ALL' ? 'All' : filter.charAt(0) + filter.slice(1).toLowerCase()}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-sm">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects & stacks..."
              className="w-full pl-8 pr-3 py-1.5 text-xs font-mono-label bg-surface border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary-container transition-colors"
            />
          </div>
        </div>
      </header>

      {/* Projects List */}
      <section id="projects-grid" className="flex flex-col gap-5 mt-2">
        {filteredProjects.map((p) => {
          const isExpanded = expandedId === p.id;
          return (
            <article
              key={p.id}
              className="proj-card glass-card p-5 flex flex-col gap-3 border border-outline-variant rounded-2xl hover:border-primary-container/40 transition-all duration-200 group"
            >
              {/* Minimal Metadata Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono-label text-on-surface-variant/70">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 bg-surface-container border border-outline-variant flex items-center justify-center text-primary-container font-mono text-[10px] font-bold rounded shrink-0">
                    {p.shortCode}
                  </div>
                  <span className="font-bold text-on-surface">{p.year}</span>
                  <span className="text-on-surface-variant/40">•</span>
                  <span>{p.category}</span>
                </div>

                {/* Tech Category Badges */}
                <div className="flex flex-wrap gap-1">
                  {p.techBadges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2 py-0.5 bg-surface-container border border-outline-variant text-[10px] text-primary-container font-mono tracking-wider rounded uppercase font-bold"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title & Quick Links */}
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-base md:text-lg font-bold text-on-surface group-hover:text-primary-container transition-colors leading-snug">
                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>{p.title}</span>
                      <span className="material-symbols-outlined text-sm text-on-surface-variant/50">
                        open_in_new
                      </span>
                    </a>
                  ) : (
                    <span>{p.title}</span>
                  )}
                </h2>

                <div className="flex items-center gap-1.5 shrink-0">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-primary-container text-background border border-primary-container font-mono-label text-[11px] uppercase font-bold tracking-wider rounded-full transition-colors flex items-center gap-1 hover:bg-primary-fixed-dim"
                    >
                      <span className="material-symbols-outlined text-xs">visibility</span>
                      <span>Live</span>
                    </a>
                  )}

                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-surface-container hover:bg-primary-container hover:text-background border border-outline-variant text-on-surface font-mono-label text-[11px] uppercase font-bold tracking-wider rounded-full transition-colors flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-xs">code</span>
                      <span>Code</span>
                    </a>
                  )}

                  {p.linkedInUrl && (
                    <a
                      href={p.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View LinkedIn post showcase"
                      className="px-2.5 py-1 bg-surface-container hover:bg-[#0A66C2] hover:text-white border border-outline-variant text-on-surface font-mono-label text-[11px] uppercase font-bold tracking-wider rounded-full transition-colors flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-xs">share</span>
                      <span>Post</span>
                    </a>
                  )}

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : p.id)}
                    type="button"
                    className="details-toggle-btn px-2.5 py-1 bg-surface-container/80 hover:bg-primary-container hover:text-background border border-outline-variant text-on-surface font-mono-label text-[11px] font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-xs">
                      {isExpanded ? 'expand_less' : 'expand_more'}
                    </span>
                    <span>{isExpanded ? 'Less' : 'More'}</span>
                  </button>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                {p.summary}
              </p>

              {/* Expandable Details Section */}
              {isExpanded && (
                <div className="flex flex-col gap-3 pt-3 border-t border-outline-variant/60 animate-fade-in text-xs md:text-sm text-on-surface-variant leading-relaxed markdown-content">
                  <div>
                    <h4 className="font-bold text-on-surface text-xs uppercase tracking-wider font-mono-label mb-1 text-primary-container">
                      Problem Solved
                    </h4>
                    <p>{p.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-on-surface text-xs uppercase tracking-wider font-mono-label mb-1 text-primary-container">
                      Engineering Approach
                    </h4>
                    <p>{p.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-on-surface text-xs uppercase tracking-wider font-mono-label mb-1 text-primary-container">
                      Key Features & Capabilities
                    </h4>
                    <ul className="space-y-1 list-disc pl-4 text-xs">
                      {p.features.map((feat, fIdx) => (
                        <li key={fIdx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
};
