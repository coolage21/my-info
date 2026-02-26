import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import "@/style/globals.scss";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={notoSansKr.variable}
      > 
        <div className="wrapper">
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
