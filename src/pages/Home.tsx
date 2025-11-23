import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import TechLogo from "@/components/TechLogo";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-purple-50/40 dark:from-gray-950 dark:via-indigo-950/30 dark:to-purple-950/20" />
        
        {/* Sophisticated Radial Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(139,92,246,0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_rgba(139,92,246,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(236,72,153,0.12),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,_rgba(236,72,153,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.05),transparent_70%)]" />
        
        {/* Premium Animated Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
      </div>

      <section className="relative min-h-screen flex items-center py-20 px-4">
        <Helmet>
          <title>Portfolio — Accueil</title>
          <meta
            name="description"
            content="Portfolio : IA, SIG, DevSecOps, Android."
          />
        </Helmet>
        
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-purple-600/90 dark:text-purple-400/90 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-50/80 via-pink-50/80 to-blue-50/80 dark:from-purple-950/40 dark:via-pink-950/40 dark:to-blue-950/40 backdrop-blur-md border border-purple-200/60 dark:border-purple-800/60 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
                  Développeuse & Ingénieure en Éducation
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] tracking-tight"
              >
                <span className="block relative">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_8s_ease_infinite]">
                    MonPortfolio
                  </span>
                  {/* Subtle text shadow for depth */}
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 via-blue-600/20 to-indigo-600/20 bg-clip-text text-transparent blur-xl -z-10">
                    MonPortfolio
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-xl md:text-2xl lg:text-3xl text-gray-800 dark:text-gray-200 font-light leading-relaxed tracking-wide"
              >
                {profile.role}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-light tracking-wide"
              >
                {profile.about}
              </motion.p>

              {/* Premium Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="space-y-5 pt-2"
              >
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] letter-spacing-wider">
                  Technologies Maîtrisées
                </h3>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-5">
                  {profile.skills.map((skill, index) => (
                    <TechLogo key={skill} tech={skill} index={index} />
                  ))}
                </div>
              </motion.div>

              {/* Premium CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="flex flex-wrap gap-5 pt-6"
              >
                <Link
                  to="/projects"
                  className="group relative px-10 py-4.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3 text-base tracking-wide">
                    Voir les projets
                    <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-pink-600 to-purple-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
                <Link
                  to="/contact"
                  className="group relative px-10 py-4.5 rounded-2xl border-2 border-purple-600/60 dark:border-purple-400/60 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-purple-600 dark:text-purple-400 font-semibold hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30 transition-all duration-500 hover:scale-[1.02] hover:border-purple-600 dark:hover:border-purple-400 hover:shadow-lg"
                >
                  <span className="relative z-10 text-base tracking-wide">Me contacter</span>
                </Link>
              </motion.div>

              {/* Premium Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="flex items-center gap-8 pt-8"
              >
                {profile.socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="group flex items-center gap-2.5 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 font-medium text-sm tracking-wide"
                  >
                    <span className="relative">
                      {social.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
                    </span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Premium Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-full max-w-[520px]">
                {/* Premium Glowing Background Layers */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.25, 0.35, 0.25],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-[3.5rem] blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1.05, 1, 1.05],
                    opacity: [0.15, 0.25, 0.15],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-[3.5rem] blur-3xl"
                />
                
                {/* Premium Image Container */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-[3px] border-white/90 dark:border-gray-800/90 backdrop-blur-sm"
                >
                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-pink-600/5 z-10" />
                  
                  {/* Image */}
                  <img
                    src={profile.photo || "/photo.jpg"}
                    alt={`Photo de profil de ${profile.name}`}
                    className="w-full h-auto object-cover relative z-0"
                    width={520}
                    height={520}
                  />
                  
                  {/* Premium Border Glow */}
                  <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-r from-purple-600/0 via-pink-600/0 to-blue-600/0 hover:from-purple-600/20 hover:via-pink-600/20 hover:to-blue-600/20 transition-all duration-500 pointer-events-none z-20" />
                </motion.div>

                {/* Premium Floating Badges */}
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -right-8 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white px-5 py-2.5 rounded-full shadow-2xl font-bold text-sm backdrop-blur-md border border-white/20"
                >
                  Master TEE
                </motion.div>
                <motion.div
                  animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-8 -left-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-full shadow-2xl font-bold text-sm backdrop-blur-md border border-white/20"
                >
                  Licence Info
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

