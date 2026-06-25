import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Bookkeeping Services | Free Consultation",
  description:
    "Get professional, affordable bookkeeping services for your small business. Contact Breeze Bookkeeping today for a free consultation. Serving businesses nationwide from Herriman, UT.",
  keywords: [
    "bookkeeping services",
    "small business bookkeeping",
    "affordable bookkeeping",
    "professional bookkeeper",
    "Herriman UT bookkeeper",
    "free bookkeeping consultation",
  ],
  alternates: {
    canonical: "https://www.easybreezebooks.com/bookkeeping-services",
  },
  openGraph: {
    title: "Professional Bookkeeping Services | Breeze Bookkeeping",
    description:
      "Get professional, affordable bookkeeping services. Contact us today for a free consultation.",
    url: "https://www.easybreezebooks.com/bookkeeping-services",
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
