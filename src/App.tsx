import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EduForge } from './components/EduForge';
import { SecondaryProjects } from './components/SecondaryProjects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 selection:bg-[var(--color-accent)] selection:text-white transition-colors duration-200">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6">
          <Hero />
          <EduForge />
          <SecondaryProjects />
          <Skills />
          <Experience />
          <About />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
