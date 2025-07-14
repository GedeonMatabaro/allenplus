// components/partners/PartnershipImpact.tsx
"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Users, Target } from "lucide-react";

const stories = [
  { image: "/UCNDK-expandeed-reach.jpg", color: "green-500", icon: Users },
  { image: "/Attelier-ressource-sharing.jpg", color: "yellow-500", icon: Target },
];

export function PartnershipImpact() {
  const t = useTranslations("Partners.PartnershipImpact");

  return (
    <section className="md:py-20 py-10 px-4">
      <div className="container mx-auto max-w-7xl px-2 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t("description")}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="overflow-hidden border dark:border-foreground/30 shadow-2xl"
            >
              <div className="relative h-80">
                <Image
                  src={story.image}
                  alt={t(`stories.${index}.imageAlt`)}
                  fill
                  className="object-cover"
                  onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-3">
                    <div className={`w-10 h-10 bg-${story.color} rounded-full flex items-center justify-center mr-3`}>
                      <story.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold">{t(`stories.${index}.title`)}</h3>
                  </div>
                  <p className="text-gray-200">{t(`stories.${index}.description`)}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-3xl font-bold text-${story.color.replace("500", "600")}`}>
                      {t(`stories.${index}.metric1Value`)}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{t(`stories.${index}.metric1Label`)}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{t(`stories.${index}.metric2Value`)}</div>
                    <p className="text-gray-600 dark:text-gray-300">{t(`stories.${index}.metric2Label`)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}