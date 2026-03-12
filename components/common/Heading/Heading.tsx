import classNames from 'classnames/bind'
import styles from "./Heading.module.scss";

const cx = classNames.bind(styles);

interface TabButtonProps {
  title: string,
  size: string,
}

export default function TabButton({title, size}: TabButtonProps) {
  
  //[fontSize, setFontSize] = useState(size); // small, medium

  return (
    <div className={cx('heading')}>
      <h2 className={cx('heading__ttl', size)}>
        <img src="" alt="" />
        {title}
      </h2>
    </div>
  );
}

