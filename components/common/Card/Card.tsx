import classNames from 'classnames/bind'
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

interface CardProps {
  size: string;
  img: string;
  title: string;
  desc: string;
  badge: string;
  onClick?: () => void;
}

export default function Card({img, title, desc, badge, size}: CardProps) {
  return (
    <div className={size}>
      {
        img && (
          <div>
            <img src={img} alt=""></img>
          </div>
        )
      }
      {
        title && (
          <p className="">{title}</p>
        )
      }
      {
        desc && (
          <p className="">{desc}</p>
        )
      }
      {
        badge && (
          <p className="">{badge}</p>
        )
      }
    </div>
  )
}