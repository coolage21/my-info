import classNames from 'classnames/bind'
import styles from "./TabButton.module.scss";

const cx = classNames.bind(styles);

export default function TabButton() {
  return (
    <div>
      <button>tab1</button>
      <button>tab2</button>
      <button>tab3</button>
    </div>
  );
}