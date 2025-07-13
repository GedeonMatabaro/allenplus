// components/contact/JoinCommunitySection.tsx
import Image from "next/image";
import { useTranslations } from "next-intl";

export function JoinCommunitySection() {
  const t = useTranslations("ContactPage.JoinCommunitySection");

  const highlights = [
    {
      title: t("highlights.growing.title"),
      description: t("highlights.growing.description"),
    },
    {
      title: t("highlights.expanding.title"),
      description: t("highlights.expanding.description"),
    },
    {
      title: t("highlights.creating.title"),
      description: t("highlights.creating.description"),
    },
  ];

  return (
    <section className="relative md:py-32 py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/allen2.jpg"
          alt={t("imageAlt")}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-green-900/60"></div>
      </div>
      <div className="relative z-10 container px-2 md:px-4 mx-auto max-w-4xl text-start md:text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">{t("title")}</h2>
        <p className="text-xl md:text-2xl mb-12 text-green-100">{t("description")}</p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
            {highlights.map((highlight, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{highlight.title}</div>
                <p className="text-lg">{highlight.description}</p>
              </div>
            ))}
          </div>
          <p className="text-lg mb-6">{t("callToAction")}</p>
        </div>
      </div>
    </section>
  );
}