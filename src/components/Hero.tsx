import React from 'react';
import { ArrowDown, FileText, Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToEduforge = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('eduforge');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
        <div className="space-y-4 max-w-2xl">
          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Aya Arroche
            </h1>
            <p className="text-base sm:text-lg font-medium text-[var(--color-accent)]">
              Game Developer · XR &amp; AI-Driven Education
            </p>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl">
            Working at the intersection of game development, XR/immersive technology, and AI-driven education — building adaptive systems that put learners in flow.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#eduforge"
              onClick={handleScrollToEduforge}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded text-sm font-medium bg-[var(--color-accent)] text-white hover:opacity-95 transition-opacity"
            >
              <span>View EduForge</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded text-sm font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 bg-transparent transition-colors"
            >
              <FileText className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              <span>Download CV</span>
            </a>

            <div className="flex items-center space-x-2 pl-2 border-l border-zinc-200 dark:border-zinc-800">
              <a
                href="https://github.com/Purple003"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/aya-arroche-215a712b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:arrocheaya@gmail.com"
                className="p-2 rounded text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[var(--color-accent)] shadow-md bg-zinc-100 dark:bg-zinc-800">
            <img
              src="/photo.jpg"
              alt="Aya Arroche"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
