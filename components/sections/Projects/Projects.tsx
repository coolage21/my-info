import classNames from 'classnames/bind'
import styles from "./Projects.module.scss";
import Tabs from "./ProjectsTabs/Tabs";

const cx = classNames.bind(styles);

export default function Projects() {
  return (
    <section id="projects" className={cx('projects')}>
      Projects
      <Tabs/>
    </section>
  );
}