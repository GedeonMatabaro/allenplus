// components/LanguageLoadingAnimation.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { localeNames } from "@/i18n/routing";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type Props = {
  locale: string;
};

export default function LanguageLoadingAnimation({ locale }: Props) {
  const t = useTranslations("LanguageSelect");
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted on the client to avoid hydration issues
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Particle animation variants
  const particleVariants = {
    initial: { scale: 0, opacity: 0, x: 0, y: 0 },
    animate: (i: number) => ({
      scale: [0, 1, 0],
      opacity: [0, 0.8, 0],
      x: Math.cos(i * Math.PI * 0.5) * 50,
      y: Math.sin(i * Math.PI * 0.5) * 50,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut",
      },
    }),
  };

  // Gradient background wave
  const waveVariants = {
    animate: {
      background: [
        "radial-gradient(circle, rgba(138,43,226,0.2), rgba(30,144,255,0.2), rgba(255,105,180,0.2))",
        "radial-gradient(circle, rgba(30,144,255,0.2), rgba(255,105,180,0.2), rgba(138,43,226,0.2))",
        "radial-gradient(circle, rgba(255,105,180,0.2), rgba(138,43,226,0.2), rgba(30,144,255,0.2))",
      ],
      transition: { duration: 3, repeat: Infinity, ease: "linear" },
    },
  };

  const animationContent = (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="alert"
        aria-busy="true"
      >
        <motion.div
          className="relative flex flex-col items-center"
          variants={waveVariants}
          animate="animate"
          style={{
            padding: "2rem",
            borderRadius: "1.5rem",
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Globe with glow and 3D rotation */}
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.1, 1],
              rotateX: [0, 10, 0],
              rotateY: [0, 10, 0],
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.5), transparent)",
                filter: "blur(10px)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            <Globe className="w-16 h-16 text-white relative z-10" />
          </motion.div>

          {/* Orbiting particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              variants={particleVariants}
              initial="initial"
              animate="animate"
              custom={i}
            />
          ))}

          {/* Language name with bounce effect */}
          <motion.span
            className="mt-4 text-white text-lg font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            {t(localeNames[locale])}
          </motion.span>

          {/* Progress bar with gradient */}
          <motion.div
            className="mt-4 h-1 w-32 rounded-full overflow-hidden"
            animate={{
              background: [
                "linear-gradient(90deg, #8a2be2, #1e90ff, #ff69b4)",
                "linear-gradient(90deg, #ff69b4, #8a2be2, #1e90ff)",
                "linear-gradient(90deg, #1e90ff, #ff69b4, #8a2be2)",
              ],
              transition: { duration: 2, repeat: Infinity, ease: "linear" },
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  // Render the animation in a portal to ensure it covers the entire page
  return mounted ? createPortal(animationContent, document.body) : null;
}