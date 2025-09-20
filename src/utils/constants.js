import {
  ArrowPathIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export const homePageServices = [
  {
    name: "Monthly Bookkeeping",
    description:
      "Accurate, up-to-date books every month so you can make business decisions with confidence.",
    icon: BookOpenIcon,
  },
  {
    name: "Payroll Services",
    description:
      "Reliable payroll management that ensures your team is paid correctly and on time, every time.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Cleanups",
    description:
      "Behind on bookkeeping? We’ll tidy up your records and get everything back on track quickly.",
    icon: ArrowPathIcon,
  },
  {
    name: "Financial Statement Analysis",
    description:
      "Clear, easy-to-understand insights into your financial statements to help guide smarter decisions.",
    icon: DocumentChartBarIcon,
  },
];

export const services = [
  "Capturing and properly coding all bank and credit card transactions",
  "Bank and credit card reconciliation",
  "Accounts receivable",
  "Accounts payable",
  "Payroll processing and tax filing",
  "Job costing",
  "Inventory tracking",
  "Fixed asset management",
  "Sales tax accounting and filing",
  "Financial reporting",
  "Management reporting",
  "1099 filings",
];