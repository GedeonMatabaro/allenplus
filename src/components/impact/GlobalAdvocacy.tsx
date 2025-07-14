// components/impact/GlobalAdvocacy.tsx
"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Target, Globe } from "lucide-react";

export function GlobalAdvocacy() {
  const t = useTranslations("Impact.GlobalAdvocacy");

  return (
    <section className="md:py-20 py-10 px-4 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="/Cop16.png"
              alt={t("imageAlt")}
              width={700}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute md:-top-6 -top-8 -right-6 bg-white md:p-4 p-2 rounded-xl shadow-lg border-l-4 border-blue-500">
              <Badge className="bg-blue-100 text-blue-800 text-sm font-semibold">{t("badge")}</Badge>
            </div>
            <div className="absolute md:-bottom-6 -bottom-10 md:-left-6 -left-8 bg-white md:p-6 p-2 rounded-xl shadow-2xl">
              <div className="md:text-2xl text-sm font-bold text-blue-600">{t("copTitle")}</div>
              <p className="text-gray-600 text-sm md:text-base font-medium">{t("copDescription")}</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("title")}
              <span className="text-blue-600 dark:text-blue-400">{` `+t("titleHighlight")}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{t("description")}</p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t("point1Title")}</h4>
                  <p className="text-gray-600 dark:text-gray-200/60">{t("point1Description")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t("point2Title")}</h4>
                  <p className="text-gray-600 dark:text-gray-200/60">{t("point2Description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}