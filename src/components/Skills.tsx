import React from 'react';
import { Award, Globe } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillTiers = [
    {
      tier: 'Core',
      description: 'Primary focus areas',
      items: ['Unity', 'C#', 'XR', 'Game Development'],
    },
    {
      tier: 'Supporting',
      description: 'Backend & tooling',
      items: ['Python', 'FastAPI', 'PostgreSQL', 'Git'],
    },
    {
      tier: 'Specialized',
      description: 'Domain-specific expertise',
      items: ['MediaPipe', 'xAPI', 'LangChain / LLM integration', 'Adaptive systems'],
    },
  ];

  const certifications = [
    'NLP in Python',
    'Front-End Dev with React',
    'React Native',
    'Java Advanced',
    'Hibernate & JPA',
  ];

  const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'French', level: 'B2' },
    { name: 'English', level: 'C1' },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-16">
      <div className="space-y-8">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Skills &amp; Stack
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Technical proficiencies directly reflecting professional and project experience.
          </p>
        </div>

        {/* 3-Tier Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {skillTiers.map((group) => (
            <div
              key={group.tier}
              className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-3"
            >
              <div className="border-b border-zinc-100 dark:border-zinc-800/80 pb-2 space-y-0.5">
                <h3 className="text-xs uppercase tracking-wider font-bold text-[var(--color-accent)]">
                  {group.tier}
                </h3>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-500">{group.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Certifications */}
          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-zinc-900 dark:text-zinc-200 flex items-center space-x-1.5 border-b border-zinc-100 dark:border-zinc-800/80 pb-1.5">
              <Award className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>Certifications</span>
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-2.5">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-zinc-900 dark:text-zinc-200 flex items-center space-x-1.5 border-b border-zinc-100 dark:border-zinc-800/80 pb-1.5">
              <Globe className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>Languages</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="px-3 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs flex items-center space-x-1.5"
                >
                  <span className="font-semibold">{lang.name}</span>
                  <span className="text-zinc-400 dark:text-zinc-500 font-mono">({lang.level})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

