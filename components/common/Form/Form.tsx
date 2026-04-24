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
    <form onSubmit={handleSubmit}   className={cx('form')}>
      <p>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
      </p>
      <p>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
        />
      </p>
      <p>
        <label htmlFor="message">내용</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="내용"
        />
      </p>
      <button type="submit">보내기</button>
    </form>
  );
}