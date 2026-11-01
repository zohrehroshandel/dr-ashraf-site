import { Locale } from "@/src/shared/i18n/locales";


export type Topic = {
	id: "science" | "thought";
	title: string;
	description: string;
};

type TopicsContent = {
	heading: string;
	items: readonly Topic[];
};

export const topicsContent = {
	fa: {
		heading: "حوزه‌های محتوایی",
		items: [
			{
				id: "science",
				title: "علم و پژوهش",
				description:
					"مطالبی درباره ژنتیک، بیوشیمی، ایمنی‌شناسی و پیوند پژوهش با سلامت جامعه.",
			},
			{
				id: "thought",
				title: "اندیشه اسلامی و شیعی",
				description:
					"آشنایی با اندیشمندان، آثار و دیدگاه‌های فرهنگی و اجتماعی، همراه با منابع قابل پیگیری.",
			},
		],
	},
	en: {
		heading: "Areas of Focus",
		items: [
			{
				id: "science",
				title: "Science and Research",
				description:
					"Explore genetics, biochemistry, immunology, and the connection between research and public health.",
			},
			{
				id: "thought",
				title: "Islamic and Shia Thought",
				description:
					"Discover thinkers, works, and cultural and social perspectives, with sources you can explore further.",
			},
		],
	},
	it: {
		heading: "Aree Tematiche",
		items: [
			{
				id: "science",
				title: "Scienza e Ricerca",
				description:
					"Approfondimenti su genetica, biochimica, immunologia e il rapporto tra ricerca e salute pubblica.",
			},
			{
				id: "thought",
				title: "Pensiero Islamico e Sciita",
				description:
					"Uno spazio dedicato a pensatori, opere e prospettive culturali e sociali, con fonti da approfondire.",
			},
		],
	},
} satisfies Record<Locale, TopicsContent>;
