// components/donations/SupportSection.tsx
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Globe, Heart } from "lucide-react";

export function SupportSection() {
  const t = useTranslations("DonationPage.Support");

  return (
    <section className="md:py-20 md:px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="md:text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">{t("title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t("description")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <Card className="border dark:border-foreground/30 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("cards.volunteer.title")}</h3>
              <p className="text-gray-600 dark:text-gray-100/90 mb-6">{t("cards.volunteer.description")}</p>
              <Button variant="outline" className="w-full">
                {t("cards.volunteer.button")}
              </Button>
            </CardContent>
          </Card>

          <Card className="border dark:border-foreground/30 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("cards.awareness.title")}</h3>
              <p className="text-gray-600 dark:text-gray-100/90 mb-6">{t("cards.awareness.description")}</p>
              <Button variant="outline" className="w-full">
                {t("cards.awareness.button")}
              </Button>
            </CardContent>
          </Card>

          <Card className="border dark:border-foreground/30 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("cards.partnership.title")}</h3>
              <p className="text-gray-600 dark:text-gray-100/90 mb-6">{t("cards.partnership.description")}</p>
              <Button variant="outline" className="w-full">
                {t("cards.partnership.button")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}