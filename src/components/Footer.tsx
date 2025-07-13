// app/components/Footer.jsx
"use client";

import { Leaf, Mail, MapPin, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Footer() {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll to show/hide back-to-top button
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); // Show button after scrolling 300px
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fast but smooth scroll-to-top animation
  const scrollToTop = () => {
    const start = window.scrollY;
    const startTime = performance.now();
    const duration = 300; // 300ms for fast but smooth animation

    const easeInOutQuad = (t:number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animateScroll = (currentTime:number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Cap at 1
      const easedProgress = easeInOutQuad(progress);
      window.scrollTo(0, start * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // Helper function to strip locale from pathname
  const getBasePath = (path:string) => {
    const parts = path.split("/").filter(Boolean);
    // Remove the first part if it's a locale (e.g., en, es, fr)
    return parts.length > 1 && ["en", "es", "fr"].includes(parts[0])
      ? "/" + parts.slice(1).join("/")
      : path;
  };

  // Get the base pathname without locale
  const basePathname = getBasePath(pathname);

  return (
    <footer className="bg-[#0f2810]/90 text-green-100 relative">
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
              {["about", "programs", "impact", "partners", "futureGoals"].map((key) => {
                const href = `/${key.replace("futureGoals", "future-goals")}`;
                return (
                  <li key={key}>
                    <Link
                      href={href}
                      className={
                        basePathname === href
                          ? "text-[#4CAF50] hover:text-[#FFC107] transition-colors duration-300 text-sm"
                          : "text-green-100 hover:text-[#FFC107] transition-colors duration-300 text-sm"
                      }
                    >
                      {t(`quickLinks.${key}`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">{t("getInvolved.title")}</h3>
            <ul className="space-y-3">
              {[
                { href: "/contact", key: "contact" },
                { href: "mailto:infosallenplus@gmail.com", key: "partner", isExternal: true },
                { href: "/programs", key: "volunteer" },
                { href: "/contact", key: "donate" },
              ].map(({ href, key, isExternal }) => (
                <li key={key}>
                  {isExternal ? (
                    <a
                      href={href}
                      className={
                        basePathname === href
                          ? "text-[#4CAF50] hover:text-[#FFC107] transition-colors duration-300 text-sm"
                          : "text-green-100 hover:text-[#FFC107] transition-colors duration-300 text-sm"
                      }
                    >
                      {t(`getInvolved.${key}`)}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className={
                        basePathname === href
                          ? "text-[#4CAF50] hover:text-[#FFC107] transition-colors duration-300 text-sm"
                          : "text-green-100 hover:text-[#FFC107] transition-colors duration-300 text-sm"
                      }
                    >
                      {t(`getInvolved.${key}`)}
                    </Link>
                  )}
                </li>
              ))}
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

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-[#4CAF50] text-white rounded-full shadow-lg hover:bg-[#388E3C] hover:scale-110 transform transition-all duration-300 ease-in-out group z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </footer>
  );
}