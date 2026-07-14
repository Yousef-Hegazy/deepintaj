You are a senior technical SEO engineer and Next.js specialist working inside the existing bilingual Deepintaj repository.

The site is nearly finished. Do not redesign it or rebuild working sections. Your task is to perform a focused, production-grade SEO implementation for maximum legitimate organic visibility in Saudi Arabia for Deepintaj’s actual engineering and operational consulting services.

Deepintaj is a Saudi engineering and operations consultancy serving businesses, industrial organizations, property owners, developers, contractors, and other organizations.

Its primary service themes include:

* Business process reengineering
* Process design and operational improvement
* Operational diagnosis and assessment
* Process mapping and workflow analysis
* Waste and inefficiency identification
* Continuous improvement
* Engineering consulting
* Mechanical drawing review
* Building inspection
* Engineering and technical inspection
* Supplier evaluation
* Mechanical execution supervision
* Engineering project supervision

The site supports:

* Arabic at `/ar`
* English at `/en`

Arabic is the primary market language.

Do not promise or claim guaranteed Google rankings.

Do not use spam, hidden text, doorway pages, fabricated locations, fabricated reviews, link schemes, keyword stuffing, misleading schema, or duplicated pages created solely to target keyword variants.

Do not use Git commands.

Do not broadly redesign the site.

==================================================
FIRST: INSPECT THE CURRENT IMPLEMENTATION
=========================================

Inspect only the files relevant to SEO and routing, including:

* `package.json`
* `next.config.ts`
* `app/layout.tsx`
* `app/[locale]/layout.tsx`
* `app/[locale]/page.tsx`
* `app/globals.css`
* `i18n/routing.ts`
* `i18n/request.ts`
* `messages/ar.json`
* `messages/en.json`
* `proxy.ts`
* Existing files under `public`
* Existing favicon, logo, social image, manifest, robots, and sitemap files
* Any environment variables or configuration that define the production domain

Determine:

* The real production domain, if configured
* The exact company name used in both languages
* Whether a physical address, telephone number, email, license number, or social profiles are already present
* Whether robots, sitemap, canonical metadata, Open Graph metadata, structured data, and Search Console verification already exist

Never invent missing business information.

When a required business fact is unavailable, centralize it as an explicit placeholder or clearly report it as unresolved.

==================================================
SEO PRINCIPLES
==============

Implement SEO around real search intent and business relevance.

Do not try to rank one static landing page for every vague query related to “industry.”

Prioritize qualified search themes that match Deepintaj’s services and likely customers.

Arabic primary topic clusters:

* استشارات هندسية
* مكتب استشارات هندسية
* شركة استشارات هندسية
* استشارات هندسية في السعودية
* استشارات هندسية في الرياض
* خدمات هندسية للشركات
* استشارات تشغيلية
* تحسين العمليات التشغيلية
* إعادة هندسة العمليات
* إعادة هندسة إجراءات العمل
* هندسة العمليات
* تحليل وتطوير العمليات
* تصميم العمليات والإجراءات
* تحسين كفاءة العمليات
* رفع الكفاءة التشغيلية
* تقييم الأداء التشغيلي
* التقييم التشغيلي
* تشخيص العمليات
* خرائط العمليات
* تحسين سير العمل
* تقليل الهدر التشغيلي
* التحسين المستمر
* مراجعة المخططات الميكانيكية
* فحص المباني
* فحص هندسي للمباني
* الإشراف على الأعمال الميكانيكية
* الإشراف الهندسي على التنفيذ
* تقييم الموردين
* استشارات هندسية للقطاع الصناعي
* استشارات للمصانع والمنشآت
* تحسين عمليات المصانع
* تحسين الإنتاجية في المنشآت

English supporting topic clusters:

