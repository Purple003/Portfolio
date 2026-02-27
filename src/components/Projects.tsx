import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";
import { projects, type Project } from "../data/projects";
import { SectionTitle } from "./About";

type FilterKey = "all" | "web" | "mobile" | "ai-ml" | "3d-xr";

const filters: { key: FilterKey; tKey: string }[] = [
    { key: "all", tKey: "filterAll" },
    { key: "web", tKey: "filterWeb" },
    { key: "mobile", tKey: "filterMobile" },
    { key: "ai-ml", tKey: "filterAiMl" },
    { key: "3d-xr", tKey: "filter3dXr" },
];

export default function Projects() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

    const filtered =
        activeFilter === "all"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className="py-24 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionTitle title={t.projects.title} />

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2 mt-8 mb-10">
                        {filters.map(({ key, tKey }) => (
                            <button
                                key={key}
                                onClick={() => setActiveFilter(key)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeFilter === key
                                        ? "bg-accent text-white shadow-md shadow-accent/20"
                                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-accent/40 hover:text-accent"
                                    }`}
                            >
                                {t.projects[tKey as keyof typeof t.projects]}
                            </button>
                        ))}
                    </div>

                    {/* Project Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project) => (
                                <ProjectCard key={project.id} project={project} lang={lang} t={t} />
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ProjectCard({
    project,
    lang,
    t,
}: {
    project: Project;
    lang: "en" | "fr";
    t: (typeof translations)["en"];
}) {
    const [flipped, setFlipped] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="perspective-1000 h-72 cursor-pointer"
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`relative w-full h-full transition-transform duration-700 
                    [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
            >
                {/* FRONT */}
                <div
                    className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden
                     bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/50
                     shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-shadow duration-300"
                >
                    {/* Top colored bar */}
                    <div
                        className={`h-2 w-full ${project.category === "ai-ml"
                                ? "bg-gradient-to-r from-emerald-400 to-teal-500"
                                : project.category === "3d-xr"
                                    ? "bg-gradient-to-r from-violet-400 to-purple-500"
                                    : project.category === "mobile"
                                        ? "bg-gradient-to-r from-orange-400 to-red-500"
                                        : "bg-gradient-to-r from-accent to-blue-500"
                            }`}
                    />

                    <div className="p-5 flex flex-col h-[calc(100%-8px)]">
                        {/* Period + In Progress */}
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                                {project.period}
                            </span>
                            {project.inProgress && (
                                <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                                    {t.projects.inProgress}
                                </span>
                            )}
                        </div>

                        <h3 className="font-bold text-base text-slate-900 dark:text-white mb-3 leading-snug">
                            {project.title[lang]}
                        </h3>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                            {project.tags.slice(0, 5).map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[11px] px-2 py-1 rounded-md bg-accent/8 text-accent/80 dark:text-accent font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                            {project.tags.length > 5 && (
                                <span className="text-[11px] px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500">
                                    +{project.tags.length - 5}
                                </span>
                            )}
                        </div>

                        {/* Flip hint */}
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 text-right">
                            ↻ {lang === "en" ? "Click to flip" : "Cliquer pour retourner"}
                        </p>
                    </div>
                </div>

                {/* BACK */}
                <div
                    className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] 
                     rounded-2xl overflow-hidden p-5 flex flex-col
                     bg-gradient-to-br from-accent/5 via-white to-violet-50 
                     dark:from-accent/10 dark:via-slate-800 dark:to-violet-900/20
                     border border-accent/20 dark:border-accent/30"
                >
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 overflow-auto">
                        {project.summary[lang]}
                    </p>

                    <div className="flex gap-2 mt-4 pt-3 border-t border-accent/10">
                        {project.repo && (
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg
                           bg-slate-900 dark:bg-white text-white dark:text-slate-900 
                           hover:opacity-80 transition-opacity"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                {t.projects.viewCode}
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg
                           bg-accent text-white hover:opacity-80 transition-opacity"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                                {t.projects.viewDemo}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
