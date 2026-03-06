import classNames from 'classnames/bind'
import styles from "./ContrastToggle.module.scss";
import { useTheme } from '@/providers/theme-provider'

const cx = classNames.bind(styles);


export default function ContrastToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
        {theme}
    </button>
  );
}

