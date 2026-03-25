"use client";

import { useState } from "react";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";
import ContrastToggle from "@/components/accessibility/ContrastToggle/ContrastToggle";
import FontSizeControls from "@/components/accessibility/FontSizeControls/FontSizeControls";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

export default function Header() {
  const [activeBtn, setActiveBtn] = useState(false);
  const scrollCheck = () => {
    setActiveBtn((prev) => !prev);
  };
  return (
    <header className={cx("header")}>
      <div className={cx("header__inner")}>
        <h1>
          <span className="sc-only">codingage</span>
          <img src="/images/logo.png" alt="" />
        </h1>
        <button onClick={scrollCheck} className={cx("btn toggle-btn")}>
          <span className="sc-only">모바일 토글메뉴</span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={cx("gnb", { active: activeBtn })}>
          <ul className={cx("gnb__inner")}>
            <li className={cx("gnb__list")}>
              <a href="#introduction">메인</a>
            </li>
            <li className={cx("gnb__list")}>
              <a href="#competencies">인사</a>
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
      <div className={cx("header__utils")}>
        <LanguageSwitcher />
        <ContrastToggle />
        <FontSizeControls />
      </div>
    </header>
  );
}
