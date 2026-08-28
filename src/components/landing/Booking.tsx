import { useState } from "react";
import { Mail, MessageCircle, Phone, Send, User, MapPin } from "lucide-react";
import { SERVICES, WHATSAPP_URL, EMAIL, PHONE_DISPLAY, MANAGER } from "@/lib/hamcretes";

export function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", city: "", details: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "طلب حجز خدمة من موقع حمكريتس",
      `الاسم: ${form.name}`,
      `الجوال: ${form.phone}`,
      `الخدمة المطلوبة: ${form.service}`,
      form.city && `المدينة/الموقع: ${form.city}`,
      form.details && `تفاصيل: ${form.details}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  const field =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-amber focus:ring-2 focus:ring-amber/30";

  return (
    <section id="booking" className="relative overflow-hidden bg-gradient-navy py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        <div className="min-w-0">
          <span className="text-sm font-black tracking-widest text-amber-bright uppercase">Contact</span>
          <h2 className="mt-3 text-3xl font-black text-primary-foreground sm:text-5xl">
            احجز خدمتك الآن
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
            اختر الخدمة المطلوبة وسنتواصل معك خلال دقائق لتحديد موعد المعاينة وتقديم عرض السعر.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-4 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-amber/20 text-amber-bright">
                <User className="h-5 w-5 shrink-0" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-primary-foreground/60">المسؤول</p>
                <p className="truncate text-lg font-black text-primary-foreground">{MANAGER}</p>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 transition-colors hover:bg-primary-foreground/10"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-whatsapp/20 text-whatsapp">
                <Phone className="h-5 w-5 shrink-0" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-primary-foreground/60">جوال / واتساب</p>
                <p dir="ltr" className="truncate text-lg font-black text-primary-foreground">
                  {PHONE_DISPLAY}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 transition-colors hover:bg-primary-foreground/10"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-amber/20 text-amber-bright">
                <Mail className="h-5 w-5 shrink-0" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-primary-foreground/60">البريد الإلكتروني</p>
                <p dir="ltr" className="truncate text-lg font-black text-primary-foreground">
                  {EMAIL}
                </p>
              </div>
            </a>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="min-w-0 rounded-2xl bg-card p-6 shadow-card sm:p-8"
          aria-label="نموذج حجز الخدمة"
        >
          <h3 className="text-2xl font-black text-navy-deep">اطلب عرض سعر</h3>
          <p className="mt-1 text-sm text-muted-foreground">الحقول المميزة بـ * مطلوبة</p>

          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-navy-deep">
                الاسم *
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="الاسم الكامل"
                className={field}
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-navy-deep">
                رقم الجوال *
              </label>
              <input
                id="phone"
                required
                type="tel"
                dir="ltr"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="05XXXXXXXX"
                className={`${field} text-start`}
              />
            </div>

            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm font-bold text-navy-deep">
                الخدمة المطلوبة *
              </label>
              <select
                id="service"
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={field}
              >
                <option value="" disabled>
                  اختر الخدمة...
                </option>
                {SERVICES.map((s) => (
                  <option key={s.ar + s.en} value={`${s.ar} (${s.en})`}>
                    {s.ar} — {s.en}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="city" className="mb-1.5 block text-sm font-bold text-navy-deep">
                المدينة / موقع المشروع
              </label>
              <div className="relative">
                <MapPin className="pointer-events-none absolute inset-y-0 end-4 my-auto h-5 w-5 shrink-0 text-muted-foreground" />
                <input
                  id="city"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="مثال: الرياض"
                  className={`${field} pe-12`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="details" className="mb-1.5 block text-sm font-bold text-navy-deep">
                تفاصيل المشروع
              </label>
              <textarea
                id="details"
                rows={3}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                placeholder="المساحة التقريبية، نوع التشطيب، الموعد المناسب..."
                className={`${field} resize-none`}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-amber px-6 py-4 text-base font-black text-accent-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            <Send className="h-5 w-5 shrink-0" />
            إرسال الطلب عبر واتساب
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-whatsapp/40 px-6 py-3.5 text-base font-bold text-whatsapp transition-colors hover:bg-whatsapp/10"
          >
            <MessageCircle className="h-5 w-5 shrink-0" />
            محادثة فورية
          </a>
        </form>
      </div>
    </section>
  );
}
