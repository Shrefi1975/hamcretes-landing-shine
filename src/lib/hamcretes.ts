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
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  { ar: "سقف ميول", en: "Slope Roofs", desc: "صبات ميول للأسطح بانحدار دقيق لتصريف المياه بالكامل.", icon: Layers },
  { ar: "صبة مطبوعة", en: "Stamped Concrete", desc: "خرسانة مطبوعة بنقوش الحجر والطوب بألوان ثابتة.", icon: Stamp },
  { ar: "تفتفة", en: "Textured Finishing", desc: "تشطيب خشن مانع للانزلاق للممرات والمنحدرات.", icon: Sparkles },
  { ar: "صبة ميزانية", en: "Leveling Screed", desc: "صبة ميزانية مستوية تماماً بالليزر قبل التشطيب.", icon: Ruler },
  { ar: "صبة مروحة", en: "Power Trowel Concrete", desc: "تنعيم بالمروحة لسطح صلب لامع عالي التحمل.", icon: Fan },
  { ar: "صبة محطة عمارة", en: "Building Station Concrete", desc: "صبات المحطات والعمائر بجودة إنشائية معتمدة.", icon: Building2 },
  { ar: "مستودعات", en: "Warehouse Flooring", desc: "أرضيات مستودعات تتحمل الأحمال الثقيلة والرافعات.", icon: Warehouse },
  { ar: "ليول جهاز", en: "Laser Leveling", desc: "ضبط المناسيب بجهاز الليول لدقة متناهية.", icon: Crosshair },
  { ar: "هلي كابتر", en: "Helicopter Finishing", desc: "تشطيب هليكوبتر احترافي لسطح مرآوي متين.", icon: Wind },
  { ar: "سكريت وأسفلت", en: "Screed & Asphalt", desc: "أعمال السكريت والأسفلت للساحات والمداخل.", icon: MountainSnow },
  { ar: "سطح ميول", en: "Slope Surfaces", desc: "معالجة أسطح الميول وعزلها ضد تجمع المياه.", icon: Layers },
  { ar: "دهان ايبوكسي", en: "Epoxy Coating", desc: "دهان ايبوكسي لامع للمصانع والمستودعات والمواقف.", icon: Paintbrush },
  { ar: "صبة ديكور", en: "Decorative Concrete", desc: "صبات ديكور ملونة بتصاميم وأنماط مميزة.", icon: Gem },
  { ar: "الختام مع مواد بدون مواد", en: "Finishing With / Without Materials", desc: "خيار توريد المواد أو التنفيذ فقط حسب رغبتك.", icon: BadgeCheck },
];

export const PHONE_DISPLAY = "0595584104";
export const WHATSAPP_URL = "https://wa.me/966595584104";
export const EMAIL = "hamcretes@gmail.com";
export const MANAGER = "عميس باكستاني";
