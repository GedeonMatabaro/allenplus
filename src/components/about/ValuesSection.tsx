// components/about/ValuesSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Lightbulb, Globe, HandHeart } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { JSX } from "react";

interface Value {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
  image: string;
}

export function ValuesSection() {
  const t = useTranslations("AboutPage.ValuesSection");

  const values: Value[] = [
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: t("values.communityEmpowerment.title"),
      description: t("values.communityEmpowerment.description"),
      color: "green",
      image: "/justiceClimatique.jpeg",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      title: t("values.innovation.title"),
      description: t("values.innovation.description"),
      color: "yellow",
      image: "/innovation.png",
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: t("values.sustainability.title"),
      description: t("values.sustainability.description"),
      color: "cyan",
      image: "/climateAction.jpg",
    },
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      title: t("values.inclusivity.title"),
      description: t("values.inclusivity.description"),
      color: "purple",
      image: "/inclusivity.jpg",
    },
    {
      icon: <HandHeart className="h-6 w-6 text-white" />,
      title: t("values.collaboration.title"),
      description: t("values.collaboration.description"),
      color: "blue",
      image: "/allen2.jpg",
    },
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: t("values.actionOriented.title"),
      description: t("values.actionOriented.description"),
      color: "red",
      image: "/Action.jpg",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl px-2 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-start md:text-center">{t("title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-start md:text-center">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={value.image || "/placeholder.svg"}
                  alt={t("valuesAlt", { title: value.title })}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className={`w-12 h-12 bg-${value.color}-500 rounded-full flex items-center justify-center`}>
                    {value.icon}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}