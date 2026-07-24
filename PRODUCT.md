# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Business owners and C-level executives (decision-makers evaluating consulting partnerships) alongside operations managers and engineers (practitioners seeking process reengineering, vendor assessment, or building inspection). Both audiences arrive with a facility, workflow, or compliance problem they need diagnosed and resolved. The executive needs confidence in credentials and outcomes; the practitioner needs specificity and technical depth.

## Product Purpose

Deepintaj provides engineering and operational consulting services to Saudi industrial and commercial firms. The website is the primary acquisition surface — it must convert visitors into assessment requests by making the dual-service expertise immediately legible and credible.

## Positioning

Deepintaj is a licensed engineering consultancy certified by the Saudi Council of Engineers that combines business process reengineering (BPR) with hands-on engineering services — building inspection, drawing review, supplier assessment, and engineering supervision — under one roof. Competitors typically offer one or the other; the dual capability is the differentiator.

## Operating Context

Based in Riyadh, serving Saudi Arabia. Bilingual (Arabic primary, English secondary). Clients operate in industrial, commercial, and institutional sectors. The consulting engagement typically begins with an assessment or inspection, followed by a proposal. The website must support both Arabic and English with full RTL/LTR layout switching.

## Capabilities and Constraints

- Service lines: Business Process Reengineering, Building Inspection, Mechanical Drawing Review, Engineering Supervision, Supplier/Vendor Assessment
- Contact form submits via Resend email API with WhatsApp fallback on failure
- Internationalized with next-intl (ar, en locales)
- Sticky header with IntersectionObserver-based active section tracking
- Section anchor navigation (hero, services, methodology, why, contact, assessment)
- Uses @base-ui/react primitives (not shadcn/ui) for interactive components
- Tailwind CSS v4 with CSS variable theming

## Brand Commitments

- Name: Deepintaj (ديبنتاج)
- Visual identity: Deep navy primary (`#0A192F`), gold accent (`#E3A019`), warm off-white background (`#F8F4F0`)
- Typography: IBM Plex Sans Arabic (sans + heading instances), JetBrains Mono (mono)
- The gold accent must remain the signature color; the navy sections alternating with warm-light sections is the established rhythm
- Arabic-first design with English as secondary locale

## Evidence on Hand

- Licensed engineering consultant credential (Saudi Council of Engineers)
- Dual-service expertise (BPR + engineering) is a real structural differentiator
- No published case studies, client logos, or project metrics yet — these must not be fabricated

## Product Principles

1. Credibility through credentials — the license and certification are visual proof, not an afterthought
2. Dual clarity — every visitor must understand both service pillars (operational + engineering) within seconds
3. Bilingual parity — Arabic and English experiences must feel equally native, not one translated from the other
4. Evidence over claims — demonstrate capability through specificity; never invent results or customers
5. Action-oriented — every section should move the visitor toward the assessment CTA

## Accessibility & Inclusion

- Bilingual RTL/LTR support is the primary inclusion requirement
- Font stack must maintain Arabic legibility at all sizes
- Reduced motion media query respected
