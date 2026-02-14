import { AnimatedSection, AnimatedCard } from "./AnimatedSection";
import { AlertTriangle, ShieldCheck, Wifi, Server, Users, Globe, Lock } from "lucide-react";

const before = [
  "Absence de segmentation réseau",
  "Pas de structure pare-feu définie",
  "Flux non contrôlés entre zones",
  "Risques de mouvements latéraux",
];

const vlans = [
  { name: "VLAN Users", desc: "Postes de travail", icon: Users },
  { name: "VLAN Servers", desc: "Serveurs critiques", icon: Server },
  { name: "VLAN Admin", desc: "Administration IT", icon: Lock },
  { name: "VLAN VPN", desc: "Accès distants", icon: Wifi },
  { name: "VLAN Guest", desc: "Invités isolés", icon: Globe },
];

export const NetworkSection = () => (
  <AnimatedSection id="network" className="py-24 relative">
    <div className="absolute inset-0 section-grid-bg opacity-20" />
    <div className="container mx-auto px-8 max-w-5xl relative z-10">
      <div className="mb-12">
        <span className="font-mono text-cyber-blue text-xs tracking-widest uppercase">04 //</span>
        <h2 className="text-3xl font-bold text-foreground mt-2">Architecture Réseau & Sécurité</h2>
        <p className="text-muted-foreground mt-2">Transformation d'une infrastructure non segmentée vers une architecture sécurisée</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Before */}
        <AnimatedCard className="glass-card p-6 border-destructive/30 border">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <h3 className="font-bold text-destructive">Situation Initiale</h3>
          </div>
          <ul className="space-y-3">
            {before.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="text-destructive/70 mt-0.5">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </AnimatedCard>

        {/* After */}
        <AnimatedCard delay={0.15} className="glass-card p-6 border-cyber-green/30 border">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-cyber-green" />
            <h3 className="font-bold text-cyber-green">Architecture Cible</h3>
          </div>
          <ul className="space-y-3">
            {vlans.map(({ name, desc, icon: Icon }) => (
              <li key={name} className="flex items-center gap-3 text-sm text-muted-foreground">
                <Icon className="w-4 h-4 text-cyber-green/70 flex-shrink-0" />
                <span><span className="text-foreground font-medium">{name}</span> – {desc}</span>
              </li>
            ))}
          </ul>
        </AnimatedCard>
      </div>

      {/* Network note */}
      <AnimatedCard delay={0.2} className="terminal-block">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-destructive/70" />
          <div className="w-3 h-3 rounded-full bg-warning/70" />
          <div className="w-3 h-3 rounded-full bg-cyber-green/70" />
          <span className="text-xs text-muted-foreground ml-2 font-mono">network-topology.sh</span>
        </div>
        <pre className="text-xs text-cyber-green/80 leading-relaxed">
{`$ show vlan summary
──────────────────────────────────────
VLAN 10  │ Users      │ 10.0/24    │ Postes de travail
VLAN 12  │ TOIP/VOIP  │ 12.0/24    │ Téléphonie
VLAN 15  │ SRV_DEV    │ 15.0/24    │ Développement
VLAN 16  │ SRV_INFRA  │ 16.0/24    │ Infrastructure
VLAN 17  │ SRV_PROD   │ 17.0/24    │ Production
VLAN 20  │ Main LAN   │ 19.0/24    │ LAN principal
VLAN 21  │ Guest      │ 21.0/24    │ Invités
VLAN 02  │ VPN        │ 2.0/24     │ Accès distants
──────────────────────────────────────
$ Segmentation par VLAN avec contrôle des flux inter-zones via pare-feu centralisé`}
        </pre>
      </AnimatedCard>
    </div>
  </AnimatedSection>
);
