// components/goals/ImplementationRoadmap.tsx
"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import "./style.css"
const phases = [
  { image: "/platformDevelopment.jpg", color: "green" },
  { image: "/contentCreation.webp", color: "yellow" },
  { image: "/comunityIntegration.avif", color: "cyan" },
  { image: "/Scale&Partnership.webp", color: "violet" },
];

export function ImplementationRoadmap() {
  const t = useTranslations("Goals.ImplementationRoadmap");

  return (
    <section className="py-10 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl px-2 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t("description")}</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full [background-image:linear-gradient(to_bottom,#22c55e,#eab308_33%,#06b6d4_66%,#a855f7)] rounded-full hidden md:block"></div>
          <div className="md:space-y-16 space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
                  <div className="relative">
                    <div
                      className={`w-24 h-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full ${
                        index === 0 ? "animate-colorCycle" : ""
                      }`}
                      style={{ boxShadow: index === 0 ? "0 0 0 3px transparent" : "none" }}
                    ></div>
                    <div
                      className={`w-16 h-16 bg-${phase.color}-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white`}
                    >
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                </div>
                <div className={`md:w-5/12 md:${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="border dark:border-foreground/30 shadow-2xl">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={phase.image}
                        alt={t(`phases.${index}.imageAlt`)}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className={`inline-block px-3 py-1 bg-${phase.color}-500 rounded-full text-sm font-semibold mb-2`}>
                          {t(`phases.${index}.phase`)}
                        </div>
                        <h3 className="text-xl font-bold">{t(`phases.${index}.title`)}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className={`text-${phase.color}-600 font-semibold mb-2`}>{t(`phases.${index}.timeline`)}</div>
                      <p className="text-gray-600 dark:text-gray-300">{t(`phases.${index}.description`)}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}