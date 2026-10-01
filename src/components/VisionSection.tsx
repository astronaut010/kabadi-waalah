import { useLang } from "@/lib/i18n";

const PARAGRAPH_KEYS = ["visionP1", "visionP2", "visionP3", "visionP4", "visionP5", "visionP6", "visionP7", "visionP8", "visionP9", "visionP10"];

export function VisionSection() {
  const { t } = useLang();

  return (
    <section id="vision" className="scroll-mt-20 border-t border-border py-12 sm:py-16">
      <h2 className="text-center font-display text-3xl tracking-tight text-heading sm:text-4xl">{t("visionTitle")}</h2>
      <div className="mx-auto mt-6 max-w-[70ch] space-y-4 text-body text-pretty">
        {PARAGRAPH_KEYS.map((key) => <p key={key}>{t(key)}</p>)}
      </div>
      <blockquote className="mx-auto mt-8 max-w-[70ch] border-l-4 border-primary pl-4 text-xl font-bold text-heading">
        “{t("visionQuote")}”
      </blockquote>
    </section>
  );
}
