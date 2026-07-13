---
name: Industrial Blueprint
colors:
  surface: '#141311'
  surface-dim: '#141311'
  surface-bright: '#3a3937'
  surface-container-lowest: '#0f0e0c'
  surface-container-low: '#1c1c19'
  surface-container: '#20201d'
  surface-container-high: '#2b2a28'
  surface-container-highest: '#363532'
  on-surface: '#e6e2de'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#e6e2de'
  inverse-on-surface: '#31302e'
  outline: '#8f9097'
  outline-variant: '#44474d'
  surface-tint: '#b9c7e4'
  primary: '#b9c7e4'
  on-primary: '#233148'
  primary-container: '#0a192f'
  on-primary-container: '#74829d'
  inverse-primary: '#515f78'
  secondary: '#ffba3d'
  on-secondary: '#432c00'
  secondary-container: '#d29100'
  on-secondary-container: '#493000'
  tertiary: '#bdc7d9'
  on-tertiary: '#27313f'
  tertiary-container: '#101a27'
  on-tertiary-container: '#798394'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#ffdeae'
  secondary-fixed-dim: '#ffba3d'
  on-secondary-fixed: '#281900'
  on-secondary-fixed-variant: '#604100'
  tertiary-fixed: '#d9e3f6'
  tertiary-fixed-dim: '#bdc7d9'
  on-tertiary-fixed: '#121c2a'
  on-tertiary-fixed-variant: '#3d4756'
  background: '#141311'
  on-background: '#e6e2de'
  surface-variant: '#363532'
typography:
  headline-xl:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  grid-line-weight: 1px
---

## Brand & Style

The brand personality is rooted in the "Industrial Blueprint" aesthetic—a fusion of high-end engineering precision and Saudi heritage. This design system moves away from typical tech softness, opting instead for a **Minimalist-Brutalist** hybrid that feels structural, authoritative, and intellectual. It is designed to evoke a sense of monumental scale and mathematical certainty.

Visual cues are drawn from architectural schematics and industrial CAD drawings. This is achieved through the use of fine technical linework, 1px "hairline" borders, and a modular grid system that remains visible in subtle ways. The atmosphere is premium and "institutional," signaling to government and private sector partners that the output is of the highest professional caliber.

**Key Aesthetic Principles:**
- **Technical Rigor:** Use of data-heavy displays, coordinates, and monospaced labels.
- **Architectural Depth:** Layering surfaces like stacked blueprints.
- **Cultural Sophistication:** A palette that respects Saudi professional norms, utilizing deep, "majestic" tones rather than playful vibrance.

## Colors

The palette is intentionally "Heavy Industrial" with a "Premium Executive" finish. The primary mode is dark to reflect the deep navy of the engineering sector and to provide a high-contrast backdrop for technical linework.

- **Primary (Deep Navy):** `#0A192F` — Derived from the logo. Used for base backgrounds and primary surfaces.
- **Secondary (Technical Gold):** `#E3A019` — A muted, warm amber used sparingly for critical call-to-actions, accents, and important data points.
- **Neutral 100 (Off-White):** `#F8F4F0` — Used for primary body text to ensure maximum readability against dark backgrounds without the harshness of pure white.
- **Neutral 800 (Dark Charcoal):** `#111827` — Used for secondary containers and background depth.
- **Accents (Light Warm Grey):** `#9CA3AF` — Used for borders, grid lines, and secondary labels.

Avoid the use of gradients. Color should be applied in solid, flat blocks or within fine lines to maintain a "blueprint" feel.

## Typography

The system utilizes **IBM Plex Sans Arabic** as the primary typeface for its unique balance between technical structure and modern readability. It reflects the "man-made" nature of engineering.

To reinforce the industrial character, **JetBrains Mono** (or similar technical monospace) is used for "metadata" levels: coordinates, labels, button text, and small data displays.

**Hierarchy Rules:**
- **Headlines:** Should be tight-leaded and impactful.
- **Technical Labels:** Always uppercase with generous letter spacing to emulate industrial stamping or blueprint notations.
- **Bilingual Alignment:** Ensure that Arabic and English scripts are baseline-aligned. IBM Plex handles this naturally, maintaining a consistent visual weight across both languages.

## Layout & Spacing

This design system uses a **Fixed-Modular Grid**. The layout should feel like it was built on a drafting table. 

- **The Grid:** A 12-column grid for desktop with 24px gutters. However, the unique identifier is the "Technical Underlay"—a subtle 8px or 16px background square grid that is occasionally visible in the background of sections.
- **Rhythm:** All spacing (padding, margins, gap) must be a multiple of 8px.
- **Borders:** Use 1px solid borders (`#9CA3AF` at 20% opacity) to separate sections instead of using shadows. This mimics the look of a technical drawing.
- **Reflow:** On mobile, margins reduce to 16px, and complex grids collapse into a single column, but the "Technical Labels" remain fixed at the top-left of sections to maintain brand character.

## Elevation & Depth

In line with the engineering theme, depth is achieved through **Tonal Layering** and **Fine Outlines** rather than soft shadows.

1.  **Level 0 (Base):** Deep Navy (`#0A192F`).
2.  **Level 1 (Section):** Dark Charcoal (`#111827`) with a 1px border.
3.  **Level 2 (Interactive/Floating):** Use a slightly lighter grey or the Amber accent for borders to indicate "active" states.

**Subtle Technical Grids:** Use low-opacity lines to create a "Z-axis" feel. For example, a background might have a faint blueprint grid, while the content sits on "plates" (cards) with sharp corners. This creates an organized, "schematic" depth.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Rounded corners are avoided to maintain the industrial, architectural feel. Right angles represent precision, calculation, and stability. 

- **Primary Shapes:** Squares and rectangles.
- **Iconography:** Use "Stroke" based icons with 1.5pt or 2pt weight. Do not use filled or "cute" icons. All icons should have 0px corner radii where possible.
- **Dividers:** Use 1px horizontal and vertical lines to define zones, occasionally ending with a small "crosshair" or "dot" at the intersection points to emphasize the engineering aesthetic.

## Components

### Buttons
- **Primary:** Solid Technical Gold (`#E3A019`) with Deep Navy text. Sharp corners. Label in Monospace.
- **Secondary:** Ghost style. 1px Off-White border, Off-White text. Sharp corners.
- **Tertiary:** Text-only with a trailing technical arrow (`→`) or coordinate symbol.

### Cards
- No shadows. Use a 1px border (`#9CA3AF` at 30% opacity).
- Header sections of cards should have a small "ID tag" in the top-left corner using the technical label font (e.g., "SEC_04 // DATA").

### Input Fields
- Underline-only or full-border sharp rectangles. 
- Focus state: Border color changes to Technical Gold.
- Placeholder text in light grey, 12px monospace.

### Lists & Data Tables
- Engineering-heavy tables with visible grid lines.
- Zebra striping using Dark Charcoal and Deep Navy.
- Row hover state: 1px Gold left-border accent.

### Chips/Tags
- Small, rectangular blocks with a slightly darker background than the card.
- Monospace text.
- Used for project status (e.g., "UNDER REVIEW", "COMMISSIONED").

### Technical Elements
- **Crosshairs:** Small "+" symbols at the corners of major sections.
- **Progress Bars:** Flat, no rounding, showing a percentage in monospace text above the bar.