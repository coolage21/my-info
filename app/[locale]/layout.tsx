import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import "@/style/globals.scss";
import { ThemeProvider } from "../../providers/theme-provider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: '최하혜 포트폴리오', // 브라우저 탭에 표시될 이름
  description: '웹 퍼블리셔 최하혜 포트폴리오 사이트',
  keywords: ['웹퍼블리셔','웹퍼블리싱','프론트엔드','개발자','웹접근성','웹표준형','퍼블리셔 포트폴리오','경력 퍼블리셔 포트폴리오'],
  openGraph: {
    title: "최하혜의 포트폴리오",
    description: "안녕하십니까. 웹 퍼블리셔 최하혜의 포트폴리오 사이트입니다.",
    url: "https://my-info-lake.vercel.app/ko",
    siteName: "코딩에이지 포트폴리오",
    images: [
      {
        url: "https://my-info-lake.vercel.app/ko/images/screenshot/copyright_01",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  icons: {
    icon: '/favicon.svg', // public/favicon.svg 경로 (없으면 .ico나 .png도 가능)
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

  console.log("locale:", locale);
  console.log("title:", messages?.HomePage?.title);
  return (
    <html lang={locale}>
      <body className={notoSansKr.variable}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <div className="wrapper">
              <Header></Header>
              {children}
              <Footer></Footer>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
