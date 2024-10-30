import type { Metadata } from "next";
import { Suspense } from "react";
import { Lato } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Whatsapp from "@/components/layouts/Whatsapp";
import Loading from "@/components/partials/Loading";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Car Street",
  description: "car street",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <Suspense fallback={<Loading isFullScreen />}>
          <Providers>
            <NextTopLoader color="#00ADEF" />
            <Navbar />
            <Whatsapp />
            {children}
            <Footer />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
