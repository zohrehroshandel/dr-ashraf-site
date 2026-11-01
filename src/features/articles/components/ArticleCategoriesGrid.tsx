import Link from "next/link";
import type { Locale } from "../../../shared/i18n/locales";
import { articleCategories } from "../article-categories";

type ArticleCategoriesGridProps = {
	locale: Locale;
};

export function ArticleCategoriesGrid({
	locale,
}: ArticleCategoriesGridProps) {
	return (
		<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{articleCategories.map((category) => (
				<Link
					key={category.slug}
					href={`/${locale}/articles?view=categories&category=${category.slug}`}
					className="rounded-2xl border border-[#e9e0f2] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#70458f] hover:shadow-lg"
				>
					<h2 className="text-xl font-bold text-[#35204e]">
						{category.name[locale]}
					</h2>
					<p className="mt-3 text-sm leading-7 text-[#655771]">
						{category.description[locale]}
					</p>
				</Link>
			))}
		</div>
	);
}
