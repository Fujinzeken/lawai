import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "uz", "ru"],
  defaultLocale: "uz",
  localePrefix: "as-needed",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
