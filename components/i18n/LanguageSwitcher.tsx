"use client";

import {useRouter, usePathname} from '@/i18n/navigation';
import classNames from 'classnames/bind'
import styles from "./LanguageSwitcher.module.scss";

const cx = classNames.bind(styles);


export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLang = (locale: string) => {
    router.replace("/", {locale});
    console.log(locale)
  };

  return (
    <>
      <button type="button" aria-pressed="true" onClick={() => changeLang("ko")} aria-label="한국어로 변경">KO</button>
      <button type="button" aria-pressed="false" onClick={() => changeLang("en")} aria-label="영어로 변경">EN</button>
      <button type="button" aria-pressed="false" onClick={() => changeLang("cn")} aria-label="중국어로 변경">CN</button>
    </>
  );
}