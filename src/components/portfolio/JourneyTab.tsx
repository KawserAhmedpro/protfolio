import React from 'react';

export const JourneyTab: React.FC = () => {
  const milestones = [
    {
      year: '2022',
      badge: 'MILESTONE 01',
      title: 'Beginning Undergraduate CSE @ Mymensingh Engineering College',
      context: 'MEC (Affiliated with University of Dhaka)',
      description:
        'Commenced formal studies in Computer Science and Engineering following top academic results (GPA 5.00 in HSC and SSC). Immersed in programming fundamentals with C, discrete mathematics, and digital logic design.',
      tags: ['C', 'Mathematics', 'Algorithms', 'MEC'],
    },
    {
      year: '2023',
      badge: 'MILESTONE 02',
      title: 'Data Structures, Object-Oriented Principles & System Logic',
      context: 'Academic Foundations',
      description:
        'Transitioned to C++ and object-oriented programming. Mastered linear and non-linear data structures (trees, graphs, heaps) and algorithm design strategies while solving algorithmic challenges.',
      tags: ['C++', 'Data Structures', 'Algorithms', 'OOP'],
    },
    {
      year: '2024',
      badge: 'MILESTONE 03',
      title: 'Discovering Backend Engineering & The C# / .NET Ecosystem',
      context: 'Technical Specialization',
      description:
        'Discovered a deep passion for backend system design. Began learning C# and ASP.NET Core, diving into request pipelines, middleware, dependency injection, and relational modeling with PostgreSQL.',
      tags: ['C#', 'ASP.NET Core', 'PostgreSQL', 'Web APIs'],
    },
    {
      year: '2025',
      badge: 'MILESTONE 04',
      title: 'Building Practical Solutions: Dining System & ResearchMate',
      context: 'Applied Software Engineering',
      description:
        'Identified real frustrations in student living and academic literature review. Designed, coded, and launched the Dining Management System and ResearchMate to solve everyday hostel accounting and research workflow problems.',
      tags: ['Fullstack', 'Dining System', 'ResearchMate', 'Open Source'],
    },
    {
      year: '2026',
      badge: 'CURRENT FOCUS',
      title: 'Deepening Backend Systems, Database Internals & AI Reading',
      context: 'Active Development & Academic Growth',
      description:
        'Currently advancing backend architecture practices with ASP.NET Core REST APIs, studying relational database indexing internals, and exploring Machine Learning literature.',
      tags: ['Backend', 'Entity Framework Core', 'AI Research', 'Growth'],
    },
  ];

  return (
    <div className="flex flex-col gap-6 animate-fade-in max-w-[1280px] mx-auto pb-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight font-h1">
          Journey & Milestones
        </h1>
        <p className="text-xs md:text-sm text-on-surface-variant font-mono-label">
          Chronological timeline of my academic development, technical milestones, and engineering growth.
        </p>
      </header>

      <div className="flex flex-col gap-5 mt-2">
        {milestones.map((m, idx) => (
          <div
            key={idx}
            className="glass-card p-5 flex flex-col gap-3 border border-outline-variant rounded-2xl hover:border-primary-container/40 transition-all duration-200"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-primary-container px-2.5 py-1 bg-surface-container rounded-lg border border-outline-variant">
                  {m.year}
                </span>
                <span className="font-mono-label text-[11px] text-on-surface-variant/80 font-bold uppercase tracking-wider">
                  {m.badge}
                </span>
              </div>
              <span className="text-xs text-on-surface-variant/60 font-mono-label">
                {m.context}
              </span>
            </div>

            <h2 className="text-base md:text-lg font-bold text-on-surface leading-snug">
              {m.title}
            </h2>

            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
              {m.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {m.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 bg-surface-container border border-outline-variant text-[11px] font-mono-label text-on-surface-variant/90 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
