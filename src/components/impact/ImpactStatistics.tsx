// components/impact/ImpactStatistics.tsx
"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Users, Leaf, Heart, Globe } from "lucide-react";

const stats = [
  { icon: Users, color: "green-500", image: "/contactUs.jpg" },
  { icon: Leaf, color: "yellow-500", image: "/forum.jpeg" },
  { icon: Heart, color: "violet-500", image: "/trees.jpg" },
  { icon: Globe, color: "cyan-500", image: "/justiceClimatique.jpeg" },
];

export function ImpactStatistics() {
  const t = useTranslations("Impact.ImpactStatistics");

  return (
    <section className="md:py-20 py-10 px-4">
      <div className="container mx-auto max-w-7xl px-2 md:px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center md:mb-16 mb-8">{t("title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group overflow-hidden border dark:border-foreground/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={stat.image}
                  alt={t(`stats.${index}.imageAlt`)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 object-[47%_20%]"
                  onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 bg-${stat.color} rounded-full flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <div className={`text-4xl font-bold text-${stat.color} mb-2`}>{t(`stats.${index}.number`)}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{t(`stats.${index}.label`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}