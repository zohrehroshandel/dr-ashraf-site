import type { Locale } from "@/src/shared/i18n/locales";
import type { ArticleSummary } from "../types";
import { getArticles } from "./get-articles";
export async function getArticleBySlug(
	locale: Locale,
	slug: string,
): Promise<ArticleSummary | undefined> {
	const articles = await getArticles(locale);

	return articles.find((article) => article.slug === slug);
}
