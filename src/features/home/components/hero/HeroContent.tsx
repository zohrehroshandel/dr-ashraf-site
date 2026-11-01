import type { Locale } from "@/src/shared/i18n/locales";
import type { HeroCopy } from "./hero-content";

type HeroContentProps = {
	titleId: string;
	locale: Locale;
	content: HeroCopy;
};

export function HeroContent({
	titleId,
	locale,
	content,
}: HeroContentProps) {
	return (
		<div
			className={`max-w-2xl text-center ${
				locale === "fa" ? "lg:text-right" : "lg:text-left"
			}`}
		>
			<p className="inline-block rounded-full bg-[#f3ecf8] px-4 py-1.5 text-xs font-semibold text-[#70458f] sm:text-sm">
				{content.eyebrow}
			</p>

			<h1
				id={titleId}
				className="mt-6 text-3xl font-extrabold leading-relaxed text-[#2c1743] sm:text-4xl sm:leading-[1.4] lg:text-5xl lg:leading-[1.35]"
			>
				{content.firstLine}
				<br className="hidden sm:inline" /> {content.secondLine}
			</h1>

			<p className="mt-6 text-base leading-8 text-[#5c4f69] sm:text-lg sm:leading-9">
				{content.description}
			</p>
		</div>
	);
}

