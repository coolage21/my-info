import classNames from 'classnames/bind'
import styles from "./Projects.module.scss";
import Tabs from "./ProjectsTabs/Tabs";
import Heading from '@/components/common/Heading/Heading'
const cx = classNames.bind(styles);

export default function Projects() {
  return (
    <section id="projects" className={cx('projects')}>
      <Heading title="Projects" size="medium"/>
      <Tabs/>
    </section>
  );
}