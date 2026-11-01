import Image from "next/image";
import Link from "next/link";
import type { Locale } from "../../../shared/i18n/locales";
import type { ArticleSummary } from "../types";

type ArticleDetailsProps = {
	article: ArticleSummary;
	locale: Locale;
};
export function ArticleDetails({ article, locale }: ArticleDetailsProps) {
	return (
		<article
			dir={locale === "fa" ? "rtl" : "ltr"}
			className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#e9e0f2] bg-white"
		>
			<div className="relative aspect-video w-full bg-[#f6f2f9]">
				<Image
					src={article.coverImage}
					alt={article.title}
					fill
					sizes="(max-width: 896px) 100vw, 896px"
					className="object-cover"
				/>
			</div>
			<div className="p-5 sm:p-8 lg:p-10">
				<Link
					href={`/${locale}/articles?view=categories&category=${article.category.slug}`}
					className="text-sm font-semibold text-[#70458f] hover:underline"
				>
					{locale === "fa"
						? "← بازگشت به دسته‌بندی"
						: locale === "it"
							? "← Torna alla categoria"
							: "← Back to category"}
				</Link>
				<div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#655771]">
					<span className="rounded-full bg-[#f6f2f9] px-3 py-1 font-semibold text-[#70458f]">
						{article.category.name}
					</span>
					<span>{article.publishedAt}</span>
					<span>{article.readingTime}</span>
				</div>
				<h1 className="mt-5 text-2xl font-bold leading-relaxed text-[#35204e] sm:text-3xl">
					{article.title}
				</h1>
				<p className="mt-6 text-base leading-8 text-[#655771]">
					{article.excerpt}
				</p>
				<div className="mt-8 space-y-5">
					{article.content.map((paragraph, index) => (
						<p
							key={`${article.id}-${index}`}
							className="text-base leading-8 text-[#655771]"
						>
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</article>
	);
}
