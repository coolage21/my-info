"use client";

import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";
import ContrastToggle from "@/components/accessibility/ContrastToggle/ContrastToggle";
import FontSizeControls from "@/components/accessibility/FontSizeControls/FontSizeControls";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx("header")}>
      <h1>codingage</h1>
      <div className={cx("header__inner")}>
        <nav>
          <ul className={cx("gnb")}>
            <li className={cx("gnb__list")}>
              <a href="#introduction">메인</a>
            </li>
            <li className={cx("gnb__list")}>
              <a href="#competencies">핵심역량</a>
            </li>
            <li className={cx("gnb__list")}>
              <a href="#skills">기술스택</a>
            </li>
            <li className={cx("gnb__list")}>
              <a href="#projects">프로젝트</a>
            </li>
            <li className={cx("gnb__list")}>
              <a href="#history">소개</a>
            </li>
          </ul>
        </nav>
        <LanguageSwitcher />
        <ContrastToggle />
        <FontSizeControls />
      </div>
    </header>
  );
}
