import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ubiquo - Next.js NestJS TailwindCSS",
  description: "Made by: Christian Arias",
  icons: {
    icon: [
      {
        url: "public/resources/ubiquoLogo.png",
        href: "public/resources/ubiquoLogo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <div className="flex">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </html>
  );
}
