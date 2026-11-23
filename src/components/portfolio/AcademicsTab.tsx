import React from 'react';

export const AcademicsTab: React.FC = () => {
  const degrees = [
    {
      institution: 'Mymensingh Engineering College (University of Dhaka)',
      shortCode: 'MEC',
      duration: 'Nov 2022 - Present',
      degree: 'Bachelor of Science in Computer Science and Engineering',
      result: 'Ongoing Undergraduate Program',
      rank: 'Focus: Backend Architecture, Databases & Algorithms',
      board: 'University of Dhaka Affiliation',
      details: [
        'Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (PostgreSQL/SQL), Operating Systems, Computer Networks, Software Engineering.',
        'Hands-on engineering: Architecting ASP.NET Core REST APIs, building real-world student applications, exploring machine learning models.',
      ],
    },
    {
      institution: 'Hajiganj Degree College',
      shortCode: 'HDC',
      duration: 'Jul 2019 - Feb 2022',
      degree: 'Higher Secondary Certificate (HSC)',
      result: 'GPA 5.00 / 5.00',
      rank: 'Board: Cumilla Board • Science Group',
      board: 'Cumilla Board',
      details: [
        'Higher Mathematics, Physics, Chemistry, Information & Communication Technology (ICT).',
        'Achieved straight GPA 5.00 across all science subjects.',
      ],
    },
    {
      institution: 'Waruk Rahmania High School',
      shortCode: 'WRHS',
      duration: 'Jan 2017 - Feb 2019',
      degree: 'Secondary School Certificate (SSC)',
      result: 'GPA 5.00 / 5.00',
      rank: 'Board: Cumilla Board • Science Group',
      board: 'Cumilla Board',
      details: [
        'General Science, Higher Mathematics, Physics, Chemistry, Biology, Computer Studies.',
        'Graduated with highest grade GPA 5.00.',
      ],
    },
    {
      institution: 'Waruk Rahmania High School',
      shortCode: 'WRHS',
      duration: 'Jan 2014 - Dec 2016',
      degree: 'Junior School Certificate (JSC)',
      result: 'GPA 5.00 / 5.00',
      rank: 'Board: Cumilla Board',
      board: 'Cumilla Board',
      details: [
        'General Science, Mathematics, English, Bengali, ICT.',
        'Earned straight GPA 5.00 on national standardized examination.',
      ],
    },
    {
      institution: 'Waruk Govt Primary School',
      shortCode: 'WGPS',
      duration: 'Graduated 2013',
      degree: 'Primary School Certificate (PSC)',
      result: 'GPA 5.00 / 5.00',
      rank: 'Board: Cumilla Board',
      board: 'Cumilla Board',
      details: [
        'Foundational primary education with top marks and GPA 5.00.',
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-6 animate-fade-in max-w-[1280px] mx-auto pb-12">
      {/* Header Section */}
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight font-h1">
          Academics
        </h1>
        <p className="text-xs md:text-sm text-on-surface-variant font-mono-label">
          Formal undergraduate studies, academic coursework, and nationwide standardized examination records.
        </p>
      </header>

      {/* Conferred Degrees Section */}
      <section className="flex flex-col gap-6 mt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-on-surface tracking-tight">
            Degrees & Qualifications
          </h2>
          <span className="font-mono-label text-xs text-primary-container font-semibold px-2.5 py-1 bg-surface-container rounded-lg border border-outline-variant">
            5.00 GPA Streak
          </span>
        </div>

        <div className="flex flex-col gap-5">
          {degrees.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-5 flex flex-col gap-3 border border-outline-variant rounded-2xl hover:border-primary-container/40 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 bg-surface-container border border-outline-variant flex items-center justify-center p-1 rounded-lg shrink-0">
                    <span className="font-mono text-xs font-bold text-primary-container">
                      {item.shortCode}
                    </span>
                  </div>
                  <h3 className="font-mono-label text-xs font-bold text-on-surface uppercase">
                    {item.institution}
                  </h3>
                </div>

                <span className="px-2.5 py-1 font-mono-label text-xs font-bold rounded-lg bg-surface-container border border-outline-variant text-primary-container shrink-0">
                  {item.duration}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="text-base md:text-lg font-bold text-on-surface group-hover:text-primary-container transition-colors leading-snug">
                  {item.degree}
                </h2>
              </div>

              <div className="text-xs md:text-sm text-on-surface-variant leading-relaxed text-left markdown-content">
                <p>
                  Result: <code>{item.result}</code> <br />
                  <span>{item.rank}</span>
                </p>
                <div className="mt-2 text-xs text-on-surface-variant/90 space-y-1">
                  {item.details.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5">
                      <span className="text-primary-container font-bold">•</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
