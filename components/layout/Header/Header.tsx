"use client"

import LanguageSwitcher from '@/components/i18n/LanguageSwitcher'
import ContrastToggle from '@/components/accessibility/ContrastToggle/ContrastToggle'
import FontSizeControls from '@/components/accessibility/FontSizeControls/FontSizeControls'
import classNames from 'classnames/bind'
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx('header')}>
      {/* <h1>codingage</h1> */}
      <div className={cx('header__inner', 'ly-main')}>
        <nav>
          <ul className={cx('gnb')}>
            <li>
              <a href="#introduction">메인</a>
            </li>
            <li>
              <a href="#competencies">핵심역량</a>
            </li>
            <li>
              <a href="#skills">기술스택</a>
            </li>
            <li>
              <a href="#projects">프로젝트</a>
            </li>
            <li>
              <a href="#history">소개</a>
            </li>
          </ul>
        </nav>
        <div className={cx('header__utils')}>
          <LanguageSwitcher/>
          <ContrastToggle/>
          <FontSizeControls/>
        </div>
      </div>
    </header>
  );
}
