import type { Locale } from "@/src/shared/i18n/locales";
import { AboutSection } from "./AboutSection";
import { HomeHero } from "./HomeHero";
import { TopicsSection } from "./TopicsSection";

export function HomeView({ locale }: { locale: Locale }) {
	return (
		<main className="min-h-screen bg-[#d1c4de]">
			<HomeHero locale={locale} />
			<TopicsSection locale={locale} />
			<AboutSection locale={locale} />
		</main>
	);
}
