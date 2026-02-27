export type SkillCategory = {
    key: string;
    skills: string[];
};

export const skillCategories: SkillCategory[] = [
    {
        key: "ai",
        skills: [
            "LLM Integration",
            "LSTM (Deep Learning)",
            "scikit-learn",
            "Data Analysis & Visualization",
            "ML-Agents",
            "Numerical Simulation",
        ],
    },
    {
        key: "languages",
        skills: ["C#", "Python", "Java", "JavaScript", "TypeScript"],
    },
    {
        key: "backend",
        skills: [
            "Flask",
            "REST API",
            "Spring Boot",
            "WebSocket",
            "Microservices",
            "OpenFeign",
            "RabbitMQ",
        ],
    },
    {
        key: "mobile",
        skills: ["Android (Java)", "Android Studio", "React Native"],
    },
    {
        key: "devops",
        skills: [
            "Docker",
            "Docker Compose",
            "Jenkins",
            "SonarQube",
            "GitHub Actions",
        ],
    },
    {
        key: "3d",
        skills: [
            "Interactive 3D Scene Design",
            "AR Object Visualization",
            "Educational Game Simulations",
        ],
    },
    {
        key: "databases",
        skills: ["MySQL"],
    },
    {
        key: "gameXr",
        skills: [
            "Unity (C#)",
            "Unreal Engine (basic)",
            "Vuforia AR SDK",
            "ML-Agents",
        ],
    },
];
