import {
	ArticlesView,
	ArticlesViewProps,
} from "@/src/features/articles/components/ArticlesView";
import { Suspense } from "react";
export default function ArticlesPage(props: ArticlesViewProps) {
	return (
		<main className="min-h-screen bg-[#d1c4de]">
			<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<Suspense
					fallback={
						<div
							aria-hidden="true"
							className="h-9 w-48 animate-pulse rounded bg-white/60"
						/>
					}
				>
					<ArticlesView {...props} />
				</Suspense>
			</section>
		</main>
	);
}
