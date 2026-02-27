import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";
import { profile } from "../data/profile";

const navLinks = ["about", "skills", "projects", "experience", "contact"] as const;

export default function Navbar() {
    const { lang, toggle } = useLanguage();
    const t = translations[lang];
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-slate-200/20 dark:shadow-slate-900/40"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-lg font-bold tracking-tight text-slate-900 dark:text-white hover:text-accent transition-colors"
                >
                    {profile.name.split(" ")[0]}
                    <span className="text-accent">.</span>
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((key) => (
                        <button
                            key={key}
                            onClick={() => scrollTo(key)}
                            className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 
                         hover:text-accent dark:hover:text-accent transition-colors rounded-lg
                         hover:bg-accent/5"
                        >
                            {t.nav[key]}
                        </button>
                    ))}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    {/* Language Toggle */}
                    <button
                        onClick={toggle}
                        className="relative flex items-center bg-slate-100 dark:bg-slate-800 rounded-full p-0.5 text-xs font-semibold transition-colors"
                        aria-label="Toggle language"
                    >
                        <span
                            className={`px-2.5 py-1 rounded-full transition-all duration-300 ${lang === "en"
                                    ? "bg-accent text-white shadow-md"
                                    : "text-slate-500 dark:text-slate-400"
                                }`}
                        >
                            EN
                        </span>
                        <span
                            className={`px-2.5 py-1 rounded-full transition-all duration-300 ${lang === "fr"
                                    ? "bg-accent text-white shadow-md"
                                    : "text-slate-500 dark:text-slate-400"
                                }`}
                        >
                            FR
                        </span>
                    </button>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-accent transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {mobileOpen ? (
                                <path d="M6 6l12 12M6 18L18 6" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-700/50"
                    >
                        <div className="px-6 py-4 flex flex-col gap-1">
                            {navLinks.map((key) => (
                                <button
                                    key={key}
                                    onClick={() => scrollTo(key)}
                                    className="px-4 py-3 text-left text-sm font-medium text-slate-600 dark:text-slate-400 
                             hover:text-accent hover:bg-accent/5 rounded-lg transition-colors"
                                >
                                    {t.nav[key]}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

function ThemeToggle() {
    const [dark, setDark] = useState(() => {
        if (typeof window !== "undefined") {
            return document.documentElement.classList.contains("dark");
        }
        return false;
    });

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400
                 hover:text-accent hover:bg-accent/10 transition-all"
            aria-label="Toggle theme"
        >
            {dark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
            ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            )}
        </button>
    );
}
