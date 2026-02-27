import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLanguage } from "./i18n/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    const { lang } = useLanguage();

    return (
        <HelmetProvider>
            <Helmet>
                <html lang={lang} />
                <title>Aya Arroche | Developer &amp; Educational Engineer</title>
                <meta
                    name="description"
                    content="Portfolio of Aya Arroche — Developer & Educational Engineer specializing in Unity, VR/AR, AI/LLM, and full-stack web development."
                />
                <meta name="author" content="Aya Arroche" />
                <meta name="theme-color" content="#7C9FE8" />
                <meta property="og:title" content="Aya Arroche | Developer & Educational Engineer" />
                <meta property="og:description" content="Developer specializing in Unity, VR/AR, AI/LLM, and full-stack web development." />
                <meta property="og:type" content="website" />
            </Helmet>

            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Timeline />
                <Contact />
            </main>
            <Footer />
        </HelmetProvider>
    );
}
