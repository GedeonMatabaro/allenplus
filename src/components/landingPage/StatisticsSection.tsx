// components/home/StatisticsSection.tsx
"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { DonationData, PartnershipData } from "@/lib/types"; // From your types.ts

interface Stat {
  value: string;
  label: string;
  color: string;
}

export function StatisticsSection() {
  const t = useTranslations("LandingPage.StatisticsSection");
  const [stats, setStats] = useState<Stat[]>(
    t.raw("stats").map((stat: Stat, index: number) => ({
      value: t(`stats.${index}.value`),
      label: t(`stats.${index}.label`),
      color: stat.color,
    }))
  );

  // Example: Fetch dynamic stats (uncomment to integrate with Prisma)
  /*
  useEffect(() => {
    async function fetchStats() {
      const [donations, partnerships] = await Promise.all([
        prisma.donation.count(),
        prisma.partnership.count(),
      ]);
      setStats([
        { value: `${(donations + partnerships).toLocaleString()}+`, label: t("stats.0.label"), color: "green" },
        { value: "1.5K+", label: t("stats.1.label"), color: "yellow" },
        { value: "357+", label: t("stats.2.label"), color: "cyan" },
        { value: "105+", label: t("stats.3.label"), color: "purple" },
      ]);
    }
    fetchStats();
  }, [t]);
  */

  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <div className={`text-6xl md:text-7xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}