"use client";

import { useState, useRef, useEffect } from "react";
import { Category, Project } from "@/types/project";
import classNames from "classnames/bind";
import styles from "./Tabs.module.scss";
import Modal from "@/components/common/Modal/Modal";
import Card from "@/components/common/Card/Card";
import { useQuery } from '@tanstack/react-query'

const cx = classNames.bind(styles);

export default function Tabs() {
  
  const fetchData = async () => {
  const res = await fetch("/api/projects");
  return res.json();
};
  const {data:projectData=[], isPending, isError, refetch} = useQuery({ queryKey: ['projectData'], queryFn: fetchData })

  // 현재 체크된 카테고리(클릭시 변경됨으로 useState)
  const [checkedCategory, setCheckedCategory] = useState("all");

  const curProjects: Project = 
      checkedCategory == "all"
        ? projectData
        : projectData.filter((item:Project) => item.type == checkedCategory)

  // 카테고리
  const category: Category[] = ["project", "sideProject"];

  // 카테고리 클릭 이벤트
  const changeCategory = (item: string) => {
    setCheckedCategory(item);
  };
  
  // 클릭된 리스트
  const [selectedContent, setSelectedContent] = useState<Project | null>(null);
  
  // 모달 열고 닫힘 처리
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState<number>();
  
  // 리스트 클릭 이벤트
  const findContent = (item: number) => {
    const data = curProjects.find((projects:Project) => projects.id == item);
    if (data) {
      setCurrentId(data.id);
      setShowModal(true);
      setSelectedContent(data);
    }
  };

  const listBtnRef = useRef<HTMLButtonElement>(null);
  const handleClose = () => {
    setShowModal(false);
    setSelectedContent(null);
    listBtnRef.current?.focus();
  };
  return (
    <div>
      <div role="group" aria-label="카테고리 필터" className={cx("tab__btns")}>
        <button
          type="button"
          onClick={() => changeCategory("all")}
          aria-pressed={checkedCategory == "all"}
          className={cx("tab__btn", {active: checkedCategory === "all",})}
        >
          전체
        </button>
        {category.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => changeCategory(category)}
            aria-pressed={checkedCategory === category}
            className={cx("tab__btn", {active: checkedCategory === category,})}
          >
            {category == "project" ? "프로젝트" : "사이드 프로젝트"}
          </button>
        ))}
      </div>
      {isPending &&  <div>로딩중...
        {/* 스켈레톤 이미지 작업 필요 */}
        </div>}
      <ul className={cx("project__lists")}>
        {curProjects.map((data) => (
          <li className={cx("project__list")} key={data.id}>
            <button
              ref={data.id === currentId ? listBtnRef : null}
              type="button"
              onClick={() => findContent(data.id)}
            >
              <Card
                title={data.title}
                size="large"
                img={data.image}
                imgAlt={data.imageAlt}
                role={data.role}
                desc={data.mainDesc}
                badge=""
              />
            </button>
          </li>
        ))}
      </ul>
      <div></div>
      {showModal && selectedContent && (
        <Modal open={showModal} project={selectedContent} onClose={handleClose} />
      )}
    </div>
  );
}
