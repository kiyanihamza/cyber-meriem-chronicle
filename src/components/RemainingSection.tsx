import { AnimatedSection, AnimatedCard } from "./AnimatedSection";
import { Flame, Activity, MonitorDot, Award, Cog } from "lucide-react";

const items = [
  { icon: Flame, title: "Règles Pare-feu", text: "Affinage des règles de filtrage pour optimiser sécurité et performance" },
  { icon: Activity, title: "SIEM Production", text: "Finalisation du déploiement Wazuh en environnement de production" },
  { icon: MonitorDot, title: "Centreon Final", text: "Achèvement de l'alignement Centreon avec la nouvelle infrastructure" },
  { icon: Award, title: "Support Audit ISO", text: "Accompagnement lors de l'audit de certification ISO 27001" },
  { icon: Cog, title: "Automatisation Sécurité", text: "Mise en place de scripts d'automatisation pour les tâches récurrentes" },
];

export const RemainingSection = () => (
  <AnimatedSection id="remaining" className="py-24">
    <div className="container mx-auto px-8 max-w-5xl">
      <div className="mb-12">
        <span className="font-mono text-primary text-xs tracking-widest uppercase">07 //</span>
        <h2 className="text-3xl font-bold text-foreground mt-2">Travaux Restants & Améliorations</h2>
        <p className="text-muted-foreground mt-2">Prochaines étapes pour finaliser les projets</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <AnimatedCard key={item.title} delay={i * 0.08} className="glass-card-hover p-5">
            <item.icon className="w-5 h-5 text-primary mb-3" />
            <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
            <p className="text-xs text-muted-foreground">{item.text}</p>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
