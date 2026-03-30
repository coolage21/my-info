import { useTranslations } from "next-intl";
import classNames from "classnames/bind";
import styles from "./Introduction.module.scss";

const cx = classNames.bind(styles);

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
          <p>
            {/* {t("title")} */}
            <b> 탄탄한 구조</b> 위에
          </p>
          <p>
            <b>완성도</b>를 쌓아가는,
          </p>
          <p>웹 퍼블리셔</p>
        </h2>
        <div className={cx("introduction__about")}>
          <p>유지보수를 고려한 컴포넌트 설계를 지향하며, </p>
          <p>
            구조화된 마크업에서 즐거움을 찾는 <b>웹 퍼블리셔 최하혜</b>입니다.
          </p>
        </div>
      </div>
      <div className={cx("introduction__desc")}>
        <p>
          저는 <span>4</span>
          <span>7</span>개월간
        </p>
        <p>
          <span>1</span>
          <span>2</span>
          개의 프로젝트에 참여하였으며
        </p>
        <p>
          그 중 <span>5</span>개의 vue.js기반 프로젝트에 투입되었습니다.
        </p>
      </div>
    </section>
  );
}
