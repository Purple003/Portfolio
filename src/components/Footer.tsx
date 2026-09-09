import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 text-xs text-zinc-500 dark:text-zinc-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-0.5 text-center sm:text-left">
          <p className="font-medium text-zinc-700 dark:text-zinc-300">
            Aya Arroche
          </p>
          <p>
            Minimal personal portfolio built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
