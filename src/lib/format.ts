import type { Locale } from "../i18n/ui";

const tags: Record<Locale, string> = {
  en: "en-US",
  es: "es-CO",
};

export function formatMonthYear(isoDate: string, locale: Locale): string {
  return new Intl.DateTimeFormat(tags[locale], {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

export function formatRange(start: string, end: string, locale: Locale): string {
  return `${formatMonthYear(start, locale)} – ${formatMonthYear(end, locale)}`;
}
