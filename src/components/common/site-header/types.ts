export type SiteNavigationItem = {
	label: string;
	href: string;
};

export type SiteNavigationGroup = {
	label: string;
	items: SiteNavigationItem[];
};
