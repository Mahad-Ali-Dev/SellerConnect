import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AuthProvider } from "@/components/providers/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "SellerConnect - Bol Winkelbeheer & Product Listing",
  description: "Bol producten toevoegen, Bol product listing, Bol fulfillment, Bol stock controle.",
};

import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans flex flex-col min-h-screen bg-[#020617]`}
      >
        <AuthProvider>
          <Navbar />
          <main className="flex-grow pt-[72px]">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </AuthProvider>
      </body>
    </html>
  );
}

