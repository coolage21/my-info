import classNames from "classnames/bind";
import styles from "./Heading.module.scss";
import Image from "next/image";

const cx = classNames.bind(styles);

interface TabButtonProps {
  title: string;
  size: string;
}

export default function TabButton({ title, size }: TabButtonProps) {
  //[fontSize, setFontSize] = useState(size); // small, medium

  return (
    <div className={cx("heading")}>
      <h2 className={cx("heading__ttl", `heading__ttl--${size}`)}>
        <div className={cx("heading__img")}>
          <img src="/images/icon_logo.png" alt="" />
        </div>
        {title}
      </h2>
    </div>
  );
}
