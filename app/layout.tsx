import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['700', '800']
})

export const metadata: Metadata = {
  title: "Renewable - Free Framer Template",
  description: "Renewable is a free Framer template for clean energy and sustainability brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-black text-white selection:bg-primary selection:text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
