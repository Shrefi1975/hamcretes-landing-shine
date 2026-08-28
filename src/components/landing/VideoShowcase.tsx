import { useRef, useState } from "react";
import { PlayCircle, Volume2, VolumeX } from "lucide-react";
import showcase from "@/assets/showcase.mp4";
import { useLang } from "@/lib/i18n";

export function VideoShowcase() {
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted) video.play().catch(() => {});
  };

  return (
    <section id="showcase" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="min-w-0">
          <span className="text-sm font-black tracking-widest text-amber uppercase">
            {t("videoKicker")}
          </span>
          <h2 className="mt-3 text-3xl font-black text-navy-deep sm:text-5xl">{t("videoTitle")}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("videoText")}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy/10 px-4 py-2 text-sm font-bold text-navy">
            <PlayCircle className="h-4 w-4 shrink-0" />
            {t("videoNote")}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm min-w-0 overflow-hidden rounded-2xl border border-border bg-navy-deep shadow-card">
          <video
            ref={videoRef}
            src={showcase}
            autoPlay
            playsInline
            muted
            loop
            preload="auto"
            className="aspect-[9/16] h-full w-full object-cover"
          />
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? t("unmute") : t("mute")}
            className="absolute end-3 bottom-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy-deep/80 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-navy-deep"
          >
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </section>
  );
}
