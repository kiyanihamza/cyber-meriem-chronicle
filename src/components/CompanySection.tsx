import { AnimatedSection, AnimatedCard } from "./AnimatedSection";
import { Building2, Lightbulb, Heart } from "lucide-react";
import orgChart from "@/assets/org-chart.png";

const cards = [
  {
    icon: Building2,
    title: "Notre Activité",
    text: "Peaks est un cabinet de conseil IT accompagnant les entreprises dans leur transformation digitale, l'innovation technologique et la sécurisation de leurs infrastructures.",
    color: "text-primary",
  },
  {
    icon: Lightbulb,
    title: "Expertise",
    items: ["Conseil en transformation digitale", "Cybersécurité & gouvernance", "Architecture & infrastructure", "Innovation & RSE"],
    color: "text-cyber-amber",
  },
  {
    icon: Heart,
    title: "Beyond the Codes",
    text: "Notre philosophie dépasse la simple expertise technique : nous accompagnons nos clients avec une vision globale, humaine et durable de la technologie.",
    color: "text-cyber-teal",
  },
];

export const CompanySection = () => (
  <AnimatedSection id="company" className="py-24 relative">
    <div className="container mx-auto px-8 max-w-5xl">
      <div className="mb-12">
        <span className="font-mono text-cyber-amber text-xs tracking-widest uppercase">01 //</span>
        <h2 className="text-3xl font-bold text-foreground mt-2">À Propos de Peaks</h2>
        <p className="text-muted-foreground mt-2">Cabinet de conseil IT spécialisé en transformation digitale et innovation</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card, i) => (
          <AnimatedCard key={card.title} delay={i * 0.1} className="glass-card-hover p-6">
            <card.icon className={`w-8 h-8 ${card.color} mb-4`} />
            <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
            {card.text && <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>}
            {card.items && (
              <ul className="space-y-2 mt-2">
                {card.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className={`${card.color} mt-0.5`}>→</span> {item}
                  </li>
                ))}
              </ul>
            )}
          </AnimatedCard>
        ))}
      </div>

      {/* Org Chart */}
      <AnimatedCard delay={0.3} className="mt-8 glass-card p-6">
        <h3 className="text-sm font-mono text-muted-foreground mb-4 text-center">// ORGANIGRAMME DE L'ÉQUIPE</h3>
        <div className="flex justify-center">
          <img src={orgChart} alt="Organigramme de l'équipe Peaks" className="max-w-md w-full rounded-lg" />
        </div>
      </AnimatedCard>
    </div>
  </AnimatedSection>
);
