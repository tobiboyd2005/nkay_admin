import Navbar from "@/components/Layout/navbar";
import { Footer } from "@/components/Layout/footer";
import "../../app/globals.css";



export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode;
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
        <body className="bg-background min-h-screen font-satoshi antialiased">
          <div>
            <Navbar />
            <div className="h-auto">{children}</div>
            <footer>
              <Footer />
            </footer>
          </div>
        </body>
      </html>
    );
}
