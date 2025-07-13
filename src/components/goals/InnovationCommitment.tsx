// components/goals/InnovationCommitment.tsx
"use client";

import { useTranslations } from "next-intl";
import { Target, Network, Globe } from "lucide-react";

export function InnovationCommitment() {
  const t = useTranslations("Goals.InnovationCommitment");

  return (
    <section className="md:py-20 py-10 px-4 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("title")}</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {[
            { icon: Target, color: "green", title: "technology" },
            { icon: Network, color: "yellow", title: "connection" },
            { icon: Globe, color: "cyan", title: "development" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <item.icon className={`h-8 w-8 text-${item.color}-600`} />
              </div>
              <h3 className="font-bold mb-2">{t(`items.${index}.title`)}</h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm">{t(`items.${index}.description`)}</p>
            </div>
          ))}
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed text-justify md:text-center">
          {t("description")}
        </p>
      </div>
    </section>
  );
}