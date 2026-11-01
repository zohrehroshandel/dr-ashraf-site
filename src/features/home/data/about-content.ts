import type { Locale } from "../../../shared/i18n/locales";
type AboutContent = {
	eyebrow: string;
	title: string;
	description: string;
	tags: readonly string[];
};
export const aboutContent = {
	fa: {
		eyebrow: "دربارهٔ این وب‌سایت",
		title: "بستری برای آشنایی، یادگیری و گفت‌وگو",
		description:
			"این وب‌سایت با هدف گردآوری مطالب علمی و فرهنگی، معرفی حوزه‌های پژوهشی و فراهم‌کردن فضایی برای تبادل نظر و همکاری طراحی شده است.",
		tags: ["علم", "فرهنگ", "گفت‌وگو"],
	},
	en: {
		eyebrow: "About this website",
		title: "A space to discover, learn, and discuss",
		description:
			"This website brings together scientific and cultural content, introduces areas of research, and offers a space for exchanging ideas and collaborating.",
		tags: ["Science", "Culture", "Dialogue"],
	},
	it: {
		eyebrow: "Informazioni sul sito",
		title: "Uno spazio per conoscere, imparare e dialogare",
		description:
			"Questo sito raccoglie contenuti scientifici e culturali, presenta ambiti di ricerca e offre uno spazio per lo scambio di idee e la collaborazione.",
		tags: ["Scienza", "Cultura", "Dialogo"],
	},
} satisfies Record<Locale, AboutContent>;
