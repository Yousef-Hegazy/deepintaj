# Plan: Improve SEO with Icons from `public/icons`

## Summary

Replace the default Next.js favicon and placeholder manifest with proper brand icons already present in `public/icons/`, update the root layout's icon references, and clean up stale files. This improves SEO signals (favicon in search results, PWA manifest, device-specific icons) and eliminates default Next.js placeholder assets.

## Current State Analysis

- **`public/icons/`** contains 7 brand asset files: `favicon.ico`, `favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png`, `android-chrome-512x512.png`, `android-chrome-192x192.png`, and a stale `manifest.json`.
- **`app/favicon.ico`** — This is the default Next.js icon, not the brand one.
- **`app/layout.tsx`** references only `"/favicon.ico"` (the default one) for both `icon` and `apple`.
- **`app/manifest.ts`** lists only `favicon.ico` at 48×48 — missing the Android Chrome icons.
- **`public/icons/manifest.json`** is a stale placeholder (generic name, wrong colors) — superseded by `app/manifest.ts`.
- **`robots.ts`** allows `/images/` but not `/icons/`.
- **`lib/seo.ts`** OG image still references the logo (`/images/deepintaj-logo-transparent.png`), which is incorrect dimensions (not 1200×630). No new OG image is in the icons folder, so this stays unchanged — only icons are being fixed here.

## Proposed Changes

### 1. Delete stale `public/icons/manifest.json`

This file has generic placeholder data (`"name": "Your App Name"`, `"theme_color": "#ffffff"`). It is superseded by the dynamic `app/manifest.ts`. Leaving it would confuse crawlers if served.

### 2. Replace `app/favicon.ico` with brand favicon

Copy `public/icons/favicon.ico` → overwrite `app/favicon.ico` so the default Next.js icon is replaced by the brand icon. This is the simplest approach and keeps the existing path `/favicon.ico` working.

### 3. Update `app/layout.tsx` — expand `icons` metadata

Current:
```ts
icons: {
  icon: "/favicon.ico",
  apple: "/favicon.ico",
},
```

New — reference all brand icon sizes:
```ts
icons: {
  icon: [
    { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  ],
  apple: [
    { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  ],
  other: [
    {
      rel: "android-chrome-192x192",
      url: "/icons/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      rel: "android-chrome-512x512",
      url: "/icons/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
},
```

### 4. Update `app/manifest.ts` — add Android Chrome icons

Change the `icons` array from the single `favicon.ico` to:
```ts
icons: [
  { src: "/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
  { src: "/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
  { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
],
```

### 5. Update `app/robots.ts` — allow `/icons/` path

Add `"/icons/"` to the `allow` array so crawlers can access icon files.

## Files Changed

| File | Action |
|---|---|
| `app/favicon.ico` | Overwrite with `public/icons/favicon.ico` (binary replace) |
| `public/icons/manifest.json` | Delete (stale placeholder) |
| `app/layout.tsx` | Edit `icons` export |
| `app/manifest.ts` | Edit `icons` array |
| `app/robots.ts` | Add `/icons/` to allow list |

## Files NOT Changed

- `lib/seo.ts` — OG image stays as logo; no OG image exists in the icons folder.
- `app/sitemap.ts` — No change needed (icons are not indexable pages).
- `app/[locale]/layout.tsx` — No change needed (icon references are in root layout).

## Verification

1. `pnpm lint` — must pass with no errors
2. `pnpm build` — must pass with no errors
3. Verify `/robots.txt` includes `Allow: /icons/`
4. Verify `/manifest.webmanifest` includes proper icon entries
5. Verify `app/favicon.ico` hash changed (now brand icon, not Next.js default)
