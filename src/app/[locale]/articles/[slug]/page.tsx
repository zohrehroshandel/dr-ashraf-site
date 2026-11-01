import {
	ArticleDetailsView,
	type ArticleDetailsViewProps,
} from "@/src/features/articles/components/ArticleDetailsView";
import { Suspense } from "react";
export default function ArticlePage(props: ArticleDetailsViewProps) {
	return (
		<main className="min-h-screen bg-[#d1c4de]">
			<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<Suspense
					fallback={
						<div
							aria-hidden="true"
							className="mx-auto h-96 max-w-4xl animate-pulse rounded-2xl bg-white/60"
						/>
					}
				>
					<ArticleDetailsView {...props} />
				</Suspense>
			</section>
		</main>
	);
}
