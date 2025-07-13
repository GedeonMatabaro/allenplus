// components/about/AboutHeroSection.tsx
import Image from "next/image";
import { useTranslations } from "next-intl";

export function AboutHeroSection() {
  const t = useTranslations("AboutPage.HeroSection");

  return (
    <section className="relative h-screen md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/allenplus.jpg"
          alt={t("imageAlt")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mt-20">
        <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
          {t("title")} <span className="block text-yellow-400">{t("titleHighlight")}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">{t("description")}</p>
      </div>
    </section>
  );
}