"use client";
import { useEffect, useRef, useState } from "react"; // useState 추가
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { Project } from "@/types/project";
import FocusTrap from "focus-trap-react"; // 웹접근성 포커스 고정
import Image from "next/image";
import IconLogo from "@/components/common/IconLogo/IconLogo";
import { supabase } from "@/lib/supabase/client";
import { getProjectById } from "@/lib/queries/project";
const cx = classNames.bind(styles);

interface ModalProps {
  projectId: number;
  onClose: () => void;
}

export default function Modal({ projectId, onClose }: ModalProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const [data, setData] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      const { data, error } = await getProjectById(supabase, projectId);

      if (error) {
        console.error("조회 에러:", error.message);
      } else {
        setData(data);
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

  // 로딩 중일 때
  if (isLoading)
    return (
      <div className={cx("skeleton")}>
        <div className={cx("modal", "skeleton")}>
          <div className={cx("modal__inner")}>
            {/* 제목 */}
            <div className={cx("modal__ttl")}></div>
            {/* 내용 */}
            <div className={cx("modal__desc")}></div>
            {/* 스킬 */}
            <div className={cx("modal__cont")}>
              <div className={cx("modal__sub-ttl")}></div>
              <div className={cx("modal__skill")}></div>
            </div>
            {/* 참여인원 */}
            <div className={cx("modal__conts")}>
              <div className={cx("modal__cont")}>
                <div className={cx("modal__sub-ttl")}></div>
                <p className={cx("modal__date")}></p>
              </div>
              {/* 기간 */}
              <div className={cx("modal__cont")}>
                <div className={cx("modal__sub-ttl")}></div>
                <p className={cx("modal__date")}></p>
              </div>
            </div>
            {/* 링크 */}
            <div className={cx("modal__cont")}>
              <div className={cx("modal__sub-ttl")}></div>
              <div className={cx("modal__links")}></div>
            </div>

            <hr />
            {/* 주요내용 */}
            <div>
              <div className={cx("modal__cont")}>
                <div className={cx("modal__sub-ttl")}>주요 내용</div>
                <div className={cx("modal__main-cont")}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              {/* 이미지 */}
              <div className={cx("modal__img-wrapper")}></div>
            </div>
          </div>
        </div>
      </div>
    );
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
