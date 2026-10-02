import { Linkedin } from "lucide-react";
import vijaya from "@/assets/vijayapriya.png.asset.json";
import sowmiya from "@/assets/sowmiyadevi.jpg.asset.json";
import { useLang } from "@/lib/i18n";

const TEAM = [
  { name: "Vijayapriya", collegeKey: "vijayaCollege", img: vijaya.url, link: "https://www.linkedin.com/in/vijayapriya-m" },
  { name: "Sowmiyadevi", collegeKey: "sowmiyaCollege", img: sowmiya.url, link: "https://www.linkedin.com/in/sowmiyadevi-saravanan-6a5241326" },
];

export function TeamGrid() {
  const { t } = useLang();

  return (
    <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 lg:gap-8">
      {TEAM.map((m) => (
        <article key={m.name} className="grid overflow-hidden rounded-xl border border-border bg-card md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <img src={m.img} alt={m.name} className="aspect-[4/5] size-full object-cover object-top" />
          <div className="flex flex-col justify-end p-5 sm:p-6">
            <h3 className="text-2xl font-bold text-heading">{m.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{t(m.collegeKey)}</p>
            <a href={m.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <Linkedin className="size-4" /> {t("linkedIn")}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
