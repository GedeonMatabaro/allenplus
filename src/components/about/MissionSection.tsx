// components/about/MissionSection.tsx
import Image from "next/image";
import { useTranslations } from "next-intl";

export function MissionSection() {
  const t = useTranslations("AboutPage.MissionSection");

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl px-2 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="/JAMES-UCNDK.jpg"
              alt={t("imageAlt")}
              width={700}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-green-200/60 dark:bg-green-300/40 rounded-2xl -z-10"></div>
          </div>
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-green-200/60 dark:bg-green-300/40 text-green-800 dark:text-green-100 rounded-full font-semibold">
              {t("missionTitle")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("title")} <span className="text-green-600 dark:text-green-400">{t("titleHighlight")}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{t("description")}</p>
            <div className="bg-green-200/60 dark:bg-green-300/20 text-green-800 dark:text-green-100 p-6 rounded-xl border-l-4 border-green-500 dark:border-green-200">
              <p className="text-lg font-medium">{t("quote")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}