import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es', 'fr'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
export const localeNames: Record<string, string> = {
  en: "languageEnglish",
  es: "languageSpanish",
  fr: "languageFrench"
 
};

export type Locales = typeof routing.locales[number];