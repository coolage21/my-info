import classNames from 'classnames/bind'
import styles from "./TabPanel.module.scss";

const cx = classNames.bind(styles);

export default function TabPanel() {
  return (
    <div>
      <ul>
        <li>
          <button>
            TabPanel
          </button>
        </li>
        <li>
          <button>
            TabPanel2
          </button>
        </li>
        <li>
          <button>
            TabPanel3
          </button>
        </li>
      </ul>
    </div>
  );
}