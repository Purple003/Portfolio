import React from 'react';
import { MapPin, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-16">
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            About
          </h2>
          <div className="flex items-center space-x-2 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="inline-flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Marrakech, Morocco</span>
            </span>
            <span>·</span>
            <span>Open to relocations &amp; remote opportunities</span>
          </div>
        </div>

        <div className="space-y-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
          <p>
            Master&apos;s in Engineering and Emerging Technologies from ENS Marrakech (Université Cadi Ayyad), defended June 2026. Licence in Education (Informatique option) — a dual pedagogical-technical profile that shapes how I approach building for learners.
          </p>
          <p>
            Based in Marrakech, Morocco. Open to opportunities in Game Development, XR/VR/AR, and AI-driven interactive systems.
          </p>
        </div>

        {/* Education */}
        <div className="pt-2 space-y-3">
          <h3 className="text-xs uppercase tracking-wider font-semibold text-zinc-900 dark:text-zinc-200">
            Education
          </h3>

          <div className="space-y-3">
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div className="space-y-0.5">
                <div className="flex items-center space-x-1.5">
                  <GraduationCap className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Master&apos;s — Engineering and Emerging Technologies
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 pl-5">
                  ENS Marrakech — Université Cadi Ayyad · Defended June 2026
                </p>
              </div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 pl-5 sm:pl-0 whitespace-nowrap">
                2024 – 2026
              </span>
            </div>

            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div className="space-y-0.5">
                <div className="flex items-center space-x-1.5">
                  <GraduationCap className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                  <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Licence — Education (Informatique option)
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 pl-5">
                  ENS Marrakech — Université Cadi Ayyad
                </p>
              </div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 pl-5 sm:pl-0 whitespace-nowrap">
                2021 – 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

