import { Suspense } from "react";
import { unstable_cache } from "next/cache";
import classNames from "classnames/bind";
import styles from "./Projects.module.scss";
import ProjectList from "./ProjectList";
import Heading from "@/components/common/Heading/Heading";
import { supabase } from "@/lib/supabase/client";
import { getProjectList } from "@/lib/queries/project";

const cx = classNames.bind(styles);

// Supabase 응답은 next의 fetch 캐시를 타지 않으므로 직접 캐싱 (1시간마다 재검증)
const getCachedProjectList = unstable_cache(
  async () => getProjectList(supabase),
  ["project-list"],
  { revalidate: 3600 },
);

// Heading은 데이터와 무관하므로 즉시 렌더링하고, 조회가 필요한 부분만 스트리밍 대상으로 분리
export default function Projects() {
  return (
    <section id="projects" className={cx("project", "ly-main", "ly-section")}>
      <Heading
        title="프로젝트 및 사이드 프로젝트"
        size="medium"
        subTitle="PROJECT"
      />
      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsData />
      </Suspense>
    </section>
  );
}

async function ProjectsData() {
  // Server Component fetch
  const { data, error } = await getCachedProjectList();

  if (error) {
    console.error("조회 에러:", error.message);
    return <div>프로젝트를 찾을 수 없습니다</div>;
  }

  return <ProjectList initialData={data || []} />;
}

function ProjectsSkeleton() {
  return (
    <ul className={cx("project__lists")} aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i} className={cx("project__list")}>
          <div className={cx("project__skeleton")} />
        </li>
      ))}
    </ul>
  );
}
