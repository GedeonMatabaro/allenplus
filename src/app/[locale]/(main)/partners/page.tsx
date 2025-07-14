// pages/partners.tsx (with PartnershipBenefits)
import { HeroSection } from "@/components/partners/HeroSection";
import { PartnershipPhilosophy } from "@/components/partners/PartnershipPhilosophy";
import { PartnerCategories } from "@/components/partners/PartnerCategories";
import { PartnerLogos } from "@/components/partners/PartnerLogos";
import { PartnershipImpact } from "@/components/partners/PartnershipImpact";
import { PartnershipBenefits } from "@/components/partners/PartnershipBenefits";
import { CallToPartnership } from "@/components/partners/CallToPartnership";

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PartnershipPhilosophy />
      <PartnerCategories />
      <PartnerLogos />
      <PartnershipImpact />
      <PartnershipBenefits />
      <CallToPartnership />
    </div>
  );
}