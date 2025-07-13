// components/contact/ThankYouSection.tsx
import Image from "next/image";
import { Heart, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export function ThankYouSection() {
  const t = useTranslations("ContactPage.ThankYouSection");

  return (
    <section className="md:py-20 py-10 md:px-4 px-3 bg-card/60">
      <div className="container mx-auto max-w-7xl px-2 md:px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center px-2">
          <div className="relative">
            <Image
              src="/Thankyou.png"
              alt={t("imageAlt")}
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("title")} <span className="text-green-600 dark:text-green-400">{t("titleHighlight")}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{t("description")}</p>
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <p className="text-lg text-gray-700 font-medium italic">{t("quote")}</p>
              <p className="text-gray-600 mt-2">{t("quoteAuthor")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}