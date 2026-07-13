You are a senior Next.js engineer working directly inside the existing Deepintaj repository.

Your task is to implement the complete bilingual Arabic/English Deepintaj landing page from the supplied Stitch source, configure proper next-intl locale routing, and produce a production-quality responsive implementation.

Do not stop after analysis or provide a hypothetical solution. Inspect the relevant files, make the changes, install only what is required, and validate the finished implementation.

Do not use web search. All required design references, assets, content, and project configuration are already inside the repository.

Do not use Git commands.

==================================================
ESSENTIAL FILES TO INSPECT FIRST
================================

Inspect only the files needed for this task before editing:

* package.json
* next.config.ts
* components.json
* app/layout.tsx
* app/page.tsx
* app/globals.css
* components/ui/button.tsx
* i18n/requests.ts
* DESIGN.md
* public/stitch/code.html
* public/stitch/screen.png
* relevant files under public/images

The repository currently contains:

* Next.js 16.2.10
* React 19
* TypeScript
* Tailwind CSS 4
* next-intl 4
* shadcn configured with Base UI and RTL support
* lucide-react
* pnpm
* An existing shadcn Button component
* A blank, incorrectly named i18n/requests.ts
* Stub app/layout.tsx and app/page.tsx
* Existing design tokens in app/globals.css

Do not upgrade Next.js, React, Tailwind, shadcn, or unrelated existing packages.

Do not repeatedly reread large files unless a specific implementation issue requires it.

==================================================
SOURCE-OF-TRUTH PRIORITY
========================

Use the following priority when implementing the UI:

1. public/stitch/code.html

   This is the authoritative source for:

   * Page structure
   * Section order
   * Content
   * Element-level spacing
   * Rounded versus sharp corners
   * Shadows
   * Borders
   * Overlays
   * Gradients
   * Cards
   * Buttons
   * Form layout
   * Responsive behavior represented in the HTML

2. public/stitch/screen.png

   Use this as a visual cross-check for:

   * Overall composition
   * Section proportions
   * Typography hierarchy
   * Image placement
   * Background treatment
   * Spacing
   * Visual balance

3. public/images

   Use these local production assets instead of every remote image URL in code.html.

4. DESIGN.md and the existing globals.css tokens

   Use these as the brand and token foundation.

If DESIGN.md conflicts with a concrete element shown in code.html, code.html wins for that element.

Examples:

* Keep header and hero buttons sharp because code.html makes them sharp.
* Keep pills fully rounded.
* Keep service cards, image frames, methodology cards, CTA panels, and form surfaces rounded where code.html makes them rounded.
* Retain gradients, shadows, and overlays explicitly used by code.html.
* Do not globally flatten or reinterpret the Stitch design because DESIGN.md generally favors sharp corners.
* Do not apply one global border-radius rule to every component.

The existing Tailwind radius tokens may be set to zero. Do not globally modify those tokens merely to make rounded utility classes work.

Where code.html requires visible rounding, use explicit values such as:

* rounded-[4px]
* rounded-[8px]
* rounded-[12px]
* rounded-[16px]
* rounded-[20px]
* rounded-full

Choose the explicit value that most closely corresponds to the original Stitch element.

Do not redesign the page.

==================================================
INTERNATIONALIZATION AND ROUTING
================================

Implement proper next-intl locale-prefixed routing.

Supported locales:

* ar
* en

Requirements:

* Arabic is the default locale.
* The public pages must be:

  * /ar
  * /en
* A request to / must redirect to /ar.
* Set localePrefix to "always".
* Disable automatic browser-language detection so the root consistently redirects to /ar.
* Unsupported locale segments must return notFound().
* Both locale routes must be statically generated.

Use the current Next.js 16 and next-intl structure:

* app/[locale]/layout.tsx
* app/[locale]/page.tsx
* i18n/routing.ts
* i18n/navigation.ts
* i18n/request.ts
* messages/ar.json
* messages/en.json
* proxy.ts

