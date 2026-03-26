import classNames from 'classnames/bind'
import styles from "./IconButton.module.scss";

const cx = classNames.bind(styles);

interface IconButtonProps {
  label: string;
  size: "small" | "large";
  onClick?: () => void;
}

export default function IconButton({label, size, onClick}: IconButtonProps) {
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

