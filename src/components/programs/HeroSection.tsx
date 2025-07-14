// components/programs/HeroSection.tsx
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export function HeroSection() {
  const t = useTranslations("Programs.HeroSection");

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Commitment.jpg"
          alt={t("imageAlt")}
          fill
          className="object-cover object-[80%_20%]"
          priority
          onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mt-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
          {t("title")}
          <span className="block text-yellow-400">{t("titleHighlight")}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">{t("description")}</p>
      </div>
    </section>
  );
}