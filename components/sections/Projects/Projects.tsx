import { unstable_cache } from "next/cache";
import classNames from "classnames/bind";
import styles from "./Projects.module.scss";
import ProjectList from "./ProjectList";
import Heading from "@/components/common/Heading/Heading";
import { Project } from "@/types/project";
import { supabase } from "@/lib/supabase/client";
import { getProjectList } from "@/lib/queries/project";

const cx = classNames.bind(styles);

// Supabase 응답은 next의 fetch 캐시를 타지 않으므로 직접 캐싱 (1시간마다 재검증)
const getCachedProjectList = unstable_cache(
  async () => getProjectList(supabase),
  ["project-list"],
  { revalidate: 3600 },
);

export default async function Test() {
  // Server Component fetch
  const { data: data, error } = await getCachedProjectList();

  if (error) {
    console.error("조회 에러:", error.message);
    return (
      <div>
        프로젝트를 찾을 수 없습니다<div className=""></div>
      </div>
    );
  }

  return (
    <section id="projects" className={cx("project", "ly-main", "ly-section")}>
      <Heading
        title="프로젝트 및 사이드 프로젝트"
        size="medium"
        subTitle="PROJECT"
      />
      <ProjectList initialData={data || []} />
    </section>
  );
}
