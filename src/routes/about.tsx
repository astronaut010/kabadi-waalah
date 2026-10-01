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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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
      <main className="px-4 py-10 sm:px-6 sm:py-16">
        <section className="mx-auto max-w-5xl text-center">
          <h1 className="font-display text-4xl tracking-tight text-heading sm:text-5xl">{t("navAbout")}</h1>
          <p className="mx-auto mt-4 max-w-[34ch] text-xl font-semibold text-primary sm:text-2xl">{t("aboutLead")}</p>
          <div className="mx-auto mt-8 max-w-[70ch] space-y-5 text-left text-lg text-body text-pretty">
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
          <div className="mx-auto mt-10 max-w-4xl">
            <div className="overflow-hidden rounded-xl border border-border bg-primary-soft">
              <img
                src={heroImage}
                alt="A waste collector scanning scrap with a phone"
                width={1024}
                height={768}
                className="aspect-[16/7] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
