import type { Locale } from "../../../shared/i18n/locales";
import { headerContent } from "./header-content";
export function SiteBrand({ locale }: { locale: Locale }) {
	const { brandTitle, brandSubtitle } = headerContent[locale];

	return (
		<div className="flex min-w-0 items-center gap-3">
			<span
				aria-hidden="true"
				className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#4b286b] text-2xl font-bold text-white"
			>
				ا
			</span>
			<div className="min-w-0">
				<p className="truncate text-base font-bold text-[#2b1840] sm:text-xl">
					{brandTitle}
				</p>
				<p
					dir={locale === "fa" ? "rtl" : "ltr"}
					className="text-xs text-[#705d80] sm:text-sm"
				>
					{brandSubtitle}
				</p>
			</div>
		</div>
	);
}
