import type { Metadata } from "next";
import "@/style/globals.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { ThemeProvider } from "../../providers/ui-provider";
import { ReactQueryProvider } from "../../providers/react-query-provider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

import localFont from "next/font/local";

const pretendard = localFont({
  src: "./../font/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "프론트엔드 개발자 최하혜 포트폴리오", // 브라우저 탭에 표시될 이름
  description: "프론트엔드 개발자 최하혜 포트폴리오 사이트",
  keywords: [
    "프론트엔드",
    "웹퍼블리셔",
    "웹퍼블리싱",
    "개발자",
    "웹개발자",
    "웹접근성",
    "웹표준형",
    "프론트엔드 포트폴리오",
    "2026 프론트엔드 개발자 포트폴리오",
    "경력 퍼블리셔 포트폴리오",
    "퍼블리셔 포트폴리오",
    "React 개발자",
  ],
  openGraph: {
    title: "최하혜의 포트폴리오",
    description:
      "안녕하십니까. 프론트엔드 개발자 최하혜의 포트폴리오 사이트입니다.",
    url: "https://hahye.com",
    siteName: "코딩에이지 포트폴리오",
    images: [
      {
        url: "https://hahye.com/images/screenshot/img_main.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // public/favicon.svg 경로 (없으면 .ico나 .png도 가능)
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={pretendard.variable}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <ReactQueryProvider>
              <div className="wrapper">
                <Header></Header>
                {children}
                <Footer></Footer>
              </div>
            </ReactQueryProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
