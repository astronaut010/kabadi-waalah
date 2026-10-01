import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useCallback, useEffect, useRef, useState } from "react";
import { Camera, ImageUp, Loader2, RefreshCw } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CATEGORIES, findWaste } from "@/data/wastes";
import { categoryImage } from "@/lib/category-images";
import { useLang } from "@/lib/i18n";
import { identifyWaste, type ScanResult } from "@/lib/scan.functions";

export const Route = createFileRoute("/scan")({
  head: () => ({
    meta: [
      { title: "Scan your scrap — Scrap Value" },
      {
        name: "description",
        content:
          "Point your camera at any scrap item and Scrap Value names the material, its recycling pathways and the recyclers who buy it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Scan your scrap — Scrap Value" },
      {
        property: "og:description",
        content: "Camera identification for scrap: material, pathways and dealer contacts.",
      },
    ],
  }),
  component: ScanPage,
});

function ScanPage() {
  const { t, lang } = useLang();
  const run = useServerFn(identifyWaste);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [cameraOn, setCameraOn] = useState(false);
  const [shot, setShot] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    setCameraOn(false);
  }, []);

  useEffect(() => stopCamera, [stopCamera]);

  const startCamera = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
      });
      streamRef.current = stream;
      setCameraOn(true);
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          void videoRef.current.play();
        }
      });
    } catch {
      setError(t("cameraDenied"));
    }
  };

  const analyse = async (dataUrl: string) => {
    setShot(dataUrl);
    setResult(null);
    setError(null);
    setBusy(true);
    try {
      const res = await run({ data: { imageDataUrl: dataUrl } });
      setResult(res);
    } catch (e) {
      setError(e instanceof Error ? e.message : t("scanFailed"));
    } finally {
      setBusy(false);
    }
  };

  const capture = () => {
    const video = videoRef.current;
    if (!video) return;
    const canvas = document.createElement("canvas");
    const size = 768;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const side = Math.min(video.videoWidth, video.videoHeight);
    ctx.drawImage(
      video,
      (video.videoWidth - side) / 2,
      (video.videoHeight - side) / 2,
      side,
      side,
      0,
      0,
      size,
      size,
    );
    stopCamera();
    void analyse(canvas.toDataURL("image/jpeg", 0.85));
  };

  const onFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") void analyse(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const matched = result?.slug ? findWaste(result.slug) : undefined;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-display text-4xl tracking-tight text-heading sm:text-5xl">
          {t("scanTitle")}
        </h1>
        <p className="mt-2 text-body">{t("scanSub")}</p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface p-4">
          <div className="relative grid aspect-square w-full place-items-center overflow-hidden rounded-xl bg-primary-soft">
            {cameraOn ? (
              <video
                ref={videoRef}
                playsInline
                muted
                className="size-full object-cover"
              />
            ) : shot ? (
              <img src={shot} alt={t("capturedScrapAlt")} className="size-full object-cover" />
            ) : (
              <Camera className="size-16 text-primary opacity-60" />
            )}
            {busy && (
              <div className="absolute inset-0 grid place-items-center bg-background/70">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Loader2 className="size-5 animate-spin" /> {t("identifying")}
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {cameraOn ? (
              <button
                onClick={capture}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                <Camera className="size-4" /> {t("takePhoto")}
              </button>
            ) : (
              <button
                onClick={startCamera}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                <Camera className="size-4" /> {shot ? t("retake") : t("openCamera")}
              </button>
            )}

            <button
              onClick={() => fileRef.current?.click()}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-body hover:text-primary"
            >
              <ImageUp className="size-4" /> {t("uploadPhoto")}
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              capture="environment"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onFile(file);
                e.target.value = "";
              }}
            />
          </div>
        </div>

        {error && (
          <p className="mt-6 rounded-lg bg-primary-soft px-4 py-3 text-sm text-primary">
            {error}
          </p>
        )}

        {result && !busy && (
          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            {matched ? (
              <>
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {t("scanResult")} · {CATEGORIES[matched.category][lang]}
                </div>
                <div className="mt-3 flex items-start gap-4">
                  <img
                    src={categoryImage(matched.category)}
                    alt={matched.name[lang]}
                    width={816}
                    height={816}
                    className="size-20 rounded-lg object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <div className="font-display text-2xl text-heading">
                      {matched.name[lang]}
                    </div>
                    <div className="text-sm text-body">{matched.price}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {t("confidence")}: {Math.round((result.confidence || 0) * 100)}%
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-body">{matched.note[lang]}</p>
                <Link
                  to="/wastes/$slug"
                  params={{ slug: matched.slug }}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  {t("viewDetails")} →
                </Link>
              </>
            ) : (
              <div className="flex flex-wrap items-center gap-3">
                <RefreshCw className="size-5 text-primary" />
                <p className="text-sm text-body">{t("scanFailed")}</p>
                <Link
                  to="/search"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  {t("search")} →
                </Link>
              </div>
            )}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
