import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import Image from "next/image";
import Form from "@/components/common/Form/Form";
import Heading from "@/components/common/Heading/Heading";
import Link from "next/link";

const cx = classNames.bind(styles);

export default function Contact() {
  return (
    <section id="contact" className={cx("contact", "ly-section")}>
      <div className={cx("ly-main", "grid__wrapper")}>
        <div className={cx("profile", "grid")}>
          <h3 className={cx("sc-only")}>profile</h3>
          <div className={cx("profile__inner")}>
            <div className={cx("profile__img")}>
              <Image
                src="/images/img_user.png"
                alt="user"
                width={100}
                height={100}
              />
            </div>
            <div className={cx("profile__main")}>
              <p className={cx("profile__badge ", "badge", "badge--orange")}>
                FRONTEND DEVELOPER
              </p>
              <h4 className={cx("profile__name")}>최하혜</h4>
            </div>
          </div>
          <div className={cx("profile__desc")}>
            <p>기본에 충실하되 유연한 사고를 가지고</p>
            <p>업무에 임하고자 합니다.</p>
            <p>함께 작업하고 싶거나 궁금한 점이 있으면</p>
            <p>언제든지 메세지 남겨주세요.</p>
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
                  src="/images/icons/icon_mail.png"
                  alt="메일주소"
                  width={16}
                  height={16}
                />
              </span>
              {/* <a href="mailto:coolage512@gmail.com"> */}
              coolage512@gmail.com
              {/* </a> */}
            </li>
          </ul>
          <div className={cx("profile__btn--wrapper")}>
            <Link
              href="https://github.com/coolage21"
              target="_blank"
              className={cx("btn ", "btn--icon", "btn--small", "btn--orange")}
            >
              <Image
                src="/images/icon_github.png"
                alt=""
                width={16}
                height={16}
              ></Image>
              Github
            </Link>
            <Link
              href="https://app.notion.com/p/3db281c7620b801994eec12989bcabd2"
              className={cx("btn", "btn--icon", "btn--small", "btn--orange")}
              target="_blank"
            >
              <Image
                src="/images/icon_notion.png"
                alt=""
                width={16}
                height={16}
              ></Image>
              Notion 공부 기록
            </Link>
          </div>
        </div>
        <div className={cx("contact__message", "grid--lg")}>
          <Heading title="CONTACT" />
          <Form />
        </div>
      </div>
    </section>
  );
}
