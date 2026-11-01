import { locales } from "@/src/shared/i18n/locales";
import { notFound } from "next/navigation";
import { HomeView } from "../../features/home/components/HomeView";
function isLocale(value: string): value is (typeof locales)[number] {
	return locales.some((locale) => locale === value);
}
export default async function HomePage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	if (!isLocale(locale)) {
		notFound();
	}
	return <HomeView locale={locale} />;
}
