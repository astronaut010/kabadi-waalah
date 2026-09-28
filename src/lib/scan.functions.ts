import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { WASTES } from "@/data/wastes";

const inputSchema = z.object({
  imageDataUrl: z.string().min(32),
});

export type ScanResult = {
  slug: string | null;
  label: string;
  confidence: number;
};

const CATALOGUE = WASTES.map((w) => `${w.slug} = ${w.name.en}`).join("\n");

export const identifyWaste = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }): Promise<ScanResult> => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI service is not configured.");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "X-Lovable-AIG-SDK": "fetch",
      },
      body: JSON.stringify({
        model: "openai/gpt-6-astra",
        stream: true,
        store: false,
        reasoning: { effort: "low", summary: "auto" },
        include: ["reasoning.encrypted_content"],
        input: [
          {
            role: "system",
            content: [
              {
                type: "input_text",
                text:
                  "You identify scrap/waste items in photos for Indian waste collectors. " +
                  "Choose the single best matching slug from this catalogue:\n" +
                  CATALOGUE +
                  "\nReply with ONLY a compact JSON object: " +
                  '{"slug":"<slug or null>","label":"<short plain English name of what you see>","confidence":<0-1 number>}. ' +
                  "Use null for slug if nothing in the catalogue matches. No prose, no markdown.",
              },
            ],
          },
          {
            role: "user",
            content: [
              { type: "input_text", text: "What scrap item is in this photo?" },
              { type: "input_image", image_url: data.imageDataUrl },
            ],
          },
        ],
      }),
    });

    if (!response.ok || !response.body) {
      const detail = await response.text().catch(() => "");
      if (response.status === 429) throw new Error("Too many scans right now. Please wait a moment and try again.");
      if (response.status === 402) throw new Error("AI credits are exhausted for this workspace.");
      throw new Error(`Scan failed (${response.status}). ${detail.slice(0, 200)}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let text = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trim();
        if (!payload || payload === "[DONE]") continue;
        try {
          const event = JSON.parse(payload);
          if (event.type === "response.output_text.delta" && typeof event.delta === "string") {
            text += event.delta;
          }
        } catch {
          // ignore keep-alive / partial frames
        }
      }
    }

    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return { slug: null, label: "", confidence: 0 };

    try {
      const parsed = JSON.parse(match[0]) as ScanResult;
      const slug =
        parsed.slug && WASTES.some((w) => w.slug === parsed.slug) ? parsed.slug : null;
      return {
        slug,
        label: typeof parsed.label === "string" ? parsed.label : "",
        confidence: typeof parsed.confidence === "number" ? parsed.confidence : 0,
      };
    } catch {
      return { slug: null, label: "", confidence: 0 };
    }
  });
