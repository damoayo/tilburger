import type { Metadata } from "next";
import { Poppins,Roboto, Noto_Sans_KR  } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
    
const font = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "300", "400", "500", "700", "900", "200", "600", "800"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

const roboto = Roboto({
  subsets: ["latin"], // preload에 사용할 subsets입니다.
  weight: ["100", "300", "400", "500", "700", "900", "200", "600", "800"],
  variable: "--roboto", // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});

const poppins = Poppins({
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
      <body className={`${poppins.className,roboto.className,font.className} antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
