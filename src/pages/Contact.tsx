import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <section className="grid gap-6 max-w-2xl">
      <Helmet>
        <title>Contact — Portfolio</title>
        <meta name="description" content="Contactez-moi." />
      </Helmet>
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Email</h3>
          <a
            href={`mailto:${profile.email}`}
            className="text-primary underline hover:no-underline"
          >
            {profile.email}
          </a>
        </div>
        <div>
          <h3 className="font-medium">Localisation</h3>
          <p className="text-muted-foreground">{profile.location}</p>
        </div>
        <div>
          <h3 className="font-medium">Réseaux sociaux</h3>
          <div className="flex gap-4 mt-2">
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
      </div>
    </section>
  );
}