* engineering consulting Saudi Arabia
* engineering consultancy Riyadh
* operational consulting Saudi Arabia
* business process reengineering Saudi Arabia
* process improvement consulting
* operational assessment
* process mapping consulting
* workflow optimization
* operational efficiency consulting
* continuous improvement consulting
* mechanical drawing review
* building inspection Saudi Arabia
* engineering inspection services
* mechanical execution supervision
* supplier technical evaluation
* industrial engineering consulting
* factory process improvement
* engineering consulting for businesses

These are semantic topic themes, not a requirement to repeat every phrase.

Use language naturally and professionally.

Do not place city names such as Riyadh, Jeddah, Dammam, or Khobar in visible content or metadata unless the company genuinely serves or operates in those areas and the repository confirms that claim.

Saudi Arabia can be targeted where accurate.

==================================================

1. CENTRAL SEO CONFIGURATION
   ==================================================

Create one small typed SEO configuration module, for example:

* `lib/seo.ts`

Centralize:

* Production site URL
* Arabic company name
* English company name
* Default title template
* Default descriptions
* Default locale
* Supported locales
* Logo URL
* Default Open Graph image URL
* Contact details already verified in the repository
* Social profile URLs already verified in the repository

Use a production environment variable such as:

* `NEXT_PUBLIC_SITE_URL`

Normalize it by removing a trailing slash.

If the production domain already exists in configuration, reuse it.

Do not silently use `localhost` in production metadata.

During development, a localhost fallback is acceptable, but report that the production environment variable must be configured before deployment.

==================================================
2. METADATA BASE AND LOCALIZED METADATA
=======================================

Implement metadata using the Next.js Metadata API.

Do not manually insert a `<head>` element.

Set `metadataBase` to the verified production domain.

Create localized metadata for `/ar` and `/en` using `generateMetadata`.

Arabic should have distinct Arabic metadata and English should have distinct English metadata.

Use concise, human-readable titles rather than lists of keywords.

Recommended title direction:

Arabic homepage title:

`ديبنتاج | استشارات هندسية وتحسين العمليات التشغيلية`

English homepage title:

`Deepintaj | Engineering & Operational Consulting in Saudi Arabia`

Recommended Arabic description direction:

`ديبنتاج شركة استشارات هندسية وتشغيلية في السعودية متخصصة في إعادة هندسة العمليات، رفع الكفاءة التشغيلية، مراجعة المخططات، فحص المباني والإشراف الهندسي.`

Recommended English description direction:

`Deepintaj provides engineering and operational consulting in Saudi Arabia, including process reengineering, operational improvement, drawing review, building inspection and engineering supervision.`

Review final lengths for readability, but do not optimize around a rigid character count at the expense of meaning.

Include:

* `title`
* `description`
* `applicationName`
* `authors` or `creator` only when accurate
* `publisher`
* `category`
* `keywords` as a modest, relevant supporting list
* `alternates`
* `openGraph`
* `twitter`
* `robots`
* Relevant icon metadata if not handled through files

Do not rely on the `keywords` field to achieve rankings.

Do not repeat the same phrase dozens of times.

Use a title template where appropriate:

* Arabic: `%s | ديبنتاج`
* English: `%s | Deepintaj`

Avoid duplicated brand names such as:

`Deepintaj | Deepintaj | Engineering Consulting`

==================================================
3. CANONICAL AND HREFLANG
=========================

Implement self-referencing canonical URLs:

* Arabic canonical: `{SITE_URL}/ar`
* English canonical: `{SITE_URL}/en`

Do not canonicalize both languages to the same URL.

Add language alternates:

* `ar-SA` → `{SITE_URL}/ar`
* `en` → `{SITE_URL}/en`
* `x-default` → `{SITE_URL}/ar`

Use the exact same alternate mapping on both localized pages.

Ensure:

* `/ar` references `/en`
* `/en` references `/ar`
* Each page references itself
* Canonical and alternate URLs are absolute
* No duplicate trailing-slash variants are produced
* Locale switching uses indexable `<a href>` links or localized Next.js Links

The root `/` may redirect to `/ar`, but it should not become a competing indexable duplicate.

