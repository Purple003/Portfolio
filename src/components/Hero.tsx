import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
// No custom scroll handler needed
  return (
    <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
        <div className="space-y-4 max-w-2xl">
          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Aya Arroche
            </h1>
            <p className="text-base sm:text-lg font-medium text-[var(--color-accent)]">
               Emerging Technologies Engineer · XR Developer · AI-Driven Interactive Systems
            </p>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl">
               I build immersive, adaptive experiences — from real-time XR gameplay systems to AI-integrated pipelines. Open to work across game development, immersive technology (XR/VR/AR), and AI-driven interactive systems, including mobile and web.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="#about"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded text-sm font-medium bg-[var(--color-accent)] text-white hover:opacity-95 transition-opacity"
            >
              <span>Scroll Down</span>
              <ArrowDown className="w-4 h-4" />
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
