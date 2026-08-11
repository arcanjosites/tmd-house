import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Cursor } from "@/components/layout/Cursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SiteAtmosphere } from "@/components/layout/SiteAtmosphere";
import { SkipLink } from "@/components/layout/SkipLink";
import { JsonLd } from "@/components/layout/JsonLd";
import { IMAGES } from "@/lib/images";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.REPLIT_DOMAINS
      ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}`
      : "http://localhost:5000"
  ),
  title: "TMD House | Brazilian Jiu-Jitsu",
  description:
    "TMD House. Jiu-Jitsu, Muay Thai, Karatê e performance. Técnica, disciplina e comunidade. Agende sua aula experimental.",
  icons: { icon: IMAGES.logo },
  openGraph: {
    title: "TMD House | Brazilian Jiu-Jitsu",
    description: "No tatame não existem atalhos. Conheça a TMD House.",
    images: [IMAGES.logo],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <JsonLd />
        <SiteAtmosphere />
        <div className="relative z-10">
          <SmoothScroll>
            <SkipLink />
            <Cursor />
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
