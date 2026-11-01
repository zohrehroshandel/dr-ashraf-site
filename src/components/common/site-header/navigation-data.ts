import type { Locale } from "../../../shared/i18n/locales";
import type { SiteNavigationGroup } from "./types";

type LocalizedLabel = Record<Locale, string>;

type NavigationContentGroup = {
	label: LocalizedLabel;
	items: {
		label: LocalizedLabel;
		href: string;
	}[];
};

const navigationContent: NavigationContentGroup[] = [
	{
		label: {
			fa: "علم و پژوهش",
			en: "Science & Research",
			it: "Scienza e ricerca",
		},
		items: [
			{
				label: { fa: "ژنتیک", en: "Genetics", it: "Genetica" },
				href: "/science/genetics",
			},
			{
				label: { fa: "بیوشیمی", en: "Biochemistry", it: "Biochimica" },
				href: "/science/biochemistry",
			},
			{
				label: {
					fa: "ایمنی‌شناسی در بیماری‌ها",
					en: "Immunology & Disease",
					it: "Immunologia e malattie",
				},
				href: "/science/immunology-and-disease",
			},
		],
	},
	{
		label: {
			fa: "اندیشه اسلامی و شیعی",
			en: "Islamic & Shia Thought",
			it: "Pensiero islamico e sciita",
		},
		items: [
			{
				label: { fa: "متفکران", en: "Thinkers", it: "Pensatori" },
				href: "/islamic-thought/thinkers",
			},
			{
				label: { fa: "آثار", en: "Works", it: "Opere" },
				href: "/islamic-thought/works",
			},
			{
				label: {
					fa: "دیدگاه‌های فرهنگی و اجتماعی",
					en: "Cultural & Social Perspectives",
					it: "Prospettive culturali e sociali",
				},
				href: "/islamic-thought/cultural-and-social-views",
			},
		],
	},
	{
		label: {
			fa: "جامعه و فرهنگ",
			en: "Society & Culture",
			it: "Società e cultura",
		},
		items: [
			{
				label: {
					fa: "سلامت عمومی",
					en: "Public Health",
					it: "Salute pubblica",
				},
				href: "/society/public-health",
			},
			{
				label: { fa: "اخلاق", en: "Ethics", it: "Etica" },
				href: "/society/ethics",
			},
			{
				label: {
					fa: "مسئولیت اجتماعی",
					en: "Social Responsibility",
					it: "Responsabilità sociale",
				},
				href: "/society/social-responsibility",
			},
		],
	},
	{
		label: { fa: "درباره من", en: "About Me", it: "Chi sono" },
		items: [
			{
				label: { fa: "زندگی‌نامه", en: "Biography", it: "Biografia" },
				href: "/about/biography",
			},
			{
				label: {
					fa: "سوابق",
					en: "Academic Background",
					it: "Percorso accademico",
				},
				href: "/about/academic-background",
			},
			{
				label: {
					fa: "مسیر علمی و فکری",
					en: "Scientific & Intellectual Journey",
					it: "Percorso scientifico e intellettuale",
				},
				href: "/about/scientific-and-intellectual-journey",
			},
		],
	},
	{
		label: {
			fa: "مقالات و منابع",
			en: "Articles & Resources",
			it: "Articoli e risorse",
		},
		items: [
			{
				label: {
					fa: "جست‌وجوی مقالات",
					en: "Search Articles",
					it: "Cerca articoli",
				},
				href: "/articles?view=search",
			},
			{
				label: {
					fa: "دسته‌بندی مقالات",
					en: "Article Categories",
					it: "Categorie degli articoli",
				},
				href: "/articles?view=categories",
			},

			{
				label: { fa: "ژنتیک", en: "Genetics", it: "Genetica" },
				href: "/articles?view=categories&category=genetics",
			},
			{
				label: { fa: "بیوشیمی", en: "Biochemistry", it: "Biochimica" },
				href: "/articles?view=categories&category=biochemistry",
			},
			{
				label: {
					fa: "ایمنی‌شناسی در بیماری‌ها",
					en: "Immunology & Disease",
					it: "Immunologia e malattie",
				},
				href: "/articles?view=categories&category=immunology-and-disease",
			},
			{
				label: {
					fa: "منابع استنادی",
					en: "References",
					it: "Riferimenti bibliografici",
				},
				href: "/references",
			},
		],
	},
	{
		label: {
			fa: "تماس و همکاری",
			en: "Contact & Collaboration",
			it: "Contatti e collaborazioni",
		},
		items: [
			{
				label: {
					fa: "ارتباط علمی",
					en: "Academic Contact",
					it: "Contatto accademico",
				},
				href: "/contact?type=academic-communication",
			},
			{
				label: {
					fa: "پیشنهاد موضوع",
					en: "Suggest a Topic",
					it: "Proponi un argomento",
				},
				href: "/contact?type=topic-suggestion",
			},
			{
				label: {
					fa: "همکاری پژوهشی",
					en: "Research Collaboration",
					it: "Collaborazione di ricerca",
				},
				href: "/contact?type=research-collaboration",
			},
		],
	},
];

export const navigationAriaLabel: LocalizedLabel = {
	fa: "منوی اصلی",
	en: "Main navigation",
	it: "Navigazione principale",
};

export function getSiteNavigation(locale: Locale): SiteNavigationGroup[] {
	return navigationContent.map((group) => ({
		label: group.label[locale],
		items: group.items.map((item) => ({
			label: item.label[locale],
			href: item.href,
		})),
	}));
}
