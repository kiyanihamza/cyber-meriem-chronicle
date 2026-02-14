import { CyberSidebar } from "@/components/CyberSidebar";
import { HeroSection } from "@/components/HeroSection";
import { CompanySection } from "@/components/CompanySection";
import { MissionsSection } from "@/components/MissionsSection";
import { ISOSection } from "@/components/ISOSection";
import { NetworkSection } from "@/components/NetworkSection";
import { SIEMSection } from "@/components/SIEMSection";
import { ChallengesSection } from "@/components/ChallengesSection";
import { RemainingSection } from "@/components/RemainingSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CyberSidebar />
      <main className="ml-16 md:ml-[220px] transition-all duration-300">
        <HeroSection />
        <CompanySection />
        <MissionsSection />
        <ISOSection />
        <NetworkSection />
        <SIEMSection />
        <ChallengesSection />
        <RemainingSection />
        <SkillsSection />

        {/* Footer */}
        <footer className="py-8 border-t border-border text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <Shield className="w-4 h-4 text-primary" />
            <span>© 2025 Peaks – Soutenance d'Alternance en Cybersécurité & Infrastructure IT</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
