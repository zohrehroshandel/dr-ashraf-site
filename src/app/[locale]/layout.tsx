import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { SiteFooter } from "../../components/common/SiteFooter";
import { SiteHeader } from "../../components/common/SiteHeader";
import { isLocale, locales } from "../../shared/i18n/locales";
import { siteMetadata } from "../../shared/seo/site-metadata";

import "../globals.css";
const persianFont = Vazirmatn({
	subsets: ["arabic"],
	display: "swap",
});

const latinFont = Inter({
	subsets: ["latin"],
	display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return siteMetadata[locale];
}
export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}
type LocaleLayoutProps = {
	children: ReactNode;
	params: Promise<{ locale: string }>;
};
export default async function LocaleLayout({
	children,
	params,
}: LocaleLayoutProps) {
	const { locale } = await params;
	if (!isLocale(locale)) notFound();
	return (
		<html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
			<body
				className={`min-h-screen antialiased ${
					locale === "fa" ? persianFont.className : latinFont.className
				}`}
			>
				<SiteHeader locale={locale} />
				{children}
				<SiteFooter locale={locale} />
			</body>
		</html>
	);
}
