import type { Locale } from "../../../shared/i18n/locales";
import { topicsContent } from "../../data/topics";
import { TopicCard } from "./TopicCard";
export function TopicsSection({ locale }: { locale: Locale }) {
	const { heading, items } = topicsContent[locale];
	return (
		<section
			aria-labelledby="topics-heading"
			className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8"
		>
			<h2
				id="topics-heading"
				className="mb-6 text-2xl font-bold text-[#35204e]"
			>
				{heading}
			</h2>

			<div className="grid gap-5 md:grid-cols-2">
				{items.map((topic) => (
					<TopicCard key={topic.id} topic={topic} />
				))}
			</div>
		</section>
	);
}
