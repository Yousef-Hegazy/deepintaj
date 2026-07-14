# Plan: Add Mobile Drawer Menu to Home Page

## Summary

Add a beautiful mobile drawer menu to the home page that displays the same header navigation links. The drawer uses shadcn/ui's `drawer` component (built on Vaul/Radix) and will be integrated into the existing inline header in `page.tsx`.

---

## Current State Analysis

1. **Header is inline in page.tsx** (lines 89-131): Contains logo, `HeaderNav` (desktop nav), `LocaleSwitch`, and a CTA button.
2. **HeaderNav.tsx** defines `NAV_ITEMS` (5 items: home, services, methodology, why, contact) and renders a desktop-only `<nav>` with `hidden md:flex`.
3. **LocaleSwitch** is hidden on mobile (`hidden md:inline-flex`).
4. **No mobile menu exists** — mobile users have no navigation.
5. **No drawer component** exists yet. shadcn/ui is configured with "base-sera" style.
6. **Translations** are fetched in page.tsx via `getTranslations()` and passed as props.

---

## Proposed Changes

### Step 1: Install shadcn drawer component

Run: `pnpm dlx shadcn@latest add drawer`

This will create `components/ui/drawer.tsx` with a Vaul-based drawer component compatible with the existing shadcn config (base-sera style, Tailwind v4, RTL).

### Step 2: Export NAV_ITEMS from HeaderNav.tsx

**File:** `components/HeaderNav.tsx`
- Change `const NAV_ITEMS` to `export const NAV_ITEMS` so the mobile menu can reuse the same canonical link definitions without duplication.

### Step 3: Create MobileNavDrawer component

**New file:** `components/MobileNavDrawer.tsx`

A client component ("use client") that:
- Imports `NAV_ITEMS` from `@/components/HeaderNav`
- Imports `Drawer`, `DrawerTrigger`, `DrawerContent`, etc. from `@/components/ui/drawer`
- Imports `Menu`, `X` icons from `lucide-react`
- Imports `LocaleSwitch` for RTL locale toggle inside the drawer
- Accepts `translations: Record<string, string>` and `locale: string` as props
- Renders a hamburger button (`Menu` icon) visible only on mobile
- On open, shows a full-height or large drawer with:
  - The same 5 nav links (styled beautifully with active section highlighting)
  - A LocaleSwitch at the bottom
  - Close button (X icon)
  - Smooth slide-up animation (built into Drawer)
- Uses the same `useActiveSection` pattern to highlight the current section in the drawer

Styling direction:
- Clean, minimal, full-height drawer with padding
- Each link: large touch target, border-bottom separator, active state with accent color
- Dark background matching the primary header color
- RTL-aware layout (the existing `dir` attribute handles this)

### Step 4: Integrate into page.tsx header

**File:** `app/[locale]/page.tsx`
- Import `MobileNavDrawer` from `@/components/MobileNavDrawer`
- In the header's "Actions" div (line 115), add `<MobileNavDrawer translations={...} locale={locale} />` before the CTA button, with `md:hidden` class
- Add the same translation object that HeaderNav receives
- The LocaleSwitch is already hidden on mobile (`hidden md:inline-flex`), so it doesn't need changes

Header structure after changes (mobile):
```
[Logo]  [MobileNavDrawer(👈)  LocaleSwitch(👈)  CTA]
```
The hamburger button will be visible on mobile, hidden on desktop via `md:hidden`.

---

## Assumptions & Decisions

- **NAV_ITEMS is exported** rather than duplicated, keeping the source of truth in one place.
- **Active section tracking** uses the same `useActiveSection` approach already proven in HeaderNav.
- **Drawer over Sheet** — the user specifically requested shadcn's `drawer`, which uses Vaul and provides a mobile-native slide-up experience. This is more appropriate for mobile than a side sheet.
- **Base-ui style** — the existing shadcn config uses "base-sera" style, so the generated drawer component will follow that convention.
- **No structural changes to page.tsx** — the mobile drawer is added alongside existing elements without refactoring the inline header.

---

## Verification

1. Run `pnpm dlx shadcn@latest add drawer` successfully generates `components/ui/drawer.tsx`.
2. The project compiles with no TypeScript errors.
3. On mobile viewport (<768px): hamburger icon is visible; tapping it opens the drawer with all 5 nav links and LocaleSwitch.
4. On desktop viewport (>=768px): hamburger icon is hidden; existing desktop nav works unchanged.
5. Active section highlighting works inside the drawer as the user scrolls.
6. RTL layout works correctly for Arabic locale.
