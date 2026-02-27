export type BilingualText = {
  en: string;
  fr: string;
};

export const profile = {
  name: "Aya Arroche",
  role: {
    en: "Developer & Educational Engineer",
    fr: "Développeuse & Ingénieure en Éducation",
  } as BilingualText,
  location: "Marrakech, Morocco",
  email: "arrocheaya@gmail.com",
  photo: "/photo.webp",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "B2" },
    { name: "English", level: "C1" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Purple003", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aya-arroche-215a712b0/",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:arrocheaya@gmail.com",
      icon: "email",
    },
  ],
};