==================================================
4. INDEXING DIRECTIVES
======================

For production pages, use:

* `index: true`
* `follow: true`

Include appropriate Googlebot directives such as:

* `index`
* `follow`
* `max-image-preview: large`
* `max-snippet: -1`
* `max-video-preview: -1`

Do not add `noindex` to `/ar` or `/en`.

Ensure development, preview, or staging environments are not accidentally indexed if the project already has a reliable environment distinction.

Do not block CSS, JavaScript, fonts, images, or Next.js runtime assets needed for rendering.

==================================================
5. ROBOTS.TS
============

Create or correct:

* `app/robots.ts`

Generate absolute URLs from the centralized site URL.

Allow crawling of public content.

Disallow only genuinely private or technical routes if they exist, such as:

* `/api/`
* Private admin routes
* Internal preview routes

Do not disallow:

* `/ar`
* `/en`
* `/_next/static`
* Public images
* Public fonts
* CSS or JavaScript required to render the site

Include:

* Sitemap URL: `{SITE_URL}/sitemap.xml`
* Host URL when appropriate

Do not list fake routes.

==================================================
6. SITEMAP.TS
=============

Create or correct:

* `app/sitemap.ts`

Include only canonical, indexable pages that actually exist.

At minimum include:

* `{SITE_URL}/ar`
* `{SITE_URL}/en`

For each localized URL include language alternates where supported by the installed Next.js type definitions.

Use realistic values:

* `changeFrequency: "monthly"` or another defensible frequency
* Homepage priority may be `1`
* Do not pretend the page changes daily if it does not
* Do not set a permanently changing `lastModified: new Date()` on every build unless the content genuinely changed

If no reliable content modification date exists, omit `lastModified` rather than sending misleading freshness signals.

Do not add redirected `/` as a competing canonical sitemap URL.

Do not list nonexistent future service pages.

==================================================
7. OPEN GRAPH AND SOCIAL SHARING
================================

Implement localized Open Graph metadata.

Use:

* `type: "website"`
* Correct locale:

  * `ar_SA` for Arabic
  * `en_US` or an appropriate English locale for English
* `alternateLocale`
* Absolute page URL
* Localized title
* Localized description
* Site name
* A high-quality local image

Prefer a dedicated social image with:

* 1200×630 dimensions
* Deepintaj logo
* Navy and amber visual identity
* Minimal readable text
* No tiny paragraphs
* Safe spacing around edges

Reuse an existing suitable asset if one already exists.

Do not distort the hero image into an incorrect aspect ratio.

If no suitable asset exists, implement an `opengraph-image.tsx` only when doing so does not add unnecessary complexity. Otherwise report the missing asset requirement.

Configure Twitter metadata using:

* `card: "summary_large_image"`
* Localized title
* Localized description
* Same suitable social image

Do not invent a Twitter/X handle.

==================================================
8. ICONS, FAVICON AND MANIFEST
==============================

Audit current icons.

Ensure the site has valid:

* `favicon.ico`
* Browser icon
* Apple touch icon

Use the real Deepintaj mark.

Do not use the default Next.js icon.

Do not stretch the full horizontal wordmark into a tiny square favicon. Use an appropriate square brand symbol when one exists.

Create or correct:

* `app/manifest.ts`

Include:

* Localized or neutral app name
* Short name
* Description
* Start URL `/ar`
* Display mode
* Brand background color
* Brand theme color
* Valid icon entries only for files that exist

Do not reference nonexistent image sizes.

==================================================
9. STRUCTURED DATA: ORGANIZATION
================================

Add valid JSON-LD to the localized homepage.

Use a typed, serializable object and render it through one server-rendered script:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(data).replace(/</g, "\\u003c")
  }}
