// components/impact/UNRecognition.tsx
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Award } from "lucide-react";

export function UNRecognition() {
  const t = useTranslations("Impact.UNRecognition");

  return (
    <section className="md:py-20 py-10 px-4">
      <div className="container mx-auto max-w-6xl px-2 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-200/60">{t("description")}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="/certificate.png"
              alt={t("imageAlt")}
              width={500}
              height={600}
              className="rounded-2xl shadow-2xl mx-auto"
            />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
              <Award className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-semibold">
              {t("label")}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">
              {t("titleHighlight")}
              <span className="block text-yellow-600">{t("titleHighlightSpan")}</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-200/80 leading-relaxed">{t("descriptionDetail")}</p>
            <div className="bg-yellow-50 dark:bg-yellow-700/30 p-6 rounded-xl border-l-4 border-yellow-500">
              <p className="text-lg font-medium italic">{t("quote")}</p>
              <p className="text-gray-600 dark:text-gray-100/80 mt-2">{t("quoteSource")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}