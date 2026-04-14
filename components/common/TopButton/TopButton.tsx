"use client";
import classNames from 'classnames/bind'
import styles from "./TopButton.module.scss";
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

interface TopButtonProps {
  isShow: boolean,
}

export default function TopButton({isShow}: TopButtonProps) {

  const [isActive, setIsActive ] = useState(false);
  useEffect(() => {
 
    const scrollCheck = () => {
        setIsActive(window.scrollY > 50);
    }
    window.addEventListener('scroll', scrollCheck);
    return () => {
    window.removeEventListener('scroll', scrollCheck);
    }
  },[])

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth",
    })
  }
  return (
    <button
      aria-label="페이지 상단으로 이동"
      type="button"
      className={cx("top-btn", {active:isActive})}
      onClick={scrollToTop}
      >
        TOP
    </button>
  );
}

