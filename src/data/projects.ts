import type { BilingualText } from "./profile";

export type Project = {
  id: string;
  title: BilingualText;
  period: string;
  tags: string[];
  category: "web" | "mobile" | "ai-ml" | "3d-xr";
  summary: BilingualText;
  highlights?: BilingualText[];
  link?: string;
  repo?: string;
  image?: string;
  inProgress?: boolean;
};

export const projects: Project[] = [
  {
    id: "pfe-adaptive-agent",
    title: {
      en: "Adaptive Intelligent Agent for Educational Gaming",
      fr: "Agent Intelligent Adaptatif pour le Jeu Éducatif",
    },
    period: "2025",
    tags: ["Unity", "C#", "LLM", "LSTM", "Deep Learning", "REST API", "WebSocket", "ML-Agents"],
    category: "3d-xr",
    summary: {
      en: "Designing an adaptive intelligent agent embedded in a Unity educational game to personalize each student's learning experience in real time. Integrates LLM for dynamic content generation and LSTM for behavioral data analysis.",
      fr: "Conception d'un agent intelligent adaptatif intégré dans un jeu éducatif Unity pour personnaliser l'expérience d'apprentissage de chaque étudiant en temps réel. Intègre un LLM pour la génération dynamique de contenu et un LSTM pour l'analyse des données comportementales.",
    },
    inProgress: true,
  },
  {
    id: "vr-ar-education",
    title: {
      en: "VR & AR Educational Platform",
      fr: "Plateforme Éducative VR & RA",
    },
    period: "2024",
    tags: ["Unity", "Vuforia", "C#", "AR/VR"],
    category: "3d-xr",
    summary: {
      en: "Designed immersive VR scenes for educational 3D games and built Augmented Reality applications using Vuforia for real-time 3D visualization of human organs and interactive geometry learning.",
      fr: "Conception de scènes VR immersives pour des jeux éducatifs 3D et développement d'applications de Réalité Augmentée avec Vuforia pour la visualisation 3D en temps réel d'organes humains et l'apprentissage interactif de la géométrie.",
    },
    repo: "https://github.com/Purple003/3D-Educational-Game-Interactive-Geometry-with-Unity",
  },
  {
    id: "urban-simulation",
    title: {
      en: "Urban Simulation & AI Platform (Digital Twin)",
      fr: "Simulation Urbaine & Plateforme IA (Digital Twin)",
    },
    period: "2024",
    tags: ["Python", "Flask", "Machine Learning", "Data Visualization"],
    category: "ai-ml",
    summary: {
      en: "Developed an urban simulation platform integrating ML models to analyze and predict environmental phenomena — comparable to a Digital Twin architecture. Built RESTful backend with Flask and dashboards for data-driven decision-making.",
      fr: "Développement d'une plateforme de simulation urbaine intégrant des modèles ML pour analyser et prédire les phénomènes environnementaux — comparable à une architecture Digital Twin. Backend RESTful avec Flask et tableaux de bord pour la prise de décision.",
    },
  },
  {
    id: "microservices-devops",
    title: {
      en: "Microservices Architecture & DevOps Pipeline",
      fr: "Architecture Microservices & Pipeline DevOps",
    },
    period: "2024",
    tags: ["Java", "Spring Boot", "Docker", "Jenkins", "RabbitMQ", "MySQL"],
    category: "web",
    summary: {
      en: "Architected a microservices-based system with REST APIs, containerized with Docker Compose, and automated CI/CD pipelines with Jenkins, GitHub Actions, and SonarQube. Integrated RabbitMQ for event-driven messaging.",
      fr: "Architecture d'un système basé sur des microservices avec des APIs REST, conteneurisé avec Docker Compose, et automatisation des pipelines CI/CD avec Jenkins, GitHub Actions et SonarQube. Intégration de RabbitMQ pour la messagerie événementielle.",
    },
  },
  {
    id: "android-app",
    title: {
      en: "Android Mobile Application",
      fr: "Application Mobile Android",
    },
    period: "2024",
    tags: ["Java", "Android Studio", "REST API", "Google Maps SDK"],
    category: "mobile",
    summary: {
      en: "Developed feature-rich Android applications with Activities, Fragments, RecyclerView, and Navigation components. Integrated REST APIs, GPS location services, and Google Maps SDK for real-time geolocation features.",
      fr: "Développement d'applications Android riches avec Activities, Fragments, RecyclerView et composants de navigation. Intégration d'APIs REST, services de localisation GPS et Google Maps SDK pour la géolocalisation en temps réel.",
    },
    repo: "https://github.com/Purple003/PizzaRecipes",
  },
  {
    id: "project-management",
    title: {
      en: "Project Management Application",
      fr: "Application de Gestion de Projets",
    },
    period: "2024",
    tags: ["Java", "Maven", "MySQL"],
    category: "web",
    summary: {
      en: "A project management platform enabling teams to track projects, organize members, and manage tasks. Features an intuitive web interface for project creation, task assignment, and interactive dashboards.",
      fr: "Plateforme de gestion de projets permettant aux équipes de suivre leurs projets, organiser leurs membres et gérer les tâches. Interface web intuitive avec tableaux de bord interactifs.",
    },
    link: "https://youtu.be/bXr6rMJKyY0",
    repo: "https://github.com/Purple003/GestionProjet",
  },
  {
    id: "3d-circuit",
    title: {
      en: "3D Electrical Circuit Simulation",
      fr: "Simulation de Circuit Électrique 3D",
    },
    period: "2024",
    tags: ["Unity", "C#", "3D", "Simulation"],
    category: "3d-xr",
    summary: {
      en: "Unity 3D project simulating a basic electrical circuit with a battery, bulb, and wire. Realistic circuit behavior simulation with adjustable resistance and light intensity.",
      fr: "Projet Unity 3D simulant un circuit électrique de base avec une batterie, une ampoule et un fil. Simulation réaliste du comportement du circuit avec résistance et intensité lumineuse ajustables.",
    },
    repo: "https://github.com/Purple003/3D-electrical-circuit-simulation",
  },
];
