import classNames from "classnames/bind";
import styles from "./Card.module.scss";

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
    <div className={size}>
      {img && (
        <div>
          <img src={img} alt={imgAlt}></img>
        </div>
      )}
      {title && <p className="">{title}</p>}
      {desc && <p className="">{desc}</p>}
      {role && <p className="">{role}</p>}
      {/* {badge && <p className="">{badge}</p>} */}
    </div>
  );
}
