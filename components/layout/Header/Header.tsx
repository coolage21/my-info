"use client";

import { useState } from "react";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";
import ContrastToggle from "@/components/accessibility/ContrastToggle/ContrastToggle";
import FontSizeControls from "@/components/accessibility/FontSizeControls/FontSizeControls";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Image from 'next/image'

const cx = classNames.bind(styles);

export default function Header() {
  const [activeBtn, setActiveBtn] = useState(false);
  const scrollCheck = () => {
    setActiveBtn((prev) => !prev);
  };
  return (
    <header className={cx("header")}>
      <div className={cx("header__utils")}>
        <LanguageSwitcher />
        <ContrastToggle />
        <FontSizeControls />
      </div>
      <div className={cx("header__inner", { active: activeBtn })}>
        <h1>
          <Image src="/images/logo.png" alt="codingage" width={134} height={23} />
        </h1>
        <button onClick={scrollCheck} className={cx("btn",'toggle-btn')}>
          <i className="sc-only">모바일 토글메뉴</i>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={cx("gnb")}>
          <ul className={cx("gnb__inner")}>
            <li className={cx("gnb__list")}>
              <a href="#introduction">메인</a>
            </li>
            <li className={cx("gnb__list")}>
              <a href="#strength">인사</a>
            </li>
            <li className={cx("gnb__list")}>
              <a href="#skills">상품</a>
            </li>
            <li className={cx("gnb__list")}>
              <a href="#projects">게시판</a>
            </li>
            <li className={cx("gnb__list")}>
              <a href="#history">홍보</a>
            </li>
          </ul>
        </nav>
      </div>
    
    </header>
  );
}
