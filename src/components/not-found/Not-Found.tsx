// components/not-found/NotFound.tsx
"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

export function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900/80 container">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <div className="animate-particle-bg bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.2)_0%,rgba(234,179,8,0.2)_33%,rgba(6,182,212,0.2)_66%,rgba(168,85,247,0.2)_100%)] opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Animated 404 Text and Message */}
          <div className="space-y-8 text-center md:text-left">
            <h1
              className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-400 to-cyan-500 animate-glitch"
              aria-label={t("errorCode")}
            >
              404
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
              {t("title")}
              <span className="block text-yellow-400">{t("titleHighlight")}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
              {t("description")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4"
              aria-label={t("ctaButton")}
            >
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                {t("ctaButton")}
              </Link>
            </Button>
          </div>

          {/* Right: Futuristic Card with Image */}
          <Card className="relative overflow-hidden border dark:border-foreground/30 shadow-2xl">
            <div className="relative h-72 md:h-[400px]">
              <Image
                src="/JAMES-UCNDK.jpg"
                alt={t("imageAlt")}
                fill
                className="object-cover object-[65%_20%]"
                onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold">{t("cardTitle")}</h3>
                <p className="text-gray-200">{t("cardDescription")}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Accessibility Description */}
        <div className="sr-only">{t("accessibilityDescription")}</div>
      </div>
    </section>
  );
}