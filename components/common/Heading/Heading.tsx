import classNames from 'classnames/bind'
import styles from "./TabButton.module.scss";

const cx = classNames.bind(styles);

interface TabButtonProps {
  title: string,
  desc: string,
}

export default function TabButton({title, desc}: TabButtonProps) {

  return (
    <div className={cx('heading')}>
      <h2 className={cx('heading__ttl')}>{title}</h2>
      <p className={cx('heading__desc')}>{desc}</p>
    </div>
  );
}

