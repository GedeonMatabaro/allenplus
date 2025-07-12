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

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const t = useTranslations("Navigation");
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links translated dynamically
  const navigationLinks = t.raw("links").map((link: { href: string; label: string }) => ({
    href: link.href,
    label: t(`links.${t.raw("links").indexOf(link)}.label`),
  }));

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
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center transition-all duration-300 group-hover:scale-105 p-0">
                <Image
                  src="/logo.png"
                  alt={t("logoAlt")}
                  fill
                  className="h-14 w-14 object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:block w-24 group-hover:scale-105 transition-all duration-300">
              <div className="font-semibold text-sm text-gray-800 dark:text-gray-300">{t("tagline")}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link: { href: string; label: string }) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-300 font-medium transition-all duration-300 group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelect />
            <DarkModeToggleButton />
            {/* CTA Buttons */}
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
          <div className="lg:hidden flex items-center justify-end space-x-2">
            <LanguageSelect />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-10 w-10 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isMobileMenuOpen ? "max-h-screen opacity-100 pb-6" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-green-100/50 dark:border-gray-700/50 p-8 mt-6 mx-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-4 mb-6">
              {navigationLinks.map((link: { href: string; label: string }) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 font-medium py-2 px-4 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Accessibility Controls */}
            <DarkModeToggleButton />
            {/* Mobile CTA Buttons */}
            <div className="space-y-3">
              <Button
                asChild
                variant="outline"
                className="w-full rounded-xl border-green-200 text-green-700 hover:bg-green-50 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-900/20 transition-all duration-300"
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Users className="h-4 w-4 mr-2" />
                  {t("volunteer")}
                </Link>
              </Button>
              <Button
                asChild
                className="w-full rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg transition-all duration-300"
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