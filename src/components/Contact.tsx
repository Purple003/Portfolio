import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";
import { profile } from "../data/profile";
import { SectionTitle } from "./About";

export default function Contact() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);
        const name = data.get("name") as string;
        const email = data.get("email") as string;
        const message = data.get("message") as string;
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
        window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`);
        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section id="contact" className="py-24 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionTitle title={t.contact.title} />
                    <p className="text-slate-600 dark:text-slate-400 mt-2 mb-10 max-w-xl">
                        {t.contact.subtitle}
                    </p>
                    <div className="grid lg:grid-cols-5 gap-10">
                        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input type="text" name="name" required placeholder={t.contact.name}
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                                <input type="email" name="email" required placeholder={t.contact.email}
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                            </div>
                            <textarea name="message" required rows={5} placeholder={t.contact.message}
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none" />
                            <button type="submit"
                                className="px-6 py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5">
                                {t.contact.send}
                            </button>
                            {sent && (
                                <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
                                    className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                                    ✓ {t.contact.success}
                                </motion.p>
                            )}
                        </form>
                        <div className="lg:col-span-2 flex flex-col gap-4">
                            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                {t.contact.socials}
                            </p>
                            {profile.socials.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/50 hover:border-accent/30 hover:shadow-md transition-all duration-300 group">
                                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                        <SocialIcon icon={s.icon} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-900 dark:text-white text-sm">{s.label}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[180px]">
                                            {s.href.replace(/^https?:\/\//, "").replace(/^mailto:/, "")}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialIcon({ icon }: { icon: string }) {
    if (icon === "github") return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>;
    if (icon === "linkedin") return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
    if (icon === "email") return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
    return null;
}
