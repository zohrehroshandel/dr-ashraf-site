export const locales = ["fa", "en", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export function isLocale(value: string): value is Locale {
	return locales.some((locale) => locale === value);
}
export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}
