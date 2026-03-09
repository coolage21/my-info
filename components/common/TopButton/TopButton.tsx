import classNames from 'classnames/bind'
import styles from "./TopButton.module.scss";

const cx = classNames.bind(styles);

interface TopButtonProps {
  isShow: boolean,
}

export default function TopButton({isShow}: TopButtonProps) {
  // const onClick = () => {
  //   console.log('hihi')
  // }
  const scrollToTop = () => {
    
  }
  return (
    <button
      type="button"
      className={cx('top-btn')}
    
      >
        top
    </button>
  );
}

