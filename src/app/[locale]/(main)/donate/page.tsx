// app/[locale]/donate/page.tsx
"use client";

import { HeroSection } from "@/components/donations/HeroSection";
import { PaymentDetails } from "@/components/donations/PaymentDetails";
import { ImpactSection } from "@/components/donations/ImpactSection";
import { SupportSection } from "@/components/donations/SupportSection";
import { FinalCtaSection } from "@/components/donations/FinalCtaSection";

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <section className="py-20 md:px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl px-2 md:px-4">
          <div className="lg:grid lg:grid-cols-2 gap-16">
            <PaymentDetails />
            <ImpactSection />
          </div>
        </div>
      </section>
      <SupportSection />
      <FinalCtaSection />
    </div>
  );
}