import classNames from "classnames/bind";
import styles from "./IconLogo.module.scss";
import Image from "next/image";

const cx = classNames.bind(styles);

type IconLogoProps {
  img: string;
  imgAlt?: string;
  size?: "small" | "large" | "medium";
  desc?: string;
}

export default function IconLogo({ size = "medium", imgAlt, img, desc }: IconLogoProps) {
  return (
    <span
      className={cx("icon", `icon--${size}`)}
    >
      <Image src={img} alt={imgAlt} width={size == "medium" ? 30 : 10}/>
    </span>
  );
}
