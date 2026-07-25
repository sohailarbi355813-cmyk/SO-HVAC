import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SO HVAC | Second Opinion. First Choice. — HVAC & Water Purification",
  description:
    "SO HVAC provides premium HVAC and water purification solutions. 10-Year Warranty, Free In-Home Assessment, Professional Installation with Permit Included. Serving your community with expert AC, Furnace, Heat Pump, and Water Purification services.",
  keywords:
    "HVAC, AC installation, furnace, heat pump, water purification, water softener, reverse osmosis, SO HVAC",
  openGraph: {
    title: "SO HVAC | Second Opinion. First Choice.",
    description:
      "Premium HVAC and water purification solutions. 10-Year Warranty, Free In-Home Assessment.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${barlow.variable} ${inter.variable} font-body antialiased`}
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
