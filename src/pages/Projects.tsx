import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Premium Background Gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30 dark:from-gray-950 dark:via-purple-950/10 dark:to-blue-950/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-200/20 via-transparent to-transparent dark:from-purple-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent dark:from-blue-900/10" />
      </div>

      <section className="relative space-y-16 py-12">
        <Helmet>
          <title>Projets — Portfolio</title>
          <meta name="description" content="Une sélection de projets de développement professionnels." />
        </Helmet>

        {/* Premium Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block"
          >
            <span className="text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Projets
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto"
          >
            Une sélection de réalisations professionnelles mettant en valeur l'excellence technique et la créativité
          </motion.p>
        </motion.div>

        {/* Premium Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.1 * index, 
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Premium Card with Gradient Border */}
              <div className="relative h-full rounded-3xl overflow-hidden">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="absolute inset-[2px] rounded-3xl bg-white dark:bg-gray-900" />
                
                {/* Card Content */}
                <div className="relative h-full p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-3xl transition-all duration-500 group-hover:border-purple-300/50 dark:group-hover:border-purple-700/50">
                  {/* Period Badge */}
                  {p.period && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index + 0.2 }}
                      className="inline-flex items-center mb-4"
                    >
                      <span className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50">
                        {p.period}
                      </span>
                    </motion.div>
                  )}

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index + 0.3 }}
                    className="text-2xl font-bold mb-4 leading-tight group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
                  >
                    {p.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index + 0.4 }}
                    className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-4 font-light"
                  >
                    {p.summary}
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.5 }}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm transition-all duration-300 group-hover:border-purple-300/50 dark:group-hover:border-purple-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </motion.div>

                  {/* Action Links */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index + 0.6 }}
                    className="flex gap-4 pt-4 border-t border-gray-200/50 dark:border-gray-800/50"
                  >
                    {p.link && (
                      <a
                        className="group/link inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300"
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Démo</span>
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {p.repo && (
                      <a
                        className="group/link inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300"
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Code</span>
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </motion.div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/0 via-pink-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:via-pink-600/5 group-hover:to-blue-600/5 transition-all duration-500 pointer-events-none" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

