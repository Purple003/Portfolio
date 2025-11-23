import { Outlet, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground antialiased">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <NavLink 
            to="/" 
            className="font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </NavLink>
          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? "text-purple-600 dark:text-purple-400" 
                    : "text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                }`
              }
            >
              Projets
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? "text-purple-600 dark:text-purple-400" 
                    : "text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                }`
              }
            >
              Expérience
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                `text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? "text-purple-600 dark:text-purple-400" 
                    : "text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                }`
              }
            >
              Formations
            </NavLink>
            <NavLink
              to="/certifications"
              className={({ isActive }) =>
                `text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? "text-purple-600 dark:text-purple-400" 
                    : "text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                }`
              }
            >
              Certifications
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? "text-purple-600 dark:text-purple-400" 
                    : "text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                }`
              }
            >
              Contact
            </NavLink>
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-12">
        <Outlet />
      </main>
      <footer className="border-t border-border/50 mt-20 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

