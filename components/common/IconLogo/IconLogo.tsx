import classNames from "classnames/bind";
import styles from "./IconLogo.module.scss";
import Image from "next/image";

const cx = classNames.bind(styles);

type IconLogoProps = {
  img: string;
  imgAlt?: string;
  size?: "small" | "large" | "medium";
  fill?: boolean;
  desc?: string;
  width: number;
  height: number;
};

export default function IconLogo({
  size = "medium",
  imgAlt = "",
  img,
  width,
  height,
  fill = false,
  desc,
}: IconLogoProps) {
  return (
    <span className={cx("icon", `icon--${size}`, `${fill == true ? "icon--fill" : ""}`)}>
      <Image src={img} alt={imgAlt} width={width} height={height} 
        style={{
        height: "auto",
      }}
      />
    </span>
  );
}
