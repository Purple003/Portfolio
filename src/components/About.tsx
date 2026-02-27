import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

export default function About() {
    const { lang } = useLanguage();
    const t = translations[lang];

    return (
        <section id="about" className="py-24 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionTitle title={t.about.title} />

                    <div className="grid lg:grid-cols-5 gap-10 mt-10">
                        {/* Bio */}
                        <div className="lg:col-span-3">
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t.about.bio}
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="lg:col-span-2">
                            <div className="space-y-3">
                                {t.about.highlights.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.4 }}
                                        className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800 
                               border border-slate-200/60 dark:border-slate-700/50 
                               hover:border-accent/30 transition-colors"
                                    >
                                        <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export function SectionTitle({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-4 mb-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                {title}
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
        </div>
    );
}
