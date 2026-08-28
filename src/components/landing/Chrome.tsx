import { useEffect, useState } from "react";
import { MessageCircle, Menu, X, Mail, Phone } from "lucide-react";
import { WHATSAPP_URL, EMAIL, PHONE_DISPLAY, MANAGER } from "@/lib/hamcretes";

const LINKS = [
  { href: "#home", label: "الرئيسية" },
  { href: "#services", label: "خدماتنا" },
  { href: "#why", label: "لماذا نحن" },
  { href: "#booking", label: "احجز الآن" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-navy-deep/95 shadow-card backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-gradient-amber font-display text-lg font-bold text-accent-foreground">
            H
          </div>
          <div className="min-w-0 leading-tight">
            <p className="truncate font-display text-sm font-bold tracking-wide text-primary-foreground uppercase sm:text-base">
              Hamcretes
            </p>
            <p className="truncate text-xs font-bold text-amber-bright">مقاولات الخرسانة المطبوعة</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-bold text-primary-foreground/80 transition-colors hover:text-amber-bright"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-4 py-2 text-sm font-black text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            واتساب
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-primary-foreground/25 text-primary-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5 shrink-0" /> : <Menu className="h-5 w-5 shrink-0" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-primary-foreground/10 bg-navy-deep px-5 pb-5 lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-primary-foreground/10 py-3 text-base font-bold text-primary-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="animate-pulse-ring fixed bottom-5 end-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 font-black text-primary-foreground shadow-card transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6 shrink-0" />
      <span className="hidden sm:inline">واتساب</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-2">
        <div className="min-w-0">
          <p className="font-display text-lg font-bold tracking-wide text-primary-foreground uppercase">
            Hamcretes Stamped Concrete Contractors
          </p>
          <p className="mt-1 text-base font-black text-amber-bright">حمكريتس لمقاولات الخرسانة المطبوعة</p>
          <p className="mt-2 text-sm text-primary-foreground/60">إدارة: {MANAGER}</p>
        </div>
        <div className="flex flex-wrap items-start gap-4 md:justify-end">
          <a
            href={`tel:+966${PHONE_DISPLAY.slice(1)}`}
            dir="ltr"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary-foreground/80 hover:text-amber-bright"
          >
            <Phone className="h-4 w-4 shrink-0" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            dir="ltr"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary-foreground/80 hover:text-amber-bright"
          >
            <Mail className="h-4 w-4 shrink-0" />
            {EMAIL}
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-primary-foreground/45">
        © {new Date().getFullYear()} Hamcretes — جميع الحقوق محفوظة
      </p>
    </footer>
  );
}
