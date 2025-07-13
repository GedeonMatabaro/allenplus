// components/about/VisionSection.tsx
import Image from "next/image";
import { useTranslations } from "next-intl";

export function VisionSection() {
  const t = useTranslations("AboutPage.VisionSection");

  return (
    <section className="py-20 px-4 bg-card/60">
      <div className="container mx-auto max-w-7xl px-2 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-semibold">
              {t("visionTitle")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("title")} <span className="text-yellow-600">{t("titleHighlight")}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{t("description")}</p>
            <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
              <p className="text-lg text-gray-700 font-medium">{t("quote")}</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <Image
              src="/afriac-mazingira.jpg"
              alt={t("imageAlt")}
              width={700}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-yellow-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}