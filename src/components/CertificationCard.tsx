import type { Certification } from "@/data/certifications";
import clsx from "clsx";

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired =
    c.status === "expired" ||
    (c.expiryDate && new Date(c.expiryDate) < new Date(c.issueDate));

  return (
    <article
      className={clsx(
        "group relative glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50",
        isExpired && "opacity-80"
      )}
      aria-label={`Certification ${c.title}`}
    >
      <div className="space-y-4">
        {c.image && (
          <div className="flex justify-center">
            <img
              src={c.image}
              alt={c.imageAlt ?? c.title}
              width={256}
              height={256}
              loading="lazy"
              className="w-28 h-28 object-contain rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="space-y-2">
          <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
            {c.title}
          </h3>
          <p className="text-sm text-muted-foreground font-medium">
            {c.issuer} • {mmYYYY(c.issueDate)}
            {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
            {c.credentialId ? ` • ID ${c.credentialId}` : ""}
          </p>
        </div>
        {c.skills?.length ? (
          <div className="flex flex-wrap gap-2">
            {c.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm px-3 py-1 text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : null}
        <div className="flex items-center gap-4 pt-2">
          {c.credentialUrl && (
            <a
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline group/link"
              href={c.credentialUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Voir le certificat ${c.title}`}
            >
              Vérifier
              <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {isExpired && <span className="text-sm text-amber-600 font-medium">Expirée</span>}
          {c.status === "revoked" && <span className="text-sm text-red-600 font-medium">Révoquée</span>}
        </div>
      </div>
    </article>
  );
}

