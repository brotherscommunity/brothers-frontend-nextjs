import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Main/Navbar";
import StoreProvider from "@/redux/StoreProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brotherhood",
  description: "A collabrative and Knowledge sharing Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <StoreProvider>
            <Navbar />
            <section>
              {children}
            </section>
        </StoreProvider>
      </body>
    </html>
  );
}
