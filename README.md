# Aya Arroche — Personal Portfolio

Professional, minimalist personal portfolio website for **Aya Arroche** — Game Developer and Emerging Technologies Engineer specializing in XR, real-time interactive systems, and AI-driven adaptive education.

## Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS (utility-first, minimalist design system)
- **Icons:** Lucide React (clean monochrome line icons — zero emojis)
- **Deployment Target:** Vercel

## Key Architecture & Features

- **Strict Minimalist Aesthetic:** Clean typography, generous whitespace, zero emojis, single customizable accent color token (`--color-accent`).
- **Dark Mode Support:** Light by default, with dark mode toggle. Automatically respects `prefers-color-scheme` on first load and persists user choice in `localStorage`.
- **Featured Flagship Project (EduForge):** Structured narrative (**Problem -> Role -> Key Decisions -> Outcome**) highlighting real-time emotion detection (MediaPipe FaceMesh), Flow-grounded DDA, RAG LLM integration (LangChain + LLaMA-3.1), and xAPI ADL 1.0.3 telemetry.
- **Secondary Projects:** Compact cards for Microservices Architecture & DevOps Pipeline and GuessTheAnimal3D (with YouTube demo player).
- **Professional Timeline:** Industry experience at Kokoro Games and foundational educational/technical roles.
- **Direct Asset Integration:** Downloadable CV (`/cv.pdf`) and professional headshot photo (`/photo.jpg`).

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run type check and production build
npm run build

# Run linter
npm run lint
```

## Deployment to Vercel

This repository is configured for direct deployment on Vercel:
1. Push changes to `main` branch on GitHub.
2. Vercel automatically detects Vite and executes `npm run build`.
