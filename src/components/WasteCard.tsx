import { Link } from "@tanstack/react-router";
import { CATEGORIES, type Waste } from "@/data/wastes";
import { categoryImage } from "@/lib/category-images";
import { useLang } from "@/lib/i18n";

const BAR: Record<string, string> = {
  plastic: "bg-plastic",
  metal: "bg-metal",
  paper: "bg-paper",
  glass: "bg-glass",
  ewaste: "bg-ewaste",
  other: "bg-other",
};

const SOFT: Record<string, string> = {
  plastic: "bg-plastic-soft",
  metal: "bg-metal-soft",
  paper: "bg-paper-soft",
  glass: "bg-glass-soft",
  ewaste: "bg-ewaste-soft",
  other: "bg-other-soft",
};

export function WasteCard({ waste }: { waste: Waste }) {
  const { lang } = useLang();

  return (
    <Link
      to="/wastes/$slug"
      params={{ slug: waste.slug }}
      className="group block rounded-xl border border-border bg-card p-3 transition-transform hover:-translate-y-1"
    >
      <div className={`h-2 w-10 rounded-full ${BAR[waste.category]}`} />
      <div className={`mt-3 overflow-hidden rounded-lg ${SOFT[waste.category]}`}>
        <img
          src={categoryImage(waste.category)}
          alt={waste.name[lang]}
          className="aspect-square w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="mt-3 font-display text-base leading-tight text-heading">
        {waste.name[lang]}
      </div>
      <div className="text-xs text-muted-foreground">
        {CATEGORIES[waste.category][lang]} · {waste.price}
      </div>
    </Link>
  );
}
