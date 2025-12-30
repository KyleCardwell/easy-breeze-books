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
  metadataBase: new URL('https://www.easybreezebooks.com'),
  title: {
    default: "Breeze Bookkeeping | Professional Bookkeeper in Herriman, UT",
    template: "%s | Breeze Bookkeeping"
  },
  description: "Professional bookkeeping services in Herriman, UT and Salt Lake City area. Offering affordable bookkeeping, payroll, and financial statement analysis for small businesses nationwide.",
  keywords: [
    "bookkeeping services Herriman UT",
    "Bookkeeper Salt Lake City",
    "bookkeeper near me",
    "small business bookkeeping Utah",
    "affordable bookkeeping services",
    "payroll services Herriman",
    "financial statement analysis",
    "account reconciliation services",
    "virtual bookkeeper Utah",
    "bookkeeping for small business",
    "Utah bookkeeping services",
    "Salt Lake County bookkeeper"
  ],
  authors: [{ name: "Darren Cardwell" }],
  creator: "Breeze Bookkeeping",
  publisher: "Breeze Bookkeeping",
  alternates: {
    canonical: "https://www.easybreezebooks.com"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.easybreezebooks.com",
    siteName: "Breeze Bookkeeping",
    title: "Breeze Bookkeeping | Professional Bookkeeper in Herriman, UT",
    description: "Professional bookkeeping services in Herriman, UT and Salt Lake City area. Offering affordable bookkeeping, payroll, and financial statement analysis.",
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
    title: "Breeze Bookkeeping | Professional Bookkeeper in Herriman, UT",
    description: "Professional bookkeeping services in Herriman, UT and Salt Lake City area. Offering affordable bookkeeping, payroll, and financial statement analysis.",
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
    "@type": ["LocalBusiness", "ProfessionalService", "AccountingService"],
    "@id": "https://www.easybreezebooks.com",
    "name": "Breeze Bookkeeping",
    "alternateName": "Breeze Bookkeeping Services",
    "image": "https://www.easybreezebooks.com/breeze_bookkeeping_logo.svg",
    "logo": "https://www.easybreezebooks.com/breeze_bookkeeping_logo.svg",
    "description": "Professional bookkeeping services in Herriman, UT and Salt Lake City area. Certified Offering affordable bookkeeping, payroll, and financial statement analysis.",
    "url": "https://www.easybreezebooks.com",
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
        "name": "Herriman",
        "containedIn": {
          "@type": "State",
          "name": "Utah"
        }
      },
      {
        "@type": "City",
        "name": "Salt Lake City",
        "containedIn": {
          "@type": "State",
          "name": "Utah"
        }
      },
      {
        "@type": "State",
        "name": "Utah"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Bookkeeping Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bookkeeping Consulting",
            "description": "Expert bookkeeping setup, training, and consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bookkeeping Services",
            "description": "Monthly bookkeeping, account reconciliation, and transaction categorization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Payroll Services",
            "description": "Complete payroll processing and management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Financial Statement Analysis",
            "description": "Detailed financial reporting and analysis for business insights"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Darren Cardwell",
      "jobTitle": "Member of the QuickBooks ProAdvisor Program",
      "description": "Member of the QuickBooks ProAdvisor Program"
    },
    "knowsAbout": [
      "Bookkeeping",
      "Bookkeeping Online",
      "Payroll",
      "Financial Statements",
      "Account Reconciliation",
      "Small Business Accounting"
    ],
    "slogan": "Effortless accounting that feels like a breeze"
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
