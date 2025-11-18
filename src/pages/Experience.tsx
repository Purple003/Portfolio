import { experiences } from "@/data/experience";
import { Helmet } from "react-helmet-async";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function Experience() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Expérience — Portfolio</title>
        <meta name="description" content="Mon expérience professionnelle." />
      </Helmet>
      <h2 className="text-2xl font-semibold">Expérience Professionnelle</h2>
      {experiences.length === 0 ? (
        <p className="text-muted-foreground mt-2">
          Ajouter expériences dans src/data/experience.ts
        </p>
      ) : (
        <ol className="relative border-s border-border ms-4">
          {experiences.map((exp) => (
            <li key={exp.company + exp.start} className="ms-6 pb-6 relative">
              <h3 className="font-semibold text-lg">
                {exp.title}
                <span className="text-sm text-muted-foreground font-normal">
                  {" "}
                  @ {exp.company}
                </span>
              </h3>
              <p className="text-sm text-muted-foreground">
                {fmt(exp.start)} — {fmt(exp.end)}
                {exp.location ? ` • ${exp.location}` : ""}
                {exp.type ? ` • ${exp.type}` : ""}
              </p>
              {exp.summary && (
                <p className="mt-2 text-sm">{exp.summary}</p>
              )}
              {exp.responsibilities?.length ? (
                <ul className="list-disc ms-5 mt-2 text-sm">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              ) : null}
              {exp.achievements?.length ? (
                <div className="mt-3">
                  <p className="text-sm font-medium">Réalisations :</p>
                  <ul className="list-disc ms-5 mt-1 text-sm">
                    {exp.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {exp.technologies?.length ? (
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border rounded px-2 py-0.5 bg-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

