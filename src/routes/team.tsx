import { TeamGrid } from "@/components/TeamGrid";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "The team behind Scrap Value" },
      {
        name: "description",
        content:
          "The people building Scrap Value, a trilingual recycling companion for India's kabadi walas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "The team behind Scrap Value" },
      {
        property: "og:description",
        content: "Meet the team building a recycling companion for India's waste collectors.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-center font-display text-4xl tracking-tight text-heading sm:text-5xl">
          {t("teamTitle")}
        </h1>
        <p className="mx-auto mt-3 max-w-[58ch] text-center text-body">{t("teamIntro")}</p>
        <TeamGrid />
      </main>
      <SiteFooter />
    </div>
  );
}
