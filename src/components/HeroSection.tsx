import { motion } from "framer-motion";
import { Shield, User, GraduationCap, Briefcase } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 section-grid-bg opacity-30" />
      <div className="absolute top-[-300px] right-[-200px] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] rounded-full bg-cyber-blue/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-8 py-20 relative z-10 max-w-5xl">
        {/* Logos */}
        <motion.div
          className="flex items-center gap-6 mb-12 justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card px-5 py-3">
            <span className="font-bold text-primary text-lg">PEAKS</span>
            <span className="block text-[10px] text-muted-foreground font-mono">Beyond the codes</span>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="glass-card px-5 py-3">
            <span className="font-bold text-cyber-blue text-lg">POLYTECH</span>
            <span className="block text-[10px] text-muted-foreground font-mono">NANCY</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <span className="text-primary font-mono text-xs tracking-[3px] uppercase">Soutenance d'alternance</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight mb-4">
            Cybersécurité &<br />
            <span className="text-primary cyber-text-glow">Infrastructure Réseau</span>
          </h1>
        </motion.div>

        {/* Info cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-card-hover p-5 text-center">
            <User className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="text-[10px] font-mono text-primary uppercase tracking-widest mb-1">Réalisé par</p>
            <p className="font-semibold text-foreground">ALIB Meriem</p>
            <p className="text-xs text-muted-foreground">IA2R – Contrat Pro</p>
          </div>
          <div className="glass-card-hover p-5 text-center">
            <GraduationCap className="w-5 h-5 text-cyber-blue mx-auto mb-2" />
            <p className="text-[10px] font-mono text-cyber-blue uppercase tracking-widest mb-1">Tuteur Académique</p>
            <p className="font-semibold text-foreground">Dobrina BOLTCHEVA</p>
          </div>
          <div className="glass-card-hover p-5 text-center">
            <Briefcase className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="text-[10px] font-mono text-primary uppercase tracking-widest mb-1">Tuteur Entreprise</p>
            <p className="font-semibold text-foreground">Leo CASAGRANDE</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
