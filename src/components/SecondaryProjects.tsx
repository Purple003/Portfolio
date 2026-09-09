import React, { useState } from 'react';
import { Play, X, Github } from 'lucide-react';

export const SecondaryProjects: React.FC = () => {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const projects = [
    {
      title: 'Microservices Architecture & DevOps Pipeline',
      period: '2026',
      tags: ['Java', 'Spring Boot', 'Docker', 'Jenkins', 'RabbitMQ', 'MySQL', 'GitHub Actions', 'SonarQube'],
      description:
        'Architected a microservices system with REST APIs, asynchronous RabbitMQ messaging, Docker containerization, and a full CI/CD pipeline.',
      githubUrl: 'https://github.com/Purple003',
      demoUrl: null,
    },
    {
      title: 'GuessTheAnimal3D',
      period: '2024',
      tags: ['Unity (C#)', 'Vuforia', 'AR/VR', 'Game-Based Learning'],
      description:
        '3D animal recognition game for immersive, interactive learning. Aya Arroche built and contributed the Unity implementation and core gameplay.',
      githubUrl: 'https://github.com/Purple003/3D-Educational-Game-Interactive-Geometry-with-Unity',
      demoUrl: 'https://youtu.be/2HNeW8yBdEg',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 border-b border-zinc-200 dark:border-zinc-800 scroll-mt-16">
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Key Projects
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Selected engineering, software architecture, mobile, and XR projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900/40 flex flex-col justify-between space-y-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                    {project.period}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3 pt-1 text-xs">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-zinc-700 dark:text-zinc-300 hover:text-[var(--color-accent)] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repository</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <button
                      type="button"
                      onClick={() => setActiveVideoUrl('https://www.youtube-nocookie.com/embed/2HNeW8yBdEg?autoplay=1')}
                      className="inline-flex items-center space-x-1 font-medium text-[var(--color-accent)] hover:underline"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Watch Demo</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {activeVideoUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700 shadow-xl">
              <div className="flex items-center justify-between p-3 border-b border-zinc-800">
                <span className="text-xs font-medium text-zinc-300">Project Demo Video</span>
                <button
                  type="button"
                  onClick={() => setActiveVideoUrl(null)}
                  className="p-1 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="relative aspect-video w-full">
                <iframe
                  src={activeVideoUrl}
                  title="Demo Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
