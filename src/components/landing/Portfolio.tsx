import { useState } from "react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";
import { useLang } from "@/lib/i18n";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const WORKS = [
  { src: w1, ar: "ميدالية خرسانة مطبوعة", en: "Stamped concrete medallion", span: "sm:col-span-2" },
  { src: w2, ar: "أرضية ايبوكسي لمواقف السيارات", en: "Epoxy parking floor", span: "" },
  { src: w3, ar: "ممر مطبوع بنقش الحجر", en: "Stone-pattern stamped walkway", span: "" },
  { src: w4, ar: "عينة صبة مطبوعة ملونة", en: "Colored stamped sample slab", span: "" },
  { src: w5, ar: "أعمال هلي كابتر ومروحة", en: "Power trowel / helicopter finishing", span: "sm:col-span-2" },
  { src: w6, ar: "ممر حديقة بتشطيب مطبوع", en: "Garden walkway stamped finish", span: "" },
];

export function Portfolio() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState<(typeof WORKS)[number] | null>(null);
  const ar = lang === "ar";

  return (
    <section id="work" className="bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-black tracking-widest text-amber uppercase">
            {t("workKicker")}
          </span>
          <h2 className="mt-3 text-3xl font-black text-navy-deep sm:text-5xl">{t("workTitle")}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("workText")}
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[220px] gap-4 sm:auto-rows-[260px] sm:grid-cols-3">
          {WORKS.map((w) => (
            <button
              key={w.src}
              type="button"
              onClick={() => setOpen(w)}
              className={`group relative min-w-0 overflow-hidden rounded-xl border border-border bg-card focus-visible:ring-2 focus-visible:ring-amber focus-visible:outline-none ${w.span}`}
            >
              <img
                src={w.src}
                alt={ar ? w.ar : w.en}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-4 text-start text-sm font-bold text-primary-foreground">
                {ar ? w.ar : w.en}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-3xl border-navy/40 bg-navy-deep p-2 sm:p-3">
          {open && (
            <>
              <DialogTitle className="sr-only">{ar ? open.ar : open.en}</DialogTitle>
              <img
                src={open.src}
                alt={ar ? open.ar : open.en}
                className="max-h-[75vh] w-full rounded-lg object-contain"
              />
              <p className="p-2 text-center text-sm font-bold text-primary-foreground">
                {ar ? open.ar : open.en}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
