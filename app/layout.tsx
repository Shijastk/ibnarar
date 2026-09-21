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

const siteUrl = "https://www.ibnarar.com";
const siteTitle = "IBN ARAR | Trading, Contracting & Transportation in Qatar";
const siteDescription =
  "Qatar-based trading, engineering and contracting, heavy equipment and transportation company serving clients since 2003.";
const socialImage = "/ibn-logo-social.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | IBN ARAR",
  },
  description: siteDescription,
  applicationName: "IBN ARAR",
  keywords: [
    "IBN ARAR",
    "Qatar trading company",
    "engineering and contracting Qatar",
    "heavy equipment Qatar",
    "transportation Qatar",
    "industrial supplies Qatar",
  ],
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: "/ibn-logo.png", type: "image/png" }],
    shortcut: ["/ibn-logo.png"],
    apple: [{ url: "/ibn-logo.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "IBN ARAR Group",
    locale: "en_US",
    images: [
      {
        url: socialImage,
        alt: "IBN ARAR Trading, Contracting and Transportation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
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
