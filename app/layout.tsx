import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import LenisScrollProvider from "@/components/LenisScrollProvider";
import IntersectionObserverScript from "@/components/IntersectionObserverScript";

// $10k Award-Winning Typography Hierarchy: Precision Engineering (Space Grotesk + Inter)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
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
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body
        className="bg-[#050B14] text-white font-sans antialiased selection:bg-[#FF6B00] selection:text-white"
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

