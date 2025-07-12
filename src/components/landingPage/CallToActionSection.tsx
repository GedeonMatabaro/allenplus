// components/home/CallToActionSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function CallToActionSection() {
  const t = useTranslations("LandingPage.CallToActionSection");

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt={t("imageAlt")}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/90"></div>
      </div>
      <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          {t("title")} <span className="block text-yellow-400">{t("titleHighlight")}</span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-green-100">{t("description")}</p>
        <div className="bg-card backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
            {["partner", "support", "volunteer"].map((key) => (
              <div key={key}>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{t(`categories.${key}.title`)}</div>
                <p className="text-lg">{t(`categories.${key}.description`)}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-xl px-10 py-5"
            >
              <Link href="/contact">
                {t("buttonGetInvolved")}
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-800 text-xl px-10 py-5"
            >
              <Link href="/programs">{t("buttonExploreWork")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}