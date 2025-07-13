// components/donations/ImpactSection.tsx
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Leaf, CheckCircle, Globe, Star } from "lucide-react";

export function ImpactSection() {
  const t = useTranslations("DonationPage.Impact");

  return (
    <div className="space-y-8 px-2">
      <div>
        <h2 className="text-4xl font-bold mb-6">{t("title")}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{t("description")}</p>
      </div>

      {/* Program Impact Cards */}
      <div className="space-y-6">
        <Card className="border dark:border-foreground/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{t("programs.greenYouth.title")}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{t("programs.greenYouth.description")}</p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">{t("programs.greenYouth.impact")}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border dark:border-foreground/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{t("programs.solidarity.title")}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{t("programs.solidarity.description")}</p>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm text-yellow-800">{t("programs.solidarity.impact")}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border dark:border-foreground/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Leaf className="h-6 w-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{t("programs.innovation.title")}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{t("programs.innovation.description")}</p>
                <div className="bg-cyan-50 p-3 rounded-lg">
                  <p className="text-sm text-cyan-800">{t("programs.innovation.impact")}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Testimonial */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-cyan-50 dark:from-green-700 dark:to-cyan-700 rounded-2xl">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-4">
            <Image
              src="/testimony.jpeg"
              alt={t("testimonial.imageAlt")}
              width={80}
              height={80}
              className="rounded-full object-cover aspect-square mb-4 md:mb-0"
              priority
            />
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-100/90 italic mb-4">{t("testimonial.quote")}</p>
              <div>
                <p className="font-semibold text-gray-800">{t("testimonial.author")}</p>
                <p className="text-sm text-gray-600 dark:text-white/90">{t("testimonial.role")}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recognition */}
      <div className="bg-card p-6 rounded-2xl shadow-lg border border-foreground/20">
        <h3 className="font-bold text-lg mb-4 flex items-center">
          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
          {t("recognition.title")}
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Globe className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-100/90">{t("recognition.unep")}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Star className="h-5 w-5 text-yellow-600" />
            <span className="text-gray-700 dark:text-gray-100/90">{t("recognition.cop")}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="h-5 w-5 text-green-600" />
            <span className="text-gray-700 dark:text-gray-100/90">{t("recognition.community")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}