import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import Image from "next/image";

const cx = classNames.bind(styles);

export default function Contact() {
  return (
    <section id="contact" className={cx("contact", "ly-main", "ly-section")}>
      <div className={cx("contact__inner")}>
        <h2 className={cx("sc-only")}>contact</h2>
        <div className={cx("contact__txt")}>
          <p>기본에 충실하되 유연한 사고를 가지고</p>
          <p>업무에 임하고자 합니다.</p>
          <p>함께 작업하고 싶거나 궁금한 점이 있으시면</p>
          <p>언제든지 연락주세요.</p>
        </div>
        <div className={cx("profile")}>
          <h3 className={cx("sc-only")}>profile</h3>
          <div className={cx("profile__main")}>
            <h4 className={cx("profile__name")}>최하혜</h4>
            <p className={cx("profile__job")}>| 웹퍼블리셔, 프론트엔드개발자</p>
          </div>
          <ul className={cx("profile__conts")}>
            <li className={cx("profile__cont")}>
              <span>
                <Image
                  src="/images/icon_phone.png"
                  alt="전화번호"
                  width={16}
                  height={16}
                />
              </span>
              <b>010-5914-0214</b>
            </li>
            <li className={cx("profile__cont")}>
              <span>
                <Image
                  src="/images/icon_global.png"
                  alt="홈페이지 주소"
                  width={16}
                  height={16}
                />
              </span>
              <b>www.choihh.com</b>
            </li>
            <li className={cx("profile__cont")}>
              <span>
                <Image
                  src="/images/icon_mail.png"
                  alt="메일주소"
                  width={16}
                  height={16}
                />
              </span>
              <a href="mailto:chlgkgp006@naver.com">chlgkgp006@naver.com</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
