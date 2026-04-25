"use client";
import { useEffect, useRef, useState } from "react"; // useState 추가
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { Project } from "@/types/project";
import FocusTrap from "focus-trap-react";
import Image from "next/image";
import IconLogo from "@/components/common/IconLogo/IconLogo";
import { supabase } from "@/lib/supabase/client";

const cx = classNames.bind(styles);

interface ModalProps {
  projectId: number;
  onClose: () => void;
}

// 1. async 제거
export default function Modal({ projectId, onClose }: ModalProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  // 2. 데이터와 로딩 상태 관리
  const [data, setData] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 3. 데이터 호출 로직을 useEffect 안으로 이동
  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      const { data: project, error } = await supabase
        .from("project")
        .select<"*", Project>("*")
        .eq("id", projectId)
        .single();

      if (error) {
        console.error("조회 에러:", error.message);
      } else {
        setData(project);
      }
      setIsLoading(false);
    };

    fetchProject();
  }, [projectId]);

  // ESC 키로 닫기 로직
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // 로딩 중일 때 표시 (선택 사항)
  if (isLoading) return <div className={cx("modal__wrapper")}>Loading...</div>;
  if (!data) return null;

  return (
    <div className={cx("modal__wrapper")} role="dialog" aria-modal="true">
      <FocusTrap>
        <div
          className={cx("modal")}
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
        >
          <div className={cx("modal__inner")}>
            <h2 id="modal-title" className={cx("modal__ttl")}>
              <span className={cx("modal__logo")}>
                <img src="/images/icon_logo.png" alt="" />
              </span>
              {data.title}
            </h2>

            <div id="modal-desc" className={cx("modal__desc")}>
              {/* dangerouslySetInnerHTML 사용 시 데이터 유무 확인 필수 */}
              <div dangerouslySetInnerHTML={{ __html: data.sub_desc || "" }} />
            </div>

            <div className={cx("modal__cont")}>
              <h3 className={cx("modal__sub-ttl")}>기술 스택</h3>
              <div className={cx("modal__skill")}>
                {data.tool?.map((tool, index) => (
                  <IconLogo
                    key={index}
                    img={`/images/icons/icon_${tool}.png`}
                    imgAlt={tool}
                    width={17}
                    height={18}
                    size={"small"}
                  />
                ))}
              </div>
            </div>

            {/* ... 나머지 JSX (data.count, data.date 등)는 기존과 동일하게 유지 ... */}
            <div className={cx("modal__conts")}>
              <div className={cx("modal__cont")}>
                <h3 className={cx("modal__sub-ttl")}>참여인원</h3>
                <p className={cx("modal__date")}>{data.count}명</p>
              </div>
              <div className={cx("modal__cont")}>
                <h3 className={cx("modal__sub-ttl")}>기간</h3>
                <p className={cx("modal__date")}>{data.date}</p>
              </div>
            </div>
            {data.link && data.link.length > 0 && (
              <div className={cx("modal__cont")}>
                <h3 className={cx("modal__sub-ttl")}>링크</h3>
                {/* <p id="modal-desc">{data.link}</p> */}
                <div className={cx("modal__links")}>
                  {data.link.map((link, index) => (
                    <a
                      key={index}
                      className={cx("modal__link")}
                      target="_blank"
                      href={link.link}
                    >
                      {link.linkttl}
                    </a>
                  ))}
                </div>
              </div>
            )}
            <hr />
            <div>
              {/* <p id="modal-desc">{project.contList}</p>
          <p id="modal-desc">{project.strength}</p> */}
              <div className={cx("modal__cont")}>
                <h3 className={cx("modal__sub-ttl")}>주요 내용</h3>
                <ul className={cx("modal__main-cont")}>
                  {data.cont_list.map((contList, index) => (
                    <li key={index}>{contList}</li>
                  ))}
                </ul>
              </div>
              {/* 이미지 리스트 맵핑 부분 */}
              <div className={cx("modal__img-wrapper")}>
                {data.image_list?.map((img, index) => (
                  <img key={index} src={img} alt={data.image_alt} />
                ))}
              </div>
            </div>
          </div>
          <button ref={btnRef} onClick={onClose} className={cx("close-btn")}>
            <Image
              src="/images/icons/icon_close.png"
              alt="닫기"
              width={80}
              height={40}
            />
            <span className={cx("sc-only")}>닫기</span>
          </button>
        </div>
      </FocusTrap>
    </div>
  );
}
