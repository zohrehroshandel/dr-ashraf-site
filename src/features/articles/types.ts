export type ArticleSummary = {
  content: string[];
	coverImage: string;
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	category: {
		name: string;
		slug: string;
	};
	publishedAt: string;
	readingTime: string;
};
