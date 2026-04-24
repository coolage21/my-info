import classNames from "classnames/bind";
import styles from "./Projects.module.scss";
import Tabs from "./ProjectsTabs/Tabs";
import Heading from "@/components/common/Heading/Heading";
import { Project } from "@/types/project";

const cx = classNames.bind(styles);

export default async function Projects() {
  const res = await fetch(`https://hahye.com/api/projects`);
  const data: Project[] = await res.json(); 
  return (
    <section id="projects" className={cx("projects", "ly-main", "ly-section")}>
      <Heading title="대표 프로젝트" size="medium" />
      <Tabs initialData={data} />
    </section>
  );
}
