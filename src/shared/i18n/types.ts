export type Locale = "fa" | "en" | "it";

export type Direction = "rtl" | "ltr";

export interface LocaleConfig {
	readonly code: Locale;
	readonly label: string;
	readonly nativeName: string;
	readonly dir: Direction;
}
