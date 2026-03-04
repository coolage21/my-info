import classNames from 'classnames/bind'
import styles from "./Modal.module.scss";
import {User} from '@/types/user'
const cx = classNames.bind(styles);

interface ModalProps {
  user: Pick<User, "id" | "title">; // 특정항목만 불러오기
  // user: Omit<User, "email">; // 특정항목만 빼기
  // user: Partial<User>; // 전부 선택적
  onClose: () => void;
}

export default function Modal({user, onClose}: ModalProps) {

  return (
    <div className={cx('ttl', 'ttl-1')}>
      <button
        type="button"
        className={cx('btn', `btn--`)}
        >
        <p>{user.id}</p>
        <p>{user.title}</p>
      </button>
      <button onClick={onClose}>닫기</button>
    </div>
  );
}

