import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Main/Navbar";
import AuthStateProvider from "@/Context/AuthStateProvider";

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
        <AuthStateProvider>
          <Navbar />
          <section>
            {children}
          </section>
        </AuthStateProvider>
      </body>
    </html>
  );
}
