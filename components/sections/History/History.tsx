import classNames from 'classnames/bind'
import styles from "./History.module.scss";
import Heading from '@/components/common/Heading/Heading'

const cx = classNames.bind(styles);

export default function History() {
  return (
    <section id="history" className={cx('history', 'ly-main', 'ly-section')} >
      <Heading title="history" size="medium"/>
      <div>
          <h3></h3>
          <ul>
            <li></li>
          </ul>
        </div>
        <div>
          <h3></h3>
        <ul>
          <li></li>
        </ul>
      </div>
    </section>
  );
}