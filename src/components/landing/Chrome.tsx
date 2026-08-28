import { useEffect, useState } from "react";
import { MessageCircle, Menu, X, Mail, Phone, Languages } from "lucide-react";
import { WHATSAPP_URL, EMAIL, PHONE_DISPLAY, MANAGER, MANAGER_EN } from "@/lib/hamcretes";
import { useLang } from "@/lib/i18n";
import logo from "@/assets/logo.png";

const LINKS = [
  { href: "#home", key: "navHome" },
  { href: "#services", key: "navServices" },
  { href: "#work", key: "navWork" },
  { href: "#why", key: "navWhy" },
  { href: "#booking", key: "navBooking" },
] as const;

function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-primary-foreground/25 bg-primary-foreground/5 p-1 ${className}`}
    >
      <Languages className="mx-1 h-4 w-4 shrink-0 text-amber-bright" />
      {(["ar", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1 text-xs font-black transition-colors ${
            lang === l
              ? "bg-gradient-amber text-accent-foreground"
              : "text-primary-foreground/70 hover:text-primary-foreground"
          }`}
        >
          {l === "ar" ? "عربي" : "EN"}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();

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
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 sm:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Hamcretes / KSA Flooring"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full ring-2 ring-amber/50"
          />
          <div className="min-w-0 leading-tight">
            <p className="truncate font-display text-sm font-bold tracking-wide text-primary-foreground uppercase sm:text-base">
              {t("brandEn")}
            </p>
            <p className="truncate text-xs font-bold text-amber-bright">{t("brandAr")}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-bold text-primary-foreground/80 transition-colors hover:text-amber-bright"
            >
              {t(l.key)}
            </a>
          ))}
          <LangToggle />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-4 py-2 text-sm font-black text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            {t("whatsapp")}
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={t("menu")}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-primary-foreground/25 text-primary-foreground"
          >
            {open ? <X className="h-5 w-5 shrink-0" /> : <Menu className="h-5 w-5 shrink-0" />}
          </button>
        </div>
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
              {t(l.key)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function FloatingWhatsApp() {
  const { t } = useLang();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp")}
      className="animate-pulse-ring fixed bottom-5 end-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-card transition-transform hover:scale-110 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 shrink-0 fill-white sm:h-9 sm:w-9">
        <path d="M16.03 4c-6.6 0-11.96 5.36-11.96 11.96 0 2.1.55 4.16 1.6 5.97L4 28l6.23-1.63a11.9 11.9 0 0 0 5.8 1.48h.01c6.6 0 11.96-5.36 11.96-11.96S22.63 4 16.03 4Zm0 21.6h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.7.97.99-3.6-.24-.37a9.9 9.9 0 0 1-1.52-5.3c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.15 1.04 7.03 2.92a9.87 9.87 0 0 1 2.91 7.03c0 5.49-4.46 9.94-9.95 9.94Zm5.46-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="bg-navy-deep py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-2">
        <div className="flex min-w-0 items-center gap-4">
          <img
            src={logo}
            alt="Hamcretes / KSA Flooring"
            width={72}
            height={72}
            loading="lazy"
            className="h-16 w-16 shrink-0 rounded-full ring-2 ring-amber/50 sm:h-20 sm:w-20"
          />
          <div className="min-w-0">
            <p className="font-display text-lg font-bold tracking-wide text-primary-foreground uppercase">
              {t("footerEn")}
            </p>
            <p className="mt-1 text-base font-black text-amber-bright">{t("footerAr")}</p>
            <p className="mt-2 text-sm text-primary-foreground/60">
              {t("footerManager")}: {lang === "ar" ? MANAGER : MANAGER_EN}
            </p>
          </div>
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
        © {new Date().getFullYear()} Hamcretes — {t("rights")}
      </p>
    </footer>
  );
}
