import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://easybreezebooks.com'),
  title: {
    default: "Breeze Bookkeeping | QuickBooks ProAdvisor in Herriman, UT",
    template: "%s | Breeze Bookkeeping"
  },
  description: "Professional bookkeeping services in Herriman, UT and Salt Lake City area. QuickBooks Online ProAdvisor offering affordable bookkeeping, payroll, and financial statement analysis for small businesses nationwide.",
  keywords: ["bookkeeping", "QuickBooks ProAdvisor", "Herriman UT", "Salt Lake City", "bookkeeper", "payroll services", "small business accounting", "financial statements", "QuickBooks Online", "Utah bookkeeper"],
  authors: [{ name: "Darren Cardwell" }],
  creator: "Breeze Bookkeeping",
  publisher: "Breeze Bookkeeping",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://easybreezebooks.com",
    siteName: "Breeze Bookkeeping",
    title: "Breeze Bookkeeping | QuickBooks ProAdvisor in Herriman, UT",
    description: "Professional bookkeeping services in Herriman, UT and Salt Lake City area. QuickBooks Online ProAdvisor offering affordable bookkeeping, payroll, and financial statement analysis.",
    images: [
      {
        url: "/breeze_bookkeeping_logo.svg",
        width: 500,
        height: 256,
        alt: "Breeze Bookkeeping Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Breeze Bookkeeping | QuickBooks ProAdvisor in Herriman, UT",
    description: "Professional bookkeeping services in Herriman, UT and Salt Lake City area. QuickBooks Online ProAdvisor.",
    images: ["/breeze_bookkeeping_logo.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification here when available
    // google: 'your-verification-code',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://easybreezebooks.com",
    "name": "Breeze Bookkeeping",
    "image": "https://easybreezebooks.com/breeze_bookkeeping_logo.svg",
    "description": "Professional bookkeeping services in Herriman, UT and Salt Lake City area. QuickBooks Online ProAdvisor offering affordable bookkeeping, payroll, and financial statement analysis.",
    "url": "https://easybreezebooks.com",
    "telephone": "",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Herriman",
      "addressRegion": "UT",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.5141,
      "longitude": -112.0330
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Herriman"
      },
      {
        "@type": "City",
        "name": "Salt Lake City"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "serviceType": [
      "Bookkeeping Services",
      "QuickBooks Consulting",
      "Payroll Services",
      "Financial Statement Analysis",
      "Account Reconciliation"
    ],
    "founder": {
      "@type": "Person",
      "name": "Darren Cardwell",
      "jobTitle": "QuickBooks ProAdvisor"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
