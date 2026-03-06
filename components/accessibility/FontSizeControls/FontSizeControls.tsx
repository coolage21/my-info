import { useState, useEffect } from "react";
import classNames from 'classnames/bind'
import styles from "./FontSizeControls.module.scss";

const cx = classNames.bind(styles);

export default function FontSizeControls() {

  const SizeChange = (size:string) => {
    if(size == 'up'){
      setFontScale(fontScale + 0.1);
    } else {
      setFontScale(fontScale - 0.1);
    }
    document.documentElement.style.setProperty("--font-scale", fontScale.toString())
  }

  const [fontScale, setFontScale] = useState(1);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", fontScale.toString())
  }, [fontScale])
  
  return (
    <div>
      <button onClick={() => SizeChange('up')}>+ 글자확대</button>
      <button onClick={() => SizeChange('down')}>- 글자축소</button>
    </div>
  );
}

