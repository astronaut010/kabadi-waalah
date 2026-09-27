import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useLang();

  return (
    <footer className="mt-6 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="font-display text-[clamp(2rem,6vw,4rem)] leading-[0.95] tracking-tight text-heading text-balance">
          {t("punchline")}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 text-sm sm:grid-cols-4">
          <div>
            <div className="mb-2 font-display text-sm tracking-wide text-heading">
              {t("appName")}
            </div>
            <p className="text-xs text-muted-foreground">
              A field tool for India's waste collectors.
            </p>
          </div>
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-heading">
              Explore
            </div>
            <ul className="space-y-1.5 text-muted-foreground">
              <li>
                <Link to="/wastes" className="hover:text-primary">
                  {t("wastesTitle")}
                </Link>
              </li>
              <li>
                <Link to="/scan" className="hover:text-primary">
                  {t("scan")}
                </Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-primary">
                  {t("search")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-heading">
              Company
            </div>
            <ul className="space-y-1.5 text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary">
                  {t("navAbout")}
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-primary">
                  {t("navTeam")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-heading">
              Language
            </div>
            <div className="flex flex-col items-start gap-1 text-muted-foreground">
              <span>English</span>
              <span>தமிழ்</span>
              <span style={{ fontFamily: "var(--font-deva)" }}>हिंदी</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
