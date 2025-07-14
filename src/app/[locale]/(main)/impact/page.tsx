// pages/impact.tsx
import { HeroSection } from "@/components/impact/HeroSection";
import { ImpactStatistics } from "@/components/impact/ImpactStatistics";
import { GlobalAdvocacy } from "@/components/impact/GlobalAdvocacy";
import { UNRecognition } from "@/components/impact/UNRecognition";
import { CommunityEngagement } from "@/components/impact/CommunityEngagement";
import { FutureCommitment } from "@/components/impact/FutureCommitment";

export default function ImpactPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ImpactStatistics />
      <GlobalAdvocacy />
      <UNRecognition />
      <CommunityEngagement />
      <FutureCommitment />
    </div>
  );
}