/>
```

Using `dangerouslySetInnerHTML` is allowed only for serialized JSON-LD, not normal page content.

Use the most accurate schema type.

Prefer:

* `ProfessionalService`

and/or:

* `Organization`

Do not use `LocalBusiness` unless a real public physical business location and appropriate details are verified.

Include only verified properties:

* `@context`
* `@type`
* `@id`
* `name`
* `alternateName`
* `url`
* `logo`
* `description`
* `areaServed`
* `knowsLanguage`
* `contactPoint`
* `email`
* `telephone`
* `address`
* `sameAs`
* `foundingDate`
* License information

Omit any property whose value is unknown.

Never fabricate:

* Ratings
* Review counts
* Awards
* Founding year
* Employee count
* Address
* Phone
* License number
* Social profiles

Use an absolute logo URL.

Suggested stable identifier:

* `{SITE_URL}/#organization`

Set area served to Saudi Arabia only when accurate.

Use localized descriptions while preserving the same entity ID across languages.

==================================================
10. STRUCTURED DATA: WEBSITE AND WEBPAGE
========================================

Add appropriate:

* `WebSite`
* `WebPage`

Use stable IDs such as:

* `{SITE_URL}/#website`
* `{SITE_URL}/ar#webpage`
* `{SITE_URL}/en#webpage`

Connect entities using:

* `isPartOf`
* `publisher`
* `about`
* `inLanguage`
* `primaryImageOfPage` when appropriate

Do not add `SearchAction` unless the site has a real working internal search function.

Do not create fake breadcrumb structured data for a one-page homepage with no meaningful hierarchy.

==================================================
11. STRUCTURED DATA: SERVICES
=============================

Represent the real offered services using `Service` entities.

Create service entries only for services visibly described on the page.

Suggested service groups:

1. Business process reengineering
2. Operational assessment and process improvement
3. Mechanical drawing review
4. Building and engineering inspection
5. Supplier technical evaluation
6. Mechanical execution supervision

Each Service may contain:

* `@type: "Service"`
* Stable `@id`
* Localized `name`
* Localized `description`
* `provider` pointing to `{SITE_URL}/#organization`
* `areaServed`
* `serviceType`
* `url` pointing to the relevant localized section anchor

Do not mark a service as a product.

Do not add fabricated prices, aggregate ratings, or offers.

If the current page presents exact pricing, include it in structured data only when it is an actual public offer with clear currency and conditions. Otherwise omit pricing from JSON-LD.

Ensure structured data reflects visible content.

==================================================
12. FAQ CONTENT
===============

Do not add FAQ schema to questions that are not visibly present on the page.

If the site currently lacks an FAQ section, assess whether adding a compact bilingual FAQ would materially help users without harming the approved design.

Only add it when it can be integrated cleanly.

Potential genuine questions include:

Arabic:

* ما هي إعادة هندسة العمليات؟
* كيف تساعد ديبنتاج في رفع الكفاءة التشغيلية؟
* ما الذي يشمله التقييم التشغيلي الأولي؟
* هل تقدم ديبنتاج مراجعة للمخططات الميكانيكية؟
* هل تشمل الخدمات فحص المباني والإشراف على التنفيذ؟
* ما القطاعات التي تخدمها ديبنتاج؟
* كيف يمكن طلب استشارة؟

English:

* What is business process reengineering?
* How can Deepintaj improve operational efficiency?
* What does an initial operational assessment include?
* Does Deepintaj review mechanical drawings?
* Do the services include building inspection and execution supervision?
* Which sectors does Deepintaj serve?
* How can a consultation be requested?

Answers must be specific, accurate, useful, and visible to users.

Do not use FAQ content as a keyword dump.

Do not claim guaranteed outcomes.

Do not add `FAQPage` JSON-LD unless the visible FAQ is implemented.

Treat FAQ rich-result eligibility as optional; implement it for semantic clarity rather than promising a Google enhancement.

==================================================
13. ON-PAGE SEMANTIC OPTIMIZATION
=================================

Audit the visible copy without redesigning the page.

Ensure every locale contains:

