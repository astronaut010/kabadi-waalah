import { Link } from "@tanstack/react-router";
import { Camera, Search } from "lucide-react";
import { LANGS, useLang } from "@/lib/i18n";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid size-9 place-items-center rounded-lg bg-primary font-display text-lg leading-none text-primary-foreground">
            S
          </div>
          <div className="leading-none">
            <div className="font-display text-lg tracking-wide text-heading">
              {t("appName")}
            </div>
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {t("tagline")}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-body md:flex">
          <Link to="/" className="hover:text-primary">
            {t("navHome")}
          </Link>
          <Link to="/about" className="hover:text-primary">
            {t("navAbout")}
          </Link>
          <a href="/#vision" className="hover:text-primary">
            {t("navVision")}
          </a>
          <Link to="/team" className="hover:text-primary">
            {t("navTeam")}
          </Link>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            to="/search"
            aria-label={t("search")}
            className="grid size-10 place-items-center rounded-lg text-body hover:bg-primary-soft hover:text-primary"
          >
            <Search className="size-5" />
          </Link>

          <div
            role="group"
            aria-label={t("languageLabel")}
            className="flex items-center gap-1 rounded-lg bg-secondary p-1 text-xs font-medium"
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={
                  lang === l.code
                    ? "rounded-md bg-primary px-2 py-1 text-primary-foreground"
                    : "rounded-md px-2 py-1 text-body hover:text-primary"
                }
              >
                {l.label}
              </button>
            ))}
          </div>

          <Link
            to="/scan"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-3 text-sm font-semibold text-primary-foreground hover:opacity-90 sm:px-4"
          >
            <Camera className="size-4" />
            {t("scan")}
          </Link>
        </div>
      </div>
    </header>
  );
}
