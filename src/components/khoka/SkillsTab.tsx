import React from 'react';

export const SkillsTab: React.FC = () => {
  const skillCategories = [
    {
      title: 'Backend Engineering',
      icon: 'dns',
      description: 'Core backend ecosystem and API architecture.',
      skills: [
        { name: 'ASP.NET Core', level: 'Primary Framework', desc: 'Middleware, Dependency Injection, Controller routing, Filters' },
        { name: 'Web API Development', level: 'Primary Focus', desc: 'RESTful conventions, JSON serialization, status handling' },
        { name: 'Entity Framework Core', level: 'ORM & Data Mapping', desc: 'Code-first migrations, DbContext, LINQ queries, relationships' },
        { name: 'REST Architecture', level: 'Architecture', desc: 'Stateless endpoints, resource naming, pagination, idempotency' },
        { name: 'Authentication & JWT', level: 'Security', desc: 'Token generation, claims-based authorization, bearer schemes' },
      ],
    },
    {
      title: 'Programming Languages',
      icon: 'code',
      description: 'Languages used for backend systems, problem solving, and scripting.',
      skills: [
        { name: 'C#', level: 'Core Language', desc: 'OOP, LINQ, async/await tasks, memory management, generics' },
        { name: 'C++', level: 'Academic / DSA', desc: 'Pointers, standard template library (STL), algorithmic problem solving' },
        { name: 'Python', level: 'Scripting & AI', desc: 'Data handling, basic automation, AI/ML exploration scripts' },
        { name: 'SQL', level: 'Data Querying', desc: 'Complex joins, aggregations, indexing, schema definitions' },
      ],
    },
    {
      title: 'Database & Storage',
      icon: 'database',
      description: 'Relational data modeling and persistence systems.',
      skills: [
        { name: 'PostgreSQL', level: 'Primary Relational DB', desc: 'ACID transactions, relational schemas, foreign keys, indexes' },
        { name: 'Database Design', level: 'Fundamentals', desc: 'ER modeling, normalization (1NF-3NF), referential integrity' },
        { name: 'SQL Query Optimization', level: 'Practice', desc: 'Execution plans, query performance, index utilization' },
      ],
    },
    {
      title: 'Developer Tools & Environments',
      icon: 'build',
      description: 'Development, debugging, and collaboration toolchain.',
      skills: [
        { name: 'Git & GitHub', level: 'Version Control', desc: 'Branching, commits, pull requests, repository management' },
        { name: 'Visual Studio 2022', level: 'IDE', desc: 'C# profiling, solution management, EF Core Package Manager' },
        { name: 'VS Code', level: 'Editor', desc: 'Full-stack editing, extensions, terminal integration' },
        { name: 'Postman', level: 'API Testing', desc: 'HTTP request testing, collection variables, header inspection' },
      ],
    },
    {
      title: 'Currently Exploring & Academic Interests',
      icon: 'psychology',
      description: 'Active learning domains and research explorations.',
      skills: [
        { name: 'Machine Learning', level: 'Active Study', desc: 'Supervised learning, model evaluation, mathematical foundations' },
        { name: 'Transformers & LLMs', level: 'Reading Papers', desc: 'Attention mechanisms, self-attention, tokenization principles' },
        { name: 'Software Architecture', level: 'Continuous Learning', desc: 'Clean Architecture, Repository Pattern, SOLID principles' },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-6 animate-fade-in max-w-[1280px] mx-auto pb-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight font-h1">
          Technical Skills
        </h1>
        <p className="text-xs md:text-sm text-on-surface-variant font-mono-label">
          Categorized technical index: technologies I use and concepts I am actively exploring.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="glass-card p-5 flex flex-col gap-4 border border-outline-variant rounded-2xl hover:border-primary-container/40 transition-all duration-200"
          >
            <div className="flex items-center gap-2.5 pb-2 border-b border-outline-variant/60">
              <div className="h-8 w-8 bg-surface-container border border-outline-variant flex items-center justify-center text-primary-container rounded-lg shrink-0">
                <span className="material-symbols-outlined text-base">{cat.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-on-surface text-base">{cat.title}</h3>
                <p className="text-xs text-on-surface-variant/70 font-mono-label">{cat.description}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3 bg-surface-container/30 border border-outline-variant/60 rounded-xl hover:border-primary-container/30 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-sm text-on-surface font-mono-label">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono-label uppercase px-2 py-0.5 rounded bg-surface-container border border-outline-variant text-primary-container font-semibold">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
