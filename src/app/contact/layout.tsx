import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Schedule a free phone consultation with Breeze Bookkeeping. QuickBooks ProAdvisor serving Herriman, UT, Salt Lake City, and businesses nationwide. Let's discuss your bookkeeping needs.",
  keywords: ["bookkeeping", "contact bookkeeper", "schedule consultation", "QuickBooks ProAdvisor", "Herriman UT bookkeeper", "Salt Lake City bookkeeping", "Utah bookkeeper"],
  alternates: {
    canonical: "https://www.easybreezebooks.com/contact"
  },
  openGraph: {
    title: "Contact Us | Breeze Bookkeeping",
    description: "Schedule a free phone consultation with Breeze Bookkeeping. Let's discuss your bookkeeping needs.",
    url: "https://www.easybreezebooks.com/contact"
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
