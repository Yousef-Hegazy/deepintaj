import { cn } from "@/lib/utils";
import { getLocale } from "next-intl/server";
import { IBM_Plex_Sans_Arabic, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/seo";
import "./globals.css";
import type { Metadata, Viewport } from "next";

const ibmPlexSans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const ibmPlexHeading = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  manifest: "/manifest.json",
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
};

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={cn(
        "h-full",
        "antialiased",
        ibmPlexSans.variable,
        ibmPlexHeading.variable,
        jetbrainsMono.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
