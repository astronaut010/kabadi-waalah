import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, Languages, Route as RouteIcon, ScanLine, Search } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WasteCard } from "@/components/WasteCard";
import { WASTES } from "@/data/wastes";
import { useLang } from "@/lib/i18n";
import heroImage from "@/assets/hero-scan.jpg";
import { VisionSection } from "@/components/VisionSection";
import { TeamGrid } from "@/components/TeamGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scrap Value — scan scrap, know its value" },
      {
        name: "description",
        content:
          "A trilingual field tool for kabadi walas: scan any scrap, see how it is recycled, what it becomes and which recyclers buy it.",
      },
      { property: "og:title", content: "Scrap Value — scan scrap, know its value" },
      {
        property: "og:description",
        content:
          "Scan any scrap with your camera and get the material, its recycling pathways and real dealer contacts in English, Tamil or Hindi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  const { t, lang } = useLang();
  const preview = WASTES.slice(0, 6);
  const featured = WASTES[0]!;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* HERO */}
        <section className="grid items-center gap-10 pt-10 pb-14 sm:pt-16 sm:pb-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-2 rounded-full bg-primary" />
              {t("heroBadge")}
            </div>
            <h1 className="reveal mt-5 font-display text-[clamp(2.6rem,7vw,5rem)] leading-[0.92] tracking-tight text-heading text-balance">
              {t("heroTitle1")}
              <br />
              {t("heroTitle2")}
            </h1>
            <p className="reveal mt-5 max-w-[52ch] text-lg text-body text-pretty">
              {t("heroBody")}
            </p>
            <div className="reveal mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Link
                to="/scan"
                className="relative grid h-20 w-full min-w-[240px] place-items-center rounded-2xl bg-primary px-8 font-display text-2xl tracking-wide text-primary-foreground hover:opacity-95 sm:w-auto"
              >
                <span className="scanring absolute inset-0 rounded-2xl" />
                <span className="relative z-10 flex items-center gap-3">
                  <ScanLine className="size-7" />
                  {t("scanCta")}
                </span>
              </Link>
              <a
                href="#guide"
                className="self-start px-4 py-3 text-sm font-semibold text-body hover:text-primary"
              >
                {t("howItWorks")} →
              </a>
            </div>
            <div className="reveal mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span>
                <span className="align-middle font-display text-2xl text-heading">20</span>{" "}
                {t("statWastes")}
              </span>
              <span>
                <span className="align-middle font-display text-2xl text-heading">3</span>{" "}
                {t("statDealers")}
              </span>
              <span>
                <span className="align-middle font-display text-2xl text-heading">3</span>{" "}
                {t("statLangs")}
              </span>
            </div>
          </div>

          <div className="reveal lg:col-span-5">
            <div className="rounded-2xl border border-border bg-surface p-4">
              <div className="overflow-hidden rounded-xl bg-primary-soft">
                <img
                  src={heroImage}
                  alt="A waste collector scanning a pile of scrap with a phone"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {t("identified")} 
                  </div>
                  <div className="font-display text-xl text-heading">
                    {" "}
                  </div>
                </div>
                <div className="rounded-md bg-primary-soft px-2 py-1 text-xs text-primary">
                  {"\n"}
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {featured.pathways.map((p, i) => (
                  <div key={i} className="rounded-lg bg-primary-soft p-2.5">
                    <div className="text-[11px] font-semibold text-primary">
                      {i + 1}
                    </div>
                    <div className="line-clamp-2 text-xs text-body">{[t("scanAction"), t("knowAction"), t("earnAction")][i]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-t border-border py-12 sm:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl tracking-tight text-heading text-balance sm:text-4xl">
              {t("navAbout")}
            </h2>
            <p className="mx-auto mt-4 max-w-[32ch] text-xl font-semibold text-primary">{t("aboutLead")}</p>
            <div className="mx-auto mt-7 max-w-[70ch] space-y-4 text-left text-body text-pretty">
              <p>{t("aboutBody1")}</p>
              <p>{t("aboutBody2")}</p>
              <p>{t("impactBody")}</p>
            </div>
          </div>
        </section>

        <VisionSection />

        {/* FEATURES */}
        <section className="border-t border-border py-12 sm:py-16">
          <h2 className="mt-2 max-w-[26ch] font-display text-3xl tracking-tight text-heading text-balance sm:text-4xl">
            {t("featuresTitle")}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Camera, title: "feat1Title", body: "feat1Body" },
              { icon: Languages, title: "feat2Title", body: "feat2Body" },
              { icon: RouteIcon, title: "feat3Title", body: "feat3Body" },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 grid size-12 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-heading">{t(title)}</h3>
                <p className="mt-2 text-sm text-body text-pretty">{t(body)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GUIDE */}
        <section id="guide" className="border-t border-border py-12 sm:py-16">
          <h2 className="mt-2 max-w-[24ch] font-display text-3xl tracking-tight text-heading text-balance sm:text-4xl">
            {t("guideTitle")}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { n: "01", title: "step1Title", body: "step1Body" },
              { n: "02", title: "step2Title", body: "step2Body" },
              { n: "03", title: "step3Title", body: "step3Body" },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl bg-primary p-6 text-primary-foreground">
                <div className="font-display text-3xl leading-none opacity-80">{s.n}</div>
                <h3 className="mt-3 text-lg font-bold text-primary-foreground">
                  {t(s.title)}
                </h3>
                <p className="mt-2 text-sm opacity-90">{t(s.body)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/scan"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              <Camera className="size-4" /> {t("scan")}
            </Link>
            <Link
              to="/search"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-semibold text-body hover:text-primary"
            >
              <Search className="size-4" /> {t("search")}
            </Link>
          </div>
        </section>

        {/* IMPACT + MARKET */}
        <section className="border-t border-border py-12 sm:py-16">
          <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="mt-2 font-display text-3xl tracking-tight text-heading text-balance sm:text-4xl">
                {t("impactTitle")}
              </h2>
              <p className="mt-4 max-w-[46ch] text-body text-pretty">{t("impactBody")}</p>
            </div>
            <div className="grid grid-cols-3 gap-3 lg:col-span-7">
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="font-display text-3xl text-primary">62M</div>
                <div className="mt-1 max-w-[16ch] text-xs text-muted-foreground">
                  {t("marketStatWaste")}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="font-display text-3xl text-primary">~30%</div>
                <div className="mt-1 max-w-[16ch] text-xs text-muted-foreground">
                  {t("marketStatRecovered")}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="font-display text-3xl text-primary">1.5M+</div>
                <div className="mt-1 max-w-[16ch] text-xs text-muted-foreground">
                  {t("marketStatWorkers")}
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/wastes"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            {t("detailsBtn")} →
          </Link>

          <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
            {preview.map((w) => (
              <div key={w.id} className="w-44 shrink-0 sm:w-52">
                <WasteCard waste={w} />
              </div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="border-t border-border py-12 sm:py-16">
          <h2 className="text-center font-display text-3xl tracking-tight text-heading sm:text-4xl">
            {t("teamTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-[58ch] text-center text-body">{t("teamIntro")}</p>
          <TeamGrid />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
