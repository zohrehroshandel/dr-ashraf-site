import type { Locale } from "../../../shared/i18n/locales";
import type { ArticleSummary } from "../types";
import { ArticleCard } from "./ArticleCard";
type ArticlesGridProps = {
	articles: ArticleSummary[];
	locale: Locale;
};
export function ArticlesGrid({ articles, locale }: ArticlesGridProps) {
	return (
		<div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
			{articles.map((article) => (
				<ArticleCard key={article.id} article={article} locale={locale} />
			))}
		</div>
	);
}
