// app/[locale]/contact/page.tsx
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactInfoSection } from "@/components/contact/ContactInfoSection";
import { ThankYouSection } from "@/components/contact/ThankYouSection";
import { ExpectSection } from "@/components/contact/ExpectSection";
import { JoinCommunitySection } from "@/components/contact/JoinCommunitySection";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHeroSection />
      <ContactInfoSection />
      <ThankYouSection />
      <ExpectSection />
      <JoinCommunitySection />
    </div>
  );
}