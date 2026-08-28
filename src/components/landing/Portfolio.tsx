import w1 from "@/assets/work-1.jpg.asset.json";
import w2 from "@/assets/work-2.jpg.asset.json";
import w3 from "@/assets/work-3.jpg.asset.json";
import w4 from "@/assets/work-4.jpg.asset.json";
import w5 from "@/assets/work-5.jpg.asset.json";
import w6 from "@/assets/work-6.jpg.asset.json";
import { useLang } from "@/lib/i18n";

const WORKS = [
  { src: w1.url, ar: "ميدالية خرسانة مطبوعة", en: "Stamped concrete medallion", span: "sm:col-span-2" },
  { src: w2.url, ar: "أرضية ايبوكسي لمواقف السيارات", en: "Epoxy parking floor", span: "" },
  { src: w3.url, ar: "ممر مطبوع بنقش الحجر", en: "Stone-pattern stamped walkway", span: "" },
  { src: w4.url, ar: "عينة صبة مطبوعة ملونة", en: "Colored stamped sample slab", span: "" },
  { src: w5.url, ar: "أعمال هلي كابتر ومروحة", en: "Power trowel / helicopter finishing", span: "sm:col-span-2" },
  { src: w6.url, ar: "ممر حديقة بتشطيب مطبوع", en: "Garden walkway stamped finish", span: "" },
];

export function Portfolio() {
  const { t, lang } = useLang();

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

        <div className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-3 sm:auto-rows-[260px]">
          {WORKS.map((w) => (
            <figure
              key={w.src}
              className={`group relative min-w-0 overflow-hidden rounded-xl border border-border bg-card ${w.span}`}
            >
              <img
                src={w.src}
                alt={lang === "ar" ? w.ar : w.en}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-4 text-sm font-bold text-primary-foreground">
                {lang === "ar" ? w.ar : w.en}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
