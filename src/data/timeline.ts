import type { BilingualText } from "./profile";

export type TimelineEntry = {
    type: "experience" | "education";
    title: BilingualText;
    organization: string;
    location?: string;
    start: string;
    end?: string;
    summary?: BilingualText;
    responsibilities?: BilingualText[];
    technologies?: string[];
};

export const timeline: TimelineEntry[] = [
    {
        type: "education",
        title: {
            en: "Master's Degree — Engineering & Emerging Technologies",
            fr: "Master — Ingénierie & Technologies Émergentes",
        },
        organization: "UCA – ENS Marrakech",
        location: "Marrakech, Morocco",
        start: "2024",
        summary: {
            en: "Specializing in emerging technologies for education: Unity, VR/AR, AI/LLM integration, and educational game design.",
            fr: "Spécialisation en technologies émergentes pour l'éducation : Unity, VR/AR, intégration AI/LLM et conception de jeux éducatifs.",
        },
    },
    {
        type: "experience",
        title: {
            en: "Computer Science Teacher (Internship)",
            fr: "Éducatrice – Professeure d'Informatique (Stage)",
        },
        organization: "École Al Massar",
        location: "Marrakech, Morocco",
        start: "2024",
        end: "2024",
        summary: {
            en: "Teaching internship focused on computer science education, student mentoring, and course preparation.",
            fr: "Stage pédagogique axé sur l'enseignement de l'informatique, l'encadrement des élèves et la préparation des cours.",
        },
        technologies: ["Computer Science", "Pedagogy", "Education"],
    },
    {
        type: "education",
        title: {
            en: "Bachelor's Degree — Computer Science",
            fr: "Licence — Informatique",
        },
        organization: "UCA – ENS Marrakech",
        location: "Marrakech, Morocco",
        start: "2021",
        end: "2024",
        summary: {
            en: "Foundational studies in computer science covering programming, data structures, algorithms, databases, and software engineering.",
            fr: "Études fondamentales en informatique couvrant la programmation, les structures de données, les algorithmes, les bases de données et le génie logiciel.",
        },
    },
];
