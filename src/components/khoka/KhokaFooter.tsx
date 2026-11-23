import React from 'react';

export const KhokaFooter: React.FC = () => {
  return (
    <footer className="bg-surface/80 backdrop-blur-md py-4 px-6 mt-auto relative z-10 border-t border-outline-variant/40">
      <div className="max-w-[1280px] mx-auto flex justify-center items-center text-center">
        <span className="font-mono-label text-[11px] tracking-widest text-primary-container uppercase font-semibold text-center">
          © 2026 Kawser Ahmed Ratul • ALL RIGHTS RESERVED
        </span>
      </div>
    </footer>
  );
};
