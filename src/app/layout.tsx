import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.spaceminds.agency'),
  title: {
    default: "SpaceMinds | Global Software Development Agency",
    template: "%s | SpaceMinds"
  },
  description: "Premium software development for governments, NGOs, and large institutions. Building scalable, secure, and future-proof digital systems.",
  keywords: ["Software Development", "Government Tech", "Enterprise Software", "Digital Infrastructure", "NGO Technology", "SpaceMinds", "Zambia Tech"],
  authors: [{ name: "SpaceMinds" }],
  creator: "SpaceMinds",
  publisher: "SpaceMinds",
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SpaceMinds | Global Software Development Agency",
    description: "Premium software development for governments, NGOs, and large institutions. Building scalable, secure, and future-proof digital systems.",
    url: 'https://www.spaceminds.agency',
    siteName: 'SpaceMinds',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SpaceMinds | Global Software Development Agency",
    description: "Premium software development for governments, NGOs, and large institutions.",
    creator: "@spaceminds",
  },
  verification: {
    google: "z5IuQJpLIA0qg4xH42F-PIkDKK0eBOnYOFiF3rZQn4Y",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
