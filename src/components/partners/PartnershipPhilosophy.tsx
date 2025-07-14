// components/partners/PartnershipPhilosophy.tsx
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Handshake } from "lucide-react";

export function PartnershipPhilosophy() {
  const t = useTranslations("Partners.PartnershipPhilosophy");

  return (
    <section className="md:py-20 px-4 py-10">
      <div className="container mx-auto max-w-7xl px-2 md:px-4">
        <div className="grid lg:grid-cols-2 md:gap-16 gap-10 items-center">
          <div className="relative">
            <Image
              src="/P-colaboration.avif"
              alt={t("imageAlt")}
              width={700}
              height={600}
              className="rounded-2xl shadow-2xl"
              onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
            />
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <Handshake className="h-10 w-10 text-green-600" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-100 rounded-2xl opacity-20"></div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("title")}
              <span className="text-green-600 dark:text-green-300">{t("titleHighlight")}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{t("description")}</p>
            <div className="bg-green-50 dark:bg-green-700/30 p-6 rounded-xl border-l-4 border-green-500">
              <p className="text-lg text-gray-700 dark:text-gray-200/80 font-medium italic">{t("quote")}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{t("quoteSource")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}