import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

interface ButtonProps {
  label: string;
  size: "small" | "large";
  color?: "main" | "orange";
  onClick?: () => void;
}

export default function Button({ label, size, onClick, color }: ButtonProps) {
  return (
    <button
      type="button"
      className={cx("btn", `btn--${size}`, `btn--${color}`)}
      onClick={onClick}
    >
      <p>{label}</p>
    </button>
  );
}