* One clear H1
* Logical H2/H3 hierarchy
* Descriptive section headings
* Relevant body content
* Descriptive internal anchor text
* Useful image alt text
* No headings used only for styling
* No empty headings

The Arabic H1 should naturally communicate both engineering consulting and operational/process improvement.

Suggested direction:

`استشارات هندسية وتشغيلية ترفع كفاءة منشأتك`

The English H1 should communicate the equivalent value:

`Engineering and Operational Consulting That Improves Business Performance`

Do not force these exact headings when the current approved headline is already stronger and accurately describes the services.

Improve copy only where required to make the company’s offering understandable to users and search engines.

Avoid generic text such as:

* “Innovative solutions”
* “We provide excellence”
* “Your trusted partner”

unless followed by specific service information.

The first meaningful paragraph should clearly state:

* What Deepintaj does
* Who it serves
* Where it serves
* Its primary areas of expertise

Use important topic phrases naturally in:

* H1
* One or more H2 headings
* Opening paragraph
* Service descriptions
* Image alt text where visually accurate
* Metadata

Do not repeat exact-match terms unnaturally.

Do not hide keywords.

Do not add long blocks of tiny footer text.

==================================================
14. IMAGE SEO
=============

Audit all `next/image` usage.

Requirements:

* Meaningful localized `alt` text for informative images
* Empty alt text for purely decorative images
* Correct width/height or `fill`
* Accurate `sizes`
* No layout shifts
* Preserve visual quality
* Use `priority` or preload only for the LCP hero image
* Do not preload all images
* Keep QR-code alt text specific to WhatsApp contact
* Do not place SEO phrases in alt text that do not describe the image

Rename files only when safe and update all imports if renaming provides clear value.

Do not break the existing WhatsApp QR code.

Do not apply lossy transformations that make the QR code difficult to scan.

==================================================
15. INTERNAL LINKS AND SECTION URLS
===================================

Ensure primary navigation uses crawlable links.

Links must have descriptive text, not generic repeated “click here.”

Use section anchors consistently:

* `#services`
* `#methodology`
* `#why`
* `#assessment`
* `#contact`

Where service sections have stable IDs, use those IDs in corresponding Service JSON-LD URLs.

Locale switching must link between indexable localized URLs.

Do not use JavaScript-only navigation where a normal link works.

Do not create links to nonexistent pages.

==================================================
16. PERFORMANCE AND CORE WEB VITALS
===================================

Perform focused SEO-related performance review.

Do not change the design unnecessarily.

Check for:

* Oversized hero images
* Missing responsive image sizes
* Excessive client components
* Unnecessary client-side JavaScript
* Render-blocking third-party scripts
* Font configuration
* Cumulative layout shift
* Hero LCP
* Hydration errors
* Excessive animation
* Large unused packages

Keep the page mostly server rendered.

Do not convert the complete page into a client component.

Do not add an SEO package when the native Next.js APIs are sufficient.

Do not lazy-load the above-the-fold hero image.

Lazy-load below-the-fold images through normal Next.js behavior.

Respect reduced-motion preferences.

Do not sacrifice image clarity or the approved design merely to obtain an artificial performance score.

==================================================
17. CONTENT EXPANSION RECOMMENDATION
====================================

The current site is mainly a single static landing page.

Do not automatically create dozens of thin pages.

After completing technical SEO, produce a separate prioritized recommendation for future high-quality pages.

Recommend only pages capable of containing genuinely useful, unique content.

Possible future Arabic/English page pairs:

* `/ar/services/business-process-reengineering`
* `/en/services/business-process-reengineering`
* `/ar/services/operational-assessment`
* `/en/services/operational-assessment`
* `/ar/services/engineering-consulting`
* `/en/services/engineering-consulting`
* `/ar/services/building-inspection`
* `/en/services/building-inspection`
* `/ar/services/mechanical-drawing-review`
* `/en/services/mechanical-drawing-review`
* `/ar/services/engineering-supervision`
* `/en/services/engineering-supervision`
* `/ar/industries/manufacturing`
* `/en/industries/manufacturing`
* `/ar/insights`
* `/en/insights`

