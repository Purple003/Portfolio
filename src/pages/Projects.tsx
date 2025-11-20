import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  return (
    <section className="space-y-12">
      <Helmet>
        <title>Projets — Portfolio</title>
        <meta name="description" content="Mes projets de développement." />
      </Helmet>
      <div className="space-y-2">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Projets</h2>
        <p className="text-muted-foreground text-lg">Une sélection de mes réalisations</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <article
            key={p.title}
            className="group relative glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                {p.period && (
                  <p className="text-sm text-muted-foreground font-medium">{p.period}</p>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {p.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm px-3 py-1 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-2">
                {p.link && (
                  <a
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline group/link"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                    <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {p.repo && (
                  <a
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline group/link"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                    <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

