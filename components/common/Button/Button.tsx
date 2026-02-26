import styles from "./Button.module.scss";

interface ButtonProps {
  label: string;
  size: "small" | "large";
  onClick?: () => void;
}

export default function Button({label, size, onClick}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[size]}`}
      onClick={onClick}
      >
      <p>{label}</p>
    </button>
  );
}

