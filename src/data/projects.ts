export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Application de Gestion de Projets",
    period: "2024",
    tags: ["Java", "Maven", "MySQL"],
    summary: "Plateforme de gestion de projets permettant aux équipes de suivre leurs projets, organiser leurs membres et gérer les tâches associées. Interface web intuitive pour la création de projets, l'assignation de tâches aux membres, et le suivi de l'avancement via des tableaux de bord interactifs.",
    link: "https://youtu.be/bXr6rMJKyY0",
    repo: "https://github.com/Purple003/GestionProjet"
  },
  {
    title: "PizzaRecipes",
    period: "2024",
    tags: ["Android", "Java"],
    summary: "Application Android qui permet de consulter une liste de pizzas avec leurs détails, incluant ingrédients, description, durée de préparation et prix. Conçue pour apprendre la structure d'un projet Android avec DAO, Service, Adapter et UI.",
    repo: "https://github.com/Purple003/PizzaRecipes"
  },
  {
    title: "3D Educational Game – Interactive Geometry with Unity",
    period: "2024",
    tags: ["Unity", "C#", "3D", "Education"],
    summary: "Jeu éducatif 3D interactif développé avec Unity pour aider les étudiants à visualiser et comprendre les concepts de géométrie de manière ludique et intuitive.",
    repo: "https://github.com/Purple003/3D-Educational-Game-Interactive-Geometry-with-Unity"
  }
];

