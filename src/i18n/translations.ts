export const translations = {
    en: {
        nav: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact",
        },
        hero: {
            greeting: "Hi, I'm",
            name: "Aya Arroche",
            role: "Developer & Educational Engineer",
            subtitle:
                "Second-year Master's student in Engineering and Emerging Technologies with hands-on experience in Unity, VR/AR development, AI/LLM integration, and backend systems.",
            cta_projects: "View Projects",
            cta_cv: "Download CV",
            cta_contact: "Contact Me",
        },
        about: {
            title: "About Me",
            bio: "I'm a passionate developer specializing in emerging technologies for education. Currently completing my Master's degree in Engineering and Emerging Technologies at ENS Marrakech, I combine skills in Unity, VR/AR, AI, and full-stack web development to create innovative educational experiences. I'm seeking a remote internship in AI, XR/Game Development, or AI Engineering.",
            highlights: [
                "🎮 Game & XR Developer — Unity, Unreal Engine, Vuforia AR",
                "🤖 AI & Machine Learning — LLM, LSTM, Deep Learning, ML-Agents",
                "💻 Full-Stack — React, Java, Spring Boot, Flask, REST APIs",
                "📱 Mobile — Android (Java), React Native",
                "🐳 DevOps — Docker, Jenkins, CI/CD, SonarQube",
            ],
        },
        skills: {
            title: "Skills & Technologies",
            categories: {
                ai: "AI & Machine Learning",
                languages: "Programming Languages",
                backend: "Backend & APIs",
                mobile: "Mobile Development",
                devops: "DevOps & CI/CD",
                "3d": "3D & Visualization",
                databases: "Databases",
                gameXr: "Game & XR Engines",
            },
        },
        projects: {
            title: "Featured Projects",
            filterAll: "All",
            filterWeb: "Web",
            filterMobile: "Mobile",
            filterAiMl: "AI / ML",
            filter3dXr: "3D / VR / AR",
            viewCode: "Source Code",
            viewDemo: "Live Demo",
            inProgress: "In Progress",
        },
        experience: {
            title: "Experience & Education",
            present: "Present",
        },
        contact: {
            title: "Get In Touch",
            subtitle:
                "Have a project in mind or want to collaborate? Feel free to reach out!",
            name: "Your Name",
            email: "Your Email",
            message: "Your Message",
            send: "Send Message",
            success: "Message sent successfully!",
            socials: "Find me on",
        },
        footer: {
            rights: "All rights reserved.",
            madeWith: "Made with",
        },
    },
    fr: {
        nav: {
            about: "À propos",
            skills: "Compétences",
            projects: "Projets",
            experience: "Parcours",
            contact: "Contact",
        },
        hero: {
            greeting: "Salut, je suis",
            name: "Aya Arroche",
            role: "Développeuse & Ingénieure en Éducation",
            subtitle:
                "Étudiante en Master 2 en Ingénierie des Technologies Émergentes avec une expérience pratique en Unity, développement VR/AR, intégration AI/LLM et systèmes backend.",
            cta_projects: "Voir les Projets",
            cta_cv: "Télécharger CV",
            cta_contact: "Me Contacter",
        },
        about: {
            title: "À Propos",
            bio: "Je suis une développeuse passionnée par les technologies émergentes en éducation. Actuellement en Master 2 d'Ingénierie des Technologies Émergentes à l'ENS Marrakech, je combine des compétences en Unity, VR/AR, IA et développement web full-stack pour créer des expériences éducatives innovantes. Je recherche un stage à distance en IA, développement XR/Jeux, ou ingénierie IA.",
            highlights: [
                "🎮 Développeuse Game & XR — Unity, Unreal Engine, Vuforia AR",
                "🤖 IA & Machine Learning — LLM, LSTM, Deep Learning, ML-Agents",
                "💻 Full-Stack — React, Java, Spring Boot, Flask, REST APIs",
                "📱 Mobile — Android (Java), React Native",
                "🐳 DevOps — Docker, Jenkins, CI/CD, SonarQube",
            ],
        },
        skills: {
            title: "Compétences & Technologies",
            categories: {
                ai: "IA & Machine Learning",
                languages: "Langages de Programmation",
                backend: "Backend & APIs",
                mobile: "Développement Mobile",
                devops: "DevOps & CI/CD",
                "3d": "3D & Visualisation",
                databases: "Bases de Données",
                gameXr: "Moteurs Game & XR",
            },
        },
        projects: {
            title: "Projets en Vedette",
            filterAll: "Tous",
            filterWeb: "Web",
            filterMobile: "Mobile",
            filterAiMl: "IA / ML",
            filter3dXr: "3D / VR / RA",
            viewCode: "Code Source",
            viewDemo: "Démo",
            inProgress: "En Cours",
        },
        experience: {
            title: "Parcours & Formation",
            present: "Présent",
        },
        contact: {
            title: "Me Contacter",
            subtitle:
                "Vous avez un projet en tête ou souhaitez collaborer ? N'hésitez pas à me contacter !",
            name: "Votre Nom",
            email: "Votre Email",
            message: "Votre Message",
            send: "Envoyer",
            success: "Message envoyé avec succès !",
            socials: "Retrouvez-moi sur",
        },
        footer: {
            rights: "Tous droits réservés.",
            madeWith: "Fait avec",
        },
    },
};

export type Translations = typeof translations.en;
