// components/partners/CallToPartnership.tsx
"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function CallToPartnership() {
  const t = useTranslations("Partners.CallToPartnership");

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/strategicpartnerships.png" // Fixed missing image
          alt={t("imageAlt")}
          fill
          className="object-cover"
          onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
        />
        <div className="absolute inset-0 bg-green-900/80"></div>
      </div>
      <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">{t("title")}</h2>
        <p className="text-xl md:text-2xl mb-8 text-green-100">{t("description")}</p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <p className="text-lg mb-6">{t("ctaDescription")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4"
            >
              <Link href="/contact">{t("ctaButton1")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-4"
            >
              <Link href="/programs">{t("ctaButton2")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}