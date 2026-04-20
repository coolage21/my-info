import { useState, useEffect } from "react";
import classNames from 'classnames/bind'
import styles from "./FontSizeControls.module.scss";
import { useUi } from '@/providers/ui-provider'

const cx = classNames.bind(styles);

export default function FontSizeControls() {

  const { changeFontScale } = useUi()

  return (
    <div>
      <button onClick={() => changeFontScale('up')}>+ 글자확대</button>
      <button onClick={() => changeFontScale('down')}>- 글자축소</button>
    </div>
  );
}

