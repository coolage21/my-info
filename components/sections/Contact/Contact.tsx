import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import Image from "next/image";
import Form from "@/components/common/Form/Form"
const cx = classNames.bind(styles);

export default function Contact() {
  return (
    <section id="contact" className={cx("contact", "ly-main", "ly-section")}>
      <div className={cx("contact__inner")}>
        <h2 className={cx("sc-only")}>contact</h2>
        <div className={cx("contact__txt")}>
          <p>기본에 충실하되 유연한 사고를 가지고</p>
          <p>업무에 임하고자 합니다.</p>
          <p>함께 작업하고 싶거나 궁금한 점이 있으면</p>
          <p>언제든지 연락주세요.</p>
          <Form/>
        </div>
        <div className={cx("profile")}>
          <h3 className={cx("sc-only")}>profile</h3>
          <div className={cx("profile__main")}>
            <h4 className={cx("profile__name")}>최하혜</h4>
            <p className={cx("profile__job")}>웹 퍼블리셔 | UI개발자</p>
          </div>
          <ul className={cx("profile__conts")}>
            <li className={cx("profile__cont")}>
              <span className={cx("icon--black__wrapper")}>
                <Image
                  className={cx("icon--black")}
                  src="/images/icons/icon_phone.png"
                  alt="전화번호"
                  width={16}
                  height={16}
                />
              </span>
              <em>010-5914-0214</em>
            </li>
            <li className={cx("profile__cont")}>
              <span className={cx("icon--black__wrapper")}>
                <Image
                  className={cx("icon--black")}
                  src="/images/icons/icon_global.png"
                  alt="깃허브"
                  width={16}
                  height={16}
                />
              </span>
              <a href="https://github.com/coolage21">Github 바로가기</a>
            </li>
            <li className={cx("profile__cont")}>
              <span className={cx("icon--black__wrapper")}>
                <Image
                  className={cx("icon--black")}
                  src="/images/icons/icon_mail.png"
                  alt="메일주소"
                  width={16}
                  height={16}
                />
              </span>
              <a href="mailto:coolage512@gmail.com">coolage512@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
