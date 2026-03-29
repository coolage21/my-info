import { useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { User } from "@/types/user";
import FocusTrap from "focus-trap-react";
import Image from "next/image";

const cx = classNames.bind(styles);

interface ModalProps {
  open: boolean;
  user: Pick<
    User,
    | "title"
    | "subDesc"
    | "date"
    | "count"
    | "link"
    | "tool"
    | "contList"
    | "strength"
  >; // 특정항목만 불러오기
  // user: Omit<User, "email">; // 특정항목만 빼기
  // user: Partial<User>; // 전부 선택적
  onClose: () => void;
}

export default function Modal({ user, onClose }: ModalProps) {
  const btnRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return null;
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
              <img src="/images/icon_logo.png" alt="" />
              {user.title}
            </h2>
            <p id="modal-desc" className={cx("modal__desc")}>
              <div dangerouslySetInnerHTML={{ __html: user.subDesc }} />
            </p>
            <div className={cx("modal__cont")}>
              <h3 className={cx("modal__sub-ttl")}>기술 스택</h3>
              <div className={cx("modal__skill")}>
                {user.tool.map((tool) => (
                  <p>{tool}</p>
                ))}
              </div>
            </div>
            <div className={cx("modal__conts")}>
              <div className={cx("modal__cont")}>
                <h3 className={cx("modal__sub-ttl")}>참여인원</h3>
                <p className={cx("modal__date")}>{user.count}</p>
              </div>
              <div className={cx("modal__cont")}>
                <h3 className={cx("modal__sub-ttl")}>기간</h3>
                <p className={cx("modal__date")}>{user.date}</p>
              </div>
            </div>
            <div className={cx("modal__cont")}>
              <h3 className={cx("modal__sub-ttl")}>링크</h3>
              {/* <p id="modal-desc">{user.link}</p> */}
              <div className={cx("modal__links")}>
                {user.link.map((link) => (
                  <a
                    className={cx("modal__link")}
                    target="_blank"
                    href={link.link}
                  >
                    {link.linkttl}
                  </a>
                ))}
              </div>
            </div>
            <hr />
            <div>
              {/* <p id="modal-desc">{user.contList}</p>
          <p id="modal-desc">{user.strength}</p> */}
              <div className={cx("modal__cont")}>
                <h3 className={cx("modal__sub-ttl")}>주요 내용</h3>
                <ul className={cx("modal__main-cont")}>
                  {user.contList.map((contList) => (
                    <li>{contList}</li>
                  ))}
                </ul>
              </div>
              {/* <div className={cx("modal__cont")}>
                <h3 className={cx("modal__sub-ttl")}>역량</h3>
                <ul>
                  {user.strength.map((strength) => (
                    <li>{strength}</li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
          <button ref={btnRef} onClick={onClose} className={cx("close-btn")}>
            <Image
              src="/images/icon_close.png"
              srcAlt=""
              width={30}
              height={30}
            ></Image>
            <span className={cx("sc-only")}>닫기</span>
          </button>
        </div>
      </FocusTrap>
    </div>
  );
}
