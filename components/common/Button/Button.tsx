import classNames from 'classnames/bind'
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

interface ButtonProps {
  label: string;
  size: "small" | "large";
  onClick?: () => void;
}

export default function Button({label, size, onClick}: ButtonProps) {
  return (
    <button
      type="button"
      className={cx('btn', `btn--${size}`)}
      onClick={onClick}
      >
      <p>{label}</p>
    </button>
  );
}

