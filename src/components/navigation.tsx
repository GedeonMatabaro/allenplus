// components/Navigation.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X, Heart, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSelect from "./LanguageSelect";
import DarkModeToggleButton from "./darkModeToggle";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const t = useTranslations("Navigation");
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close menu
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Navigation links translated dynamically
  const navigationLinks = t.raw("links").map((link: { href: string; label: string }) => ({
    href: link.href,
    label: t(`links.${t.raw("links").indexOf(link)}.label`),
  }));

  // Helper function to strip locale from pathname
  const getBasePath = (path: string) => {
    const parts = path.split("/").filter(Boolean);
    return parts.length > 1 && ["en", "es", "fr"].includes(parts[0])
      ? "/" + parts.slice(1).join("/")
      : path;
  };
  
  const basePathname = getBasePath(pathname);
  const isHomePage = basePathname === "/" || (pathname.split("/").filter(Boolean).length === 1 && ["en", "es", "fr"].includes(pathname.split("/").filter(Boolean)[0]));

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled ? "bg-transparent" : "bg-card/60 backdrop-blur-md",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex justify-between items-center py-4 transition-all duration-300",
            isScrolled &&
              "bg-card/60 backdrop-blur-md rounded-3xl shadow-lg border border-green-100/50 dark:border-gray-700/50 px-4 md:px-6 mx-2 md:mx-4"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center transition-all duration-300 group-hover:scale-105 p-0">
                <Image
                  src="/logo.png"
                  alt={t("logoAlt")}
                  fill
                  className="h-9 w-9 md:h-14 md:w-14 object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:block w-24 group-hover:scale-105 transition-all duration-300 lg:hidden xl:block">
              <div className="font-semibold text-sm text-gray-800 dark:text-gray-300">{t("tagline")}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            {navigationLinks.map((link: { href: string; label: string }) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-gray-700 dark:text-gray-200 font-medium transition-all duration-300 group py-2",
                  link.href === "/" && isHomePage
                    ? "text-green-600 dark:text-green-300"
                    : basePathname === link.href
                    ? "text-green-600 dark:text-green-300"
                    : "hover:text-green-600 dark:hover:text-green-300"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full",
                    link.href === "/" && isHomePage ? "w-full" : basePathname === link.href ? "w-full" : "w-0 group-hover:w-full",
                    "transition-all duration-300"
                  )}
                ></span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <LanguageSelect />
            <DarkModeToggleButton />
            <Button
              asChild
              variant="outline"
              className="rounded-xl border-green-200 text-green-700 hover:bg-green-50 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-900/20 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">
                <Users className="h-4 w-4 mr-2" />
                {t("volunteer")}
              </Link>
            </Button>
            <Button
              asChild
              className="rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/donate">
                <Heart className="h-4 w-4 mr-2" />
                {t("donate")}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center justify-end space-x-2 relative">
            <LanguageSelect />
            <DarkModeToggleButton />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-10 w-10 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 z-50"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          ref={menuRef}
          className={cn(
            "lg:hidden absolute top-full right-4 mt-2 w-64 transition-all duration-300 ease-in-out transform origin-top-right",
            isMobileMenuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-green-100/50 dark:border-gray-700/50 p-6">
            {/* Mobile Navigation Links */}
            <div className="space-y-2 mb-4">
              {navigationLinks.map((link: { href: string; label: string }) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block font-medium py-2 px-4 rounded-lg transition-all duration-300",
                    link.href === "/" && isHomePage
                      ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
                      : basePathname === link.href
                      ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
                      : "text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Accessibility Controls */}
            <div className="mb-4">
              <DarkModeToggleButton />
            </div>

            {/* Mobile CTA Buttons */}
            <div className="space-y-2">
              <Button
                asChild
                variant="outline"
                className="w-full rounded-lg border-green-200 text-green-700 hover:bg-green-50 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-900/20 transition-all duration-300"
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Users className="h-4 w-4 mr-2" />
                  {t("volunteer")}
                </Link>
              </Button>
              <Button
                asChild
                className="w-full rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg transition-all duration-300"
              >
                <Link href="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                  <Heart className="h-4 w-4 mr-2" />
                  {t("donate")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}