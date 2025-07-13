// components/contact/ExpectSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Globe, Handshake } from "lucide-react";
import { useTranslations } from "next-intl";

interface Expectation {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  badge?: string;
}

export function ExpectSection() {
  const t = useTranslations("ContactPage.ExpectSection");

  const expectations: Expectation[] = [
    {
      icon: Mail,
      title: t("expectations.quickResponse.title"),
      description: t("expectations.quickResponse.description"),
      color: "green",
      badge: "24h",
    },
    {
      icon: Globe,
      title: t("expectations.globalImpact.title"),
      description: t("expectations.globalImpact.description"),
      color: "yellow",
    },
    {
      icon: Handshake,
      title: t("expectations.personalConnection.title"),
      description: t("expectations.personalConnection.description"),
      color: "cyan",
    },
  ];

  return (
    <section className="md:py-20 py-10 md:px-4 px-3">
      <div className="container mx-auto max-w-6xl px-2 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t("description")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {expectations.map((expectation, index) => (
            <Card
              key={index}
              className="text-center border dark:border-foreground/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-${expectation.color}-100 rounded-2xl flex items-center justify-center mx-auto`}>
                    <expectation.icon className={`h-10 w-10 text-${expectation.color}-600`} />
                  </div>
                  {expectation.badge && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{expectation.badge}</span>
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-xl mb-3">{expectation.title}</h3>
                <p className="text-gray-600 dark:text-gray-300/80">{expectation.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}