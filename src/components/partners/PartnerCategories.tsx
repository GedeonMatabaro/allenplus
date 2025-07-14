// components/partners/PartnerCategories.tsx
"use client";

import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Globe, Heart, Handshake } from "lucide-react";

const categories = [
  { image: "/international-organisations.jpg", color: "green-500", icon: Globe },
  { image: "/Commitment.jpg", color: "yellow-500", icon: Heart },
  { image: "/Seal_of_the_DR_Congo_Government.svg", color: "cyan-500", icon: Handshake },
];

export function PartnerCategories() {
  const t = useTranslations("Partners.PartnerCategories");

  return (
    <section className="md:py-20 py-10 px-4 bg-gray-50 dark:bg-gray-700/30">
      <div className="container mx-auto max-w-7xl px-2 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-200">{t("description")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={t(`categories.${index}.imageAlt`)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-3">
                    <div className={`w-12 h-12 bg-${category.color} rounded-full flex items-center justify-center mr-3`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{t(`categories.${index}.title`)}</h3>
                  </div>
                  <p className="text-gray-200 text-sm">{t(`categories.${index}.description`)}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}