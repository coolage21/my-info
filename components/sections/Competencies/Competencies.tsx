import classNames from 'classnames/bind'
import styles from "./Competencies.module.scss";

const cx = classNames.bind(styles);

export default function Competencies() {
  return (
    <section id="competencies" className={cx('competencies')}>
      <h2></h2>
      Competencies
      <ul>
        <li>
          <h3></h3>
          <p></p>
          <p></p>
        </li>
      </ul>
    </section>
  );
}
