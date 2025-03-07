import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Poppins({
  weight: ["100", "300", "400", "500", "700", "900", "200", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TILBURGER 말총베개",
  description:
    "TILBURGER is a company that produces eco-friendly pillows and toppers made from horse tail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
