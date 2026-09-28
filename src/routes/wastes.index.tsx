import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WasteCard } from "@/components/WasteCard";
import { WASTES } from "@/data/wastes";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/wastes/")({
  head: () => ({
    meta: [
      { title: "All 20 waste types — Scrap Value" },
      {
        name: "description",
        content:
          "Browse the 20 waste products Indian kabadi walas handle most: category, indicative rate, recycling pathways and buyers.",
      },
      { property: "og:title", content: "All 20 waste types — Scrap Value" },
      {
        property: "og:description",
        content:
          "Twenty waste products with three recycling pathways and real dealer contacts each.",
      },
    ],
  }),
  component: WastesIndex,
});

function WastesIndex() {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="size-4" /> {t("back")}
        </Link>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-heading sm:text-5xl">
          {t("wastesTitle")}
        </h1>
        <p className="mt-2 max-w-[50ch] text-body">{t("wastesSub")}</p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {WASTES.map((w) => (
            <WasteCard key={w.id} waste={w} />
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">{t("priceNote")}</p>
      </main>
      <SiteFooter />
    </div>
  );
}
