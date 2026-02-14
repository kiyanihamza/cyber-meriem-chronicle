import { AnimatedSection, AnimatedCard } from "./AnimatedSection";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

const radarData = [
  { skill: "ISO 27001", value: 85 },
  { skill: "Réseau", value: 90 },
  { skill: "SIEM", value: 80 },
  { skill: "Pare-feu", value: 75 },
  { skill: "Supervision", value: 85 },
  { skill: "Documentation", value: 90 },
  { skill: "Gestion Projet", value: 80 },
];

const categories = [
  {
    title: "Compétences Techniques",
    color: "text-primary",
    items: [
      "Gouvernance ISO 27001 & SMSI",
      "Architecture réseau & segmentation VLAN",
      "Configuration pare-feu & politiques de sécurité",
      "Déploiement SIEM (Wazuh)",
      "Supervision infrastructure (Centreon)",
      "Analyse de logs & détection d'incidents",
      "Documentation technique & procédures",
    ],
  },
  {
    title: "Compétences Organisationnelles",
    color: "text-cyber-blue",
    items: [
      "Gestion de projet en environnement Agile",
      "Communication avec parties prenantes",
      "Priorisation et planification des tâches",
      "Travail en équipe multidisciplinaire",
      "Autonomie et prise d'initiative",
      "Résolution de problèmes complexes",
      "Adaptation aux contraintes terrain",
    ],
  },
  {
    title: "Impact sur l'Infrastructure",
    color: "text-cyber-green",
    items: [
      "Amélioration significative de la posture sécurité",
      "Réduction des risques cyber",
      "Conformité réglementaire renforcée",
      "Visibilité accrue sur les événements",
      "Infrastructure segmentée et contrôlée",
      "Base solide pour certification ISO 27001",
      "Modernisation des outils de supervision",
    ],
  },
];

export const SkillsSection = () => (
  <AnimatedSection id="skills" className="py-24 relative">
    <div className="absolute inset-0 section-grid-bg opacity-20" />
    <div className="container mx-auto px-8 max-w-5xl relative z-10">
      <div className="mb-12">
        <span className="font-mono text-primary text-xs tracking-widest uppercase">08 //</span>
        <h2 className="text-3xl font-bold text-foreground mt-2">Développement des Compétences</h2>
        <p className="text-muted-foreground mt-2">Acquisition de compétences techniques et organisationnelles</p>
      </div>

      {/* Radar Chart */}
      <AnimatedCard className="glass-card p-6 mb-8">
        <h3 className="text-sm font-mono text-muted-foreground mb-4 text-center">// RADAR DE COMPÉTENCES</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="75%">
              <PolarGrid stroke="hsl(220, 15%, 18%)" />
              <PolarAngleAxis
                dataKey="skill"
                tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}
              />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Compétences"
                dataKey="value"
                stroke="hsl(330, 100%, 45%)"
                fill="hsl(330, 100%, 45%)"
                fillOpacity={0.15}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </AnimatedCard>

      {/* Skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((cat, i) => (
          <AnimatedCard key={cat.title} delay={i * 0.1} className="glass-card-hover p-6">
            <h3 className={`font-bold mb-4 ${cat.color}`}>{cat.title}</h3>
            <ul className="space-y-2.5">
              {cat.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2 pb-2.5 border-b border-border last:border-0 last:pb-0">
                  <span className={cat.color + " text-xs mt-0.5"}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
