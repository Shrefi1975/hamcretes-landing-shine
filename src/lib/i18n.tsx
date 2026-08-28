import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof AR) => string };

const AR = {
  navHome: "الرئيسية",
  navServices: "خدماتنا",
  navWork: "أعمالنا",
  navWhy: "لماذا نحن",
  navBooking: "احجز الآن",
  whatsapp: "واتساب",
  menu: "القائمة",
  brandEn: "Hamcretes",
  brandAr: "مقاولات الخرسانة المطبوعة",

  heroBadge: "مقاولات الخرسانة المطبوعة — المملكة العربية السعودية",
  heroSub: "حمكريتس لمقاولات الخرسانة المطبوعة",
  heroText:
    "تنفيذ احترافي للصبات المطبوعة، أرضيات الايبوكسي، الهليكوبتر، وصبات الميول والمستودعات — بدقة الليزر وضمان على التشطيب، مع مواد أو بدون مواد.",
  heroCta: "احجز معاينة مجانية",
  heroWa: "واتساب مباشر",

  videoKicker: "Before & After",
  videoTitle: "قبل وبعد — شاهد التحول",
  videoText:
    "فريقنا المتخصص يحوّل الأرضيات الخرسانية الخام إلى أسطح مطبوعة ولامعة بتشطيب مثالي. شاهد مراحل التنفيذ الحقيقية على أرض الموقع من التسوية حتى الختام.",
  videoNote: "تسجيل حقيقي من أحد مواقع التنفيذ",

  servicesKicker: "Our Services",
  servicesTitle: "خدماتنا",
  servicesText: "جميع أعمال الخرسانة والتشطيبات الأرضية تحت سقف واحد، بفريق فني متخصص ومعدات حديثة.",

  workKicker: "Our Work",
  workTitle: "أعمالنا",
  workText: "نماذج من مشاريع منفذة فعلياً: صبات مطبوعة، ممرات، أرضيات ايبوكسي وأعمال هليكوبتر.",

  whyTitle: "لماذا حمكريتس؟",
  why1: "دقة الليزر",
  why1t: "ضبط المناسيب بجهاز الليول لسطح مستوٍ تماماً.",
  why2: "فريق متخصص",
  why2t: "عمالة مدربة ومعدات حديثة لكل نوع من الصبات.",
  why3: "التزام بالمواعيد",
  why3t: "جدول تنفيذ واضح وتسليم في الوقت المحدد.",
  why4: "ضمان التشطيب",
  why4t: "خيار التنفيذ مع مواد أو بدون مواد مع ضمان.",

  contactKicker: "Contact",
  bookingTitle: "احجز خدمتك الآن",
  bookingText: "اختر الخدمة المطلوبة وسنتواصل معك خلال دقائق لتحديد موعد المعاينة وتقديم عرض السعر.",
  manager: "المسؤول",
  phoneLabel: "جوال / واتساب",
  emailLabel: "البريد الإلكتروني",
  formTitle: "اطلب عرض سعر",
  formHint: "الحقول المميزة بـ * مطلوبة",
  fName: "الاسم *",
  fNameP: "الاسم الكامل",
  fPhone: "رقم الجوال *",
  fService: "الخدمة المطلوبة *",
  fServiceP: "اختر الخدمة...",
  fCity: "المدينة / موقع المشروع",
  fCityP: "مثال: الرياض",
  fDetails: "تفاصيل المشروع",
  fDetailsP: "المساحة التقريبية، نوع التشطيب، الموعد المناسب...",
  submit: "إرسال الطلب عبر واتساب",
  chat: "محادثة فورية",
  formAria: "نموذج حجز الخدمة",
  waMsgTitle: "طلب حجز خدمة من موقع حمكريتس",
  waName: "الاسم",
  waPhone: "الجوال",
  waService: "الخدمة المطلوبة",
  waCity: "المدينة/الموقع",
  waDetails: "تفاصيل",

  footerEn: "Hamcretes Stamped Concrete Contractors",
  footerAr: "حمكريتس لمقاولات الخرسانة المطبوعة",
  footerManager: "إدارة",
  rights: "جميع الحقوق محفوظة",
};

const EN: Record<keyof typeof AR, string> = {
  navHome: "Home",
  navServices: "Services",
  navWork: "Our Work",
  navWhy: "Why Us",
  navBooking: "Book Now",
  whatsapp: "WhatsApp",
  menu: "Menu",
  brandEn: "Hamcretes",
  brandAr: "Stamped Concrete Contractors",

  heroBadge: "Stamped Concrete Contractors — Saudi Arabia",
  heroSub: "Complete Flooring Solutions",
  heroText:
    "Professional stamped concrete, epoxy floors, helicopter power-trowel finishing, slope roofs and warehouse slabs — laser-accurate, guaranteed finish, with or without materials supplied.",
  heroCta: "Book a free site visit",
  heroWa: "Chat on WhatsApp",

  videoKicker: "Before & After",
  videoTitle: "Before & After — See the Transformation",
  videoText:
    "Our specialised crew turns raw concrete into stamped, polished, flawless flooring. Watch the real on-site execution stages, from leveling all the way to the final finish.",
  videoNote: "Real footage from one of our project sites",

  servicesKicker: "Our Services",
  servicesTitle: "Our Services",
  servicesText:
    "Every concrete and floor-finishing service under one roof, delivered by a specialised technical team with modern equipment.",

  workKicker: "Our Work",
  workTitle: "Our Work",
  workText:
    "A look at real completed projects: stamped concrete, walkways, epoxy floors and power-trowel finishing.",

  whyTitle: "Why Hamcretes?",
  why1: "Laser Accuracy",
  why1t: "Levels set with laser equipment for a perfectly flat surface.",
  why2: "Specialised Team",
  why2t: "Trained crews and modern machinery for every type of pour.",
  why3: "On-Time Delivery",
  why3t: "A clear execution schedule and delivery on the agreed date.",
  why4: "Finish Warranty",
  why4t: "Execute with or without materials — warranty included.",

  contactKicker: "Contact",
  bookingTitle: "Book Your Service Now",
  bookingText:
    "Pick the service you need and we'll get back to you within minutes to schedule a visit and send a quote.",
  manager: "Manager",
  phoneLabel: "Phone / WhatsApp",
  emailLabel: "Email",
  formTitle: "Request a Quote",
  formHint: "Fields marked with * are required",
  fName: "Name *",
  fNameP: "Full name",
  fPhone: "Mobile number *",
  fService: "Service needed *",
  fServiceP: "Select a service...",
  fCity: "City / project location",
  fCityP: "e.g. Riyadh",
  fDetails: "Project details",
  fDetailsP: "Approximate area, finish type, preferred date...",
  submit: "Send request via WhatsApp",
  chat: "Instant chat",
  formAria: "Service booking form",
  waMsgTitle: "Service request from the Hamcretes website",
  waName: "Name",
  waPhone: "Phone",
  waService: "Service",
  waCity: "City/Location",
  waDetails: "Details",

  footerEn: "Hamcretes Stamped Concrete Contractors",
  footerAr: "Complete Flooring Solutions",
  footerManager: "Managed by",
  rights: "All rights reserved",
};

const DICT = { ar: AR, en: EN };

const LangCtx = createContext<Ctx>({ lang: "ar", setLang: () => {}, t: (k) => AR[k] });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <LangCtx.Provider value={{ lang, setLang, t: (k) => DICT[lang][k] }}>{children}</LangCtx.Provider>
  );
}

export const useLang = () => useContext(LangCtx);
