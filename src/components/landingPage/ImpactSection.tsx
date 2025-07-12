// components/home/ImpactSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";
import { useTranslations } from "next-intl";

export function ImpactSection() {
  const t = useTranslations("LandingPage.ImpactSection");

  return (
    <section className="py-20 px-4 bg-green-600 dark:bg-green-800 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight dark:text-green-100">
              {t("title")} <span className="text-yellow-400">{t("titleHighlight")}</span>
            </h2>
            <p className="text-xl text-green-100 leading-relaxed">{t("description")}</p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">{t("stats.cop.title")}</div>
                <p className="text-green-100 text-sm">{t("stats.cop.description")}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">{t("stats.unRecognition.title")}</div>
                <p className="text-green-100 text-sm">{t("stats.unRecognition.description")}</p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4"
            >
              <Link href="/impact">
                {t("buttonText")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/home2.jpg"
              alt={t("imageAlt")}
              width={700}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-2xl">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-yellow-500" />
                <div>
                  <div className="text-lg font-bold text-gray-800">{t("awardTitle")}</div>
                  <p className="text-gray-600 text-xs">{t("awardDescription")}</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-2xl">
              <div className="text-2xl font-bold text-green-600">{t("livesTouched.title")}</div>
              <p className="text-gray-600 text-sm">{t("livesTouched.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}