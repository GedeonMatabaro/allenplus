// components/goals/CallToAction.tsx
"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export function CallToAction() {
  const t = useTranslations("Goals.CallToAction");

  return (
    <section className="relative md:py-32 py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/BuildFuture.webp"
          alt={t("imageAlt")}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-cyan-900/80"></div>
      </div>
      <div className="relative z-10 container mx-auto max-w-4xl md:text-center text-white px-2 md:p4-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">{t("title")}</h2>
        <p className="text-xl md:text-2xl mb-8 text-cyan-100">{t("description")}</p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Zap className="h-8 w-8 text-yellow-400" />
            <p className="text-lg font-semibold">{t("ctaText")}</p>
            <Zap className="h-8 w-8 text-yellow-400" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4"
            >
              <Link href="/contact">
                {t("partnerButton")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-cyan-800 text-lg px-8 py-4"
            >
              <Link href="/partners">{t("partnersButton")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}