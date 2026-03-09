import classNames from 'classnames/bind'
import styles from "./Skills.module.scss";

const cx = classNames.bind(styles);

export default function Skills() {
  return (
    <section id="skills" className={cx('skills')}>
      Skills
    </section>
  );
}
