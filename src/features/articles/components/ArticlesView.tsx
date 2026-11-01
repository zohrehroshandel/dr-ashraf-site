import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "../../../shared/i18n/locales";
import { getArticlesViewData } from "../services/get-articles-view-data";
import { ArticleCard } from "./ArticleCard";
import { ArticleCategoriesGrid } from "./ArticleCategoriesGrid";
export type ArticlesViewProps = {
	params: Promise<{ locale: string }>;
	searchParams: Promise<{
		view?: string | string[];
		category?: string | string[];
	}>;
};
export async function ArticlesView({
	params,
	searchParams,
}: ArticlesViewProps) {
	const [{ locale }, query] = await Promise.all([params, searchParams]);

	if (!isLocale(locale)) notFound();

	const data = await getArticlesViewData({
		locale,
		view: query.view,
		category: query.category,
	});

	if (!data) notFound();

	return (
		<>
			<h1 className="mb-8 text-3xl font-bold text-[#35204e]">
				{data.pageTitle}
			</h1>

			{data.mode === "categories" && !data.categorySlug && (
				<ArticleCategoriesGrid locale={locale} />
			)}

			{data.mode === "categories" && data.selectedCategory && (
				<section>
					<Link
						href={`/${locale}/articles?view=categories`}
						className="mb-6 inline-block text-sm font-medium text-[#70458f] hover:underline"
					>
						{locale === "fa"
							? "← بازگشت به دسته‌بندی‌ها"
							: locale === "it"
								? "← Torna alle categorie"
								: "← Back to categories"}
					</Link>
					{data.articles.length > 0 ? (
						<div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
							{data.articles.map((article) => (
								<ArticleCard
									key={article.id}
									article={article}
									locale={locale}
								/>
							))}
						</div>
					) : (
						<p className="text-[#655771]">
							{locale === "fa"
								? "هنوز مقاله‌ای در این دسته‌بندی منتشر نشده است."
								: locale === "it"
									? "Non ci sono ancora articoli in questa categoria."
									: "There are no articles in this category yet."}
						</p>
					)}
				</section>
			)}
		</>
	);
}
