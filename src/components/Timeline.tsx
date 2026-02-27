import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";
import { timeline } from "../data/timeline";
import { SectionTitle } from "./About";

export default function Timeline() {
    const { lang } = useLanguage();
    const t = translations[lang];

    return (
        <section id="experience" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionTitle title={t.experience.title} />

                    <div className="relative mt-12">
                        {/* Vertical line */}
                        <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent sm:-translate-x-px" />

                        <div className="space-y-10">
                            {timeline.map((entry, i) => {
                                const isLeft = i % 2 === 0;

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className={`relative flex items-start gap-6 sm:gap-0 ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                                            }`}
                                    >
                                        {/* Dot */}
                                        <div className="absolute left-5 sm:left-1/2 w-3 h-3 rounded-full bg-accent ring-4 ring-white dark:ring-slate-900 sm:-translate-x-1.5 translate-y-2 z-10" />

                                        {/* Spacer (hidden on mobile) */}
                                        <div className="hidden sm:block sm:w-1/2" />

                                        {/* Card */}
                                        <div
                                            className={`ml-12 sm:ml-0 sm:w-1/2 ${isLeft ? "sm:pr-10" : "sm:pl-10"
                                                }`}
                                        >
                                            <div
                                                className="p-5 rounded-2xl bg-white dark:bg-slate-800 
                                   border border-slate-200/60 dark:border-slate-700/50
                                   hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5
                                   transition-all duration-300"
                                            >
                                                {/* Type badge + period */}
                                                <div className="flex items-center justify-between gap-2 mb-3">
                                                    <span
                                                        className={`text-xs font-semibold px-2 py-0.5 rounded-md ${entry.type === "education"
                                                                ? "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400"
                                                                : "bg-accent/10 text-accent"
                                                            }`}
                                                    >
                                                        {entry.type === "education"
                                                            ? lang === "en"
                                                                ? "Education"
                                                                : "Formation"
                                                            : lang === "en"
                                                                ? "Experience"
                                                                : "Expérience"}
                                                    </span>
                                                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                                                        {entry.start} — {entry.end ?? t.experience.present}
                                                    </span>
                                                </div>

                                                <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                                                    {entry.title[lang]}
                                                </h3>
                                                <p className="text-sm text-accent font-medium mb-2">
                                                    {entry.organization}
                                                </p>

                                                {entry.summary && (
                                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                        {entry.summary[lang]}
                                                    </p>
                                                )}

                                                {entry.technologies && (
                                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                                        {entry.technologies.map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
