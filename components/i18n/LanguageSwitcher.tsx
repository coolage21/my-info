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
      <button onClick={() => changeLang("ko")}>KO</button>
      <button onClick={() => changeLang("en")}>EN</button>
      <button onClick={() => changeLang("cn")}>CN</button>
    </>
  );
}