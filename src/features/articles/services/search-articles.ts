import type { ArticleSummary } from "../types";

function normalizeSearchText(value: string): string {
	return value
		.normalize("NFKC")
		.replace(/[\u064B-\u065F\u0670]/g, "")
		.replace(/\u0640/g, "")
		.replace(/[يى]/g, "ی")
		.replace(/ك/g, "ک")
		.replace(/\s+/g, " ")
		.trim()
		.toLowerCase();
}

export function searchArticles(
	articles: readonly ArticleSummary[],
	query: string,
): ArticleSummary[] {
	const normalizedQuery = normalizeSearchText(query);

	if (!normalizedQuery) {
		return [...articles];
	}

	return articles.filter((article) => {
		const searchableText = [
			article.title,
			article.excerpt,
			article.category.name,
			article.slug,
			...article.content,
		].join(" ");

		return normalizeSearchText(searchableText).includes(normalizedQuery);
	});
}
