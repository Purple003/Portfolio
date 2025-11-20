import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <section className="grid gap-8 md:grid-cols-2 items-center min-h-[80vh] py-12">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio : IA, SIG, DevSecOps, Android."
        />
      </Helmet>
      <div className="space-y-6">
        <div className="space-y-3">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            {profile.role}
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {profile.about}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Voir les projets
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-border bg-background hover:bg-muted transition-all duration-200 font-medium"
          >
            Contact
          </Link>
        </div>

        <div
          className="flex flex-wrap gap-2 pt-4"
          aria-label="badges de parcours"
        >
          <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            Master TEE (2026)
          </span>
          <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            Licence Informatique
          </span>
        </div>

        <div className="flex items-center gap-6 pt-4 border-t border-border">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
      
      <div className="relative aspect-square rounded-3xl border border-border/50 bg-muted/30 overflow-hidden max-w-[512px] mx-auto shadow-2xl backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <img
          src={profile.photo || "/photo.jpg"}
          alt={`Photo de profil de ${profile.name}`}
          className="relative w-full h-full object-cover"
          width={512}
          height={512}
        />
      </div>
    </section>
  );
}

