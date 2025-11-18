import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <section className="grid gap-6 md:grid-cols-2 items-center min-h-[60vh]">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio : IA, SIG, DevSecOps, Android."
        />
      </Helmet>
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">{profile.name}</h1>
        <p className="mt-2 text-xl text-muted-foreground">{profile.role}</p>
        <p className="mt-4 text-muted-foreground">{profile.about}</p>
        <div className="mt-6 flex gap-3">
          <Link
            to="/projects"
            className="underline hover:text-primary transition-colors"
          >
            Voir les projets
          </Link>
          <Link
            to="/contact"
            className="underline hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
        <div
          className="mt-6 flex flex-wrap gap-2 text-sm"
          aria-label="badges de parcours"
        >
          <span className="rounded-full border px-3 py-1 bg-muted">
            Master TEE (2026)
          </span>
          <span className="rounded-full border px-3 py-1 bg-muted">
            Licence Informatique
          </span>
        </div>
        <div className="mt-6 flex gap-4">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <div className="aspect-square rounded-2xl border bg-muted overflow-hidden max-w-[512px] mx-auto">
        <img
          src={profile.photo || "/photo.jpg"}
          alt={`Photo de profil de ${profile.name}`}
          className="w-full h-full object-cover"
          width={512}
          height={512}
        />
      </div>
    </section>
  );
}