Specific requirements:

1. Replace the empty incorrectly named file:

   * i18n/requests.ts

   With:

   * i18n/request.ts

2. Configure next.config.ts with createNextIntlPlugin.

3. Add i18n/routing.ts using defineRouting with:

   * locales: ["ar", "en"]
   * defaultLocale: "ar"
   * localePrefix: "always"
   * localeDetection: false

4. Add i18n/navigation.ts using createNavigation and export the localized navigation helpers.

5. Add root-level proxy.ts using createMiddleware from next-intl/middleware.

   Use proxy.ts rather than middleware.ts because this repository uses Next.js 16.

   Configure the matcher to exclude:

   * API routes
   * Next.js internal routes
   * Vercel internal routes
   * Static files containing file extensions

6. Move the meaningful root layout implementation into:

   * app/[locale]/layout.tsx

   This allows the root HTML element to receive the active locale and direction.

7. In the locale layout:

   * Validate the locale using hasLocale.
   * Call notFound() for unsupported locales.
   * Call setRequestLocale(locale).
   * Generate static params from routing.locales.
   * Set html lang dynamically.
   * Set html dir to "rtl" for Arabic and "ltr" for English.
   * Preserve the existing optimized IBM Plex Sans Arabic and JetBrains Mono configuration.
   * Preserve the existing font CSS variables.
   * Preserve the global CSS import.
   * Retrieve the locale messages.
   * Wrap the page with NextIntlClientProvider.
   * Preserve DirectionProvider from Base UI.
   * Set DirectionProvider dynamically to rtl or ltr.
   * Keep the body structure clean.
   * Prevent accidental horizontal overflow.

8. In app/[locale]/page.tsx:

   * Treat params as a Promise according to the installed Next.js version.
   * Obtain and validate the locale.
   * Call setRequestLocale(locale) before retrieving translations.
   * Use getTranslations from next-intl/server.
   * Keep the page as a Server Component.
   * Do not add "use client" to the entire page.

9. Add localized metadata through generateMetadata:

   * Localized page title
   * Localized page description
   * Appropriate Deepintaj branding
   * Explicit locale retrieval for metadata translations

10. Implement the language switch using navigation helpers from i18n/navigation.ts:

* The Arabic page displays “English”.
* The English page displays “العربية”.
* Arabic switches to /en.
* English switches to /ar.
* Preserve the current pathname where practical.
* Do not use window.location.
* Do not manually concatenate locale strings.
* Do not require the whole page to become a Client Component.

A tiny focused client component may be created only if next-intl’s locale-switching API genuinely requires client-side pathname access. Do not turn the header or complete page into a Client Component unnecessarily.

==================================================
PAGE IMPLEMENTATION LOCATION
============================

The complete converted landing-page markup must live in:

* app/[locale]/page.tsx

Do not split every section into separate custom component files.

Only create files outside page.tsx when required for:

* next-intl configuration
* Locale layout
* Translation messages
* Proxy configuration
* Generated shadcn components
* A small language-switch client component, only if genuinely required
* Genuinely reusable framework utilities

Do not introduce:

* A CMS
* A data-fetching layer
* A large custom component architecture
* A page-builder system
* Unnecessary context providers
* Unnecessary state management
* A collection of one-use section components

Small typed arrays of translation keys inside page.tsx are acceptable for repeated cards, audience categories, methodology steps, and feature lists.

==================================================
TRANSLATIONS
============

Create:

* messages/ar.json
* messages/en.json

Extract every user-facing string from page.tsx into the message files.

Do not leave Arabic or English UI copy hardcoded in JSX.

Include translations for:

* Metadata
* Navigation
* Language-switch labels
* Accessibility labels
* Buttons
* Hero content
* Hero eyebrow or ID tag
* Credentials ribbon
* Audience pills
* Section labels
* Service titles
* Service descriptions
* Service feature points
* Prices
* Currency labels
* Methodology steps
* Why Deepintaj content
* Assessment CTA
* Contact form labels
* Form placeholders
* Select options
* WhatsApp contact text
* WhatsApp QR block
* Footer headings
* Footer links
* Copyright text
* Image alt text