Do not create these pages during this task unless explicitly instructed.

For each recommended page, include:

* Search intent
* Primary topic
* Supporting topics
* Suggested title
* Suggested H1
* What useful original content it must contain
* Internal links it should receive
* Why it deserves a separate URL

Also recommend future case studies showing real, authorized results such as:

* Process time reduction
* Waste reduction
* Improved operational visibility
* Inspection findings
* Project supervision outcomes

Never fabricate case studies, clients, or performance metrics.

==================================================
18. LOCAL SEO AND OFF-SITE REQUIREMENTS
=======================================

Do not attempt to implement off-site activities in code.

In the final report, provide a concise checklist covering:

* Google Business Profile, if the company has a real customer-facing location or eligible service-area business
* Consistent company name, phone, address, and website details
* Google Search Console verification
* Sitemap submission
* Bing Webmaster Tools
* Relevant Saudi engineering and business directories
* Professional association or licensing profiles
* LinkedIn company profile
* Genuine client references and earned backlinks
* Industry articles and case studies
* Monitoring branded and non-branded queries

Do not recommend purchasing links, bulk directory spam, fake reviews, or private blog networks.

==================================================
19. SEARCH CONSOLE AND VERIFICATION
===================================

Check whether a Google Search Console verification value already exists.

If a verified value is available, implement it using Next.js metadata verification.

If it is not available:

* Do not invent it.
* Provide a clear placeholder or deployment instruction.
* Do not leave a fake verification token in production.

Mention that the sitemap must be submitted after deployment.

==================================================
20. TRANSLATION AND LANGUAGE QUALITY
====================================

All metadata and visible SEO copy must be stored in the translation system where appropriate.

Arabic must be natural Saudi-market professional Arabic, not awkward machine translation.

English must be polished professional business English.

Do not use one locale’s metadata for the other.

Ensure:

* `/ar` has Arabic title, description, headings and JSON-LD descriptions
* `/en` has English equivalents
* `html lang` and `dir` are correct
* Canonical and alternate URLs are correct
* Each language page can be crawled directly
* Content is not selected through cookies or browser language alone

Maintain identical factual claims across languages.

==================================================
21. VALIDATION
==============

After implementation, run:

* `pnpm lint`
* `pnpm build`

Fix errors caused by the work.

Inspect generated HTML or use available browser tooling to verify `/ar` and `/en`.

Confirm:

* Unique localized title
* Unique localized description
* Correct canonical
* Correct hreflang alternates
* Correct Open Graph locale
* Correct absolute URLs
* Correct robots directives
* Valid `/robots.txt`
* Valid `/sitemap.xml`
* No localhost URLs in production metadata
* No duplicate title tags
* No duplicate descriptions across languages
* No English metadata on Arabic page
* No Arabic metadata on English page
* JSON-LD renders server-side
* JSON-LD contains only verified facts
* Structured data matches visible content
* No missing translation keys
* No hydration errors
* No console errors
* No indexable duplicate root page
* Images have appropriate alt text
* Hero remains the only priority image
* Existing UI and responsive behavior remain intact

Where possible, validate JSON-LD using a structured-data parser or Google-compatible validation tooling.

Do not claim Google Rich Results eligibility for schema types that Google does not currently enhance.

==================================================
22. FINAL RESPONSE
==================

Report only:

1. SEO issues found
2. Files changed or added
3. Metadata implemented for Arabic and English
4. Canonical and hreflang implementation
5. Robots and sitemap implementation
6. Structured-data entities implemented
7. Verified business facts used
8. Missing facts that still require the owner
9. Actual lint result
10. Actual build result
11. Manual checks completed
12. Prioritized future content and off-site SEO recommendations

Do not claim the site will rank #1.

Do not claim indexing or ranking improvements before Google has crawled and evaluated the deployed site.

Do not create fake business information to make the SEO report appear complete.
