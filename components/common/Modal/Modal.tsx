import { useEffect, useRef } from "react";
import classNames from 'classnames/bind'
import styles from "./Modal.module.scss";
import {User} from '@/types/user'
import FocusTrap from "focus-trap-react";

const cx = classNames.bind(styles);

interface ModalProps {
  open: boolean;
  user: Pick<User, "id" | "title">; // 특정항목만 불러오기
  // user: Omit<User, "email">; // 특정항목만 빼기
  // user: Partial<User>; // 전부 선택적
  onClose: () => void;
}

export default function Modal({user, onClose}: ModalProps) {
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
    <div className={cx('modal__wrapper')} role="dialog" aria-modal="true">
      <FocusTrap>
      <div
        className={cx('modal')}
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        >
        <p>{user.id}</p>
        <h2 id="modal-title">{user.title}</h2>
        <p id="modal-desc"></p>
      <button ref={btnRef} onClick={onClose}>닫기</button>
      </div>
      </FocusTrap>
    </div>
  );
}

