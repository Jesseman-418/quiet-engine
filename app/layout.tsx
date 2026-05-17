import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://listing-engine-site.vercel.app"),
  title: "The Listing Engine — Resurrect dormant CRM leads",
  description:
    "AI engine that pulls dormant leads from your CRM, scores them HOT/WARM/COLD, and drafts personalized re-engagement in your voice. Installed in 7 days. For top-producing real estate agents.",
  keywords: [
    "listing engine",
    "real estate AI",
    "dormant lead resurrector",
    "CRM re-engagement",
    "real estate automation",
    "top producer tools",
    "lead nurture AI",
  ],
  openGraph: {
    title: "The Listing Engine — Resurrect dormant CRM leads",
    description:
      "AI engine that pulls dormant leads, scores them, and drafts personalized re-engagement in your voice. Installed in 7 days.",
    type: "website",
    locale: "en_US",
    siteName: "The Listing Engine",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Listing Engine",
    description:
      "Resurrect dormant CRM leads. Installed in 7 days. For top-producing real estate agents.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08070a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}
      style={
        {
          "--font-sans": GeistSans.style.fontFamily,
          "--font-mono": GeistMono.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <body className="font-sans bg-ink text-fg antialiased">{children}</body>
    </html>
  );
}
