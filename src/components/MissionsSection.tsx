import { AnimatedSection, AnimatedCard } from "./AnimatedSection";
import { Shield, Network, Activity } from "lucide-react";

const missions = [
  {
    icon: Shield,
    title: "Gouvernance & ISO 27001",
    text: "Structuration du Système de Management de la Sécurité de l'Information (SMSI) selon la norme ISO 27001 pour établir un cadre de gouvernance robuste.",
  },
  {
    icon: Network,
    title: "Architecture & Segmentation Réseau",
    text: "Refonte complète de l'architecture réseau avec segmentation par VLAN et mise en place de règles de pare-feu pour isoler les flux critiques.",
  },
  {
    icon: Activity,
    title: "SIEM & Supervision",
    text: "Déploiement d'une solution SIEM (Wazuh) pour la détection des menaces et modernisation de la supervision (Centreon) alignée sur la nouvelle infrastructure.",
  },
];

export const MissionsSection = () => (
  <AnimatedSection id="missions" className="py-24 relative">
    <div className="absolute inset-0 section-grid-bg opacity-20" />
    <div className="container mx-auto px-8 max-w-5xl relative z-10">
      <div className="mb-12">
        <span className="font-mono text-primary text-xs tracking-widest uppercase">02 //</span>
        <h2 className="text-3xl font-bold text-foreground mt-2">Missions & Objectifs</h2>
        <p className="text-muted-foreground mt-2">Trois axes stratégiques pour renforcer la sécurité de l'infrastructure Peaks</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {missions.map((m, i) => (
          <AnimatedCard key={m.title} delay={i * 0.1} className="glass-card-hover p-6 border-t-2 border-t-primary/50">
            <m.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-3">{m.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
