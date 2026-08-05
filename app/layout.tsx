import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi-Yeon Kim",
  description: "Mi-Yeon Kim portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfitSans.variable} h-screen antialiased scroll-smooth overflow-x-clip`}
    >
      <body className="select-none font-outfit overflow-x-clip">{children}</body>
    </html>
  );
}
