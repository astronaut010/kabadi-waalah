import type { CategoryKey } from "@/data/wastes";
import plastic from "@/assets/cat-plastic.jpg";
import metal from "@/assets/cat-metal.jpg";
import paper from "@/assets/cat-paper.jpg";
import glass from "@/assets/cat-glass.jpg";
import ewaste from "@/assets/cat-ewaste.jpg";
import other from "@/assets/cat-other.jpg";

const MAP: Record<CategoryKey, string> = {
  plastic,
  metal,
  paper,
  glass,
  ewaste,
  other,
};

export function categoryImage(category: CategoryKey) {
  return MAP[category];
}
