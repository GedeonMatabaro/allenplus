// components/partners/PartnershipBenefits.tsx
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const benefits = [
  { image: "/expanded-reach.png", color: "green-500" },
  { image: "/ressource-sharing.webp", color: "yellow-500" },
  { image: "/learning-and-development.jpg", color: "cyan-500" },
  { image: "/soustainable-impact.png", color: "violet-500" },
];

export function PartnershipBenefits() {
  const t = useTranslations("Partners.PartnershipBenefits");

  return (
    <section className="md:py-20 py-10 px-4 bg-green-50 dark:bg-green-950/60">
      <div className="container mx-auto max-w-6xl px-2 md:px-4">
        <div className="md:text-center md:mb-16 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t("description")}</p>
        </div>
        <div className="space-y-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col items-center md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:gap-12`}
            >
              <div className="flex-1 relative">
                <Image
                  src={benefit.image}
                  alt={t(`benefits.${index}.imageAlt`)}
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-xl"
                  onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
                />
                <div
                  className={`absolute -top-4 ${index % 2 === 0 ? "-right-4" : "-left-4"} w-16 h-16 bg-${benefit.color} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-bold">{t(`benefits.${index}.title`)}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{t(`benefits.${index}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}