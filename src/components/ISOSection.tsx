import { AnimatedSection, AnimatedCard } from "./AnimatedSection";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, Map, GitBranch } from "lucide-react";

const phases = [
  { num: 0, title: "Cadrage", desc: "Définition du périmètre et des objectifs" },
  { num: 1, title: "Contexte", desc: "Analyse de l'organisation et des parties prenantes" },
  { num: 2, title: "Leadership", desc: "Engagement de la direction et politique de sécurité" },
  { num: 3, title: "Planification", desc: "Appréciation des risques et plan de traitement" },
  { num: 4, title: "Support", desc: "Ressources, compétences et communication" },
  { num: 5, title: "Fonctionnement", desc: "Mise en œuvre des mesures de sécurité" },
  { num: 6, title: "Évaluation", desc: "Surveillance et audits internes" },
  { num: 7, title: "Amélioration", desc: "Actions correctives et amélioration continue" },
];

const extras = [
  { icon: FileText, title: "Normalisation Documentaire", text: "Harmonisation des templates et processus documentaires pour assurer cohérence et traçabilité." },
  { icon: Map, title: "Mapping des Clauses", text: "Cartographie exhaustive des exigences ISO 27001 avec les processus existants de l'entreprise." },
  { icon: GitBranch, title: "Contrôle de Version", text: "Mise en place d'un système de gestion des versions pour tous les documents SMSI avec validation RSSI." },
];

export const ISOSection = () => (
  <AnimatedSection id="iso" className="py-24 relative">
    <div className="container mx-auto px-8 max-w-5xl">
      <div className="mb-12">
        <span className="font-mono text-primary text-xs tracking-widest uppercase">03 //</span>
        <h2 className="text-3xl font-bold text-foreground mt-2">SMSI & ISO 27001</h2>
        <p className="text-muted-foreground mt-2">Structuration progressive du système de management de la sécurité</p>
      </div>

      {/* Timeline */}
      <div className="relative mb-16">
        <div className="absolute left-[22px] top-0 bottom-0 w-px bg-border" />
        <div className="space-y-0">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              className="flex items-start gap-5 group relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="relative z-10 w-11 h-11 rounded-full bg-secondary border-2 border-primary/40 flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <span className="font-mono text-xs text-primary font-bold">{phase.num}</span>
              </div>
              <div className="glass-card-hover p-4 flex-1 mb-3">
                <h4 className="font-bold text-foreground text-sm">Phase {phase.num} – {phase.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{phase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Extra cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {extras.map((e, i) => (
          <AnimatedCard key={e.title} delay={i * 0.1} className="glass-card-hover p-6">
            <e.icon className="w-6 h-6 text-primary mb-3" />
            <h3 className="font-bold text-foreground mb-2">{e.title}</h3>
            <p className="text-sm text-muted-foreground">{e.text}</p>
          </AnimatedCard>
        ))}
      </div>
    </div>
  </AnimatedSection>
);
