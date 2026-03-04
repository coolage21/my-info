import classNames from 'classnames/bind'
import styles from "./Projects.module.scss";
import Tabs from "./ProjectsTabs/Tabs";

const cx = classNames.bind(styles);

export default function Projects() {
  return (
    <div>
      Projects
      <Tabs/>
    </div>
  );
}