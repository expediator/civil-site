import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.business.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = siteConfig.ga.measurementId;

  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">
        {children}

        {/* Google Analytics — paste your Measurement ID in data/content.ts → ga.measurementId */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}</Script>
          </>
        )}
      </body>
    </html>
  );
}
