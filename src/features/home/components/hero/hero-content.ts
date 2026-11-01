import { Locale } from "@/src/shared/i18n/locales";


export type HeroCopy = {
	eyebrow: string;
	firstLine: string;
	secondLine: string;
	description: string;
	portraitAlt: string;
};

export const heroContent = {
	fa: {
		eyebrow: "وب‌سایت علمی و فرهنگی دکتر اشرف محمدخانی",
		firstLine: "علم برای شناخت بهتر زندگی؛",
		secondLine: "اندیشه برای زیستن مسئولانه‌تر",
		description:
			"فضایی برای مطالعه و گفت‌وگو درباره علم، سلامت و اندیشه؛ از موضوعات پژوهشی مانند ژنتیک و ایمنی‌شناسی تا مباحث فرهنگی و اندیشه اسلامی و شیعی.",
		portraitAlt: "پرتره دکتر اشرف محمدخانی",
	},
	en: {
		eyebrow: "Dr. Ashraf Mohammadkhani’s Scientific and Cultural Website",
		firstLine: "Science for understanding life better;",
		secondLine: "thought for living more responsibly",
		description:
			"A space to explore and discuss science, health, and thought—from research topics such as genetics and immunology to culture and Islamic and Shia thought.",
		portraitAlt: "Portrait of Dr. Ashraf Mohammadkhani",
	},
	it: {
		eyebrow: "Il sito scientifico e culturale di Dr. Ashraf Mohammadkhani",
		firstLine: "La scienza per comprendere meglio la vita;",
		secondLine: "il pensiero per vivere con maggiore responsabilità",
		description:
			"Uno spazio per studiare e dialogare su scienza, salute e pensiero: dalla genetica e dall’immunologia alla cultura e al pensiero islamico e sciita.",
		portraitAlt: "Ritratto di Dr. Ashraf Mohammadkhani",
	},
} satisfies Record<Locale, HeroCopy>;
