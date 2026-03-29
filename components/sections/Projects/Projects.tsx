import classNames from "classnames/bind";
import styles from "./Projects.module.scss";
import Tabs from "./ProjectsTabs/Tabs";
import Heading from "@/components/common/Heading/Heading";
const cx = classNames.bind(styles);

export default function Projects() {
  return (
    <section id="projects" className={cx("projects", "ly-main", "ly-section")}>
      <Heading title="대표 프로젝트" size="medium" />
      <Tabs />
    </section>
  );
}
