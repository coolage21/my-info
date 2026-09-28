import { useTranslations } from "next-intl";
import classNames from "classnames/bind";
import styles from "./Introduction.module.scss";
import Link from "next/link";
import Image from "next/image";
const cx = classNames.bind(styles);

export function getCareerMonth() {
  const today = new Date();
  const start = new Date("2024-07-09");
  const before = 28;

  let month =
    (today.getFullYear() - start.getFullYear()) * 12 +
    (today.getMonth() - start.getMonth());
  if (today.getDate() < start.getDate()) {
    month = month - 1;
  }

  return String(month + before);
}

export default function Introduction() {
  const t = useTranslations("HomePage");

  return (
    <section
      id="introduction"
      className={cx("introduction", "ly-main", "ly-section")}
    >
      <div className={cx("introduction__inner")}>
        <div className={cx("introduction__badge")}>
          <span>WELCOME</span>
          I’M CODINGAGE, FRONTEND DEVELOPER
        </div>
        <h1 className={cx("introduction__ttl")}>
          안녕하세요
          <span className={cx("introduction__ttl-inner")}>
            프론트엔드 개발자 <br className={cx("m-block")} /> 최하혜입니다.
          </span>
        </h1>
        <div className={cx("introduction__about")}>
          유지보수를 고려한 컴포넌트 설계를 지향하며,&nbsp;
          <br className={cx("m-none")} />더 나은 구조가 무엇인지 고민하고
          구현하는데 즐거움을 찾습니다.
        </div>
        {/* <div className={cx("introduction__btn-wrapper")}>
          <Link href="" className={cx("btn--orange")}>
            <span>
              <img src="" alt="" />
            </span>
          </Link>
          <Link href="" className="btn--orange">
            <span>
              <img src="" alt="" />
            </span>
          </Link>
        </div> */}
        <div className={cx("introduction__btn--wrapper")}>
          <Link
            download
            href="/경력기술서_최하혜.pdf"
            className={cx("btn ", "btn--icon", "btn--small", "btn--orange")}
          >
            <Image
              src="/images/icon_document.png"
              alt=""
              width={20}
              height={20}
            ></Image>
            경력기술서
          </Link>
          <Link
            href="https://github.com/coolage21"
            className={cx("btn ", "btn--icon", "btn--small", "btn--orange")}
            target="_blank"
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
    </section>
  );
}
