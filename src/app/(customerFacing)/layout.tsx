import Navbar from "@/components/Layout/navbar";
import { Footer } from "@/components/Layout/footer";
import "../../app/globals.css";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <div className="bg-background min-h-screen font-satoshi antialiased">
          <Navbar />
          <div className="h-auto">{children}</div>
          <footer>
            <Footer />
          </footer>
        </div>
  );
}
