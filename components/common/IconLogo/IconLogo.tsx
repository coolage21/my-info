import classNames from "classnames/bind";
import styles from "./IconLogo.module.scss";

const cx = classNames.bind(styles);

interface IconLogoProps {
  label: string;
  size: "small" | "large";
  onClick?: () => void;
}

export default function IconLogo({ label, size, onClick }: IconLogoProps) {
  return (
    <button
      type="button"
      className={cx("btn", `btn--${size}`)}
      onClick={onClick}
    >
      <p>{label}</p>
    </button>
  );
}
