// components/home/FutureGoalsSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Globe, Target, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export function FutureGoalsSection() {
  const t = useTranslations("LandingPage.FutureGoalsSection");

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto px-2 max-w-7xl md:px-6">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {t("title")} <span className="text-cyan Cyan-600 dark:text-cyan-400">{t("titleHighlight")}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{t("description")}</p>
            <div className="bg-cyan-50 p-6 rounded-xl border-l-4 border-cyan-500">
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-cyan-600" />
                <div>
                  <h4 className="font-bold text-gray-800">{t("impactTitle")}</h4>
                  <p className="text-gray-600">{t("impactDescription")}</p>
                </div>
              </div>
            </div>
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-lg px-8 py-4 font-semibold">
              <Link href="/future-goals">
                {t("buttonText")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/Vision.webp"
              alt={t("imageAlt")}
              width={700}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <Target className="h-10 w-10 text-white" />
            </div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}