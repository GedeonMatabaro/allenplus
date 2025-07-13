// components/donations/HeroSection.tsx
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Leaf, ArrowRight } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("DonationPage.Hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home2.jpg"
          alt={t("imageAlt")}
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
      </div>

      {/* Floating Nature Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none hidden md:block">
        <div className="absolute top-16 left-8 w-6 h-6 text-green-200/20 animate-float">
          <Leaf className="w-full h-full rotate-30" />
        </div>
        <div className="absolute bottom-24 right-12 w-8 h-8 text-green-200/20 animate-float delay-1000">
          <Leaf className="w-full h-full -rotate-45" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 py-12 mt-16 max-w-6xl mx-auto">
        {/* Mission Badge */}
        <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-white/20 shadow-md">
          <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
            <Heart className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-medium text-white tracking-wide">{t("missionBadge")}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
          <span className="block text-white">{t("heading.line1")}</span>
          <span className="block bg-gradient-to-r from-green-200 to-teal-200 bg-clip-text text-transparent">
            {t("heading.line2")}
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          {t("description")}
        </p>

        {/* Impact Statistics */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-4xl mx-auto border border-white/20 shadow-lg mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
            <div className="text-center group">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{t("stats.lives.value")}</div>
              <p className="text-white/90 font-medium">{t("stats.lives.title")}</p>
              <p className="text-white/70 text-sm">{t("stats.lives.description")}</p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{t("stats.children.value")}</div>
              <p className="text-white/90 font-medium">{t("stats.children.title")}</p>
              <p className="text-white/70 text-sm">{t("stats.children.description")}</p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{t("stats.youth.value")}</div>
              <p className="text-white/90 font-medium">{t("stats.youth.title")}</p>
              <p className="text-white/70 text-sm">{t("stats.youth.description")}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-5 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 border border-green-400/40"
            onClick={() => document.getElementById("payment-details")?.scrollIntoView({ behavior: "smooth" })}
          >
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>{t("cta.button")}</span>
              <ArrowRight className="h-5 w-5" />
            </div>
          </Button>
          <div className="text-white/80 text-sm font-medium flex items-center space-x-2">
            <Shield className="h-4 w-4 text-green-300" />
            <span>{t("cta.secure")}</span>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-10 max-w-2xl mx-auto">
          <blockquote className="text-white/90 italic text-lg font-light leading-relaxed">
            {t("quote.text")}
          </blockquote>
          <p className="text-white text-sm mt-2">{t("quote.author")}</p>
        </div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-200 to-transparent z-20"></div>
    </section>
  );
}