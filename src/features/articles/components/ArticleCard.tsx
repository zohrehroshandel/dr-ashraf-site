import type { Locale } from "@/src/shared/i18n/locales";
import Image from "next/image";
import Link from "next/link";
import type { ArticleSummary } from "../types";

type ArticleCardProps = {
	article: ArticleSummary;
	locale: Locale;
};

export function ArticleCard({ article, locale }: ArticleCardProps) {
	return (
		<article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e9e0f2] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#70458f] hover:shadow-lg">
			<div className="relative aspect-16/10 w-full shrink-0 overflow-hidden bg-[#f6f2f9]">
				<Image
					src={article.coverImage}
					alt={article.title}
					fill
					sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
					className="object-cover transition-transform duration-300 group-hover:scale-105"
					unoptimized
				/>
			</div>

			<div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
				<div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
					<Link
						href={`/${locale}/articles?category=${article.category.slug}`}
						className="rounded-full bg-[#f6f2f9] px-3 py-1 text-xs font-semibold text-[#70458f] transition-colors hover:bg-[#e9e0f2]"
					>
						{article.category.name}
					</Link>

					<span className="shrink-0 text-xs text-[#655771]">
						{article.readingTime}
					</span>
				</div>

				<h3 className="mt-4 text-lg font-bold leading-snug text-[#35204e] transition-colors group-hover:text-[#70458f] sm:text-xl">
					<Link href={`/${locale}/articles/${article.slug}`}>
						{article.title}
					</Link>
				</h3>

				<p className="mt-3 line-clamp-3 text-sm leading-7 text-[#655771]">
					{article.excerpt}
				</p>

				<div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[#f3edf7] pt-4">
					<time className="text-xs text-[#655771]" dateTime={article.publishedAt}>
						{article.publishedAt}
					</time>

					<Link
						href={`/${locale}/articles/${article.slug}`}
						className="text-xs font-medium text-[#70458f] group-hover:underline sm:text-sm"
					>
						{locale === "fa"
							? "ادامه مطلب ←"
							: locale === "it"
								? "Leggi di più →"
								: "Read more →"}
					</Link>
				</div>
			</div>
		</article>
	);
}
