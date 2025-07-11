import { NextIntlClientProvider, hasLocale } from "next-intl";
import "./globals.css";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Script from "next/script";
export const metadata = {
  metadataBase: new URL("https://www.mter.pl/"),
  title: "Michał Terczyński's website",
  description:
    "Michał Terczyński - Experienced Frontend & Game Developer specializing in TypeScript, React, Angular, and PixiJS. Creator of engaging slot games and interactive web applications.",

  keywords: [
    "Michał Terczyński,",
    "mterczynski",
    "Frontend Developer",
    "Game Developer",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "PixiJS",
    "React",
    "Full Stack",
  ].join(", "),
  robots: "index, follow",
  icons: [
    { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
    { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    { url: "/apple-touch-icon.png", type: "image/png" },
    { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    { url: "/favicon.ico", type: "image/x-icon" },
  ],
  openGraph: {
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],

    title: "Michał Terczyński's website",
    description:
      "Michał Terczyński - Experienced Frontend & Game Developer specializing in TypeScript, React, Angular, and PixiJS. Creator of engaging slot games and interactive web applications.",
    locale: "en_US ",
    url: "https://www.mter.pl/",
    siteName: "Michał Terczyński",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"
        />

        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />

        {/* ✅ Load Semantic UI JS after jQuery */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
