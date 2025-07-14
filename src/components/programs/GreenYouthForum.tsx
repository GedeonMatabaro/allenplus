// components/programs/GreenYouthForum.tsx
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Leaf } from "lucide-react";

export function GreenYouthForum() {
  const t = useTranslations("Programs.GreenYouthForum");

  return (
    <section id="green-youth-forum" className="md:py-20 py-10 px-4">
      <div className="container mx-auto max-w-7xl px-2 md:px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 relative">
            <Image
              src="/green-youth-forum.png"
              alt={t("imageAlt")}
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl"
              onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
            />
            <div className="absolute -bottom-8 md:-right-8 -right-6 bg-white md:p-6 p-2 rounded-xl shadow-2xl border-l-4 border-green-500">
              <div className="md:text-3xl font-bold text-green-600">{t("statsNumber")}</div>
              <p className="text-gray-600 font-medium">{t("statsLabel")}</p>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold">{t("title")}</h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-200 leading-relaxed">{t("description")}</p>
            <div className="space-y-4">
              {["point1", "point2", "point3"].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{t(`points.${index}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}