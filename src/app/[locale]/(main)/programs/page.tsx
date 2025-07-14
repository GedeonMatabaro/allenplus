// pages/programs.tsx
import { HeroSection } from "@/components/programs/HeroSection";
import { GreenYouthForum } from "@/components/programs/GreenYouthForum";
import { SolidarityPlus } from "@/components/programs/SolidarityPlus";
import { InnovationProgram } from "@/components/programs/InnovationProgram";
import { CallToAction } from "@/components/programs/CallToAction";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GreenYouthForum />
      <SolidarityPlus />
      <InnovationProgram />
      <CallToAction />
    </div>
  );
}