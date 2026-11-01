import type { Locale } from "../../shared/i18n/locales";
import { footerBrandName, footerTagline } from "./footer-content";

export function SiteFooter({ locale }: { locale: Locale }) {
	return (
		<footer className="border-t border-[#e9e0f2] bg-white">
			<div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 sm:px-6 lg:px-8">
				<p className="font-semibold text-[#35204e]">
					{footerBrandName[locale]}
				</p>
				<p dir="ltr" className="text-sm text-[#655771]">
					{footerTagline}
				</p>
			</div>
		</footer>
	);
}
