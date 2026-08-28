import { useEffect, useState } from "react";
import { MessageCircle, CalendarCheck, Phone, ChevronLeft } from "lucide-react";
import stamped from "@/assets/hero-stamped.jpg";
import epoxy from "@/assets/hero-epoxy.jpg";
import trowel from "@/assets/hero-trowel.jpg";
import { WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/hamcretes";

const SLIDES = [
  { src: stamped, label: "صبة مطبوعة" },
  { src: epoxy, label: "دهان ايبوكسي" },
  { src: trowel, label: "صبة مروحة وهلي كابتر" },
];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-navy-deep">
      <div className="absolute inset-0">
        {SLIDES.map((s, idx) => (
          <img
            key={s.label}
            src={s.src}
            alt={s.label}
            width={1600}
            height={1008}
            loading={idx === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ${
              idx === i ? "animate-slow-zoom opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-l from-navy-deep/95 via-navy-deep/80 to-navy-deep/45" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-5 pt-28 pb-24 sm:px-8">
        <span className="animate-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 text-xs font-bold tracking-wide text-amber-bright sm:text-sm">
          <span className="h-2 w-2 shrink-0 rounded-full bg-amber-bright" />
          مقاولات الخرسانة المطبوعة — المملكة العربية السعودية
        </span>

        <h1
          className="animate-fade-up mt-6 font-display text-4xl leading-[1.05] font-bold tracking-tight text-primary-foreground uppercase sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Hamcretes Stamped
          <br />
          <span className="text-gradient-amber">Concrete Contractors</span>
        </h1>

        <p
          className="animate-fade-up mt-4 text-2xl leading-snug font-black text-amber-bright sm:text-4xl"
          style={{ animationDelay: "160ms" }}
        >
          حمكريتس لمقاولات الخرسانة المطبوعة
        </p>

        <p
          className="animate-fade-up mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg"
          style={{ animationDelay: "240ms" }}
        >
          تنفيذ احترافي للصبات المطبوعة، أرضيات الايبوكسي، الهليكوبتر، وصبات الميول والمستودعات —
          بدقة الليزر وضمان على التشطيب، مع مواد أو بدون مواد.
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-amber px-7 py-4 text-base font-black text-accent-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            <CalendarCheck className="h-5 w-5 shrink-0" />
            احجز معاينة مجانية
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-7 py-4 text-base font-black text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-5 w-5 shrink-0" />
            واتساب مباشر
          </a>
          <a
            href={`tel:+966${PHONE_DISPLAY.slice(1)}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 px-7 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="h-5 w-5 shrink-0" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <div className="animate-fade-up mt-12 flex items-center gap-3" style={{ animationDelay: "400ms" }}>
          {SLIDES.map((s, idx) => (
            <button
              key={s.label}
              onClick={() => setI(idx)}
              aria-label={s.label}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-12 bg-amber-bright" : "w-6 bg-primary-foreground/35"
              }`}
            />
          ))}
          <span className="ms-2 flex items-center gap-1 text-sm font-semibold text-primary-foreground/70">
            {SLIDES[i].label}
            <ChevronLeft className="h-4 w-4 shrink-0" />
          </span>
        </div>
      </div>
    </section>
  );
}
