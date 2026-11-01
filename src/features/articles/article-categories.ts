import { Locale } from "@/src/shared/i18n/locales";
type ArticleCategoryContent = {
	slug: string;
	name: Record<Locale, string>;
	description: Record<Locale, string>;
};
export const articleCategories: ArticleCategoryContent[] = [
	{
		slug: "genetics",
		name: {
			fa: "ژنتیک",
			en: "Genetics",
			it: "Genetica",
		},
		description: {
			fa: "مقالات مرتبط با ژنتیک و اپی‌ژنتیک",
			en: "Articles about genetics and epigenetics",
			it: "Articoli su genetica ed epigenetica",
		},
	},
	{
		slug: "biochemistry",
		name: {
			fa: "بیوشیمی",
			en: "Biochemistry",
			it: "Biochimica",
		},
		description: {
			fa: "مقالات مرتبط با بیوشیمی و سلامت سلولی",
			en: "Articles about biochemistry and cellular health",
			it: "Articoli su biochimica e salute cellulare",
		},
	},
	{
		slug: "immunology-and-disease",
		name: {
			fa: "ایمنی‌شناسی در بیماری‌ها",
			en: "Immunology & Disease",
			it: "Immunologia e malattie",
		},
		description: {
			fa: "مقالات مرتبط با دستگاه ایمنی و بیماری‌ها",
			en: "Articles about the immune system and disease",
			it: "Articoli sul sistema immunitario e le malattie",
		},
	},
];
