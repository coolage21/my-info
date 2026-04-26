import classNames from "classnames/bind";
import styles from "./Projects.module.scss";
import ProjectList from "./ProjectList";
import Heading from "@/components/common/Heading/Heading";
import { Project } from "@/types/project";
import { supabase } from "@/lib/supabase/client";
import { getProjectList } from "@/lib/queries/project";

const cx = classNames.bind(styles);

export default async function Test() {
  // Server Component fetch
  const { data: data, error } = await getProjectList(supabase);

  if (error) {
    console.error("조회 에러:", error.message);
    return (
      <div>
        프로젝트를 찾을 수 없습니다<div className=""></div>
      </div>
    );
  }

  return (
    <section id="projects" className={cx("projects", "ly-main", "ly-section")}>
      <Heading title="대표 프로젝트" size="medium" />
      <ProjectList initialData={data || []} />
    </section>
  );
}
