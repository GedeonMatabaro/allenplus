// components/about/UniqueSection.tsx
import Image from "next/image";
import { useTranslations } from "next-intl";

export function UniqueSection() {
  const t = useTranslations("AboutPage.UniqueSection");

  const points = [
    {
      number: "1",
      title: t("points.youthDriven.title"),
      description: t("points.youthDriven.description"),
    },
    {
      number: "2",
      title: t("points.localFocus.title"),
      description: t("points.localFocus.description"),
    },
    {
      number: "3",
      title: t("points.practiceDriven.title"),
      description: t("points.practiceDriven.description"),
    },
  ];

  return (
    <section className="py-20 px-4 bg-green-600 dark:bg-green-600/60 text-white overflow-hidden">
      <div className="container mx-auto max-w-6xl px-2 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("title")} <span className="text-yellow-400">{t("titleHighlight")}</span>
            </h2>
            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-800 font-bold text-sm">{point.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                    <p className="text-green-100">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src="/unique.jpg"
              alt={t("imageAlt")}
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}