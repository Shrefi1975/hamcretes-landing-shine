import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Timer, Crosshair, HardHat } from "lucide-react";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Booking } from "@/components/landing/Booking";
import { Header, Footer, FloatingWhatsApp } from "@/components/landing/Chrome";

const TITLE = "حمكريتس لمقاولات الخرسانة المطبوعة | Hamcretes";
const DESC =
  "حمكريتس لمقاولات الخرسانة المطبوعة: صبة مطبوعة، دهان ايبوكسي، هلي كابتر، صبة ميول ومستودعات. احجز معاينة مجانية واتساب 0595584104.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHY = [
  { icon: Crosshair, title: "دقة الليزر", text: "ضبط المناسيب بجهاز الليول لسطح مستوٍ تماماً." },
  { icon: HardHat, title: "فريق متخصص", text: "عمالة مدربة ومعدات حديثة لكل نوع من الصبات." },
  { icon: Timer, title: "التزام بالمواعيد", text: "جدول تنفيذ واضح وتسليم في الوقت المحدد." },
  { icon: ShieldCheck, title: "ضمان التشطيب", text: "خيار التنفيذ مع مواد أو بدون مواد مع ضمان." },
];

function Index() {
  return (
    <div dir="rtl" className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />

        <section id="why" className="bg-secondary py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <h2 className="text-3xl font-black text-navy-deep sm:text-4xl">لماذا حمكريتس؟</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WHY.map((w) => (
                <div key={w.title} className="rounded-xl bg-card p-6 shadow-card">
                  <w.icon className="h-8 w-8 shrink-0 text-amber" />
                  <h3 className="mt-4 text-lg font-black text-navy-deep">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
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
