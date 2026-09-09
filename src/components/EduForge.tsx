import React from 'react';
import { Layers, Github, ExternalLink, Cpu, Zap, Database } from 'lucide-react';

export const EduForge: React.FC = () => {
  return (
    <section id="eduforge" className="py-14 sm:py-20 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-16">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-2.5 py-0.5 rounded border border-[var(--color-accent)]/20">
              Featured Project
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">2025 – 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            EduForge — Adaptive Serious Game
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
            An adaptive serious game platform that uses real-time facial landmark tracking to estimate learner engagement and dynamically adjusts gameplay difficulty — keeping learners in a state of cognitive flow.
          </p>
        </div>

        {/* Overview + Challenge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 space-y-2">
            <h3 className="text-xs uppercase tracking-wider font-bold text-zinc-900 dark:text-zinc-100">Overview</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              EduForge is a complete Unity-based game with an AI backend: MediaPipe captures the learner&apos;s facial landmarks through the webcam, estimates their engagement level in real time, and relays that signal via WebSocket to a FastAPI service backed by PostgreSQL. The game engine reads the signal and adjusts difficulty parameters live — making the experience harder when the learner is coasting, and easier when they show frustration markers.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 space-y-2">
            <h3 className="text-xs uppercase tracking-wider font-bold text-zinc-900 dark:text-zinc-100">Challenge</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Traditional educational software presents content at a fixed pace, leaving learners either bored by insufficient challenge or overwhelmed by excessive difficulty. The goal was to implement a feedback loop grounded in Flow theory — the psychological state where challenge and skill are in balance — and close that loop in real time without requiring the learner to self-report their state.
            </p>
          </div>
        </div>

        {/* My Role Callout */}
        <div className="p-5 rounded-xl border-2 border-[var(--color-accent)]/30 bg-[var(--color-accent-subtle)] space-y-3">
          <h3 className="text-xs uppercase tracking-wider font-bold text-zinc-900 dark:text-zinc-100">My Role</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Gameplay Programming',
              'UI Implementation',
              'Backend Integration',
              'Adaptive System Design',
              'Deployment',
            ].map((role) => (
              <span
                key={role}
                className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-xs font-medium"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Technology */}
        <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-3">
          <span className="font-semibold text-xs text-zinc-900 dark:text-zinc-100 flex items-center space-x-1.5">
            <Layers className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>Technology Stack</span>
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              'Unity (C#)',
              'FastAPI',
              'PostgreSQL',
              'MediaPipe',
              'LangChain',
              'LLaMA-3.1 (Groq)',
              'WebSocket',
              'xAPI ADL 1.0.3',
              'Docker',
            ].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Decisions */}
        <div className="space-y-3">
          <h3 className="text-xs uppercase tracking-wider font-bold text-zinc-900 dark:text-zinc-100">Key Engineering Decisions</h3>
          <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex gap-3">
              <Cpu className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-zinc-900 dark:text-zinc-200">Real-time vision bridge: </strong>
                MediaPipe runs client-side, streaming facial landmark vectors over a low-latency bidirectional WebSocket channel to the FastAPI/PostgreSQL backend — keeping the Unity game loop decoupled from the ML inference layer.
              </span>
            </li>
            <li className="flex gap-3">
              <Zap className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-zinc-900 dark:text-zinc-200">Dynamic Difficulty Adjustment (DDA): </strong>
                A custom DDA engine grounded in Flow theory monitors engagement signals, frustration markers, and task progression — adjusting game parameters (pacing, complexity, hint frequency) to keep the learner in the optimal challenge band.
              </span>
            </li>
            <li className="flex gap-3">
              <Database className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-zinc-900 dark:text-zinc-200">RAG-based content generation: </strong>
                LangChain + LLaMA-3.1 (via Groq) generates dynamic in-game educational content matched to the current difficulty level. xAPI ADL 1.0.3 tracks all learning interactions end-to-end.
              </span>
            </li>
          </ul>
        </div>

        {/* Results */}
        <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 space-y-2">
          <h3 className="text-xs uppercase tracking-wider font-bold text-zinc-900 dark:text-zinc-100">Results</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Deployed live on a VPS using Docker, with the full MediaPipe inference pipeline, FastAPI backend, and Unity WebGL build running end-to-end. Deployed and tested with real learners, validating the real-time engagement detection and adaptive difficulty loop in practice.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="inline-flex items-center space-x-2 text-sm font-medium px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-400 dark:text-zinc-500 cursor-default"
            title="Demo link coming soon"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo — Link Coming Soon</span>
          </span>
          <a
            href="https://github.com/Purple003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-medium px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub — Available on Request</span>
          </a>
        </div>
      </div>
    </section>
  );
};

