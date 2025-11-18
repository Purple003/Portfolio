import { Outlet, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 border-b backdrop-blur bg-background/80 z-10">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <NavLink to="/" className="font-bold text-lg">
            MonPortfolio
          </NavLink>
          <div className="flex items-center gap-4">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "underline font-medium" : "hover:underline"
              }
            >
              Projets
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? "underline font-medium" : "hover:underline"
              }
            >
              Expérience
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                isActive ? "underline font-medium" : "hover:underline"
              }
            >
              Formations
            </NavLink>
            <NavLink
              to="/certifications"
              className={({ isActive }) =>
                isActive ? "underline font-medium" : "hover:underline"
              }
            >
              Certifications
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "underline font-medium" : "hover:underline"
              }
            >
              Contact
            </NavLink>
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground mt-12">
        © {new Date().getFullYear()} • Aya Arroche
      </footer>
    </div>
  );
}

