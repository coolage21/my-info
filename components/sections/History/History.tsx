import classNames from 'classnames/bind'
import styles from "./History.module.scss";

const cx = classNames.bind(styles);

export default function History() {
  return (
    <section id="history" className={cx('history')}>
      <h2>history</h2>
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
