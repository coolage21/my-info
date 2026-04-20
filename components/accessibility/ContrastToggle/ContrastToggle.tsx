import {useState} from 'react';
import classNames from 'classnames/bind'
import styles from "./ContrastToggle.module.scss";
import { useUi } from '@/providers/ui-provider'

const cx = classNames.bind(styles);


export default function ContrastToggle() {
  const { theme, toggleTheme } = useUi()

  
  return (
    <button onClick={toggleTheme} type="button" aria-label={theme == 'dark' ? '라이트모드로 변경' :'다크모드로 변경'}>
        {theme == 'dark' ? '☀️' :'🌜'}
    </button>
  );
}

