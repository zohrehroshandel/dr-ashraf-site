import type { Locale } from "../../../shared/i18n/locales";

export const headerContent = {
	fa: {
		brandTitle: "دکتر اشرف محمدخانی",
		brandSubtitle: "علم، سلامت و اندیشه",
	},
	en: {
		brandTitle: "Dr. Ashraf Mohammadkhani",
		brandSubtitle: "Science, Health & Thought",
	},
	it: {
		brandTitle: "Dott.ssa Ashraf Mohammadkhani",
		brandSubtitle: "Scienza, Salute e Pensiero",
	},
} satisfies Record<
	Locale,
	{ brandTitle: string; brandSubtitle: string }
>;
