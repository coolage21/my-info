"use client"

import LanguageSwitcher from '@/components/i18n/LanguageSwitcher'
import ContrastToggle from '@/components/accessibility/ContrastToggle/ContrastToggle'
import FontSizeControls from '@/components/accessibility/FontSizeControls/FontSizeControls'
export default function Header() {
  return (
    <header>
      {/* <h1>codingage</h1> */}
      <ul>
        <li>
          <a href="#intro">소개</a>
        </li>
        <li>
          <a href="#competencies">핵심역량</a>
        </li>
        <li>
          <a href="#skills">기술</a>
        </li>
        <li>
          <a href="#skills">projects</a>
        </li>
      </ul>
      <LanguageSwitcher/>
      <ContrastToggle/>
      <FontSizeControls/>
      
      
    </header>
  );
}
