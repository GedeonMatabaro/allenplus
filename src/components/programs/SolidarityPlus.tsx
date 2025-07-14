// components/programs/SolidarityPlus.tsx
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Heart, Users, Globe } from "lucide-react";

export function SolidarityPlus() {
  const t = useTranslations("Programs.SolidarityPlus");

  return (
    <section id="solidarity-plus" className="md:py-20 py-10 px-4 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto max-w-7xl md:px-4 px-2">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h2 className="text-4xl font-bold">{t("title")}</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{t("description")}</p>
            <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
              <div className="text-4xl font-bold text-yellow-600 mb-2">{t("statsNumber")}</div>
              <p className="text-gray-700 font-medium">{t("statsLabel")}</p>
              <p className="text-gray-600 text-sm mt-1">{t("statsDescription")}</p>
            </div>
            <div className="space-y-3">
              {[
                { icon: Heart, key: "point1" },
                { icon: Users, key: "point2" },
                { icon: Globe, key: "point3" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700 dark:text-gray-300">{t(`points.${index}`)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 relative order-1 lg:order-2">
            <Image
              src="/Solidarite.jpg"
              alt={t("imageAlt")}
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl"
              onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
            />
            <div className="absolute -bottom-8 md:-left-8 -left-6 bg-white md:p-6 p-2 rounded-xl shadow-2xl border-l-4 border-yellow-500">
              <div className="md:text-2xl font-bold text-yellow-600">{t("impactTitle")}</div>
              <p className="text-gray-600 font-medium">{t("impactLabel")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}