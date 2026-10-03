import { Bot, Languages, MapPin, TrendingUp } from "lucide-react";
import { useLang } from "@/lib/i18n";

const ADVANTAGES = [
  { icon: Bot, title: "noveltyPoint1Title", body: "noveltyPoint1Body" },
  { icon: TrendingUp, title: "noveltyPoint2Title", body: "noveltyPoint2Body" },
  { icon: MapPin, title: "noveltyPoint3Title", body: "noveltyPoint3Body" },
  { icon: Languages, title: "noveltyPoint4Title", body: "noveltyPoint4Body" },
] as const;

const COMPARISON_ROWS = [
  ["noveltyCompareUser", "noveltyExistingUser", "noveltyScrapUser"],
  ["noveltyCompareWorker", "noveltyExistingWorker", "noveltyScrapWorker"],
  ["noveltyCompareTech", "noveltyExistingTech", "noveltyScrapTech"],
  ["noveltyComparePrice", "noveltyExistingPrice", "noveltyScrapPrice"],
  ["noveltyCompareAccess", "noveltyExistingAccess", "noveltyScrapAccess"],
] as const;

export function NoveltySection() {
  const { t } = useLang();

  return (
    <section id="novelty" className="scroll-mt-20 border-t border-border py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl tracking-tight text-heading sm:text-4xl">
          {t("noveltyTitle")}
        </h2>
        <p className="mx-auto mt-4 max-w-[42ch] text-center text-xl font-semibold text-primary">
          {t("noveltyLead")}
        </p>

        <div className="mx-auto mt-7 max-w-[70ch] space-y-4 text-body text-pretty">
          <h3 className="text-xl font-bold text-heading">{t("noveltyGapTitle")}</h3>
          <p>{t("noveltyGapP1")}</p>
          <p>{t("noveltyGapP2")}</p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2">
          {ADVANTAGES.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-lg border border-border bg-card p-5">
              <div className="mb-4 grid size-11 place-items-center rounded-lg bg-primary-soft text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="font-bold text-heading">{t(title)}</h3>
              <p className="mt-2 text-sm text-body text-pretty">{t(body)}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-9 max-w-[68ch] border-l-4 border-primary pl-4 text-lg font-bold text-heading">
          {t("noveltyDifference")}
        </p>

        <div className="mt-9 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead className="bg-primary-soft text-heading">
              <tr>
                <th className="p-4 font-bold">{t("noveltyCompareLabel")}</th>
                <th className="p-4 font-bold">{t("noveltyExistingApps")}</th>
                <th className="p-4 font-bold text-primary">Scrap Value</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map(([label, existing, scrap]) => (
                <tr key={label} className="border-t border-border align-top">
                  <th className="p-4 font-semibold text-heading">{t(label)}</th>
                  <td className="p-4 text-body">{t(existing)}</td>
                  <td className="p-4 font-medium text-heading">{t(scrap)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-8 max-w-[64ch] text-center text-lg font-semibold text-primary">
          {t("noveltyClosing")}
        </p>
      </div>
    </section>
  );
}