// components/contact/ContactInfoSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Globe, Handshake, Target, Users, Heart, Award } from "lucide-react";
import { useTranslations } from "next-intl";
import { ContactForm } from "./ContactForm";

interface Involvement {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  color: string;
}

export function ContactInfoSection() {
  const t = useTranslations("ContactPage.InfoSection");

  const involvements: Involvement[] = [
    { icon: Handshake, text: t("involvements.partner"), color: "green" },
    { icon: Target, text: t("involvements.support"), color: "yellow" },
    { icon: Users, text: t("involvements.volunteer"), color: "cyan" },
    { icon: Heart, text: t("involvements.donate"), color: "purple" },
    { icon: Award, text: t("involvements.collaborate"), color: "gray" },
    { icon: Globe, text: t("involvements.advocacy"), color: "blue" },
  ];

  return (
    <section className="md:py-20 py-10 md:px-4 px-2">
      <div className="container mx-auto max-w-7xl px-1 md:px-6">
        <div className="lg:grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">{t("title")}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">{t("description")}</p>
            </div>
            <div className="space-y-6">
              <Card className="border dark:border-foreground/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-6">
                      <Mail className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{t("emailTitle")}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">contact@allenplus.com</p>
                      <p className="text-gray-500 dark:text-gray-300/80 text-sm mt-1">{t("emailResponse")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border dark:border-foreground/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mr-6">
                      <MapPin className="h-8 w-8 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{t("addressTitle")}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">
                        DRC, North-Kivu, Goma
                        <br />
                        Circulaire 219
                      </p>
                      <p className="text-gray-500 dark:text-gray-300/80 text-sm mt-1">{t("addressRegion")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border dark:border-foreground/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mr-6">
                      <Globe className="h-8 w-8 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{t("organizationTitle")}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">ALLEN+ (Aid Life Learn Environment)</p>
                      <p className="text-gray-500 dark:text-gray-300/80 text-sm mt-1">{t("organizationDescription")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="bg-green-50/80 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t("involvementTitle")}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {involvements.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-${item.color}-100 rounded-full flex items-center justify-center`}>
                      <item.icon className={`h-5 w-5 text-${item.color}-600`} />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}