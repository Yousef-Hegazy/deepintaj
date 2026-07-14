// Centralized SEO configuration for Deepintaj
// Do NOT fabricate business information that is unverified.

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
const SITE_URL = rawUrl.replace(/\/+$/, "") || "http://localhost:3000";
const LOGO_PATH = "/images/deepintaj-logo-transparent.png";
const LOGO_URL = `${SITE_URL}${LOGO_PATH}`;

export const siteConfig = {
  url: SITE_URL,
  logoUrl: LOGO_URL,
  logoPath: LOGO_PATH,

  name: {
    ar: "ديبنتاج",
    en: "Deepintaj",
  } as Record<string, string>,

  titleTemplate: {
    ar: "%s | ديبنتاج",
    en: "%s | Deepintaj",
  } as Record<string, string>,

  defaultTitle: {
    ar: "ديبنتاج | استشارات هندسية وتحسين العمليات التشغيلية",
    en: "Deepintaj | Engineering & Operational Consulting in Saudi Arabia",
  } as Record<string, string>,

  defaultDescription: {
    ar: "ديبنتاج شركة استشارات هندسية وتشغيلية في السعودية متخصصة في إعادة هندسة العمليات، رفع الكفاءة التشغيلية، مراجعة المخططات، فحص المباني والإشراف الهندسي.",
    en: "Deepintaj provides engineering and operational consulting in Saudi Arabia, including process reengineering, operational improvement, drawing review, building inspection and engineering supervision.",
  } as Record<string, string>,

  applicationName: {
    ar: "ديبنتاج",
    en: "Deepintaj",
  } as Record<string, string>,

  locales: ["ar", "en"] as const,
  defaultLocale: "ar" as const,

  localeReplace: {
    ar: "ar-SA",
    en: "en",
  } as Record<string, string>,

  openGraph: {
    locale: {
      ar: "ar_SA",
      en: "en_US",
    } as Record<string, string>,
    siteName: {
      ar: "ديبنتاج",
      en: "Deepintaj",
    } as Record<string, string>,
    imageWidth: 1200,
    imageHeight: 630,
  },

  // Verified contact information from repository
  contact: {
    telephone: "+966590029324",
    whatsapp: "https://wa.me/966590029324",
  },

  // ⚠️ UNVERIFIED BUSINESS FACTS — require owner confirmation
  // Do not use these values until verified by the business owner.
  missing: {
    email: null as string | null,
    address: null as string | null,
    foundingDate: null as string | null,
    licenseNumber: null as string | null,
    socialProfiles: null as string[] | null,
    searchConsoleVerification: null as string | null,
  },
};

export function getAlternates(locale: string) {
  const baseUrl = siteConfig.url;
  return {
    canonical: `${baseUrl}/${locale}`,
    languages: {
      "ar-SA": `${baseUrl}/ar`,
      en: `${baseUrl}/en`,
      "x-default": `${baseUrl}/ar`,
    },
  };
}

export function getOrganizationSchema(locale: string) {
  const isAr = locale === "ar";
  const name = isAr ? "ديبنتاج" : "Deepintaj";
  const altName = isAr ? "Deepintaj" : "ديبنتاج";
  const description = isAr
    ? "ديبنتاج شركة استشارات هندسية وتشغيلية في السعودية متخصصة في إعادة هندسة العمليات، رفع الكفاءة التشغيلية، مراجعة المخططات، فحص المباني والإشراف الهندسي."
    : "Deepintaj provides engineering and operational consulting in Saudi Arabia, including process reengineering, operational improvement, drawing review, building inspection and engineering supervision.";

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name,
    alternateName: altName,
    url: siteConfig.url,
    logo: siteConfig.logoUrl,
    description,
    areaServed: { "@type": "Country", name: "SA" },
    knowsLanguage: ["ar", "en"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.telephone,
        contactType: "customer service",
        availableLanguage: ["Arabic", "English"],
      },
    ],
  };

  // Only include sameAs if social profiles are verified
  // Currently none are verified — omit

  // Only include address if verified
  // Currently unverified — omit

  return schema;
}

