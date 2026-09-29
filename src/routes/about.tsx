import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useLang } from "@/lib/i18n";
import heroImage from "@/assets/hero-scan.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Scrap Value — knowledge for India's waste collectors" },
      {
        name: "description",
        content:
          "Why Scrap Value exists: giving kabadi walas the material knowledge, recycling pathways and buyer contacts that decide what they earn.",
      },
      { property: "og:title", content: "About Scrap Value" },
      {
        property: "og:description",
        content:
          "A trilingual field tool that names the material, shows what it becomes and who buys it.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="mt-2 max-w-[24ch] font-display text-4xl tracking-tight text-heading text-balance sm:text-5xl">
          {t("aboutTitle")}
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="space-y-4 text-lg text-body text-pretty lg:col-span-7">
            <p>{t("aboutBody1")}</p>
            <p>{t("aboutBody2")}</p>
            <p>{t("impactBody")}</p>
            <Link
              to="/wastes"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              {t("detailsBtn")} →
            </Link>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-border bg-primary-soft">
              <img
                src={heroImage}
                alt="A waste collector scanning scrap with a phone"
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
