export type Locale = "fa" | "en" | "it";
export type LanguageOption = {
	readonly code: Locale;
	readonly label: string;
	readonly nativeName: string;
	readonly dir: "rtl" | "ltr";
};
