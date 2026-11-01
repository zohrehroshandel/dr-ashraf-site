import { Topic } from "../../data/topics";


type TopicCardProps = {
	topic: Topic;
};

export function TopicCard({ topic }: TopicCardProps) {
	return (
		<article className="h-full rounded-2xl border border-[#e9e0f2] bg-white p-6 shadow-sm">
			<h3 className="text-xl font-bold text-[#4b286b]">
				{topic.title}
			</h3>
			<p className="mt-3 leading-8 text-[#655771]">
				{topic.description}
			</p>
		</article>
	);
}
