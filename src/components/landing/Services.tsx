import { useState } from "react";
import { CheckCircle2, MessageCircle, CalendarCheck, ArrowUpRight } from "lucide-react";
import { SERVICES, WHATSAPP_URL, type Service } from "@/lib/hamcretes";
import { useLang } from "@/lib/i18n";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function Services() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<Service | null>(null);
  const ar = lang === "ar";

  const waLink = (s: Service) =>
    `${WHATSAPP_URL}?text=${encodeURIComponent(
      `${t("waMsgTitle")}\n${t("waService")}: ${s.ar} / ${s.en}`,
    )}`;

  return (
    <section id="services" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-black tracking-widest text-amber uppercase">
            {t("servicesKicker")}
          </span>
          <h2 className="mt-3 text-3xl font-black text-navy-deep sm:text-5xl">{t("servicesTitle")}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("servicesText")}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <button
              key={s.ar + s.en}
              type="button"
              onClick={() => setActive(s)}
              className="group relative min-h-[16rem] w-full overflow-hidden rounded-xl border border-border text-start transition-all hover:-translate-y-1 hover:border-amber/70 hover:shadow-card focus-visible:ring-2 focus-visible:ring-amber focus-visible:outline-none"
            >
              <img
                src={s.img}
                alt={ar ? s.ar : s.en}
                loading="lazy"
                width={768}
                height={512}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/40" />
              <div className="relative flex h-full min-h-[16rem] flex-col justify-end p-6">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-amber text-accent-foreground">
                  <s.icon className="h-5 w-5 shrink-0" />
                </div>
                <h3 className="mt-4 text-xl font-black text-primary-foreground">{ar ? s.ar : s.en}</h3>
                <p className="mt-1 font-display text-sm font-semibold tracking-wide text-amber uppercase">
                  {ar ? s.en : s.ar}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                  {ar ? s.desc : s.descEn}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-black text-amber">
                  {t("viewDetails")}
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto p-0 sm:max-w-lg">
          {active && (
            <>
              <img
                src={active.img}
                alt={ar ? active.ar : active.en}
                loading="lazy"
                width={768}
                height={512}
                className="h-48 w-full object-cover sm:h-56"
              />
              <div className="p-6 pt-4">
                <DialogHeader className="text-start">
                  <DialogTitle className="text-2xl font-black text-navy-deep">
                    {ar ? active.ar : active.en}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-relaxed">
                    {ar ? active.desc : active.descEn}
                  </DialogDescription>
                </DialogHeader>

                <p className="mt-5 text-sm font-black tracking-widest text-amber uppercase">
                  {t("benefits")}
                </p>
                <ul className="mt-3 space-y-2">
                  {(ar ? active.points : active.pointsEn).map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href="#booking"
                    onClick={() => setActive(null)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-amber px-5 py-3 font-black text-accent-foreground transition-transform hover:scale-[1.02]"
                  >
                    <CalendarCheck className="h-5 w-5 shrink-0" />
                    {t("bookThis")}
                  </a>
                  <a
                    href={waLink(active)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 font-black text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle className="h-5 w-5 shrink-0" />
                    {t("whatsapp")}
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
