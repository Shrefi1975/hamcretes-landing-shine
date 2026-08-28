import {
  Layers,
  Stamp,
  Sparkles,
  Ruler,
  Fan,
  Building2,
  Warehouse,
  Crosshair,
  Wind,
  MountainSnow,
  Paintbrush,
  Gem,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  ar: string;
  en: string;
  desc: string;
  descEn: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    ar: "سقف ميول",
    en: "Slope Roofs",
    desc: "صبات ميول للأسطح بانحدار دقيق لتصريف المياه بالكامل.",
    descEn: "Sloped roof screeds with precise falls for complete water drainage.",
    icon: Layers,
  },
  {
    ar: "صبة مطبوعة",
    en: "Stamped Concrete",
    desc: "خرسانة مطبوعة بنقوش الحجر والطوب بألوان ثابتة.",
    descEn: "Stamped concrete in stone and brick patterns with colorfast pigments.",
    icon: Stamp,
  },
  {
    ar: "تفتفة",
    en: "Textured Finishing",
    desc: "تشطيب خشن مانع للانزلاق للممرات والمنحدرات.",
    descEn: "Rough anti-slip texture for walkways and ramps.",
    icon: Sparkles,
  },
  {
    ar: "صبة ميزانية",
    en: "Leveling Screed",
    desc: "صبة ميزانية مستوية تماماً بالليزر قبل التشطيب.",
    descEn: "Perfectly laser-leveled screed prepared before finishing.",
    icon: Ruler,
  },
  {
    ar: "صبة مروحة",
    en: "Power Trowel Concrete",
    desc: "تنعيم بالمروحة لسطح صلب لامع عالي التحمل.",
    descEn: "Power-trowel smoothing for a hard, glossy, high-durability surface.",
    icon: Fan,
  },
  {
    ar: "صبة محطة عمارة",
    en: "Building Station Concrete",
    desc: "صبات المحطات والعمائر بجودة إنشائية معتمدة.",
    descEn: "Station and building pours to certified structural quality.",
    icon: Building2,
  },
  {
    ar: "مستودعات",
    en: "Warehouse Flooring",
    desc: "أرضيات مستودعات تتحمل الأحمال الثقيلة والرافعات.",
    descEn: "Warehouse floors built for heavy loads and forklift traffic.",
    icon: Warehouse,
  },
  {
    ar: "ليول جهاز",
    en: "Laser Leveling",
    desc: "ضبط المناسيب بجهاز الليول لدقة متناهية.",
    descEn: "Level setting with laser instruments for extreme accuracy.",
    icon: Crosshair,
  },
  {
    ar: "هلي كابتر",
    en: "Helicopter Finishing",
    desc: "تشطيب هليكوبتر احترافي لسطح مرآوي متين.",
    descEn: "Professional helicopter finishing for a durable mirror-like surface.",
    icon: Wind,
  },
  {
    ar: "سكريت وأسفلت",
    en: "Screed & Asphalt",
    desc: "أعمال السكريت والأسفلت للساحات والمداخل.",
    descEn: "Screed and asphalt works for yards and driveways.",
    icon: MountainSnow,
  },
  {
    ar: "سطح ميول",
    en: "Slope Surfaces",
    desc: "معالجة أسطح الميول وعزلها ضد تجمع المياه.",
    descEn: "Slope surface treatment and waterproofing against ponding.",
    icon: Layers,
  },
  {
    ar: "دهان ايبوكسي",
    en: "Epoxy Coating",
    desc: "دهان ايبوكسي لامع للمصانع والمستودعات والمواقف.",
    descEn: "Glossy epoxy coating for factories, warehouses and parking areas.",
    icon: Paintbrush,
  },
  {
    ar: "صبة ديكور",
    en: "Decorative Concrete",
    desc: "صبات ديكور ملونة بتصاميم وأنماط مميزة.",
    descEn: "Colored decorative concrete with distinctive designs and patterns.",
    icon: Gem,
  },
  {
    ar: "الختام مع مواد بدون مواد",
    en: "Finishing With / Without Materials",
    desc: "خيار توريد المواد أو التنفيذ فقط حسب رغبتك.",
    descEn: "Choose full material supply or execution only — your call.",
    icon: BadgeCheck,
  },
];

export const PHONE_DISPLAY = "0595584104";
export const WHATSAPP_URL = "https://wa.me/966595584104";
export const EMAIL = "hamcretes@gmail.com";
export const MANAGER = "عميس باكستاني";
export const MANAGER_EN = "Omaiss Pakistani";
