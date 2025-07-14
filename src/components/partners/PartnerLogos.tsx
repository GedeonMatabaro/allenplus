// components/partners/PartnerLogos.tsx
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export function PartnerLogos() {
  const t = useTranslations("Partners.PartnerLogos");

  return (
    <div className="bg-card rounded-2xl py-6 px-2 md:p-12 shadow-2xl">
      <h3 className="text-3xl font-bold text-center md:mb-12 mb-8">{t("title")}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 items-center px-1">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="group flex items-center justify-center p-2 px-1 bg-white">
            <Image
              src={`/partners/partner${i + 1}.png`}
              alt={t(`logos.${i}.alt`)}
              width={120}
              height={80}
              className="transition-all duration-300 group-hover:scale-110"
              onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}