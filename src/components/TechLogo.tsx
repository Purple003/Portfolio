import { motion } from "framer-motion";

const techLogos: Record<string, { name: string; color: string; icon: string }> = {
  React: {
    name: "React",
    color: "from-cyan-400 to-blue-500",
    icon: "⚛️"
  },
  Java: {
    name: "Java",
    color: "from-orange-400 to-red-500",
    icon: "☕"
  },
  Unity: {
    name: "Unity",
    color: "from-gray-400 to-gray-600",
    icon: "🎮"
  },
  Android: {
    name: "Android",
    color: "from-green-400 to-emerald-500",
    icon: "🤖"
  },
  MySQL: {
    name: "MySQL",
    color: "from-blue-400 to-cyan-500",
    icon: "🗄️"
  },
  AR: {
    name: "AR",
    color: "from-purple-400 to-pink-500",
    icon: "🥽"
  },
  VR: {
    name: "VR",
    color: "from-indigo-400 to-purple-500",
    icon: "🥽"
  }
};

export default function TechLogo({ tech, index }: { tech: string; index: number }) {
  const techData = techLogos[tech] || { name: tech, color: "from-gray-400 to-gray-600", icon: "💻" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="group relative"
    >
      <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${techData.color} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}>
        <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/20 transition-colors" />
        <div className="relative flex flex-col items-center gap-2">
          <span className="text-3xl">{techData.icon}</span>
          <span className="text-xs font-bold text-white drop-shadow-lg">{techData.name}</span>
        </div>
      </div>
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-br ${techData.color} rounded-2xl opacity-0 group-hover:opacity-50 blur-xl -z-10`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}

