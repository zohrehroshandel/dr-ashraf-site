import type { Locale } from "../../../shared/i18n/locales";
import { aboutContent } from "../data/about-content";

export function AboutSection({ locale }: { locale: Locale }) {
	const { eyebrow, title, description, tags } = aboutContent[locale];

	return (
		<section
			aria-labelledby="about-site-heading"
			className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8"
		>
			<div className="grid gap-8 rounded-3xl border border-[#e9e0f2] bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
				<div className="max-w-2xl">
					<p className="mb-3 text-sm font-semibold text-[#70458f]">
						{eyebrow}
					</p>

					<h2
						id="about-site-heading"
						className="text-2xl font-bold leading-relaxed text-[#35204e] sm:text-3xl"
					>
						{title}
					</h2>

					<p className="mt-4 leading-8 text-[#655771]">
						{description}
					</p>
				</div>

				<div
					aria-hidden="true"
					className="flex flex-wrap gap-2 lg:max-w-56 lg:justify-end"
				>
					{tags.map((tag) => (
						<span
							key={tag}
							className="rounded-full bg-[#f4eef9] px-4 py-2 text-sm text-[#4b286b]"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}

