import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "Nkay Admin",
  description: "Nkay Fabrics Admin Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400&display=swap"
          rel="stylesheet"
        />
        <title></title>
      </head>
      <body className="bg-background min-h-screen font-satoshi antialiased">
        {children}
      </body>
    </html>
  );
}
