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

import svc1 from "@/assets/svc-1.jpg";
import svc2 from "@/assets/svc-2.jpg";
import svc3 from "@/assets/svc-3.jpg";
import svc4 from "@/assets/svc-4.jpg";
import svc5 from "@/assets/svc-5.jpg";
import svc6 from "@/assets/svc-6.jpg";
import svc7 from "@/assets/svc-7.jpg";
import svc8 from "@/assets/svc-8.jpg";
import svc9 from "@/assets/svc-9.jpg";
import svc10 from "@/assets/svc-10.jpg";
import svc11 from "@/assets/svc-11.jpg";
import svc12 from "@/assets/svc-12.jpg";
import svc13 from "@/assets/svc-13.jpg";
import svc14 from "@/assets/svc-14.jpg";

export type Service = {
  ar: string;
  en: string;
  desc: string;
  descEn: string;
  icon: LucideIcon;
  img: string;
  points: string[];
  pointsEn: string[];
};

export const SERVICES: Service[] = [
  {
    ar: "سقف ميول",
    en: "Slope Roofs",
    desc: "صبات ميول للأسطح بانحدار دقيق لتصريف المياه بالكامل.",
    descEn: "Sloped roof screeds with precise falls for complete water drainage.",
    img: svc1,
    points: ["تنفيذ ميول بانحدار محسوب حسب مواقع التصريف", "طبقة عزل مائي قبل الصبة عند الطلب", "منع تجمع المياه وتشققات الأسطح", "تسليم مع اختبار غمر للتأكد من التصريف"],
    pointsEn: ["Falls calculated to drainage points", "Optional waterproofing layer before pouring", "Prevents ponding and surface cracking", "Handover with a flood test"],
    icon: Layers,
  },
  {
    ar: "صبة مطبوعة",
    en: "Stamped Concrete",
    desc: "خرسانة مطبوعة بنقوش الحجر والطوب بألوان ثابتة.",
    descEn: "Stamped concrete in stone and brick patterns with colorfast pigments.",
    img: svc2,
    points: ["قوالب نقوش حجر طبيعي وطوب وخشب", "ألوان ثابتة مقاومة للشمس والأشعة", "طبقة سيلر لامعة أو مطفية للحماية", "مقاومة عالية للأحمال والاحتكاك"],
    pointsEn: ["Natural stone, brick and wood pattern mats", "UV-stable colorfast pigments", "Gloss or matte protective sealer", "High resistance to loads and abrasion"],
    icon: Stamp,
  },
  {
    ar: "تفتفة",
    en: "Textured Finishing",
    desc: "تشطيب خشن مانع للانزلاق للممرات والمنحدرات.",
    descEn: "Rough anti-slip texture for walkways and ramps.",
    img: svc3,
    points: ["تشطيب خشن مانع للانزلاق", "مثالي للمنحدرات والممرات ومداخل السيارات", "درجات خشونة حسب الاستخدام", "سهل التنظيف ومقاوم للرطوبة"],
    pointsEn: ["Rough anti-slip finishing", "Ideal for ramps, walkways and entrances", "Texture grade to suit the use", "Easy to clean, moisture resistant"],
    icon: Sparkles,
  },
  {
    ar: "صبة ميزانية",
    en: "Leveling Screed",
    desc: "صبة ميزانية مستوية تماماً بالليزر قبل التشطيب.",
    descEn: "Perfectly laser-leveled screed prepared before finishing.",
    img: svc4,
    points: ["ضبط المناسيب بجهاز الليزر", "سطح مستوٍ تماماً جاهز للتشطيب النهائي", "سماكات حسب مواصفات المشروع", "أساس مثالي للايبوكسي أو البورسلان"],
    pointsEn: ["Levels set with laser equipment", "Perfectly flat base ready for final finish", "Thickness per project specification", "Ideal base for epoxy or porcelain"],
    icon: Ruler,
  },
  {
    ar: "صبة مروحة",
    en: "Power Trowel Concrete",
    desc: "تنعيم بالمروحة لسطح صلب لامع عالي التحمل.",
    descEn: "Power-trowel smoothing for a hard, glossy, high-durability surface.",
    img: svc5,
    points: ["تنعيم بالمروحة الميكانيكية على مراحل", "سطح صلب عالي المقاومة للتآكل", "تقليل الغبار الخرساني", "إمكانية إضافة هاردنر ملون"],
    pointsEn: ["Staged mechanical power-trowel smoothing", "Hard, highly wear-resistant surface", "Reduced concrete dusting", "Optional colored surface hardener"],
    icon: Fan,
  },
  {
    ar: "صبة محطة عمارة",
    en: "Building Station Concrete",
    desc: "صبات المحطات والعمائر بجودة إنشائية معتمدة.",
    descEn: "Station and building pours to certified structural quality.",
    img: svc6,
    points: ["صبات محطات وعمائر بجودة إنشائية", "التزام بالمخططات والمواصفات المعتمدة", "فرق عمل ومعدات ضخ متكاملة", "إشراف فني على كامل مراحل الصب"],
    pointsEn: ["Station and building pours, structural grade", "Executed to approved drawings and specs", "Full crews and concrete pumping", "Technical supervision through every stage"],
    icon: Building2,
  },
  {
    ar: "مستودعات",
    en: "Warehouse Flooring",
    desc: "أرضيات مستودعات تتحمل الأحمال الثقيلة والرافعات.",
    descEn: "Warehouse floors built for heavy loads and forklift traffic.",
    img: svc7,
    points: ["تحمل أحمال الرافعات الشوكية والرفوف", "معالجة الفواصل ومنع التشققات", "خيار الهاردنر أو الايبوكسي للتشطيب", "تنفيذ على مساحات كبيرة بسرعة"],
    pointsEn: ["Withstands forklift traffic and racking loads", "Joint treatment to prevent cracking", "Hardener or epoxy finish option", "Fast delivery over large areas"],
    icon: Warehouse,
  },
  {
    ar: "ليول جهاز",
    en: "Laser Leveling",
    desc: "ضبط المناسيب بجهاز الليول لدقة متناهية.",
    descEn: "Level setting with laser instruments for extreme accuracy.",
    img: svc8,
    points: ["قياسات دقيقة بجهاز الليول", "تقارير مناسيب قبل وبعد التنفيذ", "تقليل الهدر في المواد", "دقة تصل إلى ملليمترات"],
    pointsEn: ["Precise measurements with laser instruments", "Level reports before and after works", "Less material waste", "Millimetre-level accuracy"],
    icon: Crosshair,
  },
  {
    ar: "هلي كابتر",
    en: "Helicopter Finishing",
    desc: "تشطيب هليكوبتر احترافي لسطح مرآوي متين.",
    descEn: "Professional helicopter finishing for a durable mirror-like surface.",
    img: svc9,
    points: ["تشطيب هليكوبتر لسطح مرآوي", "صلابة سطحية عالية جداً", "مظهر لامع دائم بدون طبقات إضافية", "مناسب للمصانع والمعارض"],
    pointsEn: ["Helicopter finish for a mirror-like surface", "Extremely high surface hardness", "Lasting shine with no extra coatings", "Suited to factories and showrooms"],
    icon: Wind,
  },
  {
    ar: "سكريت وأسفلت",
    en: "Screed & Asphalt",
    desc: "أعمال السكريت والأسفلت للساحات والمداخل.",
    descEn: "Screed and asphalt works for yards and driveways.",
    img: svc10,
    points: ["أعمال سكريت وأسفلت للساحات والمداخل", "طبقات أساس مدكوكة قبل التنفيذ", "تشطيب مستوٍ يتحمل حركة المركبات", "تنفيذ سريع وتسليم نظيف"],
    pointsEn: ["Screed and asphalt for yards and entrances", "Compacted base layers before execution", "Level finish for vehicle traffic", "Fast execution and clean handover"],
    icon: MountainSnow,
  },
  {
    ar: "سطح ميول",
    en: "Slope Surfaces",
    desc: "معالجة أسطح الميول وعزلها ضد تجمع المياه.",
    descEn: "Slope surface treatment and waterproofing against ponding.",
    img: svc11,
    points: ["معالجة أسطح الميول القديمة والجديدة", "عزل مائي وحراري حسب الحاجة", "إصلاح مواقع التسريب والتجمعات", "ضمان على أعمال العزل"],
    pointsEn: ["Treatment of new and existing slope surfaces", "Waterproofing and thermal insulation as needed", "Repair of leaks and ponding spots", "Warranty on insulation works"],
    icon: Layers,
  },
  {
    ar: "دهان ايبوكسي",
    en: "Epoxy Coating",
    desc: "دهان ايبوكسي لامع للمصانع والمستودعات والمواقف.",
    descEn: "Glossy epoxy coating for factories, warehouses and parking areas.",
    img: svc12,
    points: ["ايبوكسي ذاتي التسوية أو متعدد الطبقات", "مقاوم للزيوت والكيماويات", "ألوان حسب اختيارك مع خطوط تنظيم", "مثالي للمصانع والمستودعات والمواقف"],
    pointsEn: ["Self-levelling or multi-layer epoxy", "Resistant to oils and chemicals", "Custom colors with marking lines", "Ideal for factories, warehouses, parking"],
    icon: Paintbrush,
  },
  {
    ar: "صبة ديكور",
    en: "Decorative Concrete",
    desc: "صبات ديكور ملونة بتصاميم وأنماط مميزة.",
    descEn: "Colored decorative concrete with distinctive designs and patterns.",
    img: svc13,
    points: ["تصاميم وأنماط وميداليات مخصصة", "خلطات ألوان وتدرجات مميزة", "مناسب للحدائق والمداخل والفلل", "تنفيذ حسب تصميمك أو اقتراحنا"],
    pointsEn: ["Custom designs, patterns and medallions", "Distinctive color blends and gradients", "Great for gardens, entrances and villas", "Built to your design or ours"],
    icon: Gem,
  },
  {
    ar: "الختام مع مواد بدون مواد",
    en: "Finishing With / Without Materials",
    desc: "خيار توريد المواد أو التنفيذ فقط حسب رغبتك.",
    descEn: "Choose full material supply or execution only — your call.",
    img: svc14,
    points: ["خيار توريد كامل للمواد", "أو تنفيذ فقط بمواد العميل", "عرض سعر واضح بدون رسوم مخفية", "ضمان على جودة التنفيذ"],
    pointsEn: ["Full material supply option", "Or execution only using your materials", "Clear quote with no hidden fees", "Warranty on workmanship"],
    icon: BadgeCheck,
  },
];

export const PHONE_DISPLAY = "0595584104";
export const WHATSAPP_URL = "https://wa.me/966595584104";
export const EMAIL = "hamcretes@gmail.com";
export const MANAGER = "عميس باكستاني";
export const MANAGER_EN = "Omaiss Pakistani";
