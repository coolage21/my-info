import { useTranslations } from "next-intl";
import classNames from "classnames/bind";
import styles from "./Introduction.module.scss";

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
      <h2 className="sc-only">Introduction</h2>
      <div>
        <h2 className={cx("introduction__ttl")}>
          <span className={cx("introduction__ttl-inner")}>
            {/* {t("title")} */}
            <b> 탄탄한 구조</b> 위에
          </span>
          <span className={cx("introduction__ttl-inner")}>
            <b>완성도</b>를 쌓아가는,
          </span>
          <span className={cx("introduction__ttl-inner")}>웹 퍼블리셔</span>
        </h2>
        <div className={cx("introduction__about")}>
          <p>유지보수를 고려한 컴포넌트 설계를 지향하며, </p>
          <p>
            구조화된 마크업에서 즐거움을 찾는 <br className="m-block" />
            <b>웹 퍼블리셔 최하혜</b>입니다.
          </p>
        </div>
      </div>
      <div className={cx("introduction__desc")}>
        <p>
          저는 <span>{getCareerMonth()[0]}</span>
          <span>{getCareerMonth()[1]}</span>개월간
        </p>
        <p>
          <span>1</span>
          <span>2</span>
          개의 프로젝트에 참여하였으며
        </p>
        <p>
          <span>5</span>개의 Vue.js 기반 프로젝트에 투입되었습니다.
        </p>
      </div>
    </section>
  );
}
