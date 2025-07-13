// components/goals/PlatformFeatures.tsx
"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Users, BookOpen, Globe, Smartphone, Network, Target } from "lucide-react";

const features = [
  { icon: Users, color: "green", image: "/studentsNetwork.webp" },
  { icon: BookOpen, color: "yellow", image: "/OnlineLearningHub.jpg" },
  { icon: Globe, color: "cyan", image: "/ClimateIngforamtionSystem.png" },
  { icon: Smartphone, color: "teal", image: "/MobileAccessibility.jpg" },
  { icon: Network, color: "orange", image: "/PartnershipIntegration.jpg" },
  { icon: Target, color: "blue", image: "/ImpactTracking.png" },
];

export function PlatformFeatures() {
  const t = useTranslations("Goals.PlatformFeatures");

  return (
    <section className="py-10 md:py-20 px-4 bg-card/60">
      <div className="container mx-auto max-w-7xl px-2 md:px-4">
        <div className="md:text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t("description")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group overflow-hidden border dark:border-foreground/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={t(`features.${index}.imageAlt`)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 bg-${feature.color}-500 rounded-full flex items-center justify-center`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{t(`features.${index}.title`)}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t(`features.${index}.description`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}