import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";
import { skillCategories } from "../data/skills";
import { SectionTitle } from "./About";

export default function Skills() {
    const { lang } = useLanguage();
    const t = translations[lang];

    return (
        <section id="skills" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionTitle title={t.skills.title} />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
                        {skillCategories.map((cat, catIdx) => (
                            <motion.div
                                key={cat.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIdx * 0.08, duration: 0.5 }}
                                className="group p-5 rounded-2xl bg-white dark:bg-slate-800 
                           border border-slate-200/60 dark:border-slate-700/50
                           hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5
                           transition-all duration-300"
                            >
                                <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
                                    {t.skills.categories[cat.key as keyof typeof t.skills.categories]}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-xs px-2.5 py-1.5 rounded-lg 
                                 bg-slate-100 dark:bg-slate-700/60 
                                 text-slate-700 dark:text-slate-300
                                 group-hover:bg-accent/10 group-hover:text-accent
                                 transition-colors duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
