// pages/goals.tsx
import { HeroSection } from "@/components/goals/HeroSection";
import { PlatformVision } from "@/components/goals/PlatformVision";
import { PlatformFeatures } from "@/components/goals/PlatformFeatures";
import { ImplementationRoadmap } from "@/components/goals/ImplementationRoadmap";
import { ProjectedImpact } from "@/components/goals/ProjectedImpact";
import { CallToAction } from "@/components/goals/CallToAction";
import { InnovationCommitment } from "@/components/goals/InnovationCommitment";

export default function FutureGoalsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PlatformVision />
      <PlatformFeatures />
      <ImplementationRoadmap />
      <ProjectedImpact />
      <CallToAction />
      <InnovationCommitment />
    </div>
  );
}