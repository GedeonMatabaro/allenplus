// app/components/Footer.jsx
import { Leaf, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-[#0f2810]/90 text-green-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="h-6 w-6 text-[#4CAF50]" />
              </div>
              <div>
                <div className="font-bold text-2xl tracking-tight text-white">ALLEN+</div>
                <div className="text-sm text-green-200">{t("tagline")}</div>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed max-w-md mb-6">
              {t("description")}
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-green-100">
                <Mail className="h-5 w-5 mr-3 text-[#4CAF50]" />
                <span className="text-sm">{t("email")}</span>
              </div>
              <div className="flex items-center text-green-100">
                <MapPin className="h-5 w-5 mr-3 text-[#4CAF50]" />
                <span className="text-sm">{t("address")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">{t("quickLinks.title")}</h3>
            <ul className="space-y-3">
              {["about", "programs", "impact", "partners", "futureGoals"].map((key) => (
                <li key={key}>
                  <Link
                    href={`/${key.replace("futureGoals", "future-goals")}`}
                    className="text-green-100 hover:text-[#FFC107] transition-colors duration-300 text-sm"
                  >
                    {t(`quickLinks.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">{t("getInvolved.title")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-green-100 hover:text-[#FFC107] transition-colors duration-300 text-sm"
                >
                  {t("getInvolved.contact")}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:infosallenplus@gmail.com"
                  className="text-green-100 hover:text-[#FFC107] transition-colors duration-300 text-sm"
                >
                  {t("getInvolved.partner")}
                </a>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-green-100 hover:text-[#FFC107] transition-colors duration-300 text-sm"
                >
                  {t("getInvolved.volunteer")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-green-100 hover:text-[#FFC107] transition-colors duration-300 text-sm"
                >
                  {t("getInvolved.donate")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/30 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-100 text-sm text-center md:text-left">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:contact@allenplus.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFC107] transition-colors duration-300"
              >
                <Mail className="h-5 w-5 text-green-100" />
              </a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-green-200 text-sm">
              {t("developedBy")}{" "}
              <a
                href="https://matabaro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFC107] hover:underline transition-colors duration-300"
              >
                Matabaro Tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}