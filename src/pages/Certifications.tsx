import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";
import { Helmet } from "react-helmet-async";

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [
            c.title,
            c.issuer,
            ...(c.tags ?? []),
            ...(c.skills ?? []),
          ]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Certifications — Portfolio</title>
        <meta name="description" content="Mes certifications professionnelles." />
      </Helmet>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <input
          placeholder="Filtrer (ex: AWS, Kubernetes)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="border rounded-xl px-3 py-2 w-72 max-w-full bg-background text-foreground"
          aria-label="Filtrer les certifications"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((c) => (
          <CertificationCard key={c.title + c.issueDate} c={c} />
        ))}
      </div>
      {list.length === 0 && (
        <p className="text-muted-foreground text-center py-8">
          Aucune certification trouvée.
        </p>
      )}
    </section>
  );
}

