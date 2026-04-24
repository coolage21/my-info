"use client";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Form.module.scss";
const cx = classNames.bind(styles);

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await fetch("/api/email", {
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
    alert("전송 완료!");
  }

  return (
    <form onSubmit={handleSubmit} className={cx('form')}>
      <p className={cx('form__item')}>
        <label htmlFor="name" className={cx('form__label')}>이름</label>
        <input
          className={cx('form__input')}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력해주세요"
        />
      </p>
      <p className={cx('form__item')}>
        <label htmlFor="email" className={cx('form__label')}>이메일</label>
        <input
          className={cx('form__input')}
          id="email"
          value={email}
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요"
        />
      </p>
      <p className={cx('form__item')}>
        <label htmlFor="message" className={cx('form__label')}>내용</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="내용을 입력해주세요"
          rows={5}
        />
      </p>
      <button type="submit" className={cx('form__submit')}>메세지 보내기</button>
    </form>
  );
}