Arabic content:

* Copy the Arabic wording from public/stitch/code.html accurately.
* Preserve the exact Deepintaj company name and spelling.
* Do not rewrite or “improve” the supplied Arabic unnecessarily.
* Correct only obvious encoding or markup artifacts when the intended wording is unambiguous.

English content:

* Write polished professional B2B English.
* Preserve the Arabic meaning and hierarchy.
* Avoid awkward literal translation.
* Use terminology appropriate for:

  * Engineering consulting
  * Industrial operations
  * Business process reengineering
  * Building inspection
  * Engineering supervision
  * Operational assessment
* Keep the same number of cards, list items, methodology steps, footer entries, and service categories as Arabic.

Keep numerical prices consistent between locales.

Use stable translation-key arrays rather than duplicating the entire page markup for Arabic and English.

Use next-intl rich text only when needed. Do not insert HTML through dangerouslySetInnerHTML.

==================================================
LOCAL ASSET MAPPING
===================

Remove every Google-hosted or externally hosted image URL inherited from the Stitch HTML.

Use these local assets:

Header and footer logo:

* /images/deepintaj-logo-transparent.png

Desktop hero:

* /images/01-deepintaj-hero-desktop-approved.png

Mobile hero:

* /images/02-deepintaj-hero-mobile.png

BPR and process-reengineering section:

* /images/03-deepintaj-bpr-workshop-planning.png

Assessment CTA technical background:

* /images/04-deepintaj-cta-technical-background.png

Specialized engineering section:

* /images/05-deepintaj-specialized-engineering-service.png

Why Deepintaj section:

* /images/06-deepintaj-why-deepintaj.png

WhatsApp QR code:

* /images/qr-code-whatsapp.png

Use next/image for all visual image assets.

Hero requirements:

* Render the approved desktop hero at medium and desktop breakpoints.
* Render the supplied mobile hero below the medium breakpoint.
* Use fill, sizes, priority, object-cover, and suitable object positioning.
* Preserve the dark navy overlays and directional fade from code.html.
* Mirror directional overlay behavior appropriately between RTL and LTR where needed.
* Do not distort, stretch, or excessively crop either image.
* Do not use the desktop image as the mobile fallback when the dedicated mobile asset exists.

For other section images:

* Preserve their Stitch frame sizes and aspect behavior.
* Use object-cover where appropriate.
* Preserve decorative offset frames behind the BPR and specialized-engineering images.
* Preserve image hover scaling only where code.html contains it.
* Add meaningful localized alt text.

The transparent logo contains generous canvas space. Size and position it based on the visible logo mark, not only its raw image canvas dimensions.

Requirements for the logo:

* Preserve its aspect ratio.
* Do not recreate it.
* Do not recolor it.
* Do not crop its actual mark.
* Do not add filters or effects.
* Do not use remote versions.

==================================================
WHATSAPP QR CODE
================

A WhatsApp QR code exists at:

* /images/qr-code-whatsapp.png

Use it in the footer.

The Stitch footer defines a four-column desktop grid but currently contains only three meaningful content groups. Use the available fourth column for a dedicated WhatsApp QR block rather than unnecessarily restructuring the footer.

QR-code requirements:

* Render the QR image using next/image.
* Use exactly:

  * /images/qr-code-whatsapp.png
* Do not regenerate it.
* Do not redraw it.
* Do not recolor it.
* Do not invert it.
* Do not crop it.
* Do not blur it.
* Do not apply image filters.
* Do not place a color overlay over it.
* Do not use an external QR-code service.
* Do not install a QR-code-generation dependency.
* Do not replace it with a generic WhatsApp icon.

Use the `unoptimized` property on the QR-code Image to avoid image transformation softening its hard edges.

Preserve:

