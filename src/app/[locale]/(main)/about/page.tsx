
// app/about/page.tsx
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { MissionSection } from "@/components/about/MissionSection";
import { VisionSection } from "@/components/about/VisionSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { UniqueSection } from "@/components/about/UniqueSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHeroSection />
      <MissionSection />
      <VisionSection />
      <ValuesSection />
      <UniqueSection />
    </div>
  );
}