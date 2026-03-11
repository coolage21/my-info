import { useEffect, useRef } from "react";
import classNames from 'classnames/bind'
import styles from "./Modal.module.scss";
import {User} from '@/types/user'
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
    if (open) {
      btnRef.current?.focus();
    }
  }, [open]);
   if (!open) return null;
  return (
    <div className={cx('modal__wrapper')} role="dialog" aria-modal="true">
      <div
        type="button"
        className={cx('modal')}
        >
        <p>{user.id}</p>
        <h2 id="modal-title">{user.title}</h2>
      <button ref={btnRef} onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

