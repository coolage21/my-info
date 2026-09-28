import classNames from "classnames/bind";
import styles from "./Heading.module.scss";
import Image from "next/image";

const cx = classNames.bind(styles);

interface TabButtonProps {
  title: string;
  size?: string;
  subTitle?: string;
  position?: string;
}

export default function TabButton({
  title,
  size,
  subTitle,
  position,
}: TabButtonProps) {
  //[fontSize, setFontSize] = useState(size); // small, medium

  return (
    <div className={cx("heading", `heading__ttl--${position}`)}>
      <em className={cx("heading__badge")}>{subTitle}</em>
      <h2 className={cx("heading__ttl", `heading__ttl--${size}`)}>
        {/* <span className={cx("heading__img")}>
          <img src="/images/icon_logo.png" alt="" />
        </span> */}
        {title}
      </h2>
    </div>
  );
}
