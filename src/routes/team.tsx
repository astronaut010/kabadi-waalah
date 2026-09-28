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
        <div className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {t("teamKicker")}
        </div>
        <h1 className="mt-2 font-display text-4xl tracking-tight text-heading sm:text-5xl">
          {t("teamTitle")}
        </h1>
        <p className="mt-3 max-w-[50ch] text-body">{t("teamPending")}</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-dashed border-border bg-surface p-6"
            >
              <div className="grid size-12 place-items-center rounded-full bg-primary-soft font-display text-lg text-primary">
                {i}
              </div>
              <div className="mt-4 h-4 w-24 rounded bg-primary-soft" />
              <div className="mt-2 h-3 w-32 rounded bg-secondary" />
            </div>
          ))}
        </div>

        <p className="mt-10 font-display text-[clamp(1.5rem,4vw,2.5rem)] leading-tight text-heading">
          {t("punchline")}
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
