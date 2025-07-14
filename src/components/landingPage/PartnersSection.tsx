// components/home/PartnersSection.tsx
"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Globe, Heart, Handshake, ArrowRight } from "lucide-react";
import { JSX, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { PartnershipData } from "@/lib/types"; // From your types.ts

interface PartnerCategory {
  title: string;
  description: string;
  icon: JSX.Element;
}

export function PartnersSection() {
  const t = useTranslations("LandingPage.PartnersSection");
  const [partners, setPartners] = useState<string[]>([
    "/partner1.png",
    "/partner2.png",
    "/partner3.png",
    "/partner4.png",
    "/partner5.png",
    "/partner6.png",
    "/partner7.png",
    "/partner8.png",
    "/partner9.png",
    "/partner10.png",
    "/partner11.png",
    "/partner12.png"
  ]);

  // Example: Fetch dynamic partners (uncomment to integrate with Prisma)
  /*
  useEffect(() => {
    async function fetchPartners() {
      const partnerships = await prisma.partnership.findMany({
        include: getPartnershipDataInclude(""), // No user-specific data needed
        take: 12,
      });
      setPartners(partnerships.map((p) => p.organization || `/placeholder.svg?height=80&width=120&text=Partner`));
    }
    fetchPartners();
  }, []);
  */

  const categories: PartnerCategory[] = [
    {
      title: t("categories.international.title"),
      description: t("categories.international.description"),
      icon: <Globe className="h-8 w-8 text-green-600" />,
    },
    {
      title: t("categories.local.title"),
      description: t("categories.local.description"),
      icon: <Heart className="h-8 w-8 text-yellow-600" />,
    },
    {
      title: t("categories.government.title"),
      description: t("categories.government.description"),
      icon: <Handshake className="h-8 w-8 text-cyan-600" />,
    },
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-7xl px-2 md:px-4">
        <div className="md:text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("title")} <span className="text-green-600">{t("titleHighlight")}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("description")}</p>
        </div>
        <div className="bg-green-700/20 rounded-2xl mb:p-12 px-2 py-4 shadow-2xl mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb:gap-8 gap-4 items-center">
            {partners.map((src, index) => (
              <div key={index} className="group flex items-center justify-center md:p-2 p-1 h-fit w-fit bg-white">
                <Image
                  src={`/partners${src}`}
                  alt={t("partnerAlt", { index: index + 1 })}
                  width={120}
                  height={80}
                  className="transition-all duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-16 h-16 bg-${
                  category.title === t("categories.international.title")
                    ? "green"
                    : category.title === t("categories.local.title")
                    ? "yellow"
                    : "cyan"
                }-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" className="bg-green-600 dark:bg-green-900 hover:bg-green-700 text-lg px-8 py-4 font-semibold">
            <Link href="/partners">
              {t("buttonText")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}