"use client";

import { useState, useRef } from "react";
import { User, Category } from "@/types/user";
import classNames from "classnames/bind";
import styles from "./Tabs.module.scss";
import Modal from "@/components/common/Modal/Modal";
import Card from "@/components/common/Card/Card";

const cx = classNames.bind(styles);

export default function Tabs() {
  // 카테고리
  const category: Category[] = ["project", "sideProject"];
  // 데이터
  const users: User[] = [
    {
      type: "sideProject",
      id: 2,
      title: "저작권 배움터/e배움터",
      mainDesc:
        "한국저작권위원회 교육시스템 기능 개선 사업 ui/ux개발 및 코드 개선", // 메인텍스트
      subDesc:
        "한국저작권위원회 원격교육시스템 기능개선사업의 ui 개발 및 웹접근성 인증마크 획득을 위한 코드개선",
      role: "퍼블리싱 100%  디자인 50%",
      date: "2025.04. ~ 2025.11.", //기간
      count: 5, //참여인원
      link: [
        // 링크
        { linkttl: "ttl", link: "www.naver.com" },
        { linkttl: "ttl", link: "www.naver.com" },
      ],
      image: "/images/logo.png", // 썸네일
      imageAlt: "테스트",
      tool: ["git", "scss", "postman", "sourcetree"], // 기술스택
      contList: [
        // 주요내용
        "기능 개선 페이지 퍼블리싱",
        "기존 e배움터 UI를 반영한 배움터 메인 UI 개선 및 퍼블리싱",
        "모바일 레이아웃 깨짐 이슈 수정",
        "웹접근성 진단 툴(OpenWAX)을 활용한 점검 및 마크업 개선",
      ],
      strength: ["웹접근성 인증마크 갱신 대응 경험"], //역량
    },
    {
      type: "project",
      id: 1,
      title: "저작권 배움터/e배움터",
      mainDesc:
        "한국저작권위원회 교육시스템 기능 개선 사업 ui/ux개발 및 코드 개선", // 메인텍스트
      subDesc:
        "한국저작권위원회 원격교육시스템 기능개선사업의 ui 개발 및 웹접근성 인증마크 획득을 위한 코드개선",
      role: "퍼블리싱 100%  디자인 50%",
      date: "2025.04. ~ 2025.11.", //기간
      count: 5, //참여인원
      link: [
        // 링크
        { linkttl: "ttl", link: "www.naver.com" },
        { linkttl: "ttl", link: "www.naver.com" },
      ],
      image: "@/images/file.svg", // 썸네일
      imageAlt: "테스트",
      tool: ["git", "scss", "postman", "sourcetree"], // 기술스택
      contList: [
        // 주요내용
        "기능 개선 페이지 퍼블리싱",
        "기존 e배움터 UI를 반영한 배움터 메인 UI 개선 및 퍼블리싱",
        "모바일 레이아웃 깨짐 이슈 수정",
        "웹접근성 진단 툴(OpenWAX)을 활용한 점검 및 마크업 개선",
      ],
      strength: ["웹접근성 인증마크 갱신 대응 경험"], //역량
    },
  ];
  // 현재 체크된 카테고리(클릭시 변경됨으로 useState)
  const [checkedCategory, setCheckedCategory] = useState("all");
  // 보이는 리스트(카테고리 기준으로(이미 있는 state) 계산되는 값이라 useState적용 필요 없음)
  const list =
    checkedCategory == "all"
      ? users
      : users.filter((item) => item.type == checkedCategory);

  // 카테고리 클릭 이벤트
  const changeCategory = (item: string) => {
    setCheckedCategory(item);
  };
  //클릭된 리스트
  const [selectedContent, setSelectedContent] = useState<User | null>(null);
  // 모달 열고 닫힘 처리
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState();
  // 리스트 클릭 이벤트
  const findContent = (item: number) => {
    const data = users.find((users) => users.id == item);
    if (data) {
      setCurrentId(data.id);
      setShowModal(true);
      setSelectedContent(data);
    }
  };
  const listBtnRef = useRef<HTMLInputElement>(null);
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
          className={cx("tab__btn")}
        >
          전체
        </button>
        {category.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => changeCategory(category)}
            aria-pressed={checkedCategory === category}
            className={cx("tab__btn")}
          >
            {category}
          </button>
        ))}
      </div>
      <ul className={cx("cards")}>
        {list.map((data) => (
          <li className={cx("card")} key={data.id}>
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
        <Modal open={showModal} user={selectedContent} onClose={handleClose} />
      )}
    </div>
  );
}
