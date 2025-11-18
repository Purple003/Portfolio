# Portfolio Aya Arroche

Portfolio professionnel développé avec React 18, TypeScript, Vite et Tailwind CSS.

## Installation

```bash
npm install
```

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement (http://localhost:5173)
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run format` - Formate le code avec Prettier

## Structure du projet

```
src/
├── app/
│   ├── router.tsx       # Configuration des routes
│   └── RootLayout.tsx   # Layout principal (header/footer)
├── components/
│   ├── CertificationCard.tsx
│   └── ThemeToggle.tsx
├── data/
│   ├── profile.ts       # Informations personnelles
│   ├── projects.ts      # Liste des projets
│   ├── education.ts     # Formations
│   ├── certifications.ts # Certifications
│   └── experience.ts    # Expérience professionnelle
├── pages/
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Certifications.tsx
│   └── Contact.tsx
├── index.css
└── main.tsx
```

## Personnalisation

Modifiez les fichiers dans `src/data/` pour personnaliser votre contenu :

- `profile.ts` - Nom, rôle, email, compétences, réseaux sociaux
- `projects.ts` - Liste de vos projets
- `education.ts` - Formations et diplômes
- `certifications.ts` - Certifications professionnelles
- `experience.ts` - Expérience professionnelle

## Images

- Photo de profil : Placez `photo.webp` ou `photo.jpg` dans `public/`
- Images de certifications : Placez les badges dans `public/certs/` (format WebP recommandé)

## Déploiement

Le projet est prêt pour le déploiement sur Vercel :

1. Connectez votre dépôt GitHub à Vercel
2. Vercel détectera automatiquement Vite
3. Le site sera déployé automatiquement à chaque push

## Technologies utilisées

- React 18
- TypeScript
- Vite
- Tailwind CSS v3
- React Router v6
- React Helmet Async (SEO)
- Framer Motion

## Démo

Le site est accessible en ligne après déploiement sur Vercel.

Pour tester localement :
1. Installez les dépendances : `npm install`
2. Lancez le serveur : `npm run dev`
3. Ouvrez http://localhost:5173 dans votre navigateur

## Auteur

Aya Arroche
Master en Ingénierie Didactique, option Technologies Émergentes en Éducation
ENS Marrakech
