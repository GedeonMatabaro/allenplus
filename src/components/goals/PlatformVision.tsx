// components/goals/PlatformVision.tsx
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Network, Smartphone, Globe } from "lucide-react";

export function PlatformVision() {
  const t = useTranslations("Goals.PlatformVision");

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl px-3 md:p-4">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="/Vision.webp"
              alt={t("imageAlt")}
              width={700}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Network className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 md:w-20 md:h-20 h-14 w-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <Smartphone className="md:h-10 md:w-10 text-white" />
            </div>
            <div className="absolute top-1/2 -left-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <Globe className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full font-semibold mt-2 lg:mt-0">
              {t("label")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("title")}
              <span className="text-cyan-600 dark:text-cyan-200">{t("titleHighlight")}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{t("description")}</p>
            <div className="bg-cyan-50 p-6 rounded-xl border-l-4 border-cyan-500">
              <h4 className="font-bold text-gray-800 mb-2">{t("impactTitle")}</h4>
              <p className="text-gray-700">{t("impactDescription")}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-cyan-600">{t("reachValue")}</div>
              <div>
                <p className="font-semibold">{t("reachTitle")}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t("reachDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}