* Square aspect ratio
* Crisp pixel edges
* Original quiet zone
* Strong dark-on-light contrast
* Scannability

Do not use object-cover for the QR code.

Display it at a reliably scannable size:

* Approximately 128px on small mobile screens
* Approximately 144–160px on larger and desktop screens

Place the QR code on a clean white surface with sufficient spacing around it.

A small explicit container radius may be used around the outer white panel, but:

* Do not clip the QR code.
* Do not reduce its quiet zone.
* Do not place decorative graphics over it.
* Do not add a heavy shadow that harms contrast.

Footer alignment:

* Center the QR block on mobile.
* Align it naturally inside its footer column on desktop.
* Respect RTL and LTR layout.
* Ensure the footer does not overflow horizontally.
* Keep the title and caption close enough to establish their relationship without crowding the code.

Add localized text for:

* QR block title
* QR block caption
* QR image alt text

Use translation keys such as:

* footer.whatsappQrTitle
* footer.whatsappQrCaption
* footer.whatsappQrAlt

Use these Arabic translations:

* Title:
  تواصل عبر واتساب

* Caption:
  امسح الرمز للتواصل معنا مباشرة

* Alt:
  رمز الاستجابة السريعة للتواصل مع ديبنتاج عبر واتساب

Use these English translations:

* Title:
  Contact us on WhatsApp

* Caption:
  Scan the code to contact us directly

* Alt:
  QR code for contacting Deepintaj through WhatsApp

Keep all wording in messages/ar.json and messages/en.json rather than hardcoding it inside JSX.

Do not invent, infer, display, or expose a WhatsApp number in the page markup.

The QR code may be functional through its encoded data even though other contact behavior is static.

Retain the existing WhatsApp icon and static WhatsApp contact row in the contact section. The footer QR block supplements that row rather than replacing it.

==================================================
EXACT PAGE STRUCTURE
====================

Implement every section from public/stitch/code.html in the same order:

1. Sticky header
2. Hero
3. Credentials ribbon
4. “Who we serve” audience section
5. Services introduction
6. BPR / process-reengineering service section
7. Specialized engineering services section
8. Methodology section
9. Why Deepintaj section
10. Initial operational assessment CTA
11. Contact section
12. Footer, including the WhatsApp QR column

Do not omit any section.

Do not invent:

* Testimonials
* Performance counters
* Client logos
* Partner logos
* Social networks
* New navigation menus
* Team sections
* Blog sections
* Extra services
* Additional CTA sections

Preserve the IDs used for navigation:

* services
* methodology
* why
* assessment
* contact

Internal navigation links must scroll to the corresponding real sections.

Add smooth scrolling and an appropriate sticky-header scroll offset.

Respect prefers-reduced-motion.

==================================================
HEADER POSITION SWAP
====================

The Stitch source currently places the logo where the action group appears visually and the action group where the logo should be.

Swap them.

Final Arabic header:

* Logo at the far right
* Navigation centered
* Actions at the far left

Arabic actions contain:

* Language switch
* Consultation CTA

Final English header must mirror naturally:

* Logo at the far left
* Navigation centered
* Actions at the far right

Use logical flex ordering and locale direction instead of maintaining two unrelated header implementations.

Keep from code.html:

* Sticky positioning
* Deep navy background
* Border treatment
* Backdrop blur
* General height
* Spacing
* Navigation styling
* Active or emphasized navigation treatment

Use the local transparent logo.

The language switch must work.

The consultation CTA must scroll to #contact.

On smaller screens:

* Keep the header compact.
* Keep the language switch accessible.
* Prevent overflow.
* Preserve the logo.
* Keep the consultation CTA when it fits cleanly.
* Hide or reduce secondary navigation only when necessary.
* Do not create an elaborate mobile drawer unless the layout genuinely requires one.
* Do not introduce a mobile-header visual pattern unrelated to the supplied design.
* Do not allow buttons or navigation labels to overlap.

