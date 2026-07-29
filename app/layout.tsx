import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import LenisScrollProvider from "@/components/LenisScrollProvider";
import IntersectionObserverScript from "@/components/IntersectionObserverScript";

// $10k Award-Winning Typography Hierarchy: Precision Engineering (Playfair Display + Manrope)
const stylish = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-space", // Keeping same variable name so we don't have to rewrite everything
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter", // Keeping same variable name
  display: "swap",
});

export const metadata: Metadata = {
  title: "SO HVAC | Second Opinion. First Choice. — GTA's Premier Mechanical Engineers",
  description:
    "Experience next-generation inverter heat pumps and cryo-cooling architecture. We help Greater Toronto Area homeowners make empowered mechanical choices before spending thousands. Transparent quotes, InstallCam™ 100% verified quality, and zero sales pressure.",
  keywords:
    "HVAC GTA, luxury AC installation Mississauga, Toronto heat pump rebates, Daikin Mitsubishi inverter, cryo cooling, free second opinion, SO HVAC",
  openGraph: {
    title: "SO HVAC | Second Opinion. First Choice. — GTA's Trusted Team",
    description:
      "Transparent quotes, InstallCam™ verified installs, and zero-pressure second opinions across the Greater Toronto Area.",
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
    <html lang="en" suppressHydrationWarning className={`${stylish.variable} ${manrope.variable}`}>
      <body
        className="bg-[#FAFAFA] text-[#0F0F0F] font-sans antialiased selection:bg-[#0033FF] selection:text-[#FAFAFA]"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        suppressHydrationWarning
      >
        <LenisScrollProvider>
          <IntersectionObserverScript />
          <ThemeProvider>{children}</ThemeProvider>
        </LenisScrollProvider>
      </body>
    </html>
  );
}

