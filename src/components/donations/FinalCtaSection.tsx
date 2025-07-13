// components/donations/FinalCtaSection.tsx
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function FinalCtaSection() {
  const t = useTranslations("DonationPage.FinalCta");

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=600&width=1600"
          alt={t("imageAlt")}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-green-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl md:text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">{t("title")}</h2>
        <p className="text-xl mb-8 text-green-100">{t("description")}</p>
        <Button
          size="lg"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-xl px-12 py-6"
          onClick={() => document.getElementById("payment-details")?.scrollIntoView({ behavior: "smooth" })}
        >
          <Heart className="h-6 w-6 mr-2" />
          {t("button")}
        </Button>
      </div>
    </section>
  );
}