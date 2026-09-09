import React from 'react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-16">
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Professional Experience
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Industry internship experience in game development workflows and earlier institutional technical roles.
          </p>
        </div>

        <div className="space-y-6">
          {/* Kokoro Games */}
          <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  Game Developer Intern
                </h3>
                <p className="text-sm font-medium text-[var(--color-accent)]">
                  Kokoro Games · Casablanca (Remote)
                </p>
              </div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                Jul. 2026 – Aug. 2026 · 2 mos
              </span>
            </div>

            {/* [CONFIRM WITH KOKORO]: If Kokoro Games confirms that naming specific internal titles (e.g. "Bronze Age" / "Forge of Ages") is permitted under NDA, replace the generic description here with the named project details. */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Contributed to the studio&apos;s game design and production pipeline by structuring core concepts into structured technical and creative deliverables. Authored comprehensive technical design documents (TDD), scenario writing, and game design documents (GDD) for card-game systems, collaborating closely with cross-functional art and engineering teams from initial concept to defined mechanics.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1 text-xs">
              {['Game Design Documentation (GDD)', 'Technical Design (TDD)', 'Card Game Systems', 'Scenario Writing', 'Cross-Functional Collaboration'].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Earlier Internships */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400">
              Earlier Technical &amp; Educational Internships
            </h4>

            <div className="space-y-3">
              <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/20 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div className="space-y-0.5">
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                    IT Teacher — High School Al Massar, Marrakech
                  </span>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Adapted computer science curriculum for students, introducing active pedagogical methods to strengthen foundational algorithmic thinking.
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                  Mar. 2024 – Jul. 2024
                </span>
              </div>

              <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/20 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div className="space-y-0.5">
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                    IT Support Technician — Coll&egrave;ge Elia Abou Madi, Marrakech
                  </span>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Digitized paper-based administrative workflows into a consolidated desktop records system, streamlining routine office administration.
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                  Apr. 2023 – Jun. 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
