import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/components/ui/use-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ScentCraft - Your story, Bottled!",
  description:
    "Create personalized fragrance blends tailored to your mood and taste.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
