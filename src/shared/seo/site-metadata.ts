import type { Metadata } from "next";
import type { Locale } from "../i18n/locales";

export const siteMetadata = {
  fa: {
    title: "دکتر اشرف محمدخانی | علم، سلامت و اندیشه",
    description: "وب‌سایت علمی و فرهنگی دکتر اشرف محمدخانی؛ علم، سلامت و اندیشه.",
  },
  en: {
    title: "Dr. Ashraf Mohammadkhani | Science, Health & Thought",
    description: "The scientific and cultural website of Dr. Ashraf Mohammadkhani.",
  },
  it: {
    title: "Dr. Ashraf Mohammadkhani | Scienza, salute e pensiero",
    description: "Il sito scientifico e culturale di Dr. Ashraf Mohammadkhani.",
  },
} satisfies Record<Locale, Metadata>;
