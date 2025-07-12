import type React from "react"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next"

import { NextIntlClientProvider } from "next-intl"
import { ThemeProvider } from "next-themes"
import ReactQueryProvider from "./contextProviders/ReactQueryProvider";
import { fileRouter } from "./api/uploadthings/core";
import { extractRouterConfig } from "uploadthing/server";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALLEN+ | Aid Life Learn Environment",
  description:
    "Empowering communities through sustainable development, climate action, and humanitarian support in Eastern DRC and beyond.",
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
          <ReactQueryProvider>
            <ThemeProvider
              attribute="class" 
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
                <NextIntlClientProvider>
                  {children}
                </NextIntlClientProvider>
            </ThemeProvider>
        </ReactQueryProvider>
         
      </body>
    </html>
  )
}
