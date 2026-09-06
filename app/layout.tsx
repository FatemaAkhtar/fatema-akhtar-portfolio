import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PERSON, SITE_URL } from "@/lib/content";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

const title = "Fatema Akhtar | Data Analyst | SQL, Power BI, Python";
const description =
  "Data Analyst working in SQL, Power BI, Python and Excel, with hands-on experience applying analytics across business, supply chain and operations, and financial risk problems.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Fatema Akhtar",
  },
  description,
  keywords: [
    "Data Analyst",
    "Business Analyst",
    "Business Analytics",
    "BI Analyst",
    "Operations Analyst",
    "Supply Chain Analyst",
    "Financial Risk Analytics",
    "Power BI",
    "SQL",
    "Python",
    "Mumbai",
  ],
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${PERSON.name}, Data Analyst`,
    title,
    description,
    locale: "en_IN",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Fatema Akhtar, Data Analyst. I don't start with the dashboard. I start with the problem.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport = {
  themeColor: "#fbfaf7",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSON.name,
  jobTitle: "Data Analyst",
  email: `mailto:${PERSON.email}`,
  url: SITE_URL,
  image: `${SITE_URL}/portrait.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Mumbai",
  },
  knowsAbout: [
    "Data Analysis",
    "Business Analytics",
    "Supply Chain & Operations Analytics",
    "Financial Risk Analytics",
    "Business Intelligence",
    "SQL",
    "Power BI",
    "Python",
    "Root Cause Analysis",
  ],
  sameAs: [PERSON.linkedin, PERSON.github],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
