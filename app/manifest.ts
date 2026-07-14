import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ديبنتاج | استشارات هندسية وتشغيلية",
    short_name: "ديبنتاج",
    description:
      "ديبنتاج شركة استشارات هندسية وتشغيلية في السعودية متخصصة في إعادة هندسة العمليات، رفع الكفاءة التشغيلية، مراجعة المخططات، فحص المباني والإشراف الهندسي.",
    start_url: "/ar",
    display: "standalone",
    background_color: "#F8F4F0",
    theme_color: "#0A192F",
    icons: [
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
