import { AnimatedSection, AnimatedCard } from "./AnimatedSection";
import { FlaskConical, Search, ArrowRightLeft, RefreshCw, Server, BarChart3 } from "lucide-react";
import wazuhDashboard from "@/assets/wazuh-dashboard.png";

const wazuhCards = [
  { icon: FlaskConical, title: "Déploiement Lab", text: "Mise en place d'un environnement de test complet avant déploiement en production pour valider la configuration et les règles de détection.", color: "text-cyber-purple" },
  { icon: Search, title: "Analyse & Détection", text: "Configuration de règles de détection personnalisées pour identifier les comportements suspects et les incidents de sécurité.", color: "text-primary" },
  { icon: ArrowRightLeft, title: "Migration Production", text: "Planification de la migration vers l'environnement de production avec intégration progressive des sources de logs critiques.", color: "text-cyber-amber" },
];

const centreonCards = [
  { icon: RefreshCw, title: "Réalignement Infrastructure", text: "Adaptation de la supervision à la nouvelle architecture segmentée.", color: "text-cyber-teal" },
  { icon: Server, title: "Mise à Jour Hosts", text: "Actualisation de l'inventaire des équipements surveillés.", color: "text-cyber-blue" },
  { icon: BarChart3, title: "Services Critiques", text: "Identification et monitoring des services essentiels au business. Configuration adaptée à la nouvelle segmentation réseau.", color: "text-cyber-purple" },
];

export const SIEMSection = () => (
  <AnimatedSection id="siem" className="py-24 relative">
    <div className="container mx-auto px-8 max-w-5xl">
      {/* Wazuh */}
      <div className="mb-16">
        <div className="mb-10">
          <span className="font-mono text-cyber-purple text-xs tracking-widest uppercase">05 //</span>
          <h2 className="text-3xl font-bold text-foreground mt-2">Déploiement SIEM (Wazuh)</h2>
          <p className="text-muted-foreground mt-2">Solution de détection et d'analyse des événements de sécurité</p>
        </div>

        {/* Architecture Wazuh terminal */}
        <AnimatedCard className="terminal-block mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-destructive/70" />
            <div className="w-3 h-3 rounded-full bg-warning/70" />
            <div className="w-3 h-3 rounded-full bg-cyber-green/70" />
            <span className="text-xs text-muted-foreground ml-2 font-mono">wazuh-architecture</span>
          </div>
          <pre className="text-xs text-cyber-green/80 leading-relaxed">
{`┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│  Wazuh Manager   │──▶│     Indexer      │──▶│    Dashboard     │
│  Orchestration   │   │ Stockage des logs│   │  Visualisation   │
└──────────────────┘   └──────────────────┘   └──────────────────┘
         ▲
         │ Agents
    ┌────┴────┐
    │ Servers │ Endpoints │ Network │
    └─────────┘`}
          </pre>
        </AnimatedCard>

        {/* Wazuh Dashboard Screenshot */}
        <AnimatedCard delay={0.1} className="glass-card p-4 mb-6 border-cyber-purple/30 border">
          <h3 className="text-sm font-mono text-cyber-purple mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-purple animate-pulse-glow" />
            Dashboard Wazuh – Détection de Vulnérabilités
          </h3>
          <img src={wazuhDashboard} alt="Dashboard Wazuh - Vulnerability Detection" className="w-full rounded-lg border border-border/50" />
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {wazuhCards.map((c, i) => (
            <AnimatedCard key={c.title} delay={i * 0.1} className="glass-card-hover p-6">
              <c.icon className={`w-6 h-6 ${c.color} mb-3`} />
              <h3 className="font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.text}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Centreon */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Supervision: Centreon</h2>
          <p className="text-muted-foreground mt-2">Modernisation de la plateforme de supervision</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {centreonCards.map((c, i) => (
            <AnimatedCard key={c.title} delay={i * 0.1} className="glass-card-hover p-6">
              <c.icon className={`w-6 h-6 ${c.color} mb-3`} />
              <h3 className="font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.text}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
);
