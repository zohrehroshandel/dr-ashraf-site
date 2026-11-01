import Link from "next/link";
import type { Locale } from "../../../shared/i18n/locales";
import type { SiteNavigationGroup } from "./types";
type NavigationGroupProps = {
	group: SiteNavigationGroup;
	locale: Locale;
	menuId: string;
	isOpen: boolean;
	onToggle: () => void;
	onNavigate: () => void;
};
export function NavigationGroup({
	group,
	locale,
	menuId,
	isOpen,
	onToggle,
	onNavigate,
}: NavigationGroupProps) {
	return (
		<li className="relative w-full sm:w-auto">
			<button
				type="button"
				aria-expanded={isOpen}
				aria-controls={menuId}
				onClick={onToggle}
				className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-xl px-3 py-3 text-sm font-medium text-[#4b286b] hover:bg-[#f4eef9] sm:w-auto sm:justify-start sm:rounded-full sm:py-2"
			>
				{group.label}
				<span
					aria-hidden="true"
					className={`text-xs text-[#806594] transition-transform ${
						isOpen ? "rotate-180" : ""
					}`}
				>
					⌄
				</span>
			</button>

			<ul
				id={menuId}
				className={`${
					isOpen ? "block" : "hidden"
				} mt-1 w-full rounded-xl border border-[#e9e0f2] bg-[#faf8fc] p-2 sm:absolute sm:right-0 sm:top-full sm:z-20 sm:mt-1 sm:w-max sm:min-w-56 sm:rounded-2xl sm:bg-white sm:shadow-lg`}
			>
				{group.items.map((item) => (
					<li key={item.href}>
						<Link
							href={`/${locale}${item.href}`}
							onClick={onNavigate}
							className="block rounded-xl px-3 py-2.5 text-sm text-[#4b286b] hover:bg-[#f4eef9]"
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</li>
	);
}
