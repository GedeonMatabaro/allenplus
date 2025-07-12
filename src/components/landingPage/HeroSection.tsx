// components/home/HeroSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("LandingPage.HeroSection");

  return (
    <main className="mx-auto min-w-[320px]">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 inset-0 z-0">
          <Image
            src="/home2.jpg"
            alt={t("imageAlt")}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-0 inset-0 z-20 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl min-w-[320px]">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-wrap">
            {t("title")} <span className="block text-yellow-400">{t("titleHighlight")}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">{t("description")}</p>
          <Button
            asChild
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold md:text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-wrap"
          >
            <Link href="/about">
              {t("buttonText")}
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}