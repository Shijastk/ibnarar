import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Libre_Baskerville,
  Noto_Naskh_Arabic,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brandEnglish = Libre_Baskerville({
  variable: "--font-brand-english",
  subsets: ["latin"],
  weight: "700",
});

const brandArabic = Noto_Naskh_Arabic({
  variable: "--font-brand-arabic",
  subsets: ["arabic"],
  weight: "700",
});

const siteUrl = "https://ibnarar.com";
const siteTitle = "EBN ARAR | Trading, Contracting & Transportation in Qatar";
const siteDescription =
  "Qatar-based trading, engineering and contracting, heavy equipment and transportation company serving clients since 2003.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | EBN ARAR",
  },
  description: siteDescription,
  applicationName: "EBN ARAR",
  keywords: [
    "EBN ARAR",
    "Qatar trading company",
    "engineering and contracting Qatar",
    "heavy equipment Qatar",
    "transportation Qatar",
    "industrial supplies Qatar",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: ["/logo.png"],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "EBN ARAR Group",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${brandEnglish.variable} ${brandArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
