import React from 'react';

export const ResearchTab: React.FC = () => {
  const topics = [
    {
      code: 'RES-01',
      title: 'Attention Mechanisms & Transformer Architectures',
      domain: 'Artificial Intelligence & NLP',
      status: 'Reading Papers',
      notesCount: 8,
      summary:
        'Exploring how self-attention mechanisms compute weighted contextual embeddings compared to traditional recurrent architectures (RNN/LSTM).',
      curiosity:
        'Understanding how quadratic complexity in sequence length is mitigated in efficient transformer variants (Linear Attention, FlashAttention).',
      concepts: ['Scaled Dot-Product Attention', 'Multi-Head Attention', 'Positional Encoding', 'Transformer Blocks'],
    },
    {
      code: 'RES-02',
      title: 'B-Tree Indexing & Relational Query Execution Engines',
      domain: 'Database Systems',
      status: 'Deep Dive',
      notesCount: 12,
      summary:
        'Investigating the underlying storage pages, buffer pools, and B-Tree node split mechanisms in PostgreSQL and modern relational databases.',
      curiosity:
        'Bridging the gap between ORM-generated queries and physical disk I/O, cache hit ratios, and sequential vs index scans.',
      concepts: ['B-Tree / B+ Tree Storage', 'Buffer Cache Management', 'EXPLAIN ANALYZE', 'Index Scans vs Seq Scans'],
    },
    {
      code: 'RES-03',
      title: 'Asynchronous I/O & Non-Blocking HTTP Concurrency',
      domain: 'Distributed Backend Systems',
      status: 'Prototyping',
      notesCount: 6,
      summary:
        'Analyzing thread pool utilization, async/await state machines in the .NET CLR, and high-throughput connection handling.',
      curiosity:
        'How async/await prevents thread starvation during heavy database queries and network calls without spinning extra OS threads.',
      concepts: ['Task Asynchronous Pattern', 'ThreadPool Starvation', 'Kestrel Web Server', 'State Machine Internals'],
    },
    {
      code: 'RES-04',
      title: 'Machine Learning Model Generalization & Evaluation',
      domain: 'Machine Learning Fundamentals',
      status: 'Reading Papers',
      notesCount: 5,
      summary:
        'Studying bias-variance tradeoffs, regularizations, cross-validation methods, and loss surfaces across structured datasets.',
      curiosity:
        'Applying statistical rigor to dataset evaluations rather than blindly treating models as black-box predictors.',
      concepts: ['Cross Validation', 'Regularization (L1/L2)', 'Loss Functions', 'Evaluation Metrics'],
    },
  ];

  return (
    <div className="flex flex-col gap-6 animate-fade-in max-w-[1280px] mx-auto pb-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight font-h1">
          Research & Curiosity
        </h1>
        <p className="text-xs md:text-sm text-on-surface-variant font-mono-label">
          A personal digital archive of academic papers, systems architecture, and concepts I actively explore.
        </p>
      </header>

      <div className="flex flex-col gap-5 mt-2">
        {topics.map((t, idx) => (
          <article
            key={idx}
            className="glass-card p-5 flex flex-col gap-3 border border-outline-variant rounded-2xl hover:border-primary-container/40 transition-all duration-200"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono-label">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-surface-container border border-outline-variant text-primary-container font-bold">
                  {t.code}
                </span>
                <span className="text-on-surface-variant">{t.domain}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-primary-container/10 border border-primary-container/30 text-primary-container font-semibold">
                {t.status}
              </span>
            </div>

            <h2 className="text-base md:text-lg font-bold text-on-surface leading-snug">
              {t.title}
            </h2>

            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
              {t.summary}
            </p>

            <div className="p-3 bg-surface-container/30 border border-outline-variant/60 rounded-xl text-xs text-on-surface-variant">
              <span className="font-bold text-on-surface font-mono-label uppercase tracking-wider text-[11px] block mb-1 text-primary-container">
                Key Inquiry
              </span>
              <span>{t.curiosity}</span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {t.concepts.map((concept, cIdx) => (
                <span
                  key={cIdx}
                  className="px-2 py-0.5 bg-surface-container border border-outline-variant rounded text-[11px] font-mono-label text-on-surface-variant/80"
                >
                  {concept}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
