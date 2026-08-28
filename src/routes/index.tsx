import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Timer, Crosshair, HardHat } from "lucide-react";
import { Hero } from "@/components/landing/Hero";
import { VideoShowcase } from "@/components/landing/VideoShowcase";
import { Services } from "@/components/landing/Services";
import { Portfolio } from "@/components/landing/Portfolio";
import { Booking } from "@/components/landing/Booking";
import { Header, Footer, FloatingWhatsApp } from "@/components/landing/Chrome";
import { LangProvider, useLang } from "@/lib/i18n";

const TITLE = "حمكريتس لمقاولات الخرسانة المطبوعة | Hamcretes";
const DESC =
  "حمكريتس لمقاولات الخرسانة المطبوعة: صبة مطبوعة، دهان ايبوكسي، هلي كابتر، صبة ميول ومستودعات. احجز معاينة مجانية واتساب 0595584104.";
const SITE_URL = "https://hamcretes-landing-shine.lovable.app";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

const WHY = [
  { icon: Crosshair, title: "why1", text: "why1t" },
  { icon: HardHat, title: "why2", text: "why2t" },
  { icon: Timer, title: "why3", text: "why3t" },
  { icon: ShieldCheck, title: "why4", text: "why4t" },
] as const;

function Page() {
  const { t, lang } = useLang();

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VideoShowcase />
        <Services />
        <Portfolio />

        <section id="why" className="bg-secondary py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <h2 className="text-3xl font-black text-navy-deep sm:text-4xl">{t("whyTitle")}</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WHY.map((w) => (
                <div key={w.title} className="rounded-xl bg-card p-6 shadow-card">
                  <w.icon className="h-8 w-8 shrink-0 text-amber" />
                  <h3 className="mt-4 text-lg font-black text-navy-deep">{t(w.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(w.text)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Booking />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Index() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}
