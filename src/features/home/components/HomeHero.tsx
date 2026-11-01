import type { Locale } from "@/src/shared/i18n/locales";
import { heroContent } from "./hero/hero-content";
import { HeroContent } from "./hero/HeroContent";
import { HeroPortrait } from "./hero/HeroPortrait";

export function HomeHero({ locale }: { locale: Locale }) {
	const titleId = "home-hero-heading";
	const content = heroContent[locale];

	return (
		<section
			aria-labelledby={titleId}
			dir={locale === "fa" ? "rtl" : "ltr"}
			className="relative overflow-hidden bg-[#faf8fc] py-12 sm:py-16 lg:py-24"
		>
			<div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
				<HeroContent
					titleId={titleId}
					locale={locale}
					content={content}
				/>
				<HeroPortrait
					imageSrc="/images/dr-ashraf-mohammadkhani.jpg"
					alt={content.portraitAlt}
					tagline="Science · Health · Thought"
				/>
			</div>
		</section>
	);
}
