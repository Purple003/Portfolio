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
    title: "Développement Front-End moderne avec React",
    issuer: "MLIAEdu",
    issueDate: "2024-01",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/26-01069d32-708e-4b90-ae1c-f321f60a7abf-091763",
    skills: ["React", "Front-End", "Développement Web"],
    tags: ["React", "Front-End", "Web"],
    image: "/certs/certif1.webp",
    imageAlt: "Certification Développement Front-End moderne avec React",
    status: "active"
  },
  {
    title: "Hibernate & JPA",
    issuer: "MLIAEdu",
    issueDate: "2024-01",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/28-01069d32-708e-4b90-ae1c-f321f60a7abf-341612",
    skills: ["Hibernate", "JPA", "Développement", "Ingénierie Logicielle"],
    tags: ["Hibernate", "JPA", "Base de données"],
    image: "/certs/certif2.webp",
    imageAlt: "Certification Hibernate & JPA",
    status: "active"
  }
];