==================================================
SHADCN AND FORM CONTROLS
========================

The contact form remains visually complete but functionally static.

Do not implement:

* API routes
* Email sending
* WhatsApp sending logic
* Server Actions
* Database storage
* Form-submission services
* React Hook Form
* Schema-validation packages
* Toast success notifications
* Fake loading states
* Fake submissions
* Disabled-looking controls without reason

Fully implement the contact form’s visual UI, interaction states, and accessibility.

Use the configured shadcn MCP to inspect and install missing components.

At minimum, use shadcn implementations for:

* Button
* Input
* Textarea
* Label
* Select

The Button component already exists. Inspect its actual Base UI API before using it.

Do not assume Radix-only APIs such as `asChild` are supported.

When a Link or anchor needs button styling:

* Use the exported buttonVariants utility with the Link or anchor.
* Do not nest one interactive element inside another.
* Do not place an anchor inside a button.
* Do not place a button inside an anchor.

If the shadcn MCP cannot install the necessary components, use pnpm with the repository’s existing shadcn configuration, for example:

pnpm dlx shadcn@latest add input textarea label select

Only install components actually used by the page.

Critical visible-control requirements:

* Do not use a raw native `<select>`.
* Do not manually reproduce a Select using basic divs.
* Do not leave visible form elements with browser-default styling.
* Use shadcn for visible inputs, textarea, label, select, and button controls.
* Native semantic structural elements remain correct and required:

  * header
  * nav
  * main
  * section
  * article
  * form
  * footer
  * ul
  * li

Implement the service selector using shadcn Select:

* Select
* SelectTrigger
* SelectValue
* SelectContent
* SelectItem

The dropdown must:

* Match the dark contact-form design
* Open correctly
* Be keyboard accessible
* Display properly in RTL
* Display properly in LTR
* Have correct alignment
* Have a clear focus state
* Avoid the default browser Select appearance

Use a static default value corresponding to the initial operational assessment.

Form requirements:

* Name:

  * Required visually and semantically

* Mobile number:

  * Required visually and semantically
  * Input content direction remains LTR

* Email:

  * Optional
  * Input content direction remains LTR

* Service:

  * shadcn Select
  * Localized options

* Project or challenge description:

  * shadcn Textarea

* Submit button:

  * Use type="button"
  * Must not submit, navigate, refresh, or display fake success behavior

* Labels:

  * Connected to their controls where supported
  * Localized
  * Properly aligned in both directions

Preserve from code.html:

* Gold borders and focus accents
* Dark form fields
* Rounded form surface
* Frosted or translucent panel treatment
* Field spacing
* Responsive grid
* Static WhatsApp row

The contact-section WhatsApp link may remain a placeholder.

Do not represent the contact form as connected or operational.

==================================================
ICONS
=====

Do not load:

* Google Material Symbols
* External icon fonts
* External icon stylesheets

Replace Material Symbols from code.html with suitable lucide-react stroke icons.

Select close semantic equivalents for:

* Language
* Verification
* Engineering
* Factory
* Building
* Process flow
* Architecture
* Inspection
* Supervision
* Credentials
* Analytics
* Directional arrows
* Contact information

Maintain consistent:

* Stroke width
* Icon sizing
* Visual alignment
* Spacing
* Color hierarchy

For the WhatsApp brand mark:

* Preserve the inline SVG from code.html, or
* Use a small local dependency-free accessible SVG

Do not install a large icon package solely for one WhatsApp icon.

Mark decorative icons as aria-hidden.

Do not mark icons containing unique meaning as decorative unless an equivalent accessible label is present.

==================================================
RTL AND LTR BEHAVIOR
====================

Use one shared page structure for both locales.

Requirements:

* Arabic uses RTL.
* English uses LTR.
* Set lang and dir on the html element.
* Set Base UI DirectionProvider correctly.
* Use logical Tailwind properties wherever possible:

  * ps / pe
  * ms / me
  * border-s / border-e
  * text-start / text-end
  * start / end

