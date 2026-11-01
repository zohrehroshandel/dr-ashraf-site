import type { Locale } from "../../shared/i18n/locales";
export type ArticlesViewMode = "categories" | "search";
type ArticlesContentKey = ArticlesViewMode | "empty";
export const articlesContent = {
  fa: {
    categories: "دسته‌بندی مقالات",
    search: "جست‌وجوی مقالات",
    empty: "مقاله‌ای در این دسته‌بندی یافت نشد.",
  },
  en: {
    categories: "Article Categories",
    search: "Search Articles",
    empty: "No articles found in this category.",
  },
  it: {
    categories: "Categorie degli articoli",
    search: "Cerca articoli",
    empty: "Nessun articolo trovato in questa categoria.",
  },
} satisfies Record<Locale, Record<ArticlesContentKey, string>>;
