// components/LocaleSwitcherSelect.tsx
"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, Locales, localeNames } from "@/i18n/routing";
import { ReactNode, useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import LanguageLoadingAnimation from "./LanguageLoadingAnimation";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const t = useTranslations("LanguageSelect");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState(defaultValue);

  function onSelectChange(nextLocale: string) {
    setIsLoading(true);
    setSelectedLocale(nextLocale); // Track the selected locale
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as Locales });
      setTimeout(() => setIsLoading(false), 1200); 
    });
  }

  return (
    <div className="relative">
      {(isPending || isLoading) && <LanguageLoadingAnimation locale={selectedLocale} />}
      <Select
        defaultValue={defaultValue}
        onValueChange={onSelectChange}
        disabled={isPending || isLoading}
      >
        <SelectTrigger
          className="w-fit h-8 border-none bg-transparent"
          aria-label={label}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {routing.locales.map((locale) => (
            <SelectItem key={locale} value={locale}>
              {t(`${localeNames[locale]}`)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}