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

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = params;

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
