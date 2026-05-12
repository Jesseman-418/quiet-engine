import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quiet Engine — Product build + email engine for creators",
  description:
    "We build the digital product. We write the emails that sell it. You stay the face. Three service tiers for creators with 10K–100K audience.",
  keywords: [
    "quiet engine",
    "creator agency",
    "digital product launch",
    "revenue share partnership",
    "email copywriting retainer",
    "ghostwriting for creators",
    "course creation agency",
    "newsletter monetization",
  ],
  openGraph: {
    title: "Quiet Engine — Product build + email engine for creators",
    description:
      "We build the digital product. We write the emails. You stay the face. Three service tiers.",
    type: "website",
    locale: "en_US",
    siteName: "Quiet Engine",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiet Engine — Product build + email engine for creators",
    description:
      "We build the digital product. We write the emails. You stay the face.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
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
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="font-sans bg-ink text-fg">{children}</body>
    </html>
  );
}
