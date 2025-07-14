// components/impact/CommunityEngagement.tsx
"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { TrendingUp, Heart } from "lucide-react";

export function CommunityEngagement() {
  const t = useTranslations("Impact.CommunityEngagement");

  return (
    <section className="md:py-20 py-10 px-4 bg-green-50 dark:bg-green-950/30">
      <div className="container mx-auto max-w-7xl px-2 md:px-4">
        <div className="md:text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t("description")}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { image: "/empowering-gen.jpg", color: "green-600", icon: TrendingUp },
            { image: "/community-gathering.jpg", color: "violet-600", icon: Heart },
          ].map((item, index) => (
            <Card key={index} className="overflow-hidden border dark:border-foreground/30 shadow-2xl">
              <div className="relative h-44">
                <Image
                  src={item.image}
                  alt={t(`stories.${index}.imageAlt`)}
                  fill
                  className="object-cover"
                  onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{t(`stories.${index}.title`)}</h3>
                  <p className="text-gray-200">{t(`stories.${index}.description`)}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-3xl font-bold text-${item.color}`}>{t(`stories.${index}.number`)}</div>
                    <p className="text-gray-600 dark:text-gray-300">{t(`stories.${index}.label`)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <item.icon className={`h-5 w-5 text-${item.color.replace("600", "500")}`} />
                    <span className={`text-${item.color} font-semibold`}>{t(`stories.${index}.iconLabel`)}</span>
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