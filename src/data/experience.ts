export type Experience = {
  title: string;
  company: string;
  type?: "Temps plein" | "Stage" | "Freelance" | "Contrat" | "Alternance" | "Stage scolaire";
  location?: string;
  start: string; // "YYYY-MM"
  end?: string; // "YYYY-MM" ou undefined si en cours
  summary?: string;
  responsibilities?: string[];
  achievements?: string[];
  technologies?: string[];
};

export const experiences: Experience[] = [
  {
    title: "Éducatrice - Professeure d'Informatique",
    company: "École Al Massar",
    type: "Stage scolaire",
    location: "Marrakech, Maroc",
    start: "2024-01",
    summary: "Stage scolaire comme éducatrice à l'école Al Massar Marrakech, Professeure d'informatique.",
    responsibilities: [
      "Enseignement de l'informatique",
      "Encadrement des élèves",
      "Préparation des cours"
    ],
    technologies: ["Informatique", "Pédagogie", "Éducation"]
  }
];


