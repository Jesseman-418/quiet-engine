import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Growth Operating | Product Build + Email Engine for Creators",
  description:
    "I build the digital product. I write the emails that sell it. You stay the face. Three services — pure rev share, monthly retainer, or both bundled.",
  keywords: [
    "creator partnerships",
    "digital product launch",
    "revenue share",
    "email copywriting retainer",
    "creator agency",
    "ghostwriting for creators",
    "course creation",
    "newsletter monetization",
    "creator economy",
    "audience monetization",
  ],
  openGraph: {
    title: "Growth Operating | Product Build + Email Engine for Creators",
    description:
      "I build the digital product. I write the emails. You stay the face. Three services — rev share, retainer, or both.",
    type: "website",
    locale: "en_US",
    siteName: "Growth Operating",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Operating | Product Build + Email Engine for Creators",
    description:
      "I build the digital product. I write the emails. You stay the face.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
