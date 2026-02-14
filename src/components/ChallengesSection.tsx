import { AnimatedSection, AnimatedCard } from "./AnimatedSection";
import { FileQuestion, Eye, MapPin } from "lucide-react";

const challenges = [
  { icon: FileQuestion, title: "Manque de Documentation", text: "Documentation existante insuffisante ou obsolète nécessitant un travail important de reconstruction et de mise à jour." },
  { icon: Eye, title: "Visibilité Infrastructure", text: "Faible visibilité sur l'infrastructure existante rendant difficile la planification des changements et des migrations." },
  { icon: MapPin, title: "Cartographie Nécessaire", text: "Besoin de créer une cartographie complète de l'infrastructure (réseau, serveurs, applications) avant toute modification." },
];

export const ChallengesSection = () => (
  <AnimatedSection id="challenges" className="py-24 relative">
    <div className="absolute inset-0 section-grid-bg opacity-20" />
    <div className="container mx-auto px-8 max-w-5xl relative z-10">
      <div className="mb-12">
        <span className="font-mono text-primary text-xs tracking-widest uppercase">06 //</span>
        <h2 className="text-3xl font-bold text-foreground mt-2">Défis Rencontrés</h2>
        <p className="text-muted-foreground mt-2">Obstacles surmontés durant la mission</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {challenges.map((c, i) => (
          <AnimatedCard key={c.title} delay={i * 0.1} className="glass-card-hover p-6 border-l-2 border-l-warning/50">
            <c.icon className="w-6 h-6 text-warning mb-3" />
            <h3 className="font-bold text-foreground mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.text}</p>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
