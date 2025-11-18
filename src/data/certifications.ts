export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // "YYYY-MM"
  expiryDate?: string; // "YYYY-MM"
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string; // "/certs/aws-saa.webp"
  imageAlt?: string; // "Badge AWS SAA"
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Certification Professionnelle en Programmation Java – Fondamentaux et Concepts Avancés",
    issuer: "ENS Marrakech",
    issueDate: "2024-01",
    credentialUrl: "https://www.linkedin.com/in/aya-arroche-215a712b0/",
    skills: ["Java", "Programmation Orientée Objet", "Concepts Avancés"],
    tags: ["Java", "Programmation", "Master TEE"],
    image: "/certs/certif1.webp",
    imageAlt: "Certification Professionnelle en Programmation Java",
    status: "active"
  },
  {
    title: "Certification Professionnelle en Hibernate",
    issuer: "ENS Marrakech",
    issueDate: "2024-01",
    credentialUrl: "https://www.linkedin.com/in/aya-arroche-215a712b0/",
    skills: ["Hibernate", "JPA", "Développement", "Ingénierie Logicielle"],
    tags: ["Hibernate", "JPA", "Base de données", "Master TEE"],
    image: "/certs/certif2.webp",
    imageAlt: "Certification Professionnelle en Hibernate",
    status: "active"
  }
];