Replace direction-specific Arabic utility classes such as:

* pr-*
* pl-*
* right-*
* left-*

With logical equivalents where the intended layout should mirror.

Use rtl: and ltr: variants where a deliberate directional change is required.

Direction-sensitive arrows must point appropriately.

Do not mirror:

* Logos
* QR codes
* Photographs
* Phone-number text
* Email-address text

Phone numbers, email addresses, and technical values must remain LTR.

Ensure:

* No reversed price formatting
* No incorrectly mirrored logo
* No mirrored QR code
* No broken Select alignment
* No incorrectly placed icons
* No horizontal scrolling
* No mixed-direction punctuation errors around phone numbers or prices
* Correct footer alignment in both languages

==================================================
VISUAL IMPLEMENTATION DETAILS
=============================

Follow code.html carefully instead of creating a generic corporate landing page.

Preserve:

* Deep navy header
* Deep navy hero
* Gold CTA hierarchy
* Hero typography
* Hero line breaks where practical
* Hero ID or eyebrow tag
* Hero-side accent line
* Credential ribbon
* White and pale-grey service sections
* Audience pills
* Service price badges
* Offset image backing plates
* Rounded service cards
* Alternating two-column service layouts
* Dark methodology section
* Staggered methodology cards on desktop
* Why Deepintaj timeline-like border
* Rounded Why Deepintaj image
* Assessment CTA background image
* Frosted assessment panel
* Frosted contact form
* Footer hierarchy
* Footer QR-code column

Add any CSS helpers required by the imported Stitch design, including equivalents for:

* technical-grid
* blueprint-underlay

Implement those locally in app/globals.css using subtle low-opacity CSS line patterns that reproduce the supplied design.

Do not copy from code.html:

* Tailwind CDN scripts
* Google Fonts links
* External stylesheets
* External image links
* HTML document wrapper
* Head markup
* Body markup
* Material icon imports

Use:

* The existing Tailwind 4 setup
* Existing next/font setup
* Existing design tokens
* Local image assets

Avoid arbitrary global CSS where Tailwind utilities are sufficient.

Use globals.css only for:

* Existing theme tokens
* Base behavior
* Smooth scrolling
* Scroll offset
* Technical-grid helper
* Blueprint helper
* Reduced-motion behavior
* Unavoidable cross-cutting behavior

Do not add a dark-mode switch.

The landing page already has explicit light and dark sections.

==================================================
RESPONSIVENESS
==============

The implementation must be responsive rather than only matching one screenshot width.

Validate at approximately:

* 375px mobile
* 768px tablet
* 1024px laptop
* 1440px desktop

Requirements:

* No horizontal overflow
* Comfortable mobile spacing
* Correct mobile hero asset
* Service layouts collapse to one column
* Correct content and image ordering
* Methodology cards collapse cleanly
* Contact fields become one column
* Header remains usable
* Hero copy remains readable
* Typography scales without clipping
* Price badges do not overlap titles
* Images do not stretch
* QR code remains crisp and scannable
* QR code does not overflow
* Footer columns collapse cleanly
* Footer QR block centers naturally on small screens
* Select dropdown fits within the viewport
* Long English labels do not break the layout

Preserve the desktop composition while applying careful responsive adjustments.

==================================================
ACCESSIBILITY AND CODE QUALITY
==============================

Use semantic HTML and accessible controls.

Requirements:

* Exactly one h1
* Logical h2, h3, and h4 hierarchy
* Labels associated with fields
* Meaningful localized image alt text
* Localized QR-code alt text
* Accessible language-switch label
* Accessible form Select
* Visible keyboard focus
* Sufficient contrast
* No nested interactive elements
* Decorative icons hidden from screen readers
* Navigation inside nav
* Main content inside main
* Buttons use correct types
* Internal links point to real IDs
* QR caption remains readable
* Reduced-motion preferences are respected

TypeScript must remain strict.

Do not use:

