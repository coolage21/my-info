"use client";

import { useState, useRef, useEffect } from "react";
import { Category, Project } from "@/types/project";
import classNames from "classnames/bind";
import styles from "./ProjectList.module.scss";
import Modal from "@/components/common/Modal/Modal";
import Card from "@/components/common/Card/Card";

const cx = classNames.bind(styles);

// 리스트 형태면 뒤에 [] 추가
interface TabProps {
  initialData: Project[];
}

export default function Tabs({ initialData }: TabProps) {
  // 현재 체크된 카테고리(클릭 시 변경됨으로 useState)
  const [checkedCategory, setCheckedCategory] = useState("all");

  // 계산된 값(curProjects)
  const curProjects =
    checkedCategory == "all"
      ? initialData
      : initialData.filter((item: Project) => item.type == checkedCategory);

  // 카테고리
  const category: Category[] = ["project", "sideProject"];

  // 모달에 넘겨줄 id 값
  const [currentId, setCurrentId] = useState<number | null>(null);

  const listBtnRef = useRef<HTMLButtonElement>(null);
  const handleClose = () => {
    setCurrentId(null);
    listBtnRef.current?.focus(); // 웹접근성 포커스
  };
  return (
    <div>
      <div role="group" aria-label="카테고리 필터" className={cx("tab__btns")}>
        <button
          type="button"
          onClick={() => setCheckedCategory("all")}
          aria-pressed={checkedCategory == "all"}
          className={cx("tab__btn", { active: checkedCategory === "all" })}
        >
          전체
        </button>
        {category.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setCheckedCategory(category)}
            aria-pressed={checkedCategory === category}
            className={cx("tab__btn", { active: checkedCategory === category })}
          >
            {category == "project" ? "프로젝트" : "사이드 프로젝트"}
          </button>
        ))}
      </div>
      {/* {isPending &&  <div>로딩중...
        </div>} */}
      <ul className={cx("project__lists")}>
        {curProjects.map((data: Project) => (
          <li className={cx("project__list")} key={data.id}>
            <button
              ref={data.id === currentId ? listBtnRef : null}
              type="button"
              onClick={() => setCurrentId(data.id)}
            >
              <Card
                title={data.title}
                size="large"
                img={data.image}
                imgAlt={data.image_alt}
                role={data.role}
                desc={data.main_desc}
                badge=""
              />
            </button>
          </li>
        ))}
      </ul>
      <div></div>
      {currentId && <Modal projectId={currentId} onClose={handleClose} />}
    </div>
  );
}
