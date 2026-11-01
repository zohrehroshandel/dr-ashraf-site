import type { Locale } from "@/src/shared/i18n/locales";
import type { ArticleSummary } from "../types";

const articleCovers = {
	genetics: "/images/63.jpg",
	biochemistry: "/images/63.jpg",
} as const;

const mockArticles: Record<Locale, ArticleSummary[]> = {
	fa: [
		{
			id: "1",
			slug: "epigenetics-and-lifestyle",
			title: "نقش اپی‌ژنتیک در سبک زندگی و سلامت سلولی",
			excerpt:
				"بررسی چگونگی تأثیر تغذیه، استرس و محیط زیست بر بیان ژن‌ها بدون تغییر در توالی DNA و راهکارهای ارتقای سلامت.",
			category: { name: "ژنتیک", slug: "genetics" },
			publishedAt: "۱۴۰۳/۰۸/۱۰",
			readingTime: "۵ دقیقه مطالعه",
			coverImage: articleCovers.genetics,
			content: [
				"اپی‌ژنتیک به سازوکارهایی گفته می‌شود که بر فعالیت ژن‌ها اثر می‌گذارند، بی‌آنکه توالی DNA را تغییر دهند. این سازوکارها در تعامل میان سلول و محیط نقش دارند.",
				"تغذیه، خواب، فعالیت بدنی و عوامل محیطی از موضوعاتی هستند که در پژوهش‌های اپی‌ژنتیک بررسی می‌شوند. اثر این عوامل به شرایط فرد و نوع بافت وابسته است و نباید آن را به یک رابطهٔ ساده و قطعی تقلیل داد.",
			],
		},
		{
			id: "2",
			slug: "cellular-metabolism-aging",
			title: "متابولیسم سلولی و رازهای طول عمر سالم",
			excerpt:
				"نگاهی عمیق به فرآیندهای بیوشیمیایی میتوکندری و نقش آنتی‌اکسیدان‌ها در کند کردن روند پیری سلولی.",
			category: { name: "بیوشیمی", slug: "biochemistry" },
			publishedAt: "۱۴۰۳/۰۸/۰۲",
			readingTime: "۷ دقیقه مطالعه",
			coverImage: articleCovers.biochemistry,
			content: [
				"میتوکندری‌ها در تولید انرژی سلولی نقش دارند و عملکردشان با فرایندهای گوناگون سلولی در ارتباط است. بررسی این فرایندها می‌تواند بخشی از شناخت ما دربارهٔ تغییرات مرتبط با افزایش سن باشد.",
				"پیری فرایندی پیچیده است و به یک عامل یا مسیر زیستی محدود نمی‌شود. پژوهش دربارهٔ متابولیسم سلولی، استرس اکسیداتیو و سازوکارهای ترمیم همچنان در حال گسترش است.",
			],
		},
	],
	en: [
		{
			id: "1",
			slug: "epigenetics-and-lifestyle",
			title: "The Role of Epigenetics in Lifestyle and Cellular Health",
			excerpt:
				"Exploring how nutrition, stress, and environment affect gene expression without altering DNA sequences.",
			category: { name: "Genetics", slug: "genetics" },
			publishedAt: "2024/10/31",
			readingTime: "5 min read",
			coverImage: articleCovers.genetics,
			content: [
				"Epigenetics examines mechanisms that influence gene activity without changing the DNA sequence. These mechanisms are part of the interaction between cells and their environment.",
				"Nutrition, sleep, physical activity, and environmental exposures are among the factors studied in epigenetic research. Their effects depend on individual circumstances and should not be reduced to simple, universal claims.",
			],
		},
		{
			id: "2",
			slug: "cellular-metabolism-aging",
			title: "Cellular Metabolism and the Secrets of Healthy Longevity",
			excerpt:
				"An in-depth look at mitochondrial biochemical processes and antioxidant impacts on cellular aging.",
			category: { name: "Biochemistry", slug: "biochemistry" },
			publishedAt: "2024/10/23",
			readingTime: "7 min read",
			coverImage: articleCovers.biochemistry,
			content: [
				"Mitochondria contribute to cellular energy production and are connected to a range of cellular processes. Studying these processes can help researchers understand some biological changes associated with aging.",
				"Aging is complex and cannot be explained by a single factor or pathway. Research into cellular metabolism, oxidative stress, and repair mechanisms continues to evolve.",
			],
		},
	],
	it: [
		{
			id: "1",
			slug: "epigenetics-and-lifestyle",
			title:
				"Il ruolo dell'epigenetica nello stile di vita e nella salute cellulare",
			excerpt:
				"Come nutrizione, stress e ambiente influenzano l'espressione genica senza alterare la sequenza del DNA.",
			category: { name: "Genetica", slug: "genetics" },
			publishedAt: "31/10/2024",
			readingTime: "5 min di lettura",
			coverImage: articleCovers.genetics,
			content: [
				"L’epigenetica studia i meccanismi che influenzano l’attività dei geni senza modificare la sequenza del DNA. Questi meccanismi partecipano all’interazione tra le cellule e il loro ambiente.",
				"Alimentazione, sonno, attività fisica e fattori ambientali sono tra gli aspetti esaminati dalla ricerca epigenetica. I loro effetti dipendono dal contesto individuale e non vanno presentati come relazioni semplici e universali.",
			],
		},
		{
			id: "2",
			slug: "cellular-metabolism-aging",
			title: "Metabolismo cellulare e segreti della longevità sana",
			excerpt:
				"Uno sguardo approfondito ai processi biochimici mitocondriali e agli antiossidanti contro l'invecchiamento.",
			category: { name: "Biochimica", slug: "biochemistry" },
			publishedAt: "23/10/2024",
			readingTime: "7 min di lettura",
			coverImage: articleCovers.biochemistry,
			content: [
				"I mitocondri contribuiscono alla produzione di energia cellulare e sono coinvolti in diversi processi cellulari. Studiare questi processi può aiutare a comprendere alcuni cambiamenti biologici associati all’invecchiamento.",
				"L’invecchiamento è un fenomeno complesso e non può essere spiegato da un unico fattore o percorso. La ricerca sul metabolismo cellulare, sullo stress ossidativo e sui meccanismi di riparazione è in continua evoluzione.",
			],
		},
	],
};

export async function getArticles(
	locale: Locale,
	categorySlug?: string,
): Promise<ArticleSummary[]> {
	const localizedArticles = mockArticles[locale];

	if (!categorySlug) {
		return localizedArticles;
	}

	return localizedArticles.filter(
		(article) => article.category.slug === categorySlug,
	);
}
