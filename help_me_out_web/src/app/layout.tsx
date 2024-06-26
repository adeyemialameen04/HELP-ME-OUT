import type { Metadata } from "next";
import { Inter, Sora, Work_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-workSans",
});

export const metadata: Metadata = {
  title: "HelpMeOut",
  description: "Helpmeout is a recording web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} ${sora.variable} ${inter.variable} ${workSans.variable}`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
