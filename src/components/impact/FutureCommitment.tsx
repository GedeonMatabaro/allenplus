// components/impact/FutureCommitment.tsx
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export function FutureCommitment() {
  const t = useTranslations("Impact.FutureCommitment");

  return (
    <section className="relative md:py-32 py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Commitment.jpg"
          alt={t("imageAlt")}
          fill
          className="object-cover object-[47%_40%]"
        />
        <div className="absolute inset-0 bg-green-900/80"></div>
      </div>
      <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
        <h2 className="text-3xl md:text-6xl font-bold md:mb-8 mb-5">{t("title")}</h2>
        <p className="text-xl md:text-2xl md:mb-12 mb-8 text-green-100">{t("description")}</p>
        <div className="grid md:grid-cols-3 md:gap-8 gap-4">
          {[
            { highlight: "growing", label: "communityReach" },
            { highlight: "expanding", label: "programImpact" },
            { highlight: "strengthening", label: "globalPartnerships" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400 md:mb-4 mb-2">
                {t(`commitments.${index}.highlight`)}
              </div>
              <p className="text-xl">{t(`commitments.${index}.label`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}