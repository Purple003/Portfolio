import React from 'react';
import { Mail, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactLinks = [
    {
      label: 'Email',
      value: 'arrocheaya@gmail.com',
      href: 'mailto:arrocheaya@gmail.com',
      icon: Mail,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/aya-arroche',
      href: 'https://www.linkedin.com/in/aya-arroche-215a712b0/',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'github.com/Purple003',
      href: 'https://github.com/Purple003',
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-16">
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Let&apos;s build immersive experiences.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Available for Game Dev, XR, and interactive technology opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-[var(--color-accent)]/50 transition-colors flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300">
                    <Icon className="w-4 h-4 text-[var(--color-accent)]" />
                    <span className="text-xs font-semibold uppercase tracking-wider">{item.label}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[var(--color-accent)] transition-colors" />
                </div>
                <div>
                  <span className="text-xs text-zinc-600 dark:text-zinc-400 break-all font-mono">
                    {item.value}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 gap-3">
          <div className="space-y-0.5">
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Curriculum Vitae
            </span>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Complete professional resume in English matching the PDF on file.
            </p>
          </div>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded text-xs font-medium border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
