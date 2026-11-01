"use client";
import type { Locale } from "../../../shared/i18n/locales";
import { useSiteNavigationMenu } from "./hooks/useSiteNavigationMenu";
import { getSiteNavigation, navigationAriaLabel } from "./navigation-data";
import { NavigationGroup } from "./NavigationGroup";
export function SiteNavigation({ locale }: { locale: Locale }) {
	const { navRef, openGroup, toggleGroup, closeMenu } = useSiteNavigationMenu();
	const navigation = getSiteNavigation(locale);
	return (
		<nav
			ref={navRef}
			aria-label={navigationAriaLabel[locale]}
			className="border-t border-[#f1ebf5]"
			dir={locale === "fa" ? "rtl" : "ltr"}
		>
			<ul className="mx-auto flex max-w-7xl flex-col items-stretch gap-1 px-4 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:gap-y-1 sm:px-6 sm:py-2 lg:px-8">
				{navigation.map((group, index) => (
					<NavigationGroup
						key={group.label}
						group={group}
						locale={locale}
						menuId={`site-navigation-menu-${index}`}
						isOpen={openGroup === group.label}
						onToggle={() => toggleGroup(group.label)}
						onNavigate={closeMenu}
					/>
				))}
			</ul>
		</nav>
	);
}

