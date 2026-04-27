"use client";
import classNames from "classnames/bind";
import { useState, useRef } from "react";
import styles from "./Form.module.scss";
import { ToastContainer, toast } from "react-toastify";
const cx = classNames.bind(styles);

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name) {
      //btnRef.current?.focus(); 존재하면 실행 없으면 무시
      setError("이름을 입력해주세요.");
      nameRef.current?.focus();
      return;
    }
    if (!email) {
      setError("이메일을 입력해주세요.");
      emailRef.current?.focus();
      return;
    }
    if (!message) {
      setError("내용을 입력해주세요.");
      messageRef.current?.focus();
      return;
    }

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      if (res.ok) {
        toast("메세지가 전송되었습니다. 확인 후 바로 회신드리겠습니다.");
      } else {
        alert("전송 실패! 다시 시도해주세요.");
      }
    } catch (err) {
      console.log(err);
      alert("네트워크 오류");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={cx("form")}>
        <p className={cx("form__item")}>
          <label htmlFor="name" className={cx("form__label")}>
            이름<span className={cx("c-red")}>*</span>
          </label>
          <input
            ref={nameRef}
            className={cx("form__input")}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해주세요"
          />
        </p>
        <p className={cx("form__item")}>
          <label htmlFor="email" className={cx("form__label")}>
            이메일<span className={cx("c-red")}>*</span>
          </label>
          <input
            ref={emailRef}
            className={cx("form__input")}
            id="email"
            value={email}
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요"
          />
        </p>
        <p className={cx("form__item")}>
          <label htmlFor="message" className={cx("form__label")}>
            내용<span className={cx("c-red")}>*</span>
          </label>
          <textarea
            ref={messageRef}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="내용을 입력해주세요"
            rows={5}
          />
        </p>
        {error && <p className={cx("error-txt")}>{error}</p>}
        <button type="submit" className={cx("form__submit")}>
          메세지 보내기
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
