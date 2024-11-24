import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import ActiveSection from "@/context/ActiveSection";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Layers",
  description: "Modern Design Tool Landing Page",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      className="!scroll-smooth"
    >
      <body
        className={`${inter.variable} overflow-x-hidden font-sans antialiased bg-neutral-950 text-neutral-50`}
      >
        <ActiveSection>
          <Header />
          <main>{children}</main>
        </ActiveSection>
        <Footer />
      </body>
    </html>
  );
}
