import { useTranslations } from "next-intl";
import classNames from "classnames/bind";
import styles from "./Introduction.module.scss";

const cx = classNames.bind(styles);

export default function Introduction() {
  const t = useTranslations("HomePage");

  return (
    <section id="introduction" className={cx("introduction", "ly-main")}>
      Introduction
      {t("title")}
      탄탄한 구조 위에 완성도를 쌓아가는, 웹 퍼블리셔
      <p>
        유지보수를 고려한 컴포넌트 설계를 지향하며, 구조화된 마크업에서 즐거움을
        찾는 웹 퍼블리셔 최하혜입니다.
      </p>
      <div>
        <span>43개월간</span>
        <span>약 12개의 프로젝트에 참여하였으며</span>
        <span>그 중 5개의 vue.js기반 프로젝트에 투입되었습니다.</span>
      </div>
    </section>
  );
}
