import type { Metadata } from "next";
import Navbar from "@/components/Layout/navbar";
import { Footer } from "@/components/Layout/footer";
import "../../styles/globals.css"
import AuthProvider from "@/components/AuthProvider";
import {Session} from "next-auth";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                       session
                                   }: {
    children: React.ReactNode;
    session?: Session | null; // The session can be null or undefined
}) {
    return (
        <html lang="en">
        <head>
            <link
                href="https://api.fontshare.com/v2/css?f[]=satoshi@400&display=swap"
                rel="stylesheet"
            />
            <title></title>
        </head>

        <body className="antialiased font-satoshi flex flex-col">
        <AuthProvider session={session}>
        <div>
        {/* Navbar */}

        <Navbar />

        {/* Main content */}
        <div className="h-auto">{children}</div>

        {/* Footer */}
        <footer>
            <Footer />
        </footer>
        </div>
        </AuthProvider>
        </body>
        </html>
    );
}