import { Suspense } from "react";
import type { Locale } from "../../shared/i18n/locales";
import { SiteBrand } from "./site-header/SiteBrand";
import { SiteNavigation } from "./site-header/SiteNavigation";
import { LanguageSwitcher } from "./site-header/language-switcher/LanguageSwitcher";

export function SiteHeader({ locale }: { locale: Locale }) {
	return (
		<header className="border-b border-[#e9e0f2] bg-white">
			<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
				<SiteBrand locale={locale} />

				<div className="flex items-center gap-3">
					<Suspense fallback={<div aria-hidden="true" className="h-10 w-20" />}>
						<LanguageSwitcher />
					</Suspense>
				</div>
			</div>
			<SiteNavigation locale={locale} />
		</header>
	);
}