* any
* @ts-ignore
* Broad eslint-disable comments
* dangerouslySetInnerHTML
* Duplicated Arabic and English page components
* Inline base64 images
* Remote image URLs
* Native browser-default Select UI
* Unnecessary client state
* A monolithic Client Component
* Type assertions used merely to silence incorrect types

==================================================
PACKAGE AND FILE DISCIPLINE
===========================

Use pnpm because the repository contains pnpm-lock.yaml.

Install only dependencies required by shadcn components when they are not already available.

Do not:

* Replace the package manager
* Delete or regenerate the lockfile unnecessarily
* Upgrade unrelated packages
* Reinitialize shadcn
* Overwrite components.json
* Run broad auto-formatting across unrelated files
* Use Git commands
* Change unrelated repository files
* Install a QR package
* Install an extra icon package
* Install a form library
* Install a schema library
* Add analytics or tracking
* Use web search

Expected files changed or added should be limited approximately to:

* app/[locale]/layout.tsx
* app/[locale]/page.tsx
* app/globals.css
* messages/ar.json
* messages/en.json
* i18n/request.ts
* i18n/routing.ts
* i18n/navigation.ts
* proxy.ts
* next.config.ts
* A small locale-switch component only if required
* package.json and pnpm-lock.yaml only if component dependencies are required
* Missing components/ui files installed through shadcn

Remove obsolete replaced files:

* app/page.tsx, when its routing responsibility has moved
* app/layout.tsx, if the locale layout fully replaces it and Next.js permits the resulting structure
* i18n/requests.ts

Do not remove a required root layout without verifying that the final App Router structure is valid. Use the minimum valid layout arrangement for locale-specific html lang and dir behavior.

==================================================
VALIDATION
==========

After implementation, run:

pnpm lint
pnpm build

Fix all errors caused by your work.

Do not stop after the first lint or build error. Diagnose and correct it.

Do not claim a command passed unless it actually completed successfully.

Then verify through available local browser or preview tooling when available:

Routing:

* / redirects to /ar
* /ar renders Arabic
* /en renders English
* Unsupported locales return a 404
* Both locale pages are statically generated as intended

Localization:

* Arabic is RTL
* English is LTR
* Language switching works both ways
* No missing translation errors
* No hardcoded user-facing copy remains in page.tsx
* Metadata is localized

Content and design:

* Every Stitch section is present
* Section order matches code.html
* Header positions are swapped correctly
* Logo appears in the correct place
* Actions appear opposite the logo
* Concrete rounded and sharp treatments match code.html
* No broad reinterpretation of the design occurred
* Desktop and mobile hero assets switch correctly

Assets:

* All visual image URLs are local
* No external Google image URLs remain
* No external icon fonts remain
* Logo uses the local transparent asset
* Footer displays /images/qr-code-whatsapp.png
* QR code remains square
* QR code remains crisp
* QR code is uncropped
* QR code is scannable
* QR code has a white quiet area
* QR code has localized accessible alt text
* QR block is responsive
* No QR-generation dependency was added

Controls:

* No raw native select exists
* Visible form controls use shadcn components
* Select works in RTL and LTR
* Buttons contain no nested interactive elements
* Form remains static
* Clicking the form button does not submit or refresh
* No fake success behavior exists

Quality:

* No hydration warnings
* No browser console errors caused by the implementation
* No horizontal overflow at the tested widths
* No stretched images
* No broken responsive ordering
* No TypeScript suppression shortcuts
* pnpm lint passes
* pnpm build passes

If browser tooling is unavailable, state that visual browser verification was not available rather than claiming it was completed.

==================================================
FINAL RESPONSE
==============

When complete, respond with only:

1. A concise summary of what was implemented
2. Files added, changed, or removed
3. shadcn components or packages installed
4. Validation commands and their actual results
5. Any genuine remaining limitation

Do not paste complete source files into the response.

Do not provide a tutorial.

Do not claim visual verification, lint success, or build success unless it was actually performed.
