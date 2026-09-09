import React from 'react';
import { Layers, Github } from 'lucide-react';

export const EduForge: React.FC = () => {
  return (
    <section id="eduforge" className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-16">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-2.5 py-0.5 rounded border border-[var(--color-accent)]/20">
              Featured Flagship Project
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Master&apos;s Thesis (PFE) · 2025 – 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            [PFE] EduForge — Adaptive Serious Game
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
            An adaptive serious game platform that dynamically adjusts gameplay difficulty live based on real-time emotion detection and generates contextual in-game content via LLMs.
          </p>
        </div>

        {/* Stack & Architecture Meta */}
        <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <span className="font-semibold text-xs text-zinc-900 dark:text-zinc-100 flex items-center space-x-1.5">
            <Layers className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>Technologies &amp; Architecture</span>
          </span>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {[
              'Unity (C#)',
              'Gameplay Programming',
              'MediaPipe',
              'FastAPI',
              'PostgreSQL',
              'WebSocket',
              'LangChain',
              'Groq / LLaMA-3.1',
              'xAPI ADL',
              'Docker',
            ].map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Narrative & Key Features */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-wider font-bold text-zinc-900 dark:text-zinc-100">
              Overview
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Designed and programmed a complete Unity game with real-time gameplay logic that personalizes the learning experience by evaluating the learner&apos;s emotional state and adjusting gameplay parameters live.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-bold text-zinc-900 dark:text-zinc-100">
              Technical Implementation
            </h3>
            <ul className="space-y-2.5 pl-0 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="border-l-2 border-[var(--color-accent)] pl-3">
                <strong className="text-zinc-900 dark:text-zinc-200">Dynamic Difficulty Adjustment (DDA):</strong> Engineered a custom DDA system grounded in Flow theory that monitors player engagement, frustration markers, and task progression to balance challenge and skill dynamically.
              </li>
              <li className="border-l-2 border-[var(--color-accent)] pl-3">
                <strong className="text-zinc-900 dark:text-zinc-200">Real-Time Facial Emotion Detection:</strong> Integrated MediaPipe computer vision directly into the gameplay loop via a low-latency bidirectional WebSocket bridge communicating with a FastAPI and PostgreSQL backend.
              </li>
              <li className="border-l-2 border-[var(--color-accent)] pl-3">
                <strong className="text-zinc-900 dark:text-zinc-200">LLM Content Generation &amp; Learning Analytics:</strong> Connected an LLM pipeline with LangChain and Groq/LLaMA-3.1 to generate dynamic educational content, alongside full xAPI analytics tracking deployed end-to-end on a live VPS with Docker.
              </li>
            </ul>
          </div>
        </div>

        {/* Links */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/Purple003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-medium px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
