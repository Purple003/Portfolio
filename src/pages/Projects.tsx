import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Projets — Portfolio</title>
        <meta name="description" content="Mes projets de développement." />
      </Helmet>
      <h2 className="text-2xl font-semibold">Projets</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="border rounded-2xl p-4 hover:shadow transition"
          >
            <h3 className="font-semibold text-lg">{p.title}</h3>
            {p.period && (
              <p className="text-sm text-muted-foreground mt-1">{p.period}</p>
            )}
            <p className="text-sm text-muted-foreground mt-2">{p.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="border rounded px-2 py-0.5 bg-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              {p.link && (
                <a
                  className="underline hover:text-primary transition-colors"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              )}
              {p.repo && (
                <a
                  className="underline hover:text-primary transition-colors"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

