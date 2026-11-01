import type { Locale } from "../../../shared/i18n/locales";
import { articleCategories } from "../article-categories";
import { articlesContent, type ArticlesViewMode } from "../articles-content";
import { getArticles } from "./get-articles";
type GetArticlesViewDataParams = {
	locale: Locale;
	view?: string | string[];
	category?: string | string[];
};
export async function getArticlesViewData({
	locale,
	view,
	category,
}: GetArticlesViewDataParams) {
	const mode: ArticlesViewMode = view === "search" ? "search" : "categories";
	const categorySlug = typeof category === "string" ? category : undefined;

	const selectedCategory = articleCategories.find(
		(item) => item.slug === categorySlug,
	);
	if (mode === "categories" && categorySlug && !selectedCategory) {
		return null;
	}
	const articles =
		mode === "categories" && selectedCategory
			? await getArticles(locale, selectedCategory.slug)
			: [];
	const pageTitle =
		mode === "search"
			? articlesContent[locale].search
			: (selectedCategory?.name[locale] ?? articlesContent[locale].categories);
	return {
		mode,
		categorySlug,
		selectedCategory,
		articles,
		pageTitle,
	};
}
