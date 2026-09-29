import { Linkedin } from "lucide-react";
import vijaya from "@/assets/vijayapriya.png.asset.json";
import sowmiya from "@/assets/sowmiyadevi.png.asset.json";

const TEAM = [
  { name: "Vijayapriya", college: "SRMMCET, Madurai, Tamil Nadu, India", img: vijaya.url, link: "https://www.linkedin.com/in/vijayapriya-m" },
  { name: "Sowmiyadevi", college: "TCE, Madurai, Tamil Nadu, India", img: sowmiya.url, link: "https://www.linkedin.com/in/sowmiyadevi-saravanan-6a5241326" },
];

export function TeamGrid() {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
      {TEAM.map((m) => (
        <div key={m.name} className="overflow-hidden rounded-2xl border border-border bg-card">
          <img src={m.img} alt={m.name} className="aspect-[4/5] w-full object-cover object-top" />
          <div className="p-5">
            <h3 className="text-xl font-bold text-heading">{m.name}</h3>
            <p className="mt-1 text-sm text-body">{m.college}</p>
            <a href={m.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
