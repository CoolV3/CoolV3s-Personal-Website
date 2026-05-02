import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/navbar";
import FooterSection from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoolV3s Profile",
  description: "My personal profile Website :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth` }
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
      <div className="h-20">
        <NavBar/>
      </div>
      <div className="flex flex-col grow">
        {children}
      </div>
      <div className="h-40 justify-end">
        <FooterSection/>
      </div>
      </body>
    </html>
  );
}
