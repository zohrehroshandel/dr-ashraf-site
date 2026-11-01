import type { Locale } from "./types";
export const languageSwitcherLabels = {
	fa: { switcher: "تغییر زبان سایت", options: "انتخاب زبان" },
	en: { switcher: "Change site language", options: "Select language" },
	it: { switcher: "Cambia la lingua del sito", options: "Seleziona la lingua" },
} satisfies Record<Locale, { switcher: string; options: string }>;