export function getWebsiteSchema(locale: string) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: isAr ? "ديبنتاج" : "Deepintaj",
    inLanguage: isAr ? "ar-SA" : "en",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function getWebpageSchema(locale: string) {
  const isAr = locale === "ar";
  const siteUrl = siteConfig.url;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/${locale}#webpage`,
    url: `${siteUrl}/${locale}`,
    name: isAr
      ? "ديبنتاج | استشارات هندسية وتحسين العمليات التشغيلية"
      : "Deepintaj | Engineering & Operational Consulting in Saudi Arabia",
    description: isAr
      ? "ديبنتاج شركة استشارات هندسية وتشغيلية في السعودية متخصصة في إعادة هندسة العمليات، رفع الكفاءة التشغيلية، مراجعة المخططات، فحص المباني والإشراف الهندسي."
      : "Deepintaj provides engineering and operational consulting in Saudi Arabia, including process reengineering, operational improvement, drawing review, building inspection and engineering supervision.",
    inLanguage: isAr ? "ar-SA" : "en",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
  };
}

export function getServiceSchema(locale: string) {
  const isAr = locale === "ar";
  const siteUrl = siteConfig.url;

  const services = [
    {
      id: "business-process-reengineering",
      name: isAr ? "إعادة هندسة وتصميم العمليات" : "Business Process Reengineering & Design",
      description: isAr
        ? "تحليل تدفق العمل الحالي، وتحديد نقاط الهدر والاختناق، وإعادة تصميم العمليات لرفع الكفاءة وخفض التكاليف التشغيلية."
        : "Analyze current workflow, identify waste and bottlenecks, and redesign processes to increase efficiency and reduce operational costs.",
      section: "#services",
      serviceType: isAr ? "إعادة هندسة العمليات" : "Business Process Reengineering",
    },
    {
      id: "operational-assessment",
      name: isAr ? "التقييم التشغيلي وتحسين العمليات" : "Operational Assessment & Process Improvement",
      description: isAr
        ? "تشخيص التحديات التشغيلية، تقديم توصيات فورية، وتحديد مسار العمل المستقبلي لتحسين الأداء."
        : "Diagnose operational challenges, provide immediate recommendations, and define the path forward for performance improvement.",
      section: "#assessment",
      serviceType: isAr ? "تحسين العمليات التشغيلية" : "Operational Assessment",
    },
    {
      id: "mechanical-drawing-review",
      name: isAr ? "مراجعة وتدقيق المخططات الميكانيكية" : "Mechanical Drawing Review & Audit",
      description: isAr
        ? "ضمان خلو المخططات من الأخطاء قبل بدء التنفيذ ومراجعة المخططات الميكانيكية للتوافق مع المعايير."
        : "Ensure drawings are error-free before execution begins and review mechanical drawings for standards compliance.",
      section: "#services",
      serviceType: isAr ? "مراجعة المخططات" : "Drawing Review",
    },
    {
      id: "building-inspection",
      name: isAr ? "فحص المباني والمنشآت" : "Building & Engineering Inspection",
      description: isAr
        ? "تقارير فنية دقيقة لسلامة وجودة البناء وفحص هندسي للمباني والمنشآت الصناعية والتجارية."
        : "Precise technical reports on construction quality and safety, and engineering inspection of industrial and commercial facilities.",
      section: "#services",
      serviceType: isAr ? "فحص المباني" : "Building Inspection",
    },
    {
      id: "supplier-evaluation",
      name: isAr ? "تقييم الموردين الفني" : "Supplier Technical Evaluation",
      description: isAr
        ? "تقييم قدرات الموردين الفنية والتشغيلية لضمان الجودة والموثوقية في سلسلة التوريد."
        : "Evaluate supplier technical and operational capabilities to ensure quality and reliability in the supply chain.",
      section: "#services",
      serviceType: isAr ? "تقييم الموردين" : "Supplier Evaluation",
    },
    {
      id: "mechanical-supervision",
      name: isAr ? "الإشراف على الأعمال الميكانيكية" : "Mechanical Execution Supervision",
      description: isAr
        ? "إشراف ميداني على تنفيذ الأعمال الميكانيكية لضمان التطابق مع المواصفات والمخططات."
        : "On-site supervision of mechanical execution to ensure compliance with specifications and drawings.",
      section: "#services",
      serviceType: isAr ? "الإشراف الهندسي" : "Engineering Supervision",
    },
  ];

  return services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/${locale}${s.section}#${s.id}`,
    name: s.name,
    description: s.description,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": "Country", name: "SA" },
    serviceType: s.serviceType,
    url: `${siteUrl}/${locale}${s.section}`,
  }));
}
