// components/programs/CallToAction.tsx
"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  const t = useTranslations("Programs.CallToAction");

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Commitment.jpg"
          alt={t("imageAlt")}
          fill
          className="object-cover"
          onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
        />
        <div className="absolute inset-0 bg-green-900/80"></div>
      </div>
      <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">{t("title")}</h2>
        <p className="text-xl md:text-2xl mb-12 text-green-100">{t("description")}</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4"
          >
            <Link href="/contact">
              {t("ctaButton1")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-4"
          >
            <Link href="/impact">{t("ctaButton2")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}