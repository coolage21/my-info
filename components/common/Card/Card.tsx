import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import Image from "next/image";
const cx = classNames.bind(styles);

interface CardProps {
  title: string;
  size: string;
  img: string;
  imgAlt: string;
  role: string;
  desc: string;
  badge: string;
  onClick?: () => void;
}

export default function Card({
  img,
  title,
  desc,
  badge,
  size,
  role,
  imgAlt,
}: CardProps) {
  return (
    <span className={cx("card", `card--${size}`)}>
      {img && (
        <span className={cx("card__img-wrapper")}>
          <Image src={img} alt={imgAlt} width={351} height={200} quality={100}/>
        </span>
      )}
      {title && <span className={cx("card__ttl")}>{title}</span>}
      {desc && <span className={cx("card__desc")}>{desc}</span>}
      {role && <span className={cx("card__role")}>{role}</span>}
      {/* {badge && <p className="">{badge}</p>} */}
    </span>
  );
}
