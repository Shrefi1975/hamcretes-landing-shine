import { SERVICES } from "@/lib/hamcretes";

export function Services() {
  return (
    <section id="services" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-black tracking-widest text-amber uppercase">Our Services</span>
          <h2 className="mt-3 text-3xl font-black text-navy-deep sm:text-5xl">خدماتنا</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            جميع أعمال الخرسانة والتشطيبات الأرضية تحت سقف واحد، بفريق فني متخصص ومعدات حديثة.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.ar + s.en}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-amber/60 hover:shadow-card"
            >
              <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-amber transition-transform duration-300 group-hover:scale-x-100" />
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-navy/10 text-navy transition-colors group-hover:bg-gradient-amber group-hover:text-accent-foreground">
                <s.icon className="h-6 w-6 shrink-0" />
              </div>
              <h3 className="mt-4 text-xl font-black text-navy-deep">{s.ar}</h3>
              <p className="mt-1 font-display text-sm font-semibold tracking-wide text-amber uppercase">
                {s.en}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
