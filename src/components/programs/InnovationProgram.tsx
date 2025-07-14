// components/programs/InnovationProgram.tsx
"use client";

import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Lightbulb, Sprout, Globe } from "lucide-react";

const innovations = [
  { image: "/sustainable-agriculture.jpg", icon: Sprout, color: "green-500" },
  { image: "/renewable-energy.jpg", icon: Globe, color: "cyan-500" },
  { image: "/suitable-recycling.webp", icon: Lightbulb, color: "yellow-500" },
];

export function InnovationProgram() {
  const t = useTranslations("Programs.InnovationProgram");

  return (
    <section id="innovation" className="md:py-20 py-10 px-4">
      <div className="container mx-auto max-w-7xl px-2 md:px-4">
        <div className="md:text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-cyan-100 rounded-2xl flex items-center justify-center">
              <Lightbulb className="h-10 w-10 text-cyan-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">{t("description")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {innovations.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={t(`innovations.${index}.imageAlt`)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center mb-2">
                    <item.icon className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-bold">{t(`innovations.${index}.title`)}</h3>
                  </div>
                  <p className="text-sm text-gray-200">{t(`innovations.${index}.description`)}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="bg-cyan-50 rounded-2xl px-4 py-8 md:p-12 dark:bg-teal-700/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">{t("practiceTitle")}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{t("practiceDescription")}</p>
              <div className="space-y-4">
                {["point1", "point2", "point3"].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{t(`practicePoints.${index}`)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/practice-driven-innovation.jpg"
                alt={t("practiceImageAlt")}
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
                onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}