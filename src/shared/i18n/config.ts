import type { Locale, LocaleConfig } from "./types";

export const LOCALES: readonly LocaleConfig[] = [
	{ code: "fa", label: "FA", nativeName: "فارسی", dir: "rtl" },
	{ code: "en", label: "EN", nativeName: "English", dir: "ltr" },
	{ code: "it", label: "IT", nativeName: "Italiano", dir: "ltr" },
] as const;

export const DEFAULT_LOCALE: Locale = "fa";

export function getLocaleConfig(locale: string): LocaleConfig {
	const found = LOCALES.find((item) => item.code === locale);
	return found ?? LOCALES[0];
}
