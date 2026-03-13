import classNames from 'classnames/bind'
import styles from "./Competencies.module.scss";
import Heading from '@/components/common/Heading/Heading'

const cx = classNames.bind(styles);

export default function Competencies() {
  return (
    <section id="competencies" className={cx('competencies', 'ly-main', 'ly-section')}>
      <Heading title="Competencies" size="medium"/>
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
