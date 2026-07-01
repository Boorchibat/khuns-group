import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khuns Group",
  description:
    "Khuns Group is a private company in Mongolia that specializes in food production and consumer products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} min-h-full flex flex-col antialiased`}
      >
        
          <Header />
          <div className="mx-[100px] flex min-h-full flex-col">
          <main className="flex-1">{children}</main>
          </div>
          <Footer />
   
      </body>
    </html>
  );
}
