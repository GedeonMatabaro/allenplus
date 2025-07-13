// components/goals/ProjectedImpact.tsx
"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Network } from "lucide-react";

export function ProjectedImpact() {
  const t = useTranslations("Goals.ProjectedImpact");

  return (
    <section className="md:py-20 py-10 px-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-800 dark:to-blue-900">
      <div className="container mx-auto max-w-7xl px-2 md:px-4">
        <div className="md:text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-200">{t("description")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Users, color: "green", value: "100,000+", title: "beneficiaries" },
            { icon: BookOpen, color: "yellow", value: "500+", title: "courses" },
            { icon: Network, color: "cyan", value: "50+", title: "partners" },
          ].map((metric, index) => (
            <Card key={index} className="text-center border-0 shadow-xl bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className={`w-20 h-20 bg-${metric.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <metric.icon className={`h-10 w-10 text-${metric.color}-600`} />
                </div>
                <div className={`text-4xl font-bold text-${metric.color}-600 mb-2`}>{t(`metrics.${index}.value`)}</div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{t(`metrics.${index}.title`)}</p>
                <p className="text-gray-500 dark:text-gray-200 text-sm mt-2">{t(`metrics.${index}.description`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}