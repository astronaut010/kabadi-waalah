import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WasteCard } from "@/components/WasteCard";
import { CATEGORIES, WASTES } from "@/data/wastes";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search waste types in Tamil, Hindi or English — Scrap Value" },
      {
        name: "description",
        content:
          "Type a scrap name in English, Tamil or Hindi to find its category, indicative rate, recycling pathways and buyers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Search waste types — Scrap Value" },
      {
        property: "og:description",
        content: "Find any of the 20 waste types by name in English, Tamil or Hindi.",
      },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { t, lang } = useLang();
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return WASTES;
    return WASTES.filter((w) => {
      const haystack = [
        w.name.en,
        w.name.ta,
        w.name.hi,
        w.buyer.en,
        CATEGORIES[w.category].en,
        CATEGORIES[w.category].ta,
        CATEGORIES[w.category].hi,
        ...w.keywords,
        ...w.pathways.map((p) => `${p.product.en} ${p.company}`),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [q]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-display text-4xl tracking-tight text-heading sm:text-5xl">
          {t("search")}
        </h1>

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
          <SearchIcon className="size-5 text-primary" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full bg-transparent text-base text-heading outline-none placeholder:text-muted-foreground"
            autoFocus
          />
        </div>

        {results.length === 0 ? (
          <p className="mt-10 text-body">{t("noResults")}</p>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {results.map((w) => (
              <WasteCard key={w.id} waste={w} />
            ))}
          </div>
        )}

        <p className="mt-8 text-xs text-muted-foreground">
          {results.length} / {WASTES.length} · {CATEGORIES.plastic[lang]},{" "}
          {CATEGORIES.metal[lang]}, {CATEGORIES.paper[lang]}, {CATEGORIES.glass[lang]},{" "}
          {CATEGORIES.ewaste[lang]}, {CATEGORIES.other[lang]}
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
