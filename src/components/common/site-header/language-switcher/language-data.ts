import type { LanguageOption } from "./types";
export const SUPPORTED_LANGUAGES: readonly LanguageOption[] = [
	{ code: "fa", label: "FA", nativeName: "فارسی", dir: "rtl" },
	{ code: "en", label: "EN", nativeName: "English", dir: "ltr" },
	{ code: "it", label: "IT", nativeName: "Italiano", dir: "ltr" },
] as const;
export const DEFAULT_LOCALE: LanguageOption = SUPPORTED_LANGUAGES[0];
