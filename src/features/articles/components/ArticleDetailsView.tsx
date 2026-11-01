import { notFound } from "next/navigation";
import { isLocale } from "../../../shared/i18n/locales";
import { getArticleBySlug } from "../services/get-article-by-slug";
import { ArticleDetails } from "./ArticleDetails";

export type ArticleDetailsViewProps = {
	params: Promise<{
		locale: string;
		slug: string;
	}>;
};

export async function ArticleDetailsView({
	params,
}: ArticleDetailsViewProps) {
	const { locale, slug } = await params;

	if (!isLocale(locale)) notFound();

	const article = await getArticleBySlug(locale, slug);

	if (!article) notFound();

	return <ArticleDetails article={article} locale={locale} />;
}
