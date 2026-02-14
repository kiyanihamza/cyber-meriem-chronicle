import { useState, useEffect } from "react";
import { Shield, Building2, Target, Network, Activity, Award, ChevronLeft, ChevronRight, AlertTriangle, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "hero", label: "Accueil", icon: Shield },
  { id: "company", label: "Entreprise", icon: Building2 },
  { id: "missions", label: "Missions", icon: Target },
  { id: "iso", label: "ISO 27001", icon: Shield },
  { id: "network", label: "Architecture", icon: Network },
  { id: "siem", label: "SIEM", icon: Activity },
  { id: "challenges", label: "Défis", icon: AlertTriangle },
  { id: "remaining", label: "Travaux", icon: Wrench },
  { id: "skills", label: "Compétences", icon: Award },
];

export const CyberSidebar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed left-0 top-0 h-screen z-50 flex flex-col bg-sidebar border-r border-sidebar-border"
      animate={{ width: collapsed ? 64 : 220 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border flex items-center gap-3 min-h-[64px]">
        <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
          <Shield className="w-4 h-4 text-primary-foreground" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="overflow-hidden"
            >
              <span className="font-bold text-foreground text-sm whitespace-nowrap">PEAKS</span>
              <span className="block text-[10px] text-muted-foreground font-mono whitespace-nowrap">Beyond the codes</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Nav items */}
      <div className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm group ${
                isActive
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground border border-transparent"
              }`}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-primary" : ""}`} />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="whitespace-nowrap"
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      {/* Collapse button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="p-4 border-t border-sidebar-border text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>
    </motion.nav>
  );
};
