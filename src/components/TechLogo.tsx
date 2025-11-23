import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const techData = techLogos[tech] || { name: tech, color: "from-gray-400 to-gray-600", icon: "💻" };

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.15, rotate: 8, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="group relative"
      onClick={handleClick}
    >
      <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${techData.color} shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden`}>
        {/* Animated background shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        
        <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/25 transition-all duration-500" />
        <div className="relative flex flex-col items-center gap-2 z-10">
          <motion.span
            className="text-3xl"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {techData.icon}
          </motion.span>
          <span className="text-xs font-bold text-white drop-shadow-lg">{techData.name}</span>
        </div>
      </div>
      
      {/* Enhanced glow effect on hover */}
      <motion.div
        className={`absolute -inset-2 bg-gradient-to-br ${techData.color} rounded-2xl opacity-0 group-hover:opacity-60 blur-2xl -z-10`}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Pulse ring effect */}
      <motion.div
        className={`absolute -inset-1 rounded-2xl border-2 border-white/30 opacity-0 group-hover:opacity-100`}
        initial={{ scale: 1, opacity: 0 }}
        whileHover={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

