import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Building2, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CATEGORIES, findWaste } from "@/data/wastes";
import { categoryImage } from "@/lib/category-images";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/wastes/$slug")({
  loader: ({ params }) => {
    const waste = findWaste(params.slug);
    if (!waste) throw notFound();
    return { waste };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Waste not found — Scrap Value" }, { name: "robots", content: "noindex" }] };
    }
    const name = loaderData.waste.name.en;
    return {
      meta: [
        { title: `${name} — recycling pathways & buyers | Scrap Value` },
        { name: "description", content: `${name}: ${loaderData.waste.note.en}` },
        { property: "og:title", content: `${name} — recycling pathways & buyers` },
        { property: "og:description", content: `${name}: ${loaderData.waste.note.en}` },
      ],
    };
  },
  component: WasteDetail,
});

function WasteDetail() {
  const { waste } = Route.useLoaderData();
  const { lang, t } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
          <Link to="/wastes" className="inline-flex items-center gap-1.5 hover:text-primary">
            <ArrowLeft className="size-4" /> {t("wastesTitle")}
          </Link>
          <span>/</span>
          <span>{CATEGORIES[waste.category][lang]}</span>
          <span>/</span>
          <span className="text-heading">{waste.name[lang]}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="overflow-hidden rounded-xl bg-primary-soft">
              <img
                src={categoryImage(waste.category)}
                alt={waste.name[lang]}
                width={816}
                height={816}
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="mt-4 rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="uppercase tracking-[0.14em]">{t("category")}</span>
                <span className="font-semibold text-primary">
                  {CATEGORIES[waste.category][lang]}
                </span>
              </div>
              <h1 className="mt-1 font-display text-2xl leading-tight text-heading">
                {waste.name[lang]}
              </h1>
              <p className="mt-2 text-sm text-body text-pretty">{waste.note[lang]}</p>
              <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-sm">
                <span className="text-muted-foreground">{t("marketRate")}</span>
                <span className="font-semibold text-heading">{waste.price}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{t("typicalBuyer")}</span>
                <span className="text-right text-heading">{waste.buyer[lang]}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {t("pathwaysTitle")}
            </div>
            <div className="space-y-3">
              {waste.pathways.map((p, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary font-display text-lg text-primary-foreground">
                    {i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-heading">{p.product[lang]}</div>
                    <div className="mt-2 space-y-1 text-sm text-body">
                      <div className="flex items-start gap-2">
                        <Building2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{p.company}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{p.location}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="break-words">{p.contact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">{t("priceNote")}</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
