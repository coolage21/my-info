import { useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { Project } from "@/types/project";
import FocusTrap from "focus-trap-react";
import Image from "next/image";
import IconLogo from "@/components/common/IconLogo/IconLogo";

const cx = classNames.bind(styles);

interface ModalProps {
  open: boolean;
  project: Pick<
    Project,
    | "title"
    | "subDesc"
    | "date"
    | "count"
    | "link"
    | "tool"
    | "contList"
    | "strength"
    | "imageList"
    | "imageAlt"
  >; // 특정항목만 불러오기
  // project: Omit<Project, "email">; // 특정항목만 빼기
  // project: Partial<Project>; // 전부 선택적
  onClose: () => void;
}

export default function Modal({ open, project, onClose }: ModalProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    if (open) {
      btnRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [open, onClose]);

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
              {" "}
                <span className={cx("modal__logo")}>
                  <img src="/images/icon_logo.png" alt="" />
                </span>
              {project.title}
            </h2>
            <p id="modal-desc" className={cx("modal__desc")}>
              <div dangerouslySetInnerHTML={{ __html: project.subDesc }} />
            </p>
            <div className={cx("modal__cont")}>
              <h3 className={cx("modal__sub-ttl")}>기술 스택</h3>
              <div className={cx("modal__skill")}>
                {project.tool.map((tool, index) => (
                  <IconLogo
                    key={index}
                    img={`/images/icons/icon_${tool}.png`}
                    imgAlt={"HTML"}
                    width={17}
                    height={18}
                    size={"small"}
                  />
                ))}
              </div>
            </div>
            <div className={cx("modal__conts")}>
              <div className={cx("modal__cont")}>
                <h3 className={cx("modal__sub-ttl")}>참여인원</h3>
                <p className={cx("modal__date")}>{project.count}명</p>
              </div>
              <div className={cx("modal__cont")}>
                <h3 className={cx("modal__sub-ttl")}>기간</h3>
                <p className={cx("modal__date")}>{project.date}</p>
              </div>
            </div>
            {project.link && project.link.length > 0 && (
              <div className={cx("modal__cont")}>
                <h3 className={cx("modal__sub-ttl")}>링크</h3>
                {/* <p id="modal-desc">{project.link}</p> */}
                <div className={cx("modal__links")}>
                  {project.link.map((link, index) => (
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
                  {project.contList.map((contList, index) => (
                    <li key={index}>{contList}</li>
                  ))}
                </ul>
              </div>
              {/* <div className={cx("modal__cont")}>
                <h3 className={cx("modal__sub-ttl")}>역량</h3>
                <ul>
                  {project.strength.map((strength) => (
                    <li>{strength}</li>
                  ))}
                </ul>
              </div> */}
              <div className={cx("modal__img-wrapper")}>
                {project.imageList.map((imageList, index) => (
                  <img key={index} src={imageList} alt={project.imageAlt} />
                ))}
              </div>
            </div>
          </div>
          <button ref={btnRef} onClick={onClose} className={cx("close-btn")}>
            <Image
              src="/images/icons/icon_close.png"
              alt=""
              width={80}
              height={40}
            ></Image>
            <span className={cx("sc-only")}>닫기</span>
          </button>
        </div>
      </FocusTrap>
    </div>
  );
}
