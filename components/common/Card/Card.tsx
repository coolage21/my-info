import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import Image from 'next/image'
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
    <div className={cx('card', `card--${size}`)}>
      {img && (
        <div className={cx("card__img-wrapper")}>
          <Image src={img} ale={imgAlt} width={134} height={140} />
        </div>
      )}
      {title && <p  className={cx("card__ttl")}>{title}</p>}
      {desc && <p  className={cx("card__desc")}>{desc}</p>}
      {role && <p  className={cx("card__role")}>{role}</p>}
      {/* {badge && <p className="">{badge}</p>} */}
    </div>
  );
}
