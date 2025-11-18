import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Formations — Portfolio</title>
        <meta name="description" content="Mes formations et diplômes." />
      </Helmet>
      <h2 className="text-2xl font-semibold">Formations</h2>
      <ol className="relative border-s border-border ms-4">
        {education.map((e) => (
          <li key={e.school + e.start} className="ms-6 pb-6 relative">
            <div className="break-words">
              <h3 className="font-semibold text-lg">
                {e.degree}
                {e.field ? ` — ${e.field}` : ""}
              </h3>
              <p className="text-sm text-muted-foreground font-normal mt-1">
                @ {e.school}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              {fmt(e.start)} — {fmt(e.end)}
              {e.location ? ` • ${e.location}` : ""}
              {e.gpa ? ` • GPA ${e.gpa}` : ""}
            </p>
            {e.courses?.length ? (
              <p className="mt-2 text-sm">
                Cours: {e.courses.slice(0, 5).join(", ")}
              </p>
            ) : null}
            {e.highlights?.length ? (
              <ul className="list-disc ms-5 mt-2 text-sm">